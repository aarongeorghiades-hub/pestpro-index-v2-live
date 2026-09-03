// The header nav for the house centipede page.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// ONE ENTRY. /us/house-centipedes is declared in the `moisture` cluster in
// scripts/gates.mjs alongside /us/silverfish, /us/camel-crickets and
// /us/earwigs, but the reciprocal links are BODY PROSE, for the reason
// silverfishNav.ts records: that file carries the FABRIC-pest family — carpet
// beetles and moths — and an entry for a predatory arthropod would sit in front
// of a reader who came about a hole in a sweater (Law 29).
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D).

export const HOUSE_CENTIPEDES_HOME = '/us';

export const HOUSE_CENTIPEDES_NAV = [
  { title: 'House Centipedes', href: '/us/house-centipedes' },
];
