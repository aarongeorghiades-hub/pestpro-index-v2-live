import { createServerClient } from '@/utils/supabase-server';
import CommercialDirectoryClient, { type Provider } from './CommercialDirectoryClient';

export const revalidate = 3600;

export default async function CommercialPage() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('Providers')
    .select('*')
    .eq('active', true)
    .eq('commercial', true)
    .or('regions.cs.["london"]');

  return <CommercialDirectoryClient initialProviders={(data || []) as Provider[]} />;
}
