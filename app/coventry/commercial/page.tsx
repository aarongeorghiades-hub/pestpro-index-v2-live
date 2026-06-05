import { createServerClient } from '@/utils/supabase-server';
import CommercialDirectoryClient, { type Provider } from './CommercialDirectoryClient';

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
    .or('regions.cs.["coventry"]');
  if (error) console.error('[SSR fetch] coventry-commercial:', error.message);
  const providers = (data || []).map((p: any) => ({ ...p, postcode: p.postcode || extractPostcode(p.address) }));
  return <CommercialDirectoryClient initialProviders={providers as Provider[]} />;
}
