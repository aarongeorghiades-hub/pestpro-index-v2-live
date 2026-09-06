'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// S66 R7 — SCOPED BY ROUTE. This banner used to render on 177 of 179 UK
// documents. It is a landlord damp-and-mould notice, and on /best/mole-traps it
// is a claim made to a reader who is not its audience (Law 130 — shared chrome is
// a page-level claim on every route it renders on).
//
// `routes` IS DERIVED AT BUILD TIME from rendered titles by
// lib/awaabBannerRoutes.ts and passed in by app/(uk)/layout.tsx. It is NEVER a
// list maintained here: a hand-kept route list is the exact mechanism that failed
// twice on the footer disclosure before S64 R2/R3 replaced it with a measurement
// (Law 183).
export default function AnnouncementBar({ routes }: { routes: string[] }) {
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  // Out of scope for this route: render nothing, on the server as well as the
  // client, so the banner is absent from the SERVED HTML rather than hidden after
  // hydration. A CSS or post-hydration hide would leave the claim in the bytes.
  if (!routes.includes(pathname)) return null;
  if (dismissed) return null;

  return (
    <div className="bg-green-700 text-white text-sm py-2 px-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 flex-1 justify-center text-center">
        <span className="font-medium">🏠 Awaab&apos;s Law 2026:</span>
        <span className="hidden sm:inline">Landlords — act now on damp and mould.</span>
        <Link
          href="/best/awaabs-law-damp-mould-equipment"
          className="underline font-semibold hover:text-green-100 whitespace-nowrap"
        >
          See the compliance equipment guide →
        </Link>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="flex-shrink-0 text-green-200 hover:text-white text-lg leading-none"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
