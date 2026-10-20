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
    <div className="mt-6 rounded-[4px] border border-[var(--color-rule)] bg-[var(--color-stock)] p-5 text-left">
      <h2 className="text-lg font-bold text-[var(--color-ink)]">Find us on PestPro Index</h2>
      <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
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
        className="mt-3 w-full rounded-[4px] border border-[var(--color-rule-strong)] bg-white p-2 font-mono text-xs text-[var(--color-ink)] focus:border-[var(--color-ink)] focus:outline-none"
        onFocus={(event) => event.currentTarget.select()}
      />
      <button
        type="button"
        onClick={copy}
        className="dir-btn dir-btn-ink mt-2"
      >
        {copied ? 'Copied' : 'Copy snippet'}
      </button>
    </div>
  );
}
