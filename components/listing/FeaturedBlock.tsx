import Link from 'next/link';
import FirmEntry from '@/components/directory/FirmEntry';
import type { FeaturedCard } from '@/lib/featuredProviders';

// Presentational. Renders nothing when the list is empty, which is the case
// until a firm is marked tier = 'featured' for the area. This is not part of
// the rating-sorted list beside it.
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

  // FEATURED, SET APART BUT NOT SHOUTING. A faint marigold wash, a hairline
  // marigold edge and a small label. It stays plainly marked as paid, and the
  // note says the rated list below is unaffected.
  return (
    <section aria-label="Featured paid listings" className="mb-10">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="flex items-center gap-2 text-sm font-bold text-[var(--color-ink)]">
          <span className="dir-tab">Featured</span>
          <span className="font-semibold text-[var(--color-ink-soft)]">Paid placement</span>
        </h2>
        <Link
          href="/professionals#how-featured-listings-work"
          className="dir-link text-sm font-semibold"
        >
          How featured listings work
        </Link>
      </div>
      <ul className="space-y-3">
        {providers.map((provider) => (
          <li
            key={String(provider.canonical_id)}
            data-featured-card
            className="overflow-hidden rounded-md border border-[var(--color-marigold-edge)] bg-[var(--color-marigold-wash)] shadow-[0_1px_2px_rgba(19,36,29,0.06),0_8px_24px_-12px_rgba(107,80,0,0.25)]"
          >
            <div className="flex gap-5">
              {(provider.logoUrl || provider.photoUrl) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={provider.logoUrl || provider.photoUrl || ''}
                  alt=""
                  className="ml-5 mt-6 hidden h-12 w-auto max-w-[120px] object-contain md:ml-7 md:block"
                />
              )}
              <div className="min-w-0 flex-1">
                <FirmEntry
                  featured
                  name={provider.name}
                  slug={provider.slug}
                  postcode={provider.postcode}
                  rating={provider.google_rating}
                  reviewCount={provider.google_review_count}
                  phone={provider.phone}
                  summary={provider.summary}
                  websiteHref={provider.has_website ? `/go/${provider.slug}?from=${encodeURIComponent(fromPath)}` : null}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs leading-relaxed text-[var(--color-ink-mute)]">
        {context === 'finder'
          ? 'These firms pay for a labelled slot on their area page. Paying does not change the rating order of the directory.'
          : 'These firms pay for this slot. It is separate from the list below, which is sorted by rating. Paying does not change that order.'}
      </p>
    </section>
  );
}
