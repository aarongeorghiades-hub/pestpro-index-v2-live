// Shared provider helpers used by the provider page and the sitemap so the
// two stay in agreement about which provider listings are indexable.

export interface ThinnableProvider {
  phone?: string | null;
  website?: string | null;
  email?: string | null;
  google_rating?: number | null;
  google_review_count?: number | null;
  profile_text?: string | null;
}

// A provider page is "thin" (low unique value → soft-404 risk) when it lacks
// enough distinguishing signals. Score the available content and treat anything
// below the threshold as thin so it can be noindexed (page) and kept out of the
// sitemap. Replaces the old hardcoded NOINDEX_SLUGS list.
export function isProviderThin(provider: ThinnableProvider): boolean {
  let score = 0;
  if (provider.phone) score += 1;
  if (provider.website) score += 2; // website is higher value — 2 points
  if (provider.email) score += 1;
  if (provider.google_rating && provider.google_rating > 0) score += 1;
  if (provider.google_review_count && provider.google_review_count >= 3) score += 2; // reviews are a strong signal
  if (provider.profile_text && provider.profile_text.length > 50) score += 1;
  return score < 3; // score below 3 = thin
}
