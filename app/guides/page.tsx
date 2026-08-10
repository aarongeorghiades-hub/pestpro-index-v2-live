import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import FindProviderCTA from '@/components/FindProviderCTA';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pest Control Guides & Expert Advice',
    description:
      'Free, comprehensive UK pest control guides. How to identify, treat, and prevent rats, mice, wasps, bed bugs, cockroaches and more. Plus honest product guides and cost breakdowns.',
    alternates: {
      canonical: 'https://pestproindex.com/guides',
    },
    openGraph: {
      title: 'Pest Control Guides & Expert Advice',
      description:
        'Free, comprehensive UK pest control guides. How to identify, treat, and prevent rats, mice, wasps, bed bugs, cockroaches and more. Plus honest product guides and cost breakdowns.',
      url: 'https://pestproindex.com/guides',
      type: 'website',
      siteName: 'PestPro Index',
    },
  };
}

const guides = [
  {
    emoji: '🐀',
    title: 'How to Get Rid of Rats',
    description: 'Identify signs, DIY methods, professional treatment options, and rat-proofing your home.',
    href: '/guides/how-to-get-rid-of-rats',
  },
  {
    emoji: '🐭',
    title: 'How to Get Rid of Mice',
    description: 'Spot the signs early, choose the right traps, and seal entry points to keep mice out for good.',
    href: '/guides/how-to-get-rid-of-mice',
  },
  {
    emoji: '🐝',
    title: 'Wasp Nest Removal',
    description: 'When to treat, when to leave alone, DIY vs professional removal, and seasonal advice.',
    href: '/guides/wasp-nest-removal',
  },
  {
    emoji: '🛏️',
    title: 'How to Get Rid of Bed Bugs',
    description: 'Signs of infestation, DIY treatments, professional heat treatment, and prevention tips.',
    href: '/guides/how-to-get-rid-of-bed-bugs',
  },
  {
    emoji: '🪳',
    title: 'How to Get Rid of Cockroaches',
    description: 'Species identification, gel bait techniques, professional solutions, and cockroach-proofing.',
    href: '/guides/how-to-get-rid-of-cockroaches',
  },
  {
    emoji: '🦟',
    title: 'How to Get Rid of Fleas',
    description: 'Signs of infestation, treating pets and your home, professional options, and long-term prevention.',
    href: '/guides/how-to-get-rid-of-fleas',
  },
  {
    emoji: '🐜',
    title: 'How to Get Rid of Ants',
    description: 'Species identification, DIY bait methods, flying ants, and when to call a professional.',
    href: '/guides/how-to-get-rid-of-ants',
  },
  {
    emoji: '🐿️',
    title: 'How to Get Rid of Squirrels',
    description: 'Grey squirrel identification, loft proofing, humane deterrents, UK law, and when to call a professional.',
    href: '/guides/how-to-get-rid-of-squirrels',
  },
  {
    emoji: '🦊',
    title: 'How to Get Rid of Foxes',
    description: 'Urban fox behaviour, garden proofing, humane deterrents, UK law, and when to call a professional.',
    href: '/guides/how-to-get-rid-of-foxes',
  },
  {
    emoji: '🐟',
    title: 'How to Get Rid of Silverfish',
    description: 'Identification, humidity control, DIY treatments, professional options, and long-term prevention for UK homes.',
    href: '/guides/how-to-get-rid-of-silverfish',
  },
  {
    emoji: '🪵',
    title: 'Woodworm Treatment',
    description: 'Identification, active vs inactive infestations, DIY treatments, professional solutions, and property survey advice for UK homes.',
    href: '/guides/woodworm-treatment',
  },
  {
    emoji: '🪲',
    title: 'Carpet Beetle Control',
    description: 'Identification, larvae damage, DIY treatments, professional solutions, and prevention strategies for UK homes.',
    href: '/guides/carpet-beetle-control',
  },
  {
    emoji: '🐦',
    title: 'Pigeon Control',
    description: 'Bird deterrent methods, proofing, netting, spikes, legal considerations, and when to call a professional.',
    href: '/guides/pigeon-control',
  },
  {
    emoji: '🦋',
    title: 'How to Get Rid of Moths',
    description: 'Clothes moths vs pantry moths, DIY treatments, pheromone traps, professional fumigation, and prevention tips.',
    href: '/guides/how-to-get-rid-of-moths',
  },
  {
    emoji: '🕷️',
    title: 'Natural Spider Repellents UK: Conkers, Peppermint & More',
    description: 'Keep spiders out of your house naturally. Do conkers really work? We rate every natural spider repellent from peppermint oil to citrus peels.',
    href: '/guides/natural-spider-repellents',
  },
  {
    emoji: '🧴',
    title: 'Essential Oils for Pest Control UK: Which Oils Repel Which Pests',
    description: 'Peppermint, eucalyptus, tea tree, lavender — which essential oils actually repel pests? Complete UK guide with dilution ratios and application methods.',
    href: '/guides/essential-oils-for-pest-control',
  },
  {
    emoji: '🌿',
    title: 'Natural Ant Repellents That Actually Work | UK Guide 2026',
    description: 'Keep ants out of your home naturally with cinnamon, vinegar, peppermint oil and more. Honest UK guide on which home remedies work and which don\\\'t.',
    href: '/guides/natural-ant-repellents',
  },
  {
    emoji: '🦷',
    title: 'Natural Flea Remedies UK: Home Treatments Without Harsh Chemicals',
    description: 'Treat fleas naturally with diatomaceous earth, salt, rosemary and more. Honest guide on which natural flea remedies work in UK homes.',
    href: '/guides/natural-flea-remedies',
  },
  {
    emoji: '🌾',
    title: 'Natural Fox Deterrents UK: Keep Foxes Out of Your Garden',
    description: 'Stop foxes digging up your garden, raiding bins and fouling your lawn. Natural and humane fox deterrents rated for UK gardens.',
    href: '/guides/natural-fox-deterrents',
  },
  {
    emoji: '👔',
    title: 'Natural Moth Repellents UK: Protect Clothes Without Chemicals',
    description: 'Keep moths away from your wardrobe naturally. Cedar, lavender, cloves and more traditional moth deterrents rated for effectiveness.',
    href: '/guides/natural-moth-repellents',
  },
  {
    emoji: '🧀',
    title: 'Natural Mouse Deterrents UK: Keep Mice Away Without Poison',
    description: 'Deter mice from your home without poison or kill traps. Peppermint oil, steel wool, ultrasonic devices and more natural methods.',
    href: '/guides/natural-mouse-deterrents',
  },
  {
    emoji: '🌶️',
    title: 'Natural Rat Deterrents UK: Keep Rats Away Without Poison',
    description: 'Deter rats from your garden and home naturally. Peppermint oil, ammonia, chilli and more natural methods — honest effectiveness ratings.',
    href: '/guides/natural-rat-deterrents',
  },
  {
    emoji: '🌼',
    title: 'Natural Wasp Deterrents UK: Keep Wasps Away From Your Garden',
    description: 'Enjoy your garden without wasps. Natural deterrents including fake nests, peppermint spray, clove oil and more. Rated for effectiveness.',
    href: '/guides/natural-wasp-deterrents',
  },
  {
    emoji: '🪴',
    title: 'Plants That Repel Pests UK: Grow a Natural Pest-Free Garden',
    description: 'Plant lavender, mint, citronella and more to naturally deter pests from your garden and home. Complete UK planting guide for pest control.',
    href: '/guides/plants-that-repel-pests',
  },
  {
    emoji: '🍂',
    title: 'Autumn Pest Proofing: Stop Mice, Rats & Spiders Getting In | UK Guide',
    description: 'Autumn is when pests move indoors. Our UK guide covers how to pest-proof your home before winter with a room-by-room checklist.',
    href: '/guides/autumn-pest-proofing',
  },
  {
    emoji: '🌷',
    title: 'Spring Pest Prevention UK 2026: Get Ahead Before Pests Arrive',
    description: 'Spring is when ants, wasps, moths and flies emerge. Our UK guide covers what to do now to prevent infestations this year.',
    href: '/guides/spring-pest-prevention',
  },
  {
    emoji: '📅',
    title: 'Wasp Season UK 2026: When It Starts & How to Prepare',
    description: 'Wasp season in the UK runs April to October. Learn when to act, what to buy and how to prevent nests before they become a problem.',
    href: '/guides/wasp-season-preparation',
  },
  {
    emoji: '🏡',
    title: 'How to Pest Proof Your Loft UK: Stop Mice, Squirrels & Wasps',
    description: 'Mice, squirrels, wasps and cluster flies love lofts. Our UK guide covers how to proof your loft space and remove existing pests.',
    href: '/guides/how-to-pest-proof-your-loft',
  },
  {
    emoji: '🛖',
    title: 'How to Pest Proof Your Shed UK: Stop Rats, Mice & Insects',
    description: 'Keep rats, mice, wasps and spiders out of your garden shed. Step-by-step UK proofing guide with product recommendations.',
    href: '/guides/how-to-pest-proof-your-shed',
  },
  {
    emoji: '📦',
    title: 'Moving House Pest Checklist UK: What to Check Before You Move In',
    description: 'Don\'t inherit someone else\'s pest problem. Our UK moving house pest checklist covers what to inspect, treat and proof before moving day.',
    href: '/guides/moving-house-pest-checklist',
  },
  {
    emoji: '⚡',
    title: 'Electric Fly Killers vs Sticky Traps: Which Is Better? (UK 2026)',
    description: 'A side-by-side comparison of UV electric fly killers and sticky fly traps for UK homes and businesses. Effectiveness, hygiene, cost, and our top product picks.',
    href: '/guides/electric-fly-killers-vs-sticky-traps',
  },
  {
    emoji: '⚖️',
    title: 'Humane Mouse Traps vs Kill Traps: Which Is Better? (UK 2026)',
    description: 'A detailed comparison of humane live-catch mouse traps and kill traps for UK homes. Effectiveness, ethics, practicality, and our top product picks for each method.',
    href: '/guides/humane-mouse-traps-vs-kill-traps',
  },
  {
    emoji: '⚖️',
    title: 'Rat Poison vs Rat Traps: Which Is Better? (UK Guide 2026)',
    description: 'An honest comparison of rat poison and rat traps for UK homes. Pros, cons, safety, effectiveness, legal considerations, and our product picks for each method.',
    href: '/guides/rat-poison-vs-rat-traps',
  },
  {
    emoji: '🔊',
    title: 'Ultrasonic Pest Repellers: Do They Actually Work? (UK 2026)',
    description: 'An evidence-based review of ultrasonic pest repellers. We examine the science, test results, advertising claims, and whether these devices are worth buying for UK homes.',
    href: '/guides/ultrasonic-pest-repellers-do-they-work',
  },
  {
    emoji: '🛠️',
    title: 'Professional Pest Control vs DIY: Which Is Worth It? (UK 2026)',
    description: 'Should you hire a professional pest controller or tackle the problem yourself? A detailed UK comparison covering cost, effectiveness, safety, and when to call in the experts.',
    href: '/guides/professional-pest-control-vs-diy',
  },
  {
    emoji: '🎓',
    title: 'Student House Pest Guide UK: Dealing with Mice, Bugs & Landlord Responsibilities',
    description: 'Found pests in your student house? Know your rights, what to buy and when your landlord must act. Essential UK guide for students.',
    href: '/guides/student-house-pest-guide',
  },
  {
    emoji: '🏢',
    title: 'Commercial Pest Control Hub',
    description: 'The gateway to all commercial pest control content — sector guides, equipment recommendations, and compliance resources for UK businesses.',
    href: '/guides/commercial-pest-control',
    badge: 'Commercial',
  },
  {
    emoji: '🏭',
    title: 'Warehouse Pest Management',
    description: 'BRC compliance, stock protection, monitoring systems, and integrated pest management for warehouses and storage facilities.',
    href: '/guides/warehouse-pest-management',
    badge: 'Commercial',
  },
  {
    emoji: '🍽️',
    title: 'Restaurant Pest Control',
    description: 'Legal requirements, EHO inspections, HACCP compliance, and setting up a pest management programme for your food business.',
    href: '/guides/restaurant-pest-control',
  },
  {
    emoji: '🏨',
    title: 'Hotel Pest Control',
    description: 'Bed bug management, guest complaint handling, reputation protection, and ongoing monitoring for hotels and B&Bs.',
    href: '/guides/hotel-pest-control',
    badge: 'Commercial',
  },
  {
    emoji: '🏢',
    title: 'Office Pest Control',
    description: 'Common office pests, legal obligations for employers, prevention strategies, and cost-effective solutions for UK offices.',
    href: '/guides/office-pest-control',
    badge: 'Commercial',
  },
  {
    emoji: '🏠',
    title: 'Landlord Pest Control',
    description: 'Legal duties, tenant vs landlord responsibilities, HMO compliance, prevention strategies, and Awaab\'s Law implications.',
    href: '/guides/landlord-pest-control',
    badge: 'Commercial',
  },
  {
    emoji: '📜',
    title: 'Landlord Pest Control Responsibilities UK — Who Pays & What the Law Says (2026)',
    description: 'UK landlords\' legal obligations for pest control under the Landlord and Tenant Act, HHSRS and Awaab\'s Law. Who is responsible — landlord or tenant — and what you must do.',
    href: '/guides/landlord-pest-control-responsibilities',
  },
  {
    emoji: '💰',
    title: 'Pest Control Costs UK 2026',
    description: 'Complete pricing breakdown for every common pest — what you\'ll pay and how to get the best value.',
    href: '/guides/pest-control-costs',
  },
];

const reviews = [
  {
    emoji: '🪤',
    title: 'Best Rat Traps UK 2026',
    description: 'Snap traps, electronic traps, and humane options.',
    href: '/best/rat-traps',
  },
  {
    emoji: '🪤',
    title: 'Best Mouse Traps UK 2026',
    description: 'From classic snap traps to humane live-catch options — our top picks.',
    href: '/best/mouse-traps',
  },
  {
    emoji: '🐝',
    title: 'Best Wasp Killers UK 2026',
    description: 'Nest killer sprays, insecticidal powders, and outdoor traps.',
    href: '/best/wasp-killers',
  },
  {
    emoji: '🛏️',
    title: 'Best Bed Bug Treatments UK 2026',
    description: 'Sprays, powders, mattress encasements, and monitoring traps.',
    href: '/best/bed-bug-treatments',
  },
  {
    emoji: '🪳',
    title: 'Best Cockroach Killers UK 2026',
    description: 'Professional-grade gel baits, sprays, powders, and monitoring traps.',
    href: '/best/cockroach-killers',
  },
  {
    emoji: '🦟',
    title: 'Best Flea Treatments UK 2026',
    description: 'Household sprays, powders, foggers, and natural options for UK homes.',
    href: '/best/flea-treatments',
  },
  {
    emoji: '🐜',
    title: 'Best Ant Killers UK 2026',
    description: 'Bait stations, gel baits, powders and sprays — the best ant killer products.',
    href: '/best/ant-killers',
  },
  {
    emoji: '🐿️',
    title: 'Best Squirrel Deterrents UK 2026',
    description: 'Squirrel-proof bird feeders, repellent sprays, baffles, and humane traps.',
    href: '/best/squirrel-deterrents',
  },
  {
    emoji: '🦊',
    title: 'Best Fox Deterrents UK 2026',
    description: 'Ultrasonic repellers, scent deterrents, motion-activated sprinklers, and garden fencing.',
    href: '/best/fox-deterrents',
  },
  {
    emoji: '🐟',
    title: 'Best Silverfish Treatments UK 2026',
    description: 'Diatomaceous earth, killer sprays, traps, dehumidifiers, and insecticidal powders.',
    href: '/best/silverfish-treatments',
  },
  {
    emoji: '🪵',
    title: 'Best Woodworm Treatments UK 2026',
    description: 'Permethrin fluids, boron gels, spray treatments, injection kits, and moisture meters.',
    href: '/best/woodworm-treatments',
  },
  {
    emoji: '🪲',
    title: 'Best Carpet Beetle Treatments UK 2026',
    description: 'Insecticidal sprays, pheromone traps, killer powders, treatment kits, and cedar repellents.',
    href: '/best/carpet-beetle-treatments',
  },
  {
    emoji: '🐦',
    title: 'Best Bird Deterrents UK 2026',
    description: 'Bird spikes, netting, optical gel, and more — the best pigeon and bird deterrents.',
    href: '/best/bird-deterrents',
  },
  {
    emoji: '🦋',
    title: 'Best Moth Killers UK 2026',
    description: 'Hanging killers, pheromone traps, carpet sprays, sachets, and budget options.',
    href: '/best/moth-killers',
  },
  {
    emoji: '🪰',
    title: 'Best Commercial Fly Killers UK 2026',
    description: 'UV zappers, glue board units, and LED models for restaurants, kitchens, and food businesses.',
    href: '/best/commercial-fly-killers',
  },
  {
    emoji: '🪤',
    title: 'Best Commercial Rodent Bait Stations UK 2026',
    description: 'Tamper-resistant lockable bait stations for warehouses, restaurants, and commercial premises.',
    href: '/best/commercial-rodent-bait-stations',
  },
  {
    emoji: '🔍',
    title: 'Best Commercial Insect Monitors UK 2026',
    description: 'Bed bug interceptors, glue traps, and insect monitoring devices for hotels and commercial premises.',
    href: '/best/commercial-insect-monitors',
  },
  {
    emoji: '🕊️',
    title: 'Best Commercial Bird Proofing UK 2026',
    description: 'Heavy-duty netting, stainless steel spikes, bird wire systems, optical gel, and solar panel mesh for commercial premises.',
    href: '/best/commercial-bird-proofing',
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Guides</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Pest Control Guides &amp; Expert Advice
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
            Our in-depth guides cover everything from identifying pests to choosing the right treatment. Written by pest control experts, updated for 2026.
          </p>
        </div>
      </section>

      {/* Pest Control Guides */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-l-4 border-amber-500 pl-4 mb-8">
          Pest Control Guides
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className={`group block p-6 bg-white rounded-xl border hover:shadow-lg transition-all ${'badge' in guide && guide.badge ? 'border-purple-300 hover:border-purple-400 ring-1 ring-purple-100' : 'border-gray-200 hover:border-blue-300'}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{guide.emoji}</span>
                <div>
                  {'badge' in guide && guide.badge && (
                    <span className="inline-block text-xs font-semibold px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full mb-2">
                      {guide.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                  <span className="text-sm text-blue-600 font-medium group-hover:translate-x-1 inline-block transition-transform">
                    Read guide &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Guides */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-l-4 border-amber-500 pl-4 mb-8">
            Product Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <Link
                key={review.href}
                href={review.href}
                className="group block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-amber-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{review.emoji}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-1">
                      {review.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{review.description}</p>
                    <span className="text-sm text-amber-600 font-medium group-hover:translate-x-1 inline-block transition-transform">
                      Read guide &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FindProviderCTA */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <FindProviderCTA
          heading="Need Professional Help?"
          subtext="Compare pest control providers in your area — free, no-obligation quotes."
        />
      </section>
    </div>
  );
}
