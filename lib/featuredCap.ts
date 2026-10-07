/**
 * Featured spots on one area page.
 * 25% of the firms shown on that page, rounded up, and never below 2.
 * A page that lists no firms still has the minimum of 2.
 */
export function featuredSpotCap(firmsShown: number): number {
  const shown = Number.isFinite(firmsShown) && firmsShown > 0 ? Math.floor(firmsShown) : 0;
  return Math.max(2, Math.ceil(shown * 0.25));
}
