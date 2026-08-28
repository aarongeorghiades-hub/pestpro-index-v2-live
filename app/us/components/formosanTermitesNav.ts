// The header nav for the Formosan termite cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COLLECTED, S51 R5b: these values were declared inline in the page file until this
// round moved them here, which is where the other sixteen clusters keep theirs. The
// values are unchanged by the move.
//
// THE CLUSTER IS ONE PAGE AND IT CARRIES NO COMMERCE. Every source consulted says
// this species is a professional's job, so there is no product class to card and
// nothing to disclose. That is the design, not a gap.

export const FORMOSAN_HOME = '/us';

export const FORMOSAN_NAV = [{ title: 'Formosan Termites', href: '/us/formosan-termites' }];
