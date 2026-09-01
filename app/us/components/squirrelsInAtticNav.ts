// The header nav for the squirrels-in-attic cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THIS CLUSTER LINKS TO /us/ground-squirrels, RECIPROCALLY. S61 R3 vetted this
// candidate specifically on the finding that /us/ground-squirrels' own FAQ
// disambiguates tree squirrels from ground squirrels but supplies no tree-squirrel
// control content — the two pages answer different readers' questions about a
// name that gets confused, and each should send the wrong-animal reader to the
// other. This module carries the tree-squirrel side of that pair; the
// ground-squirrel nav carries the other, and both were edited in the same round
// so neither sits asymmetric (matching the fleas/ground-squirrels precedent in
// groundSquirrelNav.ts).

export const SQUIRRELS_ATTIC_HOME = '/us';

export const SQUIRRELS_ATTIC_NAV = [
  { title: 'Squirrels in the Attic', href: '/us/squirrels-in-attic' },
  { title: 'Ground Squirrels', href: '/us/ground-squirrels' },
];
