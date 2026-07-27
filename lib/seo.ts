import type { Metadata } from 'next';

const SITE = 'https://pestproindex.com';

// The residential directory URL for a city. London's directory is the national
// /residential page; every other city lives at /{slug}/residential.
export function cityDirectoryHref(citySlug: string): string {
  return citySlug === 'london' ? '/residential' : `/${citySlug}/residential`;
}

// Unique, intent-matched metadata for a per-city residential directory page.
// Title intentionally omits the "| PestPro Index" suffix — the root layout's
// title template (`%s | PestPro Index`) appends it once.
export function cityDirectoryMetadata(cityName: string, citySlug: string): Metadata {
  const url = `${SITE}/${citySlug}/residential`;
  const title = `Pest Control in ${cityName} — Compare Local Providers`;
  const description = `Compare residential pest control providers in ${cityName}. Filter by pest type, ratings and service features, then contact ${cityName} pest controllers directly. No lead fees, no commissions.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `Pest Control in ${cityName}`,
      description,
      url,
      type: 'website',
      siteName: 'PestPro Index',
      locale: 'en_GB',
    },
  };
}
