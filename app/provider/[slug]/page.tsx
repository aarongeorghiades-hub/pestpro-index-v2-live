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
  const canonicalUrl = `https://pestproindex.com/provider/${slug}`;

  return {
    title: 'Pest Control Provider',
    description: 'View pest control provider details, ratings, certifications, and contact information on PestPro Index.',
    alternates: {
      canonical: canonicalUrl,
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
