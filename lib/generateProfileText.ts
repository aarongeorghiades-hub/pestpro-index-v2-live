/**
 * Generates a unique profile description for providers with NULL profile_text
 * Uses existing database fields to create meaningful content
 */
export function generateProfileText(provider: any): string {
  const parts: string[] = [];
  const city = provider.regions?.includes('birmingham') ? 'Birmingham and the West Midlands' : 'London';

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

  // Services - residential
  const pests: string[] = [];
  if (provider.pest_mice) pests.push('mice');
  if (provider.pest_rats) pests.push('rats');
  if (provider.pest_bed_bugs) pests.push('bed bugs');
  if (provider.pest_wasps) pests.push('wasps');
  if (provider.pest_cockroaches) pests.push('cockroaches');
  if (provider.pest_ants) pests.push('ants');
  if (provider.pest_birds_general) pests.push('birds');
  if (provider.pest_squirrels) pests.push('squirrels');
  if (pests.length > 0) {
    const pestList = pests.length > 3 ? pests.slice(0, 5).join(', ') + ' and more' : pests.join(', ');
    parts.push(`Their residential services cover ${pestList}.`);
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
    parts.push(`They have a ${provider.google_rating} star rating on Google${provider.google_review_count ? ` from ${provider.google_review_count} reviews` : ''}.`);
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
  const city = provider.regions?.includes('birmingham') ? 'Birmingham' : 'London';
  const rating = provider.google_rating ? ` ${provider.google_rating}★` : '';
  const certs = [];
  if (provider.bpca_member) certs.push('BPCA');
  if (provider.npta_member) certs.push('NPTA');
  
  const certText = certs.length > 0 ? ` ${certs.join('/')}` : '';
  
  return `${provider.name} - Pest control in ${city}${certText}${rating}. View services, certifications and contact details on PestPro Index.`;
}
