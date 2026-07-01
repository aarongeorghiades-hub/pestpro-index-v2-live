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
    .select('*')
    .eq('active', true)
    .eq('commercial', true)
    .or('regions.cs.["hampshire"]');
  if (error) console.error('[SSR fetch] hampshire-commercial:', error.message);
  const providers = (data || []).map((p: any) => ({ ...p, postcode: p.postcode || extractPostcode(p.address) }));
  return <CommercialDirectoryClient initialProviders={providers as Provider[]} />;
}
