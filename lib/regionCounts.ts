// SERVER-ONLY helpers for counting providers behind the /pest-control region
// data. Imported by server components; do not import from a client component.
//
// Counts are always head-only: .select('canonical_id', { count: 'exact',
// head: true }) returns the count header with no rows. Nothing here selects or
// paginates rows — PostgREST caps a response at 1,000 and there are more active
// providers than that, so any "fetch all and tally" approach undercounts.
//
// regions is jsonb, so containment must be cs.["slug"]. supabase-js .contains()
// emits the Postgres array form cs.{"slug"}, which Postgres rejects with 22P02.

import { createServerClient } from '@/utils/supabase-server';
import type { Region, RegionCity } from '@/app/pest-control/data/regions';

/** Which directory a city entry points at, and therefore how to count it. */
export type CityTarget = { slug: string; kind: 'residential' | 'commercial' };

/**
 * Derives the regions-jsonb slug and the residential/commercial split from a
 * city entry's existing link target, so no second mapping has to be maintained.
 *
 * London is the exception: its directories live at /residential and /commercial
 * rather than /london/residential.
 *
 * Returns null for entries that point at no directory — "Browse by Borough"
 * (areasLink) and the coming-soon entries with no link at all. Those render no
 * number rather than a guessed one.
 */
export function cityTarget(city: RegionCity): CityTarget | null {
  const link = city.residentialLink ?? city.commercialLink;
  if (!link) return null;

  const kind: CityTarget['kind'] = city.residentialLink ? 'residential' : 'commercial';

  if (link === '/residential' || link === '/commercial') return { slug: 'london', kind };

  const m = link.match(/^\/([a-z-]+)\/(residential|commercial)$/);
  return m ? { slug: m[1], kind } : null;
}

function countQuery(slug: string) {
  return createServerClient()
    .from('Providers')
    .select('canonical_id', { count: 'exact', head: true })
    .eq('active', true)
    .or(`regions.cs.["${slug}"]`);
}

/** Active providers in a slug, optionally narrowed to one directory. */
export async function countForTarget(target: CityTarget): Promise<number | null> {
  let q = countQuery(target.slug);
  // The commercial directories filter on `commercial`, not business_commercial —
  // the two differ substantially and only `commercial` matches what they list.
  q = target.kind === 'residential' ? q.eq('business_residential', true) : q.eq('commercial', true);

  const { count, error } = await q;
  if (error) {
    console.error(`[SSR fetch] ${target.kind} count ${target.slug}:`, error.message);
    return null;
  }
  return typeof count === 'number' ? count : null;
}

/** Total active providers in a slug, ignoring the residential/commercial split. */
export async function countForSlug(slug: string): Promise<number | null> {
  const { count, error } = await countQuery(slug);
  if (error) {
    console.error(`[SSR fetch] slug count ${slug}:`, error.message);
    return null;
  }
  return typeof count === 'number' ? count : null;
}

/**
 * Total providers per region, keyed by region slug.
 *
 * A region's figure is the sum of its DISTINCT city slugs — a region lists both
 * a residential and a commercial entry for the same city, and adding both would
 * double-count that city's providers.
 *
 * Null when a region references no real slug, or when every one of its lookups
 * failed. A partial failure contributes nothing rather than poisoning the total.
 */
export async function countsByRegion(regions: Region[]): Promise<Record<string, number | null>> {
  const slugs = Array.from(
    new Set(
      regions.flatMap((region) =>
        region.cities.map((city) => cityTarget(city)?.slug).filter((s): s is string => !!s)
      )
    )
  );

  const resolved = await Promise.all(
    slugs.map(async (slug) => [slug, await countForSlug(slug)] as const)
  );
  const bySlug = new Map(resolved);

  const out: Record<string, number | null> = {};
  for (const region of regions) {
    const regionSlugs = Array.from(
      new Set(
        region.cities.map((city) => cityTarget(city)?.slug).filter((s): s is string => !!s)
      )
    );
    const counts = regionSlugs.map((s) => bySlug.get(s)).filter((n): n is number => typeof n === 'number');
    out[region.slug] = counts.length > 0 ? counts.reduce((a, b) => a + b, 0) : null;
  }
  return out;
}
