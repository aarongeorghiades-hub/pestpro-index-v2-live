import type { Metadata } from 'next';
import { createServerClient } from '@/utils/supabase-server';
import ResidentialDirectoryClient, { type Provider } from './ResidentialDirectoryClient';
import ListingSchema from '@/components/ListingSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Residential Pest Control in London — Compare Providers',
  description:
    'Compare residential pest control providers across London. Filter by pest type, ratings and service features, then contact London pest controllers directly. No lead fees, no commissions.',
  alternates: { canonical: 'https://pestproindex.com/residential' },
  openGraph: {
    title: 'Residential Pest Control in London',
    description:
      'Compare residential pest control providers across London. No lead fees, no commissions.',
    url: 'https://pestproindex.com/residential',
    type: 'website',
    siteName: 'PestPro Index',
    locale: 'en_GB',
  },
};

export default async function ResidentialPage() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('Providers')
    .select('canonical_id, google_rating, google_review_count, name, pest_ants, pest_bed_bugs, pest_bees, pest_beetles, pest_birds, pest_cockroaches, pest_fleas, pest_flies, pest_foxes, pest_ladybirds, pest_mice, pest_moles, pest_moths, pest_pigeons, pest_rats, pest_seagulls, pest_silverfish, pest_spiders, pest_squirrels, pest_wasps, phone, postcode, service_bpca_certified, service_eco_friendly, service_emergency_24_7, service_free_survey, service_guarantee, service_proofing, service_weekend, slug, website')
    .eq('active', true)
    .eq('business_residential', true)
    .or('regions.cs.["london"]');
  if (error) console.error('[SSR fetch] residential:', error.message);
  const providers = (data || []) as Provider[];

  return (
    <>
      <ListingSchema
        providers={providers}
        listName="Residential Pest Control Providers in London"
        listUrl="/residential"
        areaName="London"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Pest Control', url: '/pest-control' },
          { name: 'London', url: '/residential' },
        ]}
      />
      <ResidentialDirectoryClient initialProviders={providers} />
    </>
  );
}
