'use client';
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Eye, BookOpen, Shield, CheckCircle, Users, TrendingUp, Lock, Zap, Award, Target } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function ProfessionalsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [stats, setStats] = useState({ providers: 0, coverage: 0, boroughs: 0 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/professionals', label: 'For Pest Professionals' },
    { href: '/products', label: 'Home Products' },
    { href: '/commercial-products', label: 'Commercial Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const faqItems = [
    {
      question: 'Is there really no lead fee?',
      answer: 'Correct. Unlike marketplace directories, we don\'t charge you per enquiry or take commission. Your listing fee is fixed and predictable. You pay once, you get listed, and customers find you.'
    },
    {
      question: 'How do I become a Featured Provider?',
      answer: 'Enhanced listing subscribers with strong reviews and complete profiles are eligible for Featured Provider status and Provider of the Week selection. Featured providers appear at the top of search results and get priority placement across the directory.'
    },
    {
      question: 'What certifications do you display?',
      answer: 'We display BPCA membership, RSPH qualifications, CEPA certification, BASIS PROMPT, and local authority approvals. You control which credentials appear on your profile, and we verify each one.'
    },
    {
      question: 'Can I manage multiple locations?',
      answer: 'Yes. Enhanced listings can display multiple depot locations and service coverage areas across London boroughs. Perfect for multi-site operations.'
    },
    {
      question: 'How do reviews work?',
      answer: 'We aggregate reviews from Google, Trustpilot, and other verified sources. We never edit or remove authentic reviews. Your rating is built on real customer feedback.'
    }
  ];

  // Animate stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateStats();
      }
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 2000;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setStats({
        providers: Math.floor(391 * progress),
        coverage: Math.floor(68 * progress),
        boroughs: Math.floor(32 * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

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
      <div className="relative bg-gradient-to-br from-[#0a1628] via-[#1e3a8a] to-[#0a1628] py-32 overflow-hidden" style={{
        backgroundImage: 'url(/professionals-hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight hero-text drop-shadow-lg">
            <div className="text-center">Grow Your</div>
            <div className="text-center">Pest Control</div>
            <div className="text-center">Business</div>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100/95 max-w-3xl mx-auto leading-relaxed font-semibold text-center mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join <span className="font-bold text-white">483 London providers</span> on the UK's only <span className="font-bold text-white">neutral pest control directory</span>. No lead fees. No commissions. Just customers finding you.
          </p>

          <a
            href="https://forms.gle/f4ZvCrBNXK75kobS8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Create Your Free Listing On Our Database
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b-2 border-gray-100 py-16" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat-item text-center group">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-5xl font-black text-blue-600 mb-2">{stats.providers}</div>
              <div className="text-gray-600 font-semibold">Providers Listed</div>
            </div>
            <div className="stat-item text-center group">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-5xl font-black text-blue-600 mb-2">{stats.coverage}%</div>
              <div className="text-gray-600 font-semibold">Review Coverage</div>
            </div>
            <div className="stat-item text-center group">
              <div className="flex justify-center mb-2">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-5xl font-black text-blue-600 mb-2">£0</div>
              <div className="text-gray-600 font-semibold">Lead Fees</div>
            </div>
            <div className="stat-item text-center group">
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-5xl font-black text-blue-600 mb-2">{stats.boroughs}</div>
              <div className="text-gray-600 font-semibold">London Boroughs</div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">What We Offer</h2>
        <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
          Everything you need to grow your pest control business and reach more customers
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Exposure */}
          <div className="card-hover bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border-2 border-gray-100 p-10 hover:border-blue-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 icon-bounce">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Exposure</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Featured provider listings</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>"Top Rated" badge eligibility</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Provider of the Week spotlight</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Priority placement in search results</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Continuing Education */}
          <div className="card-hover bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border-2 border-gray-100 p-10 hover:border-blue-300 relative md:row-span-2">
            <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold animate-pulse-glow">
              Coming Soon
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 icon-bounce">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuing Education</h3>
            <p className="text-gray-700 mb-6">
              CPD-accredited courses to support your professional development and certification requirements.
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>BPCA Certified (20 CPD points/year)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>RSPH Level 2 Award</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>City & Guilds qualifications</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-sm font-semibold text-blue-900">Launching Q2 2026</p>
            </div>
          </div>

          {/* Card 3: Compliance Hub */}
          <div className="card-hover bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border-2 border-gray-100 p-10 hover:border-blue-300 relative">
            <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold animate-pulse-glow">
              Coming Soon
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 icon-bounce">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Hub</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Digital audit trail</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Certification expiry alerts</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Insurance document storage</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>One-click compliance reports</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Client portal access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">Simple Pricing</h2>
          <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
            Choose the plan that fits your business
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <span className="text-gray-700">Verified review rating (where available)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Appear in search results based on your service area and information available online</span>
                </li>
              </ul>
              <a
                href="https://forms.gle/f4ZvCrBNXK75kobS8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
              >
                Create Your Free Listing
              </a>
            </div>

            {/* Enhanced Listing */}
            <div className="card-hover bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Enhanced Listing</h3>
              <div className="mb-2">
                <span className="text-5xl font-black text-blue-600">£15</span>
                <span className="text-gray-600 font-semibold">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-8 font-semibold">Free until 1st April 2026</p>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Free Listing, plus:</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enhanced visibility in search results</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Company logo display</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Detailed service descriptions</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Photo gallery (up to 6 images)</span>
                </li>
              </ul>
              <a
                href="https://forms.gle/f4ZvCrBNXK75kobS8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
              >
                Get Enhanced Listing
              </a>
            </div>

            {/* Featured Provider of the Week */}
            <div className="card-hover bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-xl border-2 border-amber-300 p-10 relative ring-2 ring-amber-400/50">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                Premium
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Featured Provider of the Week</h3>
              <div className="mb-2">
                <span className="text-5xl font-black text-amber-600">£30</span>
                <span className="text-gray-600 font-semibold">/week</span>
              </div>
              <p className="text-sm text-gray-600 mb-8 font-semibold">Free until 1st April 2026</p>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Prominent homepage placement for one week</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Spotlight position above search results</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enhanced visibility across all pages</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Perfect for seasonal promotions or new launches</span>
                </li>
              </ul>
              <a
                href="https://forms.gle/f4ZvCrBNXK75kobS8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg"
              >
                Become Featured Provider
              </a>
            </div>
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
              Find your business and verify ownership in minutes. We'll pull your existing data to get you started.
            </p>
          </div>

          <div className="step-connector text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-6 shadow-lg">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Your Listing</h3>
            <p className="text-gray-600 text-lg">
              Add services, coverage areas, certifications, and photos. The more complete your profile, the more visible you are.
            </p>
          </div>

          <div className="step-connector text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-6 shadow-lg">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Found</h3>
            <p className="text-gray-600 text-lg">
              Appear in searches and start receiving enquiries. Customers find you based on location, services, and reviews.
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
                Unlike Checkatrade, Bark, or Rated People, we never charge per enquiry. Your listing fee is fixed and predictable.
              </p>
            </div>

            <div className="card-hover bg-blue-800/50 rounded-xl p-8 shadow-lg border-l-4 border-blue-300 hover:border-blue-200 hover:bg-blue-800/70">
              <div className="flex gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-300 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Neutral Rankings</h3>
              </div>
              <p className="text-blue-100">
                Listings ranked by reviews and data, not who pays most. Your merit determines your visibility.
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
                <h3 className="text-xl font-bold text-white">London-Focused</h3>
              </div>
              <p className="text-blue-100">
                Built specifically for Greater London's pest control market. Not a generic national directory.
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
              {expandedFaq === idx && (
                <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-blue-100 border-t-2 border-gray-100 animate-fade-in-up">
                  <p className="text-gray-700 text-lg leading-relaxed">{item.answer}</p>
                </div>
              )}
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
            Join London's fastest-growing pest control directory
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/f4ZvCrBNXK75kobS8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Create Your Free Listing
            </a>
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
              <a href="https://www.amazon.co.uk/dp/B09TZK7FYS?tag=pestproindex-21" target="_blank" rel="noopener noreferrer" className="group relative bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-16 border-t-2 border-blue-800">
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
                <Link href="/" className="block text-gray-400 hover:text-white transition">Home</Link>
                <Link href="/residential" className="block text-gray-400 hover:text-white transition">Residential</Link>
                <Link href="/commercial" className="block text-gray-400 hover:text-white transition">Commercial</Link>
                <Link href="/professionals" className="block text-gray-400 hover:text-white transition">For Pest Professionals</Link>
                <Link href="/resources" className="block text-gray-400 hover:text-white transition">Resources</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Professionals</h4>
              <p className="text-gray-400">
                Grow your pest control business with PestPro Index. Get listed today.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
