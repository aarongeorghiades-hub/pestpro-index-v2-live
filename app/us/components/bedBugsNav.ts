// The header nav for the bed bugs cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS ONE PAGE TODAY AND THE LIST STILL LIVES HERE. This module holds
// its own value from the first commit, matching socialWaspNav.ts and
// houseMiceNav.ts. It is not a placeholder waiting to be filled from somewhere
// else, and there is no shared nav source anywhere in the estate.
//
// THE ROUTE IS NAMED FOR BED BUGS, NOT FOR CIMEX LECTULARIUS OR ANY OTHER FORM.
// Every source read for this page uses the plain common name. Penn State
// Extension names the species Cimex lectularius once, to distinguish it from the
// Eastern bat bug, and calls it "the common bed bug" in its own words; every
// other source on this page, including the two other bed bug species named in
// passing, uses "bed bugs" throughout. There was no naming collision to resolve
// here, unlike social-wasps.
//
// TIER 4 HEAD #2, PER LAW 158 (CLAUDE.md). Bed bugs is the first of the two
// heads S60 R4 found genuinely unbuilt after the spiders-general head was
// permanently dropped. Rats closes the tier in a later round.

export const BED_BUGS_HOME = '/us';

export const BED_BUGS_NAV = [{ title: 'Bed Bugs', href: '/us/bed-bugs' }];
