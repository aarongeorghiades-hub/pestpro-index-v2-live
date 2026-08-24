// The header nav for the skunk cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout defaults `homeHref` and `clusterNav`
// to the Joro cluster. A page that omits both props renders a Joro wordmark link
// and a four-item Joro nav, which would be wrong on the skunk page and wrong
// silently. Passing this module is what prevents that.
//
// THE CLUSTER IS ONE PAGE. That is deliberate and it is why this list has a
// single entry. The S37 R1 source pack found a real product category for
// enclosed skunk traps, but could not confirm dimensions or availability for a
// single ASIN, because Amazon served a bot interstitial to every request that
// round. A nav entry to an unbuilt /us/best-skunk-traps would be a 404 in the
// header of this page, so it is not listed until that page exists.
//
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.
//
// It contains no link to the armadillo, gopher, Joro or overwintering clusters:
// different animal, different reader.

export const SKUNK_HOME = '/us';

export const SKUNK_NAV = [{ title: 'Skunks', href: '/us/skunks' }];
