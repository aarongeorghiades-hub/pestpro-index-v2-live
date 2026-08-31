'use client';

import Link from 'next/link';
import { ChevronDown, CheckCircle, Users, TrendingUp, Lock, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useState, useEffect, useRef, useCallback } from 'react';
import { UK_AMAZON_TAG } from '@/lib/externalUrl';

// providerCount is counted server-side in page.tsx so the figure is present in
// the initial HTML for crawlers and no-JS visitors. It is null only when that
// query failed — in which case the stat tile is omitted and the hero sentence
// runs without a number. There is never a fallback figure.
export default function ProfessionalsClient({ providerCount }: { providerCount: number | null }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  // Seeded with the real count so the server-rendered HTML carries the number;
  // the scroll animation then counts up to the same value on the client.
  const [displayCount, setDisplayCount] = useState(providerCount ?? 0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);



  const faqItems = [
    {
      question: 'Is there really no lead fee?',
      answer: 'Correct. Unlike marketplace directories, we don\'t charge you per enquiry or take commission. Listing is free, and customers contact you directly.'
    },
    {
      question: 'What certifications do you display?',
      answer: 'We display BPCA membership, RSPH qualifications, CEPA certification, BASIS PROMPT, and local authority approvals.'
    },
    {
      question: 'How do reviews work?',
      answer: 'Your rating and review count are imported from Google. We do not edit them.'
    }
  ];

  const animateStats = useCallback((target: number) => {
    const duration = 2000;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayCount(Math.floor(target * progress));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  // Count up on scroll. Skipped entirely when the count is unavailable, and the
  // tile already shows the correct figure before this runs, so a visitor who
  // never scrolls to it still sees the real number.
  useEffect(() => {
    if (providerCount === null) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateStats(providerCount);
      }
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, providerCount, animateStats]);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(251, 146, 60, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(251, 146, 60, 0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hero-text {
          animation: fadeInUp 0.8s ease-out;
        }

        .stat-item {
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-8px);
          filter: drop-shadow(0 12px 24px rgba(37, 99, 235, 0.2));
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
        }

        .step-connector {
          position: relative;
        }

        @media (min-width: 768px) {
          .step-connector::after {
            content: '';
            position: absolute;
            top: 48px;
            left: 60%;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #2563eb, transparent);
          }

          .step-connector:last-child::after {
            display: none;
          }
        }

        .icon-bounce {
          animation: float 2s ease-in-out infinite;
        }

        .accordion-button {
          transition: all 0.3s ease;
        }

        .accordion-button:hover {
          background-color: #f3f4f6;
        }
      `}</style>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0a1628] via-[#1e3a8a] to-[#0a1628] py-32 overflow-hidden" style={{
        backgroundImage: 'url(/professionals-hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: typeof window !== 'undefined' && window.innerWidth < 768 ? 'center center' : 'right center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Dark overlay for text readability - reduced opacity for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/65 via-[#0a1628]/60 to-[#0a1628]/50"></div>
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight hero-text drop-shadow-lg">
            <div className="text-center">Grow Your</div>
            <div className="text-center">Pest Control</div>
            <div className="text-center">Business</div>
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-blue-100/95 max-w-3xl mx-auto leading-relaxed font-semibold text-center mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join <span className="font-bold text-white">{providerCount !== null ? `${providerCount.toLocaleString()} UK providers` : 'UK providers'}</span> on the UK's only <span className="font-bold text-white">neutral pest control directory</span>. No lead fees. No commissions. Just customers finding you.
          </p>

          <Link
            href="/professionals/submit"
            className="block md:inline-block w-full md:w-auto px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-base md:text-lg rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 animate-fade-in-up text-center"
            style={{ animationDelay: '0.4s' }}
          >
            Create Your Free Listing On Our Database
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b-2 border-gray-100 py-16" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
            {providerCount !== null && (
              <div className="stat-item text-center group">
                <div className="flex justify-center mb-2">
                  <Users className="w-6 md:w-8 h-6 md:h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-5xl font-black text-blue-600 mb-2">{displayCount.toLocaleString()}</div>
                <div className="text-xs md:text-sm text-gray-600 font-semibold">Providers Listed</div>
              </div>
            )}
            <div className="stat-item text-center group">
              <div className="flex justify-center mb-2">
                <Lock className="w-6 md:w-8 h-6 md:h-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-5xl font-black text-blue-600 mb-2">£0</div>
              <div className="text-xs md:text-sm text-gray-600 font-semibold">Lead Fees</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">Simple Pricing</h2>
          <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
            Getting listed is free
          </p>

          <div className="max-w-md mx-auto">
            {/* Free Listing */}
            <div className="card-hover bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Free Listing</h3>
              <div className="mb-8">
                <span className="text-5xl font-black text-blue-600">£0</span>
                <span className="text-gray-600 font-semibold">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Your company details and service areas</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Contact information (phone, email, website)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Certifications and accreditations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Review rating (where available)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Appear in search results based on your service area and information available online</span>
                </li>
              </ul>
              <Link
                href="/professionals/submit"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
              >
                Create Your Free Listing
              </Link>
            </div>

            <p className="text-center text-gray-600 mt-8">
              Paid listing options are in development.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">How It Works</h2>
        <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
          Get listed in three simple steps
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="step-connector text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-6 shadow-lg">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Create Your Profile</h3>
            <p className="text-gray-600 text-lg">
              Submit your business details — name, contact details, address and postcode — for review.
            </p>
          </div>

          <div className="step-connector text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-6 shadow-lg">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Your Listing</h3>
            <p className="text-gray-600 text-lg">
              Tell us the areas you cover, the pests you treat, whether you serve homes or businesses, and a short description of your work.
            </p>
          </div>

          <div className="step-connector text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-6 shadow-lg">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Found</h3>
            <p className="text-gray-600 text-lg">
              Your listing shows your phone number, email and website. Customers contact you directly.
            </p>
          </div>
        </div>
      </div>

      {/* Why PestPro Index */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-4 text-center">Why PestPro Index</h2>
          <p className="text-xl text-blue-100 text-center mb-20 max-w-3xl mx-auto">
            We're different from other directories
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-hover bg-blue-800/50 rounded-xl p-8 shadow-lg border-l-4 border-blue-300 hover:border-blue-200 hover:bg-blue-800/70">
              <div className="flex gap-4 mb-4">
                <Lock className="w-8 h-8 text-blue-300 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">No Lead Fees</h3>
              </div>
              <p className="text-blue-100">
                Unlike Checkatrade, Bark, or Rated People, we never charge per enquiry.
              </p>
            </div>

            <div className="card-hover bg-blue-800/50 rounded-xl p-8 shadow-lg border-l-4 border-blue-300 hover:border-blue-200 hover:bg-blue-800/70">
              <div className="flex gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-300 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">No Paid Placement</h3>
              </div>
              <p className="text-blue-100">
                No provider can pay to appear higher.
              </p>
            </div>

            <div className="card-hover bg-blue-800/50 rounded-xl p-8 shadow-lg border-l-4 border-blue-300 hover:border-blue-200 hover:bg-blue-800/70">
              <div className="flex gap-4 mb-4">
                <Users className="w-8 h-8 text-blue-300 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Transparent</h3>
              </div>
              <p className="text-blue-100">
                Customers see real reviews, real certifications, real coverage. No hidden agendas or paid placements.
              </p>
            </div>

            <div className="card-hover bg-blue-800/50 rounded-xl p-8 shadow-lg border-l-4 border-blue-300 hover:border-blue-200 hover:bg-blue-800/70">
              <div className="flex gap-4 mb-4">
                <Target className="w-8 h-8 text-blue-300 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">UK-Wide Coverage</h3>
              </div>
              <p className="text-blue-100">
                Covering London, Birmingham, Manchester, and Liverpool with pest control providers. Expanding across the UK.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Everything you need to know about listing on PestPro Index
        </p>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md border-2 border-gray-100 overflow-hidden transition-all">
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="accordion-button w-full px-8 py-6 flex items-center justify-between"
              >
                <h3 className="text-lg font-bold text-gray-900 text-left">{item.question}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {/* The answer is ALWAYS mounted so it is present in the server
                  HTML and readable without JavaScript. Collapse is done with
                  CSS (a zero-height grid row) rather than by unmounting, which
                  keeps the accordion behaving exactly as before while making
                  the text crawlable. */}
              <div
                className={`grid transition-all duration-300 ${
                  expandedFaq === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
                aria-hidden={expandedFaq !== idx}
              >
                <div className="overflow-hidden">
                  <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-blue-100 border-t-2 border-gray-100">
                    <p className="text-gray-700 text-lg leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(255, 255, 255) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-4">Ready to Reach More Customers?</h2>
          <p className="text-2xl text-blue-200 mb-12">
            Join the UK's fastest-growing pest control directory
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/professionals/submit"
              className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Create Your Free Listing
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* INDUSTRY PUBLICATIONS QUICK LINKS */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
            <div className="mb-10">
              <div className="relative inline-block">
                <h3 className="text-3xl font-black text-gray-900 mb-2">📰 Industry Publications</h3>
                <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-16 mt-2"></div>
              </div>
              <p className="text-gray-700 mt-4">Stay informed with the leading pest control trade publications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
              <a href="https://bpca.org.uk/ppc-magazine" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">Professional Pest Controller</h4>
                <p className="text-xs text-gray-600">Official BPCA magazine, free quarterly</p>
              </a>
              <a href="https://pestmagazine.co.uk/" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">Pest Magazine</h4>
                <p className="text-xs text-gray-600">Independent trade publication, supports CPD</p>
              </a>
              <a href="https://www.pestcontrolnews.com/" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">Pest Control News</h4>
                <p className="text-xs text-gray-600">Free trade magazine, regulatory focus</p>
              </a>
              <a href="https://www.pctonline.com/" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">Pest Control Technology</h4>
                <p className="text-xs text-gray-600">US monthly, industry trends and technology</p>
              </a>
              <a href={`https://www.amazon.co.uk/dp/B09TZK7FYS?tag=${UK_AMAZON_TAG}`} target="_blank" rel="sponsored nofollow noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">The Bed Bug Handbook</h4>
                <p className="text-xs text-gray-600">The complete reference book, available on Amazon</p>
              </a>
            </div>

            <div className="text-center pt-4 border-t border-gray-100">
              <Link href="/resources" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200">See all resources →</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
