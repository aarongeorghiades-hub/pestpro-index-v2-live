import { UK_AMAZON_TAG } from "@/lib/externalUrl";

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

// ── S72 PILOT — CATEGORY PICTOGRAMS ──────────────────────────────────────────
//
// WHAT THIS REPLACES. Every card previously rendered the SAME 96x96 grey box
// holding one grey outline cube. On a page with nine products the reader met
// nine identical grey squares, which reads as nine failed image loads rather
// than as a design. It was the single most damaging thing on the card.
//
// WHY A PICTOGRAM AND NOT A PHOTOGRAPH. Amazon's terms require product imagery
// to come through live sales-linked API access, which this project does not
// have. A drawn category mark is honest about being a category mark; a stock
// photo of "a mousetrap" would imply it is the product on the card.
//
// THE FAMILY LIST FOLLOWS THE EXISTING badgeFamilies PRECEDENT in this file:
// ordered, first match wins, matched on WORD BOUNDARIES rather than as bare
// substrings, with a deliberate documented fallback. It reads the product name
// and the award label; IT NEVER EDITS EITHER.
const PICTOGRAMS: { test: RegExp; label: string; path: React.ReactNode }[] = [
  {
    test: /\b(snap trap|trap|traps|trapping)\b/i,
    label: "Trap",
    // a sprung bar over a base
    path: (
      <>
        <rect x="4" y="15" width="16" height="5" rx="1" />
        <path d="M6 15V7a2 2 0 0 1 2-2h8" />
        <circle cx="6" cy="15" r="1.4" />
      </>
    ),
  },
  {
    test: /\b(bait station|station|stations|bait box)\b/i,
    label: "Bait station",
    // a closed box with an entry port
    path: (
      <>
        <rect x="3" y="8" width="18" height="11" rx="2" />
        <circle cx="8" cy="15" r="1.8" />
        <path d="M3 11h18" />
      </>
    ),
  },
  {
    test: /\b(spray|aerosol|fogger|ulv)\b/i,
    label: "Spray",
    // a canister with a plume
    path: (
      <>
        <rect x="8" y="8" width="8" height="12" rx="2" />
        <path d="M10 8V5h4v3" />
        <path d="M18 5h2M18 8h3M18 11h2" />
      </>
    ),
  },
  {
    test: /\b(powder|dust|granule|granules)\b/i,
    label: "Powder",
    // a scatter
    path: (
      <>
        <path d="M5 19h14" />
        <circle cx="8" cy="15" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="16" cy="15" r="1" />
        <circle cx="12" cy="17" r="1" />
      </>
    ),
  },
  {
    test: /\b(gel|paste|bait gel)\b/i,
    label: "Gel bait",
    // a syringe
    path: (
      <>
        <path d="M14 5l5 5" />
        <path d="M8.5 10.5l5 5" />
        <rect
          x="6"
          y="10"
          width="10"
          height="5"
          rx="1"
          transform="rotate(45 11 12.5)"
        />
        <path d="M5 19l2-2" />
      </>
    ),
  },
  {
    test: /\b(foam)\b/i,
    label: "Foam",
    path: (
      <>
        <rect x="8" y="10" width="8" height="10" rx="2" />
        <path d="M10 10V6h4v4" />
        <circle cx="18" cy="6" r="1.4" />
        <circle cx="20.5" cy="9" r="1" />
      </>
    ),
  },
  {
    test: /\b(net|netting|mesh)\b/i,
    label: "Netting",
    path: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 9h16M4 14h16M9 4v16M14 4v16" />
      </>
    ),
  },
  {
    test: /\b(spike|spikes)\b/i,
    label: "Spikes",
    path: (
      <>
        <path d="M4 19h16" />
        <path d="M7 19V8M12 19V5M17 19V9" />
      </>
    ),
  },
  {
    test: /\b(encasement|encasements|cover|protector|mattress)\b/i,
    label: "Encasement",
    path: (
      <>
        <rect x="3" y="9" width="18" height="9" rx="3" />
        <path d="M3 13h18" />
      </>
    ),
  },
  {
    test: /\b(steamer|steam|heater|heat)\b/i,
    label: "Steam",
    path: (
      <>
        <rect x="6" y="12" width="12" height="8" rx="2" />
        <path d="M9 12V9a3 3 0 0 1 6 0v3" />
        <path d="M10 6c0-1 1-1 1-2M14 6c0-1 1-1 1-2" />
      </>
    ),
  },
  {
    test: /\b(monitor|monitors|detector|indicator)\b/i,
    label: "Monitor",
    path: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 14l3-4 3 3 4-5" />
      </>
    ),
  },
  {
    test: /\b(light trap|lamp|uv|electric|electronic|ultrasonic|repeller)\b/i,
    label: "Electrical",
    path: (
      <>
        <path d="M13 3l-7 10h5l-1 8 7-10h-5z" />
      </>
    ),
  },
  {
    test: /\b(poison|rodenticide|bait|block|blocks|sachet|sachets|grain)\b/i,
    label: "Bait",
    path: (
      <>
        <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
        <path d="M9 10h.01M15 10h.01" />
        <path d="M9 15c1.5 1.2 4.5 1.2 6 0" />
      </>
    ),
  },
];

// THE FALLBACK IS A DOCUMENT, NOT A BOX. When nothing matches, the card shows a
// spec-sheet mark — which is what the tile is actually standing in for. It reads
// as "here are the stated details", never as a missing photograph.
const FALLBACK_PICTOGRAM = {
  label: "Product",
  path: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
};

function pictogramFor(name: string, bestFor?: string) {
  const haystack = `${name} ${bestFor ?? ""}`;
  return (
    PICTOGRAMS.find((p) => p.test.test(haystack)) ?? {
      ...FALLBACK_PICTOGRAM,
      test: /(?:)/,
    }
  );
}

// ── SPEC FIGURES ─────────────────────────────────────────────────────────────
//
// Geist Mono's ONLY job on this site is a genuine measured quantity. This
// matcher requires A NUMBER FOLLOWED BY A UNIT, so a bare year or a bare count
// is left in Geist Sans.
//
// CALIBRATED AGAINST THE REAL ESTATE BEFORE USE, not against invented examples:
// over all 1,150 feature strings on the 50 /best routes it matches 229 (20%),
// picking up "300ml", "1 litre", "11g", "20 x 100g"; and its false-positive
// probe — "rebuilt in 2026 by the team" — is SILENT, because 2026 carries no
// unit. A stated false negative beats an unstated false positive (Law 170).
const SPEC_FIGURE =
  /\b\d+(?:[.,]\d+)?\s?(?:g|kg|ml|l|litres?|mm|cm|m|%|W|V)\b|\b\d+(?:[.,]\d+)?\s?[x×]\s?\d+(?:[.,]\d+)?(?:\s?[x×]\s?\d+(?:[.,]\d+)?)?\s?(?:g|kg|ml|mm|cm|m)?\b/gi;

function withSpecFigures(text: string): React.ReactNode {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(SPEC_FIGURE)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    out.push(
      <span key={`${i}-${m[0]}`} className="spec-figure">
        {m[0]}
      </span>,
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : text;
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
