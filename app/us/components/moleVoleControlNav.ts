// The header nav for the mole and vole control cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COLLECTED, S51 R5b: these values were declared inline in the page file until this
// round moved them here, which is where the other sixteen clusters keep theirs. The
// values are unchanged by the move.
//
// THIS CLUSTER DOES NOT LINK INTO THE IDENTIFICATION CLUSTER FROM ITS HEADER.
// app/us/components/moleVoleGopherNav.ts states the reason in its own comment:
// that cluster answers one question and links nowhere else, because turning an
// identification page into a funnel would invite a reader to carry a method
// across to an animal the page has just told them they may not have. The link
// runs one way — from this page's body to that page — and not back.

export const MOLEVOLE_HOME = '/us';

export const MOLEVOLE_NAV = [
  { title: 'Mole and Vole Control', href: '/us/mole-and-vole-control' },
];
