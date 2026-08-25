import type { Metadata } from 'next';
import Link from 'next/link';

// THE SITE'S 404, AND IT BELONGS TO NEITHER ESTATE ON PURPOSE.
//
// S47 R9. There was no not-found.tsx here before, so Next's built-in 404 rendered
// inside the root layout and inherited the UK AnnouncementBar and the UK footer's
// 97 links — measured at 99 hrefs and 3,029 characters. When the chrome moved into
// app/(uk)/layout.tsx that 404 kept working but lost all of it.
//
// One 404 serves two estates and cannot wear both sets of chrome, so it wears
// neither. It carries a route into each estate instead, which is the one thing a
// reader who has landed nowhere actually needs.
// Without this the title falls through to the site default and a 404 announces
// itself as the UK home page.
export const metadata: Metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-gray-400">404</p>
      <h1 className="mt-3 text-3xl sm:text-4xl font-black text-gray-900">
        This page could not be found
      </h1>
      <p className="mt-4 max-w-xl text-gray-600">
        The address you followed does not match anything on this site. It may have moved, or
        the link may have been mistyped.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
        >
          UK home page
        </Link>
        <Link
          href="/us"
          className="inline-block rounded-lg border-2 border-gray-300 px-6 py-2.5 text-sm font-bold text-gray-900 hover:border-blue-400"
        >
          US pest guides
        </Link>
      </div>
    </main>
  );
}
