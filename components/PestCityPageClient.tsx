'use client';

import { externalHref } from '@/lib/externalUrl';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Phone, ShoppingCart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ListingSchema from '@/components/ListingSchema';
import CityAreaLinks from '@/components/CityAreaLinks';
import AreaHead from '@/components/directory/AreaHead';
import FirmEntry from '@/components/directory/FirmEntry';
import { FirmList, FirmListItem, FirmListEmpty } from '@/components/directory/FirmList';
import ProductCard from '@/components/ProductCard';
import { topProductsByPest } from '@/data/pest-products';
import { cityDirectoryHref } from '@/lib/seo';
import { LOCATIONS, PESTS } from '@/app/(uk)/pest-control/pest-city-config';
import type { LocationConfig, PestConfig } from '@/app/(uk)/pest-control/pest-city-config';

export interface Provider {
  canonical_id?: number;
  name: string;
  slug: string;
  website: string | null;
  phone: string | null;
  address: string | null;
  postcode: string | null;
  google_rating: number | null;
  google_review_count: number | null;
  business_residential: boolean;
  service_eco_friendly: boolean;
  service_emergency_24_7: boolean;
  service_bpca_certified: boolean;
}

interface Props {
  city: LocationConfig;
  pest: PestConfig;
  // Providers are fetched server-side by the route and passed in, so the full
  // list is in the initial HTML. This component renders them and owns only
  // search / sort / mobile UI — it does NOT fetch.
  initialProviders: Provider[];
  initialIsFallback?: boolean;
  // The city's borough / sub-area pages, for the "Areas we cover" interlinking
  // block. Optional — omitted renders nothing.
  areas?: { name: string; slug: string }[];
}

// Provider-stated service facts only, shown as small tags on each entry.
function serviceTags(provider: Provider): string[] {
  const tags: string[] = [];
  if (provider.service_bpca_certified) tags.push('BPCA certified');
  if (provider.service_emergency_24_7) tags.push('24/7 emergency');
  if (provider.service_eco_friendly) tags.push('Eco-friendly');
  return tags;
}

export default function PestCityPageClient({ city, pest, initialProviders, initialIsFallback, areas }: Props) {
  const providers = initialProviders;
  const isFallback = initialIsFallback ?? false;

  const introText = pest.seoIntro.replace(/\{city\}/g, city.name);
  const otherPests = PESTS.filter(p => p.slug !== pest.slug);
  const otherCities = LOCATIONS.filter(l => l.slug !== city.slug);

  return (
    <div className="min-h-screen bg-[var(--color-stock)]">
      <Navigation />

      <ListingSchema
        providers={providers}
        listName={`${pest.name} Control Providers in ${city.name}`}
        listUrl={`/pest-control/${city.slug}/${pest.slug}`}
        areaName={city.name}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Pest Control', url: '/pest-control' },
          { name: city.name, url: cityDirectoryHref(city.slug) },
          { name: `${pest.name} Control`, url: `/pest-control/${city.slug}/${pest.slug}` },
        ]}
      />

      <AreaHead
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pest Control', href: '/pest-control' },
          { label: city.name, href: cityDirectoryHref(city.slug) },
          { label: `${pest.name} Control` },
        ]}
        tab={city.name}
        title={<>{pest.name} Control in {city.name}</>}
        standfirst={<>Find {pest.name} Specialists</>}
      >
        <p className="text-[0.9375rem] font-semibold text-[var(--color-ink)]">
          No lead fees · No commissions · Free to contact
        </p>
      </AreaHead>

      {/* SEO CONTENT */}
      <section className="bg-[var(--color-stock)]">
        <div className="dir-wrap py-14 md:py-16">
          <p className="max-w-[68ch] text-lg leading-relaxed text-[var(--color-ink-soft)]">{introText}</p>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="border-t border-[var(--color-rule-strong)] pt-6">
              <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">Signs of {pest.namePlural}</h2>
              <p className="mt-4 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">{pest.signs}</p>
            </div>
            <div className="border-t border-[var(--color-rule-strong)] pt-6">
              <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">Health &amp; Property Risks</h2>
              <p className="mt-4 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">{pest.risks}</p>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--color-rule-strong)] pt-6">
            <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">Typical Cost of {pest.name} Control in {city.name}</h2>
            <p className="mt-4 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">{pest.typicalCost}</p>
          </div>
        </div>
      </section>

      {/* TOP DIY PRODUCTS: reuses the rank 1-3 products from the matching /best page.
          Keys off pest.slug only, so it renders correctly on fallback pest pages too. */}
      {(topProductsByPest[pest.slug]?.length ?? 0) > 0 && (
        <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper)]">
          <div className="dir-wrap py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">
              Top DIY {pest.name} Products
            </h2>
            <p className="mb-8 mt-3 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">
              Our top-rated picks for treating {pest.namePlural.toLowerCase()} yourself
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {topProductsByPest[pest.slug].map((product, i) => (
                <ProductCard
                  key={product.asin}
                  name={product.name}
                  features={product.features}
                  asin={product.asin}
                  bestFor={product.bestFor}
                  rank={i + 1}
                />
              ))}
            </div>
            <div className="mt-8">
              <Link href={pest.reviewUrl} className="dir-link inline-flex items-center gap-1.5 font-semibold">
                See all {pest.name} products
                <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* PROVIDERS */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-stock)]">
        <div className="dir-wrap py-14 md:py-16">
          <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">
            {pest.name} Control Providers in {city.name}
          </h2>
          {isFallback ? (
            <div className="mb-6 mt-3 max-w-[68ch]">
              <p className="text-sm text-[var(--color-ink-mute)]">
                Showing all {providers.length} residential pest control providers in {city.name}
              </p>
              <p className="mt-4 rounded-[4px] border border-[var(--color-rule)] bg-[var(--color-paper)] p-4 text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
                We haven&apos;t yet confirmed which {city.name} providers specialise in {pest.namePlural.toLowerCase()}, but all of the providers below serve {city.name} and can help with most pest issues. Contact them directly to discuss your {pest.namePlural.toLowerCase()} problem.
              </p>
            </div>
          ) : (
            <p className="mb-6 mt-3 text-sm text-[var(--color-ink-mute)]">
              {providers.length} {pest.description} serving {city.name}, sorted by rating
            </p>
          )}

          {providers.length === 0 ? (
            <FirmListEmpty>
              No providers found for this area. Please try again later.{' '}
              <Link href={`/pest-control/${city.slug}`} className="dir-link font-semibold">
                View all {city.name} providers
              </Link>
            </FirmListEmpty>
          ) : (
            <>
              <div data-featured-slot />
              <FirmList>
                {providers.map((provider) => (
                  <FirmListItem key={provider.canonical_id ?? provider.slug}>
                    <FirmEntry
                      name={provider.name}
                      slug={provider.slug}
                      postcode={provider.postcode}
                      rating={provider.google_rating}
                      reviewCount={provider.google_review_count}
                      phone={provider.phone}
                      websiteHref={provider.website ? externalHref(provider.website) : null}
                      tags={serviceTags(provider)}
                    />
                  </FirmListItem>
                ))}
              </FirmList>
            </>
          )}
        </div>
      </section>

      {/* WHAT TO DO */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-stock)]">
        <div className="dir-wrap py-14 md:py-16">
          <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">What to Do If You Have {pest.namePlural}</h2>
          <ul className="mt-6 max-w-[68ch] border-b border-[var(--color-rule)]">
            <li className="flex items-start gap-3 border-t border-[var(--color-rule)] py-4">
              <BookOpen aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-ink-mute)]" strokeWidth={2} />
              <p className="text-[var(--color-ink-soft)]">
                Read our complete guide:{' '}
                <Link href={pest.guideUrl} className="dir-link font-semibold">
                  How to Get Rid of {pest.namePlural}
                </Link>
              </p>
            </li>
            <li className="flex items-start gap-3 border-t border-[var(--color-rule)] py-4">
              <ShoppingCart aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-ink-mute)]" strokeWidth={2} />
              <p className="text-[var(--color-ink-soft)]">
                See our top-rated products:{' '}
                <Link href={pest.reviewUrl} className="dir-link font-semibold">
                  Best {pest.name} Products UK 2026
                </Link>
              </p>
            </li>
            <li className="flex items-start gap-3 border-t border-[var(--color-rule)] py-4">
              <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-ink-mute)]" strokeWidth={2} />
              <p className="text-[var(--color-ink-soft)]">
                Contact a provider above for a quote. All listings on PestPro Index are free to contact with no lead fees.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper)]">
        <div className="dir-wrap py-12">
          {/* Other pest services in this city */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-[var(--color-ink)]">Other Pest Control Services in {city.name}</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
              {otherPests.map(p => (
                <li key={p.slug}>
                  <Link href={`/pest-control/${city.slug}/${p.slug}`} className="dir-link font-semibold">
                    {p.name} Control
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Same pest in other cities */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-[var(--color-ink)]">{pest.name} Control in Other Cities</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
              {otherCities.map(l => (
                <li key={l.slug}>
                  <Link href={`/pest-control/${l.slug}/${pest.slug}`} className="dir-link font-semibold">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to city hub */}
          <div className="border-t border-[var(--color-rule-strong)] pt-6">
            <Link href={cityDirectoryHref(city.slug)} className="dir-link inline-flex items-center gap-1.5 font-semibold">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              Back to {city.name} Pest Control Directory
            </Link>
          </div>
        </div>
      </section>

      <CityAreaLinks citySlug={city.slug} cityName={city.name} areas={areas ?? []} />
    </div>
  );
}
