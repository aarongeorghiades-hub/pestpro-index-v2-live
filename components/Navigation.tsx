'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isFindProviderOpen, setIsFindProviderOpen] = useState(false);
  const [isPestProductsOpen, setIsPestProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const isHomeActive = pathname === '/';
  const isFindProviderActive = pathname?.startsWith('/residential') || pathname?.startsWith('/commercial') || pathname?.startsWith('/birmingham') || pathname?.startsWith('/manchester') || pathname?.startsWith('/liverpool') || pathname?.startsWith('/leeds') || pathname?.startsWith('/nottingham') || pathname?.startsWith('/brighton') || pathname?.startsWith('/sheffield') || pathname?.startsWith('/bristol') || pathname?.startsWith('/glasgow') || pathname?.startsWith('/bradford') || pathname?.startsWith('/pest-control');
  const isProductsActive = pathname === '/products' || pathname === '/commercial-products';
  const isProfessionalsActive = pathname === '/professionals';
  const isResourcesActive = pathname?.startsWith('/blog') || pathname?.startsWith('/resources') || pathname?.startsWith('/frequently-asked-questions') || pathname?.startsWith('/pest-library') || pathname?.startsWith('/pest/') || pathname?.startsWith('/pest-control-costs') || pathname?.startsWith('/useful-links');
  const isContactActive = pathname === '/contact';

  // Close all dropdowns when clicking outside the nav
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsFindProviderOpen(false);
        setIsPestProductsOpen(false);
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const regions = [
    { name: 'Greater London', href: '/pest-control/greater-london', status: 'live', providerCount: 389 },
    { name: 'West Midlands', href: '/pest-control/west-midlands', status: 'live', providerCount: 42 },
    { name: 'North West', href: '/pest-control/north-west', status: 'live', providerCount: 207 },
    { name: 'Yorkshire & the Humber', href: '/pest-control/yorkshire-and-the-humber', status: 'live', providerCount: 61 },
    { name: 'East Midlands', href: '/pest-control/east-midlands', status: 'live', providerCount: 106 },
    { name: 'South East', href: '/pest-control/south-east', status: 'live', providerCount: 76 },
    { name: 'South Yorkshire', href: '/pest-control/south-yorkshire', status: 'live', providerCount: 53 },
    { name: 'South West', href: '/pest-control/south-west', status: 'live', providerCount: 43 },
    { name: 'Scotland', href: '/pest-control/scotland', status: 'live', providerCount: 60 },
    { name: 'East of England', href: '/pest-control/east-of-england', status: 'coming-soon' },
    { name: 'North East', href: '/pest-control/north-east', status: 'coming-soon' },
    { name: 'Wales', href: '/pest-control/wales', status: 'coming-soon' },
    { name: 'Northern Ireland', href: '/pest-control/northern-ireland', status: 'coming-soon' },
  ];

  const pestProducts = [
    { label: 'Home Pest Products', href: '/products' },
    { label: 'Commercial Products', href: '/commercial-products' },
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
            className={`px-4 py-2 font-semibold text-base transition-colors duration-200 ${isHomeActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
          >
            Home
          </Link>

          {/* Find a Provider Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setIsFindProviderOpen(!isFindProviderOpen); setIsPestProductsOpen(false); setIsResourcesOpen(false); }}
              className={`px-4 py-2 font-semibold text-base transition-colors duration-200 flex items-center gap-1 ${isFindProviderActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Find a Provider ▾
            </button>

            {isFindProviderOpen && (
              <div className="absolute top-full mt-2 left-0 bg-gradient-to-b from-[#1e3a8a] to-[#050812] border border-white/20 rounded-xl shadow-lg min-w-[300px] max-h-[500px] overflow-y-auto z-50">
                {/* Browse by Region Section */}
                <div className="px-4 py-3 text-white/60 text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                  Browse by Region
                </div>
                {regions.map((region) => (
                  region.status === 'live' ? (
                    <Link
                      key={region.href}
                      href={region.href}
                      className="block px-6 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/5"
                      onClick={() => setIsFindProviderOpen(false)}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-white">{region.name}</span>
                        <span className="text-xs text-white/50">{region.providerCount}</span>
                      </div>
                    </Link>
                  ) : (
                    <span
                      key={region.href}
                      className="block px-6 py-3 text-white/40 cursor-default border-b border-white/5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span>{region.name}</span>
                        <span className="text-xs px-2 py-0.5 bg-white/10 text-white/40 rounded font-semibold">
                          Soon
                        </span>
                      </div>
                    </span>
                  )
                ))}

                {/* Divider */}
                <div className="border-t-2 border-white/20 my-2"></div>

                {/* Directory Links */}
                <Link
                  href="/residential"
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsFindProviderOpen(false)}
                >
                  Residential Directory
                </Link>
                <Link
                  href="/commercial"
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsFindProviderOpen(false)}
                >
                  Commercial Directory
                </Link>
              </div>
            )}
          </div>

          {/* Pest Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setIsPestProductsOpen(!isPestProductsOpen); setIsFindProviderOpen(false); setIsResourcesOpen(false); }}
              className={`px-4 py-2 font-semibold text-base transition-colors duration-200 flex items-center gap-1 ${isProductsActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
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

          <Link
            href="/professionals"
            className={`px-4 py-2 font-semibold text-base transition-colors duration-200 ${isProfessionalsActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
          >
            For Professionals
          </Link>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setIsResourcesOpen(!isResourcesOpen); setIsFindProviderOpen(false); setIsPestProductsOpen(false); }}
              className={`px-4 py-2 font-semibold text-base transition-colors duration-200 flex items-center gap-1 ${isResourcesActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Resources ▾
            </button>

            {isResourcesOpen && (
              <div className="absolute top-full mt-2 left-0 bg-gradient-to-b from-[#1e3a8a] to-[#050812] border border-white/20 rounded-xl shadow-lg min-w-max z-50">
                <Link
                  href="/pest-library"
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Pest Guides
                </Link>
                <Link
                  href="/pest-control-costs"
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Pest Control Costs
                </Link>
                <Link
                  href="/blog"
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/frequently-asked-questions"
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Pest Control FAQ
                </Link>
                <Link
                  href="/useful-links"
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Useful Links
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`px-4 py-2 font-semibold text-base transition-colors duration-200 ${isContactActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
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

            {/* Mobile Find a Provider Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
                Find a Provider
              </div>

              {/* Browse by Region */}
              <div className="px-4 py-2 text-white/50 text-xs font-light">
                Browse by Region
              </div>
              {regions.map((region) => (
                region.status === 'live' ? (
                  <Link
                    key={region.href}
                    href={region.href}
                    className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white">{region.name}</span>
                      <span className="text-xs text-white/50">{region.providerCount}</span>
                    </div>
                  </Link>
                ) : (
                  <span
                    key={region.href}
                    className="block px-4 py-3 text-white/40 cursor-default rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span>{region.name}</span>
                      <span className="text-xs px-2 py-0.5 bg-white/10 text-white/40 rounded font-semibold">
                        Soon
                      </span>
                    </div>
                  </span>
                )
              ))}

              {/* Directory Links */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <Link
                  href="/residential"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Residential Directory
                </Link>
                <Link
                  href="/commercial"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Commercial Directory
                </Link>
              </div>
            </div>

            {/* Mobile Pest Products Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
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

            <Link
              href="/professionals"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              For Professionals
            </Link>

            {/* Mobile Resources Section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <div className="px-4 py-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
                Resources
              </div>
              <Link
                href="/pest-library"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pest Guides
              </Link>
              <Link
                href="/pest-control-costs"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pest Control Costs
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/frequently-asked-questions"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pest Control FAQ
              </Link>
              <Link
                href="/useful-links"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Useful Links
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
