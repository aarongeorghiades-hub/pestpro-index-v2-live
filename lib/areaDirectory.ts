// Server-side area counts. Paginated on purpose: PostgREST stops at 1,000 rows,
// and a head count cannot apply a postcode rule.

import { createServerClient } from '@/utils/supabase-server';
import { LOCATIONS, PESTS } from '@/app/(uk)/pest-control/pest-city-config';
import { inCity, placesIn, splitPlace } from '@/lib/serviceArea';

const PEST_COLUMNS = new Set(PESTS.map((pest) => pest.filterColumn));

type AreaRow = { postcode: string | null; address: string | null };

async function fetchAreaRows(
  city: string,
  kind: 'residential' | 'commercial' | 'all',
  pestColumn?: string,
): Promise<AreaRow[] | null> {
  const pageSize = 1000;
  const rows: AreaRow[] = [];
  for (let from = 0; ; from += pageSize) {
    let query = createServerClient()
      .from('Providers')
      .select('postcode, address')
      .eq('active', true)
      .or(`regions.cs.["${city}"]`)
      .range(from, from + pageSize - 1);
    if (kind === 'residential') query = query.eq('business_residential', true);
    if (kind === 'commercial') query = query.eq('commercial', true);
    if (pestColumn) query = query.eq(pestColumn, true);
    const { data, error } = await query;
    if (error) {
      console.error(`[SSR fetch] area rows ${city} ${kind}:`, error.message);
      return null;
    }
    rows.push(...((data || []) as AreaRow[]));
    if (!data || data.length < pageSize) break;
  }
  return rows;
}

export async function countServing(
  city: string,
  kind: 'residential' | 'commercial' | 'all' = 'all',
): Promise<number | null> {
  const rows = await fetchAreaRows(city, kind);
  if (!rows) return null;
  return inCity(rows, city).length;
}

/**
 * Every active firm tagged to the city, including a postcode outside the city.
 * A place page shows all of these: the based-in section plus "also covering".
 */
export async function countTagged(
  city: string,
  kind: 'residential' | 'commercial' | 'all' = 'residential',
): Promise<number | null> {
  const rows = await fetchAreaRows(city, kind);
  if (!rows) return null;
  return rows.length;
}

/**
 * Firms a city × pest page actually lists. An empty pest match falls back to
 * the residential city list, which is what that page renders.
 */
export async function countPestPage(city: string, pestColumn: string): Promise<number | null> {
  if (!PEST_COLUMNS.has(pestColumn)) return null;
  const rows = await fetchAreaRows(city, 'residential', pestColumn);
  if (!rows) return null;
  const matched = inCity(rows, city).length;
  if (matched > 0) return matched;
  return countServing(city, 'residential');
}

/** True when at least one residential firm has a postcode in this place. */
export async function placeIsIndexable(city: string, placeSlug: string): Promise<boolean> {
  const rows = await fetchAreaRows(city, 'residential');
  if (!rows) return false;
  return splitPlace(rows, city, placeSlug).local.length > 0;
}

/**
 * True when a city × pest page has no in-city firm for that pest, so the page
 * falls back to the wider city list and should stay out of the index.
 * An unknown column is treated as a fallback rather than interpolated.
 * A failed read returns false so a blip does not noindex the page.
 */
export async function pestPageFallsBack(city: string, pestColumn: string): Promise<boolean> {
  if (!PEST_COLUMNS.has(pestColumn)) return true;
  const rows = await fetchAreaRows(city, 'residential', pestColumn);
  if (!rows) return false;
  return inCity(rows, city).length === 0;
}

/** Residential firms with a postcode in each place, keyed by place slug. */
export async function localCounts(city: string): Promise<Record<string, number> | null> {
  const rows = await fetchAreaRows(city, 'residential');
  if (!rows) return null;
  const counts: Record<string, number> = {};
  for (const place of placesIn(city)) {
    counts[place.slug] = splitPlace(rows, city, place.slug).local.length;
  }
  return counts;
}

export type DirectoryIndex = {
  /** Place slugs with at least one residential firm whose postcode is in that place. */
  places: Record<string, string[]>;
  /** `city/pest` keys that have at least one in-city residential firm for that pest. */
  pests: string[];
};

/**
 * One paginated read used by the sitemap. Null when the read fails, so the
 * sitemap can keep listing every place rather than dropping them on a blip.
 */
export async function loadDirectoryIndex(): Promise<DirectoryIndex | null> {
  const pestCols = PESTS.map((pest) => pest.filterColumn);
  const pageSize = 1000;
  const rows: Record<string, unknown>[] = [];
  for (let from = 0; ; from += pageSize) {
    const { data, error } = await createServerClient()
      .from('Providers')
      .select(['postcode', 'address', 'regions', 'business_residential', ...pestCols].join(', '))
      .eq('active', true)
      .range(from, from + pageSize - 1);
    if (error) {
      console.error('[SSR fetch] directory index:', error.message);
      return null;
    }
    rows.push(...((data || []) as unknown as Record<string, unknown>[]));
    if (!data || data.length < pageSize) break;
  }

  const places: Record<string, string[]> = {};
  const pests: string[] = [];
  for (const location of LOCATIONS) {
    const city = location.region;
    const residential = rows.filter(
      (row) =>
        row.business_residential === true &&
        Array.isArray(row.regions) &&
        (row.regions as string[]).includes(city),
    ) as { postcode?: string | null; address?: string | null }[];
    places[city] = placesIn(city)
      .filter((place) => splitPlace(residential, city, place.slug).local.length > 0)
      .map((place) => place.slug);
    for (const pest of PESTS) {
      const matching = residential.filter((row) => (row as Record<string, unknown>)[pest.filterColumn] === true);
      if (inCity(matching, city).length > 0) pests.push(`${location.slug}/${pest.slug}`);
    }
  }
  return { places, pests };
}
