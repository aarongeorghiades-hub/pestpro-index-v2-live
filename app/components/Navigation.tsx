'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  // Force redeploy
  const pathname = usePathname();
  const [regionsOpen, setRegionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/professionals', label: 'For Pest Professionals' },
  ];

  const regionItems = [
    { href: '/residential', label: 'London Residential' },
    { href: '/commercial', label: 'London Commercial' },
    { href: '/birmingham/residential', label: 'Birmingham Residential' },
    { href: '/birmingham/commercial', label: 'Birmingham Commercial' },
  ];

  const resourceItems = [
    { href: '/blog', label: 'Guides' },
    { href: '/products', label: 'Products' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#050812] via-[#1e3a8a] to-[#050812] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo-header.png" alt="PestPro" className="h-8" />
          </Link>
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition ${
                  pathname === item.href
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Regions Dropdown */}
            <div className="relative" onMouseEnter={() => setRegionsOpen(true)} onMouseLeave={() => setRegionsOpen(false)}>
              <button className="px-4 py-2 rounded-lg transition text-white/80 hover:bg-white/10">
                Regions
              </button>
              {regionsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-[200px]">
                  {regionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className="px-4 py-2 rounded-lg transition text-white/80 hover:bg-white/10">
                Resources
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-[200px]">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg transition ${
                pathname === '/contact'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
