import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ClaimForm from '@/components/listing/ClaimForm';
import { getActiveProviderBySlug } from '@/lib/providerLookup';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Claim a listing',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://pestproindex.com/professionals/claim' },
};

export default async function ClaimPage({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug: rawSlug } = await searchParams;
  const slug = (rawSlug || '').trim().toLowerCase();
  const provider = slug ? await getActiveProviderBySlug(slug) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      <ClaimForm
        slug={provider?.slug || ''}
        providerName={provider?.name ?? null}
        notFound={Boolean(slug) && !provider}
      />
    </div>
  );
}
