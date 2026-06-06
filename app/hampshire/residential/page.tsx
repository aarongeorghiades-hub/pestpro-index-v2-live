import { createServerClient } from '@/utils/supabase-server';
import ResidentialDirectoryClient, { type Provider } from './ResidentialDirectoryClient';
import ListingSchema from '@/components/ListingSchema';
import { cityDirectoryMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export const metadata = cityDirectoryMetadata('Hampshire', 'hampshire');

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
    .or('regions.cs.["hampshire"]');
  if (error) console.error('[SSR fetch] hampshire-residential:', error.message);
  const providers = (data || []).map((p: any) => ({ ...p, postcode: p.postcode || extractPostcode(p.address) }));
  return (
    <>
      <ListingSchema
        providers={providers}
        listName={`Pest Control Providers in Hampshire`}
        listUrl="/hampshire/residential"
        areaName="Hampshire"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Pest Control', url: '/pest-control' },
          { name: 'Hampshire', url: '/hampshire/residential' },
        ]}
      />
      <ResidentialDirectoryClient initialProviders={providers as Provider[]} />
    </>
  );
}
