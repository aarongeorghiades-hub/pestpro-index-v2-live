import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Pest Control Products UK 2026 | PestPro Index',
  description: 'Expert-reviewed pest control products — sprays, traps, baits and professional equipment. Find the best products for every pest.',
  alternates: {
    canonical: 'https://pestproindex.com/best',
  },
  openGraph: {
    title: 'Best Pest Control Products UK 2026 | PestPro Index',
    description: 'Expert-reviewed pest control products — sprays, traps, baits and professional equipment. Find the best products for every pest.',
    url: 'https://pestproindex.com/best',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Pest Control Products UK 2026 | PestPro Index',
    description: 'Expert-reviewed pest control products — sprays, traps, baits and professional equipment for every pest.',
  },
};

interface Category {
  slug: string;
  name: string;
  description: string;
}

const categories: { heading: string; items: Category[] }[] = [
  {
    heading: 'Rats & Mice',
    items: [
      { slug: 'rat-traps', name: 'Best Rat Traps', description: 'Snap, electronic, humane and bait-station options tested and reviewed.' },
      { slug: 'rat-poison', name: 'Best Rat Poison', description: 'UK-legal rodenticides compared for domestic use.' },
      { slug: 'rat-bait-stations', name: 'Best Rat Bait Stations', description: 'Tamper-resistant stations for safe rat control.' },
      { slug: 'rat-poison-for-gardens', name: 'Best Garden Rat Poison', description: 'Outdoor-use rodenticides for gardens and outbuildings.' },
      { slug: 'mouse-traps', name: 'Best Mouse Traps', description: 'Classic, humane and electronic mouse traps reviewed.' },
      { slug: 'mouse-poison', name: 'Best Mouse Poison', description: 'Effective UK-available mouse rodenticides.' },
      { slug: 'mouse-bait-stations', name: 'Best Mouse Bait Stations', description: 'Child- and pet-safe mouse bait stations.' },
      { slug: 'mouse-repellent', name: 'Best Mouse Repellent', description: 'Repellent options to keep mice away from your home.' },
    ],
  },
  {
    heading: 'Insects',
    items: [
      { slug: 'ant-killers', name: 'Best Ant Killers', description: 'Sprays, powders and baits for UK ant species.' },
      { slug: 'ant-gel-bait', name: 'Best Ant Gel Bait', description: 'Colony-eliminating gel baits reviewed.' },
      { slug: 'cockroach-killers', name: 'Best Cockroach Killers', description: 'Effective treatments for German and Oriental cockroaches.' },
      { slug: 'cockroach-gel-bait', name: 'Best Cockroach Gel Bait', description: 'Professional-grade gel baits for cockroach control.' },
      { slug: 'wasp-killers', name: 'Best Wasp Killers', description: 'Sprays, foams and traps for wasp nests and individual wasps.' },
      { slug: 'wasp-nest-foam', name: 'Best Wasp Nest Foam', description: 'Foaming aerosols for direct nest treatment.' },
      { slug: 'fly-killer-indoor', name: 'Best Indoor Fly Killers', description: 'Electric and UV fly killers for homes and small offices.' },
      { slug: 'drain-fly-killer', name: 'Best Drain Fly Killer', description: 'Targeted treatments for drain fly infestations.' },
      { slug: 'flea-treatments', name: 'Best Flea Treatments', description: 'Complete home flea treatment regimens compared.' },
      { slug: 'flea-spray-for-home', name: 'Best Flea Spray for Home', description: 'Insecticide sprays for carpets, soft furnishings and pet areas.' },
      { slug: 'flea-fogger', name: 'Best Flea Fogger', description: 'Whole-room flea foggers for severe infestations.' },
      { slug: 'silverfish-treatments', name: 'Best Silverfish Treatments', description: 'Baits, sprays and traps for silverfish control.' },
      { slug: 'woodworm-treatments', name: 'Best Woodworm Treatments', description: 'Professional-grade woodworm treatments for UK timber.' },
      { slug: 'carpet-beetle-treatments', name: 'Best Carpet Beetle Treatments', description: 'Sprays and powders for carpet beetle infestations.' },
      { slug: 'moth-killers', name: 'Best Moth Killers', description: 'Treatments for clothes, carpet and pantry moths.' },
      { slug: 'moth-traps', name: 'Best Moth Traps', description: 'Pheromone-based moth traps for monitoring and control.' },
      { slug: 'bed-bug-treatments', name: 'Best Bed Bug Treatments', description: 'Complete bed bug treatment systems reviewed.' },
      { slug: 'bed-bug-spray', name: 'Best Bed Bug Spray', description: 'UK-available insecticide sprays for bed bugs.' },
      { slug: 'bed-bug-mattress-encasement', name: 'Best Bed Bug Mattress Encasements', description: 'Certified encasements to trap and prevent bed bugs.' },
      { slug: 'spider-repellent', name: 'Best Spider Repellent', description: 'Natural and chemical spider deterrents compared.' },
    ],
  },
  {
    heading: 'Wildlife & Birds',
    items: [
      { slug: 'fox-deterrents', name: 'Best Fox Deterrents', description: 'Ultrasonic, chemical and physical fox deterrents tested.' },
      { slug: 'squirrel-deterrents', name: 'Best Squirrel Deterrents', description: 'Stop squirrels accessing lofts, feeders and gardens.' },
      { slug: 'mole-traps', name: 'Best Mole Traps', description: 'Professional scissor and tunnel mole traps reviewed.' },
      { slug: 'bird-deterrents', name: 'Best Bird Deterrents', description: 'Spikes, nets, sonic and visual bird deterrents.' },
      { slug: 'pigeon-spikes', name: 'Best Pigeon Spikes', description: 'Stainless steel and plastic pigeon spikes compared.' },
    ],
  },
  {
    heading: 'General & Preventative',
    items: [
      { slug: 'ultrasonic-pest-repellers', name: 'Best Ultrasonic Pest Repellers', description: 'Do ultrasonic repellers work? Our tested picks.' },
    ],
  },
  {
    heading: 'Professional & Commercial',
    items: [
      { slug: 'professional-bait-station-kits', name: 'Professional Bait Station Kits', description: 'Complete rodent bait station kits for professionals.' },
      { slug: 'professional-bed-bug-steamers', name: 'Professional Bed Bug Steamers', description: 'High-temperature steamers for professional bed bug treatment.' },
      { slug: 'professional-bird-netting-kits', name: 'Professional Bird Netting Kits', description: 'Commercial-grade bird exclusion netting systems.' },
      { slug: 'professional-insect-light-traps', name: 'Professional Insect Light Traps', description: 'UV insect light traps for commercial kitchens and food premises.' },
      { slug: 'professional-mattress-encasements', name: 'Professional Mattress Encasements', description: 'Commercial-grade encasements for hotels and rentals.' },
      { slug: 'professional-pressure-sprayers', name: 'Professional Pressure Sprayers', description: 'Knapsack and compression sprayers for professional use.' },
      { slug: 'professional-ulv-foggers', name: 'Professional ULV Foggers', description: 'Cold-fog ULV machines for professional pest control.' },
      { slug: 'commercial-bird-proofing', name: 'Commercial Bird Proofing', description: 'Bird proofing systems for commercial premises.' },
      { slug: 'commercial-dehumidifiers', name: 'Commercial Dehumidifiers', description: 'Heavy-duty dehumidifiers for pest and mould control.' },
      { slug: 'commercial-fly-killers', name: 'Commercial Fly Killers', description: 'Insect electrocutors and glueboard killers for food premises.' },
      { slug: 'commercial-insect-monitors', name: 'Commercial Insect Monitors', description: 'Monitoring traps for commercial IPM programmes.' },
      { slug: 'commercial-rodent-bait-stations', name: 'Commercial Rodent Bait Stations', description: 'Heavy-duty tamper-resistant stations for commercial use.' },
    ],
  },
  {
    heading: 'Damp & Mould',
    items: [
      { slug: 'awaabs-law-damp-mould-equipment', name: "Awaab's Law Damp & Mould Equipment", description: 'Equipment for landlords to meet damp and mould obligations.' },
      { slug: 'damp-proof-paint-mould-treatment', name: 'Damp-Proof Paint & Mould Treatment', description: 'Paints and treatments to prevent damp and mould.' },
    ],
  },
];

export default function BestProductsHubPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
      { '@type': 'ListItem', position: 2, name: 'Best Pest Control Products', item: 'https://pestproindex.com/best' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-32">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)'}}></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)'}}></div>
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.3) 100%)'}}></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4" style={{fontWeight: 900, letterSpacing: '-0.05em'}}>
            Best Pest Control Products
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 tracking-wide max-w-3xl mx-auto">
            Expert-reviewed sprays, traps, baits and professional equipment — for every pest.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            PestPro Index reviews the pest control products available to UK homeowners, landlords and professionals. Each guide covers what&apos;s available, what works, safety considerations, and our specific recommendations — whether you&apos;re dealing with a one-off mouse problem or managing a commercial pest programme. Browse by pest type or category below.
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((cat) => (
        <section key={cat.heading} className="py-12 bg-gray-50 even:bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">{cat.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <Link key={item.slug} href={`/best/${item.slug}`}>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1 cursor-pointer border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm">
                      Read Review →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Need a professional instead?</h2>
          <p className="text-lg mb-10 text-blue-100">
            For serious infestations, our directory lists verified UK pest control providers — no lead fees, no commissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/residential" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all">
              Browse Residential Providers →
            </Link>
            <Link href="/commercial" className="px-8 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-all border-2 border-white">
              Browse Commercial Providers →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">Browse</h4>
              <ul className="space-y-2">
                <li><Link href="/residential" className="hover:text-white transition">Residential</Link></li>
                <li><Link href="/commercial" className="hover:text-white transition">Commercial</Link></li>
                <li><Link href="/professionals" className="hover:text-white transition">For Professionals</Link></li>
                <li><Link href="/pest-control" className="hover:text-white transition">By Borough</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="hover:text-white transition">Home Products</Link></li>
                <li><Link href="/commercial-products" className="hover:text-white transition">Commercial Products</Link></li>
                <li><Link href="/best" className="hover:text-white transition">Best Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/guides" className="hover:text-white transition">Guides</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2026 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
