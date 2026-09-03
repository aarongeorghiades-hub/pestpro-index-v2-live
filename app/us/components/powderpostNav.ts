// The header nav for the powderpost beetle page.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// ONE ENTRY, MATCHING termitesNav.ts AND formosanTermitesNav.ts. The reciprocal
// links between this page and /us/termites are BODY PROSE on both pages, not nav
// entries, for the reason fliesNav.ts records: a nav entry is a commitment on
// every route that consumes the file, and a prose link can sit in the one place a
// reader has just ruled the other pest out.
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D).
//
// NOT A G7 CLUSTER, AND THAT IS DELIBERATE — S62 R4. /us/termites,
// /us/formosan-termites, /us/carpenter-bees and this page do read as one
// wood-damage grouping for a reader. They are NOT declared as a cluster in
// scripts/gates.mjs, because G7 treats a link from an UNCLUSTERED page into a
// clustered one as a leak, and two such links exist today:
// /us/choosing-a-pest-control-service -> /us/termites, and
// /us/social-wasps -> /us/carpenter-bees. Declaring the group would newly fail
// both. That is a modelling gap the S62 R4 fly ruling did not reach, and it is
// referred rather than worked around.

export const POWDERPOST_HOME = '/us';

export const POWDERPOST_NAV = [{ title: 'Powderpost Beetles', href: '/us/powderpost-beetles' }];
