import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Star, Award, Briefcase, Home as HomeIcon } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { generateProfileText } from '@/lib/generateProfileText';
import { activePests } from '@/lib/pests';
import { externalHref, EXTERNAL_LINK_REL } from '@/lib/externalUrl';

// Server-rendered provider detail view. The provider is fetched in the page's
// Server Component and passed in, so the full content is present in the initial
// HTML (no client-side fetch, no "Loading provider details…" state) — this is
// what stops valid provider pages reading as soft 404s.

// Pest badges come from lib/pests.ts — the same list the description generator
// reads, so the badges and the prose can no longer disagree. Service and
// certification badges are local because nothing else consumes them.
//
// Badge definitions are keyed by the ACTUAL "Providers" column names. These
// were previously read without the pest_ prefix (provider.rats rather than
// provider.pest_rats), so every badge resolved to undefined and no pest or
// service section ever rendered. Keys are checked against the live schema —
// do not add one without a backing column.
const SERVICE_BADGES: { column: string; label: string }[] = [
  { column: 'proofing_services', label: 'Pest Proofing' },
  { column: 'fumigation', label: 'Fumigation' },
  { column: 'heat_treatment', label: 'Heat Treatment' },
  { column: 'detection_dogs', label: 'Detection Dogs' },
  { column: 'falconry_bird_control', label: 'Falconry Bird Control' },
  { column: 'specialist_bird_control', label: 'Specialist Bird Control' },
  { column: 'specialist_fly_killers', label: 'Fly Killer Systems' },
  { column: 'high_rise_rope_access', label: 'High-Rise Rope Access' },
  { column: 'humane_non_lethal_methods', label: 'Humane / Non-Lethal Methods' },
  { column: 'eco_friendly_methods', label: 'Eco-Friendly Methods' },
  { column: 'emergency_24_7', label: '24/7 Emergency Callout' },
  { column: 'free_surveys', label: 'Free Surveys' },
];

const CERTIFICATION_BADGES: { column: string; label: string }[] = [
  { column: 'bpca_member', label: 'BPCA Member' },
  { column: 'npta_member', label: 'NPTA Member' },
  { column: 'cepa_certified', label: 'CEPA Certified' },
  { column: 'chas_accredited', label: 'CHAS Accredited' },
  { column: 'basis_prompt', label: 'BASIS PROMPT' },
  { column: 'rsph_level_2', label: 'RSPH Level 2' },
  { column: 'safe_contractor', label: 'SafeContractor' },
  { column: 'trustmark', label: 'TrustMark' },
];

// Only ever badge an explicit true. NULL (unknown — the provider was never
// researched for this pest) and false both render as absent, so an unresearched
// provider is never presented as actively not offering something.
function activeBadges(
  provider: Record<string, unknown>,
  badges: { column: string; label: string }[]
) {
  return badges.filter((badge) => provider[badge.column] === true);
}

export default function ProviderDetails({ provider }: { provider: any }) {
  const pestBadges = activePests(provider);
  const serviceBadges = activeBadges(provider, SERVICE_BADGES);
  const certificationBadges = activeBadges(provider, CERTIFICATION_BADGES);
  const citySlug = provider.regions?.[0] || 'london';
  const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  const residentialLink = citySlug === 'london' ? '/residential' : `/${citySlug}/residential`;
  const commercialLink = citySlug === 'london' ? '/commercial' : `/${citySlug}/commercial`;

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <Navigation />

      {/* PROVIDER HEADER */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href={residentialLink} className="text-blue-600 hover:text-blue-800 font-semibold mb-4 inline-block">
            ← Back to {cityName} Residential
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{provider.name}</h1>
          {provider.google_rating != null && provider.google_rating > 0 && (
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < Math.floor(provider.google_rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">{provider.google_rating}</span>
              {provider.google_review_count && (
                <span className="text-gray-600"> ({provider.google_review_count.toLocaleString()} {provider.google_review_count === 1 ? 'review' : 'reviews'})</span>
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
                  {/* href is stripped of whitespace — a space in a tel: URI breaks
                      tap-to-call on some mobile browsers. The displayed number
                      keeps its formatting. */}
                  <a href={`tel:${String(provider.phone).replace(/\s+/g, '')}`} className="text-lg text-blue-600 hover:underline">{provider.phone}</a>
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
                  <a href={externalHref(provider.website)} target="_blank" rel={EXTERNAL_LINK_REL} className="text-lg text-blue-600 hover:underline">Visit Website →</a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        {certificationBadges.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award size={24} className="text-blue-600" />
              Certifications & Memberships
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certificationBadges.map((badge) => (
                <div key={badge.column} className="bg-blue-50 border border-blue-200 rounded p-3 text-center">
                  <p className="font-semibold text-blue-900">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PEST TYPES */}
        {pestBadges.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pest Types Handled</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {pestBadges.map((badge) => (
                <div key={badge.column} className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SERVICES */}
        {serviceBadges.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Offered</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {serviceBadges.map((badge) => (
                <div key={badge.column} className="bg-gray-100 rounded px-3 py-2 text-sm font-medium text-gray-900">
                  {badge.label}
                </div>
              ))}
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
          <Link href={residentialLink} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            ← Back to {cityName} Residential
          </Link>
          <Link href={commercialLink} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            ← Back to {cityName} Commercial
          </Link>
        </div>
      </div>

    </div>
  );
}
