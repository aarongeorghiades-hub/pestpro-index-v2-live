import { createClient } from '@/utils/supabase';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Phone, Mail, Globe, MapPin, Star, Award, CheckCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

// Slug generation function
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

// Fetch provider by matching slug against all providers
async function getProvider(slug: string) {
  try {
    const supabase = createClient();

    // First, try to fetch all providers (this is necessary because we need to match by slug)
    const { data: providers, error } = await supabase
      .from('Providers')
      .select('id, name, website, google_rating, google_review_count, phone, email, address, postcode, business_residential, commercial, bpca_member, npta_member, basis_prompt, cepa_certified, chas, emergency_services_24_7, technician_count_50_plus, rats, mice, wasps, bedbugs, cockroaches, ants, fleas, moths, pigeons, squirrels, foxes, badgers, rabbits, hedgehogs, moles, birds_general, pest_proofing, trapping, fumigation, thermal_imaging, uv_detection, thermal_treatment, heat_treatment, cryonite, exclusion_work, garden_treatments, drain_cleaning, odour_removal, decontamination, deep_clean, bio_hazard, crime_scene, hoarding, animal_removal, bird_control, bird_netting, bird_spikes, bird_wire, bird_gel, bird_netting_commercial, bird_proofing, bird_removal, bird_deterrent, bird_exclusion, bird_trapping, bird_relocation, bird_prevention, bird_management, bird_control_services, hospitality, healthcare, education, retail, warehousing_logistics');

    if (error || !providers) {
      console.error('[Provider Page] Supabase error:', error?.message);
      return null;
    }

    // Find provider by matching slug
    const found = providers.find(p => generateSlug(p.name) === slug);
    return found || null;
  } catch (err) {
    console.error('[Provider Page] Error fetching provider:', err);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const provider = await getProvider(params.slug);

  if (!provider) {
    return { title: 'Provider Not Found | PestPro Index' };
  }

  const ratingText = provider.google_rating ? `Rated ${provider.google_rating}/5` : '';
  const reviewText = provider.google_review_count ? `(${provider.google_review_count} reviews)` : '';
  const serviceType = provider.business_residential && provider.commercial
    ? 'Residential & Commercial'
    : provider.commercial
    ? 'Commercial'
    : 'Residential';

  return {
    title: `${provider.name} | ${serviceType} Pest Control London`,
    description: `${provider.name} - ${serviceType} pest control in London. ${ratingText} ${reviewText}. View certifications, services, and contact details on PestPro Index.`.trim(),
  };
}



export default async function ProviderPage({ params }: { params: { slug: string } }) {
  const provider = await getProvider(params.slug);

  if (!provider) {
    notFound();
  }

  const serviceType = provider.business_residential && provider.commercial
    ? 'Residential & Commercial'
    : provider.commercial
    ? 'Commercial'
    : 'Residential';

  // Pest types mapping
  const pestTypes = [
    { key: 'rats', label: 'Rats' },
    { key: 'mice', label: 'Mice' },
    { key: 'wasps', label: 'Wasps' },
    { key: 'bedbugs', label: 'Bed Bugs' },
    { key: 'cockroaches', label: 'Cockroaches' },
    { key: 'ants', label: 'Ants' },
    { key: 'fleas', label: 'Fleas' },
    { key: 'moths', label: 'Moths' },
    { key: 'flies', label: 'Flies' },
    { key: 'birds', label: 'Birds' },
    { key: 'foxes', label: 'Foxes' },
    { key: 'squirrels', label: 'Squirrels' },
    { key: 'moles', label: 'Moles' },
    { key: 'rabbits', label: 'Rabbits' },
    { key: 'beetles', label: 'Beetles' },
    { key: 'spiders', label: 'Spiders' },
    { key: 'silverfish', label: 'Silverfish' },
    { key: 'woodworm', label: 'Woodworm' },
  ];

  const certifications = [
    { key: 'bpca_member', label: 'BPCA Member' },
    { key: 'npta_member', label: 'NPTA Member' },
    { key: 'rsph_qualified', label: 'RSPH Qualified' },
    { key: 'basis_prompt', label: 'BASIS PROMPT Registered' },
    { key: 'cepa_certified', label: 'CEPA Certified' },
    { key: 'iso_certified', label: 'ISO Certified' },
    { key: 'safe_contractor', label: 'SafeContractor Approved' },
    { key: 'chas_accredited', label: 'CHAS Accredited' },
    { key: 'which_trusted_trader', label: 'Which? Trusted Trader' },
    { key: 'checkatrade_member', label: 'Checkatrade Member' },
    { key: 'trustmark', label: 'TrustMark Registered' },
  ];

  const services = [
    { key: 'emergency_service', label: 'Emergency Callout' },
    { key: 'twenty_four_seven', label: '24/7 Service' },
    { key: 'free_survey', label: 'Free Survey' },
    { key: 'free_quote', label: 'Free Quote' },
    { key: 'contracts_available', label: 'Contracts Available' },
    { key: 'one_off_treatments', label: 'One-Off Treatments' },
    { key: 'preventive_services', label: 'Preventive Services' },
  ];

  const commercialSectors = [
    { key: 'hospitality', label: 'Hospitality' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'retail', label: 'Retail' },
    { key: 'education', label: 'Education' },
    { key: 'offices', label: 'Offices' },
    { key: 'warehouses', label: 'Warehouses' },
    { key: 'food_processing', label: 'Food Processing' },
    { key: 'restaurants', label: 'Restaurants' },
    { key: 'hotels', label: 'Hotels' },
    { key: 'property_management', label: 'Property Management' },
  ];

  const activePestTypes = pestTypes.filter(p => provider[p.key as keyof typeof provider]);
  const activeCertifications = certifications.filter(c => provider[c.key as keyof typeof provider]);
  const activeServices = services.filter(s => provider[s.key as keyof typeof provider]);
  const activeSectors = commercialSectors.filter(s => provider[s.key as keyof typeof provider]);

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': provider.name,
    'url': `https://pestproindex.com/provider/${params.slug}`,
    'telephone': provider.phone || undefined,
    'email': provider.email || undefined,
    'address': {
      '@type': 'PostalAddress',
      'postalCode': provider.postcode || undefined,
    },
    ...(provider.google_rating && {
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': provider.google_rating,
        'reviewCount': provider.google_review_count || 0,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#050812] via-[#1e3a8a] to-[#050812] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg">
            PestPro Index
          </Link>
          <div className="flex gap-4">
            {provider.business_residential && (
              <Link href="/residential" className="text-white hover:text-blue-200 transition">
                ← Back to Residential
              </Link>
            )}
            {provider.commercial && (
              <Link href="/commercial" className="text-white hover:text-blue-200 transition">
                ← Back to Commercial
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{provider.name}</h1>

          <div className="flex flex-wrap gap-6 mb-6">
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
                <span className="text-lg font-semibold text-gray-700">
                  {provider.google_rating}
                  {provider.google_review_count && ` (${provider.google_review_count} reviews)`}
                </span>
              </div>
            )}

            {provider.postcode && (
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={20} className="text-blue-600" />
                <span className="text-lg">{provider.postcode}</span>
              </div>
            )}
          </div>

          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-6">
            {serviceType}
          </div>
        </div>

        {/* Contact Details */}
        {(provider.phone || provider.email || provider.website) && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
            <div className="space-y-4">
              {provider.phone && (
                <div className="flex items-center gap-4">
                  <Phone size={24} className="text-blue-600" />
                  <a href={`tel:${provider.phone}`} className="text-lg text-blue-600 hover:underline">
                    {provider.phone}
                  </a>
                </div>
              )}
              {provider.email && (
                <div className="flex items-center gap-4">
                  <Mail size={24} className="text-blue-600" />
                  <a href={`mailto:${provider.email}`} className="text-lg text-blue-600 hover:underline">
                    {provider.email}
                  </a>
                </div>
              )}
              {provider.website && (
                <div className="flex items-center gap-4">
                  <Globe size={24} className="text-blue-600" />
                  <a href={provider.website} target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:underline">
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Certifications */}
        {activeCertifications.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Memberships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCertifications.map(cert => (
                <div key={cert.key} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pest Types */}
        {activePestTypes.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pest Types Covered</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activePestTypes.map(pest => (
                <div key={pest.key} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{pest.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services */}
        {activeServices.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services & Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeServices.map(service => (
                <div key={service.key} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{service.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Commercial Sectors */}
        {provider.commercial && activeSectors.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Commercial Sectors</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeSectors.map(sector => (
                <div key={sector.key} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700">{sector.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 PestPro Index. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
