// The header nav for the brown recluse cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COLLECTED, S51 R5b: these values were declared inline in the page file until this
// round moved them here, which is where the other sixteen clusters keep theirs. The
// values are unchanged by the move.
//
// THIS PAGE IS NOT PART OF THE JORO CLUSTER, and must never be added to it. That
// cluster is four pages about one species; putting a second spider in it would
// turn a named cluster into a general spiders group and would invite those four
// pages to link here.

export const RECLUSE_HOME = '/us';

export const RECLUSE_NAV = [
  { title: 'Brown Recluse Spiders', href: '/us/brown-recluse-spiders' },
];
