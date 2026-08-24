// The header nav for the opossum cluster.
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
// THE CLUSTER IS ONE PAGE, AND UNLIKE THE SKUNK CLUSTER IT IS LIKELY TO STAY
// THAT WAY. The S37 R4 source pack looked for an opossum product category and
// did not find one: every trap figure in the pack comes from a single
// publication that addresses raccoons and opossums jointly, and no source
// describes any trap feature as opossum-specific. There is nothing to build a
// second page on, so no second entry is listed here.
//
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.
//
// It contains no link to the skunk, armadillo, gopher, Joro or overwintering
// clusters: different animal, different reader.

export const OPOSSUM_HOME = '/us';

export const OPOSSUM_NAV = [{ title: 'Opossums', href: '/us/opossums' }];
