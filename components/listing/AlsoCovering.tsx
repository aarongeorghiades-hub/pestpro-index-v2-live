import FirmEntry from '@/components/directory/FirmEntry';
import { FirmList, FirmListItem } from '@/components/directory/FirmList';

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

function CoveringRows({ firms }: { firms: AlsoCoveringFirm[] }) {
  // legend={false}: the page's own list above already prints the Top rated legend.
  return (
    <FirmList legend={false}>
      {firms.map((firm) => (
        <FirmListItem key={String(firm.canonical_id ?? firm.slug)}>
          <FirmEntry
            name={firm.name}
            slug={firm.slug}
            postcode={firm.postcode}
            place={firm.baseLabel || null}
            rating={firm.google_rating}
            reviewCount={firm.google_review_count}
          />
        </FirmListItem>
      ))}
    </FirmList>
  );
}

// Firms tagged to the parent city and based somewhere else.
// The first ALSO_COVERING_OPEN rows are open. The rest are in the page HTML
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
    <section id="also-covering" className="mt-16 border-t border-[var(--color-ink)] pt-10">
      <h2 className="dir-h2 text-[var(--color-ink)]">Also covering {placeName}</h2>
      <p className="mb-6 mt-3 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">
        These firms are listed for the wider area and are based somewhere else. Firms with a postcode in
        the same city come first, in rating order. Firms with no postcode on the listing come next.
        Firms based outside that city come after them, again in rating order. This is not a distance order.
      </p>
      <CoveringRows firms={open} />
      {rest.length > 0 && (
        <details className="mt-6">
          <summary className="dir-link cursor-pointer font-semibold">
            Show the other {rest.length} {rest.length === 1 ? 'firm' : 'firms'}
          </summary>
          <div className="mt-4">
            <CoveringRows firms={rest} />
          </div>
        </details>
      )}
    </section>
  );
}
