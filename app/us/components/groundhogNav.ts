// The header nav for the groundhog page.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE ESTATE'S DENSEST CLUSTER IS BURROWING ANIMALS, AND THIS NAV NAMES THE TWO
// A GROUNDHOG IS ACTUALLY CONFUSED WITH. /us/moles-voles-gophers is the
// identification page a reader lands on when they do not yet know what is
// digging; /us/ground-squirrels is the other large diurnal burrowing rodent.
// The pages that are NOT here — pocket gophers, chipmunks, armadillos — are
// separated by size and by damage type, and the differential on the page itself
// says so rather than the nav implying it.
//
// It is NOT a shared file and must not become one (Law 104): if the values ever
// need to diverge, they diverge here and nowhere else.
//
// Law 29: the reverse links from /us/moles-voles-gophers and /us/skunks are
// written as body prose in those pages' own text, NOT by editing their nav
// modules.

export const GROUNDHOG_HOME = '/us';

export const GROUNDHOG_NAV = [
  { title: 'Groundhogs', href: '/us/groundhogs' },
  { title: 'Mole, Vole or Gopher?', href: '/us/moles-voles-gophers' },
  { title: 'Ground Squirrels', href: '/us/ground-squirrels' },
];
