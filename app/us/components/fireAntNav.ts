// The header nav for the imported fire ant cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS ONE PAGE, AND ITS SCOPE IS THE FEDERAL TERM. 7 CFR 301.81-1
// defines "imported fire ant" as Solenopsis invicta Buren, Solenopsis richteri
// Forel and hybrids of the two, so the page covers all three under the name the
// regulation uses. No source in the S47 R7 pack tells a homeowner how to separate
// red from black from hybrid in the field, and none gives different control
// advice for them, so the page treats them as one management target and says so.
//
// THERE IS NO /us/best-* ROUTE AND NONE IS PLANNED. No source consulted compares
// any two named products for this animal. What the sources compare is ACTIVE
// INGREDIENTS and EQUIPMENT TYPES, which is what the cards record.
//
// IT NOW LINKS TO /us/ants, AND THAT PAGE LINKS BACK. What stood here said this
// module linked nowhere else on the estate. That was true until S55 R3 built the
// household ants page, and the paragraph is corrected rather than left contradicting
// its own code (S53-J).
//
// WHY A NAV ENTRY AND NOT BODY PROSE. This module was re-measured immediately before
// the edit and had EXACTLY ONE consumer, this cluster's single page, so adding the
// link here put it on one page and no others. Law 29: a shared component change hits
// every consumer, and the consumer set was one. Where that count is higher the remedy
// is body prose instead, which is what S54 R5 did for cluster flies against
// overwinteringNav.ts and its six consumers.
//
// THE TWO PAGES HAND OFF, THEY DO NOT OVERLAP. The identification material, the
// two-step character and the sting all stay here. /us/ants covers odorous house,
// pavement, carpenter and pharaoh ants and repeats none of it.
//
// The pack still sources no comparison between imported fire ants and any other pest,
// and this link asserts none. It is navigation between two pages about ants.

export const FIREANT_HOME = '/us';

export const FIREANT_NAV = [
  { title: 'Imported Fire Ants', href: '/us/imported-fire-ants' },
  { title: 'Household Ants', href: '/us/ants' },
];
