// The header nav for the palmetto bug cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on this page and wrong
// silently. Passing this module is what prevents that.
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
// A SECOND PAGE IS ANTICIPATED BUT NOT BUILT: the Florida and Gulf angle is
// carried here as a short mention only, following the Formosan precedent on
// /us/termites. When that page exists it joins this array.
//
// homeHref points at the page itself because it is the only page in the cluster.
// When a /us hub eventually exists this should point there instead.

export const PALMETTO_HOME = '/us/palmetto-bugs';

export const PALMETTO_NAV = [{ title: 'Palmetto Bugs', href: '/us/palmetto-bugs' }];
