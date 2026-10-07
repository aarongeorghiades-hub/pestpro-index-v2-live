import { NextResponse } from 'next/server';
import { featuredQueryForPath } from '@/lib/featuredContext';
import { getFeaturedCards } from '@/lib/featuredProviders';
import { REGION_SLUGS } from '@/lib/providerSubmissions';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Public read of the featured box for one directory URL. Returns an empty list
// when the path is not a directory page, when nobody is featured, or when the
// tier columns have not been added yet. Never an error page.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const area = (url.searchParams.get('area') || '').toLowerCase();
  if (area) {
    if (!REGION_SLUGS.includes(area)) return NextResponse.json({ providers: [] });
    const providers = await getFeaturedCards({ area });
    return NextResponse.json({ providers });
  }

  const path = url.searchParams.get('path') || '';
  const query = featuredQueryForPath(path);
  if (!query) return NextResponse.json({ providers: [] });

  const providers = await getFeaturedCards(query);
  return NextResponse.json({ providers });
}
