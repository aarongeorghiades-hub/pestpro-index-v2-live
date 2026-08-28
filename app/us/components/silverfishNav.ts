// The header nav for the silverfish cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THIS MODULE LISTS ALL THREE FABRIC & PAPER PESTS PAGES, AND SO DO THE OTHER TWO.
// The three lists are identical in value today and are DELIBERATELY NOT SHARED. Law
// 104: divergence is preserved as per-surface fields and identical values are never
// collapsed into a shared source, because collapsing reintroduces exactly the
// coupling the per-cluster design removes. If one page's nav must change later, it
// changes here and nowhere else.
//
// THE THREE PAGES ARE SIBLINGS BY DAMAGE, NOT BY TAXONOMY. Carpet beetles and clothes
// moths eat animal fibres; silverfish scrape paper and starch. They share the storage
// container advice and nothing else about their products: UC IPM states that a
// pheromone lure attracts its own species and not others, so no trap on any one of
// these three pages is a substitute for a trap on another.

export const SILVERFISH_HOME = '/us';

export const SILVERFISH_NAV = [
  { title: 'Carpet Beetles', href: '/us/carpet-beetles' },
  { title: 'Moths', href: '/us/moths' },
  { title: 'Silverfish', href: '/us/silverfish' },
];
