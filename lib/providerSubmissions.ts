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
 *
 * Note: pest_moles has no matching column on Providers. It is stored in the
 * submission jsonb so the information is not lost, but it cannot be promoted
 * to a Providers column without a schema change.
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

export const TIERS = [
  { value: 'free', label: 'Free Listing', hint: '£0/month' },
  { value: 'enhanced', label: 'Enhanced Listing', hint: '£15/month — free until 1st April 2026' },
  { value: 'featured', label: 'Featured Provider of the Week', hint: '£30/week — free until 1st April 2026' },
];

export const TIER_VALUES = TIERS.map((t) => t.value);

/** Name of the honeypot field. Bots fill it; real users never see it. */
export const HONEYPOT_FIELD = 'company_website_confirm';

export const PROFILE_TEXT_MAX = 1000;
