// The header nav for the house fly cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// IT LINKS TO /us/cluster-flies AND THAT LINK IS CURRENTLY ONE-DIRECTIONAL. The
// reverse link is NOT written here and is not an oversight. /us/cluster-flies has no
// module of its own: it consumes overwinteringNav.ts, which is shared by SIX pages
// including three stink bug pages, boxelder bugs and Asian lady beetles. Adding a
// flies entry there would put a filth fly link on five pages that have nothing to do
// with filth flies. Law 29: a shared component change hits every consumer. The
// asymmetry is recorded and referred to the PM rather than resolved by widening the
// blast radius.
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D). It holds
// its own list, and would continue to even if another cluster's list matched it.

export const FLIES_HOME = '/us';

export const FLIES_NAV = [
  { title: 'House Flies', href: '/us/flies' },
  { title: 'Cluster Flies', href: '/us/cluster-flies' },
];
