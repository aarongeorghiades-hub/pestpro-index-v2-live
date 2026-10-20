'use client';

import type { ReactNode } from 'react';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { externalHref } from '@/lib/externalUrl';
import Navigation from '@/components/Navigation';
import CityPestLinks from '@/components/CityPestLinks';
import AlsoCovering from '@/components/listing/AlsoCovering';
import AreaHead, { LocalOnlyNote } from '@/components/directory/AreaHead';
import FirmEntry from '@/components/directory/FirmEntry';
import { FirmList, FirmListItem, FirmListEmpty } from '@/components/directory/FirmList';
import { cityDirectoryHref } from '@/lib/seo';
import type { SheffieldBoroughData } from '../sheffield-boroughs';

interface Provider {
  canonical_id?: number;
  name: string;  slug: string;
  website: string | null;
  phone: string | null;
  address: string | null;
  postcode: string | null;
  google_rating: number | null;
  google_review_count: number | null;
  business_residential: boolean;
  pest_mice: boolean;
  pest_rats: boolean;
  pest_bed_bugs: boolean;
  pest_wasps: boolean;
  pest_cockroaches: boolean;
  service_eco_friendly: boolean;
  service_emergency_24_7: boolean;
  service_bpca_certified: boolean;
}

// Provider-stated service facts only, shown as small tags on each entry.
function serviceTags(provider: Provider): string[] {
  const tags: string[] = [];
  if (provider.service_emergency_24_7) tags.push('24/7 emergency');
  if (provider.service_bpca_certified) tags.push('BPCA certified');
  if (provider.service_eco_friendly) tags.push('Eco-friendly');
  return tags;
}

export default function SheffieldBoroughClient({ featured, borough, initialProviders, alsoCovering = [] }: { featured?: ReactNode; borough: SheffieldBoroughData; initialProviders: Provider[]; alsoCovering?: { canonical_id?: number; name: string; slug: string; postcode: string | null; phone: string | null; website: string | null; google_rating: number | null; google_review_count: number | null; baseLabel: string }[] }) {
  // Providers are fetched server-side and passed in as a prop so the full list
  // is present in the initial HTML.
  const providers = initialProviders;

  return (
    <div className="min-h-screen bg-[var(--color-stock)]">
      <Navigation />

      <AreaHead
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pest Control', href: '/pest-control' },
          { label: 'Sheffield', href: cityDirectoryHref('sheffield') },
          { label: borough.name },
        ]}
        tab="Sheffield & South Yorkshire"
        title={<>Pest Control in {borough.name}</>}
        standfirst={
          <>
            <span className="dir-num">{providers.length}</span> {providers.length === 1 ? 'firm' : 'firms'} based in {borough.name}
            {alsoCovering.length > 0 && (
              <>
                {' · '}
                <span className="dir-num">{alsoCovering.length}</span> {alsoCovering.length === 1 ? 'firm' : 'firms'} also covering {borough.name}
              </>
            )}
          </>
        }
      >
        <p className="text-base font-semibold text-[var(--color-ink)]">
          Independent local firms · No national chains · No lead fees · No commissions
        </p>
      </AreaHead>

      {/* PROVIDERS */}
      <section className="bg-[var(--color-stock)]">
        <div className="dir-wrap pb-14 pt-8 md:pb-16 md:pt-10">
          <h2 className="dir-h2 text-[var(--color-ink)]">
            Pest Control Providers Serving {borough.name}
          </h2>
          <div className="mt-4">
            <LocalOnlyNote>We only list independent, local pest controllers who serve this area. National chains are not included, so this isn’t every firm that covers {borough.name}, just the local ones.</LocalOnlyNote>
          </div>
          <p className="mb-6 mt-3 text-sm text-[var(--color-ink-mute)]">
            Firms with a postcode in {borough.name}, sorted by rating
          </p>

          {featured}
          {providers.length === 0 ? (
            <FirmListEmpty>No firm with a postcode in this area is listed yet.</FirmListEmpty>
          ) : (
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
          )}
          <AlsoCovering firms={alsoCovering} placeName={borough.name} />
        </div>
      </section>

      {/* INTRO & COMMON PESTS */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-stock)]">
        <div className="dir-wrap grid gap-10 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
          <p className="max-w-[68ch] text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {borough.intro}
          </p>
          <div className="border-t border-[var(--color-rule-strong)] pt-6">
            <h2 className="dir-h2 text-[var(--color-ink)]">Common Pests in {borough.name}</h2>
            <p className="mt-4 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">{borough.commonPests}</p>
          </div>
        </div>
      </section>

      {/* BACK LINK & CROSS-LINKING */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper)]">
        <div className="dir-wrap py-8">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-base">
            <li>
              <Link href="/sheffield/residential" className="dir-link inline-flex items-center gap-1.5 font-semibold">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
                Back to Sheffield Residential
              </Link>
            </li>
            <li>
              <Link href="/sheffield/commercial" className="dir-link font-semibold">
                Sheffield Commercial
              </Link>
            </li>
            <li>
              <Link href="/pest-control/yorkshire-and-the-humber" className="dir-link font-semibold">
                Yorkshire &amp; the Humber Region
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CityPestLinks citySlug="sheffield" cityName="Sheffield" />
    </div>
  );
}
