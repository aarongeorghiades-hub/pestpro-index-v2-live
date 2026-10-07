import { createAdminClient } from '@/utils/supabase-admin';

// Server-only writer for listing_events. Failures are logged and swallowed:
// a missing table (migration not applied yet) must not take down a page.

export const LISTING_EVENT_TYPES = ['view', 'call', 'website', 'email', 'quote'] as const;
export type ListingEventType = (typeof LISTING_EVENT_TYPES)[number];

const SLUG_RE = /^[a-z0-9-]{1,120}$/;

export function isProviderSlug(value: string): boolean {
  return SLUG_RE.test(value);
}

export function safePagePath(raw: string | null | undefined, fallback: string): string {
  if (!raw) return fallback;
  const trimmed = raw.trim();
  if (!trimmed.startsWith('/') || trimmed.startsWith('//') || trimmed.includes('://')) {
    return fallback;
  }
  if (trimmed.length > 300) return trimmed.slice(0, 300);
  return trimmed;
}

export function firstArea(regions: unknown): string | null {
  if (!Array.isArray(regions)) return null;
  for (const region of regions) {
    if (typeof region === 'string' && /^[a-z0-9-]{1,40}$/.test(region)) return region;
  }
  return null;
}

export function isPrefetch(headerStore: { get(name: string): string | null }): boolean {
  if (headerStore.get('next-router-prefetch') === '1') return true;
  if (headerStore.get('purpose') === 'prefetch') return true;
  if (headerStore.get('sec-purpose') === 'prefetch') return true;
  return false;
}

export async function recordListingEvent(input: {
  providerId: string | number;
  type: ListingEventType;
  pagePath: string | null;
  area: string | null;
}): Promise<void> {
  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from('listing_events').insert({
      provider_id: input.providerId,
      type: input.type,
      page_path: input.pagePath,
      area: input.area,
    });
    if (error) console.error('[listing_events] insert failed:', error.message);
  } catch (err) {
    console.error('[listing_events] unexpected failure:', err);
  }
}
