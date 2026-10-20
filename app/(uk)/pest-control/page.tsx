import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AreaHead, { LocalOnlyNote } from '@/components/directory/AreaHead';
import { getAllBoroughs } from './borough-data';
import { Metadata } from 'next';
import { formatCount } from '@/lib/formatCount';
import { countForTarget } from '@/lib/regionCounts';

export async function generateMetadata(): Promise<Metadata> {
  // Both figures use the same filters as the pages they describe, so the
  // prose and the destination can never disagree: /residential lists
  // active + business_residential + london, /commercial lists active +
  // commercial + london. Note `commercial`, not `business_commercial` -
  // different columns, different totals.
  // Same postcode rule as the directory pages these sentences describe.
  const [residentialCount, commercialCount] = await Promise.all([
    countForTarget({ slug: 'london', kind: 'residential' }),
    countForTarget({ slug: 'london', kind: 'commercial' }),
  ])
  const boroughCount = getAllBoroughs().length
  const compare =
    residentialCount == null || commercialCount == null
      ? 'Compare residential and commercial providers'
      : `Compare ${formatCount(residentialCount)} residential and ${formatCount(commercialCount)} commercial providers`
  const description = `Find independent local pest controllers across all ${boroughCount} London boroughs, for homes and businesses. ${compare}. No national chains, no lead fees, no commissions.`

  return {
  title: 'Pest Control by London Borough',
  description: description,
  alternates: {
    canonical: 'https://pestproindex.com/pest-control',
  },
  openGraph: {
    title: 'Pest Control by London Borough',
    description: description,
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pest Control by London Borough',
    description: description,
  },
  };
}

export default function BoroughIndexPage() {
  const boroughs = getAllBoroughs();

  return (
    <div className="min-h-screen bg-[var(--color-stock)]">
      <Navigation />

      <AreaHead
        crumbs={[{ label: 'Home', href: '/' }, { label: 'London boroughs' }]}
        tab="Greater London"
        title="Pest Control by London Borough"
        standfirst={<>Independent local pest controllers in your London borough. No national chains.</>}
      />

      {/* Intro */}
      <section className="border-b border-[var(--color-rule-strong)]">
        <div className="dir-wrap space-y-3 py-10 md:py-12">
          <LocalOnlyNote>We only list independent, local pest controllers who serve this area. National chains are not included, so this isn’t every firm that covers London, just the local ones.</LocalOnlyNote>
          <p className="max-w-[68ch] text-lg leading-relaxed text-[var(--color-ink-soft)]">
            Find independent pest controllers based in your London borough, for homes and businesses. Select your area below to learn about local pest issues and connect with providers.
          </p>
        </div>
      </section>

      <div className="dir-wrap pt-10 empty:hidden" data-featured-slot />

      {/* Borough index, A to Z */}
      <section className="border-b border-[var(--color-rule-strong)]">
        <div className="dir-wrap py-14 md:py-20">
          <ul className="columns-1 gap-x-10 sm:columns-2 lg:columns-3">
            {[...boroughs]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((borough) => (
                <li key={borough.slug} className="break-inside-avoid border-t border-[var(--color-rule)]">
                  <Link
                    href={`/pest-control/${borough.slug}`}
                    className="dir-link flex items-baseline justify-between gap-4 py-3 font-semibold"
                  >
                    <span>{borough.name}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* Homes / businesses */}
      <section className="bg-[var(--color-paper)]">
        <div className="dir-wrap py-14 md:py-16">
          <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">Find a Pest Control Provider</h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">
            No lead fees. No commissions. Rankings can&apos;t be bought. Results are sorted by rating. Firms can pay for a clearly labelled Featured slot, never a higher rank.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/residential" className="dir-btn dir-btn-ink">
              Browse Residential Providers
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/commercial" className="dir-btn dir-btn-line">
              Browse Commercial Providers
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
