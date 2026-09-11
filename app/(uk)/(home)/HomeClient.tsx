// Deployment triggered - 1770229070
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Shield, TrendingUp, MapPin, Home as HomeIcon, Briefcase } from 'lucide-react'
import Navigation from '@/components/Navigation';
import { useState, useEffect, useRef } from 'react';
import { formatCount } from '@/lib/formatCount';

export interface RegionCount {
  slug: string;
  label: string;
  href: string;
  /** null when the count query failed — the card then renders without a figure. */
  count: number | null;
}

// Counts are fetched server-side in page.tsx so they appear in the initial HTML.
// providerCount is null only when that query failed; the stat is then hidden
// rather than showing a placeholder or a stale number.
export default function Home({
  regionCounts,
  providerCount,
}: {
  regionCounts: RegionCount[];
  providerCount: number | null;
}) {
  const [stats, setStats] = useState({
    providers: providerCount ?? 0,
    cities: regionCounts.length,
  });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // The area grid is 1/2/3/4 columns at base/md/lg/xl. Whenever the card count
  // leaves a remainder of one at a breakpoint, the final card sits alone on its
  // own row and reads as a layout fault, so it spans the full row instead.
  //
  // Every breakpoint is stated explicitly rather than only the ones that need a
  // span: Tailwind's md:/lg: prefixes apply at every width at or above their
  // breakpoint, so an md span left unreset would still be in force at lg and
  // overflow the row. The class strings are literals — Tailwind v4 scans source
  // text and would not emit a class assembled from an interpolated column count.
  const areaCardCount = regionCounts.length;
  const lastAreaCardSpan = [
    areaCardCount % 2 === 1 ? 'md:col-span-2' : 'md:col-span-1',
    areaCardCount % 3 === 1 ? 'lg:col-span-3' : 'lg:col-span-1',
    areaCardCount % 4 === 1 ? 'xl:col-span-4' : 'xl:col-span-1',
  ].join(' ');

  // Count up on scroll to the real, already-known figures.
  useEffect(() => {
    if (providerCount === null) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateStats(providerCount, regionCounts.length);
      }
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated, providerCount, regionCounts.length]);

  const animateStats = (target: number, cityTarget: number) => {
    const duration = 1500;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setStats({
        providers: Math.floor(target * progress),
        cities: Math.floor(cityTarget * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  // EVERY VALUE BELOW IS COPIED FROM SOMEWHERE IT IS ALREADY PUBLISHED ON THIS
  // SITE — S70 R1. Nothing here is new information about the company.
  //   logo         /logo-header.png, the file <Navigation> already renders, at the
  //                absolute URL components/ProviderJsonLd.tsx:18 already uses.
  //                width/height are the file's real pixel dimensions, measured.
  //   address      the postal address published on /privacy under "Who we are":
  //                "61 Bridge Street, Kington, United Kingdom, HR5 3DJ".
  //                addressCountry is the ISO 3166-1 code for the published
  //                "United Kingdom"; it is an encoding of that string, not a
  //                new fact.
  //   contactPoint the only email address on the site, published on both
  //                /contact and /privacy. contactType is a schema.org
  //                enumeration label, not a claim the site makes about itself.
  //
  // sameAs IS DELIBERATELY ABSENT AND MUST NOT BE GUESSED. A host-anchored sweep
  // of app/, components/, lib/ and data/ for twitter, x, facebook, instagram,
  // linkedin, youtube, tiktok, trustpilot and Companies House URLs returns ZERO
  // — the site publishes no external profile of itself anywhere, so there is no
  // established value to copy. Constructing one from the company number would be
  // inventing it. Referred to the PM rather than filled in.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'PestPro Index',
    'url': 'https://pestproindex.com',
    'description': 'The UK\'s neutral pest control and pest removal directory. Compare providers with transparent information. No lead fees or commissions.',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://pestproindex.com/logo-header.png',
      'width': 530,
      'height': 174,
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '61 Bridge Street',
      'addressLocality': 'Kington',
      'postalCode': 'HR5 3DJ',
      'addressCountry': 'GB',
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'customer support',
      'email': 'pestproindex@zohomail.eu',
      'url': 'https://pestproindex.com/contact',
    },
    'areaServed': [
      { '@type': 'City', 'name': 'London' },
      { '@type': 'City', 'name': 'Birmingham' },
      { '@type': 'City', 'name': 'Manchester' },
      { '@type': 'City', 'name': 'Liverpool' },
      { '@type': 'City', 'name': 'Leeds' },
      { '@type': 'City', 'name': 'Nottingham' },
      { '@type': 'City', 'name': 'Brighton' },
      { '@type': 'City', 'name': 'Sheffield' },
      { '@type': 'City', 'name': 'Bristol' },
      { '@type': 'City', 'name': 'Glasgow' },
      { '@type': 'City', 'name': 'Bradford' },
      { '@type': 'City', 'name': 'Newcastle' },
      { '@type': 'City', 'name': 'Cardiff' },
      { '@type': 'City', 'name': 'Edinburgh' },
      { '@type': 'City', 'name': 'Leicester' },
      { '@type': 'City', 'name': 'Coventry' },
      { '@type': 'City', 'name': 'Belfast' },
      { '@type': 'City', 'name': 'Derby' },
      { '@type': 'AdministrativeArea', 'name': 'Hampshire' }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navigation />

      {/* HERO SECTION */}
      {/* HERO — S72 PILOT. The three stacked radial-gradient "glow" layers and
          the navy-to-blue gradient are gone: near-black plus a luminous accent is
          one of the exact combinations this pilot is meant to avoid, and three
          absolutely-positioned overlays were painting 1,400px of viewport before
          a reader reached a single word. Paper ground, ink type, one ochre rule. */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-surface)] py-20 md:py-28">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-black tracking-tighter text-[var(--color-ink)] sm:text-6xl md:text-7xl" style={{fontWeight: 900, letterSpacing: '-0.04em'}}>PestPro Index</h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-[var(--color-ink-soft)] md:text-xl">The UK&rsquo;s neutral pest control directory</p>
          <p className="mx-auto mb-14 max-w-2xl text-base leading-relaxed text-[var(--color-ink-soft)]">
            Find pest controllers near you. No lead fees. No commissions. No sponsored rankings.
          </p>

          {/* Stats. The labels were set ALL-CAPS with tracking-widest — an
              eyebrow treatment this pilot rules out — so they are now sentence
              case. The FIGURES are Geist Mono, which is what that typeface is
              reserved for. */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8" ref={statsRef}>
            {providerCount !== null && (
              <div className="border-b border-[var(--color-rule)] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
                <div className="spec-figure mb-1 text-4xl font-black text-[var(--color-ink)] sm:text-5xl">{formatCount(stats.providers)}</div>
                <div className="text-sm text-[var(--color-ink-mute)]">Providers listed</div>
              </div>
            )}
            <div className="pt-4 sm:pl-8 sm:pt-0">
              <div className="spec-figure mb-1 text-4xl font-black text-[var(--color-ink)] sm:text-5xl">{formatCount(stats.cities)}</div>
              <div className="text-sm text-[var(--color-ink-mute)]">Areas covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-paper)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-black text-[var(--color-ink)] md:text-4xl">
              Pest Control Products
            </h2>
            <p className="text-lg text-[var(--color-ink-soft)]">
              Sort it yourself, or find a provider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] p-8 transition-colors duration-200 hover:border-[var(--color-ochre-edge)]">
              <div className="flex items-center gap-3 mb-4">
                <HomeIcon className="h-6 w-6 text-[var(--color-ochre-deep)]" />
                <h3 className="text-xl font-bold text-[var(--color-ink)]">Pest Control Products for Your Home</h3>
              </div>
              <p className="mb-6 flex-grow text-[var(--color-ink-soft)]">
                Organised by pest type. Every product links straight to the item on Amazon UK.
              </p>
              <Link href="/products" className="block rounded-lg bg-[var(--color-ochre)] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[var(--color-ochre-deep)]">
                View home products
              </Link>
            </div>

            <div className="flex flex-col rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] p-8 transition-colors duration-200 hover:border-[var(--color-ochre-edge)]">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-6 w-6 text-[var(--color-ochre-deep)]" />
                <h3 className="text-xl font-bold text-[var(--color-ink)]">Pest Control Products for Business</h3>
              </div>
              <p className="mb-6 flex-grow text-[var(--color-ink-soft)]">
                Professional-grade equipment and treatments for commercial premises, organised by pest type.
              </p>
              <Link href="/commercial-products" className="block rounded-lg bg-[var(--color-ochre)] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[var(--color-ochre-deep)]">
                View commercial products
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* REGION PICKER SECTION */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-paper)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-black text-[var(--color-ink)] md:text-4xl">
              Find Pest Control in Your Region
            </h2>
            <p className="text-lg text-[var(--color-ink-soft)]">
              Browse providers across the UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {regionCounts.map((region, i) => (
              <div key={region.slug} className={`rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] p-8 transition-colors duration-200 hover:border-[var(--color-ochre-edge)]${i === areaCardCount - 1 ? ` ${lastAreaCardSpan}` : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-[var(--color-ochre-deep)]" />
                  <h3 className="text-xl font-bold text-[var(--color-ink)]">{region.label}</h3>
                </div>
                {region.count !== null && (
                  <p className="spec-figure mb-4 text-2xl font-black text-[var(--color-ink)]">{formatCount(region.count)} providers</p>
                )}
                <Link href={region.href} className="block rounded-lg bg-[var(--color-ochre)] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[var(--color-ochre-deep)]">
                  Browse {region.label}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BUILT OUT OF FRUSTRATION */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-paper-sunk)] to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-[var(--color-ink)] mb-12 text-center">
            Built Out of Frustration.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-teal-deep)] to-[var(--color-teal)]">Designed for Clarity.</span>
          </h2>

          <div className="space-y-8 text-lg text-[var(--color-ink-soft)] leading-relaxed">
            <p>
              We believe finding pest control should be straightforward — and so should running a pest control business.
            </p>

            <p>
              We've all been there. You've got a problem — whether it's mice in the kitchen or a wasp nest in the eaves — and you need help. So you turn to one of those aggregation sites.
            </p>

            <p>
              What follows is an avalanche. Calls from numbers you don't recognise. Providers you've never heard of pitching hard. And through it all, one nagging question: <em>is this actually the right provider for my problem, or just the one who paid to be first in the queue?</em>
            </p>

            <p>
              That uncertainty didn't sit right with us. So we built something different.
            </p>

            <p className="text-xl font-semibold text-[var(--color-ink)] bg-[var(--color-teal-wash)] p-6 rounded-2xl border-l-4 border-[var(--color-teal)]">
              PestPro Index is a neutral directory. No lead fees. No commissions. No pay-per-enquiry. Every provider gets listed — enhanced listings get extra visibility, but the data speaks for itself. Reviews, certifications, service areas, specialisms — organised so you can make your own informed decision.
            </p>

            <p>
              Whether you need pest control or pest removal services, we bring available data on professionals across the UK to your fingertips so you can find the right service on your terms. A neutral directory designed for transparency, not transactions.
            </p>
          </div>
        </div>
      </section>

      {/* THREE FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-[var(--color-teal-edge)] rounded-2xl mx-auto mb-6">
                <Search className="w-10 h-10 text-[var(--color-teal-deep)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Search & Filter</h3>
              <p className="text-[var(--color-ink-soft)]">Filter by pest type, service features, and certifications to find the right match</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-[var(--color-teal-edge)] rounded-2xl mx-auto mb-6">
                <Shield className="w-10 h-10 text-[var(--color-teal-deep)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Provider-Stated Info</h3>
              <p className="text-[var(--color-ink-soft)]">All information comes directly from providers - we don't judge outcomes</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-[var(--color-teal-edge)] rounded-2xl mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-[var(--color-teal-deep)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Make Informed Decisions</h3>
              <p className="text-[var(--color-ink-soft)]">Contact providers directly - no booking fees, no commissions, no bias</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[var(--color-teal-deep)] to-[var(--color-teal-deep)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Find Your Pest Control?</h2>
          <p className="text-xl mb-12 text-[var(--color-ink-soft)]">Browse providers across the UK. No sign-up required.</p>
          <div className="flex justify-center">
            <Link href="/pest-control/regions" className="px-8 py-4 bg-white text-[var(--color-teal-deep)] font-bold rounded-xl hover:bg-[var(--color-teal-wash)] transition-all">
              Browse all regions
            </Link>
          </div>
        </div>
      </section>

      {/* PEST CONTROL GUIDES */}
      <section className="py-24 bg-[var(--color-paper-sunk)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-ink)] mb-4">Pest Control Guides</h2>
            <p className="text-xl text-[var(--color-ink-soft)]">Free, expert advice to help you tackle common pest problems</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/guides/how-to-get-rid-of-rats" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Rats</h3>
              <p className="text-[var(--color-ink-soft)]">The complete UK guide to identifying, treating, and preventing rat infestations in your home and garden.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-mice" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Mice</h3>
              <p className="text-[var(--color-ink-soft)]">The complete UK guide to spotting, treating, and preventing mouse infestations in your home.</p>
            </Link>
            <Link href="/best/rat-traps" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Rat Traps UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Our pick of the most effective rat traps available in the UK — snap traps, electronic, humane, and budget options.</p>
            </Link>
            <Link href="/best/mouse-traps" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Mouse Traps UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Snap traps, humane live-catch options, and bait stations — reviewed with honest pros, cons, and buying advice.</p>
            </Link>
            <Link href="/guides/wasp-nest-removal" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Wasp Nest Removal</h3>
              <p className="text-[var(--color-ink-soft)]">How to identify wasp nests, whether to remove them yourself or call a professional, and UK costs.</p>
            </Link>
            <Link href="/best/wasp-killers" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Wasp Killers UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Sprays, powders, and traps — the best wasp control products reviewed with honest pros and cons.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-bed-bugs" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Bed Bugs</h3>
              <p className="text-[var(--color-ink-soft)]">Signs of infestation, DIY treatment options, professional heat treatment, costs, and prevention tips.</p>
            </Link>
            <Link href="/best/bed-bug-treatments" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Bed Bug Treatments UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Sprays, powders, mattress encasements, and monitoring traps — reviewed with expert buying guidance.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-cockroaches" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Cockroaches</h3>
              <p className="text-[var(--color-ink-soft)]">Species identification, signs of infestation, DIY treatments, professional solutions, and cockroach-proofing your home.</p>
            </Link>
            <Link href="/best/cockroach-killers" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Cockroach Killers UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Gel baits, sprays, powders, and monitoring traps — the best cockroach control products reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-fleas" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Fleas</h3>
              <p className="text-[var(--color-ink-soft)]">Signs of infestation, treating pets and your home, professional options, and long-term prevention.</p>
            </Link>
            <Link href="/best/flea-treatments" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Flea Treatments UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Household sprays, powders, foggers, and natural options — reviewed with honest pros and cons.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-ants" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Ants</h3>
              <p className="text-[var(--color-ink-soft)]">Species identification, DIY bait methods, flying ants, and when to call a professional.</p>
            </Link>
            <Link href="/best/ant-killers" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Ant Killers UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Bait stations, gel baits, powders and sprays — the best ant killer products reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-squirrels" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Squirrels</h3>
              <p className="text-[var(--color-ink-soft)]">Grey squirrel identification, loft proofing, humane deterrents, UK law, and when to call a professional.</p>
            </Link>
            <Link href="/best/squirrel-deterrents" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Squirrel Deterrents UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Squirrel-proof bird feeders, repellent sprays, baffles, and humane traps reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-foxes" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Foxes</h3>
              <p className="text-[var(--color-ink-soft)]">Urban fox behaviour, garden proofing, humane deterrents, UK law, and when to call a professional.</p>
            </Link>
            <Link href="/best/fox-deterrents" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Fox Deterrents UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Ultrasonic repellers, scent deterrents, motion-activated sprinklers, and garden fencing reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-silverfish" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Silverfish</h3>
              <p className="text-[var(--color-ink-soft)]">Identification, humidity control, DIY treatments, professional options, and long-term prevention for UK homes.</p>
            </Link>
            <Link href="/best/silverfish-treatments" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Silverfish Treatments UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Diatomaceous earth, killer sprays, traps, dehumidifiers, and insecticidal powders reviewed.</p>
            </Link>
            <Link href="/guides/woodworm-treatment" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Woodworm Treatment</h3>
              <p className="text-[var(--color-ink-soft)]">Identification, active vs inactive infestations, DIY treatments, professional solutions, and property survey advice.</p>
            </Link>
            <Link href="/best/woodworm-treatments" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Woodworm Treatments UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Permethrin fluids, boron gels, spray treatments, injection kits, and moisture meters reviewed.</p>
            </Link>
            <Link href="/guides/carpet-beetle-control" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Carpet Beetle Control</h3>
              <p className="text-[var(--color-ink-soft)]">Identification, larvae damage, DIY treatments, professional solutions, and prevention strategies for UK homes.</p>
            </Link>
            <Link href="/best/carpet-beetle-treatments" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Carpet Beetle Treatments UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Insecticidal sprays, pheromone traps, killer powders, treatment kits, and cedar repellents reviewed.</p>
            </Link>
            <Link href="/guides/pigeon-control" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Pigeon Control</h3>
              <p className="text-[var(--color-ink-soft)]">Bird deterrent methods, proofing, netting, spikes, legal considerations, and when to call a professional.</p>
            </Link>
            <Link href="/best/bird-deterrents" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Bird Deterrents UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Bird spikes, netting, optical gel, and more — the best pigeon and bird deterrents reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-moths" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">How to Get Rid of Moths</h3>
              <p className="text-[var(--color-ink-soft)]">Clothes moths vs pantry moths, DIY treatments, pheromone traps, professional fumigation, and prevention tips.</p>
            </Link>
            <Link href="/best/moth-killers" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Moth Killers UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Hanging killers, pheromone traps, carpet sprays, sachets, and budget options reviewed.</p>
            </Link>
            <Link href="/guides/commercial-pest-control" className="group block p-8 bg-white rounded-2xl border border-[var(--color-ochre-edge)] hover:shadow-lg hover:border-[var(--color-ochre-edge)] ring-1 ring-purple-100 transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Commercial Pest Control Hub</h3>
              <p className="text-[var(--color-ink-soft)]">Guides for restaurants, offices, hotels, and warehouses — compliance, equipment reviews, and finding commercial providers.</p>
            </Link>
            <Link href="/guides/restaurant-pest-control" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Restaurant Pest Control</h3>
              <p className="text-[var(--color-ink-soft)]">Legal requirements, EHO inspections, HACCP compliance, and setting up a pest management programme for your food business.</p>
            </Link>
            <Link href="/guides/warehouse-pest-management" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Warehouse Pest Management</h3>
              <p className="text-[var(--color-ink-soft)]">BRC compliance, stock protection, monitoring systems, and integrated pest management for warehouses.</p>
            </Link>
            <Link href="/best/commercial-fly-killers" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Commercial Fly Killers UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">UV zappers, glue board units, and LED models for restaurants, kitchens, and food businesses reviewed.</p>
            </Link>
            <Link href="/best/commercial-rodent-bait-stations" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Commercial Bait Stations UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Tamper-resistant lockable bait stations for warehouses, restaurants, and commercial premises reviewed.</p>
            </Link>
            <Link href="/guides/hotel-pest-control" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Hotel Pest Control</h3>
              <p className="text-[var(--color-ink-soft)]">Bed bug management, guest complaint handling, reputation protection, and ongoing monitoring for hotels and B&Bs.</p>
            </Link>
            <Link href="/best/commercial-insect-monitors" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Commercial Insect Monitors UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Bed bug interceptors, glue traps, and insect monitoring devices for hotels and commercial premises reviewed.</p>
            </Link>
            <Link href="/best/commercial-bird-proofing" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Best Commercial Bird Proofing UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Heavy-duty netting, stainless steel spikes, bird wire systems, optical gel, and solar panel mesh for commercial premises.</p>
            </Link>
            <Link href="/guides/office-pest-control" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Office Pest Control</h3>
              <p className="text-[var(--color-ink-soft)]">Common office pests, legal obligations for employers, prevention strategies, and cost-effective solutions.</p>
            </Link>
            <Link href="/guides/landlord-pest-control" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-ochre-deep)] mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Landlord Pest Control</h3>
              <p className="text-[var(--color-ink-soft)]">Legal duties, tenant vs landlord responsibilities, HMO compliance, prevention strategies, and Awaab's Law implications.</p>
            </Link>
            <Link href="/guides/pest-control-costs" className="group block p-8 bg-white rounded-2xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-ochre-edge)] transition-all">
              <div className="text-sm font-semibold text-[var(--color-teal-deep)] mb-2">Price Guide</div>
              <h3 className="text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors mb-3">Pest Control Costs UK 2026</h3>
              <p className="text-[var(--color-ink-soft)]">Complete pricing breakdown for every common pest — rats, mice, wasps, bed bugs, cockroaches, and more.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FIND PEST SPECIALISTS */}
      <section className="bg-gradient-to-br from-[var(--color-teal-wash)] to-white py-16 border-t-2 border-[var(--color-teal-edge)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-ink)] mb-3">Find Pest Specialists by City</h2>
            <p className="text-lg text-[var(--color-ink-soft)]">Browse providers who specialise in specific pests near you</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <Link href="/pest-control/london/rats" className="px-4 py-3 bg-white rounded-xl border-2 border-[var(--color-rule)] hover:border-[var(--color-teal-edge)] hover:bg-[var(--color-teal-wash)] transition-all font-semibold text-sm text-[var(--color-ink)] text-center">🐀 Rat Control London</Link>
            <Link href="/pest-control/london/bed-bugs" className="px-4 py-3 bg-white rounded-xl border-2 border-[var(--color-rule)] hover:border-[var(--color-teal-edge)] hover:bg-[var(--color-teal-wash)] transition-all font-semibold text-sm text-[var(--color-ink)] text-center">🛏️ Bed Bugs London</Link>
            <Link href="/pest-control/birmingham/mice" className="px-4 py-3 bg-white rounded-xl border-2 border-[var(--color-rule)] hover:border-[var(--color-teal-edge)] hover:bg-[var(--color-teal-wash)] transition-all font-semibold text-sm text-[var(--color-ink)] text-center">🐁 Mouse Control Birmingham</Link>
            <Link href="/pest-control/manchester/wasps" className="px-4 py-3 bg-white rounded-xl border-2 border-[var(--color-rule)] hover:border-[var(--color-teal-edge)] hover:bg-[var(--color-teal-wash)] transition-all font-semibold text-sm text-[var(--color-ink)] text-center">🐝 Wasp Removal Manchester</Link>
            <Link href="/pest-control/glasgow/rats" className="px-4 py-3 bg-white rounded-xl border-2 border-[var(--color-rule)] hover:border-[var(--color-teal-edge)] hover:bg-[var(--color-teal-wash)] transition-all font-semibold text-sm text-[var(--color-ink)] text-center">🐀 Rat Control Glasgow</Link>
            <Link href="/pest-control/leeds/cockroaches" className="px-4 py-3 bg-white rounded-xl border-2 border-[var(--color-rule)] hover:border-[var(--color-teal-edge)] hover:bg-[var(--color-teal-wash)] transition-all font-semibold text-sm text-[var(--color-ink)] text-center">🪳 Cockroach Control Leeds</Link>
            <Link href="/pest-control/bristol/fleas" className="px-4 py-3 bg-white rounded-xl border-2 border-[var(--color-rule)] hover:border-[var(--color-teal-edge)] hover:bg-[var(--color-teal-wash)] transition-all font-semibold text-sm text-[var(--color-ink)] text-center">🦟 Flea Treatment Bristol</Link>
            <Link href="/pest-control/edinburgh/pigeons" className="px-4 py-3 bg-white rounded-xl border-2 border-[var(--color-rule)] hover:border-[var(--color-teal-edge)] hover:bg-[var(--color-teal-wash)] transition-all font-semibold text-sm text-[var(--color-ink)] text-center">🐦 Pigeon Control Edinburgh</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
