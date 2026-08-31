// Force any provider-supplied website value to an absolute https URL.
// A bare domain ("example.com") in an href has no scheme, so the browser
// resolves it against the current path — producing /{city}/{domain} URLs that
// 404. Routing every outbound provider link through this helper guarantees a
// scheme is present before the value ever reaches the DOM.
export function externalHref(url: string | null | undefined): string {
  if (!url) return '';
  const trimmed = url.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed.replace(/^\/+/, '')}`;
}

// Standard rel for outbound provider links. A directory listing is not an
// editorial endorsement, so links are nofollow; the security pair is required
// alongside target="_blank".
export const EXTERNAL_LINK_REL = 'nofollow noopener noreferrer';

// rel for affiliate / sponsored outbound links (e.g. Amazon links carrying our
// tracking tag). Google asks paid/affiliate links to be marked rel="sponsored".
export const SPONSORED_LINK_REL = 'sponsored nofollow noopener noreferrer';

// THE ONE PLACE THE UK AMAZON ASSOCIATES TAG IS EXPRESSED (S60 R6). Before this
// round the string 'pestproindex2-21' was hardcoded in eleven separate places
// across the UK estate — the ProductCard component, two local
// AMAZON_TRACKING_ID declarations, seven raw ?tag= literals in page source, and
// this file's own detection regex — each one a place a future edit could change
// the value in ten places and miss the eleventh. This mirrors the pattern
// UsToolCard.tsx already uses for the US tag: one exported constant, every
// consumer imports it. This round changed WHERE the tag lives, never WHAT it
// is — the value is unchanged, still 'pestproindex2-21'.
export const UK_AMAZON_TAG = 'pestproindex2-21';

// True when a URL is one of our affiliate links — used where a single link
// element renders a mix of editorial and affiliate destinations.
export function isAffiliateUrl(url: string | null | undefined): boolean {
  return new RegExp(`tag=${UK_AMAZON_TAG}|amzn\\.to`, 'i').test(url || '');
}
