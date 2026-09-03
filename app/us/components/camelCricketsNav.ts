// The header nav for the camel cricket page.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THIS IS A ONE-PAGE CLUSTER TODAY, AND THE NAV SAYS SO. It lists this page and
// /us/silverfish, which is the nearest neighbor on the estate: both are insects
// a reader finds in a damp basement, both are misidentified on sight, and both
// pages arrive at the same conclusion about dehumidifiers for the same reason.
// It is NOT a shared file and must not become one (Law 104): if a millipede,
// house centipede or sowbug page is ever built, each gets its own nav module
// even if the values are identical on the day.
//
// Law 29: the reverse link from /us/silverfish is written as body prose in that
// page's own text, NOT by editing this or any other cluster's nav file.

export const CAMEL_CRICKETS_HOME = '/us';

export const CAMEL_CRICKETS_NAV = [
  { title: 'Camel Crickets', href: '/us/camel-crickets' },
  { title: 'Silverfish and Firebrats', href: '/us/silverfish' },
];
