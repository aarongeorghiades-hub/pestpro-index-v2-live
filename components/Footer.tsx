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
// of the thirteen at 89 links. It paints its own dark ground (bg-gray-900), so
// it renders identically regardless of the page background above it.
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-white text-xl font-bold mb-2">PestPro Index</h3>
          <p>The UK&apos;s neutral pest control directory</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">
          <details className="footer-group">
            <summary className="text-white font-bold mb-4">Browse</summary>
            <ul className="space-y-2">
              <li><Link href="/pest-control/regions" className="hover:text-white transition">Find Pest Control</Link></li>
              <li><Link href="/pest-control" className="hover:text-white transition">By Borough</Link></li>
              <li><Link href="/residential" className="hover:text-white transition">Residential Pest Control</Link></li>
              <li><Link href="/commercial" className="hover:text-white transition">Commercial Pest Control</Link></li>
              <li><Link href="/birmingham/residential" className="hover:text-white transition">Birmingham Residential</Link></li>
              <li><Link href="/birmingham/commercial" className="hover:text-white transition">Birmingham Commercial</Link></li>
              <li><Link href="/manchester/residential" className="hover:text-white transition">Manchester Residential</Link></li>
              <li><Link href="/manchester/commercial" className="hover:text-white transition">Manchester Commercial</Link></li>
              <li><Link href="/liverpool/residential" className="hover:text-white transition">Liverpool Residential</Link></li>
              <li><Link href="/liverpool/commercial" className="hover:text-white transition">Liverpool Commercial</Link></li>
              <li><Link href="/leeds/residential" className="hover:text-white transition">Leeds Residential</Link></li>
              <li><Link href="/leeds/commercial" className="hover:text-white transition">Leeds Commercial</Link></li>
              <li><Link href="/nottingham/residential" className="hover:text-white transition">Nottingham Residential</Link></li>
              <li><Link href="/nottingham/commercial" className="hover:text-white transition">Nottingham Commercial</Link></li>
              <li><Link href="/brighton/residential" className="hover:text-white transition">Brighton Residential</Link></li>
              <li><Link href="/brighton/commercial" className="hover:text-white transition">Brighton Commercial</Link></li>
              <li><Link href="/sheffield/residential" className="hover:text-white transition">Sheffield Residential</Link></li>
              <li><Link href="/sheffield/commercial" className="hover:text-white transition">Sheffield Commercial</Link></li>
              <li><Link href="/bristol/residential" className="hover:text-white transition">Bristol Residential</Link></li>
              <li><Link href="/bristol/commercial" className="hover:text-white transition">Bristol Commercial</Link></li>
              <li><Link href="/glasgow/residential" className="hover:text-white transition">Glasgow Residential</Link></li>
              <li><Link href="/glasgow/commercial" className="hover:text-white transition">Glasgow Commercial</Link></li>
              <li><Link href="/bradford/residential" className="hover:text-white transition">Bradford Residential</Link></li>
              <li><Link href="/bradford/commercial" className="hover:text-white transition">Bradford Commercial</Link></li>
              <li><Link href="/newcastle/residential" className="hover:text-white transition">Newcastle Residential</Link></li>
              <li><Link href="/newcastle/commercial" className="hover:text-white transition">Newcastle Commercial</Link></li>
              <li><Link href="/cardiff/residential" className="hover:text-white transition">Cardiff Residential</Link></li>
              <li><Link href="/cardiff/commercial" className="hover:text-white transition">Cardiff Commercial</Link></li>
              <li><Link href="/edinburgh/residential" className="hover:text-white transition">Edinburgh Residential</Link></li>
              <li><Link href="/edinburgh/commercial" className="hover:text-white transition">Edinburgh Commercial</Link></li>
              <li><Link href="/leicester/residential" className="hover:text-white transition">Leicester Residential</Link></li>
              <li><Link href="/leicester/commercial" className="hover:text-white transition">Leicester Commercial</Link></li>
              <li><Link href="/hampshire/residential" className="hover:text-white transition">Hampshire Residential</Link></li>
              <li><Link href="/hampshire/commercial" className="hover:text-white transition">Hampshire Commercial</Link></li>
              <li><Link href="/coventry/residential" className="hover:text-white transition">Coventry Residential</Link></li>
              <li><Link href="/coventry/commercial" className="hover:text-white transition">Coventry Commercial</Link></li>
              <li><Link href="/derby/residential" className="hover:text-white transition">Derby Residential</Link></li>
              <li><Link href="/derby/commercial" className="hover:text-white transition">Derby Commercial</Link></li>
              <li><Link href="/belfast/residential" className="hover:text-white transition">Belfast Residential</Link></li>
              <li><Link href="/belfast/commercial" className="hover:text-white transition">Belfast Commercial</Link></li>
            </ul>
          </details>
          <details className="footer-group">
            <summary className="text-white font-bold mb-4">Products</summary>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-white transition">Home Products</Link></li>
              <li><Link href="/commercial-products" className="hover:text-white transition">Commercial Products</Link></li>
              <li><Link href="/best" className="hover:text-white transition">Best Pest Control Products</Link></li>
              <li><Link href="/best/rat-traps" className="hover:text-white transition">Best Rat Traps UK</Link></li>
              <li><Link href="/best/mouse-traps" className="hover:text-white transition">Best Mouse Traps UK</Link></li>
              <li><Link href="/best/rodent-proofing" className="hover:text-white transition">Best Rodent Proofing UK</Link></li>
              <li><Link href="/best/wasp-killers" className="hover:text-white transition">Best Wasp Killers UK</Link></li>
              <li><Link href="/best/bed-bug-treatments" className="hover:text-white transition">Best Bed Bug Treatments UK</Link></li>
              <li><Link href="/best/cockroach-killers" className="hover:text-white transition">Best Cockroach Killers UK</Link></li>
              <li><Link href="/best/flea-treatments" className="hover:text-white transition">Best Flea Treatments UK</Link></li>
              <li><Link href="/best/ant-killers" className="hover:text-white transition">Best Ant Killers UK</Link></li>
              <li><Link href="/best/squirrel-deterrents" className="hover:text-white transition">Best Squirrel Deterrents UK</Link></li>
              <li><Link href="/best/fox-deterrents" className="hover:text-white transition">Best Fox Deterrents UK</Link></li>
              <li><Link href="/best/silverfish-treatments" className="hover:text-white transition">Best Silverfish Treatments UK</Link></li>
              <li><Link href="/best/woodworm-treatments" className="hover:text-white transition">Best Woodworm Treatments UK</Link></li>
              <li><Link href="/best/carpet-beetle-treatments" className="hover:text-white transition">Best Carpet Beetle Treatments UK</Link></li>
              <li><Link href="/best/bird-deterrents" className="hover:text-white transition">Best Bird Deterrents UK</Link></li>
              <li><Link href="/best/moth-killers" className="hover:text-white transition">Best Moth Killers UK</Link></li>
              <li><Link href="/best/commercial-fly-killers" className="hover:text-white transition">Best Commercial Fly Killers</Link></li>
              <li><Link href="/best/commercial-rodent-bait-stations" className="hover:text-white transition">Best Commercial Bait Stations</Link></li>
              <li><Link href="/best/commercial-insect-monitors" className="hover:text-white transition">Best Commercial Insect Monitors</Link></li>
              <li><Link href="/best/commercial-bird-proofing" className="hover:text-white transition">Best Commercial Bird Proofing</Link></li>
            </ul>
          </details>
          <details className="footer-group">
            <summary className="text-white font-bold mb-4">Resources</summary>
            <ul className="space-y-2">
              <li><Link href="/guides" className="hover:text-white transition">Pest Control Guides &amp; Expert Advice</Link></li>
              <li><Link href="/pest-library" className="hover:text-white transition">Pest Library</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/frequently-asked-questions" className="hover:text-white transition">Pest Control FAQ</Link></li>
              <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-rats" className="hover:text-white transition">How to Get Rid of Rats</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-mice" className="hover:text-white transition">How to Get Rid of Mice</Link></li>
              <li><Link href="/guides/wasp-nest-removal" className="hover:text-white transition">Wasp Nest Removal</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-bed-bugs" className="hover:text-white transition">How to Get Rid of Bed Bugs</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-cockroaches" className="hover:text-white transition">How to Get Rid of Cockroaches</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-fleas" className="hover:text-white transition">How to Get Rid of Fleas</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-ants" className="hover:text-white transition">How to Get Rid of Ants</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-squirrels" className="hover:text-white transition">How to Get Rid of Squirrels</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-foxes" className="hover:text-white transition">How to Get Rid of Foxes</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-silverfish" className="hover:text-white transition">How to Get Rid of Silverfish</Link></li>
              <li><Link href="/guides/woodworm-treatment" className="hover:text-white transition">Woodworm Treatment Guide</Link></li>
              <li><Link href="/guides/carpet-beetle-control" className="hover:text-white transition">Carpet Beetle Control Guide</Link></li>
              <li><Link href="/guides/pigeon-control" className="hover:text-white transition">Pigeon Control Guide</Link></li>
              <li><Link href="/guides/how-to-get-rid-of-moths" className="hover:text-white transition">How to Get Rid of Moths</Link></li>
              <li><Link href="/guides/pest-control-costs" className="hover:text-white transition">Pest Control Costs UK</Link></li>
            </ul>
          </details>
          <details className="footer-group">
            <summary className="text-white font-bold mb-4">For Professionals</summary>
            <ul className="space-y-2">
              <li><Link href="/professionals" className="hover:text-white transition">For Pest Professionals</Link></li>
              <li><Link href="/guides/commercial-pest-control" className="hover:text-white transition">Commercial Pest Control</Link></li>
              <li><Link href="/guides/restaurant-pest-control" className="hover:text-white transition">Restaurant Pest Control</Link></li>
              <li><Link href="/guides/warehouse-pest-management" className="hover:text-white transition">Warehouse Pest Management</Link></li>
              <li><Link href="/guides/hotel-pest-control" className="hover:text-white transition">Hotel Pest Control</Link></li>
              <li><Link href="/guides/office-pest-control" className="hover:text-white transition">Office Pest Control</Link></li>
              <li><Link href="/guides/landlord-pest-control" className="hover:text-white transition">Landlord Pest Control</Link></li>
            </ul>
          </details>
          <details className="footer-group">
            <summary className="text-white font-bold mb-4">Company</summary>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </details>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <h4 className="text-white font-bold mb-4 text-center">Sister Sites</h4>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <li><a href="https://taxbandcheck.co.uk" target="_blank" rel="noopener nofollow" className="hover:text-white transition">TaxBandCheck &mdash; Free Council Tax Band Checker</a></li>
            <li><a href="https://findakitchen.co.uk" target="_blank" rel="noopener nofollow" className="hover:text-white transition">FindAKitchen &mdash; Temporary Kitchen Hire UK</a></li>
            <li><a href="https://stampdutyback.co.uk" target="_blank" rel="noopener nofollow" className="hover:text-white transition">StampDutyBack &mdash; Stamp Duty Refund Calculator</a></li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-white font-bold mb-2">Disclaimer</h4>
            <p>We do not judge outcomes, we display available evidence. No endorsements or guarantees.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">For Professionals</h4>
            <p>Grow your pest control business with PestPro Index. Get listed today.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Products</h4>
            <p>Free product recommendations for pest control across the UK. All links are Amazon affiliate links.</p>
            <p className="mt-2">Amazon Associates: We earn commissions from qualifying purchases through Amazon Associates links</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Notice</Link></li>
            <li><Link href="/cookies" className="hover:text-white transition">Cookie Policy</Link></li>
            <li><button type="button" data-cookie-preferences="" className="hover:text-white transition">Cookie preferences</button></li>
          </ul>
          <p className="mb-2">ENA Enterprises Ltd · Company number 17257845 · ICO registration ZC164333</p>
          <p>&copy; 2026 PestPro Index. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
