import { Metadata } from 'next';
import ProviderPageContent from '@/components/ProviderPageContent';
import ProviderJsonLd from '@/components/ProviderJsonLd';
import { createClient } from '@/utils/supabase';

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[&]/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

async function getProvider(slug: string) {
  const supabase = createClient();
  const { data: providers, error } = await supabase
    .from('Providers')
    .select('*');

  if (error || !providers) {
    return null;
  }

  return providers.find(p => generateSlug(p.name) === slug) || null;
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
    ? 'Pest Control' 
    : provider.commercial 
      ? 'Commercial Pest Control' 
      : 'Residential Pest Control';
  
  const location = provider.regions?.includes('birmingham') ? 'Birmingham' : 'London';
  const title = `${provider.name} | ${serviceType} ${location}`;

  // Build dynamic description
  let description = `${provider.name} - ${serviceType.toLowerCase()} provider serving ${location}.`;
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
