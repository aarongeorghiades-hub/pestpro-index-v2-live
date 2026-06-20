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
