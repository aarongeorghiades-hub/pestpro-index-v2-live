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
// IT DOES NOT LINK TO /us/carpet-beetles, AND THAT IS A SCOPE DECISION, NOT AN
// OVERSIGHT. carpetBeetlesNav.ts carries a standing instruction that the moths link
// be written when this page exists. That is a change to a shipped page's rendered
// nav and belongs to the round that is authorised to make it, on both sides at once,
// so the two modules stay symmetrical. The body of this page cross-links to the
// carpet beetles page in prose, where the sources draw the damage distinction.

export const MOTHS_HOME = '/us';

export const MOTHS_NAV = [{ title: 'Moths', href: '/us/moths' }];
