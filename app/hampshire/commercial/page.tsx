import { createServerClient } from '@/utils/supabase-server';
import CommercialDirectoryClient, { type Provider } from './CommercialDirectoryClient';
import type { Metadata } from 'next';

// Commercial directory pages are pruned from the index (thin/duplicate service-lead content).
export const metadata: Metadata = { robots: { index: false, follow: true } };

export const dynamic = 'force-dynamic';

const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

export default async function CommercialPage() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('Providers')
    .select('address, basis_prompt, bpca_member, business_healthcare, business_hotels, business_offices, business_restaurants, business_retail, business_schools, business_warehouses, canonical_id, cepa_certified, chas_accredited, constructionline, detection_dogs, eco_friendly_methods, education, emergency_24_7, falconry_bird_control, flexible_contracts, food_production, free_quotes, free_surveys, fumigation, google_rating, google_review_count, guarantees_offered, healthcare, heat_treatment, high_rise_rope_access, hospitality, humane_non_lethal_methods, insurance_details_published, iso_14001, iso_45001, iso_9001, leisure_facilities, multi_site_coverage, name, national_coverage, no_tie_in_contracts, non_disruptive_services, npta_member, offices, one_off_services, out_of_hours_services, peta_endorsed, phone, postcode, proofing_services, property_management, retail, retainer_services, rspca_recognized, rsph_level_2, safe_contractor, same_day_service, service_areas_documented, service_eco_friendly, service_emergency_24_7, service_free_survey, service_guarantee, slug, social_housing, specialist_heat_treatment, specialist_pest_proofing, technicians_50_plus, trustmark, unmarked_vehicles, warehousing_logistics, website, years_established_25_plus')
    .eq('active', true)
    .eq('commercial', true)
    .or('regions.cs.["hampshire"]');
  if (error) console.error('[SSR fetch] hampshire-commercial:', error.message);
  const providers = (data || []).map((p: any) => ({ ...p, postcode: p.postcode || extractPostcode(p.address) }));
  return <CommercialDirectoryClient initialProviders={providers as Provider[]} />;
}
