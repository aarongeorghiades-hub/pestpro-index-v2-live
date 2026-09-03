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
// check.mjs. Fifteen matchers, zero uncodified.
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
  flies: ['flies', 'cluster-flies', 'fruit-flies'],
  // S62 R5. Declared once G7 became DIRECTIONAL — under the pre-R5 rule this
  // declaration would have newly failed two legitimate inbound links, which is
  // why S62 R4 measured it, declined to declare it, and referred the question.
  wood: ['termites', 'formosan-termites', 'carpenter-bees', 'powderpost-beetles'],
};
const clustersOf = (slug) => Object.keys(CLUSTERS).filter((c) => CLUSTERS[c].includes(slug));
const shareCluster = (a, b) => clustersOf(a).some((c) => clustersOf(b).includes(c));

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
    // RECLASSIFIED FROM gate TO inventory AT S62 R5, UNDER LAW 167.
    //
    // THE S62 R5 PM RULING MADE G7 DIRECTIONAL: cluster membership governs
    // SIBLING links, not INBOUND links. Enumerating what the ruling leaves:
    //
    //   A unclustered -> B unclustered   never in scope
    //   A unclustered -> B clustered     LEGITIMATE (the ruling: utility pages
    //                                    exist to link into topic pages)
    //   A clustered   -> B same cluster  LEGITIMATE (Law 168c, Law 172)
    //   A clustered   -> B other cluster LEGITIMATE (the ruling, verbatim)
    //   A clustered   -> B unclustered   ordinary outbound linking
    //
    // EVERY CASE IS LEGITIMATE. The cross-cluster-link defect class is now
    // EMPTY BY CONSTRUCTION, so this matcher CANNOT FAIL, so under Law 167 it
    // is an inventory and MUST NOT PRINT PASS. Leaving it declared as a gate
    // would have printed a clean PASS every run that a reader could not tell
    // apart from a gate that was tested and held. It reports the count because
    // the count is still worth seeing; it makes no judgement about it.
    //
    // IT IS ALSO NO LONGER A LEAK DETECTOR AND ITS NAME SAYS SO (Law 170: a
    // matcher's name must describe what it does).
    //
    // WHAT THE RULING SAID G7 EXISTS TO CATCH -- orphans, "a page nothing links
    // to, or a page linking nowhere" -- IS NOT THIS MATCHER AND CANNOT BE. It
    // is a property of the whole link graph, not of one document, so it lives
    // in runLinkGraph() below, where the graph exists.
    kind: 'inventory',
    scope: 'document',
    surface: 'full',
    name: 'Cross-cluster links (INVENTORY since S62 R5 — every case is legitimate)',
    test: (t, ctx = {}) => {
      const slug = ctx.slug ?? null;
      if (slug === 'us') return [];
      return all(/href="\/us\/([a-z0-9-]+)"/gi, t)
        .map((m) => m[1])
        .filter((target) => {
          if (!clustersOf(target).length) return false;
          if (!clustersOf(slug).length) return false; // DIRECTIONAL: inbound from
          //                        an unclustered page is ordinary internal linking
          if (target === slug) return false;
          if (shareCluster(slug, target)) return false;
          return true;
        })
        .map((target) => `/us/${target}`);
    },
    // Probes still run on every invocation and still prove the matcher can
    // FIND and can DISTINGUISH (S49-L). They no longer prove it can fail,
    // because it cannot -- which is the whole reason for the reclassification.
    probePos: [{ text: '<a href="/us/joro-spider">x</a>', ctx: { slug: 'flies' } }],
    probeCtx: { slug: 'flies' },
    probeNeg: [
      // THE TWO LINKS THE S62 R5 RULING IS ABOUT. Both were measured as failing
      // under the old rule at S62 R4; both must now be silent.
      { text: '<a href="/us/termites">x</a>', ctx: { slug: 'choosing-a-pest-control-service' } },
      { text: '<a href="/us/carpenter-bees">x</a>', ctx: { slug: 'social-wasps' } },
      // the hub linking to a clustered child -- required by S54-H
      { text: '<a href="/us/joro-spider">x</a>', ctx: { slug: 'us' } },
      // a page linking to itself
      { text: '<a href="/us/joro-spider">x</a>', ctx: { slug: 'joro-spider' } },
      // intra-cluster siblings: joro, the fly cluster (Law 172), and the wood
      // cluster declared this round
      { text: '<a href="/us/joro-spider-webs">x</a>', ctx: { slug: 'joro-spider' } },
      { text: '<a href="/us/cluster-flies">x</a>', ctx: { slug: 'flies' } },
      { text: '<a href="/us/fruit-flies">x</a>', ctx: { slug: 'flies' } },
      { text: '<a href="/us/boxelder-bugs">x</a>', ctx: { slug: 'cluster-flies' } },
      { text: '<a href="/us/powderpost-beetles">x</a>', ctx: { slug: 'termites' } },
      { text: '<a href="/us/termites">x</a>', ctx: { slug: 'powderpost-beetles' } },
      { text: '<a href="/us/carpenter-bees">x</a>', ctx: { slug: 'formosan-termites' } },
    ],
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
    for (const m of all(/href="\/us\/([a-z0-9-]+)"/gi, raw)) {
      const tgt = m[1];
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
  return { total: content.length, noInboundWithHub, noInboundNoHub, noOutbound };
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
  console.log(`\n  LINK-GRAPH INVENTORY — ${lg.total} content routes (S62 R5, threshold UNRULED)`);
  console.log(`    no inbound, counting the hub   : ${lg.noInboundWithHub.length}${lg.noInboundWithHub.length ? ' — ' + lg.noInboundWithHub.join(', ') : ' (cannot fail: S54-H gates it)'}`);
  console.log(`    no inbound, EXCLUDING the hub  : ${lg.noInboundNoHub.length}${lg.noInboundNoHub.length ? ' — ' + lg.noInboundNoHub.join(', ') : ''}`);
  console.log(`    no outbound /us route link     : ${lg.noOutbound.length}${lg.noOutbound.length ? ' — ' + lg.noOutbound.join(', ') : ''}`);
  const parityOk =
    !p.unlinkedAnchors.length && !p.unlinkedHasPart.length && !p.orphanAnchors.length && !p.orphanHasPart.length;
  const gateFails = Object.entries(failing).filter(
    ([id]) => MATCHERS.find((m) => m.id === id).kind !== 'inventory',
  );
  console.log(
    `\n  ${gateFails.length ? `${gateFails.length} MATCHER(S) FAILING` : 'ALL DOCUMENT MATCHERS CLEAN'}; parity ${parityOk ? 'PASS' : 'FAIL'}`,
  );
  return gateFails.length || !parityOk ? 1 : 0;
}

// ---------------------------------------------------------------------------

async function main() {
  const arg = process.argv[2];
  const bad = await selfTest();
  console.log(
    bad ? `\nSELF-TEST FAILED (${bad}).` : `\nSELF-TEST PASSED. ${MATCHERS.length} matchers codified and usable, 0 uncodified.`,
  );
  if (!arg || arg === '--self-test') process.exit(bad ? 1 : 0);
  if (bad) {
    console.log('\nRefusing to report: a matcher failed its probe.');
    process.exit(1);
  }

  if (arg === '--estate') process.exit(await runEstate());
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
  }
  console.log(`\n${res.failed ? `${res.failed} MATCHER(S) FAILED` : 'ALL MATCHERS PASSED'}`);
  process.exit(res.failed ? 1 : 0);
}

main();
