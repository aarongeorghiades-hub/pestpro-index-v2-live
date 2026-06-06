import type { Metadata } from 'next';

const SITE = 'https://pestproindex.com';

// Unique, intent-matched metadata for a per-city residential directory page.
// Title intentionally omits the "| PestPro Index" suffix — the root layout's
// title template (`%s | PestPro Index`) appends it once.
export function cityDirectoryMetadata(cityName: string, citySlug: string): Metadata {
  const url = `${SITE}/${citySlug}/residential`;
  const title = `Pest Control in ${cityName} — Compare Verified Local Providers`;
  const description = `Compare verified residential pest control providers in ${cityName}. Filter by pest type, ratings and service features, then contact ${cityName} pest controllers directly. No lead fees, no commissions.`;
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
