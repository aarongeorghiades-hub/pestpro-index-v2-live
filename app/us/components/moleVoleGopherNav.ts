// The header nav for the identification cluster.
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
