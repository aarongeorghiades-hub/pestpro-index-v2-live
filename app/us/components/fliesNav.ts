// The header nav for the house fly cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// IT LINKS TO /us/cluster-flies, AND SINCE S54 R5 THAT PAGE LINKS BACK. What stood
// here recorded the link as one-directional and referred the asymmetry to the PM.
// It was resolved, and this paragraph is corrected rather than left contradicting
// the estate (S53-J).
//
// THE REVERSE LINK IS BODY PROSE ON /us/cluster-flies, NOT A NAV ENTRY, AND THAT IS
// THE WHOLE POINT. That page has no module of its own: it consumes
// overwinteringNav.ts, which is shared by SIX pages including three stink bug pages,
// boxelder bugs and Asian lady beetles. Adding a flies entry there would have put a
// filth fly link on five pages that have nothing to do with filth flies. Law 29: a
// shared component change hits every consumer. The link therefore sits in the one
// section where a reader has just ruled cluster flies out, and overwinteringNav.ts
// was never touched.
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D). It holds
// its own list, and would continue to even if another cluster's list matched it.

export const FLIES_HOME = '/us';

export const FLIES_NAV = [
  { title: 'House Flies', href: '/us/flies' },
  { title: 'Cluster Flies', href: '/us/cluster-flies' },
];
