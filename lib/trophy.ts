// The trophy marker shown beside providers on the directory and borough pages.
//
// Single source of truth: the thresholds, the test, the legend the visitor
// reads, and the label a screen reader announces are all derived from the two
// constants below. The legend can therefore never state a rule different from
// the one actually applied — that drift is what this module exists to prevent.
//
// The marker is computed from imported Google review data only. There is no
// tier, payment or manual-selection input, and no column on "Providers" that
// could introduce one. It is deliberately not described as an award, an
// endorsement, or a mark of approval — it reports a threshold, nothing more.

export const TROPHY_MIN_RATING = 4.5;
export const TROPHY_MIN_REVIEWS = 30;

/** Providers meeting both thresholds get the marker. */
export function isTrophyProvider(provider: {
  google_rating?: number | null;
  google_review_count?: number | null;
}): boolean {
  return (
    !!provider.google_rating &&
    provider.google_rating >= TROPHY_MIN_RATING &&
    !!provider.google_review_count &&
    provider.google_review_count >= TROPHY_MIN_REVIEWS
  );
}

/** Visitor-facing explanation, rendered next to the provider list. */
export const TROPHY_LEGEND =
  `🏆 marks providers with a Google rating of ${TROPHY_MIN_RATING} or higher from ` +
  `${TROPHY_MIN_REVIEWS} or more reviews. It is calculated from Google review data — ` +
  `it is not paid for and cannot be purchased.`;

/** Announced in place of the raw emoji by screen readers. */
export const TROPHY_ARIA_LABEL =
  `Google rating ${TROPHY_MIN_RATING} or higher from ${TROPHY_MIN_REVIEWS} or more reviews`;
