'use client';

// The UK Amazon Associates disclosure that used to sit inline in Footer.tsx.
//
// WHY IT MOVED OUT OF THE FOOTER. The two sentences it renders are UK-scoped:
// they describe product recommendations "across the UK" and claim a commission
// under the amazon.co.uk Associates tag. Every /us/ route rendered them too, and
// on those routes both halves are wrong. The links on the US product pages are
// untagged amazon.com URLs earning nothing, and UsToolCard says so on the same
// page in its own words - "The link below is not a paid affiliate link. PestPro
// Index earns nothing if you buy this tool". Two disclosures contradicting each
// other on one page is worse than either alone, and the card is the accurate one.
// /us/opossums carried the commission claim while rendering zero product links.
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
// non-/us/ route these two sentences remain in the served document exactly as
// before. That is asserted here and is verified against the built output.

import { usePathname } from 'next/navigation';

export default function FooterAssociatesNotice() {
  const pathname = usePathname();

  // Matches /us and every route beneath it. A null pathname is treated as
  // non-US, so the failure mode is showing the UK notice on a UK route rather
  // than silently dropping a disclosure that a UK page is required to carry.
  const isUsRoute = pathname === '/us' || (pathname?.startsWith('/us/') ?? false);

  if (isUsRoute) return null;

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
