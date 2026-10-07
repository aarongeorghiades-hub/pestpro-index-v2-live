import { LOCATIONS, PESTS } from '@/app/(uk)/pest-control/pest-city-config';
import { belfastBoroughs } from '@/app/(uk)/pest-control/belfast/belfast-boroughs';
import { birminghamBoroughs } from '@/app/(uk)/pest-control/birmingham/birmingham-boroughs';
import { bradfordBoroughs } from '@/app/(uk)/pest-control/bradford/bradford-boroughs';
import { brightonBoroughs } from '@/app/(uk)/pest-control/brighton/brighton-boroughs';
import { bristolBoroughs } from '@/app/(uk)/pest-control/bristol/bristol-boroughs';
import { cardiffBoroughs } from '@/app/(uk)/pest-control/cardiff/cardiff-boroughs';
import { coventryBoroughs } from '@/app/(uk)/pest-control/coventry/coventry-boroughs';
import { derbyBoroughs } from '@/app/(uk)/pest-control/derby/derby-boroughs';
import { edinburghBoroughs } from '@/app/(uk)/pest-control/edinburgh/edinburgh-boroughs';
import { glasgowBoroughs } from '@/app/(uk)/pest-control/glasgow/glasgow-boroughs';
import { hampshireTowns } from '@/app/(uk)/pest-control/hampshire/hampshire-towns';
import { leedsBoroughs } from '@/app/(uk)/pest-control/leeds/leeds-boroughs';
import { leicesterBoroughs } from '@/app/(uk)/pest-control/leicester/leicester-boroughs';
import { liverpoolBoroughs } from '@/app/(uk)/pest-control/liverpool/liverpool-boroughs';
import { londonBoroughs } from '@/app/(uk)/pest-control/london/london-boroughs';
import { manchesterBoroughs } from '@/app/(uk)/pest-control/manchester/manchester-boroughs';
import { newcastleBoroughs } from '@/app/(uk)/pest-control/newcastle/newcastle-boroughs';
import { nottinghamBoroughs } from '@/app/(uk)/pest-control/nottingham/nottingham-boroughs';
import { sheffieldBoroughs } from '@/app/(uk)/pest-control/sheffield/sheffield-boroughs';
import { normalisePath } from '@/lib/directoryPath';

export type FeaturedQuery = {
  area: string;
  /** Providers column such as pest_rats. Only set on a city × pest page. */
  pestColumn?: string;
};

/**
 * Which firm list a directory URL renders, so the featured cap can use that
 * count. `place` is a borough or town page: based-in firms plus also covering.
 * `none` is a hub that does not list firms.
 */
export type ShownList =
  | { area: string; list: 'residential' | 'commercial' | 'all' | 'place' | 'none' }
  | { area: string; list: 'pest'; pestColumn: string };

const CITY_SLUGS = new Set(LOCATIONS.map((location) => location.slug));

const PEST_COLUMN_BY_SLUG = new Map(PESTS.map((pest) => [pest.slug, pest.filterColumn]));

/** Columns the featured query is allowed to filter on. Nothing else is interpolated. */
export const FEATURED_PEST_COLUMNS = new Set(PESTS.map((pest) => pest.filterColumn));

const BOROUGH_TO_CITY = new Map<string, string>();

function addBoroughs(city: string, rows: { slug: string }[]) {
  for (const row of rows) {
    if (!BOROUGH_TO_CITY.has(row.slug)) BOROUGH_TO_CITY.set(row.slug, city);
  }
}

addBoroughs('belfast', belfastBoroughs);
addBoroughs('birmingham', birminghamBoroughs);
addBoroughs('bradford', bradfordBoroughs);
addBoroughs('brighton', brightonBoroughs);
addBoroughs('bristol', bristolBoroughs);
addBoroughs('cardiff', cardiffBoroughs);
addBoroughs('coventry', coventryBoroughs);
addBoroughs('derby', derbyBoroughs);
addBoroughs('edinburgh', edinburghBoroughs);
addBoroughs('glasgow', glasgowBoroughs);
addBoroughs('hampshire', hampshireTowns);
addBoroughs('leeds', leedsBoroughs);
addBoroughs('leicester', leicesterBoroughs);
addBoroughs('liverpool', liverpoolBoroughs);
addBoroughs('london', londonBoroughs);
addBoroughs('manchester', manchesterBoroughs);
addBoroughs('newcastle', newcastleBoroughs);
addBoroughs('nottingham', nottinghamBoroughs);
addBoroughs('sheffield', sheffieldBoroughs);

/** Which firm list this URL renders. Null when the path is not a directory page. */
export function shownListForPath(pathname: string): ShownList | null {
  const path = normalisePath(pathname);
  if (path === '/residential') return { area: 'london', list: 'residential' };
  if (path === '/commercial') return { area: 'london', list: 'commercial' };
  if (path === '/pest-control') return { area: 'london', list: 'none' };

  const parts = path.split('/').filter(Boolean);

  if (parts.length === 1 && CITY_SLUGS.has(parts[0])) return { area: parts[0], list: 'all' };

  if (parts.length === 2 && CITY_SLUGS.has(parts[0]) && parts[1] === 'residential') {
    return { area: parts[0], list: 'residential' };
  }
  if (parts.length === 2 && CITY_SLUGS.has(parts[0]) && parts[1] === 'commercial') {
    return { area: parts[0], list: 'commercial' };
  }

  if (parts[0] !== 'pest-control') return null;

  if (parts.length === 2 && CITY_SLUGS.has(parts[1])) return { area: parts[1], list: 'none' };

  if (parts.length === 2) {
    const pestColumn = PEST_COLUMN_BY_SLUG.get(parts[1]);
    const city = BOROUGH_TO_CITY.get(parts[1]);
    if (pestColumn && city) return { area: city, list: 'pest', pestColumn };
    return city ? { area: city, list: 'place' } : null;
  }

  if (parts.length === 3 && CITY_SLUGS.has(parts[1])) {
    const pestColumn = PEST_COLUMN_BY_SLUG.get(parts[2]);
    if (pestColumn && FEATURED_PEST_COLUMNS.has(pestColumn)) {
      return { area: parts[1], list: 'pest', pestColumn };
    }
    if (BOROUGH_TO_CITY.get(parts[2]) === parts[1]) return { area: parts[1], list: 'place' };
    return { area: parts[1], list: 'none' };
  }

  return null;
}

/**
 * Which featured box a directory URL should ask for.
 * Returns null on product pages, guides, and region indexes.
 * Borough pages map to their city: those pages list the city's providers.
 */
export function featuredQueryForPath(pathname: string): FeaturedQuery | null {
  const path = normalisePath(pathname);
  if (path === '/residential' || path === '/commercial' || path === '/pest-control') {
    return { area: 'london' };
  }

  const parts = path.split('/').filter(Boolean);

  if (parts.length === 1 && CITY_SLUGS.has(parts[0])) return { area: parts[0] };

  if (
    parts.length === 2 &&
    CITY_SLUGS.has(parts[0]) &&
    (parts[1] === 'residential' || parts[1] === 'commercial')
  ) {
    return { area: parts[0] };
  }

  if (parts[0] !== 'pest-control') return null;

  if (parts.length === 2 && CITY_SLUGS.has(parts[1])) return { area: parts[1] };

  if (parts.length === 2) {
    const city = BOROUGH_TO_CITY.get(parts[1]);
    return city ? { area: city } : null;
  }

  if (parts.length === 3 && CITY_SLUGS.has(parts[1])) {
    const pestColumn = PEST_COLUMN_BY_SLUG.get(parts[2]);
    if (pestColumn && FEATURED_PEST_COLUMNS.has(pestColumn)) {
      return { area: parts[1], pestColumn };
    }
    return { area: parts[1] };
  }

  return null;
}
