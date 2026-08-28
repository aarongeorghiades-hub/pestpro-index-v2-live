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
// IT LINKS TO NO OTHER PAGE ON THE ESTATE, AND THE MOTHS PAGE DOES NOT EXIST YET.
// Four sources draw a damage-pattern distinction between clothes moths and carpet
// beetles, and that material is recorded in the R2 pack as RECORDED, NOT USED. A
// link to a route that does not exist is a 404, so none is written. When the moths
// page is built, the link is written then and not before.

export const CARPETBEETLES_HOME = '/us';

export const CARPETBEETLES_NAV = [{ title: 'Carpet Beetles', href: '/us/carpet-beetles' }];
