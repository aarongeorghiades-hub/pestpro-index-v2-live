// The header nav for the social wasp cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS ONE PAGE TODAY AND THE LIST STILL LIVES HERE. This module holds
// its own value from the first commit. It is not a placeholder waiting to be
// filled from somewhere else, and there is no shared nav source anywhere in the
// estate. One must never be created (S51-D, Law 104): two clusters whose lists
// happen to match are still two populations, and collapsing them reintroduces
// exactly the coupling that keeping them apart removes.
//
// WHY THE ROUTE IS NAMED FOR SOCIAL WASPS AND NOT FOR "WASPS AND HORNETS".
// The sources fetched for this page treat the subject as ONE group and say so in
// their own words. University of Maryland: "Maryland's social wasps include
// yellowjackets, hornets, and paper wasps." Colorado State and Purdue use the same
// umbrella. The animal a US reader calls a hornet is usually a yellowjacket --
// University of Maine records that bald-faced hornets "are technically a type of
// yellowjacket and are not a 'true' hornet", and Maryland states that the European
// hornet "is the only true hornet established in the U.S." A route named
// wasps-and-hornets would assert in its own URL that these are two animals, which
// every source addressing the question denies, and the page would then spend a
// paragraph walking its own address back. The reader's words -- wasp, hornet,
// yellowjacket -- carry the title, the description and the headings instead, where
// they cost nothing and mislead no one.
//
// THERE IS NO /us/best-* ROUTE FOR THIS CLUSTER AND NONE IS PLANNED. Nine sources
// were read for this page and not one compares any two wasp products on any
// measure. A ranking page needs a published criterion to rank against; there is
// none, so there is nothing to build.
//
// A CARPENTER BEES ENTRY WAS ADDED, S61 R6. This page's only "bee" material is a
// honey-bee sting-comparison aside (see the file's own S60 sourcing) -- it carries
// no carpenter bee biology or control, so a reader who lands here looking for the
// large, solitary, wood-boring bee is at a dead end without this link.
// /us/carpenter-bees exists now, so the link is written. Reciprocal --
// carpenterBeesNav.ts carries the other direction. This file's own governing
// comment above (two clusters must never share one list) still holds: this is one
// added entry in this cluster's own list, not a shared source.

export const SOCIAL_WASP_HOME = '/us';

export const SOCIAL_WASP_NAV = [
  { title: 'Social Wasps', href: '/us/social-wasps' },
  { title: 'Carpenter Bees', href: '/us/carpenter-bees' },
];
