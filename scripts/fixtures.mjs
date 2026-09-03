// Probe fixtures for scripts/gates.mjs.
//
// WHY THIS FILE EXISTS: some matchers cannot be probed against a string
// literal that would be legal to leave inside gates.mjs itself. The banned-stem
// probe has to CONTAIN a banned stem; the disclosure atomicity probe has to
// contain the superseded disclosure sentence verbatim. Keeping them here means
// a repo-wide sweep for those strings finds one file, named as fixtures, rather
// than finding the gate file and reporting its own probes as estate defects.
//
// NOTHING HERE IS SHIPPED. This file is not imported by app/, components/ or
// lib/ and is not part of the Next build.

// ---- disclosure sentences (S59-C) ----------------------------------------
export const DISCLOSURE_CURRENT =
  'As an Amazon Associate, PestPro Index earns from qualifying purchases.';
export const DISCLOSURE_SUPERSEDED = 'The link below is not a paid affiliate link.';

// ---- the estate's own Law 96 price-denial sentences -----------------------
// PM ruling, S61 R9: "a sentence that DENIES a price is not a price." These are
// lifted verbatim from /us/house-mice, /us/rats, /us/imported-fire-ants,
// /us/mole-and-vole-control and /us/choosing-a-pest-control-service. They are
// the canonical known-negative for G6 and are wired into its probeNeg
// permanently. If G6 ever fires on one of these again, G6 is wrong.
export const PRICE_DENIALS = [
  'so nothing here is called best, and no price appears beside a card.',
  'and no price appears anywhere on it.',
  'no claim about availability, price or delivery is made anywhere on this page.',
  'No source consulted for this page publishes a price, and this site does not publish prices.',
];

// ---- a card link, used to build proximity probes --------------------------
export const CARD_LINK =
  'https://www.amazon.com/dp/B00NFRTVY6?tag=pestproindex2-20';

// ---- quotation-audit fixture (M15, Law 164) -------------------------------
// A miniature stand-in for a fetched source body. The positive probe is a byte
// range copied out of it; the negative probe is the same range with one
// character changed, which is exactly the failure mode Law 164 exists to catch.
export const QUOTE_SOURCE_FIXTURE =
  'Camel crickets get their name because of their slightly humpbacked ' +
  'appearance. Their long legs give them a spider-like appearance. They can ' +
  'damage stored items, such as garments and linens packed in boxes.';
export const QUOTE_PRESENT =
  'Their long legs give them a spider-like appearance.';
export const QUOTE_ALTERED =
  'Their long legs give them a spider like appearance.'; // hyphen removed

// ---- M16, the RELOCATED Law 164 control (S62 R6) --------------------------
// M15 asks "does THIS quotation match its source" and is only as good as the
// list it is handed. M16 asks the question the other way round: "does EVERY
// quotation ON THE PAGE match a source" -- so a quotation that never reached
// the drafting list cannot escape. Three did, across two rounds, which is the
// evidence for the relocation.
//
// PAGE_WITH_UNVERIFIED_QUOTE reproduces that exact escape: two quotation spans,
// one copied out of QUOTE_SOURCE_FIXTURE and one that was never in any source
// at all. It is the POSITIVE probe, and it is the case M15 could not see.
export const PAGE_WITH_UNVERIFIED_QUOTE =
  '<p>The source states <em>&ldquo;Their long legs give them a spider-like ' +
  'appearance.&rdquo;</em> and also <em>&ldquo;They hibernate through the ' +
  'winter in dry cellars.&rdquo;</em></p>';
// Same page with the second span removed: every remaining quotation is in the
// fixture, so the matcher must be SILENT. The NEGATIVE probe.
export const PAGE_WITH_VERIFIED_QUOTES =
  '<p>The source states <em>&ldquo;Their long legs give them a spider-like ' +
  'appearance.&rdquo;</em> and adds <em>&ldquo;They can damage stored items, ' +
  'such as garments and linens packed in boxes.&rdquo;</em></p>';
// A scare-quoted phrase in OUR OWN VOICE is not a quotation and must not be
// reported as one. Held out by the caller, not by the matcher, and probed here
// so the distinction is exercised on every run.
export const PAGE_WITH_SCARE_QUOTE =
  '<p>We have not built a &ldquo;top picks&rdquo; category around one item.</p>';

// ---- G7, ARMED S62 R6: the orphan gate ------------------------------------
// The positive probe is a CONSTRUCTED route, not an estate one. The brief that
// armed the gate required exactly that: a gate proved by a fixture rather than
// by leaving a real route broken to prove it.
//
// A graph row is { slug, inbound, outbound } where `inbound` EXCLUDES the hub.
// S54-H already guarantees every route is hub-linked, so counting the hub makes
// the check unfailable -- that reading was retired by PM ruling at S62 R6.
export const GRAPH_ROW_ORPHAN_IN = { slug: 'fixture-no-inbound', inbound: [], outbound: ['rats'] };
export const GRAPH_ROW_ORPHAN_OUT = { slug: 'fixture-no-outbound', inbound: ['rats'], outbound: [] };
export const GRAPH_ROW_ORPHAN_BOTH = { slug: 'fixture-isolated', inbound: [], outbound: [] };
export const GRAPH_ROW_LINKED = {
  slug: 'fixture-linked',
  inbound: ['house-mice'],
  outbound: ['house-mice'],
};
// The hub does not need a non-hub inbound link and is exempt by name.
export const GRAPH_ROW_HUB = { slug: 'us', inbound: [], outbound: ['rats'] };

// ===========================================================================
// S63 R3 — MACHINERY ROUND FIXTURES
// Seven matchers were codified this round: the four that R1 Task 0 ran as
// ad-hoc shell, and the three named false positives FP-1, FP-2 and FP-3.
// Every fixture below is a PROBE, not an example list: each matcher is built
// from the rule that defines it (Law 170) and these only prove the rule fires
// and discriminates (Law 166, S49-L).
// ===========================================================================

// ---- M17, source-literal route derivation (S54-H base 2) ------------------
// THE RULE: a route exists at /us/<dir> if and only if app/us/<dir>/page.tsx
// exists. NOT "every directory under app/us" — that reading needs an exclusion
// list naming `components`, and an exclusion list is exactly what Law 170
// forbids. Presence of the page file IS the rule; `components` is excluded by
// the rule rather than by name.
export const DIRENTS_WITH_ROUTES = [
  { name: 'earwigs', hasPageTsx: true },
  { name: 'millipedes', hasPageTsx: true },
];
export const DIRENTS_NON_ROUTES = [
  // no page.tsx — excluded BY THE RULE, not by being named
  { name: 'components', hasPageTsx: false },
  // a directory carrying a differently-named file is still not a route
  { name: 'scratch', hasPageTsx: false },
];

// ---- M18, estate ASIN inventory -------------------------------------------
export const ASIN_DECL_PRESENT = 'asin="B07KWYM922" and asin: \'B0BM51MQF3\'';
// lowercase is not an ASIN declaration, and ten characters is the whole rule
export const ASIN_DECL_ABSENT = 'asin="b07kwym922" asin="B07KWY" sku="B07KWYM922"';

// ---- M19, affiliate cross-contamination -----------------------------------
// THE RULE: each estate side has exactly one marketplace and one tag. A tag or
// an amazon host belonging to the OTHER side is the defect. Stated as a rule so
// a future third marketplace is covered without editing a list.
export const US_SIDE_CLEAN =
  '<a href="https://www.amazon.com/dp/B07HCLTXFG?tag=pestproindex2-20">x</a>';
export const US_SIDE_DIRTY =
  '<a href="https://www.amazon.co.uk/dp/B07HCLTXFG?tag=pestproindex2-21">x</a>';
export const UK_SIDE_CLEAN =
  '<a href="https://www.amazon.co.uk/dp/B0057AN4BU?tag=pestproindex2-21">x</a>';
export const UK_SIDE_DIRTY =
  '<a href="https://www.amazon.com/dp/B0057AN4BU?tag=pestproindex2-20">x</a>';

// ---- M20, law enumeration in CLAUDE.md ------------------------------------
// THE RULE, ESTABLISHED BY READING THE FILE AT S63 R3 RATHER THAN ASSUMED. A
// law is DECLARED in one of four heading forms, all four of which are present:
//   1. numbered-list form, laws 1-156          "157. A SEARCH-ENGINE SNIPPET..."
//   2. bare declaration at line start           "LAW 172 — CLUSTER MEMBERSHIP..."
//   3. markdown-heading-prefixed declaration    "### LAW 174 — G7 IS AN..."
//   4. announced inside a section heading       "## S62 R2 — LAW 171: THE UK..."
// A `LAW n` token MID-SENTENCE is a REFERENCE, not a declaration, and must not
// be counted. The R1 scan anchored on form 2 alone and reported Law 174 absent.
export const LAW_HEADINGS_ALL_FORMS = [
  '157. A SEARCH-ENGINE SNIPPET OF OUR OWN SITE IS A STALE ASSERTION.',
  'LAW 172 — CLUSTER MEMBERSHIP IS A SET.',
  '### LAW 174 — G7 IS AN INVENTORY, NOT A GATE.',
  '## S62 R2 — LAW 171: THE UK ESTATE IS BRITISH.',
].join('\n');
// references, not declarations — none of these defines a law
export const LAW_REFERENCES_ONLY = [
  'interstitial body is TERMINAL UNDER LAW 137 REGARDLESS OF STATUS CODE.',
  'This closes the item LAW 168 left expressly open.',
  'see Law 139 for the criterion rule, and law 42 on unsatisfiable gates',
].join('\n');

// ---- M21 (FP-1), genuine quotation delimiters -----------------------------
// THE RULE: a quotation is delimited by a QUOTATION MARK — the HTML entities
// &ldquo;/&rdquo; or the curly characters themselves. In a .tsx file the ASCII
// straight double quote is a JS STRING DELIMITER and is never a quotation mark.
// Treating it as one was FP-1.
export const QUOTE_SPAN_GENUINE =
  '<em>&ldquo;Millipedes do not bite.&rdquo;</em> and “nor do they sting.”';
export const QUOTE_SPAN_JS_DELIMITERS =
  'name="Summit Mosquito Bits, 30 oz" asin="B07HCLTXFG" className="mt-3"';

// ---- M22 (FP-2), set comparison -------------------------------------------
// THE RULE: two route sets are compared by EXACT MEMBERSHIP. A prefix or
// startsWith test silently treats `rats` and `rats-and-mice` as related, which
// was FP-2. Membership is the only comparison this matcher performs.
export const SET_PAIR_EQUAL = { a: ['earwigs', 'millipedes'], b: ['millipedes', 'earwigs'] };
export const SET_PAIR_DIFFERENT = { a: ['earwigs', 'millipedes'], b: ['earwigs'] };
// THE FP-2 CASE ITSELF: a prefix test calls these a match; membership does not.
export const SET_PAIR_PREFIX_TRAP = { a: ['rats'], b: ['rats-and-mice'] };

// ---- M23 (FP-3), block-body detection under any status code ---------------
// THE RULE, and Law 177 depends on it: a response is BLOCKED when its body
// carries a block vendor's own signature, or an explicit block phrase, in a
// body far too small to be a content page. A single block-related word inside a
// large, complete page is NOT a block — that was FP-3, which flagged a 53,939
// byte University of Arkansas fact sheet because its contact form said
// "captcha".
export const BLOCK_BODY_HTTP_200 =
  '<html><body>Request unsuccessful. Incapsula incident ID: ' +
  '1660000330289531695-695108751517812816</body></html>';
export const REAL_PAGE_WITH_TRIGGER_WORD =
  '<html><head><title>Drain Flies - What are they?</title></head><body>' +
  '<h1>Drain Flies</h1><p>Drain flies breed in the gelatinous film that ' +
  'accumulates on the sides of drains and overflow pipes. The larvae feed on ' +
  'decaying organic matter.</p>' +
  '<form id="contact"><label>captcha</label><input name="captcha"></form>' +
  'x'.repeat(20000) +
  '</body></html>';
