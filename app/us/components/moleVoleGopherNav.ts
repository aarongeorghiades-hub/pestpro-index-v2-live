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
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.

export const MVG_HOME = '/us';

export const MVG_NAV = [{ title: 'Moles, Voles and Gophers', href: '/us/moles-voles-gophers' }];
