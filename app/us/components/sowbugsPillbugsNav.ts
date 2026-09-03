// The header nav for the sowbug and pillbug page.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// ONE ENTRY, reciprocal links in BODY PROSE. /us/sowbugs-pillbugs is declared in
// the `moisture` cluster in scripts/gates.mjs — Colorado State publishes it in
// the SAME fact sheet as millipedes and centipedes, and says the controls that
// work for those two also work for these. No nav file is shared (Law 29).
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D).

export const SOWBUGS_PILLBUGS_HOME = '/us';

export const SOWBUGS_PILLBUGS_NAV = [
  { title: 'Sowbugs and Pillbugs', href: '/us/sowbugs-pillbugs' },
];
