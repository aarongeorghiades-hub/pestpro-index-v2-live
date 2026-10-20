'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ListingBadge from '@/components/listing/ListingBadge';
import { PROFESSIONALS_FAQS } from '@/lib/professionalsFaq';

const FEATURED_MONTHLY = (process.env.NEXT_PUBLIC_STRIPE_FEATURED_MONTHLY_LINK || '').trim();
const FEATURED_ANNUAL = (process.env.NEXT_PUBLIC_STRIPE_FEATURED_ANNUAL_LINK || '').trim();

function stripeHref(value: string): string | null {
  return value.startsWith('https://') ? value : null;
}

const H2 = 'dir-display text-[clamp(2.25rem,5vw,3.5rem)] text-[var(--color-ink)]';
const BODY = 'text-[var(--color-ink-soft)] leading-relaxed';

const STANDARD_INCLUDES = [
  'Listed, and sorted by rating',
  'Your company details, contact information and service areas',
  'Certifications and accreditations',
  'Review rating, where one is available',
  'Free to claim',
];

const FEATURED_INCLUDES = [
  'A labelled spot above the list on your area pages',
  'Logo, photos and a fuller description',
  'Limited Featured spots per area',
  "Cancel with one full calendar month's notice",
  'Does not change your place in the rating order',
];

const STEPS = [
  {
    title: 'Create your profile',
    body: 'Submit your business details (name, contact details, address and postcode) for review.',
  },
  {
    title: 'Complete your listing',
    body: 'Tell us the areas you cover, the pests you treat, whether you serve homes or businesses, and a short description of your work.',
  },
  {
    title: 'Get found',
    body: 'Your listing shows your phone number, email and website. Customers contact you directly.',
  },
];

const WHY = [
  {
    title: 'No lead fees',
    body: 'Unlike Checkatrade, Bark, or Rated People, we never charge per enquiry.',
  },
  {
    title: "Rankings can't be bought",
    body: 'Results are sorted by rating. Firms can pay for a clearly labelled Featured slot, never a higher rank.',
  },
  {
    title: 'Transparent',
    body: 'Customers see real reviews, real certifications, real coverage. A Featured slot is labelled as paid and sits apart from the rating order.',
  },
  {
    title: 'UK-wide coverage',
    body: 'Area pages across England, Scotland, Wales and Northern Ireland, from London to Glasgow and Belfast.',
  },
];

const PUBLICATIONS = [
  { href: 'https://bpca.org.uk/ppc-magazine', name: 'Professional Pest Controller', note: 'Official BPCA magazine, free quarterly' },
  { href: 'https://pestmagazine.co.uk/', name: 'Pest Magazine', note: 'Independent trade publication, supports CPD' },
  { href: 'https://www.pestcontrolnews.com/', name: 'Pest Control News', note: 'Free trade magazine, regulatory focus' },
  { href: 'https://www.pctonline.com/', name: 'Pest Control Technology', note: 'US monthly, industry trends and technology' },
];

function Includes({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-base text-[var(--color-ink-soft)]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.6em] h-px w-3 flex-shrink-0 bg-[var(--color-ink-mute)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// providerCount is counted server-side in page.tsx so the figure is present in
// the initial HTML for crawlers and no-JS visitors. It is null only when that
// query failed, in which case the count line is omitted and the standfirst
// runs without a number. There is never a fallback figure.
export default function ProfessionalsClient({ providerCount }: { providerCount: number | null }) {
  const faqItems = PROFESSIONALS_FAQS;
  const monthlyHref = stripeHref(FEATURED_MONTHLY);
  const annualHref = stripeHref(FEATURED_ANNUAL);

  return (
    <div className="min-h-screen bg-[var(--color-stock)] text-[var(--color-ink)]">
      <Navigation />

      {/* Hero */}
      <header className="border-b border-[var(--color-marigold-edge)] bg-[var(--color-saffron-wash)]">
        <div className="dir-wrap pb-12 pt-12 md:pb-16 md:pt-20">
          <h1 className="dir-display max-w-[16ch] text-[clamp(2.75rem,9vw,6rem)] text-[var(--color-ink)]">
            List your pest control firm <em className="dir-accent text-[var(--color-primary)]">for free</em>
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-xl">
            PestPro Index is a directory of local, independent pest controllers. Customers find you on
            the page for your area and contact you directly. A standard listing costs nothing. A
            Featured spot is optional.
          </p>
          <p className="mt-4 text-base font-semibold text-[var(--color-ink)]">
            Independent local firms · No national chains · No lead fees · No commissions
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/professionals/submit" className="dir-btn dir-btn-ink px-6 text-base">
              Create your free listing
            </Link>
            <a href="#rates" className="dir-btn dir-btn-line px-6 text-base">
              See Featured rates
            </a>
          </div>

          <p className="dir-num mt-10 max-w-xl border-t border-[var(--color-rule-strong)] pt-4 text-base font-semibold text-[var(--color-ink)]">
            {providerCount !== null ? <>{providerCount.toLocaleString()} independent firms listed · </> : null}No lead fees · No commissions
          </p>
        </div>
      </header>

      {/* Rate card */}
      <section id="rates" className="scroll-mt-24 bg-[var(--color-stock)] py-20 md:py-28">
        <div className="dir-wrap">
          <h2 className={H2}>Simple pricing</h2>
          <p className={`mt-3 max-w-[60ch] text-lg ${BODY}`}>
            A standard listing is free, always. Featured is optional.
          </p>

          <div className="dir-card mt-12 overflow-hidden">
            <div
              aria-hidden="true"
              className="hidden grid-cols-[13rem_1fr_9rem_15rem] gap-6 border-b border-[var(--color-rule)] bg-[var(--color-paper)] px-7 py-3 text-sm text-[var(--color-ink-mute)] lg:grid"
            >
              <span>Listing</span>
              <span>What you get</span>
              <span>Price</span>
              <span />
            </div>

            {/* Standard */}
            <div className="grid gap-5 px-6 py-8 md:px-7 lg:grid-cols-[13rem_1fr_9rem_15rem] lg:gap-6">
              <div>
                <h3 className="text-xl font-bold">Standard listing</h3>
                <p className="mt-1 text-sm text-[var(--color-ink-mute)]">Free, always</p>
              </div>
              <Includes items={STANDARD_INCLUDES} />
              <p className="dir-num dir-display text-4xl">£0</p>
              <div>
                <Link href="/professionals/submit" className="dir-btn dir-btn-ink w-full">
                  Create your free listing
                </Link>
              </div>
            </div>

            {/* Featured */}
            <div className="grid gap-5 border-t border-[var(--color-marigold-edge)] bg-[var(--color-marigold-wash)] px-6 py-8 md:px-7 lg:grid-cols-[13rem_1fr_9rem_15rem] lg:gap-6">
              <div>
                <h3 className="text-xl font-bold">Featured</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-marigold-deep)]">
                  Optional. Labelled Featured · Sponsored.
                </p>
              </div>
              <Includes items={FEATURED_INCLUDES} />
              <div>
                <p className="dir-num dir-display text-4xl">£12</p>
                <p className="text-sm text-[var(--color-ink-mute)]">a month, or £120 a year</p>
              </div>
              <div className="space-y-3">
                {monthlyHref ? (
                  <a
                    href={monthlyHref}
                    className="dir-btn dir-btn-ink w-full"
                  >
                    £12 / month
                  </a>
                ) : (
                  <Link
                    href="/professionals/submit?tier=featured"
                    className="dir-btn dir-btn-ink w-full"
                  >
                    Register interest, £12 / month
                  </Link>
                )}
                {annualHref ? (
                  <a
                    href={annualHref}
                    className="dir-btn dir-btn-line w-full"
                  >
                    £120 / year
                  </a>
                ) : (
                  <Link
                    href="/professionals/submit?tier=featured"
                    className="dir-btn dir-btn-line w-full"
                  >
                    Register interest, £120 / year
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 text-sm leading-relaxed text-[var(--color-ink-soft)] md:grid-cols-2 md:gap-10">
            <p>
              First 30 days free. By subscribing you agree to give one full calendar month&apos;s notice
              to cancel; your listing stays Featured until the notice period ends.
            </p>
            <p>
              Rankings can&apos;t be bought. Results are sorted by rating. A Featured slot is labelled and
              sits apart from that order. No lead fees, ever.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-[var(--color-primary-soft)] bg-[var(--color-primary-wash)] py-20 md:py-28">
        <div className="dir-wrap">
          <h2 className={H2}>How it works</h2>
          <p className={`mt-3 text-lg ${BODY}`}>Get listed in three steps.</p>
          <ol className="mt-10 grid gap-x-10 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="dir-entry pb-6 pt-5">
                <span className="dir-num dir-display text-5xl text-[var(--color-ink)]">{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className={`mt-2 ${BODY}`}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why PestPro Index */}
      <section className="py-20 md:py-28">
        <div className="dir-wrap">
          <h2 className={H2}>Why PestPro Index</h2>
          <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
            {WHY.map((item) => (
              <li key={item.title} className="dir-entry py-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className={`mt-2 max-w-[52ch] ${BODY}`}>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How featured listings work */}
      <section
        id="how-featured-listings-work"
        className="scroll-mt-24 border-t border-[var(--color-rule)] bg-[var(--color-paper)] py-20 md:py-28"
      >
        <div className="dir-wrap grid gap-10 lg:grid-cols-[minmax(0,68ch)_1fr]">
          <div>
            <h2 className={H2}>How featured listings work</h2>
            <p className={`mt-5 text-lg ${BODY}`}>
              Rankings can&apos;t be bought. Results are sorted by rating. Firms can pay for a clearly
              labelled Featured slot, never a higher rank. No lead fees, ever.
            </p>
            <p className={`mt-4 text-lg ${BODY}`}>
              The Featured box, when a firm is in it, sits above the rating-sorted list and is headed
              &ldquo;Featured · Sponsored&rdquo;. Limited Featured spots per area. The order inside the box
              changes each day. A standard listing stays free and stays in the rating order. Nothing on
              this site charges a fee per enquiry.
            </p>
            <p className={`mt-4 text-lg ${BODY}`}>
              Featured is £12 a month or £120 a year. First 30 days free. Cancel with one full calendar
              month&apos;s notice. The slot can show a logo, photos and a fuller description.
            </p>
          </div>
          <div className="lg:pt-2">
            <ListingBadge />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="dir-wrap">
          <h2 className={H2}>Frequently asked questions</h2>
          <p className={`mt-3 text-lg ${BODY}`}>About listing on PestPro Index.</p>
          <div className="mt-10 max-w-[68ch] border-b border-[var(--color-rule-strong)]">
            {faqItems.map((item) => (
              <details key={item.question} className="group border-t border-[var(--color-rule-strong)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">{item.question}</h3>
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-[var(--color-ink-mute)] transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className={`pb-6 ${BODY}`}>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="border-y border-[var(--color-rule)] bg-[var(--color-stock)] py-20 md:py-28">
        <div className="dir-wrap flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="dir-display text-[clamp(2.25rem,6vw,4rem)]">Get your firm listed</h2>
            <p className={`mt-4 max-w-[52ch] text-lg ${BODY}`}>
              A standard listing is free and stays in the rating order. Questions first? Get in touch.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
            <Link href="/professionals/submit" className="dir-btn dir-btn-ink px-6 text-base">
              Create your free listing
            </Link>
            <Link href="/contact" className="dir-btn dir-btn-line px-6 text-base">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Industry publications */}
      <section className="bg-[var(--color-paper)] py-14">
        <div className="dir-wrap">
          <h2 className="text-xl font-bold">Industry publications</h2>
          <p className={`mt-2 ${BODY}`}>The leading pest control trade publications.</p>
          <ul className="mt-6 grid border-t border-[var(--color-rule-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {PUBLICATIONS.map((pub) => (
              <li key={pub.href} className="border-b border-[var(--color-rule)] py-4 sm:pr-6">
                <a href={pub.href} target="_blank" rel="noopener noreferrer" className="dir-link font-semibold">
                  {pub.name}
                </a>
                <p className="mt-1 text-sm text-[var(--color-ink-mute)]">{pub.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/resources" className="dir-link font-semibold">
              See all resources
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
