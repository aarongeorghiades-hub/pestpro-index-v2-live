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

