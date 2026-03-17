import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import FindProviderCTA from '@/components/FindProviderCTA';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pest Control Guides & Expert Advice | PestPro Index',
    description:
      'Free, comprehensive UK pest control guides. How to identify, treat, and prevent rats, mice, wasps, bed bugs, cockroaches and more. Plus honest product reviews and cost breakdowns.',
    alternates: {
      canonical: 'https://pestproindex.com/guides',
    },
    openGraph: {
      title: 'Pest Control Guides & Expert Advice | PestPro Index',
      description:
        'Free, comprehensive UK pest control guides. How to identify, treat, and prevent rats, mice, wasps, bed bugs, cockroaches and more. Plus honest product reviews and cost breakdowns.',
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
    emoji: '🍽️',
    title: 'Restaurant Pest Control',
    description: 'Legal requirements, EHO inspections, HACCP compliance, and setting up a pest management programme for your food business.',
    href: '/guides/restaurant-pest-control',
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
    description: 'Snap traps, electronic traps, and humane options — tested and reviewed.',
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
    description: 'Nest killer sprays, insecticidal powders, and outdoor traps reviewed.',
    href: '/best/wasp-killers',
  },
  {
    emoji: '🛏️',
    title: 'Best Bed Bug Treatments UK 2026',
    description: 'Sprays, powders, mattress encasements, and monitoring traps compared.',
    href: '/best/bed-bug-treatments',
  },
  {
    emoji: '🪳',
    title: 'Best Cockroach Killers UK 2026',
    description: 'Professional-grade gel baits, sprays, powders, and monitoring traps reviewed.',
    href: '/best/cockroach-killers',
  },
  {
    emoji: '🦟',
    title: 'Best Flea Treatments UK 2026',
    description: 'Household sprays, powders, foggers, and natural options reviewed for UK homes.',
    href: '/best/flea-treatments',
  },
  {
    emoji: '🐜',
    title: 'Best Ant Killers UK 2026',
    description: 'Bait stations, gel baits, powders and sprays — the best ant killer products reviewed.',
    href: '/best/ant-killers',
  },
  {
    emoji: '🐿️',
    title: 'Best Squirrel Deterrents UK 2026',
    description: 'Squirrel-proof bird feeders, repellent sprays, baffles, and humane traps reviewed.',
    href: '/best/squirrel-deterrents',
  },
  {
    emoji: '🐦',
    title: 'Best Bird Deterrents UK 2026',
    description: 'Bird spikes, netting, optical gel, and more — the best pigeon and bird deterrents reviewed.',
    href: '/best/bird-deterrents',
  },
  {
    emoji: '🦋',
    title: 'Best Moth Killers UK 2026',
    description: 'Hanging killers, pheromone traps, carpet sprays, sachets, and budget options reviewed.',
    href: '/best/moth-killers',
  },
  {
    emoji: '🪰',
    title: 'Best Commercial Fly Killers UK 2026',
    description: 'UV zappers, glue board units, and LED models for restaurants, kitchens, and food businesses reviewed.',
    href: '/best/commercial-fly-killers',
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
              className="group block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{guide.emoji}</span>
                <div>
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

      {/* Product Reviews */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-l-4 border-amber-500 pl-4 mb-8">
            Product Reviews
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
                      Read review &rarr;
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
          subtext="Compare verified pest control providers in your area — free, no-obligation quotes."
        />
      </section>
    </div>
  );
}
