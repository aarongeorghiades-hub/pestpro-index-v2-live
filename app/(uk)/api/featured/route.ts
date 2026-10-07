import { NextResponse } from 'next/server';
import { featuredQueryForPath } from '@/lib/featuredContext';
import { getFeaturedCards } from '@/lib/featuredProviders';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Public read of the featured box for one directory URL. Returns an empty list
// when the path is not a directory page, when nobody is featured, or when the
// tier columns have not been added yet. Never an error page.
export async function GET(request: Request) {
  const path = new URL(request.url).searchParams.get('path') || '';
  const query = featuredQueryForPath(path);
  if (!query) return NextResponse.json({ providers: [] });

  const providers = await getFeaturedCards(query);
  return NextResponse.json({ providers });
}
