// SERVER-ONLY helpers for counting providers behind the /pest-control region
// data. Imported by server components; do not import from a client component.
//
// The figure is firms whose postcode actually sits in that city, not every row
// tagged with the region. A head count cannot apply that rule, so the read is
// paginated (PostgREST stops at 1,000 rows) and then filtered.
//
// regions is jsonb, so containment must be cs.["slug"]. supabase-js .contains()
// emits the Postgres array form cs.{"slug"}, which Postgres rejects with 22P02.

import { formatCount } from '@/lib/formatCount';
import { countServing } from '@/lib/areaDirectory';
import type { Region, RegionCity } from '@/app/(uk)/pest-control/data/regions';

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

/** Active providers in a slug, narrowed to the directory the city link points at. */
export async function countForTarget(target: CityTarget): Promise<number | null> {
  // The commercial directories filter on `commercial`, not business_commercial —
  // the two differ substantially and only `commercial` matches what they list.
  return countServing(target.slug, target.kind);
}

/** Active providers in a slug whose postcode is in that city. */
export async function countForSlug(slug: string): Promise<number | null> {
  return countServing(slug, 'all');
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

/**
 * Substitutes a live count into a region string carrying a {count} placeholder.
 *
 * The region prose in data/regions.ts holds a placeholder rather than a figure,
 * so the numbers cannot go stale. When the count is unavailable the numbered
 * phrase is removed outright and the sentence is left reading naturally —
 * never a zero, never a blank where a number should be.
 *
 * Three shapes exist in the data:
 *   "… | {count} Providers"              -> "…"
 *   "Compare {count} pest control …"     -> "Compare pest control …"
 *   "… with {count} providers, …"        -> "…, …"
 */
export function withCount(text: string, count: number | null): string {
  // Global, not first-only: a metaDescription carries the figure twice ("Compare
  // {count} providers across X. Covering Y with {count} providers.") and a
  // first-only replace would leave the second token literal in the head.
  if (count !== null) return text.replace(/\{count\}/g, formatCount(count));

  return text
    .replace(/ \| \{count\} Providers/g, '')
    .replace(/Compare \{count\} /g, 'Compare ')
    .replace(/ with \{count\} providers/g, '')
    .replace(/\{count\} /g, '')
    .replace(/\{count\}/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
