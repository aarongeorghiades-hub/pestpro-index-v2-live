import { Metadata } from 'next';
import ProviderPageContent from '@/components/ProviderPageContent';
import ProviderJsonLd from '@/components/ProviderJsonLd';
import { createClient } from '@/utils/supabase';

async function getProvider(slug: string) {
  const supabase = createClient();
  const { data: provider, error } = await supabase
    .from('Providers')
    .select('*')
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
  
  const location = provider.regions?.includes('birmingham') ? 'Birmingham' : 'London';
  const title = `${provider.name} | ${serviceType} ${location}`;

  // Build dynamic description
  let description = `${provider.name} - pest control and pest removal provider serving ${location}.`;
  if (provider.google_rating && provider.google_review_count) {
    description += ` Rated ${provider.google_rating}/5 from ${provider.google_review_count} Google reviews.`;
  }
  description += ' Compare services, certifications and contact details on PestPro Index.';

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `https://pestproindex.com/provider/${slug}`,
    },
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
