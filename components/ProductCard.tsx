import { UK_AMAZON_TAG } from "@/lib/externalUrl";
import { pictogramFor, withSpecFigures } from "@/components/cardVocabulary";

// Deliberately has no rating or price prop. Every figure the site previously
// showed for these was hand-typed rather than sourced from Amazon, so the
// component is structurally unable to display one. Price is left to Amazon via
// the affiliate link.
interface ProductCardProps {
  name: string;
  features: string[];
  asin: string;
  bestFor?: string;
  rank?: number;
}

export default function ProductCard({
  name,
  features,
  asin,
  bestFor,
  rank,
}: ProductCardProps) {
  // Only a direct /dp/<ASIN> link is ever produced. There is deliberately no
  // fallback branch: a search-results link is not a link to the product being
  // described, so when the ASIN is missing the card renders no Amazon link and
  // no Amazon call to action at all rather than sending the reader somewhere
  // approximate. null is the whole of the else branch, so the component is
  // structurally unable to emit a search URL.
  const amazonUrl =
    asin && asin.startsWith("B0")
      ? `https://www.amazon.co.uk/dp/${asin}?tag=${UK_AMAZON_TAG}`
      : null;

  // ── RANK TIERS — S72 PILOT ────────────────────────────────────────────────
  //
  // WHAT THIS REPLACES. Every card, rank 1 to rank 9, rendered as the same
  // white rounded box with the same border and the same shadow, differing only
  // in a small coloured pill. Nine ranked recommendations all shouting at the
  // same volume is not a ranking; the reader has to READ to find out which one
  // the page actually leads with.
  //
  // THREE TIERS, THREE STRUCTURES — not three shades of one card:
  //   lead (rank 1)   raised surface, a solid ochre spine down the left edge,
  //                   the award set as a band rather than a pill
  //   strong (2-3)    flat surface, hairline box, outlined rank plate
  //   quiet (4+)      no box at all: a rule above, denser type, ochre kept only
  //                   for the numeral, so a long list stops competing with the
  //                   top of the page
  //
  // This is also why there is no single shared shadow: only the lead tier is
  // raised, so elevation MEANS something instead of being applied to everything.
  const tier = rank === 1 ? "lead" : rank && rank <= 3 ? "strong" : "quiet";

  const shell =
    tier === "lead"
      ? "relative overflow-hidden rounded-xl border border-[var(--color-ochre-edge)] bg-[var(--color-surface)] shadow-[0_1px_2px_rgba(26,36,51,.05),0_8px_24px_-12px_rgba(26,36,51,.18)] pl-5 pr-5 py-5 sm:pl-6 sm:pr-6 sm:py-6"
      : tier === "strong"
        ? "relative overflow-hidden rounded-lg border border-[var(--color-rule)] bg-[var(--color-surface)] px-5 py-5"
        : "relative border-t border-[var(--color-rule)] bg-transparent px-0 pt-5 pb-1";

  const pic = pictogramFor(name, bestFor);

  return (
    <div className={`not-prose my-6 ${shell}`}>
      {/* The lead card's spine. A solid edge rather than a badge in a corner:
          it marks the whole card, so the ranking is legible at a glance and at
          a distance. Only rank 1 gets one. */}
      {tier === "lead" && (
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-ochre)]"
        />
      )}

      <div className="flex gap-4 sm:gap-5">
        {/* ── PICTOGRAM TILE ─────────────────────────────────────────────── */}
        <div className="flex-shrink-0">
          <div
            className={[
              "flex items-center justify-center rounded-lg border",
              tier === "lead"
                ? "h-16 w-16 border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] text-[var(--color-ochre-deep)] sm:h-20 sm:w-20"
                : "h-12 w-12 border-[var(--color-rule)] bg-[var(--color-paper-sunk)] text-[var(--color-ink-mute)]",
            ].join(" ")}
          >
            <svg
              className={tier === "lead" ? "h-8 w-8 sm:h-9 sm:w-9" : "h-6 w-6"}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {pic.path}
            </svg>
          </div>
          <p className="mt-1.5 text-center text-[10px] font-medium text-[var(--color-ink-mute)]">
            {pic.label}
          </p>
        </div>

        {/* ── BODY ───────────────────────────────────────────────────────── */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-3">
            {/* Rank numeral. Rendered in Geist Mono because it is a position in
                an ordered list — a figure, not a label. */}
            {rank && (
              <span
                className={[
                  "flex flex-shrink-0 items-center justify-center rounded-md border font-semibold leading-none",
                  tier === "lead"
                    ? "h-7 w-7 border-transparent bg-[var(--color-ochre)] text-[13px] text-white"
                    : tier === "strong"
                      ? "h-6 w-6 border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] text-[12px] text-[var(--color-ochre-deep)]"
                      : "h-6 w-6 border-[var(--color-rule)] bg-transparent text-[12px] text-[var(--color-ink-mute)]",
                ].join(" ")}
              >
                <span className="spec-figure text-inherit">{rank}</span>
              </span>
            )}

            <div className="min-w-0 flex-1">
              <h3
                className={[
                  "font-bold text-[var(--color-ink)]",
                  tier === "lead" ? "text-lg sm:text-xl" : "text-base",
                ].join(" ")}
              >
                {name}
              </h3>

              {/* THE AWARD LABEL IS RENDERED VERBATIM, EXACTLY AS THE PAGE
                  SUPPLIED IT. Nothing here reads, edits, normalises or
                  re-cases it — CLAUDE.md protects all award labels site-wide,
                  and only its PRESENTATION changes by tier. */}
              {bestFor && (
                <p
                  className={[
                    "mt-1",
                    tier === "lead"
                      ? "-mx-1 inline-block rounded border-l-2 border-[var(--color-ochre)] bg-[var(--color-ochre-wash)] px-2 py-1 text-[13px] font-semibold text-[var(--color-ochre-deep)]"
                      : "text-[12px] font-semibold text-[var(--color-ink-mute)]",
                  ].join(" ")}
                >
                  {bestFor}
                </p>
              )}
            </div>
          </div>

          {/* ── STATED SPECIFICATIONS ──────────────────────────────────────
              A quiet spec sheet, not a list of marketing ticks. The previous
              card put a green check beside every line, which reads as an
              endorsement of each claim; these are things the LISTING states,
              not things this site has confirmed. A rule and a hanging indent
              says "record" where a tick said "approved". */}
          <dl className="mt-3 space-y-1.5 border-t border-[var(--color-rule)] pt-3">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-2.5 text-[13px] leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-[var(--color-ink-mute)]"
                />
                <dd className="text-[var(--color-ink-soft)]">
                  {withSpecFigures(feature)}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            {amazonUrl && (
              <a
                href={amazonUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className={[
                  "inline-block rounded-lg px-5 py-2.5 text-center text-sm font-semibold transition-colors",
                  tier === "lead"
                    ? "bg-[var(--color-ochre)] text-white hover:bg-[var(--color-ochre-deep)]"
                    : "border border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] text-[var(--color-ochre-deep)] hover:bg-[var(--color-ochre-edge)]",
                ].join(" ")}
              >
                Check price on Amazon
              </a>
            )}
            <p className="text-[11px] leading-snug text-[var(--color-ink-mute)]">
              As an Amazon Associate, PestPro Index earns from qualifying
              purchases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
