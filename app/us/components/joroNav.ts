// The header nav for the Joro spider cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// WHY IT ARRIVED LAST, S47 R4: these two values were UsPageLayout's hardcoded
// defaults from R5 until S47 R3 made the props required and deleted them. R3 was
// scoped as proof-of-no-change and fixed at five files, so the four Joro pages
// carried the values inline. This module collects them, unchanged, and brings the
// cluster into line with the twelve that already work this way.
//
// THE CLUSTER IS FOUR PAGES. The home pointer is deliberately NOT the /us hub: it
// is the cluster's own top page, which is what it was before R3 and is a decision
// no round since has been asked to revisit. The other clusters point at the hub
// because S46 R5 repointed them; this one was not in that round's scope.

export const JORO_HOME = '/us/joro-spider';

export const JORO_NAV = [
  { title: 'Joro Spider', href: '/us/joro-spider' },
  { title: 'Danger', href: '/us/are-joro-spiders-dangerous' },
  { title: 'Webs', href: '/us/joro-spider-webs' },
  { title: 'Range', href: '/us/joro-spider-range' },
];
