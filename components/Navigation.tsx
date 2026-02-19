'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);
  const [isPestProductsOpen, setIsPestProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
  ];

  const pestProducts = [
    { label: 'Home Products', href: '/products' },
    { label: 'Commercial Products', href: '/commercial-products' },
  ];

  const regions = [
    { name: 'Greater London', href: '/pest-control/greater-london', status: 'live' },
    { name: 'West Midlands', href: '/pest-control/west-midlands', status: 'live' },
    { name: 'North West', href: '/pest-control/north-west', status: 'coming-soon' },
    { name: 'Yorkshire & the Humber', href: '/pest-control/yorkshire-and-the-humber', status: 'coming-soon' },
    { name: 'South East', href: '/pest-control/south-east', status: 'coming-soon' },
    { name: 'South West', href: '/pest-control/south-west', status: 'coming-soon' },
    { name: 'East of England', href: '/pest-control/east-of-england', status: 'coming-soon' },
    { name: 'East Midlands', href: '/pest-control/east-midlands', status: 'coming-soon' },
    { name: 'North East', href: '/pest-control/north-east', status: 'coming-soon' },
    { name: 'Scotland', href: '/pest-control/scotland', status: 'coming-soon' },
    { name: 'Wales', href: '/pest-control/wales', status: 'coming-soon' },
    { name: 'Northern Ireland', href: '/pest-control/northern-ireland', status: 'coming-soon' },
  ];

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .logo-container {
            background: transparent !important;
            padding: 0 !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
      <nav className="sticky top-0 z-50 nav-header bg-gradient-to-r from-[#050812] via-[#1e3a8a] to-[#050812] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 logo-container bg-white rounded-lg p-2">
            <Image 
              src="/logo-header.png" 
              alt="PestPro Index Logo" 
              width={180} 
              height={50}
              className="h-auto"
            />
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          
          {/* Pest Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPestProductsOpen(!isPestProductsOpen)}
              className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10 flex items-center gap-2"
            >
              Pest Products ▾
            </button>
            
            {isPestProductsOpen && (
              <div className="absolute top-full mt-2 left-0 bg-gradient-to-b from-[#1e3a8a] to-[#050812] border border-white/20 rounded-xl shadow-lg min-w-max z-50">
                {pestProducts.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block px-6 py-3 text-white hover:bg-white/10 transition-colors first:pt-3 last:pb-3"
                    onClick={() => setIsPestProductsOpen(false)}
                  >
                    {product.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Regions Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsRegionsOpen(!isRegionsOpen)}
              className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10 flex items-center gap-2"
            >
              Regions ▾
            </button>
            
            {isRegionsOpen && (
              <div className="absolute top-full mt-2 left-0 bg-gradient-to-b from-[#1e3a8a] to-[#050812] border border-white/20 rounded-xl shadow-lg min-w-max z-50 max-h-96 overflow-y-auto">
                <div className="px-4 py-3 text-white/60 text-sm font-light border-b border-white/10">
                  Pick your closest region
                </div>
                {regions.map((region, idx) => (
                  <Link
                    key={idx}
                    href={region.href}
                    className="block px-6 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
                    onClick={() => setIsRegionsOpen(false)}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={region.status === 'coming-soon' ? 'text-white/70' : 'text-white'}>
                        {region.name}
                      </span>
                      {region.status === 'coming-soon' && (
                        <span className="text-xs px-2 py-1 bg-blue-400/20 text-blue-300 rounded">
                          Soon
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/professionals"
            className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10"
          >
            Pest Professionals
          </Link>
          
          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10 flex items-center gap-2"
            >
              Resources ▾
            </button>
            
            {isResourcesOpen && (
              <div className="absolute top-full mt-2 left-0 bg-gradient-to-b from-[#1e3a8a] to-[#050812] border border-white/20 rounded-xl shadow-lg min-w-max z-50">
                <Link
                  href="/blog"
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Guides
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/contact"
            className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#1e3a8a] to-[#050812] border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Pest Products Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-sm font-light">
                Pest Products
              </div>
              {pestProducts.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {product.label}
                </Link>
              ))}
            </div>
            
            {/* Mobile Regions Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-sm font-light">
                Pick your closest region
              </div>
              {regions.map((region, idx) => (
                <Link
                  key={idx}
                  href={region.href}
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className={region.status === 'coming-soon' ? 'text-white/70' : 'text-white'}>
                      {region.name}
                    </span>
                    {region.status === 'coming-soon' && (
                      <span className="text-xs px-2 py-1 bg-blue-400/20 text-blue-300 rounded">
                        Soon
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/professionals"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pest Professionals
            </Link>
            
            {/* Mobile Resources Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-sm font-light">
                Resources
              </div>
              <Link
                href="/blog"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Guides
              </Link>
            </div>

            <Link
              href="/contact"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
