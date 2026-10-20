'use client';

import { useState } from 'react';
import { externalHref } from '@/lib/externalUrl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AreaHead, { LocalOnlyNote } from '@/components/directory/AreaHead';
import FirmEntry from '@/components/directory/FirmEntry';
import { FirmList, FirmListItem, FirmListEmpty } from '@/components/directory/FirmList';

export interface Provider {
  canonical_id: number;
  name: string;  slug: string;
  website: string | null;
  google_rating: number;
  google_review_count: number;
  phone: string | null;
  email: string | null;
  address: string | null;
  postcode: string | null;
  bpca_member: boolean;
  npta_member: boolean;
  basis_prompt: boolean;
  [key: string]: any;
}

interface FilterCounts {
  [key: string]: number;
}

const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

const FILTER_CATEGORIES = {
  certifications: [
    { key: 'bpca_member', label: 'BPCA Member' },
    { key: 'npta_member', label: 'NPTA Member' },
    { key: 'rsph_level_2', label: 'RSPH Level 2' },
    { key: 'safe_contractor', label: 'Safe Contractor' },
    { key: 'chas_accredited', label: 'CHAS' },
    { key: 'basis_prompt', label: 'Basis Prompt' },
    { key: 'cepa_certified', label: 'CEPA Certified' },
    { key: 'iso_9001', label: 'ISO 9001' },
    { key: 'iso_14001', label: 'ISO 14001' },
    { key: 'iso_45001', label: 'ISO 45001' },
    { key: 'constructionline', label: 'Constructionline' },
    { key: 'trustmark', label: 'Trustmark' },
  ],
  methods: [
    { key: 'heat_treatment', label: 'Heat Treatment' },
    { key: 'falconry_bird_control', label: 'Falconry/Bird Control' },
    { key: 'detection_dogs', label: 'Detection Dogs' },
    { key: 'high_rise_rope_access', label: 'High-Rise Rope Access' },
    { key: 'fumigation', label: 'Fumigation' },
    { key: 'proofing_services', label: 'Proofing Services' },
  ],
  contracts: [
    { key: 'flexible_contracts', label: 'Flexible Contracts' },
    { key: 'no_tie_in_contracts', label: 'No Tie-In Contracts' },
    { key: 'retainer_services', label: 'Retainer Services' },
    { key: 'one_off_services', label: 'One-Off Services' },
    { key: 'emergency_24_7', label: 'Emergency 24/7' },
  ],
  sectors: [
    { key: 'property_management', label: 'Property Management' },
    { key: 'social_housing', label: 'Social Housing' },
    { key: 'hospitality', label: 'Hospitality' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'education', label: 'Education' },
    { key: 'retail', label: 'Retail' },
    { key: 'food_production', label: 'Food Production' },
    { key: 'warehousing_logistics', label: 'Warehousing/Logistics' },
  ],
  capabilities: [
    { key: 'multi_site_coverage', label: 'Multi-Site Coverage' },
    { key: 'national_coverage', label: 'National Coverage' },
    { key: 'unmarked_vehicles', label: 'Unmarked Vehicles' },
    { key: 'non_disruptive_services', label: 'Non-Disruptive Services' },
    { key: 'out_of_hours_services', label: 'Out-of-Hours Services' },
    { key: 'same_day_service', label: 'Same-Day Service' },
  ],
  credentials: [
    { key: 'free_surveys', label: 'Free Surveys' },
    { key: 'free_quotes', label: 'Free Quotes' },
    { key: 'guarantees_offered', label: 'Guarantees Offered' },
    { key: 'years_established_25_plus', label: '25+ Years Established' },
    { key: 'technicians_50_plus', label: '50+ Technicians' },
    { key: 'service_areas_documented', label: 'Service Areas Documented' },
    { key: 'insurance_details_published', label: 'Insurance Details Published' },
    { key: 'eco_friendly_methods', label: 'Eco-Friendly Methods' },
    { key: 'humane_non_lethal_methods', label: 'Humane/Non-Lethal Methods' },
    { key: 'peta_endorsed', label: 'PETA Endorsed' },
    { key: 'rspca_recognized', label: 'RSPCA Recognized' },
  ],
};

function computeQualityScore(provider: Provider): number {
  let score = 0;
  Object.values(FILTER_CATEGORIES).forEach((category) => {
    category.forEach((filter) => {
      if (provider[filter.key] === true) score++;
    });
  });
  return score;
}

function computeFilterCounts(data: Provider[]): FilterCounts {
  const counts: FilterCounts = {};
  Object.values(FILTER_CATEGORIES).forEach((category) => {
    category.forEach((filter) => {
      counts[filter.key] = data.filter((p) => p[filter.key] === true).length;
    });
  });
  return counts;
}

// Service facts the old card showed as badges, now FirmEntry tags.
function firmTags(provider: Provider): string[] {
  const tags: string[] = [];
  if (provider.bpca_member) tags.push('BPCA Member');
  if (provider.npta_member) tags.push('NPTA Member');
  if (provider.basis_prompt) tags.push('BASIS Prompt');
  return tags;
}

export default function CommercialDirectoryClient({ initialProviders }: { initialProviders: Provider[] }) {
  const providers = initialProviders;
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>(() => {
    const sorted = [...initialProviders];
    sorted.sort((a, b) => computeQualityScore(b) - computeQualityScore(a));
    return sorted;
  });
  const [filterCounts] = useState<FilterCounts>(() => computeFilterCounts(initialProviders));
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState('quality');
  const pathname = usePathname();


  // Navigation items
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/professionals', label: 'For Pest Professionals' },
    { href: '/products', label: 'Home Products' },
    { href: '/commercial-products', label: 'Commercial Products' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Contact' },
  ];

  // Filter categories
  const filterCategories = FILTER_CATEGORIES;

  // Calculate quality score
  const getQualityScore = (provider: Provider): number => {
    let score = 0;
    Object.values(filterCategories).forEach((category) => {
      category.forEach((filter) => {
        if (provider[filter.key] === true) score++;
      });
    });
    return score;
  };

  // Apply filters
  const applyFilters = (data: Provider[], filters: Set<string>) => {
    let filtered = data;

    if (filters.size > 0) {
      const filterColumnMap: Record<string, string[]> = {
        property_management: ['property_management'],
        social_housing: ['social_housing'],
        hospitality: ['hospitality', 'business_restaurants', 'business_hotels'],
        healthcare: ['healthcare', 'business_healthcare'],
        education: ['education', 'business_schools'],
        retail: ['retail', 'business_retail'],
        food_production: ['food_production'],
        warehousing_logistics: ['warehousing_logistics', 'business_warehouses'],
        offices: ['offices', 'business_offices'],
        leisure_facilities: ['leisure_facilities'],
        heat_treatment: ['heat_treatment', 'specialist_heat_treatment'],
        falconry_bird_control: ['falconry_bird_control'],
        detection_dogs: ['detection_dogs'],
        high_rise_rope_access: ['high_rise_rope_access'],
        fumigation: ['fumigation'],
        proofing_services: ['proofing_services', 'specialist_pest_proofing'],
        flexible_contracts: ['flexible_contracts'],
        no_tie_in_contracts: ['no_tie_in_contracts'],
        retainer_services: ['retainer_services'],
        one_off_services: ['one_off_services'],
        emergency_24_7: ['emergency_24_7', 'service_emergency_24_7'],
        multi_site_coverage: ['multi_site_coverage'],
        national_coverage: ['national_coverage'],
        unmarked_vehicles: ['unmarked_vehicles'],
        non_disruptive_services: ['non_disruptive_services'],
        out_of_hours_services: ['out_of_hours_services'],
        same_day_service: ['same_day_service'],
        free_surveys: ['free_surveys', 'service_free_survey'],
        free_quotes: ['free_quotes'],
        guarantees_offered: ['guarantees_offered', 'service_guarantee'],
        years_established_25_plus: ['years_established_25_plus'],
        technicians_50_plus: ['technicians_50_plus'],
        service_areas_documented: ['service_areas_documented'],
        insurance_details_published: ['insurance_details_published'],
        eco_friendly_methods: ['eco_friendly_methods', 'service_eco_friendly'],
        humane_non_lethal_methods: ['humane_non_lethal_methods'],
        peta_endorsed: ['peta_endorsed'],
        rspca_recognized: ['rspca_recognized'],
      };

      filtered = data.filter((provider) => {
        return Array.from(filters).some((filterKey) => {
          const columns = filterColumnMap[filterKey] || [filterKey];
          return columns.some((col) => provider[col] === true);
        });
      });
    }

    // Sort
    if (sortBy === 'quality') {
      filtered.sort((a, b) => getQualityScore(b) - getQualityScore(a));
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProviders(filtered);
  };

  // Handle filter change
  const handleFilterChange = (filterKey: string) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filterKey)) {
      newFilters.delete(filterKey);
    } else {
      newFilters.add(filterKey);
    }
    setSelectedFilters(newFilters);
    applyFilters(providers, newFilters);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters(new Set());
    applyFilters(providers, new Set());
  };

  return (
    <div className="min-h-screen bg-[var(--color-stock)]">
      <Navigation />

      <AreaHead
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Leicester', href: '/leicester' }, { label: 'Commercial' }]}
        tab="Leicester &amp; Leicestershire"
        title="Commercial Pest Control in Leicester"
        standfirst={
          <>
            <p>
              Local commercial pest control in Leicester. Independent firms near your premises for contracts, inspections and urgent call-outs, filtered by sector and accreditation.
            </p>
            <p className="mt-3 text-base font-semibold text-[var(--color-ink)]">
              <span className="dir-num">{filteredProviders.length} Providers in Leicester &amp; Leicestershire</span>
            </p>
          </>
        }
      />

      {/* TOP RATED PROVIDERS */}
      {providers.some(p => p.google_rating != null) && (
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-stock)] py-12 md:py-16">
        <div className="dir-wrap">
          <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">Top Rated Providers</h2>
          <p className="mt-2 max-w-[68ch] leading-relaxed text-[var(--color-ink-soft)]">Highest-rated commercial pest control providers in Leicester &amp; Leicestershire</p>

          <div className="mt-8">
            <FirmList legend={false}>
              {[...providers]
                .filter(p => p.google_review_count > 0)
                .sort((a, b) => {
                  if (b.google_rating !== a.google_rating) return b.google_rating - a.google_rating;
                  return b.google_review_count - a.google_review_count;
                })
                .slice(0, 8)
                .map(provider => (
                  <FirmListItem key={provider.canonical_id}>
                    <FirmEntry
                      name={provider.name}
                      slug={provider.slug}
                      postcode={provider.postcode}
                      rating={provider.google_rating}
                      reviewCount={provider.google_review_count}
                      phone={provider.phone}
                      websiteHref={provider.website ? externalHref(provider.website) : null}
                      tags={firmTags(provider)}
                    />
                  </FirmListItem>
                ))}
            </FirmList>
          </div>
        </div>
      </section>
      )}

      {/* FULL PROVIDER LIST WITH FILTERS */}
      <section className="bg-[var(--color-stock)] py-12 md:py-16">
        <div className="dir-wrap">
          <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">Full List of Commercial Providers</h2>
          <p className="mt-2 text-[var(--color-ink-soft)]">All {providers.length} commercial providers with advanced filtering</p>
          <div className="mt-5">
            <LocalOnlyNote>
              We only list independent, local pest controllers who serve this area. National chains are not included, so this isn’t every firm that covers Leicester, just the local ones.
            </LocalOnlyNote>
          </div>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row">
            {/* FILTER SIDEBAR */}
            <aside className="w-full lg:w-72 lg:flex-shrink-0">
              <div className="max-h-[calc(100vh-7rem)] overflow-y-auto border-t border-[var(--color-ink)] pt-4 lg:sticky lg:top-24">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">Filters</h3>
                  {selectedFilters.size > 0 && (
                    <button type="button" onClick={clearAllFilters} className="dir-link text-sm font-semibold">
                      Clear All
                    </button>
                  )}
                </div>

                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                  <span className="dir-num mr-1.5 text-2xl font-bold text-[var(--color-ink)]">{filteredProviders.length}</span>
                  Providers Found
                </p>

                {([
                  ['certifications', 'Certifications'],
                  ['methods', 'Methods'],
                  ['contracts', 'Contracts'],
                  ['sectors', 'Sectors'],
                  ['capabilities', 'Capabilities'],
                  ['credentials', 'Credentials'],
                ] as const).map(([group, title]) => (
                  <div key={group} className="mt-5 border-t border-[var(--color-rule)] pt-4">
                    <h4 className="text-[0.9375rem] font-bold text-[var(--color-ink)]">{title}</h4>
                    <div className="mt-2 space-y-0.5">
                      {filterCategories[group].map(filter => (
                        <label key={filter.key} className="flex cursor-pointer items-center gap-3 rounded-[4px] px-1.5 py-1.5 hover:bg-[var(--color-paper)]">
                          <input
                            type="checkbox"
                            checked={selectedFilters.has(filter.key)}
                            onChange={() => handleFilterChange(filter.key)}
                            className="h-4 w-4 rounded-[3px] border-[var(--color-rule-strong)] bg-white accent-[var(--color-ink)]"
                          />
                          <span className="flex-1 text-sm text-[var(--color-ink-soft)]">{filter.label}</span>
                          <span className="dir-num text-xs text-[var(--color-ink-mute)]">({filterCounts[filter.key] || 0})</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="min-w-0 flex-1">
              {filteredProviders.length > 0 && (
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-[var(--color-ink-soft)]">
                    Showing <span className="dir-num">{filteredProviders.length}</span> providers
                  </p>
                  <select
                    value={sortBy}
                    onChange={(e) => { setSortBy(e.target.value); applyFilters(providers, selectedFilters); }}
                    aria-label="Sort providers"
                    className="h-10 rounded-[4px] border border-[var(--color-rule-strong)] bg-white px-3 text-sm font-semibold text-[var(--color-ink)] focus:border-[var(--color-ink)] focus:outline-none"
                  >
                    <option value="quality">Sort by Quality Score</option>
                    <option value="name">Sort by Name</option>
                  </select>
                </div>
              )}
              <div data-featured-slot />
              {filteredProviders.length === 0 ? (
                <FirmListEmpty>No providers match your filters. Try adjusting your selection.</FirmListEmpty>
              ) : (
                <FirmList>
                  {filteredProviders.map(provider => (
                    <FirmListItem key={provider.canonical_id}>
                      <FirmEntry
                        name={provider.name}
                        slug={provider.slug}
                        postcode={provider.postcode}
                        rating={provider.google_rating}
                        reviewCount={provider.google_review_count}
                        phone={provider.phone}
                        websiteHref={provider.website ? externalHref(provider.website) : null}
                        tags={firmTags(provider)}
                      />
                    </FirmListItem>
                  ))}
                </FirmList>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-stock)] py-12 md:py-16">
        <div className="dir-wrap">
          <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">How It Works</h2>
          <p className="mt-2 max-w-[68ch] text-[var(--color-ink-soft)]">Our methodology for finding the right commercial provider</p>

          <ol className="mt-8 grid grid-cols-1 gap-x-10 md:grid-cols-3">
            <li className="border-t border-[var(--color-ink)] py-5">
              <span className="dir-num dir-condensed text-3xl font-bold text-[var(--color-ink)]">1</span>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-ink)]">Rankings can&apos;t be bought</h3>
              <p className="mt-2 leading-relaxed text-[var(--color-ink-soft)]">Results are sorted by rating. Firms can pay for a clearly labelled Featured slot, never a higher rank. No lead fees, ever.</p>
            </li>
            <li className="border-t border-[var(--color-ink)] py-5">
              <span className="dir-num dir-condensed text-3xl font-bold text-[var(--color-ink)]">2</span>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-ink)]">Transparent Data</h3>
              <p className="mt-2 leading-relaxed text-[var(--color-ink-soft)]">All provider information is displayed transparently. You see exactly what certifications, sectors, and capabilities each provider has.</p>
            </li>
            <li className="border-t border-[var(--color-ink)] py-5">
              <span className="dir-num dir-condensed text-3xl font-bold text-[var(--color-ink)]">3</span>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-ink)]">Your Decision</h3>
              <p className="mt-2 leading-relaxed text-[var(--color-ink-soft)]">You decide which provider is right for your business. Filter by your specific needs and contact providers directly.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* PRODUCTS PAGE LINK AND COMMERCIAL GUIDES */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-stock)] py-12 md:py-16">
        <div className="dir-wrap grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.01em] text-[var(--color-ink)]">Running a Food Business?</h2>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-[var(--color-ink-soft)]">Our commercial pest control guides cover EHO compliance, HACCP requirements, and choosing the right equipment for your business.</p>
            <Link href="/guides/commercial-pest-control" className="dir-btn dir-btn-ink mt-5">
              Commercial Pest Control Hub
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            </Link>
            <ul className="mt-5 border-b border-[var(--color-rule)]">
              {[
                { href: '/guides/restaurant-pest-control', label: 'Restaurant Guide' },
                { href: '/best/commercial-fly-killers', label: 'Fly Killer Reviews' },
                { href: '/guides/warehouse-pest-management', label: 'Warehouse Pest Management Guide' },
                { href: '/guides/hotel-pest-control', label: 'Hotel Pest Control Guide' },
                { href: '/best/commercial-insect-monitors', label: 'Insect Monitor Reviews' },
              ].map(link => (
                <li key={link.href} className="border-t border-[var(--color-rule)]">
                  <Link href={link.href} className="flex items-center justify-between gap-4 py-3 font-semibold text-[var(--color-ink)] hover:underline">
                    {link.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4 text-[var(--color-ink-mute)]" strokeWidth={2} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-[var(--color-rule)] lg:pl-10">
            <h3 className="text-xl font-bold text-[var(--color-ink)]">Looking for Product Recommendations?</h3>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-[var(--color-ink-soft)]">Visit our Products page to see the most popular pest control products available today, organized by pest type. Includes user ratings and direct purchase links.</p>
            <Link href="/products" className="dir-link mt-4 inline-flex items-center gap-2 font-semibold">
              View Home Products
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* CROSS-LINKING */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper)] py-10">
        <div className="dir-wrap">
          <p className="text-[var(--color-ink-soft)]">Also compare pest control providers in</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/residential" className="dir-link font-semibold">
                London Residential
              </Link>
            </li>
            <li>
              <Link href="/commercial" className="dir-link font-semibold">
                London Commercial
              </Link>
            </li>
            <li>
              <Link href="/leeds/commercial" className="dir-link font-semibold">
                Leeds Commercial
              </Link>
            </li>
            <li>
              <Link href="/manchester/commercial" className="dir-link font-semibold">
                Manchester Commercial
              </Link>
            </li>
            <li>
              <Link href="/birmingham/commercial" className="dir-link font-semibold">
                Birmingham Commercial
              </Link>
            </li>
            <li>
              <Link href="/glasgow/commercial" className="dir-link font-semibold">
                Glasgow Commercial
              </Link>
            </li>
            <li>
              <Link href="/newcastle/commercial" className="dir-link font-semibold">
                Newcastle Commercial
              </Link>
            </li>
            <li>
              <Link href="/cardiff/commercial" className="dir-link font-semibold">
                Cardiff Commercial
              </Link>
            </li>
            <li>
              <Link href="/edinburgh/commercial" className="dir-link font-semibold">
                Edinburgh Commercial
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
