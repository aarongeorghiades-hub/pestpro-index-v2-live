/**
 * Formats a count for display, with a thousands separator above 999.
 *
 * The locale is pinned to en-GB rather than left to the runtime default: this
 * is rendered on the server and again on the client during hydration, and an
 * unpinned toLocaleString would produce a different string under a different
 * system locale, causing a hydration mismatch.
 *
 * Single source of truth — every count render site should call this rather
 * than formatting inline, so separators cannot diverge between surfaces.
 */
export function formatCount(value: number): string {
  return value.toLocaleString('en-GB');
}
