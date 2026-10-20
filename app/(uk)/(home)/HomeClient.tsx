import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { formatCount } from '@/lib/formatCount';

export interface RegionCount {
  slug: string;
  label: string;
  href: string;
  /** null when the count query failed — the row then renders without a figure. */
  count: number | null;
}

// Every guide and review the old homepage linked to, kept as a ruled index.
const guides: { href: string; kind: string; title: string }[] = [
  { href: '/guides/how-to-get-rid-of-rats', kind: 'Guide', title: 'How to Get Rid of Rats' },
  { href: '/guides/how-to-get-rid-of-mice', kind: 'Guide', title: 'How to Get Rid of Mice' },
  { href: '/best/rat-traps', kind: 'Product Review', title: 'Best Rat Traps UK 2026' },
  { href: '/best/mouse-traps', kind: 'Product Review', title: 'Best Mouse Traps UK 2026' },
  { href: '/guides/wasp-nest-removal', kind: 'Guide', title: 'Wasp Nest Removal' },
  { href: '/best/wasp-killers', kind: 'Product Review', title: 'Best Wasp Killers UK 2026' },
  { href: '/guides/how-to-get-rid-of-bed-bugs', kind: 'Guide', title: 'How to Get Rid of Bed Bugs' },
  { href: '/best/bed-bug-treatments', kind: 'Product Review', title: 'Best Bed Bug Treatments UK 2026' },
  { href: '/guides/how-to-get-rid-of-cockroaches', kind: 'Guide', title: 'How to Get Rid of Cockroaches' },
  { href: '/best/cockroach-killers', kind: 'Product Review', title: 'Best Cockroach Killers UK 2026' },
  { href: '/guides/how-to-get-rid-of-fleas', kind: 'Guide', title: 'How to Get Rid of Fleas' },
  { href: '/best/flea-treatments', kind: 'Product Review', title: 'Best Flea Treatments UK 2026' },
  { href: '/guides/how-to-get-rid-of-ants', kind: 'Guide', title: 'How to Get Rid of Ants' },
  { href: '/best/ant-killers', kind: 'Product Review', title: 'Best Ant Killers UK 2026' },
  { href: '/guides/how-to-get-rid-of-squirrels', kind: 'Guide', title: 'How to Get Rid of Squirrels' },
  { href: '/best/squirrel-deterrents', kind: 'Product Review', title: 'Best Squirrel Deterrents UK 2026' },
  { href: '/guides/how-to-get-rid-of-foxes', kind: 'Guide', title: 'How to Get Rid of Foxes' },
  { href: '/best/fox-deterrents', kind: 'Product Review', title: 'Best Fox Deterrents UK 2026' },
  { href: '/guides/how-to-get-rid-of-silverfish', kind: 'Guide', title: 'How to Get Rid of Silverfish' },
  { href: '/best/silverfish-treatments', kind: 'Product Review', title: 'Best Silverfish Treatments UK 2026' },
  { href: '/guides/woodworm-treatment', kind: 'Guide', title: 'Woodworm Treatment' },
  { href: '/best/woodworm-treatments', kind: 'Product Review', title: 'Best Woodworm Treatments UK 2026' },
  { href: '/guides/carpet-beetle-control', kind: 'Guide', title: 'Carpet Beetle Control' },
  { href: '/best/carpet-beetle-treatments', kind: 'Product Review', title: 'Best Carpet Beetle Treatments UK 2026' },
  { href: '/guides/pigeon-control', kind: 'Guide', title: 'Pigeon Control' },
  { href: '/best/bird-deterrents', kind: 'Product Review', title: 'Best Bird Deterrents UK 2026' },
  { href: '/guides/how-to-get-rid-of-moths', kind: 'Guide', title: 'How to Get Rid of Moths' },
  { href: '/best/moth-killers', kind: 'Product Review', title: 'Best Moth Killers UK 2026' },
  { href: '/guides/commercial-pest-control', kind: 'Commercial', title: 'Commercial Pest Control Hub' },
  { href: '/guides/restaurant-pest-control', kind: 'Commercial', title: 'Restaurant Pest Control' },
  { href: '/guides/warehouse-pest-management', kind: 'Commercial', title: 'Warehouse Pest Management' },
  { href: '/best/commercial-fly-killers', kind: 'Product Review', title: 'Best Commercial Fly Killers UK 2026' },
  { href: '/best/commercial-rodent-bait-stations', kind: 'Product Review', title: 'Best Commercial Bait Stations UK 2026' },
  { href: '/guides/hotel-pest-control', kind: 'Commercial', title: 'Hotel Pest Control' },
  { href: '/best/commercial-insect-monitors', kind: 'Product Review', title: 'Best Commercial Insect Monitors UK 2026' },
  { href: '/best/commercial-bird-proofing', kind: 'Product Review', title: 'Best Commercial Bird Proofing UK 2026' },
  { href: '/guides/office-pest-control', kind: 'Commercial', title: 'Office Pest Control' },
  { href: '/guides/landlord-pest-control', kind: 'Commercial', title: 'Landlord Pest Control' },
  { href: '/guides/pest-control-costs', kind: 'Price Guide', title: 'Pest Control Costs UK 2026' },
];

const citySpecialists: { href: string; label: string }[] = [
  { href: '/pest-control/london/rats', label: 'Rat Control London' },
  { href: '/pest-control/london/bed-bugs', label: 'Bed Bugs London' },
  { href: '/pest-control/birmingham/mice', label: 'Mouse Control Birmingham' },
  { href: '/pest-control/manchester/wasps', label: 'Wasp Removal Manchester' },
  { href: '/pest-control/glasgow/rats', label: 'Rat Control Glasgow' },
  { href: '/pest-control/leeds/cockroaches', label: 'Cockroach Control Leeds' },
  { href: '/pest-control/bristol/fleas', label: 'Flea Treatment Bristol' },
  { href: '/pest-control/edinburgh/pigeons', label: 'Pigeon Control Edinburgh' },
];

const GUIDE_GROUPS: { title: string; kinds: string[] }[] = [
  { title: 'Pest guides', kinds: ['Guide', 'Price Guide'] },
  { title: 'Product reviews', kinds: ['Product Review'] },
  { title: 'For businesses', kinds: ['Commercial'] },
];

// HOMEPAGE: a local directory's front page. The headline says what this is,
// the area index starts inside the first viewport, and homes and businesses
// each get their own way in. No animated counters: the counts are real and
// they sit in the sentence.
export default function Home({
  regionCounts,
  providerCount,
}: {
  regionCounts: RegionCount[];
  providerCount: number | null;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'PestPro Index',
    'url': 'https://pestproindex.com',
    'description': 'Find independent, local pest controllers near you, for domestic and commercial pest control. Only firms based in and serving your area. No national chains, no lead fees.',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://pestproindex.com/logo-header.png',
      'width': 530,
      'height': 174,
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '61 Bridge Street',
      'addressLocality': 'Kington',
      'postalCode': 'HR5 3DJ',
      'addressCountry': 'GB',
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'customer support',
      'email': 'pestproindex@zohomail.eu',
      'url': 'https://pestproindex.com/contact',
    },
    'areaServed': [
      { '@type': 'City', 'name': 'London' },
      { '@type': 'City', 'name': 'Birmingham' },
      { '@type': 'City', 'name': 'Manchester' },
      { '@type': 'City', 'name': 'Liverpool' },
      { '@type': 'City', 'name': 'Leeds' },
      { '@type': 'City', 'name': 'Nottingham' },
      { '@type': 'City', 'name': 'Brighton' },
      { '@type': 'City', 'name': 'Sheffield' },
      { '@type': 'City', 'name': 'Bristol' },
      { '@type': 'City', 'name': 'Glasgow' },
      { '@type': 'City', 'name': 'Bradford' },
      { '@type': 'City', 'name': 'Newcastle' },
      { '@type': 'City', 'name': 'Cardiff' },
      { '@type': 'City', 'name': 'Edinburgh' },
      { '@type': 'City', 'name': 'Leicester' },
      { '@type': 'City', 'name': 'Coventry' },
      { '@type': 'City', 'name': 'Belfast' },
      { '@type': 'City', 'name': 'Derby' },
      { '@type': 'AdministrativeArea', 'name': 'Hampshire' }
    ]
  };

  const areas = [...regionCounts].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="min-h-screen bg-[var(--color-stock)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navigation />

      {/* FIRST VIEWPORT */}
      <section className="border-b border-[var(--color-ink)]">
        <div className="dir-wrap grid gap-10 pb-12 pt-10 md:pb-16 md:pt-16 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <h1 className="dir-display text-[clamp(3.25rem,10.5vw,7.25rem)] text-[var(--color-ink)]">
              Pest control from{' '}
              <span className="home-mark relative inline-block">
                <span className="relative z-[1]">local</span>
              </span>{' '}
              people.
            </h1>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-xl">
              Find an independent pest controller based in your area, for your home or your business.
              No national chains, no call centres, no lead fees.
            </p>
            <p className="dir-num mt-4 max-w-[48ch] text-[0.9375rem] leading-relaxed text-[var(--color-ink-mute)]">
              {providerCount !== null ? <>{formatCount(providerCount)} local firms across {areas.length} areas. </> : null}
              Sorted by Google rating. Rankings can&apos;t be bought: a firm can pay for a Featured slot, and it&apos;s always labelled.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-[34rem]">
              <Link href="/residential" className="group flex items-center justify-between gap-4 rounded-[4px] bg-[var(--color-ink)] px-5 py-4 text-white transition-colors hover:bg-[#1f3a2f]">
                <span>
                  <span className="block text-[0.8125rem] text-white/70">For homes</span>
                  <span className="block text-lg font-bold leading-tight">Domestic pest control</span>
                </span>
                <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link href="/commercial" className="group flex items-center justify-between gap-4 rounded-[4px] border border-[var(--color-ink)] px-5 py-4 text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper)]">
                <span>
                  <span className="block text-[0.8125rem] text-[var(--color-ink-mute)]">For businesses</span>
                  <span className="block text-lg font-bold leading-tight">Commercial pest control</span>
                </span>
                <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* The area index: the directory's thumb-tab, opened. */}
          <div className="lg:pt-3">
            <h2 className="flex items-baseline justify-between border-b-2 border-[var(--color-ink)] pb-2 text-[0.9375rem] font-bold text-[var(--color-ink)]">
              <span>Choose your area</span>
              <span className="text-[0.8125rem] font-semibold text-[var(--color-ink-mute)]">Local firms</span>
            </h2>
            <ul className="sm:columns-2 sm:gap-8 lg:columns-1">
              {areas.map((area) => (
                <li key={area.slug} className="dir-entry break-inside-avoid">
                  <Link
                    href={area.href}
                    className="group flex items-baseline justify-between gap-4 py-[0.6rem] text-[var(--color-ink)]"
                  >
                    <span className="text-[1.0625rem] font-semibold group-hover:underline group-hover:underline-offset-4">{area.label}</span>
                    {area.count !== null && (
                      <span className="dir-num text-[0.9375rem] text-[var(--color-ink-mute)] group-hover:text-[var(--color-ink)]">{formatCount(area.count)}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/pest-control/regions" className="dir-link mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
              Browse all regions <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW THE LIST WORKS: the rules, set like the front matter of a directory. */}
      <section className="bg-[var(--color-paper)]">
        <div className="dir-wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <h2 className="dir-display dir-rise text-[clamp(2.25rem,5vw,3.75rem)] text-[var(--color-ink)]">How this directory works</h2>
          <dl className="border-t border-[var(--color-ink)]">
            {[
              ['Local firms only', 'Every firm listed is an independent pest controller based in, or serving, the area you pick. National chains are not included.'],
              ['Sorted by rating', 'Lists are ordered by Google rating. Top rated means 4.5 or higher from 30 or more reviews, worked out from Google data.'],
              ['Featured is paid, and labelled', 'A firm can pay for a Featured slot above the list. It is always marked, and it never changes the rating order.'],
              ['You call them directly', 'No booking fees, no lead fees, no commissions, no call centre in the middle. Pick a firm and ring it.'],
            ].map(([term, detail]) => (
              <div key={term} className="grid gap-2 border-b border-[var(--color-rule-strong)] py-6 md:grid-cols-[14rem_1fr] md:gap-8">
                <dt className="text-lg font-bold leading-snug text-[var(--color-ink)]">{term}</dt>
                <dd className="max-w-[56ch] leading-relaxed text-[var(--color-ink-soft)]">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WHY IT EXISTS */}
      <section className="border-y border-[var(--color-rule-strong)]">
        <div className="dir-wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <h2 className="dir-display dir-rise text-[clamp(2.25rem,5vw,3.75rem)] text-[var(--color-ink)]">
            Why we built it
          </h2>
          <div className="max-w-[62ch] space-y-5 text-[1.0625rem] leading-relaxed text-[var(--color-ink-soft)]">
            <p>
              You&apos;ve got mice in the kitchen or wasps in the eaves, so you search online and fill in a form on a
              comparison site. Then the phone starts ringing. Numbers you don&apos;t know, firms you&apos;ve never heard
              of, and one question you can&apos;t answer: is this the right firm, or the one that paid to be first?
            </p>
            <p className="text-[var(--color-ink)]">
              PestPro Index lists local, independent pest controllers near you. No national chains. No lead fees. No
              commissions. No pay-per-enquiry. Rankings can&apos;t be bought: results are sorted by rating, and a firm can
              pay for a clearly labelled Featured slot, never a higher rank.
            </p>
            <p>
              Ratings, certifications, service areas and specialisms come from what the firms state and from Google, laid
              out so you can make your own call. For homes and businesses alike.
            </p>
          </div>
        </div>
      </section>

      {/* DO IT YOURSELF */}
      <section>
        <div className="dir-wrap py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <h2 className="dir-display dir-rise text-[clamp(2.25rem,5vw,3.75rem)] text-[var(--color-ink)]">Sort it yourself</h2>
              <p className="mt-4 max-w-[36ch] leading-relaxed text-[var(--color-ink-soft)]">
                Guides, product reviews and costs for when a small problem doesn&apos;t need a call-out yet.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products" className="dir-btn dir-btn-line">Home products</Link>
                <Link href="/commercial-products" className="dir-btn dir-btn-line">Commercial products</Link>
              </div>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
              {GUIDE_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className="border-b-2 border-[var(--color-ink)] pb-2 text-[0.9375rem] font-bold text-[var(--color-ink)]">{group.title}</h3>
                  <ul>
                    {guides.filter((g) => group.kinds.includes(g.kind)).map((g) => (
                      <li key={g.href} className="border-b border-[var(--color-rule)]">
                        <Link href={g.href} className="block py-2.5 text-[0.9375rem] leading-snug text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] hover:underline hover:underline-offset-4">
                          {g.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALISTS BY CITY + CLOSE */}
      <section className="bg-[var(--color-ink)] text-white">
        <div className="dir-wrap py-16 md:py-24">
          <h2 className="dir-display max-w-[16ch] text-[clamp(2.5rem,6.5vw,5rem)]">Find a local firm today.</h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-white/75">
            Browse providers across the UK. No sign-up, no forms. Pick your area and call a firm directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/pest-control/regions" className="dir-btn dir-btn-marigold">Browse all regions</Link>
            <Link href="/professionals" className="dir-btn border border-white/30 text-white hover:border-white">
              Run a pest control firm?
            </Link>
          </div>
          <div className="mt-14 border-t border-white/20 pt-6">
            <h3 className="text-[0.9375rem] font-bold">Pest specialists by city</h3>
            <ul className="mt-3 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
              {citySpecialists.map((c) => (
                <li key={c.href} className="border-b border-white/10">
                  <Link href={c.href} className="group flex items-center justify-between gap-3 py-3 text-white/80 hover:text-white">
                    {c.label}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
