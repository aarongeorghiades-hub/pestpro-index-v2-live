import { createServerClient } from '@/utils/supabase-server';
import ProfessionalsClient from './ProfessionalsClient';

export const dynamic = 'force-dynamic';

export default async function ProfessionalsPage() {
  // Counted on the server so the figure is in the initial HTML — this is the
  // main provider-acquisition page, and crawlers and no-JS visitors were
  // previously shown no number at all.
  //
  // head: true returns the count header with no rows. Same anonymous read
  // pattern as the city directory pages; the service-role key is never used
  // for public page reads.
  const supabase = createServerClient();
  const { count, error } = await supabase
    .from('Providers')
    .select('canonical_id', { count: 'exact', head: true })
    .eq('active', true);

  if (error) console.error('[SSR fetch] professionals provider count:', error.message);

  // null on failure — the client omits the stat tile and drops the number from
  // the hero sentence rather than showing a stale or invented figure.
  const providerCount = error || typeof count !== 'number' ? null : count;

  return <ProfessionalsClient providerCount={providerCount} />;
}
