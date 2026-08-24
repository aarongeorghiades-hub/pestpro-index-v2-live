// The header nav for the skunk cluster.
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
