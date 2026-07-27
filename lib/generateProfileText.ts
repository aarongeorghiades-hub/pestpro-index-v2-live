import { activePests } from './pests';

/**
 * How many pests to name before falling back to "and more".
 *
 * Five keeps the sentence readable while covering the great majority of
 * providers outright — most carry five or fewer true flags, so most
 * descriptions now list every pest with no "and more" at all. The suffix is
 * only appended when there are genuinely unnamed pests left over.
 */
const MAX_PESTS_NAMED = 5;

/**
 * Generates a unique profile description for providers with NULL profile_text
 * Uses existing database fields to create meaningful content
 */
export function generateProfileText(provider: any): string {
  const parts: string[] = [];
  const citySlug = provider.regions?.[0] || 'london';
  const city = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);

  parts.push(`${provider.name} is a pest control provider serving ${city}.`);

  // Certifications
  const certs: string[] = [];
  if (provider.bpca_member) certs.push('BPCA');
  if (provider.npta_member) certs.push('NPTA');
  if (provider.rsph_level_2) certs.push('RSPH Level 2');
  if (provider.safe_contractor) certs.push('SafeContractor');
  if (provider.iso_9001) certs.push('ISO 9001');
  if (provider.iso_14001) certs.push('ISO 14001');
  if (provider.cepa_certified) certs.push('CEPA');
  if (certs.length > 0) {
    parts.push(`They hold ${certs.join(', ')} certification${certs.length > 1 ? 's' : ''}.`);
  }

  // Pests handled. Read from the shared canonical list so this sentence and the
  // badges on the provider page can never name different pests. Only explicit
  // true counts — NULL and false are absent, never a claim either way. A
  // provider with no true pest flags gets no pest sentence at all.
  const pests = activePests(provider);
  if (pests.length > 0) {
    const named = pests.slice(0, MAX_PESTS_NAMED).map((pest) => pest.proseLabel);
    // "and more" only when pests genuinely remain unnamed.
    const pestList =
      pests.length > MAX_PESTS_NAMED ? `${named.join(', ')} and more` : named.join(', ');

    // Word the sentence to the sectors the provider actually serves, so a
    // commercial-only firm is never described as residential.
    const residential = provider.business_residential === true;
    const commercial = provider.commercial === true || provider.business_commercial === true;
    let scope: string;
    if (residential && commercial) {
      scope = 'Their residential and commercial services cover';
    } else if (commercial) {
      scope = 'Their commercial services cover';
    } else if (residential) {
      scope = 'Their residential services cover';
    } else {
      // Neither flag set — say nothing about sector rather than guess.
      scope = 'They treat';
    }
    parts.push(`${scope} ${pestList}.`);
  }

  // Commercial features
  const features: string[] = [];
  if (provider.emergency_24_7) features.push('24/7 emergency response');
  if (provider.flexible_contracts) features.push('flexible contracts');
  if (provider.free_surveys) features.push('free surveys');
  if (provider.eco_friendly_methods) features.push('eco-friendly methods');
  if (provider.multi_site_coverage) features.push('multi-site coverage');
  if (features.length > 0) {
    parts.push(`Commercial clients benefit from ${features.join(', ')}.`);
  }

  // Rating
  if (provider.google_rating) {
    const reviewCount = provider.google_review_count;
    const reviewText = reviewCount
      ? ` from ${reviewCount} ${reviewCount === 1 ? 'review' : 'reviews'}`
      : '';
    parts.push(`They have a ${provider.google_rating} star rating on Google${reviewText}.`);
  }

  // Contact
  if (provider.phone) {
    parts.push(`Contact them on ${provider.phone}.`);
  }

  return parts.join(' ');
}

/**
 * Generate a shortened version for meta description (max ~155 chars)
 */
export function generateMetaDescription(provider: any): string {
  const citySlug = provider.regions?.[0] || 'london';
  const city = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  const rating = provider.google_rating ? ` ${provider.google_rating}★` : '';
  const certs = [];
  if (provider.bpca_member) certs.push('BPCA');
  if (provider.npta_member) certs.push('NPTA');
  
  const certText = certs.length > 0 ? ` ${certs.join('/')}` : '';
  
  return `${provider.name} - Pest control in ${city}${certText}${rating}. View services, certifications and contact details on PestPro Index.`;
}
