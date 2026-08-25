import Link from 'next/link';
import Navigation from '@/components/Navigation';

const faqs = [
  {
    question: 'What is PestPro Index?',
    answer: "PestPro Index is the UK's neutral pest control directory. We don't charge providers lead fees or commissions, and we don't accept sponsored rankings. Our goal is to help you find a pest controller near you.",
  },
  {
    question: 'How do I find a pest controller?',
    answer: 'Use our Find a Provider menu to browse by region, or go directly to the residential or commercial directory for your city. You can filter by pest type, certifications, services offered, and more.',
  },
  {
    question: 'Is PestPro Index free to use?',
    answer: 'Yes, searching and browsing the directory is completely free for homeowners and businesses.',
  },
  {
    question: 'How are providers selected?',
    answer: 'We aim to include every legitimate pest control provider in each area we cover.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We currently cover London, Birmingham, Manchester, Liverpool, and Leeds, with more cities launching throughout 2026.',
  },
  {
    question: 'How is PestPro different from Checkatrade or Bark?',
    answer: "Unlike lead-generation platforms, PestPro doesn't charge providers per lead or take commissions. Providers aren't ranked by how much they pay. We're a neutral directory focused on helping you compare providers based on qualifications, reviews, and services.",
  },
  {
    question: 'Can I list my pest control company?',
    answer: 'Yes! Visit our For Professionals page to learn about listing options.',
  },
  {
    question: 'How much does pest control cost?',
    answer: 'Costs vary by pest type, property size, and treatment method. Typical residential treatments in the UK range from \u00a380\u2013\u00a3300 for a one-off visit. Commercial contracts are usually quoted individually.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-24">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)' }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4" style={{ fontWeight: 900, letterSpacing: '-0.05em' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto">
            Everything you need to know about finding pest control through PestPro Index
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h2>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Find a Pest Controller?</h2>
          <p className="text-lg mb-8 text-blue-100">Browse providers across the UK. No sign-up required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/residential" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all">
              Browse Residential Providers
            </Link>
            <Link href="/professionals" className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              List Your Company
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
