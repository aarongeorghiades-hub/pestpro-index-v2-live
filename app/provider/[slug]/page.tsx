import { Metadata } from 'next';
import ProviderPageContent from '@/components/ProviderPageContent';
import ProviderJsonLd from '@/components/ProviderJsonLd';
import { createClient } from '@/utils/supabase';

// A provider page is "thin" (low unique value → soft 404 risk) when it lacks
// enough distinguishing signals. Score the available content and noindex any
// provider that falls below the threshold. This replaces the old hardcoded
// NOINDEX_SLUGS list so new thin providers are handled automatically.
function isProviderThin(provider: {
  phone?: string | null;
  website?: string | null;
  email?: string | null;
  google_rating?: number | null;
  google_review_count?: number | null;
  profile_text?: string | null;
}): boolean {
  let score = 0;
  if (provider.phone) score += 1;
  if (provider.website) score += 2;        // website is higher value — 2 points
  if (provider.email) score += 1;
  if (provider.google_rating && provider.google_rating > 0) score += 1;
  if (provider.google_review_count && provider.google_review_count >= 3) score += 2; // reviews are strong signal
  if (provider.profile_text && provider.profile_text.length > 50) score += 1;
  return score < 3;  // score below 3 = thin
}

async function getProvider(slug: string) {
  const supabase = createClient();
  const { data: provider, error } = await supabase
    .from('Providers')
    .select('*')
    .eq('active', true)
    .eq('slug', slug)
    .single();

  if (error || !provider) {
    return null;
  }

  return provider;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const provider = await getProvider(slug);

  if (!provider) {
    return {
      title: 'Provider Not Found',
      description: 'This pest control provider could not be found on PestPro Index.',
      alternates: {
        canonical: `https://pestproindex.com/provider/${slug}`,
      },
    };
  }

  // Build dynamic title
  const serviceType = provider.commercial && provider.residential
    ? 'Pest Control & Pest Removal'
    : provider.commercial
      ? 'Commercial Pest Control & Pest Removal'
      : 'Residential Pest Control & Pest Removal';

  const citySlug = provider.regions?.[0] || 'london';
  const location = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  const title = `${provider.name} | ${serviceType} ${location}`;

  // Build dynamic description
  let description = `${provider.name} - pest control and pest removal provider serving ${location}.`;
  if (provider.google_rating && provider.google_review_count) {
    description += ` Rated ${provider.google_rating}/5 from ${provider.google_review_count} Google reviews.`;
  }
  description += ' Compare services, certifications and contact details on PestPro Index.';

  // Detect thin providers — noindex pages with insufficient content to avoid soft 404
  const isThin = isProviderThin(provider);

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `https://pestproindex.com/provider/${slug}`,
    },
    ...(isThin && { robots: { index: false, follow: true } }),
    openGraph: {
      title: `${provider.name} | ${serviceType} ${location}`,
      description: description,
      siteName: 'PestPro Index',
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${provider.name} | ${serviceType} ${location}`,
      description: description,
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

  return (
    <>
      {provider && <ProviderJsonLd provider={provider} />}
      <ProviderPageContent />
    </>
  );
}
