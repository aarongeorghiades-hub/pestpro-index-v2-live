import Link from 'next/link';

type NearbyFirm = {
  canonical_id?: string | number;
  name: string;
  slug: string;
  postcode?: string | null;
  google_rating?: number | null;
  google_review_count?: number | null;
};

// Shown only when the place itself has fewer than a handful of firms.
// These firms have a postcode in the same city, not in this place.
export default function NearbyFirms({
  firms,
  placeName,
}: {
  firms: NearbyFirm[];
  placeName: string;
}) {
  if (!firms || firms.length === 0) return null;

  return (
    <div className="mt-12 border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-black text-gray-900 mb-2">Nearby firms</h2>
      <p className="text-gray-600 mb-6 max-w-3xl">
        {placeName} has few firms with a postcode in the area. These firms have a postcode in the same city,
        sorted by rating. They are not listed as serving {placeName} itself.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {firms.map((firm) => (
          <li key={String(firm.canonical_id ?? firm.slug)} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h3 className="font-bold text-gray-900 leading-tight">
              <Link href={`/provider/${firm.slug}`} className="text-blue-700 hover:underline">
                {firm.name}
              </Link>
            </h3>
            {firm.postcode && <p className="mt-1 text-xs text-gray-600">{firm.postcode}</p>}
            {firm.google_rating != null && firm.google_rating > 0 && (
              <p className="mt-1 text-sm text-gray-700">
                {firm.google_rating.toFixed(1)}
                {firm.google_review_count
                  ? ` (${firm.google_review_count} ${firm.google_review_count === 1 ? 'review' : 'reviews'})`
                  : ''}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
