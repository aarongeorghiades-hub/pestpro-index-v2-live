#!/usr/bin/env node
// Compliance gates for a rendered route.
//
// Usage:  node scripts/gates.mjs --self-test
//         node scripts/gates.mjs https://pestproindex.com/us/pocket-gophers
//         node scripts/gates.mjs ./some-saved.html
//
// WHY THIS FILE EXISTS: the gates were being retyped as ad-hoc shell in every
// round report. Retyped matchers drift, and a drifted matcher reports a clean
// pass it did not earn. This is the single definition.
//
// TWO RULES THIS FILE ENFORCES ON ITSELF:
//
// 1. EVERY MATCHER IS PROBE-TESTED BEFORE IT IS TRUSTED. Each gate carries a
//    positive probe it MUST match and a negative probe it MUST NOT. A matcher
//    that cannot fire proves nothing when it reports zero, and a gate that
//    cannot fail is theatre. `--self-test` runs the probes and nothing else;
//    a live run refuses to report if any probe fails.
//
// 2. EVERY COUNT NAMES ITS SURFACE. The same document yields different, all
//    correct, counts depending on what you read. A price claim is a
//    reader-facing assertion and belongs to visible prose; a banned word can
//    hide in an attribute or in JSON-LD and belongs to the full document. The
//    RSC flight payload restates every string on the page, so folding it into
//    a prose count double-counts. Each gate declares its surface and the
//    report prints it beside the number.

const BANNED_STEMS = ['verif', 'trust', 'vett'];

// The banned-word gate matches STEMS, not the three literal words.
//
// The exact-word matcher that used to stand here — /\b(verified|trusted|vetted)\b/i
// — IS REMOVED, not kept alongside, because keeping both means the weaker one
// can be the one someone reaches for. It returned 0 on "verifiable", on
// "verification", on "trustworthy" and on "unvetted", every one of which makes
// the same claim in our own voice that the ban exists to stop. The self-test
// below asserts exactly that difference so the removal cannot be quietly undone.
const bannedRe = new RegExp(String.raw`\w*(?:${BANNED_STEMS.join('|')})\w*`, 'gi');

const SURFACES = {
  // Everything served, including attributes, <head>, JSON-LD and the flight payload.
  full: (raw) => raw,
  // What a reader sees. head/script/style/comments stripped, then tags, then entities.
  prose: (raw) => {
    let b = raw
      .replace(/<head\b[\s\S]*?<\/head>/gi, '')
      .replace(/<script\b[\s\S]*?<\/script>/gi, '')
      .replace(/<style\b[\s\S]*?<\/style>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '');
    // Block-level closers become hard breaks first, so a sentence-integrity
    // reader never splices two list items into one verbless sentence.
    b = b.replace(/<\/(p|li|h[1-6]|div|td|th|tr|section|blockquote|dt|dd)>/gi, '\n');
    return decode(b.replace(/<[^>]+>/g, ' ')).replace(/[ \t]+/g, ' ');
  },
};

function decode(s) {
  const named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', pound: '£' };
  return s
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => (n.toLowerCase() in named ? named[n.toLowerCase()] : m));
}

const GATES = [
  {
    id: 'G1',
    name: 'Canonical is self-referential and appears exactly once',
    surface: 'full',
    re: /<link rel="canonical" href="([^"]+)"/gi,
    // Not a zero-gate: it must be present once. expect() owns the verdict.
    expect: (hits, { url }) =>
      hits.length !== 1
        ? `expected exactly 1 canonical, found ${hits.length}`
        : url && hits[0][1] !== url
          ? `canonical ${hits[0][1]} != requested ${url}`
          : null,
    probePos: '<link rel="canonical" href="https://x/">',
    probeNeg: '<link rel="alternate" href="https://x/">',
  },
  {
    id: 'G2',
    name: 'No hreflang / alternate / x-default (single-locale estate)',
    surface: 'full',
    re: /hreflang|rel="alternate"|x-default/gi,
    probePos: '<link rel="alternate" hreflang="en-gb">',
    probeNeg: '<link rel="canonical" href="/">',
  },
  {
    id: 'G3',
    name: 'No verif/trust/vett stem in our own voice',
    surface: 'full',
    re: bannedRe,
    probePos: 'a verifiable and trusted listing',
    probeNeg: 'a confirmed and reliable listing',
  },
  {
    id: 'G4',
    name: 'No UK spellings on a US route',
    surface: 'prose',
    re: /colour|behaviour|centre|licence|organis(?:e|es|ed|ing|ation|ations|ational)\b|emphasise|storey|\bgrey\b|mould|whilst|analyse|analysing|analysed|practise|neighbour|defence/gi,
    probePos: 'the colour of the centre',
    probeNeg: 'the color of the center, and every organism in it',
  },
  {
    id: 'G5',
    name: 'No UK affiliate tag, no amazon.co.uk, no GBP on a US route',
    surface: 'full',
    re: /pestproindex2-21|amazon\.co\.uk|£/gi,
    probePos: 'tag=pestproindex2-21',
    probeNeg: 'tag=example-20',
  },
  {
    id: 'G6',
    name: 'No price or comparative-price claim',
    // Deliberately prose, not full: the RSC flight payload is dense with
    // element refs spelled "$1", "$2c", "$L2d". Reading this gate on the full
    // document reports a confident FAIL on nine dollar-shaped strings that are
    // React internals and not money.
    surface: 'prose',
    re: /cheapest|cheaper|\$\s?\d|\d+\s?(?:dollars|USD)\b|more expensive|lowest price|best value|price/gi,
    probePos: 'the cheapest option, about $12',
    probeNeg: 'the option described here',
  },
  {
    id: 'G7',
    name: 'No cross-cluster link leaking between US clusters',
    surface: 'full',
    re: /href="\/us\/(joro-spider|joro-spider-webs|joro-spider-range|are-joro-spiders-dangerous|stink-bugs-in-house|how-to-get-rid-of-stink-bugs|boxelder-bugs|asian-lady-beetles|cluster-flies|best-stink-bug-traps)"/gi,
    probePos: '<a href="/us/joro-spider">x</a>',
    probeNeg: '<a href="/us/pocket-gophers">x</a>',
  },
];

function selfTest() {
  let bad = 0;
  console.log('MATCHER PROBES — a gate is not usable until both probes behave.\n');
  console.log(`  ${'ID'.padEnd(4)}${'POSITIVE'.padEnd(11)}${'NEGATIVE'.padEnd(13)}SURFACE   GATE`);
  for (const g of GATES) {
    const pos = new RegExp(g.re.source, g.re.flags).test(g.probePos);
    const neg = new RegExp(g.re.source, g.re.flags).test(g.probeNeg);
    const ok = pos && !neg;
    if (!ok) bad++;
    console.log(
      `  ${g.id.padEnd(4)}${(pos ? 'fires' : 'DEAD').padEnd(11)}${(neg ? 'FIRES(bad)' : 'silent').padEnd(13)}${g.surface.padEnd(10)}${ok ? '' : 'UNUSABLE — '}${g.name}`,
    );
  }
  // The removal of the exact-word banned matcher is asserted, not commented.
  const exactWord = /\b(verified|trusted|vetted)\b/i;
  const sample = 'independently verifiable, and trustworthy';
  const stemHits = (sample.match(new RegExp(bannedRe.source, 'gi')) || []).length;
  const wordHits = exactWord.test(sample) ? 1 : 0;
  console.log(`\n  STEM-vs-EXACT-WORD, on ${JSON.stringify(sample)}:`);
  console.log(`    stem matcher (the gate):        ${stemHits} hit(s)  -> ${stemHits ? 'catches it' : 'MISSES'}`);
  console.log(`    exact-word matcher (removed):   ${wordHits} hit(s)  -> ${wordHits ? 'catches it' : 'MISSES — this is why it is gone'}`);
  if (stemHits < 2 || wordHits !== 0) {
    console.log('    ASSERTION FAILED: the stem matcher must catch what the exact-word matcher misses.');
    bad++;
  }
  return bad;
}

async function main() {
  const arg = process.argv[2];
  if (!arg || arg === '--self-test') {
    const bad = selfTest();
    console.log(bad ? `\nSELF-TEST FAILED (${bad}).` : '\nSELF-TEST PASSED. All matchers usable.');
    process.exit(bad ? 1 : 0);
  }
  const bad = selfTest();
  if (bad) {
    console.log('\nRefusing to report gate results: a matcher failed its probe.');
    process.exit(1);
  }
  let raw, url = null;
  if (/^https?:/.test(arg)) {
    url = arg;
    const r = await fetch(arg);
    if (!r.ok) { console.error(`fetch ${arg}: HTTP ${r.status}`); process.exit(1); }
    raw = await r.text();
  } else {
    raw = await (await import('node:fs/promises')).readFile(arg, 'utf8');
  }
  const views = { full: SURFACES.full(raw), prose: SURFACES.prose(raw) };
  console.log(`\nGATES — ${arg}`);
  console.log(`  bytes served=${raw.length}  visible prose=${views.prose.length}\n`);
  let failed = 0;
  for (const g of GATES) {
    const hits = [...views[g.surface].matchAll(new RegExp(g.re.source, g.re.flags))];
    const problem = g.expect ? g.expect(hits, { url }) : hits.length ? `${hits.length} hit(s): ${[...new Set(hits.map((h) => h[0]))].slice(0, 6).join(', ')}` : null;
    if (problem) failed++;
    console.log(`  ${g.id}  ${(problem ? 'FAIL' : 'PASS').padEnd(6)}${g.surface.padEnd(8)}${g.name}`);
    if (problem) console.log(`        ${problem}`);
  }
  console.log(`\n${failed ? `${failed} GATE(S) FAILED` : 'ALL GATES PASSED'}`);
  process.exit(failed ? 1 : 0);
}
main();
