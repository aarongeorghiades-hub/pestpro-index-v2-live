// The header nav for the chigger cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on this page and wrong
// silently. Passing this module is what prevents that.
//
// THE CLUSTER IS ONE PAGE, AND THE PRODUCT SIDE IS DELIBERATELY THIN. The S45 R7
// source pack closed THREE product classes at zero: yard treatment, DEET
// repellents, and monitoring. The yard closure was measured rather than assumed —
// the four yard products already checked for /us/ticks name chiggers zero times
// each on their own listings — and it sits alongside University of Maryland
// Extension stating that pesticides to control chiggers are not recommended or
// effective. This page therefore tells a reader NOT to buy a yard treatment.
//
// There is no /us/best-* route and none as a redirect. No source consulted
// compares any two named products, and one source rejects an entire product
// category outright.
//
// THE ONE BOUNDARY THE SOURCES DRAW IS MEDICAL, NOT PEST-CONTROL. No source
// consulted names a pest control operator, a licence, or a restricted-use product
// for chiggers. Two refer the bite to a pharmacist or physician and Ohio State
// states outright that extension staff cannot diagnose skin ailments. The
// anti-itch cards on this page sit under that referral language.
//
// LINKED TO /us/ticks, WHICH IS THE ONE INTERNAL LINK THIS PAGE MAKES. Chigger
// bites and tick bites are a real confusion surface and the S45 R7 pack sourced
// the comparison on both sides. That link is the reason it exists.
//
// FUTURE ROUTE ANTICIPATED BUT NOT BUILT: a South / Southeast chigger page, where
// Texas A&M's year-round activity in southern areas would carry weight. Not
// linked, because a link to a route that does not exist is a 404.
//
// homeHref points at the page itself because it is the only page in the cluster.
// When a /us hub eventually exists this should point there instead.

export const CHIGGERS_HOME = '/us/chiggers';

export const CHIGGERS_NAV = [{ title: 'Chiggers', href: '/us/chiggers' }];
