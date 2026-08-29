// The header nav for the household ant cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS TWO PAGES AND THEY ARE NOT THE SAME SUBJECT. /us/ants covers the
// four ants the S55 R2 pack actually documents as household pests — odorous house,
// pavement, carpenter and pharaoh. /us/imported-fire-ants covers the three taxa a
// federal regulation names, and it keeps the identification material and the sting
// material. This module carries the link because the two pages hand off to each
// other rather than repeating each other.
//
// THE LINK IS RECIPROCAL AND WAS MADE IN ONE PASS. fireAntNav.ts was measured at
// exactly ONE consumer before the edit, so adding /us/ants there put a household
// ant link on one page and no others. Law 29: a shared component change hits every
// consumer, and here the consumer set was a single page. Had that count been higher,
// the remedy would have been body prose on the fire ants page instead, which is what
// S54 R5 did for cluster flies.
//
// THIS IS NOT A SHARED SOURCE AND MUST NEVER BECOME ONE (Law 104, S51-D). It holds
// its own list, and would continue to even if another cluster's list matched it
// byte for byte.
//
// THERE IS NO /us/best-* ROUTE FOR ANTS AND NONE IS PLANNED. No source in the pack
// compares any two named products. What the sources compare is BAIT FORMS and ACTIVE
// INGREDIENTS, which is what the cards record.

export const ANTS_HOME = '/us';

export const ANTS_NAV = [
  { title: 'Household Ants', href: '/us/ants' },
  { title: 'Imported Fire Ants', href: '/us/imported-fire-ants' },
];
