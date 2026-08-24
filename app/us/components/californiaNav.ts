// The header nav for the California trapping rules cluster.
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
