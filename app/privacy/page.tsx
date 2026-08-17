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
  title: 'Privacy Notice',
  description:
    'How PestPro Index collects, uses and protects personal data. Operated by ENA Enterprises Ltd, ICO registration ZC164333.',
  alternates: { canonical: 'https://pestproindex.com/privacy' },
  openGraph: {
    title: 'Privacy Notice',
    description:
      'How PestPro Index collects, uses and protects personal data. Operated by ENA Enterprises Ltd, ICO registration ZC164333.',
    url: 'https://pestproindex.com/privacy',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
};

export default async function PrivacyPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
      { '@type': 'ListItem', position: 2, name: 'Privacy Notice', item: 'https://pestproindex.com/privacy' },
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
            Privacy Notice
          </h1>
          <p className="text-lg sm:text-xl font-light text-blue-100 max-w-2xl mx-auto">
            Last updated: 17 August 2026
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Who we are</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PestPro Index (pestproindex.com) is operated by ENA Enterprises Ltd, a company registered in the United
          Kingdom, company number 17257845.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          ENA Enterprises Ltd is the data controller for the personal data described in this notice. We are registered
          with the Information Commissioner&apos;s Office under registration number ZC164333.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          You can contact us about anything in this notice at pestproindex@zohomail.eu, or by post at 61 Bridge Street,
          Kington, United Kingdom, HR5 3DJ.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">What this notice covers</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This notice explains what personal data we collect through pestproindex.com, why we collect it, who we share
          it with, how long we keep it and what rights you have. It does not cover other websites we link to. If you
          follow a link away from this site, the destination site&apos;s own privacy notice applies.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">What we collect</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Information you give us. If you submit a pest control business for listing, we collect the details you enter
          in that form, including business name, contact details and service information. If you email us, we collect
          your email address and whatever you choose to include in your message.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Information collected automatically, only if you consent. If you accept analytics or advertising cookies, our
          third-party providers collect information about your visit — pages viewed, approximate location derived from
          your IP address, device and browser type, how you arrived at the site, and how you move through it. None of
          this is collected before you consent. If you decline, or ignore the banner, these providers do not load at
          all.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Server logs. Our hosting provider may process standard technical logs, including IP addresses, for security
          and reliable operation. This is separate from analytics and happens regardless of your cookie choice, because
          it is necessary to run the site safely.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          What we do not collect. We do not take payments on this site and hold no card details. We do not ask for
          health information, or any other special category data. We do not build profiles about identified
          individuals, and we do not make automated decisions that have legal or similarly significant effects on you.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">Why we process it, and our lawful basis</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-left border-collapse text-gray-700">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 py-2 pr-4 align-bottom font-bold text-gray-900">What</th>
                <th className="border-b-2 border-gray-300 py-2 pr-4 align-bottom font-bold text-gray-900">Why</th>
                <th className="border-b-2 border-gray-300 py-2 align-bottom font-bold text-gray-900">Lawful basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">Business listing submissions</td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">To review, verify and publish directory entries</td>
                <td className="border-b border-gray-200 py-2 align-top">Legitimate interests — operating a directory that businesses ask to be included in</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">Email correspondence</td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">To answer your enquiry</td>
                <td className="border-b border-gray-200 py-2 align-top">Legitimate interests — responding to someone who contacted us</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">Site security and reliability</td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">To keep the site running and protect it from abuse</td>
                <td className="border-b border-gray-200 py-2 align-top">Legitimate interests — securing our own service</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">Analytics</td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">To understand which content is useful and improve it</td>
                <td className="border-b border-gray-200 py-2 align-top">Consent</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">Advertising and audience measurement</td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">To measure audience and support advertising</td>
                <td className="border-b border-gray-200 py-2 align-top">Consent</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Where we rely on legitimate interests, we have considered the effect on you and are satisfied our interests
          do not override your rights. You can object at any time — see Your rights below.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Where we rely on consent, you can withdraw it at any time, and it is as easy to withdraw as it was to give.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">Who we share it with</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We do not sell personal data. We share it with the following, each for a specific purpose:
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google Analytics — provided by Google. Used to measure how the site is used. Loads only if you accept
          analytics cookies. Google processes this data on its own infrastructure, which may be outside the UK; Google
          publishes the safeguards it applies to those transfers.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Grow by Mediavine — provided by Mediavine, Inc. Used for audience measurement and advertising technology.
          Loads only if you accept advertising cookies. Mediavine is based in the United States, so this involves a
          transfer outside the UK.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Amazon Associates — we take part in the Amazon Associates Programme and earn commission on qualifying
          purchases made through links on this site. We do not send Amazon any personal data. When you click an Amazon
          link, you leave our site and Amazon collects your data under its own privacy notice, including for affiliate
          attribution.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our hosting provider (Railway) and our database provider (Supabase) — these process data on our instructions
          in order to run the site and store business listings. They act as our processors, not for their own purposes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may also disclose information where we are legally required to.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">How long we keep it</h2>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>
            Business listing submissions — for as long as the listing is under review or published, and for up to 12
            months after it is removed.
          </li>
          <li>
            Email correspondence — up to 24 months from the last message, unless the subject matter requires us to keep
            it longer.
          </li>
          <li>
            Analytics data — retained inside Google Analytics for the retention period configured in our account,
            after which Google deletes it automatically.
          </li>
          <li>Your cookie choice — six months from the moment you choose, after which we ask again.</li>
        </ul>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">Your rights</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Under UK data protection law you have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>access the personal data we hold about you;</li>
          <li>rectify it if it is inaccurate or incomplete;</li>
          <li>erase it, in the circumstances the law allows;</li>
          <li>restrict how we use it;</li>
          <li>object to processing we carry out on the basis of legitimate interests;</li>
          <li>
            portability — receive data you gave us in a machine-readable format, where that right applies;
          </li>
          <li>
            withdraw consent at any time, for anything we do on the basis of consent. Withdrawing consent does not
            affect processing that already happened.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          To exercise any of these, email pestproindex@zohomail.eu. We will respond within one month.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          You also have the right to complain to the Information Commissioner&apos;s Office, the UK&apos;s data
          protection regulator, at{' '}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            ico.org.uk
          </a>
          . We would prefer the chance to put things right first, but you do not have to contact us before contacting
          the ICO.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">Children</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This site is intended for adults and is not directed at children. We do not knowingly collect personal data
          from children.
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">Changes to this notice</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We update this notice when our practices change. The date at the top shows when it was last revised.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/cookies" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all">
            Cookie Policy
          </Link>
        </div>
      </article>
    </div>
  );
}
