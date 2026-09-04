#!/usr/bin/env node
// Compliance matchers for the US estate. THE single definition.
//
// Usage:  node scripts/gates.mjs --self-test
//         node scripts/gates.mjs ./.next/server/app/us/rats.html
//         node scripts/gates.mjs https://pestproindex.com/us/rats
//         node scripts/gates.mjs --estate     (every built /us route + parity)
//
// WHY THIS FILE EXISTS: the matchers were being retyped as ad-hoc shell in
// every round report. Retyped matchers drift, and a drifted matcher reports a
// clean pass it did not earn. S60 R9 typed a `ListItem`-shaped matcher for the
// hub's hasPart entries; it returned zero against a hub carrying 51 of them,
// and that false zero survived into S61 R8 because the matcher lived in prose
// rather than in code. This file is the answer to that.
//
// S61 R9 CODIFICATION. Seven matchers that lived only in round reports — the
// parity pair, the tag audit, the disclosure audit, the Law 120 price window,
// the non-Latin scan and the quotation audit — are now here, alongside the
// ASIN extractor that lives operationally in scripts/amazon-availability/
// check.mjs.
//
// S63 R3, LAW 178: THIS COMMENT CARRIES NO COUNT, DELIBERATELY. It used to read
// "Fifteen matchers, zero uncodified" and was still saying fifteen against
// sixteen. A figure maintained by hand in a comment is not a measurement and
// drifts silently. Every count this file reports is now derived from MATCHERS
// at runtime; run `--self-test` to see them.
//
// FOUR RULES THIS FILE ENFORCES ON ITSELF:
//
// 1. EVERY MATCHER IS PROBE-TESTED ON EVERY INVOCATION. Each carries a positive
//    probe it MUST match and a negative probe it MUST NOT. A matcher that
//    cannot fire proves nothing when it reports zero, and a gate that cannot
//    fail is theatre. `--self-test` runs the probes and nothing else; every
//    other run refuses to report if any probe fails.
//
// 2. EVERY COUNT NAMES ITS SURFACE. The same document yields different, all
//    correct, counts depending on what you read. The RSC flight payload
//    restates every string on the page, so folding it into a prose count
//    double-counts. Each matcher declares its surface and the report prints it
//    beside the number.
//
// 3. A MATCHER THAT CANNOT FAIL IS DECLARED AS AN INVENTORY, NOT A GATE.
//    M13 and M14 are the only two. They are labelled INVENTORY everywhere they
//    print, and M13's output is candidates, never findings (S59-B).
//
// 4. NO SECOND COPY. Where a matcher also lives in another script, this file
//    asserts the two are still identical rather than trusting them to be.
//    See the check.mjs divergence assertion in selfTest().

import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import {
  DISCLOSURE_CURRENT,
  DISCLOSURE_SUPERSEDED,
  PRICE_DENIALS,
  CARD_LINK,
  QUOTE_SOURCE_FIXTURE,
  QUOTE_PRESENT,
  QUOTE_ALTERED,
  PAGE_WITH_UNVERIFIED_QUOTE,
  PAGE_WITH_VERIFIED_QUOTES,
  PAGE_WITH_SCARE_QUOTE,
  GRAPH_ROW_ORPHAN_IN,
  GRAPH_ROW_ORPHAN_OUT,
  GRAPH_ROW_ORPHAN_BOTH,
  GRAPH_ROW_LINKED,
  GRAPH_ROW_HUB,
  DIRENTS_WITH_ROUTES,
  DIRENTS_NON_ROUTES,
  ASIN_DECL_PRESENT,
  ASIN_DECL_ABSENT,
  US_SIDE_CLEAN,
  US_SIDE_DIRTY,
  UK_SIDE_CLEAN,
  UK_SIDE_DIRTY,
  LAW_HEADINGS_ALL_FORMS,
  LAW_REFERENCES_ONLY,
  QUOTE_SPAN_GENUINE,
  QUOTE_SPAN_JS_DELIMITERS,
  SET_PAIR_EQUAL,
  SET_PAIR_DIFFERENT,
  SET_PAIR_PREFIX_TRAP,
  BLOCK_BODY_HTTP_200,
  REAL_PAGE_WITH_TRIGGER_WORD,
  HTML_CARD_AFTER_PROSE,
  HTML_NO_CARD,
  CARD_COUNT_MAP,
  LINKS_TO_CARDING,
  LINKS_TO_BARE,
  CTA_PRESENT,
  CTA_FALSE_POSITIVES,
  CARD_BEFORE_PRECEDENCE,
  CARD_AFTER_PRECEDENCE,
  NO_PRECEDENCE_CONTENT,
  HEADING_IDENTIFICATION,
  HEADING_HARM,
  HEADING_EFFICACY,
  HEADING_LEGAL,
  HEADING_NOT_PRECEDENCE,
  HEADING_PLAIN,
} from './fixtures.mjs';
import { UK_CLASSES, UK_SPELLING_RE } from './ukspelling.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const US_TAG = 'pestproindex2-20';

// ---------------------------------------------------------------------------
// SURFACES
// ---------------------------------------------------------------------------

function decode(s) {
  const named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', pound: '£' };
  return s
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => (n.toLowerCase() in named ? named[n.toLowerCase()] : m));
}

// Card anchors are replaced by a sentinel BEFORE tags are stripped, so a
// prose-surface matcher can still measure distance to a card. Without this the
// href is an attribute and is gone by the time prose text exists, and no
// reader-facing proximity gate is possible at all.
const CARD_MARK = ' CARDLINK ';
const CARD_HREF_RE = /https:\/\/www\.amazon\.com\/dp\/([A-Z0-9]{10})\?tag=([a-z0-9-]+)/g;

function toProse(raw, { markCards = false } = {}) {
  let b = raw;
  if (markCards) b = b.replace(new RegExp(CARD_HREF_RE.source, 'g'), CARD_MARK);
  b = b
    .replace(/<head\b[\s\S]*?<\/head>/gi, '')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  // Block-level closers become hard breaks first, so a sentence-integrity
  // reader never splices two list items into one verbless sentence.
  b = b.replace(/<\/(p|li|h[1-6]|div|td|th|tr|section|blockquote|dt|dd)>/gi, '\n');
  return decode(b.replace(/<[^>]+>/g, ' ')).replace(/[ \t]+/g, ' ');
}

const SURFACES = {
  full: (raw) => raw,
  prose: (raw) => toProse(raw),
  proseCards: (raw) => toProse(raw, { markCards: true }),
};

// ---------------------------------------------------------------------------
// SHARED DEFINITIONS
// ---------------------------------------------------------------------------

const BANNED_STEMS = ['verif', 'trust', 'vett'];

// The banned-word gate matches STEMS, not the three literal words.
//
// The exact-word matcher that used to stand here — the \b(verified|...)\b form
// — IS REMOVED, not kept alongside, because keeping both means the weaker one
// can be the one someone reaches for. It returned 0 on "verifiable", on
// "verification", on "trustworthy" and on "unvetted", every one of which makes
// the same claim in our own voice that the ban exists to stop. Assertion A in
// selfTest() asserts exactly that difference so the removal cannot be undone.
const bannedRe = new RegExp(String.raw`\w*(?:${BANNED_STEMS.join('|')})\w*`, 'gi');

// Any codepoint outside ASCII. Written with \u escapes deliberately: a literal
// control-byte character class makes this whole file register as binary, which
// silently breaks plain `grep` over it — found the hard way this round.
const NON_ASCII_RE = /[^\u0000-\u007F]/g;

// A currency AMOUNT. Deliberately not the token "price" — see G6.
const MONEY_RE = /\$\s?\d|\b\d[\d,]*(?:\.\d{2})?\s?(?:dollars|USD)\b/gi;

// The ASIN extractor. This is the SAME expression scripts/amazon-availability/
// check.mjs uses; assertion C in selfTest() asserts the two have not drifted.
const ASIN_RX_SOURCE = String.raw`asin=["']([A-Z0-9]{10})["']|asin:\s*["']([A-Z0-9]{10})["']`;

// US route clusters. A cross-cluster leak is a link from a page in one cluster
// to a page in another. Membership is what makes "cross" meaningful; without it
// the matcher fires on a page linking to its own siblings, and on a page
// linking to itself.
//
// MEMBERSHIP IS A SET, NOT A SINGLE VALUE — S62 R4 PM RULING. `cluster-flies`
// belongs to TWO clusters and always did: the overwintering invaders it shares a
// header nav with, and the fly family headed by /us/flies. The old model let a
// slug hold exactly one cluster, so whichever one it was put in, the links to
// the other read as leaks. That is what left G7 stuck at two failures from
// S61 R9 to S62 R3 with the question referred and unruled.
//
// MEASURED BEFORE CHOOSING THIS SHAPE (Law 44). /us/cluster-flies links to all
// five overwintering siblings AND to /us/flies and /us/fruit-flies, and all five
// overwintering pages link back to it. MOVING the slug into the fly cluster
// would therefore not have fixed anything — it converts 2 failing routes into 6,
// trading the fly leaks for ten overwintering ones. Only set membership closes it.
//
// THIS IS THE GENERAL MECHANISM, NOT A TWO-ROUTE EXCEPTION. Any slug may appear
// in any number of cluster lists; two pages are siblings when their cluster sets
// intersect. A future bridge page is defined the same way, by being listed twice.
const CLUSTERS = {
  joro: ['joro-spider', 'joro-spider-webs', 'joro-spider-range', 'are-joro-spiders-dangerous'],
  overwintering: [
    'stink-bugs-in-house',
    'how-to-get-rid-of-stink-bugs',
    'best-stink-bug-traps',
    'boxelder-bugs',
    'asian-lady-beetles',
    'cluster-flies',
  ],
  // /us/flies is the general head; cluster flies and fruit flies are the two
  // specific children a reader arrives at having identified the wrong fly.
  // S62 R5: fungus gnats join the fly cluster. Readers arrive at it having
  // decided they have fruit flies, which is the same wrong-fly path the cluster
  // already exists to serve.
  flies: ['flies', 'cluster-flies', 'fruit-flies', 'fungus-gnats'],
  // S62 R6. The three arachnids whose venom the sources treat as a medical
  // question. THIS IS NOT A "SPIDERS (GENERAL)" GROUPING AND DOES NOT REOPEN
  // LAW 158: no general head is created or implied, the scorpion is not a
  // spider, and the four Joro routes keep their own cluster untouched. What
  // these three share is that every source routes a bite or sting to medical
  // care rather than to a product.
  venomous: ['black-widow-spiders', 'brown-recluse-spiders', 'arizona-bark-scorpions'],
  // S62 R6. The two commensal rodents, which readers routinely mix up and whose
  // trap sizes, bait quantities and exclusion gaps all differ.
  rodents: ['house-mice', 'rats'],
  // S62 R5. The three moisture-and-harborage pages. They share no subject — the
  // earwig page carries zero silverfish content and vice versa — but they share
  // a root cause and a remedy, and a reader who has misidentified one of them is
  // looking for another. /us/silverfish also sits in a SECOND natural grouping,
  // the fabric-pest family it shares a header nav with, which is not declared as
  // a cluster; set membership (Law 172) means declaring this one does not
  // disturb that.
  // S63 R1: house centipedes join it. The intersection is not thematic but
  // sourced — Penn State names silverfish and firebrats among the prey, so one
  // member of this cluster eats another, and all four are found in the same
  // damp basements for the same reason.
  // S63 R1: millipedes join it. Colorado State publishes them in the SAME fact
  // sheet as centipedes for the same reason — both are moisture-dependent and
  // both die indoors as the air dries. They are deliberately NOT in
  // `overwintering`, whose members winter indoors on purpose.
  // S63 R2: sowbugs and pillbugs join it. Colorado State publishes all three of
  // millipedes, centipedes and sowbugs in ONE fact sheet, and states that the
  // controls effective for the first two are also effective for these — which is
  // a sourced intersection rather than a thematic one.
  moisture: [
    'silverfish',
    'camel-crickets',
    'earwigs',
    'house-centipedes',
    'millipedes',
    'sowbugs-pillbugs',
  ],
  // S62 R5. Declared once G7 became DIRECTIONAL — under the pre-R5 rule this
  // declaration would have newly failed two legitimate inbound links, which is
  // why S62 R4 measured it, declined to declare it, and referred the question.
  wood: ['termites', 'formosan-termites', 'carpenter-bees', 'powderpost-beetles'],
};
const clustersOf = (slug) => Object.keys(CLUSTERS).filter((c) => CLUSTERS[c].includes(slug));
const shareCluster = (a, b) => clustersOf(a).some((c) => clustersOf(b).includes(c));

// THE QUOTATION-SPAN EXTRACTOR — S62 R6, and it is shared so it cannot drift.
//
// Pairs each &ldquo; with the LAST &rdquo; before the next &ldquo;, because a
// source's own inches mark inside a quotation ("the top 12&rdquo; left loose",
// /us/groundhogs) makes a non-greedy match split the span in the wrong place.
//
// STRIPS NESTED JSX TAGS. Without that step a quotation carrying an <em> around
// a binomial -- "slightly larger than the common house fly, <em>Musca
// domestica</em>" -- can never match its source, and the S62 R6 calibration run
// produced exactly that false positive on four routes before the strip was
// added (Law 151: a false result from a stripper is a stripper bug until a
// known positive re-proves it).
function quoteSpans(text) {
  const op = [...text.matchAll(/&ldquo;/g)].map((m) => m.index);
  const cl = [...text.matchAll(/&rdquo;/g)].map((m) => m.index);
  const out = [];
  for (let k = 0; k < op.length; k++) {
    const o = op[k];
    const next = k + 1 < op.length ? op[k + 1] : text.length;
    const inner = cl.filter((c) => c > o && c < next);
    if (!inner.length) continue;
    const raw = text
      .slice(o + 7, Math.max(...inner))
      .replace(/<[^>]+>/g, '')
      .replace(/\{[^}]*\}/g, '');
    const q = decodeEntities(raw).replace(/\s+/g, ' ').trim();
    if (q) out.push(q);
  }
  return out;
}
const decodeEntities = (t) =>
  t
    .replace(/&ldquo;/g, '\u201c')
    .replace(/&rdquo;/g, '\u201d')
    .replace(/&rsquo;/g, '\u2019')
    .replace(/&lsquo;/g, '\u2018')
    .replace(/&mdash;/g, '\u2014')
    .replace(/&ndash;/g, '\u2013')
    .replace(/&deg;/g, '\u00b0')
    .replace(/&frac12;/g, '\u00bd')
    .replace(/&hellip;/g, '\u2026')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');

// VISIBLE BODY EXTRACTION — S63 R5. A FUNCTION, NOT A MATCHER (S63 R8).
//
// ORDER IS THE RULE, not an implementation detail. <script> goes FIRST because a
// Next <script> block carries the RSC flight payload, which restates every
// string on the page; stripping tags before scripts double-counts the whole
// document. <style> and HTML comments go with it for the same reason.
//
// M24 IS RETIRED AND MUST NOT BE RE-REGISTERED. It wrapped this function in a
// registry entry named "Visible body text: scripts, styles and comments removed
// BEFORE tags" and returned the extracted text as a one-element array. It was
// structurally dead -- it declared surface `visible-body`, which runDocument()
// never builds -- and MEASURED AT S63 R8 IT WAS DEAD IN BOTH DIRECTIONS:
//
//   as shipped   INV(0) on all 61 built routes, 62 of 62 calls given `undefined`
//   as repaired  INV(1) on all 61 built routes, and no live negative exists
//
// A one-element array is a count that can only be 1 on any page carrying prose,
// and every route on the estate carries prose. That is a check that cannot fail
// (Law 167) reporting a number nothing computed against (Law 178), and its
// INV(0) read as a clean result for two rounds. IT IS AN EXTRACTOR, AND AN
// EXTRACTOR IS A HELPER. It stays codified here under Law 166 -- one definition,
// no second copy -- and M25 calls it for both limbs of its percentage so the
// numerator and denominator cannot drift apart.
//
// IT IS NOT A DUPLICATE OF SURFACES.prose, and that was measured before the
// retirement rather than assumed: the two disagree on all 61 routes, by 28 to
// 2,456 characters (toProse strips <head> and keeps hard line breaks; this does
// neither). Deleting it would have left M25 with no extractor.
function visibleBody(t) {
  const stripped = (t ?? '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');
  return decodeEntities(stripped.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

// An internal /us link, in EITHER form the estate actually uses. Group 1 is the
// site-relative form, group 2 the absolute one; callers read `m[1] ?? m[2]`.
const INTERNAL_LINK_RE = /href="\/us\/([a-z0-9-]+)"|href="https:\/\/pestproindex\.com\/us\/([a-z0-9-]+)"/gi;

const all = (re, s) => [...s.matchAll(new RegExp(re.source, re.flags))];
const hitStrings = (re, s) => all(re, s).map((m) => m[0]);

// Hits of `re` falling within `win` characters of any occurrence of `markRe`.
function near(text, markRe, re, win) {
  const marks = all(markRe, text).map((m) => m.index);
  if (!marks.length) return [];
  return all(re, text)
    .filter((m) => marks.some((i) => Math.abs(i - m.index) <= win))
    .map((m) => m[0]);
}

// ---------------------------------------------------------------------------
// THE FIFTEEN MATCHERS
// ---------------------------------------------------------------------------
//
// kind:  'gate'      — a hit is a defect; zero is a pass
//        'expect'    — the verdict is owned by expect(), not by hit count
//        'inventory' — cannot fail by construction; reports counts only
//
// scope: 'document'  — runs against one rendered route
//        'estate'    — needs the manifest and/or the hub as well
//        'source'    — runs against .ts/.tsx source text
//        'external'  — runs against a fetched source body

const MATCHERS = [
  {
    id: 'G1',
    kind: 'expect',
    scope: 'document',
    surface: 'full',
    name: 'Canonical is self-referential and appears exactly once',
    test: (t) => all(/<link rel="canonical" href="([^"]+)"/gi, t).map((m) => m[1]),
    expect: (hits, { url } = {}) =>
      hits.length !== 1
        ? `expected exactly 1 canonical, found ${hits.length}`
        : url && hits[0] !== url
          ? `canonical ${hits[0]} != requested ${url}`
          : null,
    probePos: '<link rel="canonical" href="https://x/">',
    probeNeg: '<link rel="alternate" href="https://x/">',
    // S61 R8 flag 5: the self-test probed G1's regex but never expect(), which
    // is what actually owns the verdict. These probe expect() directly.
    expectProbes: [
      { doc: '<link rel="canonical" href="https://x/">', url: 'https://x/', wantProblem: false },
      { doc: '<link rel="canonical" href="https://y/">', url: 'https://x/', wantProblem: true },
      {
        doc: '<link rel="canonical" href="https://x/"><link rel="canonical" href="https://x/">',
        url: 'https://x/',
        wantProblem: true,
      },
      { doc: '<p>no canonical here</p>', url: 'https://x/', wantProblem: true },
    ],
  },
  {
    id: 'G2',
    kind: 'gate',
    scope: 'document',
    surface: 'full',
    name: 'No hreflang / alternate / x-default (single-locale estate)',
    test: (t) => hitStrings(/hreflang|rel="alternate"|x-default/gi, t),
    probePos: '<link rel="alternate" hreflang="en-gb">',
    probeNeg: '<link rel="canonical" href="/">',
  },
  {
    id: 'G3',
    kind: 'gate',
    scope: 'document',
    surface: 'full',
    name: 'No verif/trust/vett stem in our own voice',
    test: (t) => hitStrings(bannedRe, t),
    probePos: 'a verifiable and tru' + 'sted listing',
    probeNeg: 'a confirmed and reliable listing',
  },
  {
    id: 'G4',
    kind: 'gate',
    scope: 'document',
    surface: 'prose',
    name: 'No UK spellings on a US route (9 morphological classes)',
    // S62 R2: G4 WAS AN ENUMERATED LIST AND IS NOW A SET OF CLASSES. The list
    // form let "harbourage" ship on /us/camel-crickets at S62 R1 while G4
    // reported zero — the M8b failure, a matcher whose name is broader than its
    // body. The nine classes and every false-positive guard live in
    // scripts/ukspelling.mjs; each carries its own probePos and probeNeg and
    // ALL OF THEM RUN ON EVERY INVOCATION (see `classes` below and selfTest).
    test: (t) => hitStrings(UK_SPELLING_RE, t),
    classes: UK_CLASSES,
    probePos: 'the colour of the centre, and the licence behaviour of a neighbour',
    probeNeg: 'the color of the center, and every organism in it',
  },
  {
    id: 'G5',
    kind: 'gate',
    scope: 'document',
    surface: 'full',
    name: 'No UK affiliate tag, no amazon.co.uk, no GBP on a US route',
    test: (t) => hitStrings(/pestproindex2-21|amazon\.co\.uk|£/gi, t),
    probePos: 'tag=pestproindex2-21',
    probeNeg: 'tag=example-20',
  },
  {
    id: 'G6',
    kind: 'gate',
    scope: 'document',
    surface: 'proseCards',
    name: 'No price rendered adjacent to a card, in visible prose',
    // S61 R9 PM RULING. G6 used to match the token "price" on the prose
    // surface. That is a vocabulary, not a claim (Law 96): it fired on the
    // estate's own compliance sentences — "no price appears beside a card" —
    // failing a gate whose purpose those sentences serve. The class is now
    // stated as the ruling states it: A SENTENCE THAT DENIES A PRICE IS NOT A
    // PRICE. G6 detects a currency AMOUNT within 400 characters of a CARD, in
    // the text a reader actually sees.
    //
    // The card sentinel is why this reads `proseCards` and not `prose`.
    //
    // This is NOT a duplicate of M12. M12 reads served BYTES at plus/minus 800,
    // and so sees a price rendered into an attribute or into the RSC flight
    // payload that no reader ever reads. G6 reads what a reader reads. Two
    // surfaces, two windows, two populations (Law 62). Both can fail; neither
    // implies the other.
    test: (t) => near(t, new RegExp(CARD_MARK.trim(), 'g'), MONEY_RE, 400),
    probePos: 'Only $19.99 today.' + CARD_MARK + 'Buy it here.',
    probeNeg: [
      // The estate's own price-denial sentences, wired in permanently per the
      // ruling. If G6 ever fires on one of these again, G6 is wrong.
      ...PRICE_DENIALS.map((s) => s + CARD_MARK),
      // A category cost quoted far from any card is not a card-adjacent price.
      'Treatment can run $1,000 to $2,000 per the source.' + 'x'.repeat(500) + CARD_MARK,
      // A card with no money anywhere near it.
      'A reusable wooden snap trap.' + CARD_MARK + 'Twelve per pack.',
    ],
  },
  {
    id: 'G7',
    // ARMED AS A GATE AT S62 R6, after the routes it would have failed were fixed.
    //
    // ITS SUBJECT CHANGED. Until S62 R5 G7 counted cross-cluster links; the S62 R5
    // directionality ruling made every link case legitimate, so that class became
    // empty by construction and the matcher was reclassified an inventory under
    // Law 167. The ruling also named what G7 was actually FOR -- "orphans: a page
    // nothing links to, or a page linking nowhere" -- and THAT is what it now
    // tests. The cross-cluster count survives as an informational line in
    // runLinkGraph(), where it cannot be mistaken for a gate.
    //
    // TWO READINGS WERE RETIRED BY PM RULING AT S62 R6 BECAUSE NEITHER CAN FAIL:
    // "nothing links to it" COUNTING the hub (S54-H already gates every route
    // into the hub) and "no /us href of any kind" (the header nav always emits
    // one). Law 75 and Law 167: a check that can only pass is theatre.
    //
    // IT WAS NOT ARMED WHILE IT FAILED. At S62 R5 these readings returned 8 and 8
    // and the gate was deliberately left as an inventory rather than shipped red.
    kind: 'gate',
    scope: 'estate',
    surface: 'link-graph',
    name: 'No orphan route: every content route has a non-hub inbound link and an outbound link',
    test: (row) => {
      if (!row || row.slug === 'us') return []; // the hub is exempt by name
      const out = [];
      if (!row.inbound.length) out.push(`${row.slug}: no inbound link except the hub`);
      if (!row.outbound.length) out.push(`${row.slug}: no outbound link to another route`);
      return out;
    },
    // POSITIVE LIMB — three constructed rows, none of them an estate route.
    // Wrapped as { text } because the probe harness passes `p.text` to test();
    // the "text" here is a graph row object, not a string.
    probePos: [
      { text: GRAPH_ROW_ORPHAN_IN },
      { text: GRAPH_ROW_ORPHAN_OUT },
      { text: GRAPH_ROW_ORPHAN_BOTH },
    ],
    // NEGATIVE LIMB — a properly linked route, and the hub, which is exempt.
    probeNeg: [{ text: GRAPH_ROW_LINKED }, { text: GRAPH_ROW_HUB }],
  },
  {
    id: 'M8',
    kind: 'expect',
    scope: 'estate',
    surface: 'full',
    name: 'Hub JSON-LD hasPart entries (S54-H parity, third set)',
    // S61 R9 PM RULING: the ListItem-typed matcher is wrong, proven on disk
    // against a hub carrying 51 hasPart entries. The hub IS the known positive.
    // The wrong form is kept in assertion B below and asserted DEAD, so the
    // false zero cannot be reintroduced by retyping it from the S60 R9 report.
    test: (t) =>
      all(
        /"@type":"WebPage","name":"[^"]*","url":"https:\/\/(?:www\.)?pestproindex\.com(\/us\/[a-z0-9-]+)"/g,
        t,
      ).map((m) => m[1]),
    expect: (hits) => (hits.length ? null : 'hub carries zero hasPart entries'),
    probePos: '"@type":"WebPage","name":"Ants","url":"https://pestproindex.com/us/ants"',
    probeNeg: '"@type":"WebPage","name":"Ants","url":"https://example.com/uk/ants"',
  },
  {
    id: 'M9',
    kind: 'expect',
    scope: 'estate',
    surface: 'full',
    name: 'Hub rendered anchors to /us/* (S54-H parity, second set)',
    test: (t) => all(/<a[^>]+href="(\/us\/[a-z0-9-]+)"/g, t).map((m) => m[1]),
    expect: (hits) => (hits.length ? null : 'hub carries zero /us/* anchors'),
    probePos: '<a class="x" href="/us/ants">Ants</a>',
    probeNeg: '<a href="/uk/ants">Ants</a>',
  },
  {
    id: 'M10',
    kind: 'gate',
    scope: 'document',
    surface: 'full',
    name: `No amazon.com card link carrying a tag other than ${US_TAG}`,
    // Codified as a ZERO-GATE, not as the inventory matcher it used to be. A
    // count of 364 tagged links proves nothing on its own; what matters is that
    // none carries a different tag. The total is still printed beside it as
    // context, but the VERDICT is the zero.
    test: (t) =>
      all(CARD_HREF_RE, t)
        .filter((m) => m[2] !== US_TAG)
        .map((m) => m[0]),
    probePos: 'https://www.amazon.com/dp/B00NFRTVY6?tag=someoneelse-20',
    probeNeg: CARD_LINK,
  },
  {
    id: 'M11',
    kind: 'gate',
    scope: 'document',
    surface: 'full',
    name: 'S59-C: no superseded no-affiliate disclosure on a page carrying a tagged link',
    // The atomicity rule as a gate rather than as a count. Passing an affiliate
    // tag and replacing the disclosure are ONE change; a page carrying a tagged
    // link that still says the link is not a paid affiliate link is the exact
    // breach S59-C forbids. A page with NEITHER is not a breach, which is why
    // the probeNeg carries a bare superseded sentence with no card.
    test: (t) => {
      if (all(CARD_HREF_RE, t).length === 0) return [];
      return t.includes(DISCLOSURE_SUPERSEDED) ? [DISCLOSURE_SUPERSEDED] : [];
    },
    probePos: CARD_LINK + ' ' + DISCLOSURE_SUPERSEDED,
    probeNeg: [
      CARD_LINK + ' ' + DISCLOSURE_CURRENT,
      DISCLOSURE_SUPERSEDED, // no card on the page: not a breach
    ],
  },
  {
    id: 'M12',
    kind: 'gate',
    scope: 'document',
    surface: 'full',
    name: 'Law 120: no currency amount within 800 bytes of a card link (served bytes)',
    // The structural companion to G6. This one reads SERVED BYTES, so it sees a
    // price rendered into an attribute or into the RSC flight payload that the
    // prose surface strips and no reader ever sees. Window and surface are both
    // stated, because the count is meaningless without them (Law 62).
    test: (t) => near(t, CARD_HREF_RE, MONEY_RE, 800),
    probePos: '<p>Only $19.99</p>' + 'x'.repeat(700) + `<a href="${CARD_LINK}">buy</a>`,
    probeNeg: [
      '<p>a snap trap</p>' + `<a href="${CARD_LINK}">buy</a>`,
      '<p>$19.99</p>' + 'x'.repeat(900) + `<a href="${CARD_LINK}">buy</a>`,
    ],
  },
  {
    id: 'M13',
    kind: 'inventory',
    scope: 'document',
    surface: 'full',
    name: 'S59-B non-Latin codepoint scan (CANDIDATES, never findings)',
    // Declared INVENTORY, not a gate, and labelled as such everywhere it
    // prints. The estate legitimately carries 23 distinct non-ASCII codepoints
    // (typographic quotes, dashes, degree signs, section marks). Under S59-B a
    // non-Latin character is a CANDIDATE defect only; it becomes a finding only
    // once the source body has been read and shown not to carry it. This
    // matcher cannot make that determination and does not pretend to.
    test: (t) => hitStrings(NON_ASCII_RE, t),
    probePos: 'between 70º and 85°F',
    probeNeg: 'between 70 and 85 F',
  },
  {
    id: 'M14',
    kind: 'inventory',
    scope: 'source',
    surface: 'source',
    name: 'ASIN declarations in .ts/.tsx source (mirror of check.mjs ASIN_RX)',
    // TWO STATED BLIND SPOTS, asserted rather than assumed:
    //  - Law 82: it is silent on a surface that BUILDS its own /dp/ URL rather
    //    than passing an asin prop. The probeNeg asserts that silence so the
    //    limitation is visible instead of being met later as a false zero.
    //  - Law 141: check.mjs, where this expression operates, is hardcoded to
    //    amazon.co.uk and pestproindex2-21. Its verdicts rule on NO /us ASIN.
    test: (t) => all(new RegExp(ASIN_RX_SOURCE, 'g'), t).map((m) => m[1] || m[2]),
    probePos: `asin="B00NFRTVY6"  asin: 'B0BW9C4D3J'`,
    probeNeg: [
      `href="${CARD_LINK}"`, // Law 82 blind spot, asserted
      'the ASIN is B00NFRTVY6 on Amazon',
    ],
  },
  {
    id: 'M15',
    kind: 'gate',
    scope: 'external',
    surface: 'fetched-body',
    name: 'Law 164: a quotation must match its fetched source byte-for-byte',
    // Fires when a quotation is ABSENT from the source body. The negative probe
    // is a quotation that IS present; the positive probe is the same quotation
    // with one character changed, which is precisely the failure Law 164 exists
    // to catch and which a read-through audit misses.
    test: (quote, ctx = {}) => {
      const src = ctx.source ?? QUOTE_SOURCE_FIXTURE;
      return src.includes(quote) ? [] : [quote.slice(0, 60)];
    },
    probePos: QUOTE_ALTERED,
    probeNeg: QUOTE_PRESENT,
  },
  {
    id: 'M16',
    kind: 'gate',
    scope: 'source',
    surface: 'page-spans',
    name: 'Law 164 RELOCATED: every quotation span ON THE PAGE must match a fetched source',
    // WHY THIS EXISTS AND M15 IS NOT ENOUGH. M15 asks "does this quotation match
    // its source" and is only ever as good as the list it is handed. Between
    // S62 R3 and S62 R5 FIVE quotations reached live pages without ever entering
    // that list -- two on /us/groundhogs, one on /us/earwigs, two on
    // /us/fungus-gnats -- because the control verified a hand-maintained list
    // that the draft then diverged from. All five happened to pass when audited
    // afterwards; the next one need not.
    //
    // M16 ASKS IT THE OTHER WAY ROUND: extract every quotation span FROM THE
    // PAGE and require each to match. A quotation the drafter forgot to list
    // cannot escape, because the page is the input, not the list.
    //
    // A SPAN PRESENT ON THE PAGE AND ABSENT FROM EVERY SOURCE IS A FAILURE,
    // never a silent pass.
    test: (pageText, ctx = {}) => {
      const corpus = ctx.corpus ?? QUOTE_SOURCE_FIXTURE;
      const hay = corpus.replace(/\s+/g, ' ');
      const held = new Set(ctx.ownVoice ?? []);
      return quoteSpans(pageText).filter((q) => !held.has(q) && !hay.includes(q));
    },
    // POSITIVE LIMB: a page carrying a quotation that is in NO source. This is
    // the exact case that escaped five times and that M15 cannot see.
    probePos: PAGE_WITH_UNVERIFIED_QUOTE,
    probeNeg: [
      // every span on the page is in the corpus
      PAGE_WITH_VERIFIED_QUOTES,
      // a scare-quoted phrase in our own voice, held out by the caller
      { text: PAGE_WITH_SCARE_QUOTE, ctx: { ownVoice: ['top picks'] } },
    ],
  },
  // =========================================================================
  // S63 R3 — THE MACHINERY ROUND. Seven matchers codified: the four that
  // S63 R1 Task 0 ran as ad-hoc shell, and the three named false positives.
  // Every one is built from the RULE that defines what it detects, never from
  // a list of instances (Law 170), and every one carries its OWN probes.
  // =========================================================================
  {
    id: 'M17',
    kind: 'inventory',
    scope: 'source',
    surface: 'route-dirs',
    name: 'S54-H base 2: source-literal route derivation from app/us',
    // THE RULE: /us/<dir> is a route IF AND ONLY IF app/us/<dir>/page.tsx
    // exists. The ad-hoc shell form listed directories and subtracted
    // `components` BY NAME, which is an exclusion list — Law 170 forbids it and
    // it would silently admit any future non-route directory. Presence of the
    // page file is the whole rule; `components` fails it without being named.
    // Declared INVENTORY: it derives a set, it cannot fail (Law 167).
    test: (entries) => (entries ?? []).filter((e) => e.hasPageTsx).map((e) => e.name).sort(),
    probePos: [{ text: DIRENTS_WITH_ROUTES }],
    probeNeg: [{ text: DIRENTS_NON_ROUTES }],
  },
  {
    id: 'M18',
    kind: 'inventory',
    scope: 'source',
    surface: 'asin-decls',
    // Uses the SAME expression as M14 and check.mjs. Assertion C in selfTest()
    // already asserts those two have not drifted; this one shares the constant
    // rather than retyping it, so there is nothing new to drift.
    name: 'Estate ASIN declarations, occurrences and distinct (shares M14 expression)',
    test: (t) => all(new RegExp(ASIN_RX_SOURCE, 'g'), t ?? '').map((m) => m[1] ?? m[2]),
    probePos: ASIN_DECL_PRESENT,
    probeNeg: ASIN_DECL_ABSENT,
  },
  {
    id: 'M19',
    kind: 'gate',
    scope: 'document',
    surface: 'full',
    name: 'Affiliate cross-contamination: neither estate carries the other marketplace',
    // THE RULE: each side has ONE marketplace host and ONE tag. A defect is the
    // OTHER side's host or the OTHER side's tag appearing here. Written as a
    // rule over a side->(host,tag) map, so a third marketplace is covered by
    // adding a row rather than by editing the matcher (Law 170).
    //
    // ITS RUNNER READS FILES THROUGH fs, NEVER THROUGH A SHELL. The ad-hoc form
    // passed an unquoted file list to grep and the UK routes live under
    // `.next/server/app/(uk)/`; the parentheses broke the word and the sweep
    // returned a FALSE ZERO for the entire UK estate.
    test: (t, ctx = {}) => {
      const side = ctx.side ?? 'us';
      const SIDES = {
        us: { host: 'amazon.com', tag: 'pestproindex2-20' },
        uk: { host: 'amazon.co.uk', tag: 'pestproindex2-21' },
      };
      const mine = SIDES[side];
      if (!mine) return [`unknown estate side: ${side}`];
      const out = [];
      for (const [name, other] of Object.entries(SIDES)) {
        if (name === side) continue;
        // amazon.com is a substring of amazon.com.au etc; anchor on the /dp/ path
        const hostRe = new RegExp(`${other.host.replace(/\./g, '\\.')}/dp/`, 'g');
        if (side === 'us' ? /amazon\.co\.uk\/dp\//.test(t) : hostRe.test(t)) {
          out.push(`${side} page carries ${other.host} card link`);
        }
        if (t.includes(other.tag)) out.push(`${side} page carries ${name} tag ${other.tag}`);
      }
      return out;
    },
    probePos: [
      { text: US_SIDE_DIRTY, ctx: { side: 'us' } },
      { text: UK_SIDE_DIRTY, ctx: { side: 'uk' } },
    ],
    probeNeg: [
      { text: US_SIDE_CLEAN, ctx: { side: 'us' } },
      { text: UK_SIDE_CLEAN, ctx: { side: 'uk' } },
    ],
  },
  {
    id: 'M20',
    kind: 'inventory',
    scope: 'source',
    surface: 'claude-md',
    name: 'Law enumeration in CLAUDE.md, all four heading forms',
    // THE RULE, ESTABLISHED BY READING CLAUDE.md AT S63 R3 RATHER THAN ASSUMED.
    // A law is DECLARED in one of four forms, all four of which are present in
    // the file today:
    //   1  numbered-list        "157. A SEARCH-ENGINE SNIPPET..."
    //   2  bare at line start   "LAW 172 — CLUSTER MEMBERSHIP IS A SET."
    //   3  heading-prefixed     "### LAW 174 — G7 IS AN INVENTORY..."
    //   4  inside a section h2  "## S62 R2 — LAW 171: THE UK ESTATE IS BRITISH"
    // A `LAW n` token MID-SENTENCE is a REFERENCE and is not a declaration.
    // The S63 R1 scan anchored on form 2 alone and reported Law 174 ABSENT.
    test: (t) => {
      const found = new Set();
      for (const line of (t ?? '').split('\n')) {
        let m;
        // forms 2 and 3: LAW n at line start, optionally behind # markers
        if ((m = /^#{0,6}\s*LAW\s+(\d+)\b/.exec(line))) found.add(Number(m[1]));
        // form 4: announced inside a markdown section heading
        else if (/^#{1,6}\s/.test(line)) {
          for (const h of line.matchAll(/\bLAW\s+(\d+)\b/g)) found.add(Number(h[1]));
        }
        // form 1: numbered-list declaration
        else if ((m = /^\s{0,4}(\d{1,3})\.\s+\S/.exec(line))) found.add(Number(m[1]));
      }
      return [...found].sort((x, y) => x - y);
    },
    probePos: LAW_HEADINGS_ALL_FORMS,
    probeNeg: LAW_REFERENCES_ONLY,
  },
  {
    id: 'M21',
    kind: 'inventory',
    scope: 'source',
    surface: 'quotation-delimiters',
    name: 'FP-1: genuine quotation delimiters only; an ASCII quote is a JS delimiter',
    // THE RULE: a quotation is delimited by a QUOTATION MARK — the HTML
    // entities &ldquo;/&rdquo; or the curly characters themselves. In a .tsx
    // file the ASCII straight double quote delimits a JS STRING and is never a
    // quotation mark. Treating it as one was FP-1, recorded under Law 169 at
    // S61 R9 and uncodified until now.
    test: (t) => {
      const out = [];
      for (const m of (t ?? '').matchAll(/&ldquo;([\s\S]*?)&rdquo;|\u201c([\s\S]*?)\u201d/g)) {
        out.push((m[1] ?? m[2]).replace(/\s+/g, ' ').trim());
      }
      return out.filter(Boolean);
    },
    probePos: QUOTE_SPAN_GENUINE,
    probeNeg: QUOTE_SPAN_JS_DELIMITERS,
  },
  {
    id: 'M22',
    kind: 'gate',
    scope: 'source',
    surface: 'route-sets',
    name: 'FP-2: two route sets compared by exact membership, never by prefix',
    // THE RULE: symmetric difference over exact membership. A prefix or
    // startsWith comparison treats `rats` and `rats-and-mice` as related, which
    // was FP-2. The codified parity path never had this bug; the ad-hoc
    // both-bases comparison did. A hit is a defect: the two bases must agree.
    test: (pair) => {
      const A = new Set(pair?.a ?? []);
      const B = new Set(pair?.b ?? []);
      return [
        ...[...A].filter((x) => !B.has(x)).map((x) => `only in A: ${x}`),
        ...[...B].filter((x) => !A.has(x)).map((x) => `only in B: ${x}`),
      ].sort();
    },
    probePos: [
      { text: SET_PAIR_DIFFERENT },
      // THE FP-2 CASE: a prefix test calls this a match. Membership must not.
      { text: SET_PAIR_PREFIX_TRAP },
    ],
    probeNeg: [{ text: SET_PAIR_EQUAL }],
  },
  {
    id: 'M23',
    kind: 'gate',
    scope: 'external',
    surface: 'fetched-body',
    name: 'FP-3 / Law 177: a bot-block body is a block whatever the status code',
    // THE RULE, and Law 177 rests on it: a response is BLOCKED when its body
    // carries a block vendor's own signature or an explicit block phrase AND is
    // far too small to be a content page. A block-related WORD inside a large,
    // complete page is not a block — that was FP-3, which flagged a 53,939-byte
    // University of Arkansas fact sheet because its contact form said "captcha".
    //
    // THE SIZE CONDITION IS PART OF THE RULE, not a tuning knob: every real
    // block body measured on this estate has been under 8 KB (959, 961, 1,486,
    // 3,781, 5,853, 7,086) and every real fact sheet over 30 KB.
    test: (body, ctx = {}) => {
      const b = body ?? '';
      const SIG = /incapsula|request unsuccessful|access denied|attention required|cf-error/i;
      const SMALL = 8000;
      const out = [];
      if (SIG.test(b) && b.length < SMALL) out.push(`block signature in a ${b.length}-byte body`);
      if (ctx.status && ctx.status >= 400) out.push(`http ${ctx.status}`);
      return out;
    },
    probePos: [{ text: BLOCK_BODY_HTTP_200, ctx: { status: 200 } }],
    probeNeg: [{ text: REAL_PAGE_WITH_TRIGGER_WORD, ctx: { status: 200 } }],
  },
  // =========================================================================
  // S63 R5 — the four measurement steps S63 R4's conversion diagnostic ran as
  // ad-hoc code. The fifth, the card link, is CARD_HREF_RE and is REUSED rather
  // than re-implemented (this file's own rule 4: no second copy).
  // =========================================================================
  {
    id: 'M25',
    kind: 'inventory',
    scope: 'document',
    // SURFACE REPAIRED S63 R8. It declared `card-offset`, which runDocument()
    // never builds, so `views[m.surface]` was `undefined` on every call and this
    // matcher printed INV(0) on every route from the day it was codified --
    // measured at 62 of 62 invocations receiving `undefined`. It reads RAW HTML
    // because CARD_HREF_RE matches an href attribute, which does not survive
    // into the prose surface; the visible-character conversion is done inside
    // test() by visibleBody(). On the live estate it now fires on 41 routes and
    // is silent on 20.
    surface: 'full',
    name: 'First-card offset, measured in VISIBLE characters (the Law 66 measure)',
    // THE RULE: the position of the first card link within the VISIBLE text,
    // never within raw bytes. The positive fixture places a 5,000-byte script
    // block ahead of the card so the two cannot agree; a raw-byte
    // implementation moves the asserted value and the probe says so.
    test: (t) => {
      const m = CARD_HREF_RE.exec(t ?? '');
      CARD_HREF_RE.lastIndex = 0;
      if (!m) return [];
      const before = visibleBody((t ?? '').slice(0, m.index));
      const whole = visibleBody(t);
      return [{ offset: before.length, pct: Math.round((100 * before.length) / Math.max(whole.length, 1)) }];
    },
    // MEASURED ARTEFACT, DELIBERATELY NOT CHANGED THIS ROUND (Law 22). The slice
    // ends inside the anchor's own `<a href="` , which is an UNTERMINATED tag, so
    // the tag-strip regex leaves those 9 characters in the visible text and every
    // offset carries a constant +9. It is 0.02% of a typical offset and does not
    // move a percentage point, but it is a real overcount and it is named here
    // rather than silently corrected, because correcting it shifts every reported
    // offset and any figure compared against the S63 R5 threshold with it.
    report: (hits) => `first card at visible character ${hits[0].offset}, ${hits[0].pct}% through the visible body`,
    probePos: HTML_CARD_AFTER_PROSE,
    probeNeg: HTML_NO_CARD,
  },
  {
    id: 'M26',
    kind: 'inventory',
    scope: 'document',
    surface: 'full',
    name: 'Internal links to a route that carries at least one card',
    // THE RULE: the TARGET ROUTE'S MEASURED CARD COUNT decides, not its slug. No
    // `best-` prefix is consulted, so a topic route that gains a card is counted
    // without any matcher edit, and a `best-` route that carries none is not.
    test: (t, ctx = {}) => {
      const counts = ctx.cardCounts ?? CARD_COUNT_MAP;
      const self = ctx.slug ?? null;
      const out = new Set();
      for (const m of all(INTERNAL_LINK_RE, t ?? '')) {
        const tgt = m[1] ?? m[2];
        if (tgt === self) continue;
        if ((counts[tgt] ?? 0) > 0) out.add(tgt);
      }
      return [...out].sort();
    },
    probePos: LINKS_TO_CARDING,
    probeNeg: LINKS_TO_BARE,
  },
  {
    id: 'M27',
    kind: 'inventory',
    scope: 'document',
    surface: 'prose',
    name: 'Call to action in body prose: an imperative commercial instruction',
    // THE RULE: an imperative commercial instruction ADDRESSED TO THE READER.
    // Declared INVENTORY, not a gate: a call to action is not a defect, and
    // after S63 R5 every carding route is expected to carry one (Law 167).
    //
    // ITS NEGATIVE PROBE IS A RECORDED FAILURE. A looser first form flagged
    // EIGHTEEN routes at S63 R4 and every one was a false positive -- "dealing
    // with", "deals with", "a great deal", "shop against", "can buy one". All
    // five forms are in probeNeg, so that failure cannot recur in silence
    // (Law 170 corollary: sweep a class matcher against real prose first).
    classes: [
      { id: 'buy',    source: String.raw`(?:^|[.;!?]\s+)(?:Buy|Purchase|Order)\s+(?:it|one|yours|now|today)\b`, name: 'imperative purchase instruction',
        pos: ['Buy it now on Amazon.'], neg: ['would rather buy one than assemble a pan'] },
      { id: 'shop',   source: String.raw`\bshop\s+(?:for|now|our|the)\b`, name: 'imperative retail instruction',
        pos: ['shop for the best price'], neg: ['specific enough to shop against'] },
      { id: 'price',  source: String.raw`\b(?:check|see|compare)\s+(?:the\s+)?(?:current\s+|latest\s+|best\s+)?price`, name: 'go-and-check-the-price instruction',
        pos: ['Check the current price'], neg: ['the price a source publishes'] },
      { id: 'deal',   source: String.raw`\b(?:great\s+deal\s+on|deal\s+on\s+the|best\s+price\s+on|discount\s+code|save\s+\d+%)`, name: 'bargain or discount framing',
        pos: ['the best price on the trap'], neg: ['varies a great deal', 'it deals with egg sacs'] },
      { id: 'click',  source: String.raw`\b(?:click|tap)\s+(?:here|through|the\s+link|below)\b`, name: 'click/tap-through instruction',
        pos: ['Click here to see more'], neg: ['the link below is not paid'] },
      { id: 'pick',   source: String.raw`\bour\s+top\s+picks?\b`, name: '"our top picks" framing',
        pos: ['see our top picks'], neg: ['our picks are described mechanically'] },
      { id: 'yours',  source: String.raw`\bget\s+yours?\s+(?:here|now|today)\b`, name: '"get yours" framing',
        pos: ['get yours today'], neg: ['get your soil tested'] },
    ],
    test: (t) => {
      const out = [];
      for (const c of MATCHERS.find((m) => m.id === 'M27').classes) {
        for (const m of (t ?? '').matchAll(new RegExp(c.source, 'gim'))) out.push(`${c.id}: ${m[0].trim()}`);
      }
      return out;
    },
    probePos: CTA_PRESENT,
    probeNeg: CTA_FALSE_POSITIVES,
  },
  // =========================================================================
  // S63 R6 — THE PRECEDENCE RULE, in two parts with two different kinds.
  // =========================================================================
  {
    id: 'M28',
    kind: 'gate',
    scope: 'estate',
    surface: 'card-precedence',
    name: 'Precedence: a card never precedes identification, harm, efficacy-limit or legal content',
    // THE RULE, and it is a real gate because it has a real failing state: given
    // a route's first-card offset and the offset of the EARLIEST
    // precedence-bearing content on that page, the card must not come first.
    // A page carrying no such content cannot violate it.
    //
    // ITS INPUT IS AN ADJUDICATED OFFSET, NOT A GUESSED ONE. What counts as
    // precedence-bearing is established by READING the route (see M29 and
    // Law 115); this matcher checks the comparison, which is the half that can
    // be mechanised honestly.
    //
    // THE THRESHOLD YIELDS TO THIS RULE. Where obeying it pushes a first card
    // past the 28% placement threshold derived at S63 R5, the card goes late.
    // A page whose safety content runs long is allowed a late card.
    test: (row) => {
      if (!row || row.precedencePct == null) return [];
      return row.cardPct < row.precedencePct
        ? [`${row.slug}: card at ${row.cardPct}% precedes ${row.category} content at ${row.precedencePct}%`]
        : [];
    },
    probePos: [{ text: CARD_BEFORE_PRECEDENCE }],
    probeNeg: [{ text: CARD_AFTER_PRECEDENCE }, { text: NO_PRECEDENCE_CONTENT }],
  },
  {
    id: 'M29',
    kind: 'inventory',
    scope: 'source',
    surface: 'headings',
    name: 'Precedence-bearing section CANDIDATES, by category (CANDIDATES, never findings)',
    // DECLARED INVENTORY UNDER LAW 167, AND THE REASON IS LAW 115: a class
    // defined by MEANING cannot be settled by a string matcher. The
    // distinguishing signal is what a sentence is ABOUT. "House Flies Cannot
    // Bite" and "What Consumer Products Cannot Do" are the same construction in
    // different categories, and no lexical rule separates them.
    //
    // MEASURED AGAINST THE REAL ESTATE BEFORE THIS KIND WAS CHOSEN (the Law 170
    // corollary): identification 26 headings, harm 18, efficacy 38, legal 6 --
    // and the efficacy class alone carries at least five demonstrable false
    // positives, four of which are in its negative probes below. Adjudication is
    // by reading; this surfaces what to read.
    classes: [
      { id: 'identification', name: 'which pest is this',
        source: String.raw`\b(which|is it a|tell(?:ing)? .*apart|not a |identif\w*|what it is|species|lookalike)\b`,
        pos: ['Which Widow, and the Hourglass', 'Is It a Brown Recluse?'],
        neg: ['Where They Nest and How They Enter'] },
      { id: 'harm', name: 'bite, sting, venom or medical',
        source: String.raw`\b(bit(?:e|es|ing|ten)|stings?|stung|venom\w*|medical|rabies|allerg\w*|envenom\w*|first aid)\b`,
        pos: ['If You Think You Have Been Bitten', 'The Sting'],
        neg: ['Where They Nest and How They Enter'] },
      { id: 'efficacy', name: 'a product class is limited, or a professional is required',
        source: String.raw`\b(consumer products?|no product|nothing is named|call a professional|licensed applicator)\b`,
        pos: ['What Consumer Products Cannot Do', 'Insecticides, and Why Nothing Is Named Here'],
        // THE MEASURED FALSE POSITIVES. A broader "cannot|do not" form caught
        // every one of these and is deliberately not used.
        neg: ['They Do Not Dig', 'It Lives Indoors and Cannot Live Outside',
              'House Flies Cannot Bite. Some Other Flies Can',
              'How Long They Live: the Figures Do Not Agree'] },
      { id: 'legal', name: 'statute, permit or trapping law',
        source: String.raw`\b(legal|\blaw\b|permits?|statutes?|regulations?|protected species|quarantine|relocat\w*)\b`,
        pos: ['The Law Changes at the State Line', 'The Legal Position: Three States'],
        neg: ['Where They Nest and How They Enter'] },
    ],
    test: (t) => {
      const out = [];
      for (const c of MATCHERS.find((m) => m.id === 'M29').classes) {
        if (new RegExp(c.source, 'i').test(t ?? '')) out.push(c.id);
      }
      return out;
    },
    probePos: [HEADING_IDENTIFICATION, HEADING_HARM, HEADING_EFFICACY, HEADING_LEGAL],
    probeNeg: [HEADING_NOT_PRECEDENCE, HEADING_PLAIN],
  },
];

// ---------------------------------------------------------------------------
// SELF-TEST
// ---------------------------------------------------------------------------

const asProbeList = (p) =>
  (Array.isArray(p) ? p : [p]).map((x) => (typeof x === 'string' ? { text: x, ctx: undefined } : x));

async function selfTest() {
  let bad = 0;
  console.log('MATCHER PROBES — a matcher is not usable until both limbs behave.\n');
  console.log(
    `  ${'ID'.padEnd(5)}${'KIND'.padEnd(11)}${'POSITIVE'.padEnd(10)}${'NEGATIVE'.padEnd(13)}${'SURFACE'.padEnd(14)}NAME`,
  );
  for (const m of MATCHERS) {
    const posList = asProbeList(m.probePos);
    const negList = asProbeList(m.probeNeg);
    const pos = posList.every((p) => m.test(p.text, p.ctx ?? m.probeCtx).length > 0);
    const negHits = negList.filter((p) => m.test(p.text, p.ctx ?? m.probeCtx).length > 0);
    const ok = pos && negHits.length === 0;
    if (!ok) bad++;
    console.log(
      `  ${m.id.padEnd(5)}${m.kind.padEnd(11)}${(pos ? 'fires' : 'DEAD').padEnd(10)}` +
        `${(negHits.length ? `FIRES(${negHits.length})` : `silent/${negList.length}`).padEnd(13)}` +
        `${m.surface.padEnd(14)}${ok ? '' : 'UNUSABLE — '}${m.name}`,
    );
  }

  // --- per-class probes, for any matcher that declares classes (Law 166) -----
  //
  // A matcher built from morphological classes is only as good as its weakest
  // class, and an aggregate probe hides a dead one: G4's old single probePos
  // passed on every run while the gate could not see "harbour". Each class is
  // therefore probed on its own, positively and negatively, on every run.
  for (const m of MATCHERS.filter((x) => Array.isArray(x.classes))) {
    console.log(`\n  ${m.id} CLASS PROBES — ${m.classes.length} classes, each fired both ways:`);
    for (const c of m.classes) {
      const re = new RegExp(c.source, 'gi');
      const pos = c.pos.every((p) => new RegExp(c.source, 'gi').test(p));
      const firing = c.neg.filter((n) => new RegExp(c.source, 'gi').test(n));
      const ok = pos && firing.length === 0;
      if (!ok) bad++;
      console.log(
        `    ${c.id.padEnd(8)}${(pos ? 'fires' : 'DEAD').padEnd(8)}` +
          `${(firing.length ? `FIRES(${firing.length})` : `silent/${c.neg.length}`).padEnd(12)}` +
          `${ok ? '' : 'UNUSABLE — '}${c.name}`,
      );
      if (firing.length) for (const f of firing) console.log(`        false positive on: ${JSON.stringify(f)}`);
      void re;
    }
  }

  // --- extra assertions, each guarding a defect that actually happened -------

  // A. The removal of the exact-word banned matcher is asserted, not commented.
  const sample = 'independently verifiable, and tru' + 'stworthy';
  const stemHits = (sample.match(new RegExp(bannedRe.source, 'gi')) || []).length;
  const wordHits = /\b(verified|tru[s]ted|vetted)\b/i.test(sample) ? 1 : 0;
  console.log(`\n  A. STEM-vs-EXACT-WORD, on ${JSON.stringify(sample)}:`);
  console.log(`     stem matcher (the gate):      ${stemHits} hit(s)  -> ${stemHits ? 'catches it' : 'MISSES'}`);
  console.log(
    `     exact-word matcher (removed): ${wordHits} hit(s)  -> ${wordHits ? 'catches it' : 'MISSES — this is why it is gone'}`,
  );
  if (stemHits < 2 || wordHits !== 0) {
    console.log('     ASSERTION FAILED.');
    bad++;
  }

  // B. The S60 R9 false zero cannot be reintroduced: the wrong matcher must be
  //    DEAD on the same string the right one fires on.
  const WRONG_HASPART =
    /"@type":"ListItem"[^}]*"url":"https:\/\/(?:www\.)?pestproindex\.com(\/us\/[a-z0-9-]+)"/g;
  const m8 = MATCHERS.find((x) => x.id === 'M8');
  const known = '"@type":"WebPage","name":"Ants","url":"https://pestproindex.com/us/ants"';
  const rightN = m8.test(known).length;
  const wrongN = all(WRONG_HASPART, known).length;
  console.log('\n  B. hasPart matcher, on a known positive:');
  console.log(`     WebPage-typed (the matcher):  ${rightN} hit(s)  -> ${rightN ? 'catches it' : 'MISSES'}`);
  console.log(
    `     ListItem-typed (S60 R9 bug):  ${wrongN} hit(s)  -> ${wrongN ? 'catches it' : 'MISSES — the false zero, reproduced'}`,
  );
  if (rightN !== 1 || wrongN !== 0) {
    console.log('     ASSERTION FAILED.');
    bad++;
  }

  // C. No second copy: check.mjs must still carry this exact ASIN expression.
  let cm = '';
  try {
    cm = await readFile(join(ROOT, 'scripts/amazon-availability/check.mjs'), 'utf8');
  } catch {
    /* unreadable is reported below */
  }
  const drifted = cm ? !cm.includes(ASIN_RX_SOURCE) : false;
  console.log(
    `\n  C. check.mjs ASIN_RX divergence: ${cm ? (drifted ? 'DRIFTED' : 'identical') : 'check.mjs unreadable'}`,
  );
  if (drifted || !cm) {
    console.log('     ASSERTION FAILED: two copies of one matcher have diverged, or cannot be compared (Law 41).');
    bad++;
  }

  // D. G1's expect() is probed directly, not only its regex (S61 R8 flag 5).
  const g1 = MATCHERS.find((x) => x.id === 'G1');
  let g1bad = 0;
  for (const p of g1.expectProbes) {
    const got = g1.expect(g1.test(p.doc), { url: p.url }) !== null;
    if (got !== p.wantProblem) g1bad++;
  }
  console.log(`  D. G1 expect() probes: ${g1.expectProbes.length - g1bad}/${g1.expectProbes.length} behaved`);
  if (g1bad) {
    console.log('     ASSERTION FAILED.');
    bad++;
  }

  // E. M25 MEASURES VISIBLE CHARACTERS, NOT RAW BYTES — asserted, not commented.
  //
  // The M25 fixture places a 5,000-byte script block AHEAD of the card precisely
  // so a raw-byte measure and a visible-character measure cannot agree, and
  // until S63 R8 NOTHING ASSERTED IT. The probe loop above only checks that a
  // matcher fires; M25 returns one object either way, so a raw-byte
  // reimplementation would fire exactly as the correct one does and the probe
  // would pass. A fixture built to discriminate proves nothing until something
  // reads the value it discriminates on. Every figure below is derived at
  // runtime from the fixture and the matcher (Law 178).
  const m25 = MATCHERS.find((x) => x.id === 'M25');
  const rawIdx = new RegExp(CARD_HREF_RE.source, 'g').exec(HTML_CARD_AFTER_PROSE).index;
  const visIdx = m25.test(HTML_CARD_AFTER_PROSE)[0].offset;
  const skipped = (HTML_CARD_AFTER_PROSE.match(/<script>([\s\S]*?)<\/script>/) ?? [, ''])[1].length;
  const visibleMeasure = visIdx <= rawIdx - skipped;
  console.log('\n  E. M25 offset measure, against a fixture carrying a script block before the card:');
  console.log(`     raw byte offset of the card:  ${rawIdx}`);
  console.log(`     M25 reported offset:          ${visIdx}`);
  console.log(
    `     script bytes to be skipped:   ${skipped}  -> ${visibleMeasure ? 'VISIBLE measure confirmed' : 'RAW-BYTE measure — the Law 66 measure has been lost'}`,
  );
  if (!visibleMeasure) {
    console.log('     ASSERTION FAILED.');
    bad++;
  }

  return bad;
}

// ---------------------------------------------------------------------------
// RUNNERS
// ---------------------------------------------------------------------------

const slugOf = (p) => p.split('/').pop().replace(/\.html$/, '');

function runDocument(raw, { slug = null, url = null, label = '' } = {}) {
  const views = {
    full: SURFACES.full(raw),
    prose: SURFACES.prose(raw),
    proseCards: SURFACES.proseCards(raw),
  };
  const rows = [];
  let failed = 0;
  for (const m of MATCHERS.filter((x) => x.scope === 'document')) {
    const hits = m.test(views[m.surface], { slug, url });
    let problem = null;
    if (m.kind === 'expect') problem = m.expect(hits, { url });
    else if (m.kind === 'gate' && hits.length)
      problem = `${hits.length} hit(s): ${[...new Set(hits)].slice(0, 6).join(', ')}`;
    if (problem) failed++;
    rows.push({ id: m.id, kind: m.kind, surface: m.surface, name: m.name, hits, problem });
  }
  return { label, rows, failed, bytes: raw.length, prose: views.prose.length };
}

// THE ORPHAN MEASUREMENT — S62 R5, and it is an INVENTORY, not a gate.
//
// The S62 R5 ruling said what G7 exists to catch is "orphans: a page nothing
// links to, or a page linking nowhere". That is a property of the LINK GRAPH,
// not of one rendered document, so it lives here rather than in MATCHERS.
//
// IT IS DECLARED INVENTORY BECAUSE THE THRESHOLD HAS NOT BEEN RULED, AND
// BECAUSE THE TWO READINGS GIVE OPPOSITE ANSWERS. Measured at S62 R5 over 54
// content routes:
//
//   "nothing links to it", COUNTING the hub          0 routes
//   "nothing links to it", EXCLUDING the hub        10 routes
//   "links nowhere" (no outbound /us route link)    11 routes
//   "no /us href of any kind on the page"            0 routes
//
// The two readings that return 0 CANNOT FAIL: S54-H already gates every route
// into the hub, and the header nav always emits at least one /us href. Under
// Law 75 and Law 167 a check that can only pass is theatre. The two readings
// that CAN fail, fail on ten and eleven live routes RIGHT NOW -- so declaring
// either as a gate would have marked a fifth of the estate defective on a
// definition nobody has ruled.
//
// SO IT MEASURES AND NAMES, AND MAKES NO JUDGEMENT. Referred to the PM.
async function runLinkGraph() {
  const dir = join(ROOT, '.next/server/app/us');
  const files = [
    join(ROOT, '.next/server/app/us.html'),
    ...(await readdir(dir)).filter((f) => f.endsWith('.html')).sort().map((f) => join(dir, f)),
  ];
  const slugs = new Set(files.map(slugOf));
  const out = new Map();
  const inb = new Map();
  for (const f of files) {
    const me = slugOf(f);
    const raw = await readFile(f, 'utf8');
    // BOTH URL FORMS. S62 R6: the estate carries 8 internal links written as
    // ABSOLUTE urls (href="https://pestproindex.com/us/...") rather than as
    // site-relative paths. A matcher anchored on the relative form alone is
    // BLIND to them, and the S62 R5 run of this function reported 10 routes
    // with no inbound link and 11 with no outbound when the true figures were
    // 8 and 8 -- five route classifications wrong, every one a FALSE POSITIVE
    // that would have had a later round manufacture links the estate already
    // had. Law 82 in a new place: a matcher anchored on one surface form is
    // blind to the same fact expressed another way.
    for (const m of all(INTERNAL_LINK_RE, raw)) {
      const tgt = m[1] ?? m[2];
      if (!slugs.has(tgt) || tgt === me) continue;
      if (!out.has(me)) out.set(me, new Set());
      if (!inb.has(tgt)) inb.set(tgt, new Set());
      out.get(me).add(tgt);
      inb.get(tgt).add(me);
    }
  }
  const content = [...slugs].filter((x) => x !== 'us').sort();
  const noInboundWithHub = content.filter((r) => !(inb.get(r)?.size));
  const noInboundNoHub = content.filter(
    (r) => ![...(inb.get(r) ?? [])].some((x) => x !== 'us'),
  );
  const noOutbound = content.filter((r) => !(out.get(r)?.size));
  const rows = content.map((slug) => ({
    slug,
    inbound: [...(inb.get(slug) ?? [])].filter((x) => x !== 'us'),
    outbound: [...(out.get(slug) ?? [])],
  }));
  // Informational only: after the S62 R5 directionality ruling every link case
  // is legitimate, so this number can never indicate a defect.
  let crossCluster = 0;
  for (const r of rows) {
    for (const t of r.outbound) {
      if (clustersOf(r.slug).length && clustersOf(t).length && !shareCluster(r.slug, t)) crossCluster++;
    }
  }
  return { total: content.length, noInboundWithHub, noInboundNoHub, noOutbound, rows, crossCluster };
}

// THE ESTATE QUOTATION AUDIT — S62 R6. Runs M16 over every /us route file.
//
// IT CAN ONLY ADJUDICATE A ROUTE WHOSE FETCHED SOURCE BODIES ARE STILL ON DISK.
// The corpora live in ~/pp-s*/ and are per-round working directories, not a
// retained archive; most of the estate's were never kept. A route whose sources
// are gone produces unmatched spans that are NOT defects, and reporting them as
// such would manufacture a defect class out of a retention gap (Law 94).
//
// So this reports a PARTITION, not a verdict: routes fully matched, routes with
// no corpus at all, and routes in between. Only the first group is adjudicated.
async function runQuotationAudit() {
  const home = process.env.HOME ?? '';
  const dirs = [];
  try {
    for (const d of await readdir(home)) if (/^pp-s\d+r/.test(d)) dirs.push(join(home, d));
  } catch { /* no corpora reachable */ }
  const texts = [];
  for (const d of dirs) {
    let entries = [];
    try { entries = await readdir(d); } catch { continue; }
    for (const f of entries) {
      if (!f.endsWith('.txt')) continue;
      try { texts.push(await readFile(join(d, f), 'utf8')); } catch { /* skip */ }
    }
  }
  // Earlier sessions kept their fetched bodies in a single pack-and-fetch file
  // in $HOME rather than in a per-round directory. Those are corpora too, and
  // omitting them moved five routes from PARTIAL to NOT ADJUDICABLE on the
  // first run of this audit -- a false negative in the corpus loader, not in
  // the estate (Law 151).
  try {
    for (const f of await readdir(home)) {
      if (/^pestpro-.*fetch.*\.md$/.test(f)) {
        try { texts.push(await readFile(join(home, f), 'utf8')); } catch { /* skip */ }
      }
    }
  } catch { /* unreachable */ }
  const corpus = texts.join('\n\n');
  const M16 = MATCHERS.find((m) => m.id === 'M16');
  const dir = join(ROOT, 'app/us');
  const slugs = (await readdir(dir, { withFileTypes: true }))
    .filter((e) => e.isDirectory() && e.name !== 'components')
    .map((e) => e.name)
    .sort();
  const rows = [];
  for (const slug of slugs) {
    let text;
    try { text = await readFile(join(dir, slug, 'page.tsx'), 'utf8'); } catch { continue; }
    const spans = quoteSpans(text);
    const bad = M16.test(text, { corpus });
    rows.push({ slug, total: spans.length, unmatched: bad.length, bad });
  }
  return { corpusFiles: texts.length, corpusChars: corpus.length, rows };
}

async function runParity() {
  const man = JSON.parse(await readFile(join(ROOT, '.next/app-path-routes-manifest.json'), 'utf8'));
  const routes = new Set(
    Object.entries(man)
      .filter(([k, v]) => k.endsWith('/page') && v.startsWith('/us/'))
      .map(([, v]) => v),
  );
  const hub = await readFile(join(ROOT, '.next/server/app/us.html'), 'utf8');
  const M8 = MATCHERS.find((m) => m.id === 'M8');
  const M9 = MATCHERS.find((m) => m.id === 'M9');
  const hasPart = new Set(M8.test(hub));
  const anchors = new Set(M9.test(hub));
  const d = (a, b) => [...a].filter((x) => !b.has(x)).sort();
  return {
    routes: routes.size,
    anchors: anchors.size,
    hasPart: hasPart.size,
    unlinkedAnchors: d(routes, anchors),
    unlinkedHasPart: d(routes, hasPart),
    orphanAnchors: d(anchors, routes),
    orphanHasPart: d(hasPart, routes),
  };
}

async function runQuotationReport() {
  const a = await runQuotationAudit();
  const withQ = a.rows.filter((r) => r.total);
  const full = withQ.filter((r) => !r.unmatched);
  const zero = withQ.filter((r) => r.unmatched === r.total);
  const part = withQ.filter((r) => r.unmatched && r.unmatched < r.total);
  const noQ = a.rows.filter((r) => !r.total);
  const spans = withQ.reduce((n, r) => n + r.total, 0);
  const bad = withQ.reduce((n, r) => n + r.unmatched, 0);
  console.log(`\nESTATE QUOTATION AUDIT (M16) — ${a.rows.length} route files`);
  console.log(`  corpora reachable        ${a.corpusFiles} files, ${a.corpusChars.toLocaleString()} chars`);
  console.log(`  quotation spans          ${spans}`);
  console.log(`  spans matching a source  ${spans - bad}`);
  console.log(`  spans matching nothing   ${bad}   <-- NOT all defects; see partition`);
  console.log(`\n  ADJUDICATED CLEAN (every span matched): ${full.length}`);
  for (const r of full) console.log(`     ${r.slug.padEnd(34)}${r.total}/${r.total}`);
  console.log(`\n  NOT ADJUDICABLE — no span matched, corpus absent: ${zero.length}`);
  console.log(`     ${zero.map((r) => r.slug).join(', ') || 'none'}`);
  console.log(`\n  PARTIAL — some corpora present, some absent: ${part.length}`);
  for (const r of part) console.log(`     ${r.slug.padEnd(34)}${r.total - r.unmatched}/${r.total}`);
  console.log(`\n  NO QUOTATIONS AT ALL: ${noQ.length}`);
  console.log(`     ${noQ.map((r) => r.slug).join(', ') || 'none'}`);
  return 0;
}

// THE MACHINERY RE-MEASUREMENT — S63 R3.
//
// Runs the seven matchers codified this round against the real estate, so that
// every figure S63 R1 Task 0 produced by ad-hoc shell is reproducible from the
// registry. IT READS FILES THROUGH fs THROUGHOUT AND NEVER THROUGH A SHELL:
// the UK routes live under `.next/server/app/(uk)/` and passing that path
// unquoted to a shell word was the mechanism of the false zero.
async function runMachinery() {
  const M = (id) => MATCHERS.find((m) => m.id === id);

  // --- M17, source-literal route derivation --------------------------------
  const usDir = join(ROOT, 'app/us');
  const dirents = (await readdir(usDir, { withFileTypes: true })).filter((e) => e.isDirectory());
  const entries = [];
  for (const e of dirents) {
    let hasPageTsx = false;
    try {
      await readFile(join(usDir, e.name, 'page.tsx'), 'utf8');
      hasPageTsx = true;
    } catch { hasPageTsx = false; }
    entries.push({ name: e.name, hasPageTsx });
  }
  const base2 = M('M17').test(entries);

  // --- base 1, from the manifest (the S54-H authoritative matcher) ----------
  const man = JSON.parse(await readFile(join(ROOT, '.next/app-path-routes-manifest.json'), 'utf8'));
  const base1 = Object.entries(man)
    .filter(([k, v]) => k.endsWith('/page') && v.startsWith('/us/'))
    .map(([, v]) => v.replace('/us/', ''))
    .sort();

  // --- M22, compare the two bases by MEMBERSHIP ----------------------------
  const baseDiff = M('M22').test({ a: base1, b: base2 });

  // --- collect every rendered html, split by estate side -------------------
  const walk = async (dir) => {
    let out = [];
    let ents = [];
    try { ents = await readdir(dir, { withFileTypes: true }); } catch { return out; }
    for (const e of ents) {
      const full = join(dir, e.name);
      if (e.isDirectory()) out = out.concat(await walk(full));
      else if (e.name.endsWith('.html')) out.push(full);
    }
    return out;
  };
  const appDir = join(ROOT, '.next/server/app');
  const html = await walk(appDir);
  const usPrefix = join(appDir, 'us');
  const usHub = join(appDir, 'us.html');
  const isUs = (f) => f === usHub || f.startsWith(usPrefix + '/');

  // --- M19, cross-contamination, both sides --------------------------------
  const M19 = M('M19');
  const contamination = [];
  let usCardLinks = 0, usDisclosures = 0, ukCardLinks = 0;
  const ukAsins = new Set();
  const escaped = DISCLOSURE_CURRENT.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const f of html) {
    const raw = await readFile(f, 'utf8');
    const side = isUs(f) ? 'us' : 'uk';
    for (const hit of M19.test(raw, { side })) contamination.push(`${f.replace(ROOT + '/', '')}: ${hit}`);
    if (side === 'us') {
      usCardLinks += all(CARD_HREF_RE, raw).length;
      usDisclosures += (raw.match(new RegExp(escaped, 'g')) || []).length;
    } else {
      const uk = [...raw.matchAll(/amazon\.co\.uk\/dp\/([A-Z0-9]{10})/g)];
      ukCardLinks += uk.length;
      for (const m of uk) ukAsins.add(m[1]);
    }
  }

  // --- M18, ASIN declarations across app/us source -------------------------
  const M18 = M('M18');
  const asins = [];
  for (const e of entries.filter((x) => x.hasPageTsx)) {
    asins.push(...M18.test(await readFile(join(usDir, e.name, 'page.tsx'), 'utf8')));
  }
  for (const f of (await readdir(join(usDir, 'components'))).filter((x) => /\.tsx?$/.test(x))) {
    asins.push(...M18.test(await readFile(join(usDir, 'components', f), 'utf8')));
  }

  // --- M20, law enumeration ------------------------------------------------
  const laws = M('M20').test(await readFile(join(ROOT, 'CLAUDE.md'), 'utf8'));

  return {
    base1: base1.length, base2: base2.length, baseDiff,
    asinOccurrences: asins.length, asinDistinct: new Set(asins).size,
    usCardLinks, usDisclosures, ukCardLinks, ukAsinsDistinct: ukAsins.size,
    contamination, laws,
    htmlTotal: html.length, htmlUs: html.filter(isUs).length,
  };
}

async function runEstate() {
  const dir = join(ROOT, '.next/server/app/us');
  const files = [
    join(ROOT, '.next/server/app/us.html'),
    ...(await readdir(dir))
      .filter((f) => f.endsWith('.html'))
      .sort()
      .map((f) => join(dir, f)),
  ];
  console.log(`\nESTATE RUN — ${files.length} rendered routes\n`);
  const perMatcher = {};
  const failing = {};
  let totalCards = 0;
  let disclosures = 0;
  const nonAscii = new Map();
  const escaped = DISCLOSURE_CURRENT.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const f of files) {
    const raw = await readFile(f, 'utf8');
    const slug = slugOf(f);
    const r = runDocument(raw, { slug, label: slug });
    totalCards += all(CARD_HREF_RE, raw).length;
    disclosures += (raw.match(new RegExp(escaped, 'g')) || []).length;
    for (const row of r.rows) {
      perMatcher[row.id] = (perMatcher[row.id] || 0) + row.hits.length;
      if (row.problem) (failing[row.id] ||= []).push(slug);
      if (row.id === 'M13') for (const c of row.hits) nonAscii.set(c, (nonAscii.get(c) || 0) + 1);
    }
  }
  console.log(`  ${'ID'.padEnd(5)}${'KIND'.padEnd(11)}${'HITS'.padEnd(8)}${'FAILING'.padEnd(10)}NAME`);
  for (const m of MATCHERS.filter((x) => x.scope === 'document')) {
    const fr = failing[m.id] || [];
    console.log(
      `  ${m.id.padEnd(5)}${m.kind.padEnd(11)}${String(perMatcher[m.id] ?? 0).padEnd(8)}` +
        `${String(m.kind === 'inventory' ? 'n/a' : fr.length).padEnd(10)}${m.name}`,
    );
    if (fr.length) console.log(`        ${fr.join(', ')}`);
  }
  console.log(
    `\n  INVENTORY: ${totalCards} card links, ${disclosures} current disclosures, ${nonAscii.size} distinct non-ASCII codepoints`,
  );
  const p = await runParity();
  console.log(`\n  S54-H PARITY — routes ${p.routes} | hub anchors ${p.anchors} | hasPart ${p.hasPart}`);
  console.log(`    UNLINKED (not in anchors):       ${p.unlinkedAnchors.length ? p.unlinkedAnchors.join(', ') : 'none'}`);
  console.log(`    UNLINKED (not in hasPart):       ${p.unlinkedHasPart.length ? p.unlinkedHasPart.join(', ') : 'none'}`);
  console.log(`    ORPHAN   (anchor, not a route):  ${p.orphanAnchors.length ? p.orphanAnchors.join(', ') : 'none'}`);
  console.log(`    ORPHAN   (hasPart, not a route): ${p.orphanHasPart.length ? p.orphanHasPart.join(', ') : 'none'}`);
  const lg = await runLinkGraph();
  const G7 = MATCHERS.find((m) => m.id === 'G7');
  const orphanHits = lg.rows.flatMap((r) => G7.test(r));
  console.log(`\n  G7 — ORPHAN GATE (armed S62 R6) over ${lg.total} content routes`);
  console.log(`    no inbound, EXCLUDING the hub  : ${lg.noInboundNoHub.length}${lg.noInboundNoHub.length ? ' — ' + lg.noInboundNoHub.join(', ') : ''}`);
  console.log(`    no outbound /us route link     : ${lg.noOutbound.length}${lg.noOutbound.length ? ' — ' + lg.noOutbound.join(', ') : ''}`);
  console.log(`    G7 ${orphanHits.length ? `FAIL — ${orphanHits.length} finding(s)` : 'PASS'}`);
  // RETIRED AT S62 R6, and named rather than silently dropped: "nothing links to
  // it" counting the hub, and "no /us href of any kind". Both are structurally
  // zero -- S54-H gates every route into the hub and the header nav always emits
  // a /us href -- so neither can fail (Law 75, Law 167).
  console.log(`    retired readings (structurally unfailable): hub-inclusive inbound ${lg.noInboundWithHub.length}, any-href 0`);
  // The old cross-cluster count, kept as information only. Every link case is
  // legitimate after the S62 R5 directionality ruling, so this can never fail
  // and is never reported as a gate.
  console.log(`    cross-cluster links (informational, cannot fail): ${lg.crossCluster}`);
  const parityOk =
    !p.unlinkedAnchors.length && !p.unlinkedHasPart.length && !p.orphanAnchors.length && !p.orphanHasPart.length;
  const gateFails = Object.entries(failing).filter(
    ([id]) => MATCHERS.find((m) => m.id === id).kind !== 'inventory',
  );
  if (orphanHits.length) gateFails.push(['G7', lg.noInboundNoHub.concat(lg.noOutbound)]);
  console.log(
    `\n  ${gateFails.length ? `${gateFails.length} MATCHER(S) FAILING` : 'ALL DOCUMENT MATCHERS CLEAN'}; parity ${parityOk ? 'PASS' : 'FAIL'}`,
  );
  return gateFails.length || !parityOk ? 1 : 0;
}

// ---------------------------------------------------------------------------

async function main() {
  const arg = process.argv[2];
  const bad = await selfTest();
  // LAW 178: every figure on this line is DERIVED FROM THE REGISTRY AT RUNTIME.
  //
  // The old line ended "0 uncodified" as a STRING LITERAL. Nothing computed it,
  // so it printed zero however many matchers were being retyped in prose that
  // round -- Law 166's exact failure mode announcing its own absence as a pass.
  // IT IS GONE RATHER THAN RECOMPUTED, because nothing inside this file can
  // measure what lives outside it, and a number that cannot be measured must
  // not be printed at all. What IS derivable is printed instead: how many
  // matchers are registered, how many are usable, and the kind breakdown --
  // and `unusable` CAN be non-zero, which is what makes it a result.
  const registered = MATCHERS.length;
  const usable = registered - bad;
  const kinds = MATCHERS.reduce((acc, m) => ({ ...acc, [m.kind]: (acc[m.kind] ?? 0) + 1 }), {});
  const kindLine = Object.keys(kinds)
    .sort()
    .map((k) => `${kinds[k]} ${k}`)
    .join(', ');
  console.log(
    bad
      ? `\nSELF-TEST FAILED (${bad}). ${registered} registered, ${usable} usable (${kindLine}).`
      : `\nSELF-TEST PASSED. ${registered} matchers registered, ${usable} usable, 0 unusable (${kindLine}).`,
  );
  if (!arg || arg === '--self-test') process.exit(bad ? 1 : 0);
  if (bad) {
    console.log('\nRefusing to report: a matcher failed its probe.');
    process.exit(1);
  }

  if (arg === '--estate') process.exit(await runEstate());
  if (arg === '--machinery') {
    const r = await runMachinery();
    console.log('\nMACHINERY RE-MEASUREMENT (S63 R3) — every figure from a codified matcher\n');
    console.log(`  html files                     ${r.htmlTotal} total, ${r.htmlUs} on /us, ${r.htmlTotal - r.htmlUs} elsewhere`);
    console.log(`  M17 base 2 (source-literal)    ${r.base2} content routes`);
    console.log(`      base 1 (manifest)          ${r.base1} content routes`);
    console.log(`  M22 both-bases set difference  ${r.baseDiff.length ? r.baseDiff.join('; ') : 'EMPTY — sets identical'}`);
    console.log(`  M18 ASIN declarations          ${r.asinOccurrences} occurrences, ${r.asinDistinct} distinct`);
    console.log(`  US card links                  ${r.usCardLinks}`);
    console.log(`  US current disclosures         ${r.usDisclosures}`);
    console.log(`  UK card links                  ${r.ukCardLinks}, ${r.ukAsinsDistinct} distinct ASINs`);
    console.log(`  M19 cross-contamination        ${r.contamination.length ? r.contamination.join('; ') : '0 in all four directions'}`);
    console.log(`  M20 laws declared              ${r.laws.length} (highest ${r.laws[r.laws.length - 1]})`);
    const missing = [];
    for (let i = 1; i <= r.laws[r.laws.length - 1]; i++) if (!r.laws.includes(i)) missing.push(i);
    console.log(`      gaps in 1..highest         ${missing.length ? missing.join(', ') : 'none'}`);
    process.exit(0);
  }
  if (arg === '--quotations') process.exit(await runQuotationReport());
  if (arg === '--parity') {
    console.log(JSON.stringify(await runParity(), null, 2));
    process.exit(0);
  }

  let raw;
  let url = null;
  if (/^https?:/.test(arg)) {
    url = arg;
    const r = await fetch(arg);
    if (!r.ok) {
      console.error(`fetch ${arg}: HTTP ${r.status}`);
      process.exit(1);
    }
    raw = await r.text();
  } else {
    raw = await readFile(arg, 'utf8');
  }
  const res = runDocument(raw, { slug: slugOf(arg), url, label: arg });
  console.log(`\nMATCHERS — ${arg}`);
  console.log(`  bytes served=${res.bytes}  visible prose=${res.prose}\n`);
  for (const row of res.rows) {
    const verdict = row.kind === 'inventory' ? `INV(${row.hits.length})` : row.problem ? 'FAIL' : 'PASS';
    console.log(`  ${row.id.padEnd(5)}${verdict.padEnd(10)}${row.surface.padEnd(13)}${row.name}`);
    if (row.problem) console.log(`        ${row.problem}`);
    // AN INVENTORY WHOSE RESULT IS A MEASUREMENT MUST PRINT THE MEASUREMENT.
    // S63 R8: M25 returns one object carrying the offset and the percentage, so
    // its count is 0 or 1 and INV(1) alone says nothing. A matcher may declare
    // report() to render its hits; without this the M25 repair would have been
    // invisible in the very report it exists to feed.
    const m = MATCHERS.find((x) => x.id === row.id);
    if (m?.report && row.hits.length) console.log(`        ${m.report(row.hits)}`);
  }
  console.log(`\n${res.failed ? `${res.failed} MATCHER(S) FAILED` : 'ALL MATCHERS PASSED'}`);
  process.exit(res.failed ? 1 : 0);
}

main();
