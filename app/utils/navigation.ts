export const UNIFIED_NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/residential', label: 'Residential' },
  { href: '/commercial', label: 'Commercial' },
  { href: '/professionals', label: 'Professionals' },
  { href: '/products', label: 'Home Products' },
  { href: '/commercial-products', label: 'Commercial Products' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
];

export const UNIFIED_NAV_HTML = `
<nav className="sticky top-0 z-50 bg-gradient-to-r from-[#050812] via-[#1e3a8a] to-[#050812] shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex space-x-1">
        {[
          { href: '/', label: 'Home' },
          { href: '/residential', label: 'Residential' },
          { href: '/commercial', label: 'Commercial' },
          { href: '/professionals', label: 'Professionals' },
          { href: '/products', label: 'Home Products' },
          { href: '/commercial-products', label: 'Commercial Products' },
          { href: '#', label: 'About' },
          { href: '#', label: 'Contact' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-4 py-2 rounded-lg transition text-white/80 hover:bg-white/10"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
</nav>
`;
