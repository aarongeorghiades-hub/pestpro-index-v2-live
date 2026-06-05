import { createServerClient } from '@/utils/supabase-server';
import ResidentialDirectoryClient, { type Provider } from './ResidentialDirectoryClient';

export const revalidate = 3600;

export default async function ResidentialPage() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('Providers')
    .select('*')
    .eq('active', true)
    .eq('business_residential', true)
    .or('regions.cs.["london"]');

  return <ResidentialDirectoryClient initialProviders={(data || []) as Provider[]} />;
}
