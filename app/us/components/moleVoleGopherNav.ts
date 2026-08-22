// The header nav for the identification cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on this page and wrong
// silently. Passing this module is what prevents that.
//
// THE CLUSTER IS ONE PAGE, AND IT LINKS NOWHERE ELSE ON THE ESTATE. The page
// answers a single question — which animal made the sign in the yard — and it
// gives no control guidance at all. Linking it onward would turn an
// identification page into a funnel, and would invite a reader to carry a
// method across to an animal the page has just told them they may not have.
//
// homeHref points at the page itself because it is the only page in the
// cluster. When a /us hub eventually exists this should point there instead.

export const MVG_HOME = '/us/moles-voles-gophers';

export const MVG_NAV = [{ title: 'Moles, Voles and Gophers', href: '/us/moles-voles-gophers' }];
