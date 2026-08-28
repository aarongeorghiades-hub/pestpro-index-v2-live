// The header nav for the chipmunk cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COLLECTED, S51 R5b: these values were declared inline in the page file until this
// round moved them here, which is where the other sixteen clusters keep theirs. The
// values are unchanged by the move.
//
// THIS PAGE DOES NOT JOIN THE IDENTIFICATION CLUSTER. app/us/components/
// moleVoleGopherNav.ts states that its cluster is one page that links nowhere
// else, and /us/moles-voles-gophers is scoped to three animals by its own text.
// The link runs one way, from this page's body to that page, and that page is
// not edited.

export const CHIPMUNK_HOME = '/us';

export const CHIPMUNK_NAV = [{ title: 'Chipmunks', href: '/us/chipmunks' }];
