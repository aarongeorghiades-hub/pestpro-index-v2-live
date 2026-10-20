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
      <h2 className="sr-only">Featured (paid)</h2>
      <ul className="space-y-3">
        {providers.map((provider) => (
          <li
            key={String(provider.canonical_id)}
            data-featured-card
            className="dir-card dir-card-featured overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[var(--color-marigold-edge)]/70 px-5 py-3 md:px-7">
              <p className="flex items-center gap-2 text-[0.8125rem] font-bold text-[var(--color-ink)]">
                <span className="dir-tab !bg-[var(--color-saffron)] !py-1 !text-[var(--color-ink)] !shadow-none">Featured</span>
                <span className="font-semibold text-[var(--color-ink-soft)]">Paid placement</span>
              </p>
              <Link
                href="/professionals#how-featured-listings-work"
                className="hidden text-[0.8125rem] font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-ink)] sm:inline"
              >
                How featured listings work
              </Link>
            </div>
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
          : providers.length === 1
            ? 'This firm pays for this slot. It is separate from the list below, which is sorted by rating. Paying does not change that order.'
            : 'These firms pay for this slot. It is separate from the list below, which is sorted by rating. Paying does not change that order.'}{' '}
        <Link href="/professionals#how-featured-listings-work" className="dir-link font-semibold text-[var(--color-ink-soft)] sm:hidden">
          How featured listings work
        </Link>
      </p>
    </section>
  );
}
