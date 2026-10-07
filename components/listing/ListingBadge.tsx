'use client';

import { useState } from 'react';

const BADGE_SRC = 'https://pestproindex.com/badges/find-us.svg';

export function listingBadgeSnippet(slug: string): string {
  const href = `https://pestproindex.com/provider/${slug}`;
  return `<a href="${href}"><img src="${BADGE_SRC}" alt="Find us on PestPro Index" width="200" height="48" /></a>`;
}

// slug is the firm's listing address. Without one, the snippet is an example
// the firm replaces after claiming.
export default function ListingBadge({ slug }: { slug?: string | null }) {
  const example = !slug;
  const snippet = listingBadgeSnippet(slug || 'your-listing');
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-left">
      <h2 className="text-lg font-black text-gray-900">Find us on PestPro Index</h2>
      <p className="mt-1 text-sm text-gray-600">
        {example
          ? 'After your listing is claimed, put this on your website. Replace your-listing with the last part of your listing address.'
          : 'Copy this onto your website. It links to your listing.'}
      </p>
      <a href={example ? '/professionals' : `/provider/${slug}`} className="mt-3 inline-block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/badges/find-us.svg" alt="Find us on PestPro Index" width={200} height={48} />
      </a>
      <textarea
        readOnly
        value={snippet}
        rows={3}
        className="mt-3 w-full rounded-lg border border-gray-300 bg-white p-2 font-mono text-xs text-gray-800"
        onFocus={(event) => event.currentTarget.select()}
      />
      <button
        type="button"
        onClick={copy}
        className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700"
      >
        {copied ? 'Copied' : 'Copy snippet'}
      </button>
    </div>
  );
}
