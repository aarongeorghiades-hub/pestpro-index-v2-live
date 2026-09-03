// The header nav for the earwig page.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// ONE ENTRY. /us/earwigs is declared in the `moisture` cluster in
// scripts/gates.mjs alongside /us/silverfish and /us/camel-crickets, but the
// reciprocal links to both are BODY PROSE on all three pages rather than nav
// entries. silverfishNav.ts already carries a DIFFERENT grouping — carpet
// beetles and moths, the fabric-pest family — and adding an earwig entry there
// would put an outdoor garden insect in front of a reader who came for a hole in
// a sweater. Law 29: a shared component change hits every consumer.
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D).

export const EARWIGS_HOME = '/us';

export const EARWIGS_NAV = [{ title: 'Earwigs', href: '/us/earwigs' }];
