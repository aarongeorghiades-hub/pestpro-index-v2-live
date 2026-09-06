// THE SET OF UK PATHNAMES THE AWAAB'S LAW BANNER IS SCOPED TO — S66 R7.
//
// The banner is site-wide chrome and, until this round, rendered on 177 of 179 UK
// documents — every route except /_not-found and /_global-error. Law 130: shared
// chrome is a page-level claim on every route it renders on. A landlord damp-and-
// mould notice on /best/mole-traps is not a claim about mole traps; it is a claim
// this site makes to a reader who is not the audience for it.
//
// THE SCOPE RULE IS THE RENDERED TITLE, so this module derives the set from titles
// rather than from a list somebody maintains (Law 183 — the mechanism that keeps
// coming back is the list, and the remedy is measurement, not another entry).
//
// TWO SOURCES, BECAUSE THE ESTATE HAS TWO SHAPES, AND A SCAN OF ONE IS BLIND TO
// THE OTHER (Law 176). Static routes declare their title in a page.tsx; the blog
// is a single [slug] route whose titles live in a data module. A page.tsx scan
// alone would have missed the three matching /blog posts entirely.
//
// WHY NOT MATCH THE SLUG. Measured before this was written (Law 44): of the nine
// matching routes, TWO carry the terms only in the title and not in the path —
// /best/commercial-dehumidifiers ("for Landlords") and /guides/student-house-pest-
// guide ("Landlord Responsibilities"). A slug rule would silently drop both.
import fs from 'node:fs';
import path from 'node:path';
import { posts } from '@/app/(uk)/blog/data/posts';

const TERMS = /landlord|damp|mould|awaab/i;
const UK_ROOT = path.join(process.cwd(), 'app', '(uk)');

function pathnameFor(file: string): string {
  const rel = path.relative(UK_ROOT, path.dirname(file));
  const segments = rel
    .split(path.sep)
    .filter((s) => s && !(s.startsWith('(') && s.endsWith(')')));
  return '/' + segments.join('/');
}

function walk(dir: string, out: string[] = []): string[] {
  let entries: fs.Dirent[] = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // A dynamic segment has no title of its own; its titles come from data.
      if (e.name.startsWith('[')) continue;
      walk(full, out);
    } else if (e.name === 'page.tsx') {
      out.push(full);
    }
  }
  return out;
}

// The metadata title is the FIRST `title:` string literal in the file. Every UK
// page declares it that way, and the derived set is calibrated against the
// RENDERED titles of the built documents, so a file that broke this assumption
// would show up as a set difference rather than as a silent miss.
const FIRST_TITLE = /title:\s*(['"])((?:\\.|(?!\1).)*)\1/;

export function awaabBannerRoutes(): string[] {
  const found = new Set<string>();

  for (const file of walk(UK_ROOT)) {
    let src = '';
    try {
      src = fs.readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    const m = src.match(FIRST_TITLE);
    if (!m) continue;
    if (TERMS.test(m[2])) found.add(pathnameFor(file) || '/');
  }

  for (const post of posts) {
    if (TERMS.test(post.metaTitle) || TERMS.test(post.title)) {
      found.add(`/blog/${post.slug}`);
    }
  }

  return [...found].sort();
}
