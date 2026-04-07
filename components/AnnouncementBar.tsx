'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

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
