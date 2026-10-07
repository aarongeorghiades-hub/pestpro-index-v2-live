import { NextResponse } from 'next/server';
import { recordListingEvent, safePagePath } from '@/lib/listingEvents';
import { getActiveProviderBySlug } from '@/lib/providerLookup';

// tel: and mailto: clicks. The browser calls this with sendBeacon and then
// opens the phone or mail app. Website clicks do not use this route; they go
// through /go/[slug], which logs the click itself. No IP is read or stored.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED = new Set(['call', 'email']);

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const type = asString(body.type);
  const slug = asString(body.slug);
  if (!ALLOWED.has(type)) return new NextResponse(null, { status: 204 });

  const provider = await getActiveProviderBySlug(slug);
  if (!provider) return new NextResponse(null, { status: 204 });

  await recordListingEvent({
    providerId: provider.canonical_id,
    type: type as 'call' | 'email',
    pagePath: safePagePath(asString(body.page_path), `/provider/${provider.slug}`),
    area: provider.area,
  });

  return new NextResponse(null, { status: 204 });
}
