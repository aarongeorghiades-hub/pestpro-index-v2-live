import { createServerClient } from '@/utils/supabase-server';
import ResidentialDirectoryClient, { type Provider } from './ResidentialDirectoryClient';
import ListingSchema from '@/components/ListingSchema';
import { cityDirectoryMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export const metadata = cityDirectoryMetadata('Cardiff', 'cardiff');

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
    .select('address, canonical_id, google_rating, google_review_count, name, pest_ants, pest_bed_bugs, pest_bees, pest_beetles, pest_birds, pest_cockroaches, pest_fleas, pest_flies, pest_foxes, pest_ladybirds, pest_mice, pest_moles, pest_moths, pest_pigeons, pest_rats, pest_seagulls, pest_silverfish, pest_spiders, pest_squirrels, pest_wasps, phone, postcode, service_bpca_certified, service_eco_friendly, service_emergency_24_7, service_free_survey, service_guarantee, service_proofing, service_weekend, slug, website')
    .eq('active', true)
    .eq('business_residential', true)
    .or('regions.cs.["cardiff"]');
  if (error) console.error('[SSR fetch] cardiff-residential:', error.message);
  const providers = (data || []).map((p: any) => ({ ...p, postcode: p.postcode || extractPostcode(p.address) }));
  return (
    <>
      <ListingSchema
        providers={providers}
        listName={`Pest Control Providers in Cardiff`}
        listUrl="/cardiff/residential"
        areaName="Cardiff"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Pest Control', url: '/pest-control' },
          { name: 'Cardiff', url: '/cardiff/residential' },
        ]}
      />
      <ResidentialDirectoryClient initialProviders={providers as Provider[]} />
    </>
  );
}
