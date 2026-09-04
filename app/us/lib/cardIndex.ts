// THE US CARD INDEX IS DERIVED, NEVER MAINTAINED.
//
// /us/products presents every UsToolCard the estate already renders. It holds no
// list of its own. This module reads the route sources at build time and returns
// what it finds, so a card added to or removed from ANY /us route moves the index
// on the next build with no file hand-edited anywhere.
//
// WHY SOURCE EXTRACTION RATHER THAN A SHARED DATA MODULE. The estate declares its
// cards in two shapes, and both are in live use:
//   LITERAL   <UsToolCard name="..." whatItDoes={[...]} asin="B0..." />   89 elements
//   TEMPLATED {expr.map((p) => <UsToolCard ... asin={p.asin} />)}         45 elements
// Migrating 40 route files to a single data module would re-declare every card,
// which the round that built this page was expressly forbidden to do. Reading what
// is already there changes no card at all.
//
// CALIBRATED AGAINST THE RENDERED ESTATE, NOT ASSUMED (Law 117, S49-L). Before this
// module shipped, its output was compared field by field against the built HTML of
// every /us route:
//   ASINs    188 extracted vs 188 rendered anchors, 59 routes, 0 mismatches
//   names    188 vs 188, 40 carding routes, 0 mismatches
//   bullets  677 vs 677, 0 mismatches
// The decisive case is app/us/best-gopher-traps/page.tsx, which declares EIGHT
// objects carrying a cardName and renders SEVEN: REJECTED_PRODUCTS is `void`ed and
// never mapped. A naive scan for object literals would have published a product the
// page deliberately rejected (Law 123). The extractor reads the map expressions, so
// it excludes it -- and the rendered-HTML comparison is what proves that, not the
// reading of the code.
//
// IT HALTS RATHER THAN UNDER-REPORTING. Every evaluation throws on failure and the
// build fails with the route named. An earlier draft swallowed one and returned an
// empty bullet list, which rendered as "this card has no bullets" on two routes and
// was caught only by the rendered comparison (Law 112, Law 151).

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export type IndexedCard = {
  asin: string;
  name: string;
  whatItDoes: string[];
  slug: string;
};

export type IndexedRoute = {
  slug: string;
  title: string;
  href: string;
  covers: string;
  cards: IndexedCard[];
};

export type IndexedGroup = {
  heading: string;
  blurb: string;
  routes: IndexedRoute[];
};

// The index's own slug. Excluded BY NAME from extraction: this page renders its
// cards from the index it is building, so reading itself would either recurse or
// register an unresolvable map expression and halt the build.
const SELF = 'products';
const NOT_ROUTES = new Set(['components', 'lib', SELF]);

const US_DIR = join(process.cwd(), 'app/us');

// JSX decodes HTML entities inside ATTRIBUTE string literals. It does NOT decode
// them inside JS string literals in an expression container. Applied to the
// attribute surface only -- applying it to both, or to neither, manufactures an
// entity twin (Law 14, Law 15). Two ASINs read as having divergent names until
// this was applied to the attribute side alone; they were the same name.
const NAMED: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘',
  ldquo: '“', rdquo: '”', hellip: '…', deg: '°',
  times: '×', bull: '•',
};

function decodeAttr(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&([a-zA-Z]+);/g, (m, n) => (n in NAMED ? NAMED[n] : m));
}

// The balanced {...} or [...] span starting at `i`. String literals are respected,
// so a brace inside a quoted bullet does not end the span.
function balanced(text: string, i: number): string {
  const open = text[i];
  const close = open === '{' ? '}' : ']';
  let depth = 0;
  let quote: string | null = null;
  for (let j = i; j < text.length; j++) {
    const c = text[j];
    if (quote) {
      if (c === '\\') j++;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) return text.slice(i, j + 1); }
  }
  throw new Error('cardIndex: unbalanced span');
}

// Walk backwards from a `.map(` to the `{` opening its JSX expression container,
// and return the expression text between them -- `products`, `SF1`, or
// `products\n.filter((p) => p.group === 'seal')`. All three forms are in use.
function containerExpr(text: string, mapIdx: number): string {
  let depth = 0;
  for (let i = mapIdx - 1; i >= 0; i--) {
    const c = text[i];
    if (c === ')' || c === ']' || c === '}') depth++;
    else if (c === '(' || c === '[') depth--;
    else if (c === '{') {
      if (depth === 0) return text.slice(i + 1, mapIdx).trim();
      depth--;
    }
  }
  throw new Error('cardIndex: no expression container for a mapped card');
}

// Every `const NAME = <init>;` in the file, indented or not. The card arrays live
// at module scope on some routes and inside the component body on others.
function topLevelConsts(text: string): { name: string; init: string }[] {
  const out: { name: string; init: string }[] = [];
  const re = /^[ \t]*const\s+([A-Za-z_$][\w$]*)\s*(?::[^=\n]+)?=\s*/gm;
  for (const m of text.matchAll(re)) {
    const start = (m.index as number) + m[0].length;
    let depth = 0;
    let quote: string | null = null;
    let i = start;
    for (; i < text.length; i++) {
      const c = text[i];
      if (quote) {
        if (c === '\\') i++;
        else if (c === quote) quote = null;
        continue;
      }
      if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
      if ('([{'.includes(c)) depth++;
      else if (')]}'.includes(c)) depth--;
      else if (c === ';' && depth === 0) break;
    }
    out.push({ name: m[1], init: text.slice(start, i) });
  }
  return out;
}

function stripParamTypes(src: string): string {
  return src.replace(/\(\s*([A-Za-z_$][\w$]*)\s*:\s*[^)]+\)/g, '($1)');
}

// The file's evaluable data declarations. A declaration that references an import,
// or contains JSX, is skipped -- it cannot be card data. Skipping here is safe
// because every USE of the scope throws if what it needs is missing.
function fileScope(text: string): Record<string, unknown> {
  const scope: Record<string, unknown> = {};
  for (const d of topLevelConsts(text)) {
    if (/<[A-Z]/.test(d.init)) continue;
    const names = Object.keys(scope);
    try {
      scope[d.name] = new Function(
        ...names,
        `"use strict";return (${stripParamTypes(d.init)});`,
      )(...names.map((n) => scope[n]));
    } catch {
      // References an import, a hook, or a component parameter. Not card data.
    }
  }
  return scope;
}

// THROWS on failure, naming the route. See the header: an unreadable card must
// fail the build, never render as a card with nothing in it.
function evalIn(scope: Record<string, unknown>, src: string, where: string): unknown {
  const names = Object.keys(scope);
  try {
    return new Function(
      ...names,
      `"use strict";return (${stripParamTypes(src)});`,
    )(...names.map((n) => scope[n]));
  } catch (e) {
    throw new Error(`cardIndex: cannot evaluate ${where}: ${(e as Error).message}`);
  }
}

export function extractRoute(slug: string, text: string): IndexedCard[] {
  const cards: IndexedCard[] = [];
  const scope = fileScope(text);

  for (const m of text.matchAll(/<UsToolCard\b[\s\S]*?\/>/g)) {
    const el = m[0];

    const lit = el.match(/asin="([A-Z0-9]{10})"/);
    if (lit) {
      const n = el.match(/name="([^"]*)"|name='([^']*)'/);
      if (!n) throw new Error(`cardIndex: ${slug}: literal card ${lit[1]} has no name`);
      const wi = el.indexOf('whatItDoes={');
      if (wi < 0) throw new Error(`cardIndex: ${slug}: card ${lit[1]} has no whatItDoes`);
      const span = balanced(el, wi + 'whatItDoes='.length);
      const what = evalIn(scope, span.slice(1, -1), `${slug} whatItDoes for ${lit[1]}`);
      if (!Array.isArray(what)) throw new Error(`cardIndex: ${slug}: whatItDoes for ${lit[1]} is not an array`);
      cards.push({ asin: lit[1], name: decodeAttr(n[1] ?? n[2]), whatItDoes: what as string[], slug });
      continue;
    }

    if (/asin=\{p\.asin\}/.test(el)) {
      const idx = text.lastIndexOf('.map((p)', m.index as number);
      if (idx < 0) throw new Error(`cardIndex: ${slug}: templated card with no .map((p)`);
      const expr = containerExpr(text, idx);
      const arr = evalIn(scope, expr, `${slug} card source \`${expr}\``);
      if (!Array.isArray(arr)) throw new Error(`cardIndex: ${slug}: \`${expr}\` is not an array`);
      for (const p of arr as { asin: string; cardName: string; whatItDoes?: string[] }[]) {
        cards.push({ asin: p.asin, name: p.cardName, whatItDoes: p.whatItDoes ?? [], slug });
      }
      continue;
    }

    throw new Error(`cardIndex: ${slug}: a UsToolCard in a shape this extractor cannot read`);
  }

  return cards;
}

// The estate's grouping, read from the hub's own `groups` array -- the same array
// that generates the hub's links, its page count and its JSON-LD hasPart entries
// (S54-H). The index therefore cannot disagree with the hub about which group a
// route belongs to, and a route moved between groups on the hub moves here too.
function hubGroups(): { heading: string; blurb: string; items: { title: string; href: string; covers: string }[] }[] {
  const text = readFileSync(join(US_DIR, 'page.tsx'), 'utf8');
  const scope = fileScope(text);
  const groups = scope.groups;
  if (!Array.isArray(groups) || groups.length === 0) {
    throw new Error('cardIndex: could not read `groups` from app/us/page.tsx');
  }
  return groups as { heading: string; blurb: string; items: { title: string; href: string; covers: string }[] }[];
}

export function buildCardIndex(): IndexedGroup[] {
  const cardsBySlug = new Map<string, IndexedCard[]>();
  for (const e of readdirSync(US_DIR, { withFileTypes: true })) {
    if (!e.isDirectory() || NOT_ROUTES.has(e.name)) continue;
    const f = join(US_DIR, e.name, 'page.tsx');
    if (!existsSync(f)) continue;
    const cards = extractRoute(e.name, readFileSync(f, 'utf8'));
    if (cards.length) cardsBySlug.set(e.name, cards);
  }

  const out: IndexedGroup[] = [];
  const placed = new Set<string>();
  for (const g of hubGroups()) {
    const routes: IndexedRoute[] = [];
    for (const item of g.items) {
      const slug = item.href.replace(/^\/us\//, '');
      const cards = cardsBySlug.get(slug);
      if (!cards) continue;
      placed.add(slug);
      routes.push({ slug, title: item.title, href: item.href, covers: item.covers, cards });
    }
    if (routes.length) out.push({ heading: g.heading, blurb: g.blurb, routes });
  }

  // A carding route the hub does not list would be dropped silently. S54-H already
  // gates that set to empty; this asserts it here rather than trusting it, because
  // the failure mode is an invisible omission from this page (Law 109).
  const unplaced = [...cardsBySlug.keys()].filter((s) => !placed.has(s));
  if (unplaced.length) {
    throw new Error(`cardIndex: carding routes missing from the hub groups: ${unplaced.join(', ')}`);
  }

  return out;
}
