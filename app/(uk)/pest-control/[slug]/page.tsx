import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AreaHead from '@/components/directory/AreaHead';
import { getRegionBySlug, getAllRegions } from '../data/regions';
import { cityTarget, countForTarget, countsByRegion, withCount } from '@/lib/regionCounts';
import { formatCount } from '@/lib/formatCount';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const region = getRegionBySlug(slug);
  if (region) {
    // Region total from the same shared counter the page body uses.
    const regionTotal = (await countsByRegion([region]))[region.slug];
    return {
      title: withCount(region.metaTitle, regionTotal),
      description: withCount(region.metaDescription, regionTotal),
      alternates: {
        canonical: `https://pestproindex.com/pest-control/${slug}`,
      },
    };
  }

  return {
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    robots: { index: false, follow: false },
  };
}

export async function generateStaticParams() {
  return getAllRegions().map((region) => ({
    slug: region.slug,
  }));
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  
  // Check if it's a region first
  const region = getRegionBySlug(slug);

  // One head-only count per city entry, in parallel. Entries that point at no
  // directory ("Browse by Borough", coming-soon areas) resolve to no target and
  // render no number.
  const regionTotal = region ? (await countsByRegion([region]))[region.slug] : null;
  const cityCounts: Record<string, number | null> = Object.fromEntries(
    await Promise.all(
      (region?.cities ?? []).map(async (city) => {
        const target = cityTarget(city);
        return [city.slug, target ? await countForTarget(target) : null] as const;
      })
    )
  );
  if (region) {
    // Render region page
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://pestproindex.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Regions',
          'item': 'https://pestproindex.com/pest-control'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': region.name,
          'item': `https://pestproindex.com/pest-control/${slug}`
        }
      ]
    };

    return (
      <div className="min-h-screen bg-[var(--color-stock)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Navigation />

        <AreaHead
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Regions', href: '/pest-control/regions' },
            { label: region.name },
          ]}
          tab={region.status === 'coming-soon' ? `${region.name} · Coming soon` : region.name}
          title={<>Pest Control in {region.name}</>}
          standfirst={withCount(region.description, regionTotal)}
        />

        {/* Cities/Areas index */}
        <section className="border-b border-[var(--color-rule-strong)]">
          <div className="dir-wrap py-14 md:py-20">
            <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">
              {region.status === 'live' ? 'Browse by Area' : 'Planned Coverage'}
            </h2>

            <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {[...region.cities]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((city) => (
                  <li key={city.slug} className="border-t border-[var(--color-rule)] py-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-bold text-[var(--color-ink)]">{city.name}</h3>
                      {cityCounts[city.slug] !== undefined && cityCounts[city.slug] !== null ? (
                        <span className="dir-num text-sm text-[var(--color-ink-mute)]">
                          {formatCount(cityCounts[city.slug] as number)} providers
                        </span>
                      ) : city.status === 'coming-soon' ? (
                        <span className="text-sm text-[var(--color-ink-mute)]">Coming soon</span>
                      ) : null}
                    </div>
                    {(city.residentialLink || city.commercialLink || city.areasLink) && (
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem]">
                        {city.residentialLink && (
                          <Link href={city.residentialLink} className="dir-link font-semibold">
                            Browse Residential Providers
                          </Link>
                        )}
                        {city.commercialLink && (
                          <Link href={city.commercialLink} className="dir-link font-semibold">
                            Browse Commercial Providers
                          </Link>
                        )}
                        {city.areasLink && (
                          <Link href={city.areasLink} className="dir-link font-semibold">
                            Browse by Borough
                          </Link>
                        )}
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </section>

        {/* Provider CTA */}
        <section className="bg-[var(--color-paper)]">
          <div className="dir-wrap py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">
              {`Are you a pest control provider in ${region.name}?`}
            </h2>
            <p className="mt-4 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">
              {region.status === 'live'
                ? 'Contact us to get listed on PestPro Index. No lead fees, no commissions, just honest directory listings.'
                : `We're expanding to your area soon. Contact us to get listed when we launch. No lead fees, no commissions.`}
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

  // Unknown slug → real HTTP 404 (previously rendered a 200 "Page Not Found"
  // soft 404). Known city slugs are 301-redirected to /{city}/residential in
  // next.config.ts before they ever reach this route.
  notFound();
}
