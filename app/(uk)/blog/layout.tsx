import type { Metadata } from 'next';

// THE BLOG INDEX'S METADATA LIVES HERE BECAUSE THE PAGE CANNOT CARRY IT — S64 R9.
//
// app/(uk)/blog/page.tsx is a 'use client' component, and a client component
// cannot export `metadata`. So /blog carried NONE, and Next fell back to the root
// layout's `title.default` and `description` — the same pair the 404 page serves.
// Measured at S64 R8: /blog, /get-help and /_not-found all served the identical
// title "PestPro Index | Compare Pest Control Providers Across the UK" and the
// identical description. Two of those three are real, indexed pages.
//
// A LAYOUT IS THE FIX RATHER THAN A SERVER WRAPPER because it changes no rendered
// markup: it returns children untouched and exists only to declare metadata. The
// /blog/[slug] routes export their own metadata, which takes precedence over
// this, so post pages are unaffected — verified against the built output.
//
// The description states what the index IS and what it covers. It does not
// promise a conclusion, because an index page reaches none.
// THE TEMPLATE IS RE-DECLARED HERE, AND THAT IS NOT OPTIONAL — S64 R9.
//
// A first version of this file set `title` to a plain string. Next then treats
// THIS layout as the nearest title configuration for the whole /blog subtree, so
// the root layout's `template: '%s | PestPro Index'` STOPPED APPLYING to
// /blog/[slug] and every one of the 46 post pages lost its brand suffix.
// MEASURED, NOT REASONED: the S64 R8 baseline verifier reported 52 drifted
// documents against an expected 8, and named all 46 posts. Re-declaring the
// template restores them byte-for-byte, and `default` carries the suffix itself
// because a default is used as-is and is never passed through the template.
export const metadata: Metadata = {
  title: {
    // NO SUFFIX HERE: measured at S64 R9, the ROOT template DOES apply to a nested
    // layout's \`default\`, so including it rendered '... | PestPro Index | PestPro Index'.
    default: 'Pest Control Guides for UK Homes and Businesses',
    template: '%s | PestPro Index',
  },
  description:
    'Guides on identifying an infestation, what UK law requires of landlords and tenants, what treatment costs, and how to choose a pest control firm.',
  alternates: { canonical: 'https://pestproindex.com/blog' },
  // NO openGraph BLOCK HERE, DELIBERATELY, AND THE SECOND REGRESSION IS WHY.
  //
  // openGraph is INHERITED by every descendant segment. app/(uk)/blog/[slug]
  // declares only `title` and `description`, so an og block on this layout
  // overwrote og:title, og:description AND og:url on all 46 post pages with the
  // index's own — measured: /blog/bed-bugs-uk-on-the-rise served og:title
  // "Pest Control Guides for UK Homes and Businesses" and og:url
  // "https://pestproindex.com/blog".
  //
  // With no block here, Next derives og:title and og:description from each
  // page's OWN resolved title and description, which is exactly what every post
  // served before this file existed. The index gets correct og tags by the same
  // derivation. Adding og tags to /blog is not worth breaking 46 pages for.
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
