'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/utils/supabase';
import { MapPin, Phone, Mail, Globe, Star, Shield, Award, Briefcase, Home as HomeIcon, AlertCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Metadata } from 'next';
import { generateProfileText, generateMetaDescription } from '@/lib/generateProfileText';

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

export default function ProviderPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [provider, setProvider] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const supabase = createClient();
        const { data: providers, error } = await supabase
          .from('Providers')
          .select('*');

        if (error || !providers) {
          console.error('Supabase error:', error);
          setNotFound(true);
          setLoading(false);
          return;
        }

        const found = providers.find(p => generateSlug(p.name) === slug);

        if (!found) {
          setNotFound(true);
        } else {
          setProvider(found);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching provider:', err);
        setNotFound(true);
        setLoading(false);
      }
    };

    fetchProvider();
  }, [slug]);

  // JSON-LD structured data
  useEffect(() => {
    if (provider) {
      const jsonLd: any = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: provider.name,
        description: provider.profile_text || `${provider.name} is a pest control provider listed on PestPro Index.`,
        url: provider.website ? (provider.website.startsWith('http') ? provider.website : `https://${provider.website}`) : undefined,
        telephone: provider.phone || undefined,
        email: provider.email || undefined,
        address: {
          '@type': 'PostalAddress',
          postalCode: provider.postcode || undefined,
          addressLocality: provider.regions?.includes('birmingham') ? 'Birmingham' : 'London',
          addressCountry: 'GB',
        },
      };

      if (provider.google_rating) {
        jsonLd.aggregateRating = {
          '@type': 'AggregateRating',
          ratingValue: provider.google_rating,
          reviewCount: provider.google_review_count || 1,
          bestRating: 5,
        };
      }

      Object.keys(jsonLd).forEach(key => {
        if (jsonLd[key] === undefined) delete jsonLd[key];
      });
      if (jsonLd.address) {
        Object.keys(jsonLd.address).forEach(key => {
          if (jsonLd.address[key] === undefined) delete jsonLd.address[key];
        });
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [provider]);

  // Dynamic title and meta description
  useEffect(() => {
    if (provider && provider.name) {
      document.title = `${provider.name} | Pest Control Provider | PestPro Index`;
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      
      const rating = provider.google_rating ? ` Rated ${provider.google_rating}/5.` : '';
      const reviews = provider.google_review_count ? ` ${provider.google_review_count} reviews.` : '';
      const postcode = provider.postcode ? ` Serving ${provider.postcode} area.` : '';
      
      metaDesc.setAttribute('content', 
        `${provider.name} - pest control provider listed on PestPro Index.${rating}${reviews}${postcode} No lead fees, no commissions.`
      );
      
      // Update canonical tag
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://pestproindex.com/provider/${slug}`);
    }
  }, [provider, slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading provider details...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-white">
      <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <AlertCircle size={48} className="mx-auto mb-4 text-gray-400" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Provider Not Found</h1>
          <p className="text-gray-600 mb-8">The provider you're looking for doesn't exist in our directory.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/residential" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              ← Back to Residential Directory
            </Link>
            <Link href="/commercial" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              ← Back to Commercial Directory
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Generate JSON-LD for this provider
  const jsonLdData: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: provider.name,
    description: provider.profile_text || generateProfileText(provider),
    url: provider.website ? (provider.website.startsWith('http') ? provider.website : `https://${provider.website}`) : undefined,
    telephone: provider.phone || undefined,
    email: provider.email || undefined,
    address: {
      '@type': 'PostalAddress',
      postalCode: provider.postcode || undefined,
      addressLocality: provider.regions?.includes('birmingham') ? 'Birmingham' : 'London',
      addressCountry: 'GB',
    },
  };

  if (provider.google_rating) {
    jsonLdData.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: provider.google_rating,
      reviewCount: provider.google_review_count || 1,
      bestRating: 5,
    };
  }

  // Remove undefined values
  Object.keys(jsonLdData).forEach(key => {
    if (jsonLdData[key] === undefined) delete jsonLdData[key];
  });
  if (jsonLdData.address) {
    Object.keys(jsonLdData.address).forEach(key => {
      if (jsonLdData.address[key] === undefined) delete jsonLdData.address[key];
    });
  }

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* NAVIGATION */}
      <Navigation />

      {/* PROVIDER HEADER */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href={provider.regions?.includes('birmingham') ? '/birmingham/residential' : '/residential'} className="text-blue-600 hover:text-blue-800 font-semibold mb-4 inline-block">
            ← Back to {provider.regions?.includes('birmingham') ? 'Birmingham Residential' : 'London Residential'}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{provider.name}</h1>
          {provider.google_rating && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(provider.google_rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">{provider.google_rating}</span>
              {provider.google_review_count && (
                <span className="text-gray-600">({provider.google_review_count} reviews)</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* PROFILE TEXT (AUTO-GENERATED IF NULL) */}
        {(provider.profile_text || generateProfileText(provider)) && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              {provider.profile_text || generateProfileText(provider)}
            </p>
          </div>
        )}

        {/* CONTACT DETAILS */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
          <div className="space-y-4">
            {provider.postcode && (
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-lg text-gray-900">{provider.postcode}</p>
                </div>
              </div>
            )}
            {provider.phone && (
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href={`tel:${provider.phone}`} className="text-lg text-blue-600 hover:underline">{provider.phone}</a>
                </div>
              </div>
            )}
            {provider.email && (
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href={`mailto:${provider.email}`} className="text-lg text-blue-600 hover:underline">{provider.email}</a>
                </div>
              </div>
            )}
            {provider.website && (
              <div className="flex items-start gap-3">
                <Globe size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Website</p>
                  <a href={provider.website?.startsWith('http') ? provider.website : `https://${provider.website}`} target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:underline">Visit Website →</a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        {(provider.bpca_member || provider.npta_member || provider.cepa_certified || provider.chas) && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award size={24} className="text-blue-600" />
              Certifications & Memberships
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {provider.bpca_member && <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center"><p className="font-semibold text-blue-900">BPCA Member</p></div>}
              {provider.npta_member && <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center"><p className="font-semibold text-blue-900">NPTA Member</p></div>}
              {provider.cepa_certified && <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center"><p className="font-semibold text-blue-900">CEPA Certified</p></div>}
              {provider.chas && <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center"><p className="font-semibold text-blue-900">CHAS Accredited</p></div>}
            </div>
          </div>
        )}

        {/* PEST TYPES */}
        {(provider.rats || provider.mice || provider.wasps || provider.bedbugs || provider.cockroaches || provider.ants || provider.fleas || provider.moths || provider.pigeons || provider.squirrels || provider.foxes || provider.badgers || provider.rabbits || provider.hedgehogs || provider.moles || provider.birds_general) && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pest Types Handled</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {provider.rats && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Rats</div>}
              {provider.mice && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Mice</div>}
              {provider.wasps && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Wasps</div>}
              {provider.bedbugs && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Bed Bugs</div>}
              {provider.cockroaches && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Cockroaches</div>}
              {provider.ants && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Ants</div>}
              {provider.fleas && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Fleas</div>}
              {provider.moths && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Moths</div>}
              {provider.pigeons && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Pigeons</div>}
              {provider.squirrels && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Squirrels</div>}
              {provider.foxes && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Foxes</div>}
              {provider.badgers && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Badgers</div>}
              {provider.rabbits && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Rabbits</div>}
              {provider.hedgehogs && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Hedgehogs</div>}
              {provider.moles && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Moles</div>}
              {provider.birds_general && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Birds</div>}
            </div>
          </div>
        )}

        {/* SERVICES */}
        {(provider.pest_proofing || provider.trapping || provider.fumigation || provider.thermal_imaging || provider.thermal_treatment || provider.exclusion_work || provider.garden_treatments || provider.drain_cleaning) && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Offered</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {provider.pest_proofing && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Pest Proofing</div>}
              {provider.trapping && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Trapping</div>}
              {provider.fumigation && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Fumigation</div>}
              {provider.thermal_imaging && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Thermal Imaging</div>}
              {provider.thermal_treatment && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Thermal Treatment</div>}
              {provider.exclusion_work && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Exclusion Work</div>}
              {provider.garden_treatments && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Garden Treatments</div>}
              {provider.drain_cleaning && <div className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">Drain Cleaning</div>}
            </div>
          </div>
        )}

        {/* BUSINESS TYPES */}
        {(provider.business_residential || provider.commercial) && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Types Served</h2>
            <div className="grid grid-cols-2 gap-4">
              {provider.business_residential && (
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded p-3">
                  <HomeIcon size={20} className="text-green-600" />
                  <span className="font-medium text-green-900">Residential</span>
                </div>
              )}
              {provider.commercial && (
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded p-3">
                  <Briefcase size={20} className="text-green-600" />
                  <span className="font-medium text-green-900">Commercial</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* BACK LINKS */}
        <div className="flex gap-4 mt-12">
          <Link href="/residential" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            ← Back to Residential
          </Link>
          <Link href="/commercial" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            ← Back to Commercial
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-12 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">PestPro Index</h4>
              <p className="text-sm">London's neutral pest control directory</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Disclaimer</h4>
              <p className="text-sm">We do not judge outcomes, we display available evidence. No endorsements or guarantees.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
