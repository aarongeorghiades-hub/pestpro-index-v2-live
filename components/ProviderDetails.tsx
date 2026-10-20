import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Briefcase, Home as HomeIcon, Mail, MapPin, Phone, Star } from 'lucide-react';
import AreaHead from '@/components/directory/AreaHead';
import TopRatedMark from '@/components/directory/TopRatedMark';
import { isTrophyProvider } from '@/lib/trophy';
import Navigation from '@/components/Navigation';
import { generateProfileText } from '@/lib/generateProfileText';
import { activePests } from '@/lib/pests';
import {
  ProviderEmailLink,
  ProviderPhoneLink,
  ProviderWebsiteLink,
} from '@/components/listing/ProviderContactLinks';

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

type ProviderDetailsData = {
  name?: string | null;
  regions?: string[] | null;
  google_rating?: number | null;
  google_review_count?: number | null;
  profile_text?: string | null;
  tier?: string | null;
  postcode?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  business_residential?: boolean | null;
  commercial?: boolean | null;
  [column: string]: unknown;
};

export default function ProviderDetails({
  provider,
  slug,
}: {
  provider: ProviderDetailsData;
  slug: string;
}) {
  const pestBadges = activePests(provider);
  const serviceBadges = activeBadges(provider, SERVICE_BADGES);
  const certificationBadges = activeBadges(provider, CERTIFICATION_BADGES);
  const citySlug = typeof provider.regions?.[0] === 'string' ? provider.regions[0] : 'london';
  const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  const residentialLink = citySlug === 'london' ? '/residential' : `/${citySlug}/residential`;
  const commercialLink = citySlug === 'london' ? '/commercial' : `/${citySlug}/commercial`;
  const rating = typeof provider.google_rating === 'number' ? provider.google_rating : null;
  const reviewCount = typeof provider.google_review_count === 'number' ? provider.google_review_count : null;

  const profileText = provider.profile_text || generateProfileText(provider);
  // A Featured firm's own page carries the same quiet treatment as its card.
  const isFeatured = provider.tier === 'featured';
  const topRated = isTrophyProvider({ google_rating: rating, google_review_count: reviewCount });

  const sectionHead = 'border-b-2 border-[var(--color-ink)] pb-2 text-lg font-bold text-[var(--color-ink)]';
  const factList = 'grid grid-cols-1 sm:grid-cols-2';
  const factItem = 'border-b border-[var(--color-rule)] py-2.5 text-base text-[var(--color-ink-soft)]';

  return (
    <div className="min-h-screen bg-[var(--color-stock)]">
      <Navigation />

      <AreaHead
        crumbs={[
          { label: 'Home', href: '/' },
          { label: `${cityName} Residential`, href: residentialLink },
          { label: String(provider.name ?? '') },
        ]}
        tab={cityName}
        featured={isFeatured}
        label={
          isFeatured ? (
            <span className="flex items-center gap-2 text-[0.8125rem] font-semibold text-[var(--color-marigold-deep)]">
              <span className="dir-tab !py-1">Featured</span>
              Paid placement
            </span>
          ) : null
        }
        title={provider.name}
        standfirst={
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-base md:text-lg">
            {rating != null && rating > 0 && (
              <span className="inline-flex items-center gap-2">
                <Star aria-hidden="true" className="h-5 w-5 fill-[var(--color-ink)] text-[var(--color-ink)]" strokeWidth={0} />
                <span className="dir-num font-bold text-[var(--color-ink)]">{rating.toFixed(1)}</span>
                {reviewCount != null && reviewCount > 0 && (
                  <span className="dir-num">
                    from {reviewCount.toLocaleString()} Google {reviewCount === 1 ? 'review' : 'reviews'}
                  </span>
                )}
              </span>
            )}
            {topRated && <TopRatedMark />}
            {provider.postcode && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="h-4 w-4 text-[var(--color-ink-mute)]" />
                <span className="dir-num font-semibold text-[var(--color-ink)]">{provider.postcode}</span>
              </span>
            )}
          </div>
        }
      />

      <div className="dir-wrap grid gap-12 pb-16 pt-10 md:pb-24 md:pt-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(18rem,1fr)] lg:gap-16">
        {/* CONTACT: first on a phone, a sticky panel beside the profile on desktop. */}
        <aside className="lg:order-2">
          <div className="dir-card p-6 lg:sticky lg:top-24">
            <h2 className="text-base font-bold text-[var(--color-ink)]">Contact details</h2>
            {provider.phone && (
              <div className="mt-4">
                <ProviderPhoneLink
                  slug={slug}
                  phone={String(provider.phone)}
                  className="dir-btn dir-btn-ink w-full !min-h-14 text-lg"
                >
                  <Phone aria-hidden="true" className="h-5 w-5" />
                  <span className="dir-num dir-condensed text-[1.375rem] font-bold tracking-[-0.01em]">{String(provider.phone)}</span>
                </ProviderPhoneLink>
              </div>
            )}
            {provider.website && (
              <div className="mt-2">
                <ProviderWebsiteLink slug={slug} className="dir-btn dir-btn-line w-full">
                  Visit website
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </ProviderWebsiteLink>
              </div>
            )}
            <dl className="mt-5 space-y-3 border-t border-[var(--color-rule)] pt-5 text-base">
              {provider.postcode && (
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-[var(--color-ink-mute)]">Location</dt>
                  <dd className="dir-num font-semibold text-[var(--color-ink)]">{provider.postcode}</dd>
                </div>
              )}
              {provider.email && (
                <div className="flex flex-col gap-1">
                  <dt className="inline-flex items-center gap-1.5 text-[var(--color-ink-mute)]">
                    <Mail aria-hidden="true" className="h-4 w-4" /> Email
                  </dt>
                  <dd className="break-all">
                    <ProviderEmailLink slug={slug} email={String(provider.email)} className="dir-link font-semibold" />
                  </dd>
                </div>
              )}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-[var(--color-ink-mute)]">
              You contact the firm directly. PestPro Index takes no lead fees or commission.
            </p>
          </div>
        </aside>

        <div className="space-y-12 lg:order-1">
          {profileText && (
            <p
              className={`max-w-[62ch] text-lg leading-relaxed text-[var(--color-ink)] md:text-xl ${
                isFeatured ? 'border-t border-[var(--color-rule)] pt-6' : ''
              }`}
            >
              {profileText}
            </p>
          )}

          {(provider.business_residential || provider.commercial) && (
            <section>
              <h2 className={sectionHead}>Business Types Served</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {provider.business_residential && (
                  <li className="flex items-center gap-2.5 border-b border-[var(--color-rule)] py-3 font-semibold text-[var(--color-ink)]">
                    <HomeIcon aria-hidden="true" className="h-5 w-5 text-[var(--color-ink-mute)]" /> Residential
                  </li>
                )}
                {provider.commercial && (
                  <li className="flex items-center gap-2.5 border-b border-[var(--color-rule)] py-3 font-semibold text-[var(--color-ink)]">
                    <Briefcase aria-hidden="true" className="h-5 w-5 text-[var(--color-ink-mute)]" /> Commercial
                  </li>
                )}
              </ul>
            </section>
          )}

          {pestBadges.length > 0 && (
            <section>
              <h2 className={sectionHead}>Pest Types Handled</h2>
              <ul className={`${factList} md:grid-cols-3`}>
                {pestBadges.map((badge) => (
                  <li key={badge.column} className={factItem}>{badge.label}</li>
                ))}
              </ul>
            </section>
          )}

          {serviceBadges.length > 0 && (
            <section>
              <h2 className={sectionHead}>Services Offered</h2>
              <ul className={factList}>
                {serviceBadges.map((badge) => (
                  <li key={badge.column} className={factItem}>{badge.label}</li>
                ))}
              </ul>
            </section>
          )}

          {certificationBadges.length > 0 && (
            <section>
              <h2 className={sectionHead}>Certifications & Memberships</h2>
              <ul className={factList}>
                {certificationBadges.map((badge) => (
                  <li key={badge.column} className={`${factItem} font-semibold text-[var(--color-ink)]`}>{badge.label}</li>
                ))}
              </ul>
            </section>
          )}

          <p className="text-xs leading-relaxed text-[var(--color-ink-mute)]">
            Services and certifications are as stated by the firm. We do not judge outcomes.
          </p>

          <div className="flex flex-col gap-2 border-t border-[var(--color-rule)] pt-6 text-sm">
            <Link
              href={`/professionals/claim?slug=${encodeURIComponent(slug)}`}
              className="dir-link font-semibold"
            >
              Is this your business? Claim this listing
            </Link>
            <Link href={`/provider/${slug}/report`} className="text-[var(--color-ink-mute)] hover:text-[var(--color-ink)] hover:underline">
              Report / remove this listing
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href={residentialLink} className="dir-btn dir-btn-line">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to {cityName} Residential
            </Link>
            <Link href={commercialLink} className="dir-btn dir-btn-line">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to {cityName} Commercial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
