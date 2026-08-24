// The header nav for the California trapping rules cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on a regulatory page and wrong
// silently. Passing this module is what prevents that.
//
// THE CLUSTER IS ONE PAGE, AND IT DELIBERATELY LINKS TO NO ANIMAL PAGE. This is
// a page about the text of one regulation and four statutes. Linking it to the
// skunk or opossum pages would invite a reader to carry a rule across to an
// animal the regulation never names, which is the exact error the S37 R7 source
// pack found in the secondary pages it surveyed. The separation is the point.
//
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.

export const CALIFORNIA_HOME = '/us';

export const CALIFORNIA_NAV = [
  { title: 'California Trapping Rules', href: '/us/california-trapping-rules' },
];
