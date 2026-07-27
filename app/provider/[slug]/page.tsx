import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProviderDetails from '@/components/ProviderDetails';
import ProviderJsonLd from '@/components/ProviderJsonLd';
import { createServerClient } from '@/utils/supabase-server';
import { isProviderThin } from '@/lib/provider';

export const dynamic = 'force-dynamic';

// Fetch the active provider for a slug. Some providers share a slug — the same
// business is listed under two regions (e.g. nottingham + derby), and a few
// Cardiff records are exact duplicates. `.single()` ERRORS when more than one
// row matches, which previously returned null and rendered an HTTP 200
// "Provider Not Found" page (a soft 404) for ~65 real, active providers.
// Order by review count and take the first row so duplicates resolve to the
// richest listing instead of 404ing.
async function getProvider(slug: string) {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('Providers')
    .select('*')
    .eq('active', true)
    .eq('slug', slug)
    .order('google_review_count', { ascending: false, nullsFirst: false })
    .limit(1);

  if (error) {
    console.error('[SSR fetch] provider:', error.message);
    return null;
  }

  return (data && data[0]) || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const provider = await getProvider(slug);

  // Genuinely missing/inactive provider — the route returns a real 404, so the
  // metadata only needs to keep the page out of the index.
  if (!provider) {
    return {
      title: 'Provider Not Found',
      description: 'This pest control provider could not be found on PestPro Index.',
      robots: { index: false, follow: true },
    };
  }

  const serviceType = provider.commercial && provider.business_residential
    ? 'Pest Control & Pest Removal'
    : provider.commercial
      ? 'Commercial Pest Control & Pest Removal'
      : 'Residential Pest Control & Pest Removal';

  const citySlug = provider.regions?.[0] || 'london';
  const location = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  const title = `${provider.name} | ${serviceType} ${location}`;

  let description = `${provider.name} - pest control and pest removal provider serving ${location}.`;
  if (provider.google_rating && provider.google_review_count) {
    const reviewNoun = provider.google_review_count === 1 ? 'review' : 'reviews';
    description += ` Rated ${provider.google_rating}/5 from ${provider.google_review_count} Google ${reviewNoun}.`;
  }
  description += ' Compare services, certifications and contact details on PestPro Index.';

  // Detect thin providers — noindex pages with insufficient content to avoid soft 404.
  const isThin = isProviderThin(provider);

  return {
    title,
    description,
    alternates: {
      canonical: `https://pestproindex.com/provider/${slug}`,
    },
    ...(isThin && { robots: { index: false, follow: true } }),
    openGraph: {
      title: `${provider.name} | ${serviceType} ${location}`,
      description,
      siteName: 'PestPro Index',
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${provider.name} | ${serviceType} ${location}`,
      description,
    },
  };
}

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const provider = await getProvider(slug);

  // Genuinely absent/inactive → real HTTP 404 (replaces the old 200 soft 404).
  if (!provider) notFound();

  return (
    <>
      <ProviderJsonLd provider={provider} />
      <ProviderDetails provider={provider} />
    </>
  );
}
