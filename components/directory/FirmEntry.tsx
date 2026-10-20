import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Star } from 'lucide-react';
import { isTrophyProvider } from '@/lib/trophy';
import TopRatedMark from './TopRatedMark';

export type FirmEntryProps = {
  name: string;
  slug: string;
  postcode?: string | null;
  /** Shown after the postcode, e.g. "Based in Croydon" or "Covers Stockport". */
  place?: string | null;
  rating?: number | null;
  reviewCount?: number | null;
  phone?: string | null;
  /** Fully resolved website href (externalHref(...) or /go/<slug>?from=...). */
  websiteHref?: string | null;
  summary?: string | null;
  /** Short service facts, e.g. "Commercial", "24/7", "BPCA". Provider-stated only. */
  tags?: string[];
  featured?: boolean;
};

function telHref(phone: string): string {
  return `tel:${String(phone).replace(/\s+/g, '')}`;
}

// ONE DIRECTORY ENTRY. The card holds exactly one /provider/ link: the click
// tracker (components/listing/ListingClickTracker.tsx) finds the slug by
// walking up from a tel: or website anchor to the nearest single /provider/
// link, so a second one would silently stop call and website attribution.
//
// Phone behaviour matches the old cards: a tap-to-call button below md, the
// number set as text from md up.
export default function FirmEntry({
  name,
  slug,
  postcode,
  place,
  rating,
  reviewCount,
  phone,
  websiteHref,
  summary,
  tags = [],
  featured = false,
}: FirmEntryProps) {
  const topRated = isTrophyProvider({ google_rating: rating, google_review_count: reviewCount });
  const hasRating = typeof rating === 'number' && rating > 0;

  return (
    <article
      data-firm-entry={slug}
      className={`grid grid-cols-1 gap-x-8 gap-y-4 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center ${featured ? 'px-5 md:px-7' : ''}`}
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-[1.1875rem] font-bold leading-snug tracking-[-0.01em] text-[var(--color-ink)] md:text-[1.3125rem]">
            <Link href={`/provider/${slug}`} className="decoration-[var(--color-rule-strong)] underline-offset-[0.2em] hover:underline">
              {name}
            </Link>
          </h3>
          {topRated && <TopRatedMark />}
        </div>

        <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-ink-soft)]">
          {(postcode || place) && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[var(--color-ink-mute)]" strokeWidth={2} />
              {postcode && <span className="dir-num font-semibold text-[var(--color-ink)]">{postcode}</span>}
              {place && <span>{place}</span>}
            </span>
          )}
          {hasRating ? (
            <span className="inline-flex items-center gap-1.5">
              <Star aria-hidden="true" className="h-3.5 w-3.5 fill-[var(--color-marigold)] text-[var(--color-marigold)]" strokeWidth={0} />
              <span className="dir-num font-semibold text-[var(--color-ink)]">{(rating as number).toFixed(1)}</span>
              {reviewCount ? (
                <span className="dir-num">
                  {reviewCount} Google {reviewCount === 1 ? 'review' : 'reviews'}
                </span>
              ) : null}
            </span>
          ) : (
            <span className="text-[var(--color-ink-mute)]">No Google rating yet</span>
          )}
        </p>

        {summary && <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">{summary}</p>}

        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Services">
            {tags.map((tag) => (
              <li key={tag} className="rounded-[3px] bg-[var(--color-paper-sunk)] px-2 py-1 text-xs font-semibold text-[var(--color-ink-soft)]">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {(phone || websiteHref) && (
        <div className="flex flex-col gap-2 sm:flex-row md:flex-col md:items-end lg:flex-row lg:items-center">
          {phone && (
            <>
              <a href={telHref(phone)} className="dir-btn dir-btn-ink w-full sm:w-auto md:hidden">
                <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2.25} />
                <span className="dir-num">Call {phone}</span>
              </a>
              <span className="dir-num dir-condensed hidden whitespace-nowrap text-[1.625rem] font-bold leading-none tracking-[-0.01em] text-[var(--color-ink)] md:inline">
                {phone}
              </span>
            </>
          )}
          {websiteHref ? (
            <a
              href={websiteHref}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="dir-btn dir-btn-line w-full sm:w-auto"
            >
              Website
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span className="hidden text-sm text-[var(--color-ink-mute)] md:inline">No website listed</span>
          )}
        </div>
      )}
    </article>
  );
}
