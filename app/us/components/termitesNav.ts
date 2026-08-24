// The header nav for the termite cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on this page and wrong
// silently. Passing this module is what prevents that.
//
// THE CLUSTER IS ONE PAGE, AND THAT IS A RULING RATHER THAN A GAP. The S44 R2
// source pack looked for a second, product-ranking page and concluded it could
// not be built honestly: five extension services state that consumer termite
// products will seldom eradicate an existing infestation, and NO source
// consulted compares any two termite products on any measure. There is therefore
// no sourced basis for the word "best", and no published specification to
// measure a product against of the kind that made the raccoon cage-trap page
// buildable. Ruling A: one page, no /us/best-termite-treatments route, and none
// as a redirect either.
//
// The products this page does carry live INSIDE it, scoped to prevention,
// monitoring and spot treatment, each with its own sourced limitation. They are
// not a second page and must not become one without a new sourced criterion.
//
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.

export const TERMITES_HOME = '/us';

export const TERMITES_NAV = [{ title: 'Termites', href: '/us/termites' }];
