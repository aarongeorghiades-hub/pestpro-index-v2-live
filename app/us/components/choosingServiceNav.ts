// The header nav for the choosing-a-pest-control-service cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COLLECTED, S51 R5b: these values were declared inline in the page file until this
// round moved them here, which is where the other sixteen clusters keep theirs. The
// values are unchanged by the move.
//
// THE CLUSTER IS ONE PAGE, AND IT CARRIES NO COMMERCE AT ALL. Its subject is a
// service rather than a product, so it has no cards, no ASINs and nothing to
// disclose. That is the design, not a gap waiting to be filled.

export const CHOOSINGSERVICE_HOME = '/us';

export const CHOOSINGSERVICE_NAV = [
  { title: 'Choosing a Pest Control Service', href: '/us/choosing-a-pest-control-service' },
];
