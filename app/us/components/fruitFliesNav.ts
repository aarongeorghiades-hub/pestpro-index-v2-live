// The header nav for the fruit fly cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// TWO RECIPROCAL LINKS, BUILT TO MATCH THE ESTATE'S EXISTING PATTERN EXACTLY. S61
// R3/R5 vetted this candidate specifically on the finding that a reader typing
// "small flies in my kitchen" could land on the wrong page — /us/flies (house
// flies), /us/cluster-flies, or here. fliesNav.ts already links house flies to
// cluster flies in its own list and was edited in this round to add a third entry
// here; this module carries the return links. /us/cluster-flies consumes the
// SHARED overwinteringNav.ts (six consumers — three stink bug pages, boxelder
// bugs, Asian lady beetles, cluster flies itself), so a fruit-flies entry was
// deliberately NOT added there (Law 29) — the cluster-flies reverse link is body
// prose instead, in its own "If It Is Not a Cluster Fly" section, matching how
// that same section already handles the reverse link to house flies.

export const FRUIT_FLIES_HOME = '/us';

export const FRUIT_FLIES_NAV = [
  { title: 'Fruit Flies', href: '/us/fruit-flies' },
  { title: 'House Flies', href: '/us/flies' },
  { title: 'Cluster Flies', href: '/us/cluster-flies' },
];
