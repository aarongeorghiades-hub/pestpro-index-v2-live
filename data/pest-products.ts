// Top-3 DIY products per pest, lifted from the matching /best/{category} page
// (rank 1-3 ProductCards). Source of truth for the product data remains the
// /best pages; this module mirrors their top three for the pest-page product
// block. Prices are stored as literal Unicode (entities normalised) because a
// .ts string is not HTML-entity-decoded the way JSX attributes are.
//
// Mapping (pest slug -> /best category):
//   rats -> rat-traps
//   mice -> mouse-traps
//   wasps -> wasp-killers
//   bed-bugs -> bed-bug-treatments
//   cockroaches -> cockroach-killers
//   ants -> ant-killers
//   fleas -> flea-treatments
//   foxes -> fox-deterrents
//   moths -> moth-killers
//   pigeons -> bird-deterrents

export interface PestProduct {
  name: string;
  asin: string;
  bestFor?: string;
  features: string[];
}

export const topProductsByPest: Record<string, PestProduct[]> = {
  'rats': [
    {
      name: 'Rat Reaper XXL Snap Trap',
      asin: 'B08V918HNB',
      bestFor: 'Best Overall',
      features: ['Extra large snap trap designed for UK rats', 'Professional quality construction'],
    },
    {
      name: 'ROSHIELD Rat Bait Station Box',
      asin: 'B07W9FMLWF',
      bestFor: 'Best for Pet & Child Safety',
      features: ['Lockable tamper-resistant bait station', 'Protects bait from children and pets'],
    },
    {
      name: 'ROSHIELD 4-Pack Rat Trap',
      asin: 'B071DJVBT4',
      bestFor: 'Best Professional-Grade',
      features: ['Professional quality heavy-duty snap traps', '4-pack for multiple placement points'],
    },
  ],
  'mice': [
    {
      name: 'ROSHIELD 6-Pack Mouse Trap',
      asin: 'B01NB0QNPI',
      bestFor: 'Best Overall',
 features: ['Professional quality snap traps — 6-pack', ],
    },
    {
      name: 'Trisiki 6-Pack Heavy Duty Mouse Trap',
      asin: 'B08ML78RC5',
      bestFor: 'Best Heavy Duty',
      features: ['Heavy-duty high-sensitivity snap traps', 'Effective for persistent mouse problems'],
    },
    {
      name: 'ASPECTEK 6-Pack Mouse Trap',
      asin: 'B00HDVUTZA',
      bestFor: 'Best Budget Option',
      features: ['Reusable snap traps with professional design'],
    },
  ],
  'wasps': [
    {
      name: 'Rentokil Wasp Foam 300ml',
      asin: 'B000TAY2EQ',
      bestFor: 'Best Overall',
      features: ['4-meter jet spray for safe distance application', 'Professional strength formula'],
    },
    {
      name: 'Zero In Ultra Power XL Wasp Trap',
      asin: 'B08BJ1LFNS',
      bestFor: 'Best Wasp Trap',
      features: ['Dual chamber reusable design', 'Ready-baited — just add water'],
    },
    {
      name: 'Zero In Wasp Killer 300ml',
      asin: 'B0082M8TU6',
      bestFor: 'Best Quick-Kill Spray',
      features: ['Expanding foam reaches deep into nests', 'Fast-acting contact killer'],
    },
  ],
  'bed-bugs': [
    {
      name: 'Pest Expert Formula C+ Bed Bug Killer Spray 1L',
      asin: 'B076KQQT8F',
      bestFor: 'Best Overall',
      features: ['Professional strength spray with 12-week residual protection', 'HSE-approved formula used by pest controllers'],
    },
    {
      name: 'Pest Expert Formula P Bed Bug Powder 300g',
      asin: 'B010E2H2N6',
      bestFor: 'Best Powder',
      features: ['Permethrin-based insecticidal powder', 'Puffer pack for precise application into cracks and crevices'],
    },
    {
      name: 'Zero In Bed Bug & Dust Mite Killer 300ml',
      asin: 'B00B2KP7U0',
      bestFor: 'Best Quick-Kill Spray',
      features: ['Fast-acting aerosol spray kills on contact', 'Also effective against dust mites'],
    },
  ],
  'cockroaches': [
    {
      name: 'Cockroach Sticky Traps 12-Pack',
      asin: 'B075FM7TST',
      bestFor: 'Best for Monitoring',
      features: ['Toxin-free sticky traps', 'Food attractant lures cockroaches to the trap'],
    },
    {
      name: 'NOPE! CP Cockroach Killer Spray 500ml',
      asin: 'B074CDY9T4',
      bestFor: 'Best Quick-Kill Spray',
      features: ['Odourless contact killer spray', 'Fast-acting formula kills cockroaches on contact'],
    },
  ],
  'ants': [
    {
      name: 'Nippon Ant Bait Station',
      asin: 'B001CJ11ZQ',
      bestFor: 'Best Overall',
      features: ['UK\'s #1 ant bait station — trusted for decades', 'Eliminates entire colonies including the queen'],
    },
    {
      name: 'NOPE! Ant Killer Bait Station 6-Pack',
      asin: 'B08YFJWGX2',
      bestFor: 'Best Multi-Pack',
 features: ['Six bait stations for whole-house coverage'],
    },
    {
      name: 'Nippon Ant Killer Powder 500g',
      asin: 'B000TAW39M',
      bestFor: 'Best Powder',
      features: ['Permethrin-based powder for direct nest treatment', 'Apply along ant runs, cracks and garden nest sites'],
    },
  ],
  'fleas': [
    {
      name: 'Indorex Household Flea Spray 500ml',
      asin: 'B00GKHI2PW',
      bestFor: 'Best Overall',
      features: ['12-month household flea protection', 'Contains IGR to break the flea life cycle'],
    },
    {
      name: 'Zero In Home Flea Powder 300g',
      asin: 'B00KHV77Y4',
      bestFor: 'Best Powder',
      features: ['Flea powder for carpets and bedding', 'Treats carpets, rugs, and pet bedding'],
    },
    {
      name: 'Beaphar Household Flea Powder 300g',
      asin: 'B001TQRC0K',
      bestFor: 'Best Pet Brand',
      features: ['From trusted pet care brand Beaphar', 'Kills fleas and larvae in carpets and bedding'],
    },
  ],
  'foxes': [
    {
      name: 'PestBye Solar Ultrasonic Fox Repeller',
      asin: 'B075XMS835',
      bestFor: 'Best Ultrasonic Deterrent',
      features: ['Solar powered — no batteries needed', 'Motion-activated PIR sensor'],
    },
    {
      name: 'Scoot Fox Repellent Concentrate 100g',
      asin: 'B00FAMLXAE',
      bestFor: 'Best Scent Repellent',
      features: ['Mimics rival fox territorial marking', 'Non-toxic to pets and plants'],
    },
    {
      name: 'PestBye Jet Spray Motion-Activated Sprinkler',
      asin: 'B0153BJ7NQ',
      bestFor: 'Best Overall Deterrent',
      features: ['120-degree detection arc', 'Covers up to 100 sqm'],
    },
  ],
  'moths': [
    {
      name: 'Acana Hanging Moth Killer',
      asin: 'B00BMO6HKA',
      bestFor: 'Best Overall',
      features: ['Four hanging units protect an entire wardrobe', 'Kills moths, larvae, and eggs on contact'],
    },
    {
      name: 'London Moth Killer Pheromone Traps',
      asin: 'B0CGB12XNN',
      bestFor: 'Best Pheromone Trap',
      features: ['Six traps per pack for whole-home monitoring', 'Pheromone-based — attracts and traps male moths'],
    },
    {
      name: 'Acana Carpet & Fabric Moth Killer Spray',
      asin: 'B00E8I39EE',
      bestFor: 'Best Carpet Moth Spray',
      features: ['Kills moths, larvae, and eggs on carpets and fabrics', 'Residual protection lasts up to three months after application'],
    },
  ],
  'pigeons': [
    {
      name: 'Defender Wide Plastic Bird Spikes (5m)',
      asin: 'B006Y9L57S',
      bestFor: 'Best Overall',
      features: ['Made in Devon by Defender (25+ years)', 'Wide design for ledges up to 20cm'],
    },
    {
      name: 'Stainless Steel Bird Spikes (3m)',
      asin: 'B07L19T8L4',
      bestFor: 'Best Budget',
      features: ['Stainless steel construction', '3 metre coverage'],
    },
    {
      name: 'Bird Barrier Optical Gel (24 Pack)',
      asin: 'B01MQSRJQ6',
      bestFor: 'Best Discreet',
      features: ['Multi-sensory deterrent (UV + smell + touch)', 'Discreet dishes only 2.5 inches wide'],
    },
  ],
};
