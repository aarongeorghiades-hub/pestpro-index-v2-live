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
  '',
  '157. A SEARCH-ENGINE SNIPPET OF OUR OWN SITE IS A STALE ASSERTION.',
  '158. A LAW MAY FOLLOW ANOTHER LAW WITH NO BLANK LINE BETWEEN THEM.',
  '     and may carry an indented continuation line,',
  '159. WHICH THE NEXT LAW MAY FOLLOW.',
  'LAW 172 — CLUSTER MEMBERSHIP IS A SET.',
  '### LAW 174 — G7 IS AN INVENTORY, NOT A GATE.',
  '## S62 R2 — LAW 171: THE UK ESTATE IS BRITISH.',
].join('\n');
// The positive probe's form-1 item must sit where markdown would actually
// render a list: after a blank line. See FP-4 below for why that matters.
// references, not declarations — none of these defines a law
//
// FP-4, MEASURED AT S64 R1 AND CAUGHT BY THE MATCHER'S OWN OUTPUT. A round wrote
// a paragraph in which the figure 783 wrapped to the start of a line and was
// followed by a full stop and a space — "783. Measured this round: the estate
// MINUS /us/products carries 188 rendered..." — and M20 reported 183 laws
// declared with a HIGHEST OF 783 and six hundred gaps. A DIGIT-DOT-SPACE AT LINE
// START IS NOT A LIST ITEM: markdown renders it as part of the running paragraph
// unless it follows a blank line, another item, or an item's own indented
// continuation. That is the discriminator, and it is markdown's own semantics
// rather than an arbitrary narrowing. Measured over all 157 form-1 matches in
// CLAUDE.md: 156 real declarations kept, exactly the one false positive rejected.
//
// FP-5. A PROPOSAL IS NOT A DECLARATION. A section headed
// "PROPOSED LAW 182 — NOT RATIFIED" announces a law the PM has not made, and
// counting it inflates the enumeration and closes a number that is still open.
export const LAW_REFERENCES_ONLY = [
  'interstitial body is TERMINAL UNDER LAW 137 REGARDLESS OF STATUS CODE.',
  'This closes the item LAW 168 left expressly open.',
  'see Law 139 for the criterion rule, and law 42 on unsatisfiable gates',
  'S63 R8 reported 752 and',
  '783. Measured this round: the estate MINUS /us/products carries 188 rendered',
  '### PROPOSED LAW 182 — NOT RATIFIED, AWAITING A PM RULING',
  '## S64 R1 — PROPOSED LAW 999: NOT RATIFIED',
  // S67 R6 — a heading that says a law is NOT IN FORCE is not a declaration,
  // whichever way it says it. The wording that first slipped past the two literal
  // phrasings above ("COULD NOT BE RATIFIED") is gone from CLAUDE.md now that
  // Laws 189 and 190 are ratified, so it is no longer probed against a live
  // string — but the CLASS it exposed is real and stays covered, because the next
  // round to record an unratified law will phrase it its own way.
  '## LAW 777 IS ABSENT FROM THIS FILE',
  '## LAW 778 WITHDRAWN, SEE BELOW',
  '## LAW 779 WAS NOT RATIFIED AT THIS ROUND',
].join('\n');

// ---- M33 (S64 R2), the /us layout footer's two earnings statements ---------
// These are the strings the layout footer actually emits, anchored on the
// paragraph element that emits them so a card-level disclosure — which is a
// DIFFERENT element saying the same sentence — cannot be mistaken for one.
export const US_FOOTER_AFFIRM =
  '<p class="m-0 mt-3 max-w-3xl">As an Amazon Associate, PestPro Index earns from qualifying purchases.</p>';
export const US_FOOTER_DENY =
  '<p class="m-0 mt-3 max-w-3xl">We earn nothing if you buy through the links on this site.';
export const US_CARD_ANCHOR =
  '<a href="https://www.amazon.com/dp/B00NFRTVY6?tag=pestproindex2-20">buy</a>';
// A page carrying the card-level disclosure but NOT the footer one. This is the
// shape that made the S64 R1 breach invisible: the route looked disclosed
// because the sentence was present, and the sentence present was the CARD's.
export const US_CARD_DISCLOSURE_ONLY =
  '<p class="m-0 mt-1 text-sm text-amber-900">As an Amazon Associate, PestPro Index earns from qualifying purchases.</p>';

// ---- M33 (S64 R3), the UK footer's affiliate statement ---------------------
// Emitted by components/FooterAssociatesNotice.tsx through the server Footer.
// THE UK "NO CARDS" STATE IS SILENCE, NOT A DENIAL: the UK estate carries no
// earns-nothing sentence anywhere (measured S64 R3, zero occurrences), so a
// UK document with no card correctly says nothing at all.
export const UK_FOOTER_AFFIRM =
  '<p>Free product recommendations for pest control across the UK. All links are Amazon affiliate links.</p>';
export const UK_CARD_ANCHOR = '<a href="https://www.amazon.co.uk/dp/B00NFRTVY6">buy</a>';
// A UK page-level authored disclosure. There are FOUR distinct wordings of these
// on the estate and they are NOT the derived statement — they are hand-authored
// per page. One must not satisfy the gate in place of the footer, or the derived
// mechanism could be broken on a page while the gate stayed green.
export const UK_PAGE_DISCLOSURE =
  '<p class="text-sm text-amber-800"><strong>Affiliate disclosure:</strong> PestPro Index is reader-supported.</p>';

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
// S66 R3 — THE AMAZON BOT WALL, AND IT IS THE MORE ALARMING OF THE TWO GAPS.
//
// M23's list was built at S63 R2 from the MSU/Incapsula body. This estate's most
// frequently met block is not that one: it is Amazon's, and S62 R3 recorded SEVEN
// of them in a single round at 3,781 bytes each. That body contains NEITHER
// "Incapsula" NOR "Request unsuccessful". M23 could not see it either.
//
// So the announced class was never really "a block that says so" -- it was two
// wordings someone had in front of them. Rebuilt as three reasons a body announces
// a refusal: a named vendor incident, a refusal in plain words, and a statement
// that the request has been treated as automated. VERBATIM EXCERPT from
// ~/pp-s62r3/products/B00004RAMT.html.
export const AMAZON_BOT_WALL_BODY =
  '<!DOCTYPE html><html><head><title>Amazon.com</title></head><body>\n<!--\n' +
  '        To discuss automated access to Amazon data please contact ' +
  'api-services-support@amazon.com.\n-->\n' +
  '<h4>Sorry, we just need to make sure you\'re not a robot.</h4></body></html>';

// S66 R3 — THE INTERACTIVE-CHALLENGE BODY, A SECOND CLASS OF BLOCK.
//
// S66 R2 fetched historicengland.org.uk and got a 6,094-byte Cloudflare managed
// challenge. M23's signature list did not contain one word that body carries, so
// M23 saw a clean body; only the 403 caught it. Had Cloudflare served the same
// challenge with HTTP 200 -- the ordinary case, and the exact case Law 177 exists
// for -- a 6 KB challenge page would have been accepted as a source.
//
// THE RULE, NOT THE INSTANCE (Law 170). The first class of block ANNOUNCES a
// refusal in prose: "Access Denied", "Request unsuccessful". A CHALLENGE refuses
// nothing in words -- it SHIPS A BOT-CHALLENGE RUNTIME IN PLACE OF THE CONTENT and
// asks the client to execute it. So it is detected by the runtime, not by the
// wording: the vendor's own challenge-platform endpoint, and the challenge options
// object the endpoint is driven by. Those are what the page IS.
//
// "Just a moment..." IS DELIBERATELY NOT THE SIGNATURE. It is a display string:
// it is localised, and it changes between Cloudflare releases. Keying on it would
// rebuild the same enumerated-instance defect one release later.
//
// VERBATIM EXCERPTS from ~/pp-s66r2/sources/historicengland.html, the body saved
// by the round that found the gap, so the probe is the real thing rather than a
// reconstruction of it.
export const CHALLENGE_BODY_HTTP_200 =
  '<!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title>' +
  '<meta name="robots" content="noindex,nofollow"></head><body>' +
  '<span id="challenge-error-text">Enable JavaScript and cookies to continue</span>' +
  '<script>(function(){window._cf_chl_opt = {cFPWv: \'g\',cType: \'managed\'};' +
  'var a = document.createElement(\'script\');' +
  "a.src = '/cdn-cgi/challenge-platform/h/g/orchestrate/chl_page/v1?ray=a36d311efdfcbd7d';" +
  '}());</script></body></html>';

// The NEGATIVE limb the brief asks for: a body S66 R2 ACCEPTED and quoted from.
// The quoted text is verbatim from ~/pp-s66r2/sources/westlothian.txt.
//
// S67 R6 — PADDED TO THE SIZE OF THE PAGE IT STANDS FOR, AND THIS IS A CORRECTION
// TO THE FIXTURE, NOT A CONCESSION BY THE RULE. As written it was 164 bytes, a
// miniature of a real council page of tens of kilobytes. That was harmless while
// every M23 rule was lexical. It stopped being harmless the moment a rule keyed on
// SIZE: the new empty-body limb correctly called a 164-byte body unusable, and the
// probe fired. A stand-in that is three orders of magnitude smaller than the thing
// it stands for is not a valid stand-in for a size-sensitive test, so the fixture
// is brought up to a realistic size and the distinguishing text is untouched.
export const ACCEPTED_SOURCE_BODY_S66R2 =
  '<html><head><title>Bird proofing advice</title></head><body>' +
  '<p>Spikes are useful but only for birds roosting on ledges.  If they are ' +
  'nesting they will not provide any protection.  These areas are known as ' +
  'medium pressure areas.</p>' +
  '<p>' + 'Guidance on proofing, nesting seasons and licensing follows. '.repeat(400) + '</p>' +
  '</body></html>';

// A REAL page that TALKS ABOUT Cloudflare challenges without being one. This is
// FP-3's lesson applied to the new class: a challenge-related word inside real
// content is not a challenge. Without the structural markers it must stay silent.
// S67 R6 — likewise padded to a realistic page size, for the same reason.
export const REAL_PAGE_ABOUT_CHALLENGES =
  '<html><head><title>Why our site shows a Cloudflare challenge</title></head>' +
  '<body><h1>Bot protection</h1><p>Visitors occasionally see a challenge page ' +
  'asking them to enable JavaScript and cookies before they can continue. This ' +
  'happens when Cloudflare is not confident the request came from a person.</p>' +
  '<p>' + 'The rest of this article explains the settings involved. '.repeat(400) + '</p>' +
  '</body></html>';

export const REAL_PAGE_WITH_TRIGGER_WORD =
  '<html><head><title>Drain Flies - What are they?</title></head><body>' +
  '<h1>Drain Flies</h1><p>Drain flies breed in the gelatinous film that ' +
  'accumulates on the sides of drains and overflow pipes. The larvae feed on ' +
  'decaying organic matter.</p>' +
  '<form id="contact"><label>captcha</label><input name="captcha"></form>' +
  'x'.repeat(20000) +
  '</body></html>';

// ===========================================================================
// S63 R5 — CONVERSION-SWEEP FIXTURES
// S63 R4's conversion diagnostic named five measurement steps. FOUR needed
// codifying; the fifth, the card link itself, is CARD_HREF_RE and is REUSED
// rather than re-implemented — this file's standing rule against a second copy.
// ===========================================================================

// ---- M24, RETIRED S63 R8 ---------------------------------------------------
// HTML_WITH_FLIGHT_PAYLOAD and HTML_SCRIPT_ONLY ARE REMOVED — S63 R8. They were
// M24's two probes, and M24 is retired (see the visibleBody() comment in
// gates.mjs for the measurement that retired it). They are deleted rather than
// left in place: an exported fixture nothing imports is dead code that reads as
// live coverage, which is the same fault as a dead matcher's INV(0) reading as a
// clean result. Enumerated before deleting (Law 40) — gates.mjs was the only
// importer of either.

// ---- M25, first-card offset ------------------------------------------------
// THE RULE: the offset of the first card link measured in VISIBLE characters,
// never in raw bytes. The fixture puts a large script block AHEAD of the card
// precisely so the raw offset and the visible offset cannot agree — if a future
// implementation measures raw bytes the probe's asserted value moves.
// THAT VALUE IS NOW ACTUALLY READ. Until S63 R8 nothing asserted it: the probe
// loop checks only that a matcher fires, and M25 returns one object whichever
// measure it uses, so this fixture discriminated against a reader that never
// looked. Assertion E in gates.mjs selfTest() compares the reported offset with
// the raw byte offset and fails loudly if they agree.
export const HTML_CARD_AFTER_PROSE =
  '<p>Twelve characters.</p>' +
  '<script>' + 'x'.repeat(5000) + '</script>' +
  '<a href="https://www.amazon.com/dp/B07HCLTXFG?tag=pestproindex2-20">buy</a>';
export const HTML_NO_CARD =
  '<p>Twelve characters.</p><a href="/us/millipedes">millipedes</a>';

// ---- M26, internal link to a carding route ---------------------------------
// THE RULE: an internal /us link whose TARGET ROUTE CARRIES AT LEAST ONE CARD.
// A rule over a measured card-count map, not a slug list — `best-` prefixes are
// not consulted and a future carding route needs no matcher edit.
export const CARD_COUNT_MAP = { ants: 4, millipedes: 0, 'best-gopher-traps': 7, earwigs: 0 };
export const LINKS_TO_CARDING = '<a href="/us/ants">x</a> <a href="/us/best-gopher-traps">y</a>';
export const LINKS_TO_BARE = '<a href="/us/millipedes">x</a> <a href="/us/earwigs">y</a>';

// ---- M27, body-prose call to action ----------------------------------------
// THE RULE: an imperative commercial instruction addressed to the reader.
// ITS NEGATIVE PROBE IS THE FAILURE ITSELF. A looser first form of this matcher
// flagged EIGHTEEN routes at S63 R4 and every one was a false positive: "dealing
// with", "deals with", "a great deal", "shop against", "can buy one". Those five
// forms are the negative probe, so the failure cannot recur silently.
export const CTA_PRESENT =
  'Buy it now on Amazon. Check the current price and shop for the best price on the trap. ' +
  'Click here to see our top picks.';
export const CTA_FALSE_POSITIVES =
  'UC IPM publishes one finding specific enough to shop against, and it deals with egg sacs. ' +
  'Dealing with the animal varies a great deal. No source consulted says a householder can ' +
  'buy one, and most people would rather buy one than assemble a roasting pan.';

// ===========================================================================
// S63 R6 — THE PRECEDENCE RULE
// A card never precedes content a reader needs in order to identify the pest,
// to avoid harm, to avoid being misled about what a product can do, or to
// avoid breaking the law.
//
// IT SPLITS INTO TWO PARTS AND THEY HAVE DIFFERENT KINDS, deliberately:
//   M28  the COMPARISON — a real gate, fires when a card precedes precedence
//        content, silent when it follows.
//   M29  the DETECTION — an INVENTORY. It cannot adjudicate, because the
//        distinguishing signal is what a sentence is ABOUT, not any lexical
//        feature of it. "House Flies Cannot Bite" and "What Consumer Products
//        Cannot Do" are the same construction in different categories (Law 115).
// ===========================================================================

// ---- M28, the precedence comparison ---------------------------------------
// ---- M28 (S64 R7), the card-ordering adjudication row ---------------------
// M28's subject changed at S64 R7 by PM ruling. It no longer compares two
// percentages; it compares the route's CURRENT ordering fingerprint against the
// fingerprint recorded when the route was last adjudicated. The machine detects
// that the ordering MOVED and never judges meaning — that split is why M29 is
// the inventory and M28 the gate.
export const ORDERING_MOVED = {
  slug: 'fixture-moved',
  fingerprint: 'aaaaaaaaaaaa',
  adjudication: { judgement: 'correct-as-built', date: '2026-09-05', fingerprint: 'bbbbbbbbbbbb' },
};
export const ORDERING_UNADJUDICATED = { slug: 'fixture-new', fingerprint: 'cccccccccccc', adjudication: null };
export const ORDERING_UNCHANGED = {
  slug: 'fixture-ok',
  fingerprint: 'dddddddddddd',
  adjudication: { judgement: 'correct-as-built', date: '2026-09-05', fingerprint: 'dddddddddddd' },
};

export const CARD_BEFORE_PRECEDENCE = { slug: 'fixture-bad', cardPct: 19, precedencePct: 40, category: 'harm' };
export const CARD_AFTER_PRECEDENCE  = { slug: 'fixture-ok',  cardPct: 52, precedencePct: 31, category: 'harm' };
// a page with no precedence-bearing content cannot violate the rule
export const NO_PRECEDENCE_CONTENT  = { slug: 'fixture-none', cardPct: 12, precedencePct: null, category: null };

// ---- M29, the precedence CANDIDATE scan ------------------------------------
// CANDIDATES, NEVER FINDINGS — the S59-B pattern. Measured against the real
// estate at S63 R6: identification 26 headings, harm 18, efficacy 38, legal 6,
// and the efficacy class alone carries at least five demonstrable false
// positives: "They Do Not Dig", "It Lives Indoors and Cannot Live Outside",
// "How Long They Live: the Figures Do Not Agree", "House Flies Cannot Bite",
// "What They Do and Do Not Do". Every hit is read before it counts.
export const HEADING_IDENTIFICATION = 'Which Widow, and the Hourglass';
export const HEADING_HARM = 'If You Think You Have Been Bitten';
export const HEADING_EFFICACY = 'What Consumer Products Cannot Do';
export const HEADING_LEGAL = 'The Law Changes at the State Line';
// the measured false positives, kept as the negative probe so the class cannot
// be quietly widened back to catching them
export const HEADING_NOT_PRECEDENCE = 'They Do Not Dig';
export const HEADING_PLAIN = 'Where They Nest and How They Enter';

// S67 R6 — THE TWO M23 FAULTS, AS PERMANENT PROBES. Both are real bodies this
// programme actually fetched, not constructed cases.
//
// EMPTY_BODY_HTTP_202 — ~/pp-s66r8/sources/walthamforest-moth.pdf and its S66 R8
// retry were each 0 bytes at HTTP 202. M23 returned [] on both and the round read
// that silence as acceptance.
export const EMPTY_BODY_HTTP_202 = '';
//
// LARGE_CHALLENGE_BODY — the shape of the 151,140-byte Cloudflare challenge served
// by digitalcommons.unl.edu at S67 R2 and again on its S67 R3 retry. It carries the
// structural challenge signature and NO announced phrase, and it is nineteen times
// the old 8,000-byte size limb, so under the previous rule a 200 would have been
// accepted as a source. Padded past 16,000 so it also proves the ANNOUNCED bound
// does not gate the CHALLENGE class.
export const LARGE_CHALLENGE_BODY =
  '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
  '<script src="/cdn-cgi/challenge-platform/h/b/orchestrate/chl_page/v1"></script>' +
  '</head><body>' + 'x'.repeat(40000) + '</body></html>';
