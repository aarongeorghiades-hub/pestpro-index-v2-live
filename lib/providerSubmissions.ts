// Shared constants for the provider submission flow.
// Imported by BOTH the client form (app/professionals/submit/page.tsx) and the
// server route (app/api/provider-submissions/route.ts) so the option lists and
// the server-side validation can never drift apart. Contains no secrets.

export type RegionSlug = (typeof REGION_SLUGS)[number];

/** The 19 region slugs that back the city landing pages and Providers.regions. */
export const REGIONS: { slug: string; label: string }[] = [
  { slug: 'belfast', label: 'Belfast' },
  { slug: 'birmingham', label: 'Birmingham' },
  { slug: 'bradford', label: 'Bradford' },
  { slug: 'brighton', label: 'Brighton' },
  { slug: 'bristol', label: 'Bristol' },
  { slug: 'cardiff', label: 'Cardiff' },
  { slug: 'coventry', label: 'Coventry' },
  { slug: 'derby', label: 'Derby' },
  { slug: 'edinburgh', label: 'Edinburgh' },
  { slug: 'glasgow', label: 'Glasgow' },
  { slug: 'hampshire', label: 'Hampshire' },
  { slug: 'leeds', label: 'Leeds' },
  { slug: 'leicester', label: 'Leicester' },
  { slug: 'liverpool', label: 'Liverpool' },
  { slug: 'london', label: 'London' },
  { slug: 'manchester', label: 'Manchester' },
  { slug: 'newcastle', label: 'Newcastle' },
  { slug: 'nottingham', label: 'Nottingham' },
  { slug: 'sheffield', label: 'Sheffield' },
];

export const REGION_SLUGS = REGIONS.map((r) => r.slug);

/**
 * The 20 pest keys captured from applicants, grouped for display.
 *
 * Deliberately excludes pest_rodents, pest_rodents_general and
 * pest_birds_general — those are derived at promotion time, not captured.
 */
export const PEST_GROUPS: { group: string; pests: { key: string; label: string }[] }[] = [
  {
    group: 'Rodents & Wildlife',
    pests: [
      { key: 'pest_rats', label: 'Rats' },
      { key: 'pest_mice', label: 'Mice' },
      { key: 'pest_squirrels', label: 'Squirrels' },
      { key: 'pest_foxes', label: 'Foxes' },
      { key: 'pest_moles', label: 'Moles' },
    ],
  },
  {
    group: 'Insects',
    pests: [
      { key: 'pest_wasps', label: 'Wasps' },
      { key: 'pest_bees', label: 'Bees' },
      { key: 'pest_ants', label: 'Ants' },
      { key: 'pest_cockroaches', label: 'Cockroaches' },
      { key: 'pest_bed_bugs', label: 'Bed bugs' },
      { key: 'pest_fleas', label: 'Fleas' },
      { key: 'pest_moths', label: 'Moths' },
      { key: 'pest_flies', label: 'Flies' },
      { key: 'pest_beetles', label: 'Beetles' },
      { key: 'pest_spiders', label: 'Spiders' },
      { key: 'pest_silverfish', label: 'Silverfish' },
      { key: 'pest_ladybirds', label: 'Ladybirds' },
    ],
  },
  {
    group: 'Birds',
    pests: [
      { key: 'pest_pigeons', label: 'Pigeons' },
      { key: 'pest_seagulls', label: 'Seagulls' },
      { key: 'pest_birds', label: 'Other birds' },
    ],
  },
];

export const PEST_KEYS = PEST_GROUPS.flatMap((g) => g.pests.map((p) => p.key));

/**
 * Listing tiers a firm can ask about. standard is free and is the default.
 * featured records interest only — this form does not take payment.
 * While more than one entry exists, the submit form shows the chooser.
 */
export const TIERS = [
  { value: 'standard', label: 'Standard listing', hint: 'Free. Stays free. No lead fees.' },
  {
    value: 'featured',
    label: 'Featured',
    hint: '£12 a month or £120 a year. First 30 days free. Cancel with one full calendar month\'s notice. At most three firms per area, in a labelled Featured (paid) slot above the rating order, with a logo, photos and a fuller description. Nothing is charged from this form.',
  },
];

export const TIER_VALUES = TIERS.map((t) => t.value);

/** Written to provider_submissions.tier_interest when no chooser is shown. */
export const DEFAULT_TIER = 'standard';

/** Name of the honeypot field. Bots fill it; real users never see it. */
export const HONEYPOT_FIELD = 'company_website_confirm';

export const PROFILE_TEXT_MAX = 1000;
