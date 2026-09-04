'use client';

// THE ONE STATEMENT IN THE /us LAYOUT-LEVEL FOOTER THAT DEPENDS ON WHETHER THE
// PAGE CARRIES A UsToolCard. Found at S60 R1: app/us/layout.tsx is a server
// component rendered on every /us/* route, and until then it printed one fixed
// sentence, "We earn nothing if you buy through the links on this site,"
// unconditionally. That is Law 130 exactly — a shared-chrome claim is a
// page-level claim on every route it renders on. It stayed true only while no US
// card carried a tag. UsToolCard now defaults `affiliateTag` to the live US
// Associates tag, so the sentence is false on every route that carries a card.
//
// THE ROUTE SET IS DERIVED AT BUILD TIME AND IS NOT MAINTAINED HERE — S64 R2.
//
// PM RULING, S64 R2: the earnings statement is derived from whether the route
// ACTUALLY RENDERS a card. This file used to hold CARD_CARRYING_ROUTES, 31 slugs
// measured by hand at S60 R1, whose own comment called the set "the mechanism and
// also the maintenance obligation". THAT OBLIGATION WAS NOT MET AND COULD NOT
// HAVE BEEN. By S64 R1 the estate carded on 41 routes: zero stale entries, TEN
// MISSING — bed-bugs, carpenter-bees, fruit-flies, fungus-gnats, groundhogs,
// mosquitoes, powderpost-beetles, products, rats, squirrels-in-attic. Each served
// tagged affiliate links beneath a footer saying the site earns nothing, while
// simultaneously carrying the correct Associates disclosure on every card. 212 of
// the estate's 376 rendered card links sat on a page contradicting itself.
//
// The set now comes from `cardCarryingSlugs()` in ../lib/cardIndex, computed by
// the server layout from the route sources themselves, and is passed in as a
// prop. Adding or removing a card moves this sentence on the next build with no
// file hand-edited anywhere.
//
// WHY IT IS STILL A CLIENT COMPONENT. Deciding which sentence to print needs the
// PATHNAME, and a server component cannot read it in the App Router. cardIndex
// reads the filesystem with `node:fs` and can therefore never be imported here.
// So the work is split at the only seam that permits it: the SERVER layout
// measures the estate, this CLIENT boundary picks the route. It follows the
// FooterAssociatesNotice.tsx precedent — the smallest possible client boundary,
// one hook, conditional text, no interactive element — so the segment layout
// stays a server component and the markup still ships in the initial HTML for a
// crawler that never runs JavaScript.
//
// THE FAILURE MODE IS DELIBERATE. A null pathname, or a route absent from the
// set, prints the no-earnings sentence. That is the safe direction for a route
// with no cards and the wrong one for a route with cards — which is why the set
// is now measured rather than remembered, and why M11 gates it on every run.

import { usePathname } from 'next/navigation';

export default function UsFooterCommissionNotice({
  cardCarryingRoutes,
}: {
  cardCarryingRoutes: string[];
}) {
  const pathname = usePathname();
  // First path segment after /us/. A null or bare "/us" pathname has no segment
  // and therefore matches no route, which is correct: the hub carries no card.
  const slug = pathname?.replace(/^\/us\/?/, '').split('/')[0] ?? '';
  const hasCards = cardCarryingRoutes.includes(slug);

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
