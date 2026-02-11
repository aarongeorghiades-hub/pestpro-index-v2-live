'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
    { href: '/professionals', label: 'For Pest Professionals' },
    { href: '/contact', label: 'Contact' },
  ];

  const products = [
    { label: 'Home Products', href: '/products' },
    { label: 'Commercial Products', href: '/commercial-products' },
  ];

  const regions = [
    {
      name: 'Birmingham & West Midlands',
      links: [
        { label: 'Residential', href: '/birmingham/residential' },
        { label: 'Commercial', href: '/birmingham/commercial' },
      ]
    },
    {
      name: 'London & Greater London',
      links: [
        { label: 'Residential', href: '/residential' },
        { label: 'Commercial', href: '/commercial' },
      ]
    }
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
          
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10 flex items-center gap-2"
            >
              Products ▾
            </button>
            
            {isProductsOpen && (
              <div className="absolute top-full mt-2 left-0 bg-gradient-to-b from-[#1e3a8a] to-[#050812] border border-white/20 rounded-xl shadow-lg min-w-max z-50">
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block px-6 py-3 text-white hover:bg-white/10 transition-colors first:pt-3 last:pb-3"
                    onClick={() => setIsProductsOpen(false)}
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
              <div className="absolute top-full mt-2 left-0 bg-gradient-to-b from-[#1e3a8a] to-[#050812] border border-white/20 rounded-xl shadow-lg min-w-max z-50">
                <div className="px-4 py-3 text-white/60 text-sm font-light border-b border-white/10">
                  Pick your closest region
                </div>
                {regions.map((region, idx) => (
                  <div key={idx} className="border-b border-white/10 last:border-b-0">
                    <div className="px-6 py-2 text-white font-medium text-sm">
                      {region.name}
                    </div>
                    <div className="px-6 pb-3 flex gap-2 text-white/80 text-sm">
                      {region.links.map((link, linkIdx) => (
                        <div key={link.href}>
                          <Link
                            href={link.href}
                            className="hover:text-white transition-colors"
                            onClick={() => setIsRegionsOpen(false)}
                          >
                            {link.label}
                          </Link>
                          {linkIdx < region.links.length - 1 && <span className="mx-2">|</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
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
            
            {/* Mobile Products Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-sm font-light">
                Products
              </div>
              {products.map((product) => (
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
                <div key={idx} className="mt-2">
                  <div className="px-4 py-2 text-white font-medium text-sm">
                    {region.name}
                  </div>
                  {region.links.map((link) => (
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
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
