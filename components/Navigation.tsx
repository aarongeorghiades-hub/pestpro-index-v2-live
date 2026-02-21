'use client';
// Cache bust: 2025-02-19-r4

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFindPestControlOpen, setIsFindPestControlOpen] = useState(false);
  const [isPestProductsOpen, setIsPestProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Check if Resources tab should be active
  const isResourcesActive = pathname?.startsWith('/blog') || pathname?.startsWith('/resources');
  const isHomeActive = pathname === '/';
  const isFindPestControlActive = pathname?.startsWith('/residential') || pathname?.startsWith('/commercial') || pathname?.startsWith('/birmingham') || pathname?.startsWith('/manchester') || pathname?.startsWith('/liverpool') || pathname?.startsWith('/pest-control');
  const isProductsActive = pathname === '/products' || pathname === '/commercial-products';
  const isProfessionalsActive = pathname === '/professionals';
  const isContactActive = pathname === '/contact';

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close all dropdowns when clicking outside the nav
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsFindPestControlOpen(false);
        setIsPestProductsOpen(false);
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pestProducts = [
    { label: 'Home Products', href: '/products' },
    { label: 'Commercial Products', href: '/commercial-products' },
  ];

  const regions = [
    { name: 'Greater London', href: '/pest-control/greater-london', status: 'live' },
    { name: 'West Midlands', href: '/pest-control/west-midlands', status: 'live' },
    { name: 'North West', href: '/pest-control/north-west', status: 'live' },
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

  const quickLinks = [
    { label: 'London Residential', href: '/residential' },
    { label: 'London Commercial', href: '/commercial' },
    { label: 'Birmingham Residential', href: '/birmingham/residential' },
    { label: 'Birmingham Commercial', href: '/birmingham/commercial' },
    { label: 'Manchester Residential', href: '/manchester/residential' },
    { label: 'Manchester Commercial', href: '/manchester/commercial' },
    { label: 'Liverpool Residential', href: '/liverpool/residential' },
    { label: 'Liverpool Commercial', href: '/liverpool/commercial' },
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
      <nav ref={navRef} className="sticky top-0 z-50 nav-header bg-gradient-to-r from-[#050812] via-[#1e3a8a] to-[#050812] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 logo-container bg-white rounded-lg p-2">
            <Image 
              src="/logo-header.png" 
              alt="PestPro Index Logo" 
              width={230} 
              height={56}
              className="h-auto"
            />
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            className={`px-4 py-2 font-semibold text-base transition-colors duration-200 ${isHomeActive ? 'text-white border-b-2 border-white' : 'text-white hover:text-white/80'}`}
          >
            Home
          </Link>
          
          {/* Find Pest Control Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setIsFindPestControlOpen(!isFindPestControlOpen); setIsPestProductsOpen(false); setIsResourcesOpen(false); }}
              className={`px-4 py-2 font-semibold text-base transition-colors duration-200 flex items-center gap-1 ${isFindPestControlActive ? 'text-white border-b-2 border-white' : 'text-white hover:text-white/80'}`}
            >
              Find Pest Control ▾
            </button>
            
            {isFindPestControlOpen && (
              <div className="absolute top-full mt-2 left-0 bg-gradient-to-b from-[#1e3a8a] to-[#050812] border border-white/20 rounded-xl shadow-lg min-w-[280px] max-h-[500px] overflow-y-auto z-50">
                {/* Browse by Region Section */}
                <div className="px-4 py-3 text-white/60 text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                  Browse by Region
                </div>
                {regions.map((region) => (
                  <Link
                    key={region.href}
                    href={region.href}
                    className="block px-6 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                    onClick={() => setIsFindPestControlOpen(false)}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={region.status === 'coming-soon' ? 'text-white/70' : 'text-white'}>
                        {region.name}
                      </span>
                      {region.status === 'coming-soon' && (
                        <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-300 rounded font-semibold">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
                
                {/* Divider */}
                <div className="border-t-2 border-white/20 my-2"></div>
                
                {/* Quick Links Section */}
                <div className="px-4 py-3 text-white/60 text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                  Quick Links
                </div>
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-6 py-3 text-white/90 hover:bg-white/10 hover:text-white transition-colors text-sm"
                    onClick={() => setIsFindPestControlOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Pest Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setIsPestProductsOpen(!isPestProductsOpen); setIsFindPestControlOpen(false); setIsResourcesOpen(false); }}
              className={`px-4 py-2 font-semibold text-base transition-colors duration-200 flex items-center gap-1 ${isProductsActive ? 'text-white border-b-2 border-white' : 'text-white hover:text-white/80'}`}
            >
              Products ▾
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

          <Link
            href="/professionals"
            className={`px-4 py-2 font-semibold text-base transition-colors duration-200 ${isProfessionalsActive ? 'text-white border-b-2 border-white' : 'text-white hover:text-white/80'}`}
          >
            For Pest Professionals
          </Link>
          
          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setIsResourcesOpen(!isResourcesOpen); setIsFindPestControlOpen(false); setIsPestProductsOpen(false); }}
              className={`px-4 py-2 font-semibold text-base transition-colors duration-200 flex items-center gap-1 ${isResourcesActive ? 'text-white border-b-2 border-white' : 'text-white hover:text-white/80'}`}
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
                <Link
                  href="/resources"
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Industry Resources
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`px-4 py-2 font-semibold text-base transition-colors duration-200 ${isContactActive ? 'text-white border-b-2 border-white' : 'text-white hover:text-white/80'}`}
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
            <Link
              href="/"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Find Pest Control Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
                Find Pest Control
              </div>
              
              {/* Browse by Region */}
              <div className="px-4 py-2 text-white/50 text-xs font-light">
                Browse by Region
              </div>
              {regions.map((region) => (
                <Link
                  key={region.href}
                  href={region.href}
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className={region.status === 'coming-soon' ? 'text-white/70' : 'text-white'}>
                      {region.name}
                    </span>
                    {region.status === 'coming-soon' && (
                      <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-300 rounded font-semibold">
                        Soon
                      </span>
                    )}
                  </div>
                </Link>
              ))}
              
              {/* Quick Links */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="px-4 py-2 text-white/50 text-xs font-light">
                  Quick Links
                </div>
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Mobile Pest Products Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
                Products
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

            <Link
              href="/professionals"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              For Pest Professionals
            </Link>
            
            {/* Mobile Resources Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
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
