'use client';
import { useState, useMemo, type ReactNode } from 'react';
import { PESTS } from '@/lib/pests';
import { externalHref } from '@/lib/externalUrl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import Navigation from '@/components/Navigation';
import AreaHead, { LocalOnlyNote } from '@/components/directory/AreaHead';
import FirmEntry from '@/components/directory/FirmEntry';
import { FirmList, FirmListItem, FirmListEmpty } from '@/components/directory/FirmList';

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

const getQualityScore = (provider: any): number => {
  let score = 0;
  const pestFields = ['pest_mice', 'pest_rats', 'pest_bed_bugs', 'pest_wasps', 'pest_cockroaches'];
  pestFields.forEach(field => { if (provider[field] === true) score++; });
  const serviceFields = ['service_eco_friendly', 'service_emergency_24_7', 'service_bpca_certified'];
  serviceFields.forEach(field => { if (provider[field] === true) score++; });
  return score;
};

// ============================================================================
// INTERFACES
// ============================================================================

export interface Provider {
  canonical_id?: number;
  name: string;  slug: string;
  website: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  postcode: string | null;
  google_rating: number | null;
  google_review_count: number | null;
  business_residential: boolean;
  is_featured?: boolean;

  // 20 pest type filters
  pest_rats: boolean;
  pest_mice: boolean;
  pest_squirrels: boolean;
  pest_foxes: boolean;
  pest_moles: boolean;
  pest_wasps: boolean;
  pest_bees: boolean;
  pest_ants: boolean;
  pest_cockroaches: boolean;
  pest_bed_bugs: boolean;
  pest_fleas: boolean;
  pest_moths: boolean;
  pest_flies: boolean;
  pest_beetles: boolean;
  pest_spiders: boolean;
  pest_silverfish: boolean;
  pest_ladybirds: boolean;
  pest_pigeons: boolean;
  pest_seagulls: boolean;
  pest_birds: boolean;

  // 7 service feature filters
  service_eco_friendly: boolean;
  service_emergency_24_7: boolean;
  service_proofing: boolean;
  service_bpca_certified: boolean;
  service_guarantee: boolean;
  service_free_survey: boolean;
  service_weekend: boolean;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ResidentialDirectoryClient({ featured, initialProviders }: { featured?: ReactNode; initialProviders: Provider[] }) {
  const providers = initialProviders;
  const loading = false;
  const [filters, setFilters] = useState({ pests: [] as string[], services: [] as string[] });
  const [sortBy, setSortBy] = useState('quality');
  const [searchResults, setSearchResults] = useState<Provider[] | null>(null);
  const pathname = usePathname();


  // ============================================================================
  // FILTER AND SORT LOGIC
  // ============================================================================

  const filteredProvidersMemo = useMemo(() => {
    if (providers.length === 0) return [];

    // Start with search results if available, otherwise use all providers
    let filtered = searchResults !== null ? searchResults : providers;

    if (filters.pests.length > 0) {
      filtered = filtered.filter(p =>
        filters.pests.some(pest => p[pest as keyof Provider] === true)
      );
    }

    if (filters.services.length > 0) {
      filtered = filtered.filter(p =>
        filters.services.some(service => p[service as keyof Provider] === true)
      );
    }

    // Apply sort
    if (sortBy === 'quality') {
      filtered.sort((a, b) => {
        const ratingA = a.google_rating || 0;
        const ratingB = b.google_rating || 0;
        if (ratingB !== ratingA) return ratingB - ratingA;
        return (b.google_review_count || 0) - (a.google_review_count || 0);
      });
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    }

    return filtered;
  }, [providers, filters, sortBy, searchResults])

  // ============================================================================
  // FILTER HANDLERS
  // ============================================================================

  const handleFilterChange = (type: 'pests' | 'services', value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const clearFilters = () => {
    setFilters({ pests: [], services: [] });
  };

  const handleSearch = (results: any[], searchType: 'postcode' | 'provider' | 'all') => {
    setSearchResults(results as Provider[]);
  };

  const handleClearSearch = () => {
    setSearchResults(null);
  };

  const getFilterCount = (filterValue: string) => {
    return providers.filter(p => p[filterValue as keyof Provider] === true).length;
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  // Filter options come from lib/pests.ts — the same canonical list the badges
  // and the generated descriptions read, so a filter can never offer a pest the
  // provider's own page does not show. The _general columns are deliberately
  // absent: they hold stale import data we do not display.
  // A filter offering fewer than three providers is a dead end: the visitor
  // clicks it and lands on a near-empty list. Hide those, but never hide the
  // lot - if the threshold would strip every filter, show them all rather
  // than leave the page with no way to narrow anything.
  const PEST_FILTER_MIN = 3;
  const visiblePestFilters = PESTS.filter(pest => getFilterCount(pest.column) >= PEST_FILTER_MIN);
  const pestFilters = (visiblePestFilters.length > 0 ? visiblePestFilters : PESTS).map(
    pest => ({ value: pest.column, label: pest.label })
  );

  const serviceFilters = [
    { value: 'service_eco_friendly', label: 'Eco-Friendly' },
    { value: 'service_emergency_24_7', label: 'Emergency 24/7' },
    { value: 'service_proofing', label: 'Proofing' },
    { value: 'service_bpca_certified', label: 'BPCA Certified' },
    { value: 'service_guarantee', label: 'Guarantee' },
    { value: 'service_free_survey', label: 'Free Survey' },
    { value: 'service_weekend', label: 'Weekend Service' },
  ];

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/professionals', label: 'For Pest Professionals' },
    { href: '/products', label: 'Home Products' },
    { href: '/commercial-products', label: 'Commercial Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-stock)]">
      <Navigation />

      <AreaHead
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pest Control', href: '/pest-control' },
          { label: 'Derby' },
        ]}
        tab="Derby"
        title={<>Residential Pest Control Services in Derby</>}
        standfirst={
          <>
            <span className="dir-num font-semibold text-[var(--color-ink)]">{providers.length} Providers in Derby &amp; Derbyshire</span>.{' '}
            Filter by pest type and service features across our complete directory.
          </>
        }
      >
        <p className="text-base font-semibold text-[var(--color-ink)]">No endorsements · No commissions · Transparent, provider-stated information</p>
      </AreaHead>

      {/* FULL PROVIDER LIST */}
      <section className="bg-[var(--color-stock)] pb-20 pt-10 md:pb-28 md:pt-12">
        <div className="dir-wrap">
          <div className="mb-8 max-w-[68ch]">
            <h2 className="dir-h2 text-[var(--color-ink)]">
              Full List of Derby &amp; Derbyshire Pest Control Providers
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--color-ink-soft)]">
              All {providers.length} residential providers with advanced filtering
            </p>
            <div className="mt-4">
              <LocalOnlyNote>We only list independent, local pest controllers. National chains are not included.</LocalOnlyNote>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="mb-8">
            <SearchBar
              onSearch={handleSearch}
              allProviders={providers as any}
              onClear={handleClearSearch}
            />
          </div>

          <div className="flex flex-col gap-10 lg:flex-row">

            {/* FILTER SIDEBAR */}
            <aside className="w-full lg:w-72 lg:flex-shrink-0">
              <div className="border-t border-[var(--color-ink)] pt-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">

                {/* Filter Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">Filters</h3>
                  {(filters.pests.length > 0 || filters.services.length > 0) && (
                    <button
                      onClick={clearFilters}
                      className="dir-link text-sm font-semibold"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Results Count */}
                <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
                  <span className="dir-num text-2xl font-bold text-[var(--color-ink)]">{filteredProvidersMemo.length}</span>{' '}
                  Providers Found
                </p>

                {/* Pest Type Filters */}
                <fieldset className="mt-6 border-t border-[var(--color-rule)] pt-4">
                  <legend className="float-left mb-3 w-full text-sm font-bold text-[var(--color-ink)]">
                    Pest Type
                  </legend>
                  <div className="clear-left space-y-0.5">
                    {pestFilters.map(filter => (
                      <label key={filter.value} className="flex cursor-pointer items-center gap-3 rounded-[3px] px-1 py-1.5 hover:bg-[var(--color-paper)]">
                        <input
                          type="checkbox"
                          checked={filters.pests.includes(filter.value)}
                          onChange={() => handleFilterChange('pests', filter.value)}
                          className="h-4 w-4 rounded-[4px] border-[var(--color-rule-strong)] bg-white accent-[var(--color-ink)]"
                        />
                        <span className="flex-1 text-sm text-[var(--color-ink-soft)]">{filter.label}</span>
                        <span className="dir-num text-xs text-[var(--color-ink-mute)]">
                          {getFilterCount(filter.value)}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Service Feature Filters */}
                <fieldset className="mt-6 border-t border-[var(--color-rule)] pt-4">
                  <legend className="float-left mb-3 w-full text-sm font-bold text-[var(--color-ink)]">
                    Service Features
                  </legend>
                  <div className="clear-left space-y-0.5">
                    {serviceFilters.map(filter => (
                      <label key={filter.value} className="flex cursor-pointer items-center gap-3 rounded-[3px] px-1 py-1.5 hover:bg-[var(--color-paper)]">
                        <input
                          type="checkbox"
                          checked={filters.services.includes(filter.value)}
                          onChange={() => handleFilterChange('services', filter.value)}
                          className="h-4 w-4 rounded-[4px] border-[var(--color-rule-strong)] bg-white accent-[var(--color-ink)]"
                        />
                        <span className="flex-1 text-sm text-[var(--color-ink-soft)]">{filter.label}</span>
                        <span className="dir-num text-xs text-[var(--color-ink-mute)]">
                          {getFilterCount(filter.value)}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

              </div>
            </aside>

            {/* PROVIDER LIST */}
            <main className="min-w-0 flex-1">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[var(--color-ink-soft)]">
                  Showing <span className="dir-num font-semibold text-[var(--color-ink)]">{filteredProvidersMemo.length}</span> providers
                </p>
                <label className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)]">
                  Sort
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="h-10 rounded-[4px] border border-[var(--color-rule-strong)] bg-white px-3 text-sm font-semibold text-[var(--color-ink)] focus:border-[var(--color-ink)] focus:outline-none"
                  >
                    <option value="quality">By Rating</option>
                    <option value="name">By Name (A-Z)</option>
                  </select>
                </label>
              </div>
              {featured}
              {loading ? (
                <FirmListEmpty>Loading providers...</FirmListEmpty>
              ) : filteredProvidersMemo.length === 0 ? (
                <FirmListEmpty>
                  No providers match your filters.{' '}
                  <button onClick={clearFilters} className="dir-link font-semibold">
                    Clear all filters
                  </button>
                </FirmListEmpty>
              ) : (
                <FirmList>
                  {filteredProvidersMemo.map(provider => (
                    <FirmListItem key={provider.canonical_id ?? provider.slug}>
                      <FirmEntry
                        name={provider.name}
                        slug={provider.slug}
                        postcode={provider.postcode}
                        rating={provider.google_rating}
                        reviewCount={provider.google_review_count}
                        phone={provider.phone}
                        websiteHref={provider.website ? externalHref(provider.website) : null}
                        tags={[
                          provider.service_emergency_24_7 ? '24/7 emergency' : null,
                          provider.service_bpca_certified ? 'BPCA certified' : null,
                          provider.service_eco_friendly ? 'Eco-friendly' : null,
                        ].filter((t): t is string => t !== null)}
                      />
                    </FirmListItem>
                  ))}
                </FirmList>
              )}
            </main>

          </div>
        </div>
      </section>

      {/* DIY PRODUCTS */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-stock)] py-20 md:py-28">
        <div className="dir-wrap">
          <div className="max-w-[68ch]">
            <h2 className="dir-h2 text-[var(--color-ink)]">
              Need DIY Products?
            </h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-[var(--color-ink-soft)] marker:text-[var(--color-ink-mute)]">
              <li>Browse our curated selection of the most popular pest control products available today</li>
              <li>Stop trawling the internet and just hoping for the best with what you spend your money on</li>
              <li>Pick a product from our curated list organised by pest type</li>
              <li>We choose products against sourced criteria: the legal position and the specifications each manufacturer states in its own listing</li>
            </ul>
            <Link href="/products" className="dir-btn dir-btn-line mt-6">
              View Home Products
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* FIND SPECIALISTS BY PEST TYPE */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-stock)] py-14">
        <div className="dir-wrap">
          <h2 className="dir-h2 text-[var(--color-ink)]">Find Specialists by Pest Type</h2>
          <p className="mt-2 text-[var(--color-ink-soft)]">Browse Derby providers who specialise in specific pests</p>
          <ul className="mt-6 columns-2 gap-x-8 border-t border-[var(--color-rule-strong)] sm:columns-3 md:columns-5 [&>li]:break-inside-avoid">
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/rats" className="dir-link font-semibold">Rats</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/mice" className="dir-link font-semibold">Mice</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/wasps" className="dir-link font-semibold">Wasps</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/bed-bugs" className="dir-link font-semibold">Bed Bugs</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/cockroaches" className="dir-link font-semibold">Cockroaches</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/ants" className="dir-link font-semibold">Ants</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/fleas" className="dir-link font-semibold">Fleas</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/foxes" className="dir-link font-semibold">Foxes</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/moths" className="dir-link font-semibold">Moths</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/pest-control/derby/pigeons" className="dir-link font-semibold">Pigeons</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* DIY GUIDES */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-stock)] py-12">
        <div className="dir-wrap">
          <p className="text-lg font-bold text-[var(--color-ink)]">DIY First? Read Our Guides</p>
          <p className="mt-1 text-sm text-[var(--color-ink-soft)]">Expert advice to help you tackle pest problems yourself</p>
          <ul className="mt-5 columns-1 gap-x-8 border-t border-[var(--color-rule-strong)] text-sm sm:columns-2 lg:columns-3 [&>li]:break-inside-avoid">
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/how-to-get-rid-of-rats" className="dir-link font-semibold">How to Get Rid of Rats</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/rat-traps" className="dir-link font-semibold">Best Rat Traps UK 2026</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/how-to-get-rid-of-mice" className="dir-link font-semibold">How to Get Rid of Mice</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/mouse-traps" className="dir-link font-semibold">Best Mouse Traps UK 2026</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/wasp-nest-removal" className="dir-link font-semibold">Wasp Nest Removal Guide</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/wasp-killers" className="dir-link font-semibold">Best Wasp Killers UK 2026</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/how-to-get-rid-of-bed-bugs" className="dir-link font-semibold">How to Get Rid of Bed Bugs</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/bed-bug-treatments" className="dir-link font-semibold">Best Bed Bug Treatments UK 2026</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/how-to-get-rid-of-cockroaches" className="dir-link font-semibold">How to Get Rid of Cockroaches</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/cockroach-killers" className="dir-link font-semibold">Best Cockroach Killers UK 2026</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/how-to-get-rid-of-fleas" className="dir-link font-semibold">How to Get Rid of Fleas</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/flea-treatments" className="dir-link font-semibold">Best Flea Treatments UK 2026</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/how-to-get-rid-of-ants" className="dir-link font-semibold">How to Get Rid of Ants</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/ant-killers" className="dir-link font-semibold">Best Ant Killers UK 2026</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/how-to-get-rid-of-squirrels" className="dir-link font-semibold">How to Get Rid of Squirrels</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/squirrel-deterrents" className="dir-link font-semibold">Best Squirrel Deterrents UK 2026</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/pigeon-control" className="dir-link font-semibold">Pigeon Control Guide</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/bird-deterrents" className="dir-link font-semibold">Best Bird Deterrents UK 2026</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/guides/how-to-get-rid-of-moths" className="dir-link font-semibold">How to Get Rid of Moths</Link>
            </li>
            <li className="border-b border-[var(--color-rule)] py-2.5">
              <Link href="/best/moth-killers" className="dir-link font-semibold">Best Moth Killers UK</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CROSS-LINKING */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper)] py-8">
        <div className="dir-wrap">
          <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
            <p className="text-sm text-[var(--color-ink-soft)]">Also compare pest control providers in</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <li>
                <Link href="/residential" className="dir-link font-semibold">London Residential</Link>
              </li>
              <li>
                <Link href="/commercial" className="dir-link font-semibold">London Commercial</Link>
              </li>
              <li>
                <Link href="/birmingham/residential" className="dir-link font-semibold">Birmingham Residential</Link>
              </li>
              <li>
                <Link href="/bradford/residential" className="dir-link font-semibold">Bradford Residential</Link>
              </li>
              <li>
                <Link href="/brighton/residential" className="dir-link font-semibold">Brighton Residential</Link>
              </li>
              <li>
                <Link href="/bristol/residential" className="dir-link font-semibold">Bristol Residential</Link>
              </li>
              <li>
                <Link href="/cardiff/residential" className="dir-link font-semibold">Cardiff Residential</Link>
              </li>
              <li>
                <Link href="/edinburgh/residential" className="dir-link font-semibold">Edinburgh Residential</Link>
              </li>
              <li>
                <Link href="/glasgow/residential" className="dir-link font-semibold">Glasgow Residential</Link>
              </li>
              <li>
                <Link href="/leeds/residential" className="dir-link font-semibold">Leeds Residential</Link>
              </li>
              <li>
                <Link href="/leicester/residential" className="dir-link font-semibold">Leicester Residential</Link>
              </li>
              <li>
                <Link href="/liverpool/residential" className="dir-link font-semibold">Liverpool Residential</Link>
              </li>
              <li>
                <Link href="/manchester/residential" className="dir-link font-semibold">Manchester Residential</Link>
              </li>
              <li>
                <Link href="/newcastle/residential" className="dir-link font-semibold">Newcastle Residential</Link>
              </li>
              <li>
                <Link href="/nottingham/residential" className="dir-link font-semibold">Nottingham Residential</Link>
              </li>
              <li>
                <Link href="/sheffield/residential" className="dir-link font-semibold">Sheffield Residential</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
