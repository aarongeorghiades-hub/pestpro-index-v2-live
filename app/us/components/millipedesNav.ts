// The header nav for the millipede page.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// ONE ENTRY, and the reciprocal links are BODY PROSE. /us/millipedes is declared
// in the `moisture` cluster in scripts/gates.mjs; it is NOT in `overwintering`,
// because the insects there deliberately winter indoors and a millipede does the
// opposite — Colorado State says it usually dies in a home within a day or two.
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D).

export const MILLIPEDES_HOME = '/us';

export const MILLIPEDES_NAV = [{ title: 'Millipedes', href: '/us/millipedes' }];
