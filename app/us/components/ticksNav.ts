// The header nav for the tick cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COMMENT CORRECTED, S47 R4: what stood here said the layout DEFAULTED both props
// to the Joro cluster, and that omitting them rendered a Joro wordmark and a
// four-item Joro nav silently. That was true until S47 R3 made the props required
// and deleted those defaults. Omission is now a compile error, not a silent wrong
// render. Nothing in this module's values changed in this round.
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
// page for Ixodes pacificus.
//
// SUPERSEDED AGAIN, S46 R2: the no-see-um route named here as unbuilt is now built
// at /us/no-see-ums. It is still not linked from this page: no-see-ums are flies in
// a different order from ticks and the S46 R1 pack sources no comparison between the
// two bites. The chigger page carries the bite-confusion comparisons instead.
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
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.

export const TICKS_HOME = '/us';

export const TICKS_NAV = [{ title: 'Ticks', href: '/us/ticks' }];
