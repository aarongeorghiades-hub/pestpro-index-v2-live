'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'lucide-react';

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
    <div className="flex items-center justify-between gap-4 bg-[var(--color-ink)] px-4 py-2 text-sm text-[var(--color-paper)]">
      <div className="flex items-center gap-2 flex-1 justify-center text-center">
        <span className="font-bold">Awaab&apos;s Law 2026:</span>
        <span className="hidden sm:inline">Landlords, act now on damp and mould.</span>
        <Link
          href="/best/awaabs-law-damp-mould-equipment"
          className="whitespace-nowrap font-semibold underline underline-offset-4 hover:text-[var(--color-marigold)]"
        >
          See the compliance equipment guide
        </Link>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[3px] text-[var(--color-paper)]/70 hover:bg-white/10 hover:text-[var(--color-paper)]"
        aria-label="Dismiss"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>
  );
}
