import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AreaHead, { LocalOnlyNote } from '@/components/directory/AreaHead';
import { countForSlug } from '@/lib/regionCounts';
import { liverpoolBoroughs } from '@/app/(uk)/pest-control/liverpool/liverpool-boroughs';
import FeaturedHere from '@/components/listing/FeaturedHere';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Pest Control Liverpool | Find Local Experts',
  description:
    'Find pest control companies in Liverpool. Browse residential and commercial services across all Liverpool districts including Wirral, Sefton, Knowsley and more.',
  alternates: {
    canonical: 'https://pestproindex.com/liverpool',
  },
  openGraph: {
    title: 'Pest Control Liverpool | Find Local Experts',
    description:
      'Find pest control companies in Liverpool. Browse residential and commercial services across all Liverpool districts.',
    url: 'https://pestproindex.com/liverpool',
    siteName: 'PestPro Index',
    type: 'website',
  },
};

export default async function LiverpoolHubPage() {
  const providerCount = (await countForSlug('liverpool')) ?? 0;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does pest control cost in Liverpool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pest control costs in Liverpool typically range from £80-£150 for a standard residential treatment such as mice or rats. Wasp nest removal usually costs £50-£80. Commercial pest control contracts vary depending on the size of premises and frequency of visits. Prices in Liverpool tend to be lower than London but comparable to other Northern cities. Always get at least two quotes and check what is included in the price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Liverpool pest controllers BPCA certified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many Liverpool pest control providers hold BPCA (British Pest Control Association) certification, which is a recognised industry standard. BPCA members must meet strict technical competence requirements, carry appropriate insurance, and follow a code of conduct. You can filter providers by BPCA certification on our residential and commercial directory pages to find accredited companies in the Liverpool area.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can I get a pest controller in Liverpool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Liverpool pest control companies offer same-day or next-day service for urgent issues such as wasp nests, rat infestations, or bed bugs. Several providers operate 24/7 emergency call-out services. For routine treatments and surveys, you can usually book within 2-3 working days. Response times may be faster in central Liverpool and slower in outlying areas across Merseyside.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--color-stock)]">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AreaHead
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Liverpool' }]}
        tab="North West"
        title="Pest Control in Liverpool"
        standfirst={<>Independent pest controllers based in and around Liverpool &amp; Merseyside</>}
      >
        <p className="max-w-[60ch] text-base leading-relaxed text-[var(--color-ink-soft)]">
          Local firms for your home, and local firms for your business: shops, restaurants, offices, warehouses and landlords. No national chains, no commissions.
        </p>
        <p className="dir-num mt-4 text-base font-semibold text-[var(--color-ink)]">
          {providerCount} providers · {liverpoolBoroughs.length} districts covered · no referral fees
        </p>
      </AreaHead>

      <div className="dir-wrap pt-10 empty:hidden"><FeaturedHere /></div>

      {/* HOMES / BUSINESSES */}
      <section className="border-b border-[var(--color-rule-strong)]">
        <div className="dir-wrap py-14 md:py-20">
          <h2 className="dir-h2 text-[var(--color-ink)]">Browse by Service Type</h2>
          <div className="mt-4 space-y-3">
            <LocalOnlyNote>We only list independent, local pest controllers who serve this area. National chains are not included, so this isn’t every firm that covers Liverpool, just the local ones.</LocalOnlyNote>
            <p className="max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">
              Whether you need help at home or protection for your business, find the right provider for your needs.
            </p>
          </div>

          <div className="dir-rise mt-10 grid border-t-2 border-[var(--color-ink)] md:grid-cols-2">
            <div className="border-b border-[var(--color-rule-strong)] py-8 md:border-b-0 md:border-r md:py-10 md:pr-10">
              <h3 className="dir-display text-[clamp(2.5rem,6vw,4rem)] text-[var(--color-ink)]">For homes</h3>
              <p className="mt-4 max-w-[48ch] leading-relaxed text-[var(--color-ink-soft)]">
                Find pest control providers for your home across Liverpool and Merseyside. Filter by pest type, service features, and compare ratings from real customers.
              </p>
              <Link href="/liverpool/residential" className="dir-btn dir-btn-ink mt-6">
                Browse Residential Providers
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="py-8 md:py-10 md:pl-10">
              <h3 className="dir-display text-[clamp(2.5rem,6vw,4rem)] text-[var(--color-ink)]">For businesses</h3>
              <p className="mt-4 max-w-[48ch] leading-relaxed text-[var(--color-ink-soft)]">
                Compare certified commercial pest control providers with advanced filtering by certifications, capabilities, and business sectors.
              </p>
              <Link href="/liverpool/commercial" className="dir-btn dir-btn-ink mt-6">
                Browse Commercial Providers
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AREA INDEX, A TO Z */}
      <section className="border-b border-[var(--color-rule-strong)]">
        <div className="dir-wrap py-14 md:py-20">
          <h2 className="dir-h2 text-[var(--color-ink)]">Browse by District</h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">
            Find pest control providers in your area of Liverpool. Select your district to see local providers and area-specific pest information.
          </p>

          <ul className="mt-8 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
            {[...liverpoolBoroughs]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((borough) => (
                <li key={borough.slug} className="break-inside-avoid border-t border-[var(--color-rule)]">
                  <Link
                    href={`/pest-control/liverpool/${borough.slug}`}
                    className="dir-link flex items-baseline justify-between gap-4 py-3 font-semibold"
                  >
                    <span>{borough.name}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* COMMON PESTS */}
      <section className="border-b border-[var(--color-rule-strong)]">
        <div className="dir-wrap grid gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="dir-h2 text-[var(--color-ink)]">Common Pests in Liverpool</h2>
            <p className="mt-4 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">
              Liverpool&apos;s position as a major port city means rats are a persistent issue, particularly near the docks and waterfront. Mice thrive in the city&apos;s older terraced housing, while cockroaches and pigeons are common in the busy city centre. Wasps are a significant summer pest across suburban Merseyside.
            </p>
          </div>
          <ul className="columns-2 gap-x-8 self-start border-t border-[var(--color-ink)] sm:columns-3">
            {[
              { label: 'Rats', slug: 'rats' },
              { label: 'Mice', slug: 'mice' },
              { label: 'Wasps', slug: 'wasps' },
              { label: 'Cockroaches', slug: 'cockroaches' },
              { label: 'Bed Bugs', slug: 'bed-bugs' },
              { label: 'Ants', slug: 'ants' },
              { label: 'Moths', slug: 'moths' },
              { label: 'Fleas', slug: 'fleas' },
              { label: 'Squirrels', slug: 'squirrels' },
              { label: 'Silverfish', slug: 'silverfish' },
            ].map((pest) => (
              <li key={pest.slug} className="break-inside-avoid border-b border-[var(--color-rule)]">
                <Link href={`/pest/${pest.slug}`} className="dir-link block py-2.5 font-semibold">
                  {pest.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CROSS-CITY LINKS */}
      <section className="bg-[var(--color-paper)]">
        <div className="dir-wrap py-12">
          <h2 className="text-xl font-bold text-[var(--color-ink)]">Pest Control in Other Cities</h2>
          <p className="mt-2 text-[var(--color-ink-soft)]">Also compare pest control providers in:</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/manchester/residential" className="dir-link font-semibold">Manchester</Link>
            </li>
            <li>
              <Link href="/leeds/residential" className="dir-link font-semibold">Leeds</Link>
            </li>
            <li>
              <Link href="/sheffield/residential" className="dir-link font-semibold">Sheffield</Link>
            </li>
            <li>
              <Link href="/birmingham/residential" className="dir-link font-semibold">Birmingham</Link>
            </li>
            <li>
              <Link href="/glasgow/residential" className="dir-link font-semibold">Glasgow</Link>
            </li>
            <li>
              <Link href="/residential" className="dir-link font-semibold">London</Link>
            </li>
            <li>
              <Link href="/edinburgh/residential" className="dir-link font-semibold">Edinburgh</Link>
            </li>
            <li>
              <Link href="/leicester/residential" className="dir-link font-semibold">Leicester</Link>
            </li>
            <li>
              <Link href="/hampshire/residential" className="dir-link font-semibold">Hampshire</Link>
            </li>
            <li>
              <Link href="/coventry/residential" className="dir-link font-semibold">Coventry</Link>
            </li>
            <li>
              <Link href="/belfast/residential" className="dir-link font-semibold">Belfast</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
