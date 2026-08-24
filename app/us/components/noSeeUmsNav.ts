// The header nav for the no-see-um cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on this page and wrong
// silently. Passing this module is what prevents that.
//
// THE CLUSTER IS ONE PAGE, AND ITS PRODUCT SIDE IS NARROW BY EVIDENCE. The S46 R1
// source pack closed four classes: screening at the 30 x 30 mesh the University of
// Arizona names, yard and larval treatment, DEET products, and traps. Traps closed
// as NOT SOURCED rather than zero — Purdue Extension was asked directly and returns
// nothing on traps, and no other source consulted recommends one — so no trap
// product was probed at all.
//
// THE PAGE'S DISTINCTIVE ANGLE IS EXCLUSION, NOT CHEMISTRY. Three extension
// services state that ordinary window screening does not keep these insects out,
// two state that finer mesh does, and the University of Arizona publishes the
// figures: standard 16 x 16 or 18 x 16 lets them through, and 30 x 30 is the
// replacement it names. Every screening product that could be checked is 20 x 20,
// finer than the standard that fails but below the figure the source names. That
// gap is stated on the page rather than smoothed over.
//
// THERE IS NO /us/best-* ROUTE AND NONE AS A REDIRECT. No source consulted compares
// any two named products, and the Arizona publication carries an explicit statement
// that mentioning a product is not an endorsement.
//
// LINKED TO /us/chiggers ONLY. The pack sources a clean separation between a
// blood-feeding fly and a mite that feeds on skin cells, so that comparison is
// honest. It sources no comparison against a tick bite, so this page does not link
// to /us/ticks and does not draw one.
//
// FUTURE ROUTE ANTICIPATED BUT NOT BUILT: a coastal or Gulf page, where the salt
// marsh and decaying seaweed habitat would carry weight. Not linked, because a link
// to a route that does not exist is a 404.
//
// homeHref points at the page itself because it is the only page in the cluster.
// When a /us hub eventually exists this should point there instead.

export const NOSEEUMS_HOME = '/us/no-see-ums';

export const NOSEEUMS_NAV = [{ title: 'No-See-Ums', href: '/us/no-see-ums' }];
