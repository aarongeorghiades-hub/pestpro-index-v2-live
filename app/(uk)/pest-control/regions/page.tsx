import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AreaHead from '@/components/directory/AreaHead';
import { getAllRegions } from '../data/regions';
import { countsByRegion, withCount } from '@/lib/regionCounts';
import { formatCount } from '@/lib/formatCount';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Pest Control Directory by Region',
  description: 'Browse pest control providers across all UK regions. Currently covering Greater London and West Midlands with more regions launching soon. No lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/pest-control/regions',
  },
};

export default async function RegionsIndexPage() {
  const regions = getAllRegions();
  // Head-only counts, one per distinct city slug, issued in parallel.
  const regionCounts = await countsByRegion(regions);

  return (
    <div className="min-h-screen bg-[var(--color-stock)]">
      <Navigation />

      <AreaHead
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Regions' }]}
        tab="United Kingdom"
        title="Pest Control Across the UK"
        standfirst={<>PestPro Index lists local, independent pest controllers. Browse by region to find providers near you. National chains are not included.</>}
      />

      {/* Region index */}
      <section className="border-b border-[var(--color-rule-strong)]">
        <div className="dir-wrap py-14 md:py-20">
          <ul className="border-b border-[var(--color-rule-strong)]">
            {regions.map((region) => (
              <li key={region.slug} className="dir-entry grid gap-x-10 gap-y-2 py-6 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] md:items-baseline">
                <h2 className="dir-h2 text-[var(--color-ink)]">
                  <Link href={`/pest-control/${region.slug}`} className="dir-link">
                    {region.name}
                  </Link>
                </h2>
                <p className="max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">
                  {/* The description carries a {count} placeholder so the figure is
                      computed rather than hardcoded. It must be resolved here as
                      well as on the region page, or the literal token renders. */}
                  {withCount(region.description, regionCounts[region.slug])}
                </p>
                <p className="text-sm text-[var(--color-ink-mute)] md:text-right">
                  {region.status === 'live' && regionCounts[region.slug] !== null ? (
                    <>
                      <span className="dir-num font-bold text-[var(--color-ink)]">{formatCount(regionCounts[region.slug] as number)}</span> providers
                    </>
                  ) : region.status === 'coming-soon' ? (
                    'Coming soon'
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Provider CTA */}
      <section className="bg-[var(--color-paper)]">
        <div className="dir-wrap py-20 md:py-28">
          <h2 className="dir-h2 text-[var(--color-ink)]">
            Are you a pest control provider?
          </h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">
            Get listed on PestPro Index. No lead fees, no commissions, just honest directory listings. We&apos;re expanding across the UK.
          </p>
          <Link href="/contact" className="dir-btn dir-btn-ink mt-6">
            Get Listed
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
