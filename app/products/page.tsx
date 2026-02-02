'use client';
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  // Amazon tracking ID
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
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent"></div>
        
        {/* Grid pattern */}
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
                <h3 className="font-bold text-lg text-gray-900 mb-2">"Why This Works" Explanations</h3>
                <p className="text-gray-600">Context on what makes each product effective for London households.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pest Category Selector */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-black text-gray-900 mb-4 text-center">Jump to Your Pest</h2>
        <p className="text-xl text-gray-600 mb-12 text-center">Click a category to see recommended products</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <a href="#mice" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🐭</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Mice</div>
          </a>
          
          <a href="#rats" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🐀</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Rats</div>
          </a>
          
          <a href="#ants" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🐜</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Ants</div>
          </a>
          
          <a href="#cockroaches" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🪳</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Cockroaches</div>
          </a>
          
          <a href="#bedbugs" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🛏️</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Bed Bugs</div>
          </a>
          
          <a href="#moths" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🦋</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Moths</div>
          </a>
          
          <a href="#silverfish" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🪲</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Silverfish</div>
          </a>
          
          <a href="#fleas" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🦟</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Fleas</div>
          </a>
          
          <a href="#wasps" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🐝</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Wasps</div>
          </a>
          
          <a href="#booklice" className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 text-center">
            <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">📚</div>
            <div className="font-bold text-gray-900 group-hover:text-blue-600">Booklice</div>
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
              London's Victorian housing stock creates perfect mice entry points through aging brickwork and gaps around pipes. These products tackle both the infestation and the prevention with professional-grade traps, humane options, and proofing materials that work in older properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Victor Easy Set Mouse Trap</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(High ratings)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Professional-grade snap trap with easy setting mechanism. Trusted by London pest controllers for decades.
              </p>
              <a
                href={getAmazonLink('B00TU1VL08')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Rotech Multi-Catch Mouse Trap</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Popular choice)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Catch multiple mice without resetting. Ideal for properties with persistent problems.
              </p>
              <a
                href={getAmazonLink('B005838M7W')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Rentokil Enclosed Mouse Trap</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Safe design)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Fully enclosed trap keeps the process out of sight. Safe for homes with children and pets.
              </p>
              <a
                href={getAmazonLink('B071GD1VGN')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Rentokil Mouse Bait Station</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Tamper-resistant)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Secure bait station that prevents children and pets from accessing poison bait.
              </p>
              <a
                href={getAmazonLink('B088TH1XCS')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Catcha Humane Mouse Trap</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Live capture)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Catch and release mice unharmed. Popular with families preferring non-lethal methods.
              </p>
              <a
                href={getAmazonLink('B08H552SK5')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Live Capture Mouse Trap</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Humane option)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Alternative humane trap design with easy release mechanism.
              </p>
              <a
                href={getAmazonLink('B07L8JNPF2')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Natural Mouse Repellent Sachets</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★☆☆</div>
                <span className="text-gray-600 text-sm">(Prevention aid)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Natural peppermint sachets to deter mice from entering spaces. Best used alongside traps.
              </p>
              <a
                href={getAmazonLink('B0CGVDXC9C')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Peppermint Oil Spray</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★☆☆</div>
                <span className="text-gray-600 text-sm">(Natural deterrent)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Spray deterrent for areas where mice enter. Use around skirting boards and entry points.
              </p>
              <a
                href={getAmazonLink('B0CJN8QQ1M')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Steel Wool for Gaps</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Essential proofing)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Fill gaps around pipes and holes in walls. Mice cannot chew through steel wool.
              </p>
              <a
                href={getAmazonLink('B0842WNTY5')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* RATS SECTION */}
        <section id="rats" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🐀</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Rat Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              London's sewers and underground infrastructure make rats a persistent problem, especially in properties near water. These heavy-duty traps, professional baits, and proofing materials are specifically designed for rat control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Snap Trap for Rats</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Heavy duty)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Industrial-strength snap trap designed specifically for rats. More powerful spring than mouse traps.
              </p>
              <a
                href={getAmazonLink('B00BKZW3M8')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Rentokil Rat Trap Station</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Secure housing)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Lockable station that contains traps and prevents access by children and pets.
              </p>
              <a
                href={getAmazonLink('B088TH1XCS')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Rat Poison Pellets</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Effective formula)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Professional-grade poison pellets. Always use with tamper-resistant bait stations.
              </p>
              <a
                href={getAmazonLink('B07ZPBVJ9R')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Pest Stop Rat Killer Bait</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Powerful formula)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Professional-strength poison bait. Always use with tamper-resistant stations.
              </p>
              <a
                href={getAmazonLink('B07ZPBVJ9R')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Electronic Rat Deterrent</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★☆☆</div>
                <span className="text-gray-600 text-sm">(Ultrasonic)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Ultrasonic repellent device. Best used as supplementary prevention, not primary control.
              </p>
              <a
                href={getAmazonLink('B07X4V8JJQ')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Metal Rat Guard Mesh</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Heavy duty proofing)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Galvanized steel mesh to protect drains, vents, and larger access points from rats.
              </p>
              <a
                href={getAmazonLink('B08R3DQPW2')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* ANTS SECTION */}
        <section id="ants" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🐜</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Ant Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Summer brings garden ants into London homes searching for food. These gel baits and sprays target the entire colony, not just the ants you see, with residual formulas that keep working for weeks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Nippon Ant Killer Gel</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Colony elimination)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Most effective ant killer for London homes. Worker ants carry gel back to nest, eliminating the entire colony.
              </p>
              <a
                href={getAmazonLink('B00BCQRRRA')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Ant Bait Stations</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Indoor/outdoor)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Pre-filled stations for placement along ant trails. Safe around pets when used as directed.
              </p>
              <a
                href={getAmazonLink('B08CZRDGVK')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Outdoor Ant Spray</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Perimeter treatment)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Create a protective barrier around doorways, windows, and garden boundaries.
              </p>
              <a
                href={getAmazonLink('B00U7KS7I8')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Ant Powder</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Crack/crevice treatment)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Apply directly to entry points and cracks. Long-lasting residual action.
              </p>
              <a
                href={getAmazonLink('B00HKQL90K')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* COCKROACHES SECTION */}
        <section id="cockroaches" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🪳</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Cockroach Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              London's warm underground stations and heating systems create ideal cockroach habitats. These professional-strength gels and sprays target German and Oriental roaches with residual action that prevents re-infestation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cockroach Gel Bait</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Professional strength)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Professional-grade gel bait used by London pest controllers. Highly effective against German and Oriental cockroaches.
              </p>
              <a
                href={getAmazonLink('B00BCQRRRA')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cockroach Bait Stations</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Ready to use)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Pre-filled stations. Place in corners, under sinks, and dark areas where cockroaches hide.
              </p>
              <a
                href={getAmazonLink('B08CZRDGVK')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cockroach Spray</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Contact kill)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Fast-acting spray for immediate control. Use in kitchens, bathrooms, and under appliances.
              </p>
              <a
                href={getAmazonLink('B00U7KS7I8')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* BED BUGS SECTION */}
        <section id="bedbugs" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🛏️</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Bed Bug Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              London's busy travel and tourism make bed bugs a growing concern. These products target bed bugs in mattresses, furniture, and textiles with specialized formulas designed for bedroom use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Bed Bug Spray</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Fast acting)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Professional-grade spray for mattresses, furniture, and textiles. Kills on contact and residual action.
              </p>
              <a
                href={getAmazonLink('B00BCQRRRA')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Bed Bug Powder</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Diatomaceous earth)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Natural diatomaceous earth powder. Apply to mattress seams and furniture. Non-toxic to humans.
              </p>
              <a
                href={getAmazonLink('B08CZRDGVK')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Mattress Encasement</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Prevention/containment)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Zippered cover that traps bed bugs inside mattress. Essential for bed bug control strategy.
              </p>
              <a
                href={getAmazonLink('B00U7KS7I8')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* MOTHS SECTION */}
        <section id="moths" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🦋</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Moth Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clothes moths and pantry moths damage textiles and contaminate food. These products include pheromone traps, cedar solutions, and storage treatments to protect your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Moth Pheromone Traps</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Detection/control)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Sticky traps with pheromone lure. Catches male moths and helps identify infestations early.
              </p>
              <a
                href={getAmazonLink('B00BCQRRRA')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cedar Blocks</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Natural deterrent)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Natural cedar wood blocks. Place in wardrobes and storage areas to deter clothes moths.
              </p>
              <a
                href={getAmazonLink('B08CZRDGVK')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Pantry Moth Traps</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Food storage protection)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Specialized traps for pantry moths. Place in kitchen cabinets and food storage areas.
              </p>
              <a
                href={getAmazonLink('B00U7KS7I8')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* SILVERFISH SECTION */}
        <section id="silverfish" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🪲</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Silverfish Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Silverfish thrive in damp London homes, damaging paper, books, and textiles. These products target silverfish with specialized baits and environmental controls to reduce moisture and hiding places.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Silverfish Bait Traps</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Effective control)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Specialized traps that attract and kill silverfish. Place in bathrooms, basements, and damp areas.
              </p>
              <a
                href={getAmazonLink('B00BCQRRRA')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Dehumidifier</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Environmental control)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Reduces moisture that silverfish need to thrive. Essential for long-term prevention in damp homes.
              </p>
              <a
                href={getAmazonLink('B08CZRDGVK')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Silverfish Powder</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Direct application)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Powder insecticide for cracks, crevices, and corners where silverfish hide and breed.
              </p>
              <a
                href={getAmazonLink('B00U7KS7I8')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* FLEAS SECTION */}
        <section id="fleas" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🦟</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Flea Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fleas spread quickly through homes with pets. These products include pet treatments, household sprays, and vacuuming aids to break the flea life cycle completely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Household Flea Spray</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Comprehensive treatment)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Kills fleas, larvae, and eggs on carpets and furniture. Use after vacuuming for best results.
              </p>
              <a
                href={getAmazonLink('B00BCQRRRA')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Flea Powder for Pets</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Pet safe)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Natural flea powder for dogs and cats. Safe for pets and family. Apply directly to pet's coat.
              </p>
              <a
                href={getAmazonLink('B08CZRDGVK')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Flea Trap</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Detection/monitoring)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Light-based trap that attracts and captures fleas. Helps monitor flea population during treatment.
              </p>
              <a
                href={getAmazonLink('B00U7KS7I8')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* WASPS SECTION */}
        <section id="wasps" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🐝</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Wasp Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Summer wasps are attracted to food and sweet drinks. These products include traps, sprays, and nest treatments to safely eliminate wasps and prevent nesting around your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wasp Trap</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Reusable)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Reusable trap with attractant. Hang in gardens and patios to catch wasps before they enter the home.
              </p>
              <a
                href={getAmazonLink('B00BCQRRRA')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wasp Spray</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Quick knockdown)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Fast-acting spray for immediate wasp control. Effective up to 3 meters. Use with caution.
              </p>
              <a
                href={getAmazonLink('B08CZRDGVK')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Nest Treatment Powder</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Nest elimination)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Powder for treating wasp nests in eaves and roof spaces. Professional strength formula.
              </p>
              <a
                href={getAmazonLink('B00U7KS7I8')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* BOOKLICE SECTION */}
        <section id="booklice" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Booklice Control Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Booklice thrive in damp, humid conditions and damage books and paper. These products include specialized traps, moisture controls, and targeted treatments for libraries and book collections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Booklice Traps</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Detection)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Sticky traps for monitoring booklice populations. Place near bookshelves and storage areas.
              </p>
              <a
                href={getAmazonLink('B00BCQRRRA')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Silica Gel Desiccant</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★★</div>
                <span className="text-gray-600 text-sm">(Moisture control)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Absorbs moisture that booklice need to survive. Place in book storage and library areas.
              </p>
              <a
                href={getAmazonLink('B08CZRDGVK')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Booklice Spray</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-sm mr-2">★★★★☆</div>
                <span className="text-gray-600 text-sm">(Direct treatment)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Specialized spray for treating books and paper. Safe for use on valuable collections.
              </p>
              <a
                href={getAmazonLink('B00U7KS7I8')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View on Amazon
              </a>
            </div>
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
                <Link href="/" className="block text-gray-400 hover:text-white transition">
                  Home
                </Link>
                <Link href="/residential" className="block text-gray-400 hover:text-white transition">
                  Residential
                </Link>
                <Link href="/commercial" className="block text-gray-400 hover:text-white transition">
                  Commercial
                </Link>
                <Link href="/products" className="block text-gray-400 hover:text-white transition">
                  Products
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <p className="text-gray-400">
                Free product recommendations for London pest control
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 PestPro Index. London's neutral pest control directory.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
