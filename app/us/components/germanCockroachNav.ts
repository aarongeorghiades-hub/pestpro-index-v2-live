// The header nav for the German cockroach cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS TWO PAGES AND THEY COVER DIFFERENT ANIMALS. /us/german-cockroaches
// covers Blattella germanica alone — the small indoor species. /us/palmetto-bugs
// covers the large outdoor species the name palmetto bug is applied to, and it keeps
// the identification material for those. The two pages hand off; neither restates
// the other.
//
// WHY THE SPLIT IS NOT ARBITRARY. Mississippi State's own publication is built the
// same way: a German cockroach block and a separate large-roach block, with the
// document telling a reader to work out which they have before doing anything. The
// selection criterion this page turns on — small bait stations rather than large —
// is meaningless unless the two are kept apart.
//
// THE LINK IS RECIPROCAL AND WAS MADE IN ONE PASS. palmettoNav.ts was re-measured
// at exactly ONE importer immediately before the edit, so adding an entry there put
// a link on one page and no others. Law 29: a shared component change hits every
// consumer, and the consumer set was one. Where that count is higher the remedy is
// body prose instead, which is what S54 R5 did for cluster flies.
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D). It holds
// its own list and would continue to even if another cluster's list matched it.
//
// THERE IS NO /us/best-* ROUTE FOR EITHER PAGE AND NONE IS PLANNED. palmettoNav.ts
// already commits against one in the site's own voice, on the ground that no source
// compares any two cockroach products on any measure. That is still true of this
// page's five sources, so the commitment holds for this route too.

export const GERMAN_ROACH_HOME = '/us';

export const GERMAN_ROACH_NAV = [
  { title: 'German Cockroaches', href: '/us/german-cockroaches' },
  { title: 'Palmetto Bugs', href: '/us/palmetto-bugs' },
];
