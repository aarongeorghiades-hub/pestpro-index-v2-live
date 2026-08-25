// The header nav for the Arizona bark scorpion cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS ONE PAGE, AND THE PRODUCT SIDE IS DELIBERATELY NARROW. The S47 R5
// source pack closed six classes and opened three. Glue boards are sourced by UC IPM
// with a published board size of 8 by 5 1/4 inches, and NO listing checked publishes
// a board dimension that can be measured against it, so none is carded. Door sweeps
// are the best-sourced entry route in the pack and carry a genuine test — no outside
// light visible under the door — but that is a test of the installed job, not of a
// product, so none is carded either. Mesh and screens closed at zero: the University
// of Arizona gives a 20 mesh figure in its general pest-proofing publication and
// deliberately does not give a mesh number in its scorpion publication. Insecticides
// closed at zero by ruling.
//
// THERE IS NO /us/best-* ROUTE AND NONE IS PLANNED. No source consulted compares any
// two named products for this animal, and the University of Arizona publication
// carries an explicit statement that mentioning a product is not an endorsement.
//
// IT LINKS NOWHERE ELSE ON THE ESTATE. The pack sources no comparison between this
// animal and any other pest the estate covers, and the sting material is specific
// enough that carrying a reader sideways from it would be wrong.

export const BARKSCORPION_HOME = '/us';

export const BARKSCORPION_NAV = [
  { title: 'Arizona Bark Scorpions', href: '/us/arizona-bark-scorpions' },
];
