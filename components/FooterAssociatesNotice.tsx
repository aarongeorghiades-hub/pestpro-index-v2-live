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
//
// S61 R2: THE SAME BUG RECURRED, ONE LEVEL DOWN. This component fixed the
// claim at the /us/-vs-UK boundary, but never asked whether an individual UK
// route actually carries an affiliate link either - it renders on all ~196
// UK routes unconditionally. /professionals and /resources both carried
// exactly one Amazon card (B09TZK7FYS, confirmed dead, removed this round)
// and now carry zero. Rendering "All links are Amazon affiliate links" on a
// page with none is the /us/opossums bug again, and on /resources it now
// directly contradicts that page's own disclosure paragraph, which correctly
// says it carries no affiliate links - two disclosures disagreeing on one
// page, the exact failure this file exists to prevent. Excluded by exact
// path below, the same way /us/ is excluded above. This is a two-route
// exclusion, not a general per-page link-count check: the other ~194 UK
// routes are unaffected and still receive this notice exactly as before.

import { usePathname } from 'next/navigation';

const NO_AFFILIATE_LINKS_ROUTES = new Set(['/professionals', '/resources']);

export default function FooterAssociatesNotice() {
  const pathname = usePathname();

  // Matches /us and every route beneath it. A null pathname is treated as
  // non-US, so the failure mode is showing the UK notice on a UK route rather
  // than silently dropping a disclosure that a UK page is required to carry.
  const isUsRoute = pathname === '/us' || (pathname?.startsWith('/us/') ?? false);
  const hasNoAffiliateLinks = pathname !== null && NO_AFFILIATE_LINKS_ROUTES.has(pathname);

  if (isUsRoute || hasNoAffiliateLinks) return null;

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
