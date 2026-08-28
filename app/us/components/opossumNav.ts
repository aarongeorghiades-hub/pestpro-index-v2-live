// The header nav for the opossum cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COMMENT CORRECTED, S47 R4: what stood here said the layout DEFAULTED both props
// to the Joro cluster, and that omitting them rendered a Joro wordmark and a
// four-item Joro nav silently. That was true until S47 R3 made the props required
// and deleted those defaults. Omission is now a compile error, not a silent wrong
// render. Nothing in this module's values changed in this round.
//
// CORRECTED, S54 R2. What stood here said there was nothing to build a second page
// on and that no second entry was listed. The first half remains true and is kept
// below; the second half is now false and is replaced. A FLEAS ENTRY IS LISTED.
//
// NO SECOND OPOSSUM PAGE EXISTS, AND THAT PART IS UNCHANGED. The S37 R4 source pack
// looked for an opossum product category and did not find one: every trap figure in
// the pack comes from a single publication that addresses raccoons and opossums
// jointly, and no source describes any trap feature as opossum-specific.
//
// THE FLEAS LINK IS A DIFFERENT KIND OF ENTRY. This page records that Texas A&M
// states opossums carry murine typhus and can transmit it to people and pets, and
// that both raccoons and opossums harbor parasites such as fleas and ticks. It gave
// the reader nowhere to follow that. /us/fleas exists, so the link is written, and
// all three modules in this cross-link changed in one pass.
//
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.
//
// It still contains no link to the skunk, armadillo, gopher, Joro or overwintering
// clusters: different animal, different reader. Fleas is the exception because this
// page's own text sends the reader there.

export const OPOSSUM_HOME = '/us';

export const OPOSSUM_NAV = [
  { title: 'Opossums', href: '/us/opossums' },
  { title: 'Fleas', href: '/us/fleas' },
];
