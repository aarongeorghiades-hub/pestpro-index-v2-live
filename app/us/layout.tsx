import Link from 'next/link';
import UsFooterCommissionNotice from './components/UsFooterCommissionNotice';
import { cardCarryingSlugs } from './lib/cardIndex';

// THE /us ESTATE'S CHROME.
//
// S47 R9. Until this round /us inherited the UK AnnouncementBar and the UK
// Footer from app/layout.tsx. Both now live in app/(uk)/layout.tsx and reach
// only UK routes. This is what /us gets in their place.
//
// ON THE TWO POLICY LINKS: /privacy and /cookies both exist and both return 200,
// but they moved into app/(uk) with the rest of the estate, so a reader who
// follows them lands on a page wearing UK chrome. That is accepted by ruling —
// a privacy policy and a cookie policy are site-wide documents and a reader is
// entitled to reach them from any page. It is recorded here so that nobody later
// mistakes it for an oversight.
//
// UsPageLayout renders its own footer inside the article shell. This is the
// layout-level one, so it stays minimal: identity, the policy links, the
// commercial disclosure the estate owes a reader, and a copyright line.
//
// S60 R1: the commercial disclosure line moved into UsFooterCommissionNotice,
// a route-aware client component, because it is no longer one fixed sentence.
// The US Amazon Associates tag went live this round; the sentence that used to
// sit here unconditionally ("We earn nothing...") is now true on routes with
// no product card and false on those that carry one. See that file for why.
//
// S64 R2: WHICH ROUTES THOSE ARE IS MEASURED HERE, NOT REMEMBERED THERE. This is
// a server component, so it can read the route sources; the notice is a client
// component, so it can read the pathname; neither can do both. The set is
// therefore computed here at build time and passed across that seam as a prop.
// It replaces a hand-maintained list of 31 slugs that had fallen ten routes
// behind the estate, leaving ten live pages serving affiliate links under a
// footer saying the site earns nothing (Law 178 — a list maintained by hand is
// not a measurement).
export default function UsLayout({ children }: { children: React.ReactNode }) {
  const cardCarryingRoutes = [...cardCarryingSlugs()].sort();
  return (
    <>
      {children}
      <footer className="bg-[#0f172a] text-blue-200 border-t border-blue-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <p className="m-0 flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/us" className="font-bold text-white hover:underline">
              PestPro Index US
            </Link>
            <Link href="/privacy" className="hover:text-white hover:underline">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-white hover:underline">
              Cookies
            </Link>
          </p>
          <UsFooterCommissionNotice cardCarryingRoutes={cardCarryingRoutes} />
          <p className="m-0 mt-2">&copy; 2026 PestPro Index</p>
        </div>
      </footer>
    </>
  );
}
