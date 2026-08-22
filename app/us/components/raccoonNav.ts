// The header nav for the raccoon cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on the raccoon page and wrong
// silently. Passing this module is what prevents that.
//
// THE CLUSTER IS ONE PAGE. The S38 R1 source pack did find a raccoon-specific
// product category with a stated specification, unlike the opossum round, so a
// second page is possible later. It is not listed here because it does not exist
// yet, and a nav entry to an unbuilt route would be a 404 in the header of the
// only page in the cluster.
//
// homeHref points at the informational page because it is the only page in the
// cluster. When a /us hub eventually exists this should point there instead.
//
// It contains no link to any other cluster on the estate, and none to the
// state-law page either: different animal, different reader, and in the law
// page's case a subject this page deliberately says nothing about.

export const RACCOON_HOME = '/us/raccoons';

export const RACCOON_NAV = [{ title: 'Raccoons', href: '/us/raccoons' }];
