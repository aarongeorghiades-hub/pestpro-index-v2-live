import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

// Static content page — no DB call, so it renders as a normal async Server
// Component (no force-dynamic needed; this keeps it cacheable for SEO/perf).
//
// NOTE ON CLASSES: @tailwindcss/typography is not installed in this project, so
// `prose` generates no CSS. Every element therefore carries explicit utility
// classes, matching how app/about/page.tsx is written.
export const metadata: Metadata = {
  // Layout template appends "| PestPro Index" — keep a single brand suffix.
  title: 'Cookie Policy',
  description:
    'What cookies PestPro Index uses, who sets them, and how to change your choice. Nothing non-essential loads until you consent.',
  alternates: { canonical: 'https://pestproindex.com/cookies' },
  openGraph: {
    title: 'Cookie Policy',
    description:
      'What cookies PestPro Index uses, who sets them, and how to change your choice. Nothing non-essential loads until you consent.',
    url: 'https://pestproindex.com/cookies',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
};

export default async function CookiesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
      { '@type': 'ListItem', position: 2, name: 'Cookie Policy', item: 'https://pestproindex.com/cookies' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4" style={{ fontWeight: 900, letterSpacing: '-0.05em' }}>
            Cookie Policy
          </h1>
          <p className="text-lg sm:text-xl font-light text-blue-100 max-w-2xl mx-auto">
            Last updated: 17 August 2026
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black text-gray-900 mb-4">The short version</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We do not load analytics or advertising cookies until you tell us we can. If you decline, those services are
          never loaded — not loaded-and-ignored, not loaded silently. The only thing we store is the record of your
          answer.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">What cookies are</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cookies are small files a website stores on your device. Similar technologies — local storage and session
          storage — do the same job in a different way. Where this policy says &quot;cookies&quot;, it means both.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">What we use, and who sets it</h2>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Strictly necessary — always on</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-left border-collapse text-gray-700">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 py-2 pr-4 align-bottom font-bold text-gray-900">Set by</th>
                <th className="border-b-2 border-gray-300 py-2 pr-4 align-bottom font-bold text-gray-900">Purpose</th>
                <th className="border-b-2 border-gray-300 py-2 align-bottom font-bold text-gray-900">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">PestPro Index</td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">
                  Records whether you accepted or declined each cookie category, so we don&apos;t ask again on every
                  page
                </td>
                <td className="border-b border-gray-200 py-2 align-top">6 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is set only once you choose. Nothing is stored before that. Without it we could not remember that you
          said no.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Analytics — off until you accept</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-left border-collapse text-gray-700">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 py-2 pr-4 align-bottom font-bold text-gray-900">Set by</th>
                <th className="border-b-2 border-gray-300 py-2 pr-4 align-bottom font-bold text-gray-900">Purpose</th>
                <th className="border-b-2 border-gray-300 py-2 align-bottom font-bold text-gray-900">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">
                  Google (Google Analytics) — cookies beginning _ga
                </td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">
                  Distinguishes visitors and measures how pages are used, so we can see which content is worth
                  improving
                </td>
                <td className="border-b border-gray-200 py-2 align-top">Up to 2 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">
          Advertising and audience measurement — off until you accept
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-left border-collapse text-gray-700">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 py-2 pr-4 align-bottom font-bold text-gray-900">Set by</th>
                <th className="border-b-2 border-gray-300 py-2 pr-4 align-bottom font-bold text-gray-900">Purpose</th>
                <th className="border-b-2 border-gray-300 py-2 align-bottom font-bold text-gray-900">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">
                  Mediavine, Inc. (Grow by Mediavine), from faves.grow.me
                </td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">
                  Audience measurement and advertising technology, including cookies and browser storage
                </td>
                <td className="border-b border-gray-200 py-2 align-top">Varies by item; set by Mediavine</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Cookies set by other sites you click through to</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We link to Amazon and earn commission on qualifying purchases. We set nothing when you click. Amazon sets its
          own cookies once you arrive on its site, including one that attributes a purchase to us — typically lasting
          24 hours. Those cookies are governed by Amazon&apos;s own policies, not ours. The same applies to any other
          external site you visit from here.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">How your choice is applied</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When you first visit, nothing is stored. You can Accept all, Reject all, or choose categories individually.
          Rejecting is exactly as easy as accepting.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you accept a category, the relevant scripts are loaded from that point on. If you reject it, they are
          never loaded during your visit.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">Changing your mind</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Select Cookie preferences in the footer of any page. Your choice is updated immediately.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          You can also block or delete cookies through your browser settings. Doing so may affect how this and other
          sites work. We will re-ask for your preferences after six months in any case.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">Changes to this policy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We update this policy when the services we use change. The date at the top shows when it was last revised.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/privacy" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all">
            Privacy Notice
          </Link>
        </div>
      </article>
    </div>
  );
}
