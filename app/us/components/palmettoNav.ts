// The header nav for the palmetto bug cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COMMENT CORRECTED, S47 R4: what stood here said the layout DEFAULTED both props
// to the Joro cluster, and that omitting them rendered a Joro wordmark and a
// four-item Joro nav silently. That was true until S47 R3 made the props required
// and deleted those defaults. Omission is now a compile error, not a silent wrong
// render. Nothing in this module's values changed in this round.
//
// THE CLUSTER IS ONE PAGE. The S45 R1 source pack found no published
// specification that would let one product be measured against another, and no
// source consulted compares any two cockroach products on any measure. So there
// is no second, ranking page to build and no /us/best-* route, now or as a
// redirect. What the pack DID find is a selection criterion — large-roach bait
// stations rather than German-cockroach ones, stated independently by MSU
// Extension and UF/IFAS — and that is a fitness test, not an order of
// preference. It lives inside this page's products section.
//
// A SECOND PAGE NOW EXISTS AND IS LINKED: /us/german-cockroaches, built in S56 R2.
// It covers Blattella germanica alone. This page keeps the four large outdoor
// species and their identification material; that page keeps the small indoor one.
// The link is reciprocal and was made in one pass, after this module was re-measured
// at exactly ONE importer immediately before the edit (Law 29). Had it been shared,
// the remedy would have been body prose, as S54 R5 did for cluster flies.
//
// A THIRD PAGE IS ANTICIPATED BUT NOT BUILT: the Florida and Gulf angle is
// carried here as a short mention only, following the Formosan precedent on
// /us/termites. When that page exists it joins this array.
//
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.

export const PALMETTO_HOME = '/us';

export const PALMETTO_NAV = [
  { title: 'Palmetto Bugs', href: '/us/palmetto-bugs' },
  { title: 'German Cockroaches', href: '/us/german-cockroaches' },
];
