import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'UK Homeowner & Property Resources | PestPro Index',
  description:
    'Useful links and resources for UK homeowners — council tax, housing advice, energy efficiency, property prices, and pest control guidance.',
};

const resources = [
  {
    name: 'GOV.UK — Council Tax',
    url: 'https://www.gov.uk/council-tax',
    description:
      'Check your council tax band, find out about discounts, exemptions, and how to challenge your band.',
  },
  {
    name: 'TaxBandCheck',
    url: 'https://taxbandcheck.co.uk',
    description:
      'Free council tax band checker — instantly find out if you might be overpaying on your council tax.',
  },
  {
    name: 'Citizens Advice — Housing',
    url: 'https://www.citizensadvice.org.uk/housing/',
    description:
      'Free, independent advice on renting, repairs, housing rights, and homelessness support across the UK.',
  },
  {
    name: 'Money Saving Expert — Home',
    url: 'https://www.moneysavingexpert.com/home/',
    description:
      'Expert guides on mortgages, energy bills, home insurance, broadband deals, and cutting household costs.',
  },
  {
    name: 'GOV.UK — Home Energy Efficiency',
    url: 'https://www.gov.uk/improve-energy-efficiency',
    description:
      'Government grants and schemes to improve your home\'s energy efficiency, including insulation and heat pumps.',
  },
  {
    name: 'HM Land Registry — House Prices',
    url: 'https://www.gov.uk/search-house-prices',
    description:
      'Search what properties in your area have sold for — free official data from HM Land Registry.',
  },
];

export default function UsefulLinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.7) 100%)',
        }}
      />

      <Navigation />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-32">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.3) 100%)',
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1
            className="text-6xl font-black tracking-tighter mb-4"
            style={{ fontWeight: 900, letterSpacing: '-0.05em' }}
          >
            UK Homeowner &amp; Property Resources
          </h1>
          <p className="text-2xl font-light mb-8 tracking-widest max-w-3xl mx-auto">
            Helpful tools and trusted sources for UK property owners
          </p>
        </div>
      </section>

      {/* BREADCRUMBS + INTRO */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
          <nav className="text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <Link
              href="/resources"
              className="hover:text-white transition-colors"
            >
              Resources
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white/80">Useful Links</span>
          </nav>

          <p className="text-lg text-white/80 max-w-3xl mb-12">
            We&apos;ve compiled a selection of trusted, free resources to help
            UK homeowners manage their property, reduce costs, and stay
            informed. All links open in a new tab.
          </p>
        </div>

        {/* RESOURCE CARDS */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.url}
                  className="group relative bg-white/5 backdrop-blur-sm border-[3px] border-white/40 rounded-xl p-6 hover:border-white/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-300 flex flex-col"
                >
                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {resource.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1">
                      {resource.description}
                    </p>
                    <div>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-all duration-200 hover:gap-3"
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-gray-300 py-16 border-t-2 border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">PestPro Index</h4>
              <p className="text-sm">
                The UK&apos;s neutral pest control directory
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-white transition"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">For Professionals</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/professionals"
                    className="hover:text-white transition"
                  >
                    Grow Your Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commercial"
                    className="hover:text-white transition"
                  >
                    Commercial Directory
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
