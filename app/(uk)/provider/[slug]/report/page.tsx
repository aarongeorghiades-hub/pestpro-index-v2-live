import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import ReportListingForm from '@/components/listing/ReportListingForm';
import { getActiveProviderBySlug } from '@/lib/providerLookup';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: 'Report a listing',
    robots: { index: false, follow: false },
    alternates: { canonical: `https://pestproindex.com/provider/${slug}/report` },
  };
}

export default async function ReportListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = await getActiveProviderBySlug(slug);
  if (!provider) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      <ReportListingForm slug={provider.slug} providerName={provider.name} />
    </div>
  );
}
