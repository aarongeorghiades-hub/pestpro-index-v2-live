import Link from 'next/link';

/** First screen of section 2. The rest stay in the same HTML, inside show-more. */
export const ALSO_COVERING_OPEN = 20;

export type AlsoCoveringFirm = {
  canonical_id?: string | number;
  name: string;
  slug: string;
  postcode?: string | null;
  phone?: string | null;
  website?: string | null;
  google_rating?: number | null;
  google_review_count?: number | null;
  baseLabel: string;
};

function FirmCard({ firm }: { firm: AlsoCoveringFirm }) {
  return (
    <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="font-bold text-gray-900 leading-tight">
        <Link href={`/provider/${firm.slug}`} className="text-blue-700 hover:underline">
          {firm.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-gray-700">{firm.baseLabel}</p>
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
  );
}

// Firms tagged to the parent city and based somewhere else.
// The first ALSO_COVERING_OPEN cards are open. The rest are in the page HTML
// inside <details>, so every listing link is in the document a crawler fetches
// and a reader can open them without a script.
export default function AlsoCovering({
  firms,
  placeName,
}: {
  firms: AlsoCoveringFirm[];
  placeName: string;
}) {
  if (!firms || firms.length === 0) return null;
  const open = firms.slice(0, ALSO_COVERING_OPEN);
  const rest = firms.slice(ALSO_COVERING_OPEN);

  return (
    <section id="also-covering" className="mt-12 border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-black text-gray-900 mb-2">Also covering {placeName}</h2>
      <p className="text-gray-600 mb-6 max-w-3xl">
        These firms are listed for the wider area and are based somewhere else. Firms with a postcode in
        the same city come first, in rating order. Firms with no postcode on the listing come next.
        Firms based outside that city come after them, again in rating order. This is not a distance order.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {open.map((firm) => (
          <FirmCard key={String(firm.canonical_id ?? firm.slug)} firm={firm} />
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="mt-6">
          <summary className="cursor-pointer text-blue-700 font-semibold">
            Show the other {rest.length} {rest.length === 1 ? 'firm' : 'firms'}
          </summary>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((firm) => (
              <FirmCard key={String(firm.canonical_id ?? firm.slug)} firm={firm} />
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
