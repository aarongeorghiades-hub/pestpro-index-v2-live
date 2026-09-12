// A single tool, described mechanically, with its disclosure bound to its link.
//
// TWO CONVENTIONS ARE SET HERE, DELIBERATELY, FOR EVERY LATER US CLUSTER.
//
// 1. THE DISCLOSURE IS DERIVED FROM THE LINK, NEVER WRITTEN ALONGSIDE IT.
//    `affiliateTag` is the single input that decides three things at once: the
//    URL, the rel attribute, and the wording of the disclosure. It is therefore
//    structurally impossible for this card to claim a commission it does not
//    earn, or to earn one it does not disclose. The UK ProductCard prints "As an
//    Amazon Associate, PestPro Index earns from qualifying purchases" as fixed
//    text regardless of the link; that is a sentence that can go stale.
//
// 2. THE DISCLOSURE SITS ABOVE THE LINK, IN THE READER'S PATH.
//    The FTC requires disclosure that is clear and conspicuous and close to the
//    link, not buried in a footer and not set in small gray type below the fold.
//    It is rendered here as a bordered block immediately before the button.
//
// S60 R1: THE US AMAZON ASSOCIATES TAG IS LIVE. `pestproindex2-20` is the
// amazon.com tag (marketplace-specific; the only tag that existed before this
// round, pestproindex2-21, is amazon.co.uk and attributes nothing here).
// Defaulted below rather than passed at each of the 115 call sites, per the
// comment above: passing it is the whole change, and this is the one place
// the type of the input lives. A route may still override with `affiliateTag=""`
// or a different value if a future card is ever genuinely unpaid; none is today.

import { pictogramFor, withSpecFigures } from '@/components/cardVocabulary';

interface UsToolCardProps {
  name: string;
  // What the tool physically does. Mechanical description only.
  whatItDoes: string[];
  // Amazon US ASIN. Only a direct /dp/<ASIN> link is ever produced; there is no
  // search-URL fallback branch, matching the estate rule.
  asin: string;
  // Defaults to the live US Associates tag. Absent/empty = plain link, no
  // commission, disclosure says so.
  affiliateTag?: string;
}

export default function UsToolCard({
  name,
  whatItDoes,
  asin,
  affiliateTag = 'pestproindex2-20',
}: UsToolCardProps) {
  const url =
    asin && asin.startsWith('B0')
      ? `https://www.amazon.com/dp/${asin}${affiliateTag ? `?tag=${affiliateTag}` : ''}`
      : null;

  if (!url) return null;

  const isAffiliate = Boolean(affiliateTag);

  const pic = pictogramFor(name);

  // ── WHY THERE IS NO TIER HERE, AND THAT IS A FINDING NOT AN OMISSION ───────
  //
  // The UK ProductCard renders three structurally different cards keyed on
  // `rank`: a raised lead card for rank 1, a boxed card for 2-3, and a flat
  // stripped card for 4 and below. MEASURED BEFORE PORTING ANY OF IT:
  // UsToolCardProps HAS NO rank, and none of the 43 /us routes that render this
  // card passes one. The US estate presents tools as interchangeable examples of
  // a type — "a specific, identifiable example of the type of tool described
  // above", in this file's own words — and deliberately ranks nothing.
  //
  // Adding a rank to tier the cards would have MANUFACTURED AN EDITORIAL CLAIM
  // this estate does not make, which is a content change wearing a design
  // change's clothes. Tiering on `isAffiliate` instead would have been worse
  // still: it would render paid links more prominently than unpaid ones.
  //
  // So the card takes the UK's visual VOCABULARY — the pictogram tile in place
  // of a blank box, the spec-sheet list in place of ticked bullets, Geist Mono
  // on measured figures, the token palette — and none of its ranking apparatus.
  return (
    <div className="not-prose my-8 rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] p-5 sm:p-6">
      <div className="flex gap-4 sm:gap-5">
        <div className="flex-shrink-0">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-[var(--color-rule)] bg-[var(--color-paper-sunk)] text-[var(--color-ink-mute)] sm:h-16 sm:w-16">
            <svg
              className="h-7 w-7 sm:h-8 sm:w-8"
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

        <div className="min-w-0 flex-1">
          <h3 className="mt-0 text-lg font-bold text-[var(--color-ink)]">{name}</h3>

          {/* A record of what the tool does, not a list of endorsements. The
              previous card led each line with a blue bullet; a hairline and a
              hanging indent says "stated" where a coloured mark said "approved". */}
          <dl className="mb-0 mt-3 space-y-1.5 border-t border-[var(--color-rule)] pt-3">
            {whatItDoes.map((item) => (
              <div key={item} className="flex gap-2.5 text-[13px] leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-[var(--color-ink-mute)]"
                />
                <dd className="text-[var(--color-ink-soft)]">{withSpecFigures(item)}</dd>
              </div>
            ))}
          </dl>

          {/* DISCLOSURE — MECHANISM UNTOUCHED. Still derived from affiliateTag,
              still immediately above the link, still bordered and full contrast.
              Only its colours moved onto the token palette; the branch, the
              wording and the position are exactly as they were. */}
          <div className="mt-5 rounded-lg border border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] px-4 py-3">
            <p className="m-0 text-sm font-bold text-[var(--color-ochre-deep)]">Disclosure</p>
            <p className="m-0 mt-1 text-sm text-[var(--color-ink-soft)]">
              {isAffiliate ? (
                <>As an Amazon Associate, PestPro Index earns from qualifying purchases.</>
              ) : (
                <>
                  The link below is <strong>not</strong> a paid affiliate link. PestPro Index
                  earns nothing if you buy this tool, and we have no commercial relationship
                  with its manufacturer or seller. It is named because it is a specific,
                  identifiable example of the type of tool described above.
                </>
              )}
            </p>
          </div>

          <a
            href={url}
            target="_blank"
            rel={
              isAffiliate
                ? 'sponsored nofollow noopener noreferrer'
                : 'nofollow noopener noreferrer'
            }
            className="mt-4 inline-block rounded-lg bg-[var(--color-ochre)] px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--color-ochre-deep)]"
          >
            View this tool on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}
