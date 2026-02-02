'use client';
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  const AMAZON_TRACKING_ID = 'pestproindex-21';
  
  function getAmazonLink(asin: string): string {
    return `https://www.amazon.co.uk/dp/${asin}?tag=${AMAZON_TRACKING_ID}`;
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/professionals', label: 'Professionals' },
    { href: '/products', label: 'Home Products' },
    { href: '/commercial-products', label: 'Commercial Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="sticky top-0 z-40 bg-[#0f172a] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo-header.png" 
              alt="PestPro Index Logo" 
              width={180} 
              height={50}
              className="h-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0a1628] via-[#1e3a8a] to-[#0a1628] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            <div className="text-center">Product</div>
            <div className="text-center">Recommendations</div>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100/95 max-w-4xl mx-auto leading-relaxed font-semibold text-center">
            Get the most popular pest control products that are <span className="font-bold text-white">ACTUALLY WORKING</span> for London homeowners <span className="font-bold text-white">RIGHT NOW</span>. Direct Amazon links with live pricing and reviews.
          </p>
        </div>
      </div>

      {/* Overlapping Card */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 -mt-20 mb-20">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-10 md:p-14 border-t-4 border-blue-500/30">
          <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center justify-center gap-4">
            <span className="text-3xl">🎯</span>
            Your Complete Product Arsenal
            <span className="text-3xl">🧪</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Live Product Links</h3>
                <p className="text-gray-600">Click straight through to Amazon - no searching, no guessing. Current prices and Prime delivery.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Organized by Pest Type</h3>
                <p className="text-gray-600">Find exactly what you need in seconds. Filter by your specific pest problem.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-gray-600">Always current. We review the marketplace regularly to make sure you're seeing the most effective products.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Verified UK ASINs</h3>
                <p className="text-gray-600">All products verified from Amazon UK bestsellers with real reviews and pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pest Category Selector */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-black text-gray-900 mb-4 text-center">Jump to Your Pest</h2>
        <p className="text-xl text-gray-600 mb-12 text-center">Click a category to see recommended products</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <a href="#mice" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🐭</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Mice</div>
          </a>
          
          <a href="#rats" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🐀</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Rats</div>
          </a>
          
          <a href="#ants" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🐜</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Ants</div>
          </a>
          
          <a href="#cockroaches" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🪳</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Cockroaches</div>
          </a>
          
          <a href="#bedbugs" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🛏️</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Bed Bugs</div>
          </a>
          
          <a href="#moths" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🦋</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Moths</div>
          </a>
          
          <a href="#silverfish" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🪲</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Silverfish</div>
          </a>
          
          <a href="#fleas" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🦟</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Fleas</div>
          </a>
          
          <a href="#wasps" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🐝</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Wasps</div>
          </a>
          
          <a href="#dehumidifiers" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">💨</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Dehumidifiers</div>
          </a>
          
          <a href="#booklice" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">📚</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600 text-sm">Booklice</div>
          </a>
        </div>
      </div>

      {/* Main Products Container */}
      <div className="max-w-7xl mx-auto px-4 space-y-20 mb-20">
        
        {/* MICE SECTION */}
        <section id="mice" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🐭</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Mice Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              London's Victorian housing stock creates perfect mice entry points through aging brickwork and gaps around pipes. These products tackle both the infestation and the prevention with professional-grade traps, humane options, and proofing materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'ROSHIELD 6-Pack Mouse Trap', asin: 'B01NB0QNPI', rating: '★★★★★', note: 'Amazon Choice', desc: 'Professional quality snap traps. 5K+ reviews, trusted by pest controllers.' },
              { name: 'Trisiki 6-Pack Mouse Trap', asin: 'B08ML78RC5', rating: '★★★★☆', note: 'Heavy duty', desc: 'Heavy duty, high sensitivity snap traps. Effective for persistent problems.' },
              { name: 'ASPECTEK 6-Pack Mouse Trap', asin: 'B00HDVUTZA', rating: '★★★★★', note: '5.2K reviews', desc: 'Reusable snap traps with professional design. Reliable and durable.' },
              { name: 'ROSHIELD Humane Mouse Trap 2-Pack', asin: 'B07L8JNPF2', rating: '★★★★☆', note: 'Humane', desc: 'Live catch and release option. Safe for household use.' },
              { name: 'Motel Mouse Humane Trap', asin: 'B09PKWXRGK', rating: '★★★★☆', note: 'Easy clean', desc: 'Reusable humane trap. Easy to clean and reset.' },
              { name: 'REPELEM Peppermint Repellent Sachets', asin: 'B0CGVDXC9C', rating: '★★★★☆', note: 'Natural', desc: 'Natural peppermint deterrent. Prevents mice from entering.' },
              { name: 'Steel Wool Mice Blocker', asin: 'B0842WNTY5', rating: '★★★★★', note: '0000 grade', desc: '0000 grade steel wool for blocking gaps and holes.' },
              { name: 'The Big Cheese Barrier Foam', asin: 'B07KXXX', rating: '★★★★☆', note: 'Expanding foam', desc: 'Stops mouse access through holes and gaps.' },
              { name: 'Wire Mesh Roll for Proofing', asin: 'B09JKHBBC5', rating: '★★★★☆', note: 'Air brick protection', desc: 'Protects air bricks and vents from mouse entry.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* RATS SECTION */}
        <section id="rats" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🐀</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Rats Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rats are larger and more aggressive than mice, requiring heavy-duty traps and bait stations. These professional-grade products are designed specifically for UK rat control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'ROSHIELD 4-Pack Rat Trap', asin: 'B01NB0QNPI', rating: '★★★★★', note: 'Heavy duty', desc: 'Professional quality rat traps. Heavy duty design for large rats.' },
              { name: 'ROSHIELD Rat Bait Station Box', asin: 'B07W9FMLWF', rating: '★★★★★', note: 'Tamper-resistant', desc: 'Lockable bait station. Protects bait from children and pets.' },
              { name: 'Rat Reaper XXL Snap Trap', asin: 'B08V918HNB', rating: '★★★★☆', note: 'Extra large', desc: 'Extra large snap trap designed for UK rats.' },
              { name: 'The Big Cheese Rat Bait Station', asin: 'B088TH1XCS', rating: '★★★★★', note: '19K+ reviews', desc: 'Compact bait station. 19,000+ reviews, proven effective.' },
              { name: 'Steel Wool Rodent Blocker', asin: 'B0842WNTY5', rating: '★★★★☆', note: 'Proofing', desc: 'Heavy gauge steel wool for blocking large gaps.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ANTS SECTION */}
        <section id="ants" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🐜</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Ants Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ant colonies need targeted treatment to eliminate the queen. These products use gel baits and powders that worker ants carry back to the nest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Nippon Ant Killer Gel', asin: 'B000TAUBSC', rating: '★★★★★', note: 'UK #1', desc: 'UK\'s #1 ant killer gel. Eliminates entire colonies.' },
              { name: 'NOPE! Ant Killer Bait Station 6-Pack', asin: 'B08CZRDGVK', rating: '★★★★★', note: '6.4K reviews', desc: '6,400+ reviews. Indoor/outdoor use. Effective colony elimination.' },
              { name: 'Zero In Ant Killer Outdoor Powder 450g', asin: 'B00HKQL90K', rating: '★★★★☆', note: 'Covers 45m²', desc: 'Powder formula. Covers 45 square meters, kills on contact.' },
              { name: 'Combat Ant Killing Gel 27g', asin: 'B000BQT5IG', rating: '★★★★★', note: 'Fipronil', desc: 'Professional strength fipronil gel. Kills whole colony.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* COCKROACHES SECTION */}
        <section id="cockroaches" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🪳</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Cockroaches Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cockroaches are resilient pests requiring professional-grade treatments. These products use gel baits with domino effect formulas to eliminate entire colonies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Advion Cockroach Gel Bait 4x30g', asin: 'B0148W0WOE', rating: '★★★★★', note: 'Professional', desc: 'Professional strength gel. Domino effect kills entire colony.' },
              { name: 'Super Ninja Cockroach Traps 12-Pack', asin: 'B0828YD1HN', rating: '★★★★★', note: '#1 Bestseller', desc: 'Bestselling toxin-free traps. Sticky traps with food attractant.' },
              { name: 'NOPE! CP Cockroach Killer Spray 500ml', asin: 'B074CDY9T4', rating: '★★★★☆', note: 'Odourless', desc: 'Odourless contact killer. Fast-acting spray formula.' },
              { name: 'Pest Expert Cockroach Gel 10g', asin: 'B07ZZGKQ55', rating: '★★★★☆', note: 'Formula IC', desc: 'Formula IC gel. Domino effect bait for cockroaches.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* BED BUGS SECTION */}
        <section id="bedbugs" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🛏️</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Bed Bugs Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bed bugs require a multi-pronged approach: containment, treatment, and prevention. These products work together for effective control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Pest Expert Formula C+ Spray 1L', asin: 'B076KQQT8F', rating: '★★★★★', note: 'Professional', desc: 'Professional strength spray. 12-week protection.' },
              { name: 'Pest Expert Formula P Powder 300g', asin: 'B010E2H2N6', rating: '★★★★☆', note: 'Permethrin', desc: 'Permethrin powder. Puffer pack application.' },
              { name: 'Zero In Bed Bug & Dust Mite Killer 300ml', asin: 'B00B2KP7U0', rating: '★★★★★', note: 'Fast-acting', desc: 'Fast-acting aerosol spray. Kills on contact.' },
              { name: 'Utopia Bedding Mattress Encasement Double', asin: 'B07ZHF4FVK', rating: '★★★★★', note: '13.9K reviews', desc: 'Waterproof mattress encasement. Traps bed bugs inside.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* MOTHS SECTION */}
        <section id="moths" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🦋</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Moths Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clothes moths damage textiles and furs. These products protect wardrobes and storage areas with traps, sprays, and preventative measures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Acana Moth Trap Pheromone', asin: 'B09DYQT2TG', rating: '★★★★★', note: 'Refillable', desc: 'Refillable pheromone trap. Chemical-free monitoring.' },
              { name: 'Zero In Moth Balls 30-Pack', asin: 'B09XBDJ8C3', rating: '★★★★☆', note: '3-month', desc: 'Traditional moth balls. 3-month protection.' },
              { name: 'Zero In Carpet Beetle & Moth Spray 300ml', asin: 'B06Y19DMBG', rating: '★★★★☆', note: 'Odour-free', desc: 'Spray formula. 3-month protection, odour-free.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* SILVERFISH SECTION */}
        <section id="silverfish" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🪲</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Silverfish Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Silverfish thrive in damp conditions and damage paper and textiles. Combine moisture control with targeted treatments for best results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Karlsten Silverfish Killer Spray 600ml', asin: 'B07PTRQWGL', rating: '★★★★★', note: '5m nozzle', desc: 'Long-range spray nozzle. Professional strength formula.' },
              { name: 'Entopest Diatomaceous Earth 1kg', asin: 'B078PQ8LDC', rating: '★★★★☆', note: 'Natural', desc: 'Natural diatomaceous earth. Multi-pest use.' },
              { name: 'Zero In Silverfish Trap 3-Pack', asin: 'B0BV93ZMFT', rating: '★★★★☆', note: 'Pheromone', desc: 'Poison-free pheromone traps. 3-pack.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FLEAS SECTION */}
        <section id="fleas" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🦟</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Fleas Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fleas multiply rapidly and hide in carpets and pet bedding. These products treat both the environment and prevent re-infestation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Indorex Household Flea Spray 500ml', asin: 'B07QDS9M4J', rating: '★★★★★', note: '12-month', desc: 'Household spray. 12-month protection.' },
              { name: 'Zero In Home Flea Powder 300g', asin: 'B00KHV77Y4', rating: '★★★★☆', note: 'Bestseller', desc: 'Powder for carpets and pet bedding.' },
              { name: 'Beaphar Household Flea Powder 300g', asin: 'B001TQRC0K', rating: '★★★★☆', note: 'Pet brand', desc: 'Trusted pet brand. Kills fleas and larvae.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* WASPS SECTION */}
        <section id="wasps" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🐝</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Wasps Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wasps are aggressive and dangerous. These products provide safe, effective nest elimination and prevention for outdoor areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Zero In Ultra Power Wasp Nest Destroyer', asin: 'B000LNS6GM', rating: '★★★★★', note: '4m jet', desc: '4-meter jet spray. Professional strength formula.' },
              { name: 'Zero In Ultra Power XL Wasp Trap', asin: 'B08BJ1LFNS', rating: '★★★★★', note: 'Dual chamber', desc: 'Dual chamber trap. Reusable, ready-baited.' },
              { name: 'Rentokil Wasp Killer Foam', asin: 'B0043E6X9S', rating: '★★★★☆', note: 'Expanding', desc: 'Expanding foam for nest treatment.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* DEHUMIDIFIERS SECTION */}
        <section id="dehumidifiers" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">💨</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Dehumidifiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <strong>Why dehumidifiers matter:</strong> Many London pests thrive in damp conditions. Booklice, mould mites, and silverfish all require humidity above 50% to survive. Reducing moisture is often more effective than pesticides for these pests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Pro Breeze 500ml Dehumidifier', asin: 'B00NFRTVY6', rating: '★★★★★', note: '37K+ reviews', desc: 'Compact mini dehumidifier. UK brand leader.' },
              { name: 'Pro Breeze 1000ml Dehumidifier with Timer', asin: 'B09BP15S29', rating: '★★★★★', note: 'Quiet', desc: 'Medium capacity with timer. Whisper quiet.' },
              { name: 'Pro Breeze 1500ml Dehumidifier', asin: 'B015MZQ7DG', rating: '★★★★★', note: 'Large', desc: 'High capacity for larger rooms.' },
              { name: 'ANSIO Disposable Dehumidifier 10-Pack', asin: 'B00WTAIH7M', rating: '★★★★★', note: '48K reviews', desc: 'No-power solution. Perfect for storage.' },
              { name: 'Pro Breeze 12L/Day Dehumidifier', asin: 'B01M0XOPRB', rating: '★★★★★', note: 'Which? Best Buy', desc: 'Professional-grade. Which? Best Buy winner.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKLICE SECTION */}
        <section id="booklice" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Booklice & Mould Mites (Moisture Absorbers)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Booklice and mould mites thrive in damp conditions. These moisture absorbers reduce humidity levels, making environments inhospitable for these pests without using chemicals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'UniBond AERO 360° Moisture Absorber', asin: 'B00IJLQEIA', rating: '★★★★★', note: 'Refillable', desc: '360-degree moisture absorption. Trusted brand.' },
              { name: 'Kilrock Damp Clear Crystals 500g', asin: 'B07Z8B5H2Q', rating: '★★★★☆', note: 'Crystals', desc: 'Effective moisture absorber crystals.' },
              { name: 'Zero In Damp Rid Refill 3-Pack', asin: 'B00L9J3Q5K', rating: '★★★★☆', note: 'Refills', desc: 'Replacement refills. Convenient 3-pack.' }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 text-sm mr-2">{product.rating}</div>
                  <span className="text-gray-600 text-sm">({product.note})</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{product.desc}</p>
                <a href={getAmazonLink(product.asin)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all">
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-16 mt-32 border-t-2 border-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">PestPro Index</h3>
              <p className="text-gray-400">
                London's neutral pest control directory
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition">Home</Link>
                <Link href="/residential" className="block text-gray-400 hover:text-white transition">Residential</Link>
                <Link href="/commercial" className="block text-gray-400 hover:text-white transition">Commercial</Link>
                <Link href="/products" className="block text-gray-400 hover:text-white transition">Products</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <p className="text-gray-400">
                Free product recommendations for London pest control. All links are Amazon affiliate links.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
