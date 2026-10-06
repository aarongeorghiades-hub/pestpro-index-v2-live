import { UK_AMAZON_TAG, US_AMAZON_TAG, SPONSORED_LINK_REL } from "@/lib/externalUrl";

// S70 R1 — THE TOP-PICKS BOX. PM ruling (Law 195): on /best/* the selling layer
// is restored, and the decision block carries a one-line safety/legal note that
// satisfies Law 180 on these routes. This component IS that decision block: the
// note sits above the picks, and the full legal/safety sections sit below them.
//
// HARD LINES, STRUCTURAL: no price, rating, review count or image prop exists,
// so the box cannot render one. Links are direct /dp/<ASIN> only, tagged, and
// marked sponsored. The disclosure line renders inside the box, beside the links.

export type TopPick = {
  label: string;
  name: string;
  reason: string;
  asin: string;
  // S70 R5: optional. UsToolCard emits no anchor id, so a US pick names its
  // product as plain text rather than linking to an anchor that does not exist.
  anchorId?: string;
};

export default function TopPicks({
  picks,
  note,
  market = "uk",
}: {
  picks: TopPick[];
  // S70 R5: the US estate reuses this box. "us" switches host and tag only; the
  // UK render is unchanged because "uk" is the default.
  market?: "uk" | "us";
  // S70 R2: optional. Carried only where the route's point is real safety or law
  // (poison, trap, protected species, chemical, electrical). An efficacy-evidence
  // point is never carried here; it sits in the body below the comparison table.
  note?: React.ReactNode;
}) {
  return (
    <div className="not-prose mt-5 rounded-xl border border-[var(--color-ochre-edge)] bg-[var(--color-surface)] p-3 text-[var(--color-ink)] shadow-[0_8px_24px_-12px_rgba(26,36,51,.25)] sm:p-4">
      <p className="m-0 text-base font-bold">Our top picks</p>
      {note ? (
        <p className="m-0 mt-1 text-[12px] leading-snug text-[var(--color-ink-soft)]">
          <span aria-hidden="true">&#9888;&#xFE0E; </span>
          {note}
        </p>
      ) : null}
      <ol className="m-0 mt-3 list-none space-y-2.5 p-0">
        {picks.map((p) => (
          <li
            key={p.asin}
            className="flex flex-col gap-2 border-t border-[var(--color-rule)] pt-2.5 sm:flex-row sm:items-center sm:gap-4"
          >
            <div className="min-w-0 flex-1">
              <p className="m-0 text-[12px] font-semibold text-[var(--color-ochre-deep)]">
                {p.label}
              </p>
              {p.anchorId ? (
                <a
                  href={`#${p.anchorId}`}
                  className="block text-[15px] font-bold leading-snug text-[var(--color-ink)] hover:underline"
                >
                  {p.name}
                </a>
              ) : (
                <p className="m-0 text-[15px] font-bold leading-snug text-[var(--color-ink)]">
                  {p.name}
                </p>
              )}
              <p className="m-0 text-[13px] leading-snug text-[var(--color-ink-soft)]">
                {p.reason}
              </p>
            </div>
            <a
              href={
                market === "us"
                  ? `https://www.amazon.com/dp/${p.asin}?tag=${US_AMAZON_TAG}`
                  : `https://www.amazon.co.uk/dp/${p.asin}?tag=${UK_AMAZON_TAG}`
              }
              target="_blank"
              rel={SPONSORED_LINK_REL}
              className="inline-block flex-shrink-0 rounded-lg bg-[var(--color-ochre)] px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--color-ochre-deep)]"
            >
              Check price on Amazon
            </a>
          </li>
        ))}
      </ol>
      <p className="m-0 mt-3 text-[11px] leading-snug text-[var(--color-ink-mute)]">
        As an Amazon Associate, PestPro Index earns from qualifying purchases.
      </p>
    </div>
  );
}

// Pros under each product spread. Plain list, rendered from the page's own data.
export function ProsList({ pros }: { pros: string[] }) {
  if (!pros.length) return null;
  return (
    <>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        {pros.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </>
  );
}
