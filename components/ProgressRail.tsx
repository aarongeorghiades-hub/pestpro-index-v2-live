'use client';

// S72 PILOT — THE SCROLL-LINKED PROGRESS RAIL.
//
// WHAT IT IS. A slim rail down the left edge on desktop, a thin bar across the
// top on mobile, showing how far through the article the reader is and which of
// the page's real sections they are standing in.
//
// IT IS CONTINUOUS, NOT TRIGGERED. The fill is a function of scroll position
// evaluated every animation frame: progress = (scrollY - start) / (end - start).
// There is no IntersectionObserver, no "is-visible" class, no per-section
// fade-in on entry. Moving the wheel one notch moves the fill one notch. That
// distinction is the whole point of the element, so it is stated here to stop a
// later round "optimising" it into an observer and silently changing what it is.
//
// THE STAGES ARE DERIVED FROM THE PAGE, NOT HARDCODED. GuideLayout passes the
// route's own tocItems minus its product anchors. A hardcoded five-stage list
// would have been wrong on a measurable number of routes: across the 50 /best
// pages, `situation` appears on 46, `legal` on 44, `limits` on 46 and
// `what-decides` on 48 — and `verdict`, the fifth stage named in the brief,
// HAS ZERO SECTIONS ANYWHERE ON THE ESTATE. A fixed list would have advertised a
// section the reader could never reach. (Law 170: build from the rule, not from
// an enumerated list of examples.)
//
// MARKERS SIT AT THEIR TRUE DOCUMENT POSITION. Each marker's offset along the
// rail is that section's real fractional position in the scroll range, so an
// evenly-spaced rail means evenly-spaced sections and a bunched one means
// bunched sections. It reports the document rather than decorating it.
//
// NUMBERED MARKERS ARE THE ONE DELIBERATE EXCEPTION to the "no numbered stage
// markers" house rule, authorised in the pilot brief because this tracks a
// genuine sequence rather than manufacturing one.

import { useEffect, useRef, useState } from 'react';

export interface RailStage {
  id: string;
  title: string;
}

export default function ProgressRail({ stages }: { stages: RailStage[] }) {
  // progress: 0..1 across the article's scroll range.
  const [progress, setProgress] = useState(0);
  // active: index of the section the reader is currently standing in, or -1.
  const [active, setActive] = useState(-1);
  // marks: each stage's fractional position in the same range, measured from
  // the DOM rather than assumed to be evenly spaced.
  const [marks, setMarks] = useState<number[]>([]);
  const [ready, setReady] = useState(false);
  // THE MOBILE BAR SITS UNDER THE STICKY HEADER, AND THE OFFSET IS MEASURED.
  // It was first written as a 72px constant and the bar rendered BEHIND the
  // header on mobile, where the real sticky nav is taller than that. The header
  // height differs by breakpoint and by whether the nav wraps, so the only
  // correct value is the one read off the element.
  const [headerH, setHeaderH] = useState(0);

  const frame = useRef<number | null>(null);
  const geometry = useRef<{ start: number; end: number; tops: number[] }>({
    start: 0,
    end: 1,
    tops: [],
  });

  useEffect(() => {
    if (stages.length === 0) return;

    // MEASURE. Read every section's document offset once per layout change,
    // never per scroll event — getBoundingClientRect in a scroll handler is what
    // makes this kind of component janky.
    const measure = () => {
      const els = stages
        .map((s) => document.getElementById(s.id))
        .filter((el): el is HTMLElement => el !== null);

      if (els.length === 0) {
        setReady(false);
        return;
      }

      const scrollY = window.scrollY;
      const tops = els.map((el) => el.getBoundingClientRect().top + scrollY);

      // The rail spans from the first tracked section to the end of the
      // document, so it reaches 100% when the reader reaches the bottom rather
      // than at some arbitrary earlier point.
      const start = tops[0];
      const end = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        start + 1,
      );

      geometry.current = { start, end, tops };
      const span = end - start;
      setMarks(tops.map((t) => Math.min(1, Math.max(0, (t - start) / span))));
      setReady(true);
    };

    // READ SCROLL. Cheap: arithmetic on numbers measured above, no layout.
    const read = () => {
      frame.current = null;
      const { start, end, tops } = geometry.current;
      const y = window.scrollY;

      const p = Math.min(1, Math.max(0, (y - start) / (end - start)));
      setProgress(p);

      // The active section is the last one whose top has passed the reading
      // line, which sits a third of the way down the viewport — where a reader's
      // eye actually is, not at the very top edge.
      const line = y + window.innerHeight / 3;
      let i = -1;
      for (let n = 0; n < tops.length; n++) if (tops[n] <= line) i = n;
      setActive(i);

      // THE MOBILE BAR FOLLOWS THE HEADER'S LIVE BOTTOM EDGE, NOT A VALUE READ
      // ONCE. The header is `sticky top-0` inside the page wrapper, so it
      // RELEASES once that wrapper ends and the footer begins — measured at 95%
      // scroll on /best/wasp-killers, its bottom was -639. Pinned to a
      // once-measured 124px the bar then floated in open space with nothing
      // above it. Clamping at 0 parks it against the viewport top instead.
      const navEl = document.querySelector('nav.nav-header');
      if (navEl) {
        const b = Math.max(0, Math.round(navEl.getBoundingClientRect().bottom));
        setHeaderH((prev) => (prev === b ? prev : b));
      }
    };

    const onScroll = () => {
      if (frame.current === null) frame.current = requestAnimationFrame(read);
    };

    measure();
    read();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);

    // Images, fonts and late layout shift all move section offsets. A
    // ResizeObserver on <body> re-measures when they do, so the rail does not
    // drift out of step with the document it is describing.
    // measure() re-reads geometry; read() re-derives everything that depends on
    // it, INCLUDING the header offset. Running only measure() here left the
    // mobile bar on a stale offset until the reader first scrolled — probed at
    // rest it sat at 104px against a header whose bottom was 124px.
    const ro = new ResizeObserver(() => {
      measure();
      read();
    });
    ro.observe(document.body);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      ro.disconnect();
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [stages]);

  if (stages.length === 0) return null;

  const pct = (progress * 100).toFixed(2);
  const activeTitle = active >= 0 ? stages[active]?.title : undefined;

  return (
    <>
      {/* ── MOBILE: a thin bar pinned under the sticky header ───────────────
          Shown below lg only. Height is 3px of track plus a one-line readout of
          the section the reader is in, which is the information the desktop rail
          carries in its labels. */}
      <div
        aria-hidden="true"
        className="fixed left-0 right-0 z-40 lg:hidden"
        style={{
          top: headerH,
          opacity: ready && headerH > 0 ? 1 : 0,
          transition: 'opacity .2s ease',
        }}
      >
        <div className="h-[3px] w-full bg-[var(--color-rule)]">
          <div
            className="h-full bg-[var(--color-ochre)]"
            style={{ width: `${pct}%` }}
          />
        </div>
        {activeTitle && (
          <div className="flex items-baseline gap-2 bg-[var(--color-paper)]/95 px-4 py-1.5 backdrop-blur-sm border-b border-[var(--color-rule)]">
            <span className="spec-figure text-[11px] text-[var(--color-ochre-deep)]">
              {String(active + 1).padStart(2, '0')}/
              {String(stages.length).padStart(2, '0')}
            </span>
            <span className="truncate text-[12px] font-medium text-[var(--color-ink)]">
              {activeTitle}
            </span>
          </div>
        )}
      </div>

      {/* ── DESKTOP: the rail itself ────────────────────────────────────────
          Fixed to the left edge, vertically centred. Markers are absolutely
          positioned at their measured fractional offsets. */}
      <nav
        aria-label="Article progress"
        className="pointer-events-none fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:left-8"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity .25s ease' }}
      >
        <div className="relative h-[48vh] min-h-[320px] w-[2px] bg-[var(--color-rule)]">
          {/* THE FILL. Height is driven straight from scroll position. No
              transition on height: a transition would make it lag the wheel and
              turn a continuous readout into an animation. */}
          <div
            className="absolute left-0 top-0 w-full bg-[var(--color-ochre)]"
            style={{ height: `${pct}%` }}
          />

          {marks.map((m, i) => {
            const isActive = i === active;
            const passed = progress >= m;
            return (
              <div
                key={stages[i].id}
                // THE DOT IS CENTRED ON THE RAIL; THE LABEL FLOWS RIGHT FROM IT.
                // A -translate-x-1/2 on this whole row centred the dot AND the
                // label together, which hung the label off the left edge of the
                // viewport where it was clipped. Only the 18px dot is offset.
                className="absolute -translate-y-1/2"
                style={{ top: `${(m * 100).toFixed(2)}%`, left: '-8px' }}
              >
                <a
                  href={`#${stages[i].id}`}
                  className="group pointer-events-auto flex items-center gap-3"
                >
                  <span
                    className={[
                      'flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border text-[9px] leading-none transition-colors duration-150',
                      isActive
                        ? 'border-[var(--color-ochre)] bg-[var(--color-ochre)] text-white ring-2 ring-[var(--color-ochre)]/30 ring-offset-1 ring-offset-[var(--color-paper)]'
                        : passed
                          ? 'border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] text-[var(--color-ochre-deep)]'
                          : 'border-[var(--color-rule-strong)] bg-[var(--color-surface)] text-[var(--color-ink-mute)]',
                    ].join(' ')}
                  >
                    <span className="spec-figure text-[9px]">{i + 1}</span>
                  </span>

                  {/* LABELS ARE HOVER-ONLY, AND THAT WAS A MEASURED DECISION.
                      Holding the active section's label open permanently read
                      well in isolation and collided with the sidebar in
                      practice: probed at 1440px, the sidebar's left edge is at
                      x=96 and exactly one open label overlapped it at every
                      scrolled position tested (27%, 55%, 98%). Which section the
                      reader is in is still carried without the label — the
                      active dot is filled solid ochre and ringed, and every
                      passed dot is washed — so the readout survives and the
                      collision does not. On hover the overlap is deliberate and
                      momentary. */}
                  <span
                    className={[
                      'max-w-[15rem] whitespace-nowrap rounded-md border px-2.5 py-1 text-[12px] font-medium opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100',
                      isActive
                        ? 'border-[var(--color-ochre-edge)] bg-[var(--color-surface)] text-[var(--color-ink)]'
                        : 'border-[var(--color-rule)] bg-[var(--color-surface)] text-[var(--color-ink-soft)]',
                    ].join(' ')}
                  >
                    {stages[i].title}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
