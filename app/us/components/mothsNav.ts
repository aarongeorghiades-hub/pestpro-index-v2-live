// The header nav for the household moths cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS ONE PAGE COVERING TWO DIVISIONS THAT MUST NOT BE MERGED. The page
// separates fabric-damaging moths from stored-food moths, and the separation is not
// presentational. UC IPM states that a clothes-moth pheromone will not attract other
// moth species, and that traps for other species will not attract clothes moths. A
// reader who buys from the wrong division gets a product the flagship source says
// will not work on their pest. The nav therefore names the page once, and the page
// itself carries the dividing line.
//
// IT NOW LINKS TO ITS TWO SIBLINGS. What stood here recorded that the carpet beetles
// link was withheld until a round was authorised to change both modules at once. That
// round has happened and all three were changed in one pass, so the modules stayed
// symmetrical and this paragraph is corrected rather than left standing.
//
// THE THREE LISTS ARE IDENTICAL IN VALUE AND DELIBERATELY NOT SHARED. Law 104:
// identical values are never collapsed into a shared source. The body of this page
// also cross-links in prose, where the sources draw the damage distinction.

export const MOTHS_HOME = '/us';

export const MOTHS_NAV = [
  { title: 'Carpet Beetles', href: '/us/carpet-beetles' },
  { title: 'Moths', href: '/us/moths' },
  { title: 'Silverfish', href: '/us/silverfish' },
];
