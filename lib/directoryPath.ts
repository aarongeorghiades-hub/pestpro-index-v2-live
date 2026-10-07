// Client-safe check: should this URL ask for a featured box?
// City slugs are listed here so the browser bundle does not import the pest
// page copy. The server (lib/featuredContext.ts) decides the real area.

const CITY_SLUGS = new Set([
  'belfast',
  'birmingham',
  'bradford',
  'brighton',
  'bristol',
  'cardiff',
  'coventry',
  'derby',
  'edinburgh',
  'glasgow',
  'hampshire',
  'leeds',
  'leicester',
  'liverpool',
  'london',
  'manchester',
  'newcastle',
  'nottingham',
  'sheffield',
]);

export function normalisePath(pathname: string): string {
  const bare = pathname.split('?')[0].split('#')[0];
  if (bare.length > 1 && bare.endsWith('/')) return bare.slice(0, -1);
  return bare || '/';
}

/** True on area hubs, residential/commercial lists, and /pest-control list pages. */
export function pathMightListProviders(pathname: string): boolean {
  const path = normalisePath(pathname);
  if (path === '/residential' || path === '/commercial' || path === '/pest-control') return true;

  const parts = path.split('/').filter(Boolean);
  if (parts.length === 1 && CITY_SLUGS.has(parts[0])) return true;
  if (
    parts.length === 2 &&
    CITY_SLUGS.has(parts[0]) &&
    (parts[1] === 'residential' || parts[1] === 'commercial')
  ) {
    return true;
  }
  if (parts[0] === 'pest-control' && parts.length >= 2 && parts[1] !== 'regions') return true;
  return false;
}
