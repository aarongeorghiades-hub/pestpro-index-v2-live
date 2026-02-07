'use client';
export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react';
import { createClient } from '@/utils/supabase';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

// Helper function to extract postcode from address
const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

interface Provider {
  canonical_id: number;
  name: string;
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

export default function CommercialPage() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterCounts, setFilterCounts] = useState<FilterCounts>({});
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState('quality');
  const [searchResults, setSearchResults] = useState<Provider[] | null>(null);
  const pathname = usePathname();

  // Navigation items
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

  // Filter categories
  const filterCategories = {
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

  // Load providers
  useEffect(() => {
    const loadProviders = async () => {
      try {
        const supabase = createClient();
        
        // Optimize query: select only needed columns instead of *
        const neededColumns = [
          'canonical_id', 'name', 'website', 'google_rating', 'google_review_count',
          'phone', 'email', 'address', 'postcode',
          'bpca_member', 'npta_member', 'rsph_level_2', 'safe_contractor', 'chas_accredited',
          'basis_prompt', 'cepa_certified', 'iso_9001', 'iso_14001', 'iso_45001',
          'constructionline', 'trustmark',
          'heat_treatment', 'falconry_bird_control', 'detection_dogs', 'high_rise_rope_access',
          'fumigation', 'proofing_services',
          'flexible_contracts', 'no_tie_in_contracts', 'retainer_services', 'one_off_services',
          'emergency_24_7',
          'property_management', 'social_housing', 'hospitality', 'healthcare', 'education',
          'retail', 'food_production', 'warehousing_logistics',
          'multi_site_coverage', 'national_coverage', 'unmarked_vehicles', 'non_disruptive_services',
          'out_of_hours_services', 'same_day_service',
          'free_surveys', 'free_quotes', 'guarantees_offered', 'years_established_25_plus',
          'technicians_50_plus', 'service_areas_documented', 'insurance_details_published',
          'eco_friendly_methods', 'humane_non_lethal_methods', 'peta_endorsed', 'rspca_recognized',
          'london_borough'
        ].join(', ');
        
        const { data, error } = await supabase
          .from('Providers')
          .select(neededColumns)
          .eq('commercial', true);

        if (error) throw error;

        console.log('=== COMMERCIAL PROVIDERS DEBUG ===');
        console.log('Total providers with commercial=true:', (data || []).length);
        console.log('=== END DEBUG ===');

        setProviders((data as unknown as Provider[]) || []);
        calculateFilterCounts((data as unknown as Provider[]) || []);
        applyFilters((data as unknown as Provider[]) || [], new Set(), 'quality');
      } catch (error) {
        console.error('Error loading providers:', error);
        // Show error state instead of infinite loading
        setProviders([]);
      } finally {
        setLoading(false);
      }
    };

    loadProviders();
  }, []);

  // Define filter column map
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

  // Compute filtered and sorted providers using useMemo
  const filteredProvidersMemo = useMemo(() => {
    if (providers.length === 0) return [];
    
    // Start with search results if available, otherwise all providers
    let filtered = searchResults !== null ? searchResults : providers;
    
    // Apply filters
    if (selectedFilters.size > 0) {
      filtered = filtered.filter((provider) => {
        return Array.from(selectedFilters).every((filterKey) => {
          const columns = filterColumnMap[filterKey] || [filterKey];
          return columns.some((col) => provider[col] === true);
        });
      });
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
  }, [providers, selectedFilters, sortBy, searchResults]);



  // Calculate filter counts
  const calculateFilterCounts = (data: Provider[]) => {
    const counts: FilterCounts = {};
    Object.values(filterCategories).forEach((category) => {
      category.forEach((filter) => {
        counts[filter.key] = data.filter((p) => p[filter.key] === true).length;
      });
    });
    setFilterCounts(counts);
  };

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

  // Render stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          {i < Math.round(rating) ? '★' : '☆'}
        </span>
      );
    }
    return <div className="flex gap-0.5">{stars}</div>;
  };

  // Use filteredProvidersMemo directly instead of state

  // Apply filters
  // Keep applyFilters for backward compatibility
  const applyFilters = (data: Provider[], filters: Set<string>, sortByValue?: string) => {
    const finalSortBy = sortByValue !== undefined ? sortByValue : sortBy;
    let filtered = data;

    if (filters.size > 0) {
      filtered = data.filter((provider) => {
        return Array.from(filters).every((filterKey) => {
          const columns = filterColumnMap[filterKey] || [filterKey];
          return columns.some((col) => provider[col] === true);
        });
      });
    }

    // Sort
    if (finalSortBy === 'quality') {
      // Sort by Google rating (highest first), then by review count
      filtered.sort((a, b) => {
        // Handle null/undefined ratings
        const ratingA = a.google_rating || 0;
        const ratingB = b.google_rating || 0;
        if (ratingB !== ratingA) return ratingB - ratingA; // Highest rating first
        return (b.google_review_count || 0) - (a.google_review_count || 0); // Then by review count
      });
    } else if (finalSortBy === 'name') {
      // Sort alphabetically (A-Z) by provider name, case-insensitive
      filtered.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
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
    // Apply filters immediately with the new filter set
    applyFilters(providers, newFilters, sortBy);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters(new Set());
    // Apply filters immediately with empty filter set
    applyFilters(providers, new Set(), sortBy);
  };

  // Handle search from SearchBar
  const handleSearch = (results: any, searchType?: string) => {
    setSearchResults(results);
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchResults(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading commercial providers...</p>
        </div>
      </div>
    );
  }

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
            src="/kitchen-cleaning.png" 
            alt="Commercial pest control kitchen" 
            fill
            className="object-cover opacity-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/50 via-[#2563eb]/45 to-[#1e3a8a]/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white drop-shadow-[0_12px_36px_rgba(0,0,0,0.95)]">
            Commercial Pest Control
          </h1>
          <p className="text-3xl md:text-4xl mb-6 font-extralight tracking-[0.15em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
            221 Verified Providers in London
          </p>
          <p className="text-xl text-white font-semibold max-w-3xl leading-relaxed drop-shadow-[0_6px_16px_rgba(0,0,0,0.85)] opacity-95">
            Find certified commercial pest control providers with advanced filtering by certifications, capabilities, and business sectors.
          </p>
        </div>
      </section>

      {/* FEATURED PROVIDERS - TOP 3 BY REVIEWS */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-16 border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Featured Providers</h2>
            <p className="text-lg text-gray-600">Top-rated commercial pest control providers with verified certifications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...providers]
              .filter(p => p.google_review_count > 0)
              .sort((a, b) => (b.google_review_count || 0) - (a.google_review_count || 0))
              .slice(0, 8)
              .map(provider => (
                <div key={provider.canonical_id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-500 p-6">
                  <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">FEATURED</span>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{provider.name}</h3>
                  {provider.google_review_count > 0 && (
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(provider.google_rating)}
                      <span className="text-sm font-semibold text-gray-600">{provider.google_rating?.toFixed(1)} ({provider.google_review_count} reviews)</span>
                    </div>
                  )}
                  {(provider.postcode || provider.address) && (
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={14} className="text-blue-600" />
                      <span className="text-sm text-gray-700">{provider.postcode || provider.address}</span>
                    </div>
                  )}
                  {provider.phone && (
                    <div className="flex items-center gap-2 mb-2">
                      <Phone size={14} className="text-blue-600" />
                      <span className="text-sm text-gray-700">{provider.phone}</span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {provider.bpca_member && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">BPCA</span>
                    )}
                    {provider.npta_member && (
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">NPTA</span>
                    )}
                    {provider.basis_prompt && (
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-2 py-0.5 rounded-full">BASIS PROMPT</span>
                    )}
                  </div>
                  {provider.website && (
                    <Link href={provider.website} target="_blank" rel="noopener noreferrer" className="block text-center px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition text-sm">
                      Visit Website →
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS CTA - PREMIUM BANNER */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-24 overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)'}}></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 italic" style={{fontStyle: 'italic', letterSpacing: '-0.02em'}}>The Right Products for the Job</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Curated commercial pest control products with user ratings and direct purchase links.</p>
          <Link href="/commercial-products" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
            Browse Commercial Products →
          </Link>
        </div>
      </section>

      {/* TOP RATED PROVIDERS - TOP 8 BY RATING */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-white py-16 border-b-2 border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Top Rated Providers</h2>
            <p className="text-lg text-gray-600">Highest-rated commercial pest control providers in London</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...providers]
              .filter(p => p.google_review_count > 0)
              .sort((a, b) => {
                if (b.google_rating !== a.google_rating) return b.google_rating - a.google_rating;
                return b.google_review_count - a.google_review_count;
              })
              .slice(0, 8)
              .map(provider => (
                <div key={provider.canonical_id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-yellow-500 p-6">
                  <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">TOP RATED</span>
                  <h3 className="text-lg font-black text-gray-900 mb-3">{provider.name}</h3>
                  <div className="flex items-center gap-2 mb-2">{renderStars(provider.google_rating)}</div>
                  <span className="text-sm text-gray-600 mb-3 block">{provider.google_rating?.toFixed(1)} ({provider.google_review_count} reviews)</span>
                  {(provider.postcode || provider.address) && (
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={14} className="text-blue-600" />
                      <span className="text-sm text-gray-700">{provider.postcode || provider.address}</span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {provider.bpca_member && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">BPCA</span>
                    )}
                    {provider.npta_member && (
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">NPTA</span>
                    )}
                    {provider.basis_prompt && (
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-2 py-0.5 rounded-full">BASIS PROMPT</span>
                    )}
                  </div>
                  {provider.phone && (
                    <div className="flex items-center gap-2 mb-2">
                      <Phone size={14} className="text-blue-600" />
                      <span className="text-sm text-gray-700">{provider.phone}</span>
                    </div>
                  )}
                  {provider.email && (
                    <div className="flex items-center gap-2 mb-2">
                      <Mail size={14} className="text-blue-600" />
                      <span className="text-sm text-gray-700">{provider.email}</span>
                    </div>
                  )}
                  {provider.website && (
                    <Link
                      href={provider.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-3 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition text-xs mt-3"
                    >
                      Visit Website →
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* PDF GUIDES SECTION */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Essential Guides for Commercial Pest Control</h2>
            <p className="text-lg text-gray-600">Expert resources to help you select the right provider and maintain compliance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#1e3a8a]">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">Commercial Provider Selection Guide</h3>
                <p className="text-sm font-semibold text-[#2563eb] mb-3">For Property Managers</p>
                <p className="text-3xl font-black text-[#f59e0b] mb-4">£14.99</p>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">Step-by-step guide to selecting the right commercial pest control provider for multi-unit properties and commercial portfolios.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg mt-0.5">•</span>
                  <p className="text-gray-700">Certification requirements to look for</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg mt-0.5">•</span>
                  <p className="text-gray-700">Contract evaluation frameworks</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg mt-0.5">•</span>
                  <p className="text-gray-700">RFP templates and checklists</p>
                </div>
              </div>
              <Link href="https://pestproindex.lemonsqueezy.com/checkout/buy/3c02f0c2-baa2-4237-b2ff-e5e70d77fd4b" className="block text-center px-6 py-3 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-blue-900 transition-all shadow-md">
                Get the Guide - £14.99
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#f59e0b]">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">Compliance Workbook</h3>
                <p className="text-sm font-semibold text-[#2563eb] mb-3">For Small Business Owners</p>
                <p className="text-3xl font-black text-[#f59e0b] mb-4">£29.99</p>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">Essential compliance requirements for commercial pest control in London.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg mt-0.5">•</span>
                  <p className="text-gray-700">Regulatory compliance checklist</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg mt-0.5">•</span>
                  <p className="text-gray-700">Documentation templates</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg mt-0.5">•</span>
                  <p className="text-gray-700">Audit preparation guide</p>
                </div>
              </div>
              <Link href="https://pestproindex.lemonsqueezy.com/checkout/buy/1b7d0369-1546-49b3-b8c9-88dd4db7e716" className="block text-center px-6 py-3 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-blue-900 transition-all shadow-md">
                Get the Workbook - £29.99
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE HUB SECTION */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 border-t-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg border-l-4 border-blue-600 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Compliance Headaches? We've Got You Covered</h2>
              <p className="text-lg text-gray-600 mb-4">Finding the right pest control provider is the easy part. Proving compliance to regulators? That's where businesses struggle.</p>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Introducing PestPro Audit and Regulatory Compliance Hub</h3>
              <p className="text-xl font-bold text-gray-600 mb-4">(Coming Soon)</p>
              <p className="text-gray-700 mb-6">Our comprehensive Audit and Regulatory Compliance Hub designed specifically for business owners to help manage their pest control records.</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Upload once, export forever</h3>
                  <p className="text-sm text-gray-600">Submit your pest control records to one central portal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Regulatory-ready reports in seconds</h3>
                  <p className="text-sm text-gray-600">Generate audit-compliant documentation with a single click</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">EHO visit tomorrow?</h3>
                  <p className="text-sm text-gray-600">No panic. Everything inspectors need, instantly available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Track contracts, certificates, and treatments</h3>
                  <p className="text-sm text-gray-600">Never scramble for paperwork again</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Built for multi-site operations</h3>
                  <p className="text-sm text-gray-600">Manage compliance across all your locations from one dashboard</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded">
              <p className="text-gray-900 font-semibold">Stop drowning in admin. Start focusing on your business.</p>
            </div>

            <div className="text-center">
              <a href="mailto:pestproindex@zohomail.eu?subject=Compliance%20Hub%20Waitlist" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE RESOURCES QUICK LINKS */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
            <div className="mb-10">
              <div className="relative inline-block">
                <h3 className="text-3xl font-black text-gray-900 mb-2">📋 Compliance Resources</h3>
                <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-16 mt-2"></div>
              </div>
              <p className="text-gray-700 mt-4">Helpful guides and tools for managing pest control compliance in your business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
              <a href="https://www.haccp-international.com/" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">HACCP International</h4>
                <p className="text-xs text-gray-600">Global food safety certification guidance</p>
              </a>
              <a href="https://fooddocs.com/" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">FoodDocs HACCP</h4>
                <p className="text-xs text-gray-600">Automates monitoring and documentation</p>
              </a>
              <a href="https://www.rentokil.com/food-safety/" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">Rentokil Guides</h4>
                <p className="text-xs text-gray-600">Comprehensive compliance guidance</p>
              </a>
              <a href="https://octopushaccp.com/pest-control-plan/" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">Octopus HACCP</h4>
                <p className="text-xs text-gray-600">Free pest control plan template</p>
              </a>
              <a href="https://www.pestech.com/sqf-audit-pest-control/" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">Pestech SQF</h4>
                <p className="text-xs text-gray-600">Preparing for food safety audits</p>
              </a>
            </div>

            <div className="text-center pt-4 border-t border-gray-100">
              <Link href="/resources" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200">See all resources →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FULL PROVIDER LIST WITH FILTERS */}
      <section className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Full List of Commercial Providers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">All {providers.length} commercial providers with advanced filtering</p>
          </div>

          {/* SearchBar */}
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} onClear={handleClearSearch} allProviders={providers} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* FILTER SIDEBAR */}
            <aside className="w-full lg:w-80 lg:flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:sticky lg:top-24 border border-gray-100 max-h-[calc(100vh-7rem)] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                  {selectedFilters.size > 0 && (
                    <button onClick={clearAllFilters} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Clear All
                    </button>
                  )}
                </div>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-black text-blue-900">{filteredProvidersMemo.length}</p>
                  <p className="text-sm text-blue-700">Providers Found</p>
                </div>

                {/* Certifications */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h4>
                  <div className="space-y-2">
                    {filterCategories.certifications.map(filter => (
                      <label key={filter.key} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <input type="checkbox" checked={selectedFilters.has(filter.key)} onChange={() => handleFilterChange(filter.key)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 flex-1">{filter.label}</span>
                        <span className="text-xs text-gray-500 font-medium">({filterCounts[filter.key] || 0})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Methods */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Methods</h4>
                  <div className="space-y-2">
                    {filterCategories.methods.map(filter => (
                      <label key={filter.key} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <input type="checkbox" checked={selectedFilters.has(filter.key)} onChange={() => handleFilterChange(filter.key)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 flex-1">{filter.label}</span>
                        <span className="text-xs text-gray-500 font-medium">({filterCounts[filter.key] || 0})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Contracts */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Contracts</h4>
                  <div className="space-y-2">
                    {filterCategories.contracts.map(filter => (
                      <label key={filter.key} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <input type="checkbox" checked={selectedFilters.has(filter.key)} onChange={() => handleFilterChange(filter.key)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 flex-1">{filter.label}</span>
                        <span className="text-xs text-gray-500 font-medium">({filterCounts[filter.key] || 0})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sectors */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Sectors</h4>
                  <div className="space-y-2">
                    {filterCategories.sectors.map(filter => (
                      <label key={filter.key} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <input type="checkbox" checked={selectedFilters.has(filter.key)} onChange={() => handleFilterChange(filter.key)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 flex-1">{filter.label}</span>
                        <span className="text-xs text-gray-500 font-medium">({filterCounts[filter.key] || 0})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Capabilities</h4>
                  <div className="space-y-2">
                    {filterCategories.capabilities.map(filter => (
                      <label key={filter.key} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <input type="checkbox" checked={selectedFilters.has(filter.key)} onChange={() => handleFilterChange(filter.key)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 flex-1">{filter.label}</span>
                        <span className="text-xs text-gray-500 font-medium">({filterCounts[filter.key] || 0})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Credentials */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Credentials</h4>
                  <div className="space-y-2">
                    {filterCategories.credentials.map(filter => (
                      <label key={filter.key} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <input type="checkbox" checked={selectedFilters.has(filter.key)} onChange={() => handleFilterChange(filter.key)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 flex-1">{filter.label}</span>
                        <span className="text-xs text-gray-500 font-medium">({filterCounts[filter.key] || 0})</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1">
              {filteredProvidersMemo.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No providers match your filters. Try adjusting your selection.</p>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {filteredProvidersMemo.map(provider => (
                      <div key={provider.canonical_id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 border-blue-600 p-6">
                        <h3 className="text-2xl font-black text-gray-900 mb-2">{provider.name}</h3>

                        {provider.google_review_count > 0 && (
                          <div className="flex items-center gap-3 mb-3">
                            {renderStars(provider.google_rating)}
                            <span className="text-sm font-semibold text-gray-600">{provider.google_rating?.toFixed(1)} ({provider.google_review_count} {provider.google_review_count === 1 ? 'review' : 'reviews'})</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {provider.phone && (
                            <div className="flex items-center gap-2">
                              <Phone size={16} className="text-blue-600" />
                              <span className="text-sm text-gray-700">{provider.phone}</span>
                            </div>
                          )}
                          {(provider.postcode || provider.address) && (
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-blue-600" />
                              <span className="text-sm text-gray-700">{provider.postcode ? `${provider.address || ''}, ${provider.postcode}`.trim() : provider.address}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {provider.bpca_member && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                              <ShieldCheck size={14} /> BPCA Member
                            </span>
                          )}
                          {provider.npta_member && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                              <Award size={14} /> NPTA Member
                            </span>
                          )}
                          {provider.basis_prompt && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full">
                              <CheckCircle2 size={14} /> BASIS PROMPT
                            </span>
                          )}
                        </div>

                        {provider.website && (
                          <Link href={provider.website} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition text-sm">
                            Visit Website →
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="relative bg-white py-16 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our methodology for finding the right commercial provider</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border-t-4 border-[#1e3a8a]">
              <div className="text-5xl font-black text-[#1e3a8a] mb-4">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Independent Research</h3>
              <p className="text-gray-600">We independently verify provider certifications, capabilities, and credentials from official sources. No provider pays for inclusion.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border-t-4 border-[#1e3a8a]">
              <div className="text-5xl font-black text-[#1e3a8a] mb-4">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transparent Data</h3>
              <p className="text-gray-600">All provider information is displayed transparently. You see exactly what certifications, sectors, and capabilities each provider has.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border-t-4 border-[#1e3a8a]">
              <div className="text-5xl font-black text-[#1e3a8a] mb-4">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Decision</h3>
              <p className="text-gray-600">You decide which provider is right for your business. Filter by your specific needs and contact providers directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS PAGE LINK */}
      <section className="relative bg-gray-50 py-12 border-t-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Looking for Product Recommendations?</h3>
          <p className="text-gray-600 mb-6">Visit our Products page to see the most popular pest control products available today, organized by pest type. Includes user ratings and direct purchase links.</p>
          <Link href="/products" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg">
            View Products Page
            <span>→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
