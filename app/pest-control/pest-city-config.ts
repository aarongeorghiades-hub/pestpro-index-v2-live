// Shared configuration for pest-specific city pages (180 pages: 18 cities × 10 pests)

export interface LocationConfig {
  slug: string;
  name: string;
  region: string;
}

export interface PestConfig {
  slug: string;
  name: string;
  namePlural: string;
  filterColumn: string;
  guideUrl: string;
  reviewUrl: string;
  description: string;
  seoIntro: string;
  signs: string;
  risks: string;
  typicalCost: string;
}

export const LOCATIONS: LocationConfig[] = [
  { slug: 'london', name: 'London', region: 'london' },
  { slug: 'birmingham', name: 'Birmingham', region: 'birmingham' },
  { slug: 'manchester', name: 'Manchester', region: 'manchester' },
  { slug: 'liverpool', name: 'Liverpool', region: 'liverpool' },
  { slug: 'leeds', name: 'Leeds', region: 'leeds' },
  { slug: 'sheffield', name: 'Sheffield', region: 'sheffield' },
  { slug: 'nottingham', name: 'Nottingham', region: 'nottingham' },
  { slug: 'bristol', name: 'Bristol', region: 'bristol' },
  { slug: 'brighton', name: 'Brighton', region: 'brighton' },
  { slug: 'glasgow', name: 'Glasgow', region: 'glasgow' },
  { slug: 'bradford', name: 'Bradford', region: 'bradford' },
  { slug: 'newcastle', name: 'Newcastle', region: 'newcastle' },
  { slug: 'cardiff', name: 'Cardiff', region: 'cardiff' },
  { slug: 'edinburgh', name: 'Edinburgh', region: 'edinburgh' },
  { slug: 'leicester', name: 'Leicester', region: 'leicester' },
  { slug: 'hampshire', name: 'Hampshire', region: 'hampshire' },
  { slug: 'coventry', name: 'Coventry', region: 'coventry' },
  { slug: 'belfast', name: 'Belfast', region: 'belfast' },
];

export const PESTS: PestConfig[] = [
  {
    slug: 'rats',
    name: 'Rat',
    namePlural: 'Rats',
    filterColumn: 'pest_rats',
    guideUrl: '/guides/how-to-get-rid-of-rats',
    reviewUrl: '/best/rat-traps',
    description: 'rat control specialists',
    seoIntro: 'Rats are one of the most common pest problems in {city}. They can carry diseases including leptospirosis (Weil\u2019s disease), contaminate food, damage property by gnawing through cables and pipes, and breed rapidly \u2014 a single pair can produce up to 200 offspring per year. Professional rat control typically involves a combination of trapping, baiting, and proofing to prevent re-entry.',
    signs: 'Droppings (dark, spindle-shaped, 10\u201315mm), gnaw marks on wood/cables/plastic, greasy rub marks along walls, burrows near buildings, scratching noises at night (especially in loft spaces and wall cavities).',
    risks: 'Leptospirosis (Weil\u2019s disease), salmonella, E. coli, property damage from gnawing (fire risk from chewed cables), contamination of food stores.',
    typicalCost: '\u00a3120\u2013\u00a3250 for a standard domestic treatment (2\u20133 visits)',
  },
  {
    slug: 'mice',
    name: 'Mouse',
    namePlural: 'Mice',
    filterColumn: 'pest_mice',
    guideUrl: '/guides/how-to-get-rid-of-mice',
    reviewUrl: '/best/mouse-traps',
    description: 'mouse control specialists',
    seoIntro: 'Mice are the most reported pest in UK homes, and {city} is no exception. A mouse can squeeze through a gap as small as 6mm (the width of a pencil) and a single female can produce 5\u201310 litters per year. Mice contaminate far more food than they eat, and their constant gnawing can damage electrical wiring, plumbing, and insulation.',
    signs: 'Small dark droppings (3\u20136mm, rice-shaped), ammonia smell (especially in enclosed spaces), shredded paper/fabric for nesting material, gnaw marks, scratching sounds in walls and ceilings at night.',
    risks: 'Salmonella, hantavirus, contaminated food and surfaces, electrical fire risk from gnawed cables, insulation damage.',
    typicalCost: '\u00a3100\u2013\u00a3200 for a standard domestic treatment (2\u20133 visits)',
  },
  {
    slug: 'wasps',
    name: 'Wasp',
    namePlural: 'Wasps',
    filterColumn: 'pest_wasps',
    guideUrl: '/guides/wasp-nest-removal',
    reviewUrl: '/best/wasp-killers',
    description: 'wasp nest removal specialists',
    seoIntro: 'Wasp nests in {city} typically become a problem from June through to October, with peak activity in August and September when colonies are at their largest. A single wasp nest can contain 5,000\u201310,000 wasps by late summer. Wasp stings are painful and can be life-threatening for those with allergies (anaphylaxis). Professional nest treatment is fast, effective, and usually resolves the problem within 24\u201348 hours.',
    signs: 'Increased wasp activity around a specific area of your property, visible nest (papery grey structure) in loft spaces, wall cavities, sheds, under eaves, or in the ground, wasps flying in and out of a single entry point.',
    risks: 'Painful stings, anaphylaxis risk for allergy sufferers (can be fatal), aggression when disturbed, multiple stings possible from a single nest disturbance.',
    typicalCost: '\u00a350\u2013\u00a3120 for nest treatment (single visit, usually effective within 24 hours)',
  },
  {
    slug: 'bed-bugs',
    name: 'Bed Bug',
    namePlural: 'Bed Bugs',
    filterColumn: 'pest_bed_bugs',
    guideUrl: '/guides/how-to-get-rid-of-bed-bugs',
    reviewUrl: '/best/bed-bug-treatments',
    description: 'bed bug treatment specialists',
    seoIntro: 'Bed bug infestations in {city} have risen dramatically over the past decade. Bed bugs are expert hitchhikers \u2014 they spread through luggage, second-hand furniture, and clothing. They hide in mattress seams, bed frames, headboards, and furniture crevices during the day and emerge at night to feed on blood. DIY treatments are rarely effective against established infestations \u2014 professional heat treatment or targeted insecticide application is almost always required.',
    signs: 'Itchy red bite marks (often in lines or clusters on exposed skin), small blood spots on sheets, dark brown/black faecal spots on mattress seams and bed frame joints, shed skins, musty sweet smell in severe infestations.',
    risks: 'Sleep disruption, itchy bite reactions (some people react severely), secondary skin infections from scratching, anxiety and psychological distress, rapid spread to adjacent rooms.',
    typicalCost: '\u00a3250\u2013\u00a3600 for professional treatment (1\u20132 bed flat, 2\u20133 visits typically needed). Heat treatment: \u00a3400\u2013\u00a31,000+',
  },
  {
    slug: 'cockroaches',
    name: 'Cockroach',
    namePlural: 'Cockroaches',
    filterColumn: 'pest_cockroaches',
    guideUrl: '/guides/how-to-get-rid-of-cockroaches',
    reviewUrl: '/best/cockroach-killers',
    description: 'cockroach control specialists',
    seoIntro: 'Cockroach infestations in {city} are a serious public health concern. The German cockroach (the most common species in UK buildings) breeds extremely rapidly \u2014 a single female can produce 300+ offspring in her lifetime. Cockroaches spread salmonella, E. coli, and other pathogens, and their droppings and shed skins are a major trigger for asthma and allergies. They are notoriously difficult to eliminate without professional treatment.',
    signs: 'Live cockroaches (usually seen at night when you turn on a light), dark droppings (resembling ground coffee or black pepper), egg cases (oothecae \u2014 brown, purse-shaped capsules), musty/oily smell, shed skins.',
    risks: 'Salmonella, E. coli, dysentery, asthma and allergy triggers, food contamination, reputational damage for businesses (Food Safety Act offences).',
    typicalCost: '\u00a3150\u2013\u00a3350 for domestic treatment (2\u20133 visits). HMO/multi-unit: \u00a3500\u2013\u00a31,500+ for coordinated block treatment',
  },
  {
    slug: 'ants',
    name: 'Ant',
    namePlural: 'Ants',
    filterColumn: 'pest_ants',
    guideUrl: '/guides/how-to-get-rid-of-ants',
    reviewUrl: '/best/ant-killers',
    description: 'ant control specialists',
    seoIntro: 'Ant infestations in {city} are most common from March to October, with peak activity in summer. The black garden ant (Lasius niger) is the most common species entering UK homes, forming trails from nests (usually outside) into kitchens and food preparation areas. While largely a nuisance pest, ants contaminate food and can be persistent \u2014 a mature colony contains 5,000\u201315,000 workers and simply killing the visible ants won\u2019t solve the problem. Treatment needs to reach the queen.',
    signs: 'Visible ant trails (lines of ants following the same path), small piles of earth/sand around cracks in paving or walls (nest entrances), ants around food sources in the kitchen, flying ants in summer (winged reproductive ants).',
    risks: 'Food contamination, nuisance (persistent trailing), some species (pharaoh ants) are a serious problem in hospitals and food premises.',
    typicalCost: '\u00a380\u2013\u00a3180 for domestic treatment (usually 1\u20132 visits)',
  },
  {
    slug: 'fleas',
    name: 'Flea',
    namePlural: 'Fleas',
    filterColumn: 'pest_fleas',
    guideUrl: '/guides/how-to-get-rid-of-fleas',
    reviewUrl: '/best/flea-treatments',
    description: 'flea treatment specialists',
    seoIntro: 'Flea infestations in {city} most commonly originate from cats and dogs, but can also occur in properties where pets have previously lived. The cat flea (Ctenocephalides felis) is responsible for the vast majority of UK flea infestations \u2014 even in homes with dogs. Flea pupae can lie dormant in carpets for over a year and hatch en masse when triggered by vibration and warmth (often when new occupants move into a vacant property). Professional treatment involves residual insecticide application combined with thorough vacuuming to stimulate pupae hatching.',
    signs: 'Itchy bites on ankles and lower legs, pets scratching excessively, tiny dark specks in pet bedding (flea droppings \u2014 place on damp white paper; if they turn red, it\u2019s flea dirt), seeing small jumping insects (1\u20133mm, dark brown).',
    risks: 'Itchy bites, secondary skin infections, tapeworm transmission (pets), psychological distress, rapid re-infestation if underlying cause not addressed.',
    typicalCost: '\u00a3100\u2013\u00a3220 for domestic treatment (usually 1\u20132 visits). A second treatment 10\u201314 days later is often recommended',
  },
  {
    slug: 'foxes',
    name: 'Fox',
    namePlural: 'Foxes',
    filterColumn: 'pest_foxes',
    guideUrl: '/guides/how-to-get-rid-of-foxes',
    reviewUrl: '/best/fox-deterrents',
    description: 'fox deterrent and control specialists',
    seoIntro: 'Urban foxes are increasingly common in {city}, attracted by food waste, unsecured bins, and pet food left outdoors. While foxes are not classified as vermin under UK law, they can cause significant nuisance \u2014 digging up gardens, scattering rubbish, killing chickens and rabbits, leaving droppings that carry Toxocara roundworm, and making loud screaming noises at night during mating season (January\u2013February). Local councils do not provide fox control services \u2014 you will need a private pest controller or deterrent methods.',
    signs: 'Digging in lawns and flower beds, scattered bin bags, strong musky smell, fox droppings in garden (pointed ends, often contain bone/fur/seeds), trampled paths under fences and along boundaries, loud screaming/barking at night.',
    risks: 'Toxocara roundworm (in droppings, risk to children), mange (can spread to dogs), livestock kills, garden damage, noise nuisance.',
    typicalCost: '\u00a3150\u2013\u00a3400 for deterrent installation. Fox-proofing: \u00a3200\u2013\u00a3500. Ongoing management: \u00a3300\u2013\u00a3800/year',
  },
  {
    slug: 'moths',
    name: 'Moth',
    namePlural: 'Moths',
    filterColumn: 'pest_moths',
    guideUrl: '/guides/how-to-get-rid-of-moths',
    reviewUrl: '/best/moth-killers',
    description: 'moth control specialists',
    seoIntro: 'Clothes moths and carpet moths are an increasing problem in {city}, particularly in older properties with natural-fibre carpets and wardrobes full of wool. The common clothes moth (Tineola bisselliella) and the case-bearing clothes moth (Tinea pellionella) cause damage to wool, silk, fur, feathers, and other natural fibres. It\u2019s the larvae, not the adult moths, that cause the damage \u2014 feeding on keratin in the fibres. Central heating has allowed moth populations to breed year-round in UK homes.',
    signs: 'Irregular holes in wool clothing, bare patches on wool carpets (especially under furniture and along edges), small golden/buff moths fluttering near wardrobes, silk webbing or tubes on fabric, cream-coloured larvae (6\u20138mm) in clothing folds.',
    risks: 'Damage to wool clothing, cashmere, silk, carpets, upholstery, fur, and other natural fibres. Can cause thousands of pounds in damage to valuable textiles.',
    typicalCost: '\u00a3120\u2013\u00a3300 for domestic treatment (1\u20132 visits). Severe infestations: \u00a3300\u2013\u00a3600+',
  },
  {
    slug: 'pigeons',
    name: 'Pigeon',
    namePlural: 'Pigeons',
    filterColumn: 'pest_pigeons',
    guideUrl: '/guides/pigeon-control',
    reviewUrl: '/best/bird-deterrents',
    description: 'pigeon control and bird proofing specialists',
    seoIntro: 'Pigeons are one of the most common pest birds in {city}, roosting on ledges, roofs, balconies, and in building voids. Pigeon droppings are acidic and damage stonework, paintwork, and vehicle finishes. They also carry diseases including psittacosis, salmonella, and E. coli, and their nests harbour secondary pests (bird mites, carpet beetles, textile moths). Professional bird proofing \u2014 netting, spikes, wire systems, or optical gel \u2014 is the most effective long-term solution.',
    signs: 'Birds roosting on ledges, balconies, or roof areas, accumulated droppings on surfaces below roost points, nesting material (twigs, debris) in gutters and on flat roofs, cooing sounds from roof voids or eaves, secondary pest issues (bird mites, carpet beetles).',
    risks: 'Psittacosis, salmonella, E. coli, cryptococcosis, building damage from acidic droppings, blocked gutters, secondary pest infestations, slip hazard from droppings.',
    typicalCost: '\u00a3200\u2013\u00a3600 for spike/wire installation. Netting: \u00a3500\u2013\u00a33,000+. Solar panel proofing: \u00a3300\u2013\u00a3800',
  },
];

const PEST_SLUGS = new Set(PESTS.map(p => p.slug));

export function getPestBySlug(slug: string): PestConfig | undefined {
  return PESTS.find(p => p.slug === slug);
}

export function isPestSlug(slug: string): boolean {
  return PEST_SLUGS.has(slug);
}

export function getLocationBySlug(slug: string): LocationConfig | undefined {
  return LOCATIONS.find(l => l.slug === slug);
}
