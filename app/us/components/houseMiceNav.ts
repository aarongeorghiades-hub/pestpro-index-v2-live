// The header nav for the house mice cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS ONE PAGE TODAY AND THE LIST STILL LIVES HERE, following the
// /us/social-wasps precedent (S57 R5). This module holds its own value from the
// first commit; there is no shared nav source anywhere in the estate and one must
// never be created (S51-D, Law 104).
//
// WHY THE ROUTE IS NAMED FOR HOUSE MICE AND NOT "MICE". Every species-specific
// source fetched for this page treats ONE species: Mus musculus. UC IPM Pest
// Notes 7483 gives the identifying test against the other small rodent readers
// confuse it with: "The house mouse is distinguished from the deer mouse by its
// overall gray coat," and Cornell CALS notes that knowing the species tells you
// whether it is "primarily living indoors (house mouse) or if they enter the home
// from exterior entry points (white-footed and deer mouse)." A route named
// "mice" would silently annex the deer mouse, whose disease profile and scope
// this page explicitly does not cover (S59 R6 PM ruling). "House mice" is the
// plural form of the species name every source uses, matching this estate's
// existing plural-route convention (ants, fleas, german-cockroaches).
//
// SCOPE, RULED AT S59 R6: identification, signs of infestation, exclusion and
// structural proofing, trapping and control methods, sanitation, and when to
// call a professional. Rodent-borne disease is named once, in reported speech,
// pointing the reader to the CDC rather than sourced and carried on this page.
// This is a scope decision, not a sourcing gap — see the page's own note.
//
// HUB PLACEMENT. This route lives in a NEW hub group, "Rodents in the Home," not
// in "Burrowing Rodents." A house mouse does not burrow, and that group's own
// blurb is about lawn damage. The new group is scoped to commensal rodents — it
// will take rats later — and carries this one route for now.

export const HOUSE_MICE_HOME = '/us';

export const HOUSE_MICE_NAV = [{ title: 'House Mice', href: '/us/house-mice' }];
