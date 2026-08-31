'use client';

// THE ONE STATEMENT IN THE /us LAYOUT-LEVEL FOOTER THAT DEPENDS ON WHETHER THE
// PAGE CARRIES A UsToolCard. Found at S60 R1: app/us/layout.tsx is a server
// component rendered on every /us/* route, and until this round it printed one
// fixed sentence, "We earn nothing if you buy through the links on this site,"
// unconditionally. That is Law 130 exactly — a shared-chrome claim is a
// page-level claim on every route it renders on. It stayed true only because
// no US card ever carried a tag. Now that UsToolCard defaults `affiliateTag`
// to the live US Associates tag (pestproindex2-20), the sentence is false on
// every route that carries a card and still true on every route that does not.
//
// THIS FOLLOWS THE FooterAssociatesNotice.tsx PRECEDENT: the smallest possible
// client boundary, one hook, conditional text, no interactive element, so the
// segment layout otherwise stays a server component and the markup still ships
// in the initial HTML for a crawler that never runs JavaScript.
//
// THE ROUTE LIST BELOW IS THE MECHANISM AND ALSO THE MAINTENANCE OBLIGATION.
// It must equal the routes with a `<UsToolCard` in their page.tsx, measured at
// S60 R1 by `grep -rl "<UsToolCard" app/us/*/page.tsx`: 31 routes. A future
// round that adds or removes every card from a route must update this set in
// the same commit, or this sentence drifts false (or needlessly cautious) on
// that one route. This is the same class of drift Law 106 warns about for a
// ruling not written down — the difference is this list IS the writing-down.

import { usePathname } from 'next/navigation';

const CARD_CARRYING_ROUTES = new Set([
  'ants',
  'arizona-bark-scorpions',
  'asian-lady-beetles',
  'best-armadillo-traps',
  'best-gopher-traps',
  'best-raccoon-traps',
  'best-stink-bug-traps',
  'black-widow-spiders',
  'boxelder-bugs',
  'brown-recluse-spiders',
  'carpet-beetles',
  'chiggers',
  'chipmunks',
  'cluster-flies',
  'coyotes',
  'fleas',
  'flies',
  'german-cockroaches',
  'house-mice',
  'imported-fire-ants',
  'joro-spider-webs',
  'mole-and-vole-control',
  'moths',
  'no-see-ums',
  'opossums',
  'palmetto-bugs',
  'silverfish',
  'snakes',
  'social-wasps',
  'termites',
  'ticks',
]);

export default function UsFooterCommissionNotice() {
  const pathname = usePathname();
  // First path segment after /us/. A null or bare "/us" pathname has no
  // segment and therefore matches no card-carrying route, which is correct:
  // the hub itself carries no card.
  const slug = pathname?.replace(/^\/us\/?/, '').split('/')[0] ?? '';
  const hasCards = CARD_CARRYING_ROUTES.has(slug);

  if (hasCards) {
    return (
      <p className="m-0 mt-3 max-w-3xl">
        As an Amazon Associate, PestPro Index earns from qualifying purchases.
      </p>
    );
  }

  return (
    <p className="m-0 mt-3 max-w-3xl">
      We earn nothing if you buy through the links on this site. Products are named
      because a cited source describes the type of product, never because anyone paid
      for the placement.
    </p>
  );
}
