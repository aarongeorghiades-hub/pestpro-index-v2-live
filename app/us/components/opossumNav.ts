// The header nav for the opossum cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on the opossum page and wrong
// silently. Passing this module is what prevents that.
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
