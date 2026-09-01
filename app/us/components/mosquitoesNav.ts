// The header nav for the mosquitoes cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// A RECIPROCAL LINK TO /us/no-see-ums. S61 R7's cannibalisation check found no
// mosquito-specific content on that page, but its own text already gestures at
// the adjacency without anywhere to send the reader: "No source consulted for
// this page compares a no-see-um bite with a mosquito bite, so this page does
// not draw that comparison." Both pages independently source DEET effectiveness
// against their own pest, and a reader unsure whether the bite came from a
// mosquito or a midge is exactly the reader this link serves. noSeeUmsNav.ts is
// its own file (one consumer, not shared) and was edited in this same round to
// add the return link — mirroring the pattern R5 and R6 both used.

export const MOSQUITOES_HOME = '/us';

export const MOSQUITOES_NAV = [
  { title: 'Mosquitoes', href: '/us/mosquitoes' },
  { title: 'No-See-Ums', href: '/us/no-see-ums' },
];
