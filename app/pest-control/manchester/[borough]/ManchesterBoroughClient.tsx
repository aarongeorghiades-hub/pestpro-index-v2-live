'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase';
import Navigation from '@/components/Navigation';
import type { ManchesterBoroughData } from '../manchester-boroughs';

const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[&]/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

interface Provider {
  canonical_id?: number;
  name: string;
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

export default function ManchesterBoroughClient({ borough }: { borough: ManchesterBoroughData }) {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
        const { data, error } = await supabase
          .from('Providers')
          .select('*')
          .or('regions.cs.["manchester"]');

        if (error) throw error;
        // Extract postcodes from address when postcode column is null, then sort by rating
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
      } catch (error) {
        console.error('Error fetching providers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050812] via-[#1e3a8a] to-[#050812]"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 max-w-3xl drop-shadow-lg" style={{ textShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
            Pest Control in {borough.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 max-w-2xl drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            {providers.length} Verified Providers Serving {borough.name}
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold max-w-2xl drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Greater Manchester &middot; No lead fees &middot; No commissions
          </p>
        </div>
      </section>

      {/* INTRO & COMMON PESTS */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white border-b-2 border-blue-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {borough.intro}
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#1e3a8a]">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Common Pests in {borough.name}</h2>
            <p className="text-gray-700 leading-relaxed">{borough.commonPests}</p>
          </div>
        </div>
      </section>

      {/* PROVIDER CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Pest Control Providers Serving {borough.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All {providers.length} providers cover the Greater Manchester area including {borough.name}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading providers...</p>
            </div>
          ) : providers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No providers found. Please try again later.</p>
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

      {/* BACK LINK & CROSS-LINKING */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-700 mb-4">
            <Link href="/manchester/residential" className="text-blue-600 hover:underline font-semibold">
              ← Back to Manchester Residential
            </Link>
            {' | '}
            <Link href="/manchester/commercial" className="text-blue-600 hover:underline font-semibold">
              Manchester Commercial
            </Link>
            {' | '}
            <Link href="/pest-control/north-west" className="text-blue-600 hover:underline font-semibold">
              North West Region
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
