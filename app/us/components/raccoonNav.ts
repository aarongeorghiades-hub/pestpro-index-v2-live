// The header nav for the raccoon cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on the raccoon page and wrong
// silently. Passing this module is what prevents that.
//
// THE CLUSTER IS TWO PAGES. The S38 R1 source pack found a raccoon-specific
// product category with a stated size specification, unlike the opossum round,
// which is what made the second page buildable. Both entries below are built, so
// neither is a 404 in the header of the other.
//
// homeHref points at the informational page because it is the only page in the
// cluster. When a /us hub eventually exists this should point there instead.
//
// It contains no link to any other cluster on the estate, and none to the
// state-law page either: different animal, different reader, and in the law
// page's case a subject this page deliberately says nothing about.

export const RACCOON_HOME = '/us/raccoons';

export const RACCOON_NAV = [
  { title: 'Raccoons', href: '/us/raccoons' },
  { title: 'Cage Traps', href: '/us/best-raccoon-traps' },
];
