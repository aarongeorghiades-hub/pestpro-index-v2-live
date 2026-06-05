import { createServerClient } from '@/utils/supabase-server';
import CommercialDirectoryClient, { type Provider } from './CommercialDirectoryClient';

export const dynamic = 'force-dynamic';

export default async function CommercialPage() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('Providers')
    .select('*')
    .eq('active', true)
    .eq('commercial', true)
    .or('regions.cs.["london"]');
  if (error) console.error('[SSR fetch] commercial:', error.message);

  return <CommercialDirectoryClient initialProviders={(data || []) as Provider[]} />;
}
