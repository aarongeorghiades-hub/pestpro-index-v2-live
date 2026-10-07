import { createServerClient } from '@/utils/supabase-server';
import { dailyShuffle } from '@/lib/dailyShuffle';
import { featuredSpotCap } from '@/lib/featuredCap';
import { FEATURED_PEST_COLUMNS, type FeaturedQuery } from '@/lib/featuredContext';

export type FeaturedCard = {
  canonical_id: string | number;
  name: string;
  slug: string;
  phone: string | null;
  postcode: string | null;
  google_rating: number | null;
  google_review_count: number | null;
  has_website: boolean;
  logoUrl: string | null;
  photoUrl: string | null;
  summary: string | null;
};

function safeHttp(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!/^https?:\/\//i.test(trimmed)) return null;
  return trimmed;
}

function firstPhoto(value: unknown): string | null {
  if (!Array.isArray(value)) return null;
  for (const item of value) {
    if (typeof item === 'string') {
      const url = safeHttp(item);
      if (url) return url;
    } else if (item && typeof item === 'object') {
      const record = item as { url?: unknown; src?: unknown };
      const url = safeHttp(record.url) || safeHttp(record.src);
      if (url) return url;
    }
  }
  return null;
}

function shortSummary(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.replace(/\s+/g, ' ').trim();
  if (!trimmed) return null;
  return trimmed.length > 220 ? `${trimmed.slice(0, 217)}…` : trimmed;
}

// Separate query from every organic list. Those lists sort by rating (or name)
// and do not read tier. This function is the only place tier = 'featured' is
// used for display. A missing column (migration not applied) returns [].
export async function getFeaturedCards(query: FeaturedQuery, firmsShown: number): Promise<FeaturedCard[]> {
  try {
    const supabase = createServerClient();
    if (query.pestColumn && !FEATURED_PEST_COLUMNS.has(query.pestColumn)) return [];

    const baseColumns =
      'canonical_id, name, slug, phone, postcode, website, google_rating, google_review_count';
    // logo_url, photos and profile_text arrive with the paid-listing migration.
    // If those columns are not there yet, the richer read fails and the box
    // falls back to the columns that already exist.
    const richColumns = `${baseColumns}, profile_text, logo_url, photos`;

    const run = (columns: string) => {
      let request = supabase
        .from('Providers')
        .select(columns)
        .eq('active', true)
        .eq('tier', 'featured')
        .contains('featured_areas', [query.area]);
      if (query.pestColumn) request = request.eq(query.pestColumn, true);
      return request;
    };

    let { data, error } = await run(richColumns);
    if (error) {
      console.error('[featured]', error.message);
      const plain = await run(baseColumns);
      data = plain.data;
      error = plain.error;
    }
    if (error || !data || data.length === 0) {
      if (error) console.error('[featured]', error.message);
      return [];
    }

    const salt = query.pestColumn ? `${query.area}:${query.pestColumn}` : query.area;
    const rows = data as unknown as {
      canonical_id: string | number;
      name: string;
      slug: string;
      phone: string | null;
      postcode: string | null;
      website: string | null;
      google_rating: number | null;
      google_review_count: number | null;
      logo_url?: unknown;
      photos?: unknown;
      profile_text?: unknown;
    }[];
    return dailyShuffle(rows, salt)
      .slice(0, featuredSpotCap(firmsShown))
      .map((row) => ({
        canonical_id: row.canonical_id,
        name: row.name,
        slug: row.slug,
        phone: row.phone,
        postcode: row.postcode,
        google_rating: row.google_rating,
        google_review_count: row.google_review_count,
        has_website: Boolean(row.website),
        logoUrl: safeHttp(row.logo_url),
        photoUrl: firstPhoto(row.photos),
        summary: shortSummary(row.profile_text),
      }));
  } catch (err) {
    console.error('[featured] unexpected failure:', err);
    return [];
  }
}
