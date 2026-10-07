import { createServerClient } from '@/utils/supabase-server';
import { dailyShuffle } from '@/lib/dailyShuffle';
import { FEATURED_PEST_COLUMNS, type FeaturedQuery } from '@/lib/featuredContext';

export const FEATURED_LIMIT = 3;

export type FeaturedCard = {
  canonical_id: string | number;
  name: string;
  slug: string;
  phone: string | null;
  postcode: string | null;
  google_rating: number | null;
  google_review_count: number | null;
  has_website: boolean;
};

// Separate query from every organic list. Those lists sort by rating (or name)
// and do not read tier. This function is the only place tier = 'featured' is
// used for display. A missing column (migration not applied) returns [].
export async function getFeaturedCards(query: FeaturedQuery): Promise<FeaturedCard[]> {
  try {
    const supabase = createServerClient();
    let request = supabase
      .from('Providers')
      .select('canonical_id, name, slug, phone, postcode, website, google_rating, google_review_count')
      .eq('active', true)
      .eq('tier', 'featured')
      .contains('featured_areas', [query.area]);

    if (query.pestColumn) {
      if (!FEATURED_PEST_COLUMNS.has(query.pestColumn)) return [];
      request = request.eq(query.pestColumn, true);
    }

    const { data, error } = await request;
    if (error || !data || data.length === 0) {
      if (error) console.error('[featured]', error.message);
      return [];
    }

    const salt = query.pestColumn ? `${query.area}:${query.pestColumn}` : query.area;
    return dailyShuffle(data, salt)
      .slice(0, FEATURED_LIMIT)
      .map((row) => ({
        canonical_id: row.canonical_id,
        name: row.name,
        slug: row.slug,
        phone: row.phone,
        postcode: row.postcode,
        google_rating: row.google_rating,
        google_review_count: row.google_review_count,
        has_website: Boolean(row.website),
      }));
  } catch (err) {
    console.error('[featured] unexpected failure:', err);
    return [];
  }
}
