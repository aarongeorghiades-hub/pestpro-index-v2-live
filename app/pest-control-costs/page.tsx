import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Pest Control Costs UK 2025/2026 — How Much Does Pest Control Cost? | PestPro Index',
  description: 'Complete guide to pest control costs in the UK. Average prices for mice, rats, bed bugs, wasps, cockroaches, and more. Costs by pest type, property size, and region.',
  openGraph: {
    title: 'Pest Control Costs UK 2025/2026 — How Much Does Pest Control Cost? | PestPro Index',
    description: 'Complete guide to pest control costs in the UK. Average prices by pest type, property, and region.',
    url: 'https://pestproindex.com/pest-control-costs',
    siteName: 'PestPro Index',
    type: 'article',
  },
  alternates: {
    canonical: 'https://pestproindex.com/pest-control-costs',
  },
};

// Cost data
const pestCosts = [
  {
    pest: 'Mice',
    slug: 'mice',
    typical: '£100–£250',
    low: '£80',
    high: '£500+',
    visits: '2–3',
    notes: 'Includes initial treatment plus follow-up. Severe infestations requiring proofing work cost more. Some councils offer free or subsidised treatments.',
  },
  {
    pest: 'Rats',
    slug: 'rats',
    typical: '£120–£300',
    low: '£100',
    high: '£800+',
    visits: '2–3',
    notes: 'Standard residential treatment. CCTV drain surveys add £100–£200 if sewer entry is suspected. Commercial premises cost significantly more.',
  },
  {
    pest: 'Bed Bugs',
    slug: 'bed-bugs',
    typical: '£200–£500',
    low: '£150',
    high: '£1,000+',
    visits: '2–3',
    notes: 'Per room for chemical treatment. Heat treatments cost £400–£800 per room but are more effective in a single session. One of the most expensive pests to treat.',
  },
  {
    pest: 'Wasps',
    slug: 'wasps',
    typical: '£50–£120',
    low: '£40',
    high: '£150',
    visits: '1',
    notes: 'One of the most affordable treatments. Price depends on nest accessibility. High rooflines and deep wall cavities cost more. Nest inactive within 24–48 hours.',
  },
  {
    pest: 'Ants',
    slug: 'ants',
    typical: '£80–£180',
    low: '£60',
    high: '£300+',
    visits: '1–2',
    notes: 'Garden ants are cheaper to treat. Pharaoh\'s ants require specialist baiting over several weeks and cost significantly more (£150–£300+).',
  },
  {
    pest: 'Cockroaches',
    slug: 'cockroaches',
    typical: '£150–£350',
    low: '£120',
    high: '£500+',
    visits: '2–3',
    notes: 'Requires multiple visits to break the breeding cycle. Shared buildings (flats) may need coordinated treatment of multiple units.',
  },
  {
    pest: 'Fleas',
    slug: 'fleas',
    typical: '£100–£200',
    low: '£80',
    high: '£300',
    visits: '1',
    notes: 'Single treatment to all carpeted areas. Effects take 2–4 weeks as pupae continue hatching. Pets must be treated separately by a vet.',
  },
  {
    pest: 'Moths',
    slug: 'moths',
    typical: '£120–£250',
    low: '£100',
    high: '£500+',
    visits: '1–2',
    notes: 'Targeted treatment of affected rooms. Whole-property fumigation for severe infestations costs more. Heritage textile protection priced individually.',
  },
  {
    pest: 'Silverfish',
    slug: 'silverfish',
    typical: '£80–£150',
    low: '£60',
    high: '£200',
    visits: '1',
    notes: 'Residual spray treatment. Addressing underlying damp issues is essential for long-term control — without this, silverfish will return.',
  },
  {
    pest: 'Squirrels',
    slug: 'squirrels',
    typical: '£150–£350',
    low: '£120',
    high: '£500+',
    visits: '2–4',
    notes: 'Trapping and removal over multiple visits. Proofing to seal entry points often quoted separately at £100–£300+. Combined packages typically £250–£500.',
  },
];

const regionalFactors = [
  { region: 'London & South East', adjustment: '+15–25%', reason: 'Higher operating costs, congestion charges, parking. Expect to pay at the upper end of all ranges.' },
  { region: 'Birmingham & West Midlands', adjustment: 'Average', reason: 'Prices typically align with national averages.' },
  { region: 'Manchester & North West', adjustment: '−5–10%', reason: 'Slightly below national average. Competitive market with many providers.' },
  { region: 'Liverpool & Merseyside', adjustment: '−5–15%', reason: 'Generally below national average. Some councils still offer subsidised treatments.' },
  { region: 'Leeds & Yorkshire', adjustment: '−5–10%', reason: 'Below national average. Good availability of providers keeps prices competitive.' },
];

const costFactors = [
  {
    factor: 'Pest type',
    description: 'The biggest cost driver. Wasps and ants are cheapest to treat; bed bugs and cockroaches are the most expensive due to the complexity and number of visits required.',
  },
  {
    factor: 'Severity of infestation',
    description: 'A single mouse sighting caught early costs far less than a well-established colony in the walls. Early action saves money.',
  },
  {
    factor: 'Property size',
    description: 'Larger properties cost more to treat. A one-bedroom flat is cheaper than a four-bedroom detached house. Commercial premises are priced by square footage.',
  },
  {
    factor: 'Number of visits',
    description: 'Most treatments require 2–3 visits. Initial visit plus follow-ups to check traps, reapply treatments, and confirm eradication.',
  },
  {
    factor: 'Location',
    description: 'London and the South East are 15–25% more expensive than the national average. Northern cities tend to be slightly cheaper.',
  },
  {
    factor: 'Access difficulty',
    description: 'Pests in hard-to-reach locations (high rooflines, deep wall cavities, under floorboards) increase labour time and cost.',
  },
  {
    factor: 'Emergency call-outs',
    description: 'Same-day or weekend call-outs typically carry a premium of £30–£80 on top of the standard treatment price.',
  },
  {
    factor: 'Proofing and prevention',
    description: 'Sealing entry points, fitting mesh, repairing damage — often quoted separately from the treatment itself. Essential for long-term control.',
  },
];

// FAQ schema
const faqItems = [
  {
    question: 'How much does pest control cost in the UK?',
    answer: 'Pest control costs in the UK range from £50 for a simple wasp nest removal to over £1,000 for severe bed bug infestations. The average residential treatment costs between £100 and £300. Costs depend on the pest type, severity, property size, number of visits required, and your location.',
  },
  {
    question: 'Does my council offer free pest control?',
    answer: 'Some UK councils still offer free or subsidised pest control for certain pests (typically rats and mice) and for residents receiving benefits. However, many councils have reduced or stopped free services in recent years. Contact your local council directly to check what is available in your area.',
  },
  {
    question: 'Is pest control worth the cost?',
    answer: 'In most cases, yes. Professional pest control is more effective than DIY methods, especially for established infestations. Untreated pest problems tend to worsen, causing property damage (rats gnawing wiring, moths destroying clothing, woodworm weakening timber) that far exceeds the cost of treatment. For businesses, pest infestations can result in closure orders, fines, and reputational damage.',
  },
  {
    question: 'Why do some pest controllers charge more than others?',
    answer: 'Price differences reflect qualifications (BPCA or NPTA membership), insurance level, guarantees offered, number of follow-up visits included, and the products used. The cheapest quote is not always the best value — check that the price includes follow-up visits and ask about guarantees.',
  },
  {
    question: 'Do I need a pest control contract?',
    answer: 'For homes, one-off treatments are usually sufficient. For businesses, ongoing pest control contracts are strongly recommended and often required for food safety compliance. Contracts provide regular inspections, faster response times, and documentation for EHO audits. Typical commercial contracts cost £50–£150 per month depending on premises size and risk level.',
  },
  {
    question: 'Can I claim pest control costs on insurance?',
    answer: 'Standard home insurance policies rarely cover pest control treatment. However, some policies cover damage caused by pests — for example, rewiring costs after rodent damage. Check your policy wording or contact your insurer. Landlord insurance policies are more likely to include pest-related cover.',
  },
];

export default function PestControlCostsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://pestproindex.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pest Control Costs',
        item: 'https://pestproindex.com/pest-control-costs',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-20">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Pest Control Costs</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            How Much Does Pest Control Cost in the UK?
          </h1>
          <p className="text-lg text-blue-100/90 max-w-3xl">
            A comprehensive guide to pest control prices across the UK. Whether you&apos;re dealing with mice in the kitchen or a wasp nest in the loft, here&apos;s what you can expect to pay for professional treatment in 2025/2026.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick summary box */}
        <div className="mb-10 p-5 bg-green-50 border border-green-200 rounded-xl">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500">Cheapest Treatment</p>
              <p className="text-xl font-bold text-gray-900">£50–£80</p>
              <p className="text-sm text-gray-600">Wasp nest removal</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Treatment</p>
              <p className="text-xl font-bold text-gray-900">£100–£300</p>
              <p className="text-sm text-gray-600">Mice, rats, ants, fleas</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Most Expensive</p>
              <p className="text-xl font-bold text-gray-900">£300–£1,000+</p>
              <p className="text-sm text-gray-600">Bed bugs, cockroaches</p>
            </div>
          </div>
        </div>

        {/* Table of contents */}
        <div className="mb-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <p className="font-bold text-gray-900 mb-3">On this page</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <li><a href="#costs-by-pest" className="text-blue-600 hover:underline">Costs by Pest Type</a></li>
            <li><a href="#cost-factors" className="text-blue-600 hover:underline">What Affects the Price?</a></li>
            <li><a href="#regional" className="text-blue-600 hover:underline">Regional Price Differences</a></li>
            <li><a href="#save-money" className="text-blue-600 hover:underline">How to Save Money</a></li>
            <li><a href="#what-to-ask" className="text-blue-600 hover:underline">What to Ask Before Hiring</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Costs by Pest Type */}
        <section id="costs-by-pest" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Pest Control Costs by Pest Type</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The table below shows typical costs for professional pest control treatment in the UK. Prices are based on standard residential properties and include the initial visit. Follow-up visits and proofing work may be quoted separately.
          </p>

          {/* Cost cards */}
          <div className="space-y-4">
            {pestCosts.map((item) => (
              <div key={item.slug} className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <Link href={`/pest/${item.slug}`} className="text-lg font-bold text-gray-900 hover:text-green-700 transition-colors">
                    {item.pest} &rarr;
                  </Link>
                  <span className="text-xl font-bold text-green-700 mt-1 sm:mt-0">{item.typical}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                  <div>
                    <span className="text-gray-500">From</span>
                    <p className="font-medium text-gray-900">{item.low}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Up to</span>
                    <p className="font-medium text-gray-900">{item.high}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Visits</span>
                    <p className="font-medium text-gray-900">{item.visits}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{item.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Affects the Price */}
        <section id="cost-factors" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">What Affects the Price?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Pest control isn&apos;t one-size-fits-all. Several factors influence what you&apos;ll actually pay. Understanding these helps you budget accurately and compare quotes fairly.
          </p>
          <div className="space-y-4">
            {costFactors.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.factor}</h3>
                  <p className="text-gray-700 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Price Differences */}
        <section id="regional" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Regional Price Differences</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Pest control prices vary significantly across the UK. London is consistently the most expensive, while northern cities tend to offer lower prices due to lower operating costs and a competitive market.
          </p>
          <div className="space-y-3">
            {regionalFactors.map((item, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="sm:w-48 flex-shrink-0">
                  <span className="font-bold text-gray-900">{item.region}</span>
                </div>
                <div className="sm:w-24 flex-shrink-0">
                  <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
                    item.adjustment.startsWith('+') ? 'bg-red-100 text-red-800' :
                    item.adjustment.startsWith('−') ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.adjustment}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Save Money */}
        <section id="save-money" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">How to Save Money on Pest Control</h2>
          <div className="space-y-4">
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Act early</h3>
              <p className="text-sm text-gray-700">A small mouse problem caught early might cost £100. Leave it three months and you could be looking at £300+ with proofing work. The longer you wait, the more it costs.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Check your council first</h3>
              <p className="text-sm text-gray-700">Some councils still offer free or subsidised treatments for rats and mice, particularly for residents on benefits. It&apos;s always worth checking before paying privately.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Get 2–3 quotes</h3>
              <p className="text-sm text-gray-700">Prices vary significantly between providers. Get at least two or three quotes and compare what&apos;s included — particularly the number of follow-up visits and any guarantee period.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Ask about bundled pricing</h3>
              <p className="text-sm text-gray-700">If you need treatment plus proofing work (sealing entry points), ask for a combined price. Most providers will offer a package deal that&apos;s cheaper than booking separately.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Avoid emergency call-out premiums</h3>
              <p className="text-sm text-gray-700">Unless there&apos;s a genuine safety risk (wasp nest by a doorway, rat in the kitchen), booking during normal hours on a weekday avoids the £30–£80 emergency premium.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Invest in prevention</h3>
              <p className="text-sm text-gray-700">Spending £50–£100 on proofing (sealing gaps, fitting mesh, fixing drains) after treatment prevents re-infestation and saves you paying for treatment again next year.</p>
            </div>
          </div>
        </section>

        {/* What to Ask */}
        <section id="what-to-ask" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">What to Ask Before Hiring a Pest Controller</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Not all pest control companies are equal. Before booking, ask these questions to make sure you&apos;re getting good value and professional service.
          </p>
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <ul className="space-y-3">
              {[
                'What does the quoted price include? How many visits?',
                'Do you offer a guarantee? What happens if the pests come back?',
                'Are you a member of BPCA or NPTA? (the two main UK trade bodies)',
                'Do you carry public liability insurance?',
                'What treatment method will you use? Are there any risks to children or pets?',
                'Will you carry out proofing work, or just treatment?',
                'Can you provide a written report after treatment?',
                'Do you charge extra for follow-up visits?',
              ].map((question, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-blue-600 font-bold">&rarr;</span>
                  <span className="text-gray-800">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
          <p className="text-gray-900 font-bold mb-2">Find a Trusted Pest Controller Near You</p>
          <p className="text-gray-600 text-sm mb-4">
            PestPro Index lists 1,090+ vetted pest controllers across 11 UK cities. No lead fees. No commissions. No sponsored rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/residential"
              className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
            >
              Browse Residential Directory
            </Link>
            <Link
              href="/commercial"
              className="inline-block px-6 py-3 bg-white text-gray-900 font-bold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Browse Commercial Directory
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="p-8 bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-2xl text-center">
          <h2 className="text-2xl font-black mb-3">Ready to Get Quotes?</h2>
          <p className="text-gray-300 mb-6">
            Browse our directory of trusted, vetted pest controllers. Every provider listed on PestPro Index is a real business — no lead fees, no commissions, no sponsored rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/residential"
              className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
            >
              Find Residential Controllers
            </Link>
            <Link
              href="/commercial"
              className="px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Find Commercial Controllers
            </Link>
          </div>
        </div>

        {/* Pest guides link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Want to learn more about a specific pest?{' '}
            <Link href="/pest-library" className="text-green-700 font-medium hover:underline">
              Browse our Pest Library &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
