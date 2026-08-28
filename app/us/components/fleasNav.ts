// The header nav for the flea cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// IT LINKS TO GROUND SQUIRRELS AND OPOSSUMS, AND THOSE TWO NOW LINK BACK. Both of
// those pages already told a reader that fleas carry disease and then gave them
// nowhere to go: /us/ground-squirrels renders UC IPM's statement that plague is
// carried by fleas associated with the squirrels, and /us/opossums records that
// Texas A&M states opossums carry murine typhus. All three modules were changed in
// one pass so none of them ever sat asymmetric.
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D). Each of
// the three modules holds its own list. They are not identical in value here — this
// one names three pages, the other two name two each — and even where values match
// they are never collapsed, because collapsing reintroduces the coupling the
// per-cluster design exists to remove.

export const FLEAS_HOME = '/us';

export const FLEAS_NAV = [
  { title: 'Fleas', href: '/us/fleas' },
  { title: 'Ground Squirrels', href: '/us/ground-squirrels' },
  { title: 'Opossums', href: '/us/opossums' },
];
