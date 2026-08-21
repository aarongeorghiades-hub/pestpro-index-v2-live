// The header nav for the armadillo cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on every armadillo page and
// wrong silently. Passing this module is what prevents that.
//
// The cluster is two pages, cross-linked, with no hub above them. Both are added
// in the same commit as this file, so both are listed: a nav entry to an unbuilt
// route would be a 404 in the header of every page in the cluster, and neither
// entry here is unbuilt.
//
// homeHref points at the informational page rather than a hub, because there is
// no hub. When a /us hub eventually exists this should point there instead.
//
// It contains no link to the gopher cluster, none to the Joro cluster and none
// to the overwintering cluster: different animal, different range, different
// reader.

export const ARMADILLO_HOME = '/us/armadillos';

export const ARMADILLO_NAV = [
  { title: 'Armadillos', href: '/us/armadillos' },
  { title: 'Traps', href: '/us/best-armadillo-traps' },
];
