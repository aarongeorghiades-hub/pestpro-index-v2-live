// The header nav for the carpet beetle cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS ONE PAGE, AND ITS PRODUCT SIDE IS NARROW BY EVIDENCE. The S52 R2
// source pack closed two classes and scoped a third. Vacuums closed because no
// source states a product property — two sources require a disposable bag, which
// is a practice rather than a specification. Unbaited sticky traps closed because
// the class is defined by the ABSENCE of a pheromone, and a listing's silence
// cannot evidence an absence. Insecticides are sourced fact on this page and are
// never carded: UC IPM states that where exclusion and sanitation succeed,
// insecticide treatment is not required.
//
// IT NOW LINKS TO ITS TWO SIBLINGS, AND THAT INSTRUCTION IS DISCHARGED. What stood
// here said the moths page did not exist and that the link should be written when it
// did. Both /us/moths and /us/silverfish exist, so the links are written, and this
// paragraph is corrected rather than left standing as a false statement.
//
// THE THREE LISTS ARE IDENTICAL IN VALUE AND DELIBERATELY NOT SHARED. Law 104:
// identical values are never collapsed into a shared source, because that
// reintroduces the coupling the per-cluster design removes.

export const CARPETBEETLES_HOME = '/us';

export const CARPETBEETLES_NAV = [
  { title: 'Carpet Beetles', href: '/us/carpet-beetles' },
  { title: 'Moths', href: '/us/moths' },
  { title: 'Silverfish', href: '/us/silverfish' },
];
