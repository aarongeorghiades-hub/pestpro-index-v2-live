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
  // S77: THE UK FOOTER'S LOOK, US CONTENT ONLY. The bottle-green band, the
  // Caslon display name, the white/70 type and the hairline-ruled rows are the
  // UK footer's (components/Footer.tsx). Its ~90 UK links, UK sister sites and
  // UK Amazon notice are NOT here (Law 130). What the two old US footers said is
  // all still said, once: the identity line and research sentence that
  // UsPageLayout used to print in a second dark band, the policy links, and the
  // derived earnings statement.
  //
  // UsFooterCommissionNotice IS UNTOUCHED, MARKUP INCLUDED. M33 matches its
  // paragraph by exact element and class (scripts/fixtures.mjs US_FOOTER_AFFIRM /
  // US_FOOTER_DENY). It inherits its colour from the wrapper below rather than
  // being restyled, so the gate keeps reading the element it was built for.
  const link = 'underline-offset-4 transition-colors hover:text-white hover:underline';
  return (
    <>
      {children}
      <footer className="bg-[var(--color-forest)] pb-12 pt-16 text-white/70 md:pt-24">
        <div className="dir-wrap">
          <div className="mb-10 flex flex-col gap-6 border-b border-white/15 pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="dir-display m-0 mb-4 text-[clamp(2.5rem,6vw,4.25rem)] text-white">
                PestPro Index US
              </p>
              <p className="m-0 max-w-[52ch] text-lg leading-snug text-white/80">
                Independent, research-based information on pests in the United States. We are
                not a pest control company and we do not sell pest control services.
              </p>
            </div>
            <Link href="/us" className="dir-btn self-start bg-white text-[var(--color-ink)] hover:bg-[var(--color-paper)] md:self-auto">
              All pest guides
            </Link>
          </div>

          <div className="text-sm leading-relaxed">
            <p className="m-0 font-bold text-white">About product links</p>
            <UsFooterCommissionNotice cardCarryingRoutes={cardCarryingRoutes} />
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-8 text-sm md:flex-row md:flex-wrap md:items-center md:justify-between">
            <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
              <li><Link href="/privacy" className={link}>Privacy Notice</Link></li>
              <li><Link href="/cookies" className={link}>Cookie Policy</Link></li>
              <li><button type="button" data-cookie-preferences="" className={link}>Cookie preferences</button></li>
            </ul>
            <p className="m-0">&copy; 2026 PestPro Index</p>
          </div>
        </div>
      </footer>
    </>
  );
}
