// The header nav for the ground squirrel cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COLLECTED, S51 R5b: these values were declared inline in the page file until this
// round moved them here, which is where the other sixteen clusters keep theirs. The
// values are unchanged by the move.
//
// THIS PAGE LINKS TO /us/california-trapping-rules AND NOT THE OTHER WAY. That
// page is a quotation record of primary legal text and states in its own voice
// that it does nothing else with what it quotes. It is not edited by this round.
//
// A FLEAS ENTRY WAS ADDED, S54 R2. This page renders UC IPM's statement that plague
// is transmitted by fleas associated with the squirrels, and until now it gave the
// reader nowhere to follow that. /us/fleas exists, so the link is written. All three
// modules in this cross-link were changed in one pass so none sat asymmetric. This
// module still holds its own value and is not shared (Law 104).

export const GS_HOME = '/us';

export const GS_NAV = [
  { title: 'Ground Squirrels', href: '/us/ground-squirrels' },
  { title: 'Fleas', href: '/us/fleas' },
];
