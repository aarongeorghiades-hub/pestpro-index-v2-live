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
// IT LINKS NOWHERE ELSE ON THE ESTATE. The pack sources no comparison between
// imported fire ants and any other pest the estate covers.

export const FIREANT_HOME = '/us';

export const FIREANT_NAV = [
  { title: 'Imported Fire Ants', href: '/us/imported-fire-ants' },
];
