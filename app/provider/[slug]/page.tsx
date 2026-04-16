import { Metadata } from 'next';
import ProviderPageContent from '@/components/ProviderPageContent';
import ProviderJsonLd from '@/components/ProviderJsonLd';
import { createClient } from '@/utils/supabase';

// Providers that GSC reported as soft 404s — noindex them explicitly
// even when the automatic thin-content threshold doesn't fire.
const NOINDEX_SLUGS = new Set([
  'eko-services',
  'gb-pest-control',
  'aderyn-pest-control-cardiff',
  'derby-pest-control-service',
  'greener-ways-pest-control-cardiff',
  'ratcure-pest-control-cardiff',
  'servicecare-pest-solutions-cardiff',
  'country-wildlife-management-cardiff',
  'sj-pest-control-cardiff',
  'welsh-pest-control-services',
  'anti-pest-south-wales',
  'pest-solutions-cardiff',
  'able-group-gwent',
  'predator-pest-control-cardiff',
  'mr-wasp-cardiff',
  'heath-pest-control-services',
  'pest-professionals-derby',
  'thermopest-bed-bug-treatment',
  'peak-forest-pest-control',
  'rathbone-pest-control-cardiff',
  'derbyshire-site-services',
  'musca-pest-management-services',
  'dial-a-kill',
  'hatfields-pest-control',
  'pest-arrest-derby',
  'vista-environmental',
  'peak-pest-control',
  'driveout-site-services',
  'the-pest-control-co-pestco',
  'projex-pest-control-bradford',
]);

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
  const hasContact = provider.phone || provider.website || provider.email;
  const hasRating = provider.google_rating && provider.google_rating > 0;
  const isThinProvider = !hasContact && !hasRating;
  const isManualNoindex = NOINDEX_SLUGS.has(slug);

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `https://pestproindex.com/provider/${slug}`,
    },
    ...((isThinProvider || isManualNoindex) && { robots: { index: false, follow: true } }),
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
