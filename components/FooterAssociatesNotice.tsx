'use client';

// The UK Amazon Associates disclosure that used to sit inline in Footer.tsx.
//
// WHY IT MOVED OUT OF THE FOOTER. The two sentences it renders are UK-scoped:
// they describe product recommendations "across the UK" and claim a commission
// under the amazon.co.uk Associates tag. Every /us/ route rendered them too, and
// on those routes both halves are wrong. Two disclosures contradicting each
// other on one page is worse than either alone. /us/opossums carried the
// commission claim while rendering zero product links.
//
// WHY A CLIENT COMPONENT, AND WHAT THAT COSTS. Footer.tsx is a server component
// by explicit design and its own comment says so: "No 'use client', no state, no
// conditional rendering". A server component cannot read the pathname in the App
// Router, so scoping by route needs usePathname, which is a client hook. This
// file is therefore the smallest possible client boundary: it holds one hook and
// two paragraphs, it renders no interactive element, and Footer.tsx stays a
// server component. THE CHANGE DOES NARROW THAT STATED PRINCIPLE - there is now
// conditional rendering in the footer subtree, and that is deliberate rather
// than overlooked.
//
// WHAT THE PRINCIPLE WAS PROTECTING IS PRESERVED. The reason given for keeping
// the footer static was that "the markup ships in the initial HTML on every
// route", so a crawler that does not run JavaScript still sees it. Client
// components are still rendered on the server for the initial HTML, so on every
// route that keeps this notice the sentences remain in the served document
// exactly as before.
//
// THE ROUTE SET IS DERIVED AT BUILD TIME AND IS NOT MAINTAINED HERE — S64 R3.
//
// PM RULING, S64 R2, EXTENDED TO THIS ESTATE AT S64 R3: the statement is derived
// from whether the document ACTUALLY RENDERS a card. A document rendering none
// does not claim an affiliate relationship.
//
// WHAT WAS HERE BEFORE, AND WHY IT HAD TO GO. This file held
// NO_AFFILIATE_LINKS_ROUTES, an exact-path exclusion list holding exactly two
// entries, /professionals and /resources, added at S61 R2. The comment above it
// recorded the /us/opossums bug, recorded the SAME BUG RECURRING one level down,
// and then fixed it for two routes by naming them. MEASURED AT S64 R3: 100 UK
// DOCUMENTS RENDERED NO CARD AND STILL SAID "All links are Amazon affiliate
// links." The list named two of them. Each time the remedy was another entry
// rather than a measurement, so the defect came back bigger.
//
// The set now comes from `ukCardCarryingRoutes()` in lib/ukCardRoutes.ts,
// computed by the SERVER Footer from the route sources themselves and passed in
// as a prop. Adding or removing a card moves this notice on the next build with
// no file hand-edited anywhere. This mirrors exactly what S64 R2 did to
// app/us/components/UsFooterCommissionNotice.tsx.
//
// THE FAILURE MODE IS DELIBERATE AND IS THE SAFE ONE. A null pathname renders
// nothing. Silence on a page that carries links is a missing disclosure, which
// M33 gates; a claim on a page that carries none is the false statement this
// change exists to end.

import { usePathname } from 'next/navigation';

export default function FooterAssociatesNotice({
  cardCarryingRoutes,
}: {
  cardCarryingRoutes: string[];
}) {
  const pathname = usePathname();

  // Matches /us and every route beneath it. A null pathname is treated as US, so
  // the failure mode is silence rather than a claim.
  const isUsRoute = pathname === '/us' || (pathname?.startsWith('/us/') ?? true);
  const hasCards = pathname !== null && cardCarryingRoutes.includes(pathname);

  if (isUsRoute || !hasCards) return null;

  return (
    <>
      <p>
        Free product recommendations for pest control across the UK. All links are Amazon
        affiliate links.
      </p>
      <p className="mt-2">
        Amazon Associates: We earn commissions from qualifying purchases through Amazon Associates
        links
      </p>
    </>
  );
}
