import { createServerClient } from '@/utils/supabase-server';
import { REGIONS } from '@/lib/providerSubmissions';
import HomeClient, { type RegionCount } from './HomeClient';

export const dynamic = 'force-dynamic';

// London's residential directory lives at /residential, not /london/residential.
// Every other slug follows the /{slug}/residential pattern.
function residentialHref(slug: string): string {
  return slug === 'london' ? '/residential' : `/${slug}/residential`;
}

export default async function HomePage() {
  // Counted on the server so the figures are in the initial HTML — this is the
  // front door, and the cards previously advertised hardcoded numbers that had
  // drifted from the database.
  //
  // One head-only count per region slug, issued in parallel. head: true returns
  // the count header with no rows, matching app/professionals/page.tsx. We never
  // select rows across all regions: PostgREST caps a response at 1,000 rows and
  // there are more active providers than that, so any "fetch all and tally"
  // approach silently undercounts.
  const supabase = createServerClient();

  const regionCounts: RegionCount[] = await Promise.all(
    REGIONS.map(async (region) => {
      // regions is jsonb, so containment must be cs.["slug"]. supabase-js
      // .contains() emits the Postgres array form cs.{"slug"}, which Postgres
      // rejects on a jsonb column with 22P02. This is the same filter the city
      // directory pages use. Slugs come from our own REGIONS constant.
      const { count, error } = await supabase
        .from('Providers')
        .select('canonical_id', { count: 'exact', head: true })
        .eq('active', true)
        .or(`regions.cs.["${region.slug}"]`);

      if (error) {
        console.error(`[SSR fetch] home region count ${region.slug}:`, error.message);
      }

      return {
        slug: region.slug,
        label: region.label,
        href: residentialHref(region.slug),
        // null on failure — the card renders without a number rather than
        // showing 0 or a stale fallback.
        count: error || typeof count !== 'number' ? null : count,
      };
    })
  );

  // Busiest areas first.
  regionCounts.sort((a, b) => (b.count ?? -1) - (a.count ?? -1));

  const { count: nationalCount, error: nationalError } = await supabase
    .from('Providers')
    .select('canonical_id', { count: 'exact', head: true })
    .eq('active', true);

  if (nationalError) {
    console.error('[SSR fetch] home national provider count:', nationalError.message);
  }

  const providerCount =
    nationalError || typeof nationalCount !== 'number' ? null : nationalCount;

  return <HomeClient regionCounts={regionCounts} providerCount={providerCount} />;
}
