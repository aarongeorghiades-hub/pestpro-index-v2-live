import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

// S68 R4 — REWRITTEN FROM THE CODE, NOT FROM THE PREVIOUS NOTICE. Every collection
// point below was read at source before drafting:
//   /get-help            app/(uk)/get-help/page.tsx — browser-side insert into the
//                        Supabase table `leads`; postcode checked against api.postcodes.io
//   /professionals/submit app/(uk)/professionals/submit/page.tsx -> /api/provider-submissions
//                        -> server-side insert into `provider_submissions`, with user-agent
//   ConsentManager        components/ConsentManager.tsx — pp_consent cookie, 180 days;
//                        GA4 and Grow by Mediavine load only after opt-in
//   Amazon links          affiliate tag in every product link; no data sent by us
//   Fonts                 next/font/google — served from this site at build, no runtime
//                        request to Google
// No retention period exists in code for either form, so none is invented here: the
// notice says data is kept only as long as needed. The previous notice's "12 months" and
// "24 months" figures had no source in the repository and are gone.
//
// Static content page — no DB call, so it renders as a normal Server Component.
// @tailwindcss/typography is not installed, so every element carries explicit classes.
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

const H2 = 'text-3xl font-black text-gray-900 mb-4 mt-10';
const P = 'text-gray-700 leading-relaxed mb-4';
const UL = 'list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2';
const A = 'text-blue-600 hover:underline';

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
            Last updated: 7 September 2026
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">
        <h2 className={H2.replace(' mt-10', '')}>Who we are</h2>
        <p className={P}>
          PestPro Index (pestproindex.com) is operated by ENA Enterprises Ltd, a company registered in the United
          Kingdom, company number 17257845. ENA Enterprises Ltd is the data controller for the personal data described
          in this notice and is registered with the Information Commissioner&apos;s Office under registration number
          ZC164333.
        </p>
        <p className={P}>
          You can contact us about anything in this notice at{' '}
          <a href="mailto:pestproindex@zohomail.eu" className={A}>pestproindex@zohomail.eu</a>, or by post at 61 Bridge
          Street, Kington, United Kingdom, HR5 3DJ.
        </p>

        <h2 className={H2}>What this notice covers</h2>
        <p className={P}>
          This notice explains what personal data we collect through pestproindex.com, why, on what lawful basis, who
          we share it with, how long we keep it and what rights you have. It was written from the site&apos;s own code:
          each collection point below is one the site actually has, and nothing is described that it does not do. It
          does not cover other websites we link to; if you follow a link away from this site, the destination
          site&apos;s own privacy notice applies.
        </p>

        <h2 className={H2}>What we collect, and where</h2>

        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">1. The council tax band enquiry form at /get-help</h3>
        <p className={P}>
          This form asks for your full name (required), email address (required), phone number (optional), the
          property&apos;s postcode (required), house number and street (required), town (required, filled in from the
          postcode lookup) and county (optional), a reason chosen from a short list (required), and a free-text
          description (optional). If you reached the form from a link that carried a council tax band or an
          &ldquo;anomaly&rdquo; flag in the web address, that band and flag are recorded with your enquiry.
        </p>
        <p className={P}>
          When you look up the postcode, the postcode alone is sent from your browser to postcodes.io, a third-party
          postcode lookup service, which returns the district and county. When you submit, your browser sends the
          whole form directly to our database provider, Supabase, where it is stored in a table of enquiries. Nothing
          else on the page collects data.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">2. The business listing form at /professionals/submit</h3>
        <p className={P}>
          If you submit a pest control business for listing, we collect the business name, email address, phone
          number, website, address and postcode, the regions and pests you tick, whether you serve residential or
          commercial customers, a profile description, and the listing tier you are interested in. The submission goes
          to our own server, which records it in our database together with the browser identification string
          (user-agent) your browser sent with the request.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">3. Email</h3>
        <p className={P}>
          If you email us, we hold your email address and whatever you choose to include in your message.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">4. Analytics and advertising — only if you consent</h3>
        <p className={P}>
          Nothing non-essential loads until you answer the cookie banner. If you accept analytics cookies, Google
          Analytics loads and collects information about your visit — pages viewed, approximate location derived from
          your IP address, device and browser type, how you arrived and how you move through the site. If you accept
          advertising cookies, Grow by Mediavine loads for audience measurement and advertising technology. If you
          decline, or ignore the banner, neither script is created at all.
        </p>
        <p className={P}>
          Nothing is stored on your device before you make a cookie choice. When you answer, a single cookie named pp_consent records
          your choice for 180 days, after which we ask again. Details are in our{' '}
          <Link href="/cookies" className={A}>cookie policy</Link>.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">5. Server logs</h3>
        <p className={P}>
          Our hosting provider processes standard technical logs, including IP addresses, for security and reliable
          operation. This happens regardless of your cookie choice, because it is necessary to run the site safely.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">6. Amazon links</h3>
        <p className={P}>
          We take part in the Amazon Associates Programme. Every Amazon product link on this site carries our affiliate
          tag, and we earn commission on qualifying purchases. We send Amazon no personal data. When you click an Amazon
          link you leave our site, and Amazon collects data under its own privacy notice, including for attributing a
          purchase to us.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">What we do not collect</h3>
        <p className={P}>
          We take no payments on this site and hold no card details. We do not ask for health information or any other
          special category data. Fonts are served from our own host, so viewing a page makes no request to a font
          provider. We do not build profiles about identified individuals, and we make no automated decisions that
          have legal or similarly significant effects on you.
        </p>

        <h2 className={H2}>Why we process it, and our lawful basis</h2>
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
                <td className="border-b border-gray-200 py-2 pr-4 align-top">Council tax band enquiries</td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">To respond to the enquiry you made and help you check the band</td>
                <td className="border-b border-gray-200 py-2 align-top">Legitimate interests — responding to a request you sent us</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">Business listing submissions</td>
                <td className="border-b border-gray-200 py-2 pr-4 align-top">To review and publish directory entries</td>
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
        <p className={P}>
          Where we rely on legitimate interests, we have considered the effect on you and are satisfied our interests
          do not override your rights. You can object at any time — see Your rights below. Where we rely on consent,
          you can withdraw it at any time, and it is as easy to withdraw as it was to give.
        </p>

        <h2 className={H2}>Who we share it with</h2>
        <p className={P}>We do not sell personal data. We share it with the following, each for a specific purpose:</p>
        <ul className={UL}>
          <li>
            <strong>Supabase</strong> — our database provider. It stores the enquiry and listing forms. The council
            tax enquiry form is sent to it directly from your browser; the listing form reaches it through our server.
            It acts on our instructions, not for its own purposes.
          </li>
          <li>
            <strong>Railway</strong> — our hosting provider. It runs the site and processes the server logs described
            above, on our instructions.
          </li>
          <li>
            <strong>postcodes.io</strong> — the postcode lookup used on the enquiry form. It receives the postcode you
            type, and nothing else.
          </li>
          <li>
            <strong>Google</strong> (Google Analytics) — only if you accept analytics cookies. Google processes this
            data on its own infrastructure, which may be outside the UK; Google publishes the safeguards it applies to
            those transfers.
          </li>
          <li>
            <strong>Mediavine, Inc.</strong> (Grow by Mediavine) — only if you accept advertising cookies. Mediavine
            is based in the United States, so this involves a transfer outside the UK.
          </li>
          <li>
            <strong>Amazon</strong> — receives nothing from us. It collects data on its own site once you click
            through, as described above.
          </li>
        </ul>
        <p className={P}>We may also disclose information where we are legally required to.</p>

        <h2 className={H2}>How long we keep it</h2>
        <ul className={UL}>
          <li>
            Council tax band enquiries — only for as long as needed to respond to and complete the enquiry.
          </li>
          <li>
            Business listing submissions — only for as long as needed to review the submission, and while a resulting
            listing is published.
          </li>
          <li>Email correspondence — only for as long as needed to deal with the matter you wrote about.</li>
          <li>
            Analytics data — inside Google Analytics for the retention period configured in our account, after which
            Google deletes it automatically.
          </li>
          <li>Your cookie choice — 180 days from the moment you choose, after which we ask again.</li>
        </ul>

        <h2 className={H2}>Your rights</h2>
        <p className={P}>Under UK data protection law you have the right to:</p>
        <ul className={UL}>
          <li>access the personal data we hold about you;</li>
          <li>rectify it if it is inaccurate or incomplete;</li>
          <li>erase it, in the circumstances the law allows;</li>
          <li>restrict how we use it;</li>
          <li>object to processing we carry out on the basis of legitimate interests;</li>
          <li>portability — receive data you gave us in a machine-readable format, where that right applies;</li>
          <li>
            withdraw consent at any time, for anything we do on the basis of consent. Withdrawing consent does not
            affect processing that already happened.
          </li>
        </ul>
        <p className={P}>
          To exercise any of these, email <a href="mailto:pestproindex@zohomail.eu" className={A}>pestproindex@zohomail.eu</a>.
          We will respond within one month.
        </p>
        <p className={P}>
          You also have the right to complain to the Information Commissioner&apos;s Office, the UK&apos;s data
          protection regulator, at{' '}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className={A}>ico.org.uk</a>. We would
          prefer the chance to put things right first, but you do not have to contact us before contacting the ICO.
        </p>

        <h2 className={H2}>Children</h2>
        <p className={P}>
          This site is intended for adults and is not directed at children. We do not knowingly collect personal data
          from children.
        </p>

        <h2 className={H2}>Changes to this notice</h2>
        <p className={P}>
          We update this notice when the site&apos;s practices change. The date at the top shows when it was last
          revised.
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
