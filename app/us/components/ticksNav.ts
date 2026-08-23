// The header nav for the tick cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on this page and wrong
// silently. Passing this module is what prevents that.
//
// THE CLUSTER IS ONE PAGE. The S45 R4 source pack found no published
// specification that would let one tick product be measured against another, and
// no source consulted compares any two named products. The Connecticut
// Agricultural Experiment Station states outright, on the same fact sheet that
// lists the products, that mentioning a pesticide product is not an endorsement.
// So there is no ranking page to build and no /us/best-* route, now or as a
// redirect.
//
// WHAT THE PACK DID FIND is an ingredient-level selection rule from CDC —
// 0.5% permethrin for clothing, and a named list of repellent actives carrying an
// EPA registration number. That is a fitness test, not an order of preference,
// and it lives inside this page's products section.
//
// FUTURE ROUTES ANTICIPATED BUT NOT BUILT, and deliberately not linked because a
// link to a route that does not exist is a 404: a Northeast Lyme-belt page, an
// alpha-gal / lone star page for the South and Central states, a Pacific-coast
// page for Ixodes pacificus, and a no-see-um route.
//
// SUPERSEDED, S45 R8: this comment previously said the pack could not source
// chigger-versus-tick bite disambiguation, so the ticks page said nothing about
// chiggers. The S45 R7 chigger pack DID source it, on both sides — three
// extension services on the chigger side and CDC on the tick side — and
// /us/chiggers is now built and carries that comparison. The ticks page still
// says nothing about chiggers, which is now a scoping choice rather than a
// sourcing gap: the comparison lives on the chigger page, which is where a
// reader who cannot tell the two apart will land.
//
// homeHref points at the page itself because it is the only page in the cluster.
// When a /us hub eventually exists this should point there instead.

export const TICKS_HOME = '/us/ticks';

export const TICKS_NAV = [{ title: 'Ticks', href: '/us/ticks' }];
