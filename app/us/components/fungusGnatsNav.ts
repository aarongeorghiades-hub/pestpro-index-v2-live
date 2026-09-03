// The header nav for the fungus gnat page.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// IT CARRIES THE FLY CLUSTER, because /us/fungus-gnats is declared a member of it
// in scripts/gates.mjs (S62 R5) and because the reader this page is for very
// often arrived believing they had fruit flies. The three existing fly routes
// each already carry the other two; this file is the fourth member's copy.
//
// fliesNav.ts and fruitFliesNav.ts ARE NOT EDITED HERE. Each is its own page's
// list and this file is its own (Law 104, S51-D). The reciprocal link from
// /us/fruit-flies to this page is BODY PROSE, replacing the sentence that used
// to end the fungus gnat topic rather than hand it on.

export const FUNGUS_GNATS_HOME = '/us';

export const FUNGUS_GNATS_NAV = [
  { title: 'Fungus Gnats', href: '/us/fungus-gnats' },
  { title: 'Fruit Flies', href: '/us/fruit-flies' },
  { title: 'House Flies', href: '/us/flies' },
  { title: 'Cluster Flies', href: '/us/cluster-flies' },
];
