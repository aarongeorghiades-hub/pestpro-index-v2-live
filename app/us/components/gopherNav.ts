// The header nav for the pocket gopher cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COMMENT CORRECTED, S47 R4: what stood here said the layout DEFAULTED both props
// to the Joro cluster, and that omitting them rendered a Joro wordmark and a
// four-item Joro nav silently. That was true until S47 R3 made the props required
// and deleted those defaults. Omission is now a compile error, not a silent wrong
// render. Nothing in this module's values changed in this round.
//
// The cluster is two pages, cross-linked, with no hub above them. Both are added
// in the same commit as this file, so both are listed: a nav entry to an unbuilt
// route would be a 404 in the header of every page in the cluster, and neither
// entry here is unbuilt.
//
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.
//
// It contains no link to the Joro cluster and none to the overwintering cluster:
// different animal, different season, different reader.

export const GOPHER_HOME = '/us';

export const GOPHER_NAV = [
  { title: 'Pocket Gophers', href: '/us/pocket-gophers' },
  { title: 'Traps', href: '/us/best-gopher-traps' },
];
