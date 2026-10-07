import Link from 'next/link';
import type { FeaturedCard } from '@/lib/featuredProviders';

// Presentational. Renders nothing when the list is empty, which is the case
// until a firm is marked tier = 'featured' for the area. This is not part of
// the rating-sorted list beside it.
export default function FeaturedBlock({
  providers,
  fromPath,
}: {
  providers: FeaturedCard[];
  fromPath: string;
}) {
  if (providers.length === 0) return null;

  return (
    <section
      aria-label="Featured paid listings"
      className="mb-8 rounded-xl border-2 border-amber-400 bg-amber-50 p-5 sm:p-6"
    >
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-black text-gray-900">Featured (paid)</h2>
        <Link
          href="/professionals#how-featured-listings-work"
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          How featured listings work
        </Link>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-gray-700">
        These firms pay for this slot. It is separate from the list below, which is sorted by rating.
        Paying does not change that order.
      </p>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {providers.map((provider) => (
          <li key={String(provider.canonical_id)} className="rounded-lg border border-amber-200 bg-white p-4">
            <h3 className="mb-1 font-bold leading-tight text-gray-900">
              <Link href={`/provider/${provider.slug}`} className="text-blue-700 hover:underline">
                {provider.name}
              </Link>
            </h3>
            {provider.postcode && <p className="mb-1 text-xs text-gray-600">{provider.postcode}</p>}
            {provider.google_rating != null && provider.google_rating > 0 && (
              <p className="mb-3 text-sm text-gray-700">
                {provider.google_rating.toFixed(1)}
                {provider.google_review_count
                  ? ` (${provider.google_review_count} ${provider.google_review_count === 1 ? 'review' : 'reviews'})`
                  : ''}
              </p>
            )}
            <div className="space-y-2">
              {provider.phone && (
                <a
                  href={`tel:${String(provider.phone).replace(/\s+/g, '')}`}
                  className="block rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-bold text-white hover:bg-blue-700"
                >
                  {provider.phone}
                </a>
              )}
              {provider.has_website && (
                <a
                  href={`/go/${provider.slug}?from=${encodeURIComponent(fromPath)}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block rounded-lg border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-700"
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
