// The single site-wide footer. Before this component existed, thirteen files
// each carried their own inline <footer> and 170 of the 185 sampled routes had
// none at all - so /best, /guides and /pest-library had no always-present link
// anywhere in server HTML, and a crawler that does not run JavaScript could
// only reach them through the sitemap.
//
// This is a SUPERSET of all thirteen: every one of the 93 distinct hrefs found
// across them appears here, plus /pest-library, which was the only one of the
// three hubs absent from that union. Nothing was dropped for being rare or
// present in only one file.
//
// SERVER COMPONENT ON PURPOSE. No 'use client', no state, no conditional
// rendering, no interaction - none of the thirteen footers contained any, so
// nothing is lost by making this static, and being static is the entire point:
// the markup ships in the initial HTML on every route.
//
// Styling is taken from app/(home)/HomeClient.tsx, which was the most complete
// of the thirteen at 89 links. It paints its own dark ground (--color-ink, S72 pilot), so
// it renders identically regardless of the page background above it.
import Link from 'next/link';
import FooterAssociatesNotice from './FooterAssociatesNotice';
import { ukCardCarryingRoutes } from '@/lib/ukCardRoutes';

// S64 R3: THIS SERVER COMPONENT MEASURES WHICH ROUTES CARRY A CARD. The notice
// below is a client component because deciding which route it is on needs the
// pathname; the measurement needs the filesystem, which only a server component
// can read. Neither can do both, so the set is computed here and crosses that
// seam as a prop. It replaces a two-entry exclusion list that had fallen 98
// routes behind the estate (Law 178).
export default function Footer() {
  const cardCarryingRoutes = ukCardCarryingRoutes();
  return (
    <footer className="bg-[var(--color-ink)] pb-10 pt-16 text-white/70 md:pt-20">
      <div className="dir-wrap">
        <div className="mb-14 flex flex-col gap-6 border-b border-white/15 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
          <h3 className="dir-display mb-4 text-[clamp(2.75rem,7vw,5rem)] text-white">PestPro Index</h3>
          <p className="max-w-[34ch] text-lg leading-snug text-white/80">Local, independent pest controllers near you. No national chains.</p>
          </div>
          <Link href="/professionals" className="dir-btn dir-btn-marigold self-start md:self-auto">
            List your firm
          </Link>
        </div>
        <div className="mb-12 grid gap-x-10 gap-y-2 md:grid-cols-3 md:gap-y-10 lg:grid-cols-5">
          <details className="footer-group border-b border-white/10 py-3 md:border-0 md:py-0">
            <summary className="mb-0 text-[0.9375rem] font-bold text-white md:mb-4">Browse</summary>
            <ul className="space-y-2.5 pb-3 pt-3 text-[0.9375rem] md:pt-0">
              <li><Link href="/pest-control/regions" className="underline-offset-4 transition-colors hover:text-white hover:underline">Find Pest Control</Link></li>
              <li><Link href="/pest-control" className="underline-offset-4 transition-colors hover:text-white hover:underline">By Borough</Link></li>
              <li><Link href="/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Residential Pest Control</Link></li>
              <li><Link href="/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Commercial Pest Control</Link></li>
              <li><Link href="/birmingham/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Birmingham Residential</Link></li>
              <li><Link href="/birmingham/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Birmingham Commercial</Link></li>
              <li><Link href="/manchester/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Manchester Residential</Link></li>
              <li><Link href="/manchester/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Manchester Commercial</Link></li>
              <li><Link href="/liverpool/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Liverpool Residential</Link></li>
              <li><Link href="/liverpool/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Liverpool Commercial</Link></li>
              <li><Link href="/leeds/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Leeds Residential</Link></li>
              <li><Link href="/leeds/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Leeds Commercial</Link></li>
              <li><Link href="/nottingham/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Nottingham Residential</Link></li>
              <li><Link href="/nottingham/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Nottingham Commercial</Link></li>
              <li><Link href="/brighton/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Brighton Residential</Link></li>
              <li><Link href="/brighton/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Brighton Commercial</Link></li>
              <li><Link href="/sheffield/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Sheffield Residential</Link></li>
              <li><Link href="/sheffield/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Sheffield Commercial</Link></li>
              <li><Link href="/bristol/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Bristol Residential</Link></li>
              <li><Link href="/bristol/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Bristol Commercial</Link></li>
              <li><Link href="/glasgow/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Glasgow Residential</Link></li>
              <li><Link href="/glasgow/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Glasgow Commercial</Link></li>
              <li><Link href="/bradford/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Bradford Residential</Link></li>
              <li><Link href="/bradford/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Bradford Commercial</Link></li>
              <li><Link href="/newcastle/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Newcastle Residential</Link></li>
              <li><Link href="/newcastle/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Newcastle Commercial</Link></li>
              <li><Link href="/cardiff/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Cardiff Residential</Link></li>
              <li><Link href="/cardiff/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Cardiff Commercial</Link></li>
              <li><Link href="/edinburgh/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Edinburgh Residential</Link></li>
              <li><Link href="/edinburgh/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Edinburgh Commercial</Link></li>
              <li><Link href="/leicester/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Leicester Residential</Link></li>
              <li><Link href="/leicester/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Leicester Commercial</Link></li>
              <li><Link href="/hampshire/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Hampshire Residential</Link></li>
              <li><Link href="/hampshire/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Hampshire Commercial</Link></li>
              <li><Link href="/coventry/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Coventry Residential</Link></li>
              <li><Link href="/coventry/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Coventry Commercial</Link></li>
              <li><Link href="/derby/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Derby Residential</Link></li>
              <li><Link href="/derby/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Derby Commercial</Link></li>
              <li><Link href="/belfast/residential" className="underline-offset-4 transition-colors hover:text-white hover:underline">Belfast Residential</Link></li>
              <li><Link href="/belfast/commercial" className="underline-offset-4 transition-colors hover:text-white hover:underline">Belfast Commercial</Link></li>
            </ul>
          </details>
          <details className="footer-group border-b border-white/10 py-3 md:border-0 md:py-0">
            <summary className="mb-0 text-[0.9375rem] font-bold text-white md:mb-4">Products</summary>
            <ul className="space-y-2.5 pb-3 pt-3 text-[0.9375rem] md:pt-0">
              <li><Link href="/products" className="underline-offset-4 transition-colors hover:text-white hover:underline">Home Products</Link></li>
              <li><Link href="/commercial-products" className="underline-offset-4 transition-colors hover:text-white hover:underline">Commercial Products</Link></li>
              <li><Link href="/best" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Pest Control Products</Link></li>
              <li><Link href="/best/rat-traps" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Rat Traps UK</Link></li>
              <li><Link href="/best/mouse-traps" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Mouse Traps UK</Link></li>
              <li><Link href="/best/rodent-proofing" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Rodent Proofing UK</Link></li>
              <li><Link href="/best/wasp-killers" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Wasp Killers UK</Link></li>
              <li><Link href="/best/bed-bug-treatments" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Bed Bug Treatments UK</Link></li>
              <li><Link href="/best/cockroach-killers" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Cockroach Killers UK</Link></li>
              <li><Link href="/best/flea-treatments" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Flea Treatments UK</Link></li>
              <li><Link href="/best/ant-killers" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Ant Killers UK</Link></li>
              <li><Link href="/best/squirrel-deterrents" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Squirrel Deterrents UK</Link></li>
              <li><Link href="/best/fox-deterrents" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Fox Deterrents UK</Link></li>
              <li><Link href="/best/silverfish-treatments" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Silverfish Treatments UK</Link></li>
              <li><Link href="/best/woodworm-treatments" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Woodworm Treatments UK</Link></li>
              <li><Link href="/best/carpet-beetle-treatments" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Carpet Beetle Treatments UK</Link></li>
              <li><Link href="/best/bird-deterrents" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Bird Deterrents UK</Link></li>
              <li><Link href="/best/moth-killers" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Moth Killers UK</Link></li>
              <li><Link href="/best/commercial-fly-killers" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Commercial Fly Killers</Link></li>
              <li><Link href="/best/commercial-rodent-bait-stations" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Commercial Bait Stations</Link></li>
              <li><Link href="/best/commercial-insect-monitors" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Commercial Insect Monitors</Link></li>
              <li><Link href="/best/commercial-bird-proofing" className="underline-offset-4 transition-colors hover:text-white hover:underline">Best Commercial Bird Proofing</Link></li>
            </ul>
          </details>
          <details className="footer-group border-b border-white/10 py-3 md:border-0 md:py-0">
            <summary className="mb-0 text-[0.9375rem] font-bold text-white md:mb-4">Resources</summary>
            <ul className="space-y-2.5 pb-3 pt-3 text-[0.9375rem] md:pt-0">
              <li><Link href="/guides" className="underline-offset-4 transition-colors hover:text-white hover:underline">Pest Control Guides &amp; Expert Advice</Link></li>
              <li><Link href="/pest-library" className="underline-offset-4 transition-colors hover:text-white hover:underline">Pest Library</Link></li>
              <li><Link href="/blog" className="underline-offset-4 transition-colors hover:text-white hover:underline">Blog</Link></li>
              <li><Link href="/frequently-asked-questions" className="underline-offset-4 transition-colors hover:text-white hover:underline">Pest Control FAQ</Link></li>
              <li><Link href="/resources" className="underline-offset-4 transition-colors hover:text-white hover:underline">Resources</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-rats" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Rats</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-mice" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Mice</Link></li>
              <li><Link href="/guides/wasp-nest-removal" className="underline-offset-4 transition-colors hover:text-white hover:underline">Wasp Nest Removal</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-bed-bugs" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Bed Bugs</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-cockroaches" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Cockroaches</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-fleas" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Fleas</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-ants" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Ants</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-squirrels" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Squirrels</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-foxes" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Foxes</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-silverfish" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Silverfish</Link></li>
              <li><Link href="/guides/woodworm-treatment" className="underline-offset-4 transition-colors hover:text-white hover:underline">Woodworm Treatment Guide</Link></li>
              <li><Link href="/guides/carpet-beetle-control" className="underline-offset-4 transition-colors hover:text-white hover:underline">Carpet Beetle Control Guide</Link></li>
              <li><Link href="/guides/pigeon-control" className="underline-offset-4 transition-colors hover:text-white hover:underline">Pigeon Control Guide</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-moths" className="underline-offset-4 transition-colors hover:text-white hover:underline">How to Get Rid of Moths</Link></li>
              <li><Link href="/guides/pest-control-costs" className="underline-offset-4 transition-colors hover:text-white hover:underline">Pest Control Costs UK</Link></li>
            </ul>
          </details>
          <details className="footer-group border-b border-white/10 py-3 md:border-0 md:py-0">
            <summary className="mb-0 text-[0.9375rem] font-bold text-white md:mb-4">For Professionals</summary>
            <ul className="space-y-2.5 pb-3 pt-3 text-[0.9375rem] md:pt-0">
              <li><Link href="/professionals" className="underline-offset-4 transition-colors hover:text-white hover:underline">For Pest Professionals</Link></li>
              <li><Link href="/guides/commercial-pest-control" className="underline-offset-4 transition-colors hover:text-white hover:underline">Commercial Pest Control</Link></li>
              <li><Link href="/guides/restaurant-pest-control" className="underline-offset-4 transition-colors hover:text-white hover:underline">Restaurant Pest Control</Link></li>
              <li><Link href="/guides/warehouse-pest-management" className="underline-offset-4 transition-colors hover:text-white hover:underline">Warehouse Pest Management</Link></li>
              <li><Link href="/guides/hotel-pest-control" className="underline-offset-4 transition-colors hover:text-white hover:underline">Hotel Pest Control</Link></li>
              <li><Link href="/guides/office-pest-control" className="underline-offset-4 transition-colors hover:text-white hover:underline">Office Pest Control</Link></li>
              <li><Link href="/guides/landlord-pest-control" className="underline-offset-4 transition-colors hover:text-white hover:underline">Landlord Pest Control</Link></li>
            </ul>
          </details>
          <details className="footer-group border-b border-white/10 py-3 md:border-0 md:py-0">
            <summary className="mb-0 text-[0.9375rem] font-bold text-white md:mb-4">Company</summary>
            <ul className="space-y-2.5 pb-3 pt-3 text-[0.9375rem] md:pt-0">
              <li><Link href="/" className="underline-offset-4 transition-colors hover:text-white hover:underline">Home</Link></li>
              <li><Link href="/about" className="underline-offset-4 transition-colors hover:text-white hover:underline">About</Link></li>
              <li><Link href="/contact" className="underline-offset-4 transition-colors hover:text-white hover:underline">Contact</Link></li>
            </ul>
          </details>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <h4 className="mb-3 text-[0.9375rem] font-bold text-white">Sister Sites</h4>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[0.9375rem]">
            <li><a href="https://taxbandcheck.co.uk" target="_blank" rel="noopener nofollow" className="underline-offset-4 transition-colors hover:text-white hover:underline">TaxBandCheck: Free Council Tax Band Checker</a></li>
            <li><a href="https://findakitchen.co.uk" target="_blank" rel="noopener nofollow" className="underline-offset-4 transition-colors hover:text-white hover:underline">FindAKitchen: Temporary Kitchen Hire UK</a></li>
            <li><a href="https://stampdutyback.co.uk" target="_blank" rel="noopener nofollow" className="underline-offset-4 transition-colors hover:text-white hover:underline">StampDutyBack: Stamp Duty Refund Calculator</a></li>
          </ul>
        </div>

        <div className="mt-8 grid gap-8 border-t border-white/15 pt-8 text-sm leading-relaxed md:grid-cols-3">
          <div>
            <h4 className="mb-2 font-bold text-white">Disclaimer</h4>
            <p>We do not judge outcomes, we display available evidence. No endorsements or guarantees.</p>
          </div>
          <div>
            <h4 className="mb-2 font-bold text-white">For Professionals</h4>
            <p>Grow your pest control business with PestPro Index. Get listed today.</p>
          </div>
          <div>
            <h4 className="mb-2 font-bold text-white">Products</h4>
            <FooterAssociatesNotice cardCarryingRoutes={cardCarryingRoutes} />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-8 text-sm md:flex-row md:flex-wrap md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy" className="underline-offset-4 transition-colors hover:text-white hover:underline">Privacy Notice</Link></li>
            <li><Link href="/cookies" className="underline-offset-4 transition-colors hover:text-white hover:underline">Cookie Policy</Link></li>
            <li><button type="button" data-cookie-preferences="" className="underline-offset-4 transition-colors hover:text-white hover:underline">Cookie preferences</button></li>
          </ul>
          <p className="mb-2">ENA Enterprises Ltd, company number 17257845, ICO registration ZC164333</p>
          <p>&copy; 2026 PestPro Index. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
