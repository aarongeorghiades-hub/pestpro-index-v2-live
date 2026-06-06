import { createServerClient } from '@/utils/supabase-server';
import ResidentialDirectoryClient, { type Provider } from './ResidentialDirectoryClient';
import ListingSchema from '@/components/ListingSchema';
import { cityDirectoryMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export const metadata = cityDirectoryMetadata('Nottingham', 'nottingham');

const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

export default async function ResidentialPage() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('Providers')
    .select('*')
    .eq('active', true)
    .eq('business_residential', true)
    .or('regions.cs.["nottingham"]');
  if (error) console.error('[SSR fetch] nottingham-residential:', error.message);
  const providers = (data || []).map((p: any) => ({ ...p, postcode: p.postcode || extractPostcode(p.address) }));
  return (
    <>
      <ListingSchema
        providers={providers}
        listName={`Pest Control Providers in Nottingham`}
        listUrl="/nottingham/residential"
        areaName="Nottingham"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Nottingham', url: '/nottingham/residential' },
        ]}
      />
      <ResidentialDirectoryClient initialProviders={providers as Provider[]} />
    </>
  );
}
