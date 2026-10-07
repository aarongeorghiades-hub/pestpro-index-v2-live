import { NextResponse } from 'next/server';
import { externalHref } from '@/lib/externalUrl';
import { recordListingEvent, safePagePath } from '@/lib/listingEvents';
import { getActiveProviderBySlug } from '@/lib/providerLookup';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Website clicks land here, get logged, then 302 to the firm's own site with
// UTM params. The destination is always the website stored on the listing.
// A query parameter cannot choose the destination.

function withUtm(website: string, slug: string): string | null {
  let dest: URL;
  try {
    dest = new URL(externalHref(website));
  } catch {
    return null;
  }
  if (dest.protocol !== 'http:' && dest.protocol !== 'https:') return null;
  dest.searchParams.set('utm_source', 'pestproindex');
  dest.searchParams.set('utm_medium', 'directory');
  dest.searchParams.set('utm_campaign', slug);
  return dest.toString();
}

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const provider = await getActiveProviderBySlug(slug);
  const fallback = new URL(`/provider/${slug}`, request.url);

  if (!provider?.website) {
    return NextResponse.redirect(fallback, 302);
  }

  const destination = withUtm(provider.website, provider.slug);
  if (!destination) {
    return NextResponse.redirect(fallback, 302);
  }

  const from = new URL(request.url).searchParams.get('from');
  await recordListingEvent({
    providerId: provider.canonical_id,
    type: 'website',
    pagePath: safePagePath(from, `/go/${provider.slug}`),
    area: provider.area,
  });

  return NextResponse.redirect(destination, 302);
}
