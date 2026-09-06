import type { Metadata } from 'next';

// /get-help's METADATA LIVES HERE BECAUSE THE PAGE CANNOT CARRY IT — S65 R2.
//
// app/(uk)/get-help/page.tsx is a 'use client' component, and a client component
// cannot export `metadata`. So /get-help carried NONE and fell back to the root
// layout's `title.default` and `description`. Measured at S64 R8: /blog,
// /get-help and /_not-found all served that identical pair. S64 R9 fixed /blog
// and /_not-found now serves its own, which left /get-help as the LAST route on
// the estate serving both root defaults — measured at S65 R1 by sweeping all 240
// built documents, exactly one hit.
//
// A LAYOUT IS THE FIX RATHER THAN A SERVER WRAPPER, exactly as R9 did for /blog:
// it returns children untouched and changes no rendered markup.
//
// WHAT THIS PAGE ACTUALLY IS. A council tax band enquiry form — postcode lookup,
// address, contact details and a reason, written to Supabase. It is not pest
// control content and its metadata does not pretend otherwise. PM ruling, S65 R2:
// the page STAYS REACHABLE at its URL, because an external funnel may link to it
// with query parameters. Where it ultimately lives is a later decision; its body
// is not moved, deleted or rewritten by that ruling.
//
// NO `template` IS DECLARED HERE, AND THAT IS DELIBERATE. R9's regression on
// /blog came from a nested layout becoming the nearest title configuration for a
// subtree that had descendants. /get-help HAS NO DESCENDANT ROUTES — it is a
// single leaf page — so there is no subtree for a template to govern and none is
// needed. The root template applies to the plain string below, which is why no
// brand suffix is written into it; writing one would render it twice.
//
// NO `alternates.canonical` EITHER. Measured before writing: /get-help served no
// canonical, and neither does its UK sibling /useful-links. A noindex page does
// not need one, and adding a head tag its neighbours do not carry is a change
// this ruling did not ask for.
export const metadata: Metadata = {
  title: 'Council Tax Band Enquiry Form',
  description:
    'Submit your property details to have its council tax band checked, including postcode, address and the reason you believe the band may be wrong.',
  // noindex, follow. The page is removed from Google's view; its outbound links
  // are still followed. It is de-listed from the sitemap in the SAME commit
  // (app/(uk)/sitemap.ts, DENY_PATHS) — a page advertised in the sitemap while
  // asking not to be indexed puts two of our own signals in contradiction.
  robots: { index: false, follow: true },
};

export default function GetHelpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
