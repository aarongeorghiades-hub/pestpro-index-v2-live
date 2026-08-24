// The header nav for the raccoon cluster.
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
// THE CLUSTER IS TWO PAGES. The S38 R1 source pack found a raccoon-specific
// product category with a stated size specification, unlike the opossum round,
// which is what made the second page buildable. Both entries below are built, so
// neither is a 404 in the header of the other.
//
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.
//
// It contains no link to any other cluster on the estate, and none to the
// state-law page either: different animal, different reader, and in the law
// page's case a subject this page deliberately says nothing about.

export const RACCOON_HOME = '/us';

export const RACCOON_NAV = [
  { title: 'Raccoons', href: '/us/raccoons' },
  { title: 'Cage Traps', href: '/us/best-raccoon-traps' },
];
