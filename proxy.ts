import { NextResponse, type NextRequest } from 'next/server';

// Passes the PUBLIC path (before beforeFiles rewrites such as the London
// borough short URLs) to server components as x-pp-pathname. The Featured
// block reads it to render server-side in place, so it is in the first HTML
// and never shifts the list down after load.
export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set('x-pp-pathname', request.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ['/((?!_next/|api/|us/|us$|.*\\..*).*)'],
};
