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
