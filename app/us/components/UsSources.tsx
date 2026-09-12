import type { ReactNode } from 'react';

// Every factual claim in the US estate traces to a citable source. Each page
// renders its own source list, with the date the source itself carries or the
// date we accessed it. This is the convention later US clusters should inherit:
// if a claim cannot be sourced, it does not get written.
//
// ── S74 US DESIGN PILOT — WHY THIS IS NOT THE UK CITATION CHIP ──────────────
//
// The UK estate carries 203 citations written INLINE, mid-sentence, as a
// parenthetical anchor carrying the nofollow rel token, and the UK treatment
// turns each of those into a small bordered tag where it sits in the prose.
//
// MEASURED ACROSS ALL 60 /us ROUTES BEFORE BUILDING ANYTHING: the US estate has
// ZERO inline citations. Every source lives in a SOURCES array rendered here as
// a reference list at the foot of the page, between 0 and 17 per route, median
// 7. There is nothing inline for an inline chip to attach to, so porting the UK
// selector would have styled exactly nothing and reported a clean pass.
//
// The same GOAL — make the sourcing visible rather than merely present — is
// therefore reached through the structure this estate actually has: each entry
// leads with its PUBLISHER as a chip, in the same teal the UK uses for sourcing,
// so a reader scanning the block sees who stands behind each claim before they
// see the title or the URL.
//
// THE noopener/noreferrer REL TOKENS ARE PRESERVED EXACTLY. The UK chip selector
// keys on the nofollow token, so it would have been easy to "align" these links
// by adding that token — silently changing the estate's outbound link policy to
// fit a stylesheet. The rel attribute is a policy decision, not a styling hook,
// so this treatment keys on the surrounding block instead and the links are
// untouched.

export interface Source {
  label: string;
  publisher: string;
  date: string;
  href: string;
}

// The raw href is still shown, because a reader should be able to see where a
// link goes before following it — that was true of the original list and is not
// a thing to design away. It wraps, so a long .edu path cannot widen the page.
//
// IT IS NOT SET IN THE MONO FACE, AND THAT IS THE HOUSE RULE WINNING OVER MY OWN
// FIRST DRAFT. The first version of this block used .spec-figure on the URL,
// reasoning that a URL is an identifier rather than prose. The S72 rule is
// narrower than that: Geist Mono is for MEASURED QUANTITIES. The codified
// matcher caught it — 6 mono elements carrying no digit across the two pilot
// routes — and the arbitrary result gave it away, since a URL that happened to
// contain a document number passed while one that did not failed. The rule was
// not widened to fit the design; the design was corrected to fit the rule.
export function SourceList({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;

  return (
    <div className="not-prose my-6 rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] p-5">
      <p className="m-0 mb-4 text-sm font-bold text-[var(--color-ink)]">
        Sources
      </p>
      <ol className="m-0 list-none space-y-4 p-0">
        {sources.map((source, i) => (
          <li
            key={source.href + source.label}
            className="flex gap-3 border-t border-[var(--color-rule)] pt-4 first:border-t-0 first:pt-0"
          >
            <span className="spec-figure mt-0.5 w-6 flex-shrink-0 text-[12px] text-[var(--color-ink-mute)]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="inline-block rounded border border-[var(--color-teal-edge)] bg-[var(--color-teal-wash)] px-2 py-0.5 text-[12px] font-semibold leading-snug text-[var(--color-teal-deep)]">
                  {source.publisher}
                </span>
                <span className="spec-figure text-[11px] text-[var(--color-ink-mute)]">
                  {source.date}
                </span>
              </div>
              <div className="text-sm text-[var(--color-ink-soft)]">
                {source.label}
              </div>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block break-all text-[11px] text-[var(--color-ink-mute)] underline decoration-[var(--color-rule-strong)] underline-offset-2 hover:text-[var(--color-teal-deep)] hover:decoration-[var(--color-teal)]"
              >
                {source.href}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

// A dated inline marker for any claim whose truth changes with the calendar.
// Range and season statements must age honestly rather than silently rot.
export function AsOf({ date, children }: { date: string; children: ReactNode }) {
  return (
    <span className="inline-block rounded border border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] px-2 py-0.5 text-sm font-semibold text-[var(--color-ochre-deep)]">
      {children}{' '}
      <span className="spec-figure font-normal">(as of {date})</span>
    </span>
  );
}
