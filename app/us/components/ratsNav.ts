// The header nav for the rats cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS ONE PAGE TODAY AND THE LIST STILL LIVES HERE, matching
// houseMiceNav.ts, socialWaspNav.ts and bedBugsNav.ts. This module holds its own
// value from the first commit; there is no shared nav source anywhere in the
// estate and one must never be created (S51-D, Law 104).
//
// WHY THE ROUTE IS NAMED "RATS" AND NOT "NORWAY RATS" OR "COMMENSAL RATS". Unlike
// house-mice, no source read for this page needed to exclude a second species.
// Every source treats "rats" as covering both commensal species present in the
// US — the Norway rat (Rattus norvegicus) and the roof rat (Rattus rattus) —
// together, under that one plain name: UC IPM Pest Notes 74106 titles itself
// simply "Rats" and calls both species "commensal rats" throughout; Oregon
// State's solvepest page, the National Pesticide Information Center, and the
// Nebraska and Illinois Extension publications all do the same. There was no
// naming collision to resolve, and no species-exclusion reason the way house-mice
// had to exclude the deer mouse. "Rats" matches the estate's plural-route
// convention (ants, fleas, house-mice).
//
// SCOPE, PM RULING FOR THIS ROUND: identification and telling rats from mice,
// signs of infestation, where they nest and how they enter, exclusion and
// structural proofing, trapping and control, sanitation and food storage, and
// when to call a professional. Rodent-borne disease is named once, in one short
// paragraph, pointing the reader to the CDC rather than sourced and carried here
// — the same scope boundary house-mice drew, for the same reason.
//
// HUB PLACEMENT: "Rodents in the Home," the group house-mice created and was
// explicitly scoped to take rats into later. See app/us/page.tsx.
//
// TIER 4 HEAD #11 OF 11, PER LAW 158/159 (CLAUDE.md). This is the last unbuilt
// head. Tier 4 closes with this route.

export const RATS_HOME = '/us';

export const RATS_NAV = [{ title: 'Rats', href: '/us/rats' }];
