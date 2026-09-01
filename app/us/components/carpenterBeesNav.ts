// The header nav for the carpenter bee cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// A RECIPROCAL LINK TO /us/social-wasps, BUILT THE SAME WAY AS R5's fruit-flies
// PAIRING. S61 R6's cannibalisation check found ZERO carpenter-bee content on
// /us/social-wasps — its only "bee" material is a honey-bee sting-comparison
// aside, not carpenter bee biology or control. But the two pages are the
// estate's only stinging-insect-near-the-house routes, and a reader unsure
// whether "the bee buzzing around my porch" is a carpenter bee or a wasp/honey
// bee is exactly the reader this link serves. socialWaspNav.ts is its own file
// (one consumer, not shared) and was edited in this same round to add the
// return link — mirroring exactly how fliesNav.ts gained its fruit-flies entry
// at S61 R5.

export const CARPENTER_BEES_HOME = '/us';

export const CARPENTER_BEES_NAV = [
  { title: 'Carpenter Bees', href: '/us/carpenter-bees' },
  { title: 'Social Wasps', href: '/us/social-wasps' },
];
