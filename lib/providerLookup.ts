import { createServerClient } from '@/utils/supabase-server';
import { firstArea, isProviderSlug } from '@/lib/listingEvents';

export type ListedProvider = {
  canonical_id: string | number;
  name: string;
  slug: string;
  website: string | null;
  phone: string | null;
  email: string | null;
  area: string | null;
};

// Public read of one active listing. Duplicate slugs resolve to the row with
// the most reviews, matching app/(uk)/provider/[slug]/page.tsx.
export async function getActiveProviderBySlug(slug: string): Promise<ListedProvider | null> {
  if (!isProviderSlug(slug)) return null;

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('Providers')
    .select('canonical_id, name, slug, website, phone, email, regions')
    .eq('active', true)
    .eq('slug', slug)
    .order('google_review_count', { ascending: false, nullsFirst: false })
    .limit(1);

  if (error || !data || !data[0]) {
    if (error) console.error('[provider lookup]', error.message);
    return null;
  }

  const row = data[0];
  return {
    canonical_id: row.canonical_id,
    name: row.name,
    slug: row.slug,
    website: row.website,
    phone: row.phone,
    email: row.email,
    area: firstArea(row.regions),
  };
}
