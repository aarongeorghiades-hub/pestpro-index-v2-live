import Link from 'next/link';
import type { FeaturedCard } from '@/lib/featuredProviders';

// Presentational. Renders nothing when the list is empty, which is the case
// until a firm is marked tier = 'featured' for the area. This is not part of
// the rating-sorted list beside it.
const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ochre-deep)]';

export default function FeaturedBlock({
  providers,
  fromPath,
  context = 'directory',
}: {
  providers: FeaturedCard[];
  fromPath: string;
  context?: 'directory' | 'finder';
}) {
  if (providers.length === 0) return null;

  return (
    <section
      aria-label="Featured paid listings"
      className="mb-10 rounded-2xl border border-[var(--color-ochre-edge)] bg-gradient-to-br from-[var(--color-ochre-wash)] via-white to-white p-5 sm:p-7"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h2 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">Featured (paid)</h2>
        <Link
          href="/professionals#how-featured-listings-work"
          className={`text-sm font-semibold text-blue-700 underline-offset-2 hover:underline ${focusRing}`}
        >
          How featured listings work
        </Link>
      </div>
      <p className="mb-5 max-w-3xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
        {context === 'finder'
          ? 'These firms pay for a labelled slot on their area page. Paying does not change the rating order of the directory.'
          : 'These firms pay for this slot. It is separate from the list below, which is sorted by rating. Paying does not change that order.'}
      </p>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {providers.map((provider) => (
          <li
            key={String(provider.canonical_id)}
            className="flex flex-col rounded-xl border border-[var(--color-ochre-edge)] border-l-[3px] border-l-[var(--color-ochre)] bg-white p-5 shadow-[0_1px_2px_rgba(26,36,51,0.05)] sm:p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              {(provider.logoUrl || provider.photoUrl) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={provider.logoUrl || provider.photoUrl || ''}
                  alt=""
                  className="h-12 w-auto max-w-[140px] object-contain"
                />
              )}
              <span className="ml-auto shrink-0 rounded-full bg-[var(--color-ochre-wash)] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-ochre-deep)]">
                Featured
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold leading-snug text-[var(--color-ink)]">
              <Link href={`/provider/${provider.slug}`} className={`text-blue-700 underline-offset-2 hover:underline ${focusRing}`}>
                {provider.name}
              </Link>
            </h3>
            {provider.summary && (
              <p className="mb-4 text-base leading-relaxed text-[var(--color-ink)]">{provider.summary}</p>
            )}
            <div className="mt-auto space-y-1">
              {provider.postcode && <p className="text-sm text-[var(--color-ink-soft)]">{provider.postcode}</p>}
              {provider.google_rating != null && provider.google_rating > 0 && (
                <p className="text-sm text-[var(--color-ink-soft)]">
                  {provider.google_rating.toFixed(1)}
                  {provider.google_review_count
                    ? ` (${provider.google_review_count} ${provider.google_review_count === 1 ? 'review' : 'reviews'})`
                    : ''}
                </p>
              )}
            </div>
            <div className="mt-4 space-y-2">
              {provider.phone && (
                <a
                  href={`tel:${String(provider.phone).replace(/\s+/g, '')}`}
                  className={`block min-h-11 rounded-lg bg-blue-600 px-3 py-2.5 text-center text-sm font-bold text-white hover:bg-blue-700 ${focusRing}`}
                >
                  {provider.phone}
                </a>
              )}
              {provider.has_website && (
                <a
                  href={`/go/${provider.slug}?from=${encodeURIComponent(fromPath)}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className={`block min-h-11 rounded-lg border border-[var(--color-rule-strong)] px-3 py-2.5 text-center text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-ochre)] hover:text-[var(--color-ochre-deep)] ${focusRing}`}
                >
                  Website
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
