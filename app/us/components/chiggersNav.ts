// The header nav for the chigger cluster.
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
// consulted names a pest control operator, a license, or a restricted-use product
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
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.

export const CHIGGERS_HOME = '/us';

export const CHIGGERS_NAV = [{ title: 'Chiggers', href: '/us/chiggers' }];
