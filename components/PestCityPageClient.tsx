'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase';
import Navigation from '@/components/Navigation';
import { LOCATIONS, PESTS } from '@/app/pest-control/pest-city-config';
import type { LocationConfig, PestConfig } from '@/app/pest-control/pest-city-config';

const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

interface Provider {
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
}

export default function PestCityPageClient({ city, pest }: Props) {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const supabase = createClient();

        // First try: filter by region AND pest type
        const { data, error } = await supabase
          .from('Providers')
          .select('*')
          .eq('active', true)
          .eq('business_residential', true)
          .eq(pest.filterColumn, true)
          .or(`regions.cs.["${city.region}"]`);

        if (error) throw error;

        if (data && data.length > 0) {
          const processed = (data || []).map(p => ({
            ...p,
            postcode: p.postcode || extractPostcode(p.address),
          }));
          const sorted = processed.sort((a: any, b: any) => {
            const ratingA = a.google_rating || 0;
            const ratingB = b.google_rating || 0;
            if (ratingB !== ratingA) return ratingB - ratingA;
            return (b.google_review_count || 0) - (a.google_review_count || 0);
          });
          setProviders(sorted);
        } else {
          // Fallback: show all residential providers for this city
          const { data: fallbackData, error: fallbackError } = await supabase
            .from('Providers')
            .select('*')
            .eq('active', true)
            .eq('business_residential', true)
            .or(`regions.cs.["${city.region}"]`);

          if (fallbackError) throw fallbackError;

          const processed = (fallbackData || []).map(p => ({
            ...p,
            postcode: p.postcode || extractPostcode(p.address),
          }));
          const sorted = processed.sort((a: any, b: any) => {
            const ratingA = a.google_rating || 0;
            const ratingB = b.google_rating || 0;
            if (ratingB !== ratingA) return ratingB - ratingA;
            return (b.google_review_count || 0) - (a.google_review_count || 0);
          });
          setProviders(sorted);
          setIsFallback(true);
        }
      } catch (error) {
        console.error('Error fetching providers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [city.region, pest.filterColumn]);

  const introText = pest.seoIntro.replace(/\{city\}/g, city.name);
  const otherPests = PESTS.filter(p => p.slug !== pest.slug);
  const otherCities = LOCATIONS.filter(l => l.slug !== city.slug);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050812] via-[#1e3a8a] to-[#050812]"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 max-w-3xl drop-shadow-lg" style={{ textShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
            {pest.name} Control in {city.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 max-w-2xl drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Find Verified {pest.name} Specialists
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold max-w-2xl drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            No lead fees &middot; No commissions &middot; Free to contact
          </p>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white border-b-2 border-blue-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{introText}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Signs */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-amber-500">
              <h2 className="text-xl font-black text-gray-900 mb-3">Signs of {pest.namePlural}</h2>
              <p className="text-gray-700 leading-relaxed text-sm">{pest.signs}</p>
            </div>

            {/* Risks */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500">
              <h2 className="text-xl font-black text-gray-900 mb-3">Health &amp; Property Risks</h2>
              <p className="text-gray-700 leading-relaxed text-sm">{pest.risks}</p>
            </div>
          </div>

          {/* Typical Cost */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">Typical Cost of {pest.name} Control in {city.name}</h2>
                <p className="text-gray-700">{pest.typicalCost}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVIDER CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {pest.name} Control Providers in {city.name}
            </h2>
            {isFallback ? (
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 mb-4">
                  Showing all {providers.length} residential pest control providers in {city.name}
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left">
                  <p className="text-blue-800 text-sm">
                    We haven&apos;t yet confirmed which {city.name} providers specialise in {pest.namePlural.toLowerCase()}, but all of the providers below serve {city.name} and can help with most pest issues. Contact them directly to discuss your {pest.namePlural.toLowerCase()} problem.
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {providers.length} verified {pest.description} serving {city.name}
              </p>
            )}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading providers...</p>
            </div>
          ) : providers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No providers found for this area. Please try again later.</p>
              <Link href={`/pest-control/${city.slug}`} className="text-blue-600 hover:underline font-semibold">
                View all {city.name} providers &rarr;
              </Link>
            </div>
          ) : (
            <>
              <p className="text-gray-600 font-medium mb-8">Showing {providers.length} providers sorted by rating</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {providers.map(provider => {
                  const isTrophy = provider.google_rating && provider.google_rating >= 4.5 &&
                    provider.google_review_count && provider.google_review_count >= 30;
                  const borderClass = isTrophy ? 'border-l-4 border-amber-500' : 'border-l-4 border-[#1e3a8a]';

                  return (
                    <div key={provider.canonical_id} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 ${borderClass}`}>
                      {isTrophy && <div className="text-2xl mb-2">🏆</div>}
                      <h3 className="font-bold text-base text-gray-900 mb-2 leading-tight line-clamp-2">
                        <Link href={`/provider/${provider.slug}`} className="text-blue-600 hover:underline">
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
                      {/* Badges */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {provider.service_bpca_certified && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded">BPCA</span>
                        )}
                        {provider.service_emergency_24_7 && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-800 text-xs font-semibold rounded">24/7</span>
                        )}
                        {provider.service_eco_friendly && (
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded">Eco</span>
                        )}
                      </div>
                      <div className="space-y-2">
                        {provider.phone && (
                          isMobile ? (
                            <a href={`tel:${provider.phone}`} className="block text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg whitespace-nowrap overflow-hidden text-ellipsis">
                              📞 {provider.phone}
                            </a>
                          ) : (
                            <span className="block text-center px-3 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg cursor-default whitespace-nowrap overflow-hidden text-ellipsis">
                              📞 {provider.phone}
                            </span>
                          )
                        )}
                        {provider.website && (
                          <a href={provider.website?.startsWith('http') ? provider.website : `https://${provider.website}`} target="_blank" rel="noopener noreferrer" className="block text-center px-3 py-2 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-sm font-semibold rounded-lg">
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
        </div>
      </section>

      {/* WHAT TO DO */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white border-t-2 border-blue-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-6">What to Do If You Have {pest.namePlural}</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl mt-0.5">📖</span>
              <p className="text-gray-700">
                Read our complete guide:{' '}
                <Link href={pest.guideUrl} className="text-blue-600 hover:underline font-semibold">
                  How to Get Rid of {pest.namePlural} &rarr;
                </Link>
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl mt-0.5">🛒</span>
              <p className="text-gray-700">
                See our top-rated products:{' '}
                <Link href={pest.reviewUrl} className="text-blue-600 hover:underline font-semibold">
                  Best {pest.name} Products UK 2026 &rarr;
                </Link>
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl mt-0.5">📞</span>
              <p className="text-gray-700">
                Contact a provider above for a quote &mdash; all listings on PestPro Index are free to contact with no lead fees.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Other pest services in this city */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Other Pest Control Services in {city.name}</h3>
            <div className="flex flex-wrap gap-2">
              {otherPests.map(p => (
                <Link
                  key={p.slug}
                  href={`/pest-control/${city.slug}/${p.slug}`}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-colors font-medium"
                >
                  {p.name} Control
                </Link>
              ))}
            </div>
          </div>

          {/* Same pest in other cities */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{pest.name} Control in Other Cities</h3>
            <div className="flex flex-wrap gap-2">
              {otherCities.map(l => (
                <Link
                  key={l.slug}
                  href={`/pest-control/${l.slug}/${pest.slug}`}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-colors font-medium"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to city hub */}
          <div className="text-center pt-4 border-t border-gray-200">
            <Link href={`/${city.slug}/residential`} className="text-blue-600 hover:underline font-semibold">
              &larr; Back to {city.name} Pest Control Directory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
