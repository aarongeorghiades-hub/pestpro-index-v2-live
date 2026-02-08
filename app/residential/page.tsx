'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase';
import SearchBar from '@/components/SearchBar';
import { Trophy } from 'lucide-react';

// Cache bust: 2025-01-15-v3

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[&]/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

// ============================================================================
// INTERFACES
// ============================================================================

interface Provider {
  canonical_id?: number;
  name: string;
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
  pest_mice: boolean;
  pest_rats: boolean;
  pest_rodents_general: boolean;
  pest_bed_bugs: boolean;
  pest_wasps: boolean;
  pest_cockroaches: boolean;
  pest_ants: boolean;
  pest_fleas: boolean;
  pest_moths: boolean;
  pest_pigeons: boolean;
  pest_birds_general: boolean;
  pest_squirrels: boolean;
  pest_flies: boolean;
  pest_bees: boolean;
  pest_foxes: boolean;
  pest_spiders: boolean;
  pest_seagulls: boolean;
  pest_silverfish: boolean;
  pest_beetles: boolean;
  pest_ladybirds: boolean;
  
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

export default function ResidentialPage() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ pests: [] as string[], services: [] as string[] });
  const [sortBy, setSortBy] = useState('quality');
  const [searchResults, setSearchResults] = useState<Provider[] | null>(null);
  const pathname = usePathname();

  // ============================================================================
  // FETCH DATA
  // ============================================================================

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('Providers')
          .select('*')
          .eq('business_residential', true);

        if (error) throw error;
        console.log('✅ Supabase query returned:', data?.length, 'providers');
        setProviders(data || []);
        setFilteredProviders(data || []);
      } catch (error) {
        console.error('Error fetching providers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  // ============================================================================
  // FILTER AND SORT LOGIC
  // ============================================================================

  const filteredProvidersMemo = useMemo(() => {
    console.log('📊 filteredProvidersMemo: providers.length =', providers.length);
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

    console.log('📊 filteredProvidersMemo: returning', filtered.length, 'providers');
    return filtered;
  }, [providers, filters, sortBy, searchResults])

  useEffect(() => {
    setFilteredProviders(filteredProvidersMemo);
  }, [filteredProvidersMemo]);

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

  const handleSearch = (results: any[], searchType: 'postcode' | 'borough' | 'provider' | 'all') => {
    setSearchResults(results as Provider[]);
  };

  const handleClearSearch = () => {
    setSearchResults(null);
  };

  // Add london_borough field to providers for SearchBar compatibility
  const providersWithBorough = useMemo(() => {
    return providers.map(p => ({
      ...p,
      london_borough: p.address?.split(',').pop()?.trim() || 'London'
    }));
  }, [providers]);

  const getFilterCount = (filterValue: string) => {
    return providers.filter(p => p[filterValue as keyof Provider] === true).length;
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  const pestFilters = [
    { value: 'pest_mice', label: 'Mice' },
    { value: 'pest_rats', label: 'Rats' },
    { value: 'pest_rodents_general', label: 'Rodents (General)' },
    { value: 'pest_bed_bugs', label: 'Bed Bugs' },
    { value: 'pest_wasps', label: 'Wasps' },
    { value: 'pest_cockroaches', label: 'Cockroaches' },
    { value: 'pest_ants', label: 'Ants' },
    { value: 'pest_fleas', label: 'Fleas' },
    { value: 'pest_moths', label: 'Moths' },
    { value: 'pest_pigeons', label: 'Pigeons' },
    { value: 'pest_birds_general', label: 'Birds (General)' },
    { value: 'pest_squirrels', label: 'Squirrels' },
    { value: 'pest_flies', label: 'Flies' },
    { value: 'pest_bees', label: 'Bees' },
    { value: 'pest_foxes', label: 'Foxes' },
    { value: 'pest_spiders', label: 'Spiders' },
    { value: 'pest_seagulls', label: 'Seagulls' },
    { value: 'pest_silverfish', label: 'Silverfish' },
    { value: 'pest_beetles', label: 'Beetles' },
    { value: 'pest_ladybirds', label: 'Ladybirds' },
  ];

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
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#050812] via-[#1e3a8a] to-[#050812] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo-header.png" 
              alt="PestPro Index Logo" 
              width={180} 
              height={50}
              className="h-auto"
            />
          </Link>

          {/* NAVIGATION - ALL TABS SAME BORDER */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200
                   ${pathname === item.href
                    ? 'bg-[#1e3a8a] text-white'
                    : 'bg-transparent text-white hover:border-white/60 hover:bg-white/10'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/london-skyline.png" 
            alt="London skyline illustration" 
            fill
            className="object-cover opacity-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/50 via-[#2563eb]/45 to-[#1e3a8a]/50"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-black mb-4 max-w-3xl drop-shadow-lg" style={{textShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>
            Residential Pest Control
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl drop-shadow-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
            407 Verified Providers in London
          </p>
          <p className="text-lg md:text-xl font-semibold mb-8 max-w-2xl drop-shadow-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
            Filter by pest type and service features across our complete directory. 68% of providers have verified Google Reviews. No endorsements, no commissions—just transparent, provider-stated information.
          </p>
        </div>
      </section>

      {/* DIY vs PROFESSIONAL SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 border-b-2 border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT: PDF GUIDE */}
            <div className="text-left flex flex-col justify-between">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                DIY or Professional? Make the Right Call.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Residential DIY Decision Guide (£1.99) helps you decide by showing:
              </p>

              {/* 4 Bullets */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">When DIY typically works (and saves you money)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">When DIY usually fails (so you don't waste time)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">The "stop signals" for common pest types that tell you it's time to call a professional</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">What actually works (and what wastes money) for each pest type</p>
                </div>
              </div>

              {/* CTA */}
              <p className="text-sm text-gray-500 mb-6">
                Make an informed decision before you spend £100+ on the wrong approach.
              </p>
              <Link 
                href="https://pestproindex.lemonsqueezy.com/checkout/buy/8d8b4f4a-a913-48b3-bf8d-dfcaf6fcb5d6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white text-lg font-bold rounded-xl hover:from-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <span className="text-2xl">📄</span>
                <span>Get the Guide - £1.99</span>
              </Link>
            </div>

            {/* RIGHT: PRODUCTS LINK */}
            <div className="text-left flex flex-col justify-between">
              <h2 className="text-4xl font-black text-gray-900 mb-0">
                Need DIY Products?
              </h2>
              {/* 4 Bullets */}
              <div className="flex-grow flex flex-col justify-between py-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">Browse our curated selection of the most popular pest control products available today</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">Stop trawling the internet and just hoping for the best with what you spend your money on</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">Pick a product from our curated list organised by pest type</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">We have curated the most popular products by average review score and number of ratings</p>
                </div>
              </div>

              {/* Button */}
              <Link 
                href="/products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white text-lg font-bold rounded-xl hover:from-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                View Products Page
                <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: FEATURED PROVIDERS - 4 COLUMNS, NO IMAGE */}
      <section className="relative bg-gradient-to-br from-amber-50 to-white py-16 border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Featured Providers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our featured provider of the week successfully tackled a tough pest problem in London.
            </p>
          </div>

          {/* 4-COLUMN GRID - NO AI IMAGE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providers
              .filter(p => 
                p.google_rating && p.google_rating >= 4.8 && 
                p.google_review_count && p.google_review_count >= 30 &&
                p.address && (
                  p.address.toLowerCase().includes('london') ||
                  p.address.toLowerCase().includes('sw') ||
                  p.address.toLowerCase().includes('se') ||
                  p.address.toLowerCase().includes('nw') ||
                  p.address.toLowerCase().includes('ne') ||
                  p.address.toLowerCase().includes('ec') ||
                  p.address.toLowerCase().includes('wc') ||
                  p.address.toLowerCase().includes('e1') ||
                  p.address.toLowerCase().includes('w1')
                )
              )
              .slice(0, 8)
              .map(provider => (
                <div 
                  key={provider.canonical_id} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border-l-4 border-amber-500"
                >
                  
                  {/* Trophy */}
                  <div className="text-3xl mb-2">🏆</div>

                  {/* Company Name */}
                  <h3 className="font-bold text-base text-gray-900 mb-2 leading-tight line-clamp-2">
                    <Link href={`/provider/${generateSlug(provider.name)}`} className="text-blue-600 hover:underline">
                      {provider.name}
                    </Link>
                  </h3>

                  {/* ADDRESS */}
                  {provider.postcode && (
                    <div className="flex items-start gap-1 mb-3 text-xs text-gray-600">
                      <span className="text-red-500 mt-0.5">📍</span>
                      <span className="line-clamp-1">{provider.postcode}</span>
                    </div>
                  )}

                  {/* Rating */}
                  {provider.google_rating && (
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-lg font-bold text-gray-900">
                        {provider.google_rating.toFixed(1)}
                      </span>
                      <span className="text-xs text-gray-600">
                        ({provider.google_review_count})
                      </span>
                    </div>
                  )}

                  {/* Contact */}
                  <div className="space-y-2">
                    {provider.phone && (
                      <a 
                        href={`tel:${provider.phone}`}
                        className="block text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors"
                      >
                        📞 Call
                      </a>
                    )}
                    {provider.website && (
                      <a 
                        href={provider.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center px-3 py-2 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-sm font-semibold rounded-lg transition-colors"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* FEATURED PROVIDER OF THE WEEK - COMING SOON */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Trophy size={48} className="text-amber-400 mr-4" />
            <h2 className="text-4xl font-black text-white">Featured Provider of the Week</h2>
            <span className="ml-4 inline-block bg-amber-400 text-blue-900 text-xs font-bold px-4 py-2 rounded-full">Coming Soon</span>
          </div>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Every week, we spotlight one pest control provider and their real-world success story — a problem they solved, the approach they took, and the result they delivered for their customer.
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            It's more than a listing. It's a showcase.
          </p>
          <p className="text-base text-blue-100 mb-8 max-w-2xl mx-auto">
            Featured providers get prime placement across PestPro Index, seen by hundreds of homeowners actively searching for pest control. Your story. Your expertise. Front and centre.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-amber-400 text-blue-900 font-bold rounded-lg hover:bg-amber-300 transition text-lg">
            Want to be featured? Get in touch →
          </Link>
        </div>
      </section>

      {/* SECTION 3: FULL PROVIDER LIST */}
      <section className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Full List of London Pest Control Providers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All 407 residential providers with advanced filtering
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="mb-8">
            <SearchBar 
              onSearch={handleSearch}
              allProviders={providersWithBorough as any}
              onClear={handleClearSearch}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* FILTER SIDEBAR */}
            <aside className="w-full lg:w-80 lg:flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:sticky lg:top-24 border border-gray-100 max-h-[calc(100vh-7rem)] overflow-y-auto">
                
                {/* Filter Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                  {(filters.pests.length > 0 || filters.services.length > 0) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Results Count */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-black text-blue-900">{filteredProvidersMemo.length}</p>
                  <p className="text-sm text-blue-700">Providers Found</p>
                </div>

                {/* Pest Type Filters */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Pest Type
                  </h3>
                  <div className="space-y-2">
                    {pestFilters.map(filter => (
                      <label key={filter.value} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.pests.includes(filter.value)}
                          onChange={() => handleFilterChange('pests', filter.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 flex-1">{filter.label}</span>
                        <span className="text-xs text-gray-500 font-medium">
                          ({getFilterCount(filter.value)})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Service Feature Filters */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Service Features
                  </h3>
                  <div className="space-y-2">
                    {serviceFilters.map(filter => (
                      <label key={filter.value} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.services.includes(filter.value)}
                          onChange={() => handleFilterChange('services', filter.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 flex-1">{filter.label}</span>
                        <span className="text-xs text-gray-500 font-medium">
                          ({getFilterCount(filter.value)})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

            {/* PROVIDER CARDS GRID */}
            <main className="flex-1">
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">Loading providers...</p>
                </div>
              ) : filteredProvidersMemo.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg mb-4">No providers match your filters</p>
                  <button
                    onClick={clearFilters}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-8">
                    <p className="text-gray-600 font-medium">Showing {filteredProvidersMemo.length} providers</p>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 border-2 border-gray-300 rounded-lg font-medium text-gray-900">
                      <option value="quality">By Rating</option>
                      <option value="name">By Name (A-Z)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProvidersMemo.map(provider => {
                    const isTrophy = provider.google_rating && provider.google_rating >= 4.5 && 
                                    provider.google_review_count && provider.google_review_count >= 30;
                    const borderClass = isTrophy ? 'border-l-4 border-amber-500' : 'border-l-4 border-[#1e3a8a]';

                    return (
                      <div key={provider.canonical_id} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 ${borderClass}`}>
                        {isTrophy && <div className="text-2xl mb-2">🏆</div>}
                        <h3 className="font-bold text-base text-gray-900 mb-2 leading-tight line-clamp-2">
                          <Link href={`/provider/${generateSlug(provider.name)}`} className="text-blue-600 hover:underline">
                            {provider.name}
                          </Link>
                        </h3>
                        {provider.postcode && (
                          <div className="flex items-start gap-1 mb-2 text-xs text-gray-600">
                            <span className="text-red-500">📍</span>
                            <span className="line-clamp-1">{provider.postcode}</span>
                          </div>
                        )}
                        {provider.google_rating && (
                          <div className="flex items-center gap-1 mb-3">
                            <span className="text-yellow-500">⭐</span>
                            <span className="text-sm font-bold text-gray-900">{provider.google_rating.toFixed(1)}</span>
                            <span className="text-xs text-gray-600">({provider.google_review_count})</span>
                          </div>
                        )}
                        <div className="space-y-2">
                          {provider.phone && (
                            <a href={`tel:${provider.phone}`} className="block text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg">
                              📞 {provider.phone}
                            </a>
                          )}
                          {provider.website && (
                            <a href={provider.website} target="_blank" rel="noopener noreferrer" className="block text-center px-3 py-2 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-sm font-semibold rounded-lg">
                              Website
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                </>
              )}
            </main>

          </div>
        </div>
      </section>

    </div>
  );
}
