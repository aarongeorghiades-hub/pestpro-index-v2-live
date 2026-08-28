// The header nav for the black widow cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COLLECTED, S51 R5b: these values were declared inline in the page file until this
// round moved them here, which is where the other sixteen clusters keep theirs. The
// values are unchanged by the move.
//
// THIS PAGE IS NOT PART OF THE JORO CLUSTER and must never be added to it. That
// cluster is four pages about one species. The same ruling was made for the
// brown recluse page in S48 R11 and it holds for the same reason.

export const WIDOW_HOME = '/us';

export const WIDOW_NAV = [{ title: 'Black Widow Spiders', href: '/us/black-widow-spiders' }];
