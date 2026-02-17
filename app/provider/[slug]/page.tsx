import { Metadata } from 'next';
import ProviderPageContent from '@/components/ProviderPageContent';

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug;
  const canonicalUrl = `https://pestproindex.com/provider/${slug}`;

  return {
    title: 'Pest Control Provider | PestPro Index',
    description: 'View pest control provider details, ratings, certifications, and contact information on PestPro Index.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function ProviderPage() {
  return <ProviderPageContent />;
}
