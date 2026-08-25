import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';

const URL = 'https://pestproindex.com/us/choosing-a-pest-control-service';
const TITLE = 'Choosing a Pest Control Service: How to Check a Licence Before You Hire';
const DESCRIPTION =
  'University of Florida Extension warns that illegal pest control operators are increasingly common. Florida publishes a free database that tells you whether the person quoting you is licensed, and this page shows the exact route through it.';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: URL,
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  datePublished: '2026-08-25',
  dateModified: '2026-08-25',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Choosing a Pest Control Service', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'How do I check whether a pest control operator is licensed?',
    answer:
      'In Florida, through a free public database run by the state. The Florida Department of Agriculture and Consumer Services publishes a searchable record of licensees, and University of Florida Extension gives the route through it: go to the site, open Reports in the top right, choose "Individual Licenses—Statute 388 and 482", and enter the operator\'s name. A legal operator is designated "active" under License Status. The database is at https://aeslicensing.fdacs.gov/. This is a Florida route and this page has no source for an equivalent lookup in any other state.',
  },
  {
    question: 'Why does it matter whether they are licensed?',
    answer:
      'Because University of Florida Extension states that "Illegal pest control operators are increasingly common throughout Florida and other states, posing a threat to people and the environment." That is the source\'s own wording, and it is the reason the check exists. The same publication describes what a licence carries with it: each pest control business location must hold insurance, have a full-time Florida-certified operator in charge of pest control operations at that location, and meet statutory training and record-keeping requirements.',
  },
  {
    question: 'How many companies should I approach?',
    answer:
      'University of Florida Extension states: "Interview three to five pest control companies." The same publication describes where to look for supporting information — word of mouth, local referrals, internet research and online reviews, and the Better Business Bureau — and treats the licence check as the separate step that establishes whether the company is operating legally at all.',
  },
  {
    question: 'Are there different kinds of pest control licence?',
    answer:
      'Yes, and the distinction decides who may do which job. University of Florida Extension names general household pest control, which it abbreviates GHP, and covers pests such as ants, cockroaches, fleas and rodents; and termites and wood-destroying organisms, abbreviated WDO, which covers beetles and wood-decay fungi as well as termites. The same publication states that if you own your home, termites and wood-destroying organisms should be handled using a service provided by pest management professionals.',
  },
  {
    question: 'When do I actually need a professional rather than doing it myself?',
    answer:
      'For termites, the sources are direct about it. University of Florida Extension states of the Formosan subterranean termite that "Control of Formosan subterranean termites requires professional pest control services and over-the-counter products are unlikely to be effective." LSU AgCenter states: "Use only licensed and certified pest management professionals for termite treatments." And on what to do when swarmers appear indoors, LSU AgCenter states: "Don\'t panic but don\'t ignore it. Seeing swarms outside is common, but if they\'re inside your home, call a licensed pest control professional."',
  },
  {
    question: 'Does this page recommend a company?',
    answer:
      'No. It names no company, links to no company, and carries nothing you can buy. What it carries is a state regulator\'s own database and the guidance one university extension service publishes about using it, so that the choosing is yours and the checking is done against an official record rather than against an advertisement.',
  },
];

const sources: Source[] = [
  {
    label:
      "Homeowner's Guide to Selecting a Pest Control Service (ENY-2043/IN1269) — the source of the licence-checking route, the licence categories and the unlicensed-operator warning",
    publisher:
      'University of Florida IFAS Extension (Faith Oi, James E. Davis, John M. Diaz, Sarah M. Ellis, Randall A. Cantrell, Nelly Nelson, Judy Corbus and Johnalyn Gordon)',
    date: 'Accessed 25 August 2026',
    href: 'https://edis.ifas.ufl.edu/in1269',
  },
  {
    label:
      'Formosan Subterranean Termite, Coptotermes formosanus Shiraki (EENY-121/IN278) — the source of the statement that control requires professional services',
    publisher: 'University of Florida IFAS Extension',
    date: 'Distribution data as of July 2024; accessed 25 August 2026',
    href: 'https://edis.ifas.ufl.edu/publication/in278',
  },
  {
    label:
      'Preparing for the Termite Swarms — the source of the instruction to use only licensed and certified professionals',
    publisher: 'LSU AgCenter (Qian "Karen" Sun, Urban Entomology)',
    date: 'Page stamped 20 April 2026',
    href: 'https://www.lsuagcenter.com/profiles/qsun/articles/page1620966062329',
  },
  {
    label:
      'Springtime swarms: What you need to know about termite alates — the source of the instruction to call a licensed professional when swarmers appear indoors',
    publisher:
      'LSU AgCenter (Shelly Kleinpeter, quoting entomologist Aaron Ashbrook and Carol Friedland)',
    date: '8 May 2025',
    href: 'https://www.lsuagcenter.com/articles/page1746732546640',
  },
];

const tocItems = [
  { id: 'why-it-matters', title: 'Why the Choosing Matters' },
  { id: 'check-the-licence', title: 'Check the Licence First' },
  { id: 'categories', title: 'The Licence Categories' },
  { id: 'comparing', title: 'Comparing Operators' },
  { id: 'scope', title: 'What This Page Does Not Cover' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

// This cluster's header nav and home pointer. Every other /us cluster keeps these
// in app/us/components/<cluster>Nav.ts and this one should too; they are declared
// here because S48 R3 fixed this round's file scope at two files, exactly as S47 R3
// did for the four Joro pages before S47 R4 collected them into a module. The props
// are passed explicitly either way, which is what UsPageLayout requires.
//
// THE CLUSTER IS ONE PAGE, AND IT CARRIES NO COMMERCE AT ALL. Its subject is a
// service rather than a product, so it has no cards, no ASINs and nothing to
// disclose. That is the design, not a gap waiting to be filled.
const CHOOSINGSERVICE_HOME = '/us';

const CHOOSINGSERVICE_NAV = [
  { title: 'Choosing a Pest Control Service', href: '/us/choosing-a-pest-control-service' },
];

export default function ChoosingAPestControlServicePage() {
  return (
    <UsPageLayout
      title="Choosing a Pest Control Service"
      subtitle="Several pages on this site end at the same place: this is a job for a professional. That advice is worth very little without a way to tell a licensed operator from someone who has printed a van. Florida publishes a free database that answers exactly that, and a university extension service publishes the route through it."
      lastUpdated="August 2026"
      readingTime="6 min"
      tocItems={tocItems}
      homeHref={CHOOSINGSERVICE_HOME}
      clusterNav={CHOOSINGSERVICE_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page carries nothing you can buy. It names no company and links to no company.
        What it carries is a state regulator&rsquo;s own record and the guidance one
        university extension service publishes about using it.
      </p>

      <h2 id="why-it-matters">Why the Choosing Matters</h2>
      <p>
        University of Florida IFAS Extension opens its homeowner guidance with a plain
        statement of the position:{' '}
        <em>&ldquo;All Florida residents will encounter pests.&rdquo;</em> It goes on to say
        which jobs belong to a professional, and it is specific about the one this site&rsquo;s
        other pages keep arriving at:{' '}
        <em>
          &ldquo;if you own your home, termite and wood-destroying organisms should be handled
          using a service provided by pest management professionals&rdquo;
        </em>
        .
      </p>
      <p>
        Other sources say the same thing about the hardest species. University of Florida IFAS
        Extension states of the Formosan subterranean termite:{' '}
        <em>
          &ldquo;Control of Formosan subterranean termites requires professional pest control
          services and over-the-counter products are unlikely to be effective.&rdquo;
        </em>{' '}
        LSU AgCenter states:{' '}
        <em>
          &ldquo;Use only licensed and certified pest management professionals for termite
          treatments.&rdquo;
        </em>{' '}
        And on the moment a reader is most likely to be searching &mdash; winged termites
        indoors &mdash; LSU AgCenter states:{' '}
        <em>
          &ldquo;Don&rsquo;t panic but don&rsquo;t ignore it. Seeing swarms outside is common,
          but if they&rsquo;re inside your home, call a licensed pest control professional.&rdquo;
        </em>
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          The warning that makes this a consumer-protection subject
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          University of Florida IFAS Extension states:{' '}
          <em>
            &ldquo;Illegal pest control operators are increasingly common throughout Florida
            and other states, posing a threat to people and the environment.&rdquo;
          </em>
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          That is the source&rsquo;s own wording, including its reach beyond Florida. It is the
          reason the check below exists and the reason it is worth doing before money changes
          hands rather than after.
        </p>
      </div>

      <p>
        The same publication describes what a licence actually carries with it, which is the
        part a quotation on a doorstep does not tell you: each pest control business location
        must hold insurance, must have a full-time Florida-certified operator in charge of pest
        control operations at that location, and must meet statutory training and
        record-keeping requirements.
      </p>

      <h2 id="check-the-licence">Check the Licence First</h2>
      <p>
        Florida publishes a searchable public record of licensees, and the check is free.
        University of Florida IFAS Extension gives the navigation, and it is worth following
        exactly, because the database holds more than one kind of report.
      </p>
      <ol>
        <li>
          Go to the Florida Department of Agriculture and Consumer Services licensing site at{' '}
          <a
            href="https://aeslicensing.fdacs.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://aeslicensing.fdacs.gov/
          </a>
          .
        </li>
        <li>
          Open <strong>Reports</strong>, in the top right of the page, and use the dropdown
          beneath it.
        </li>
        <li>
          Choose <strong>&ldquo;Individual Licenses&mdash;Statute 388 and 482&rdquo;</strong>.
        </li>
        <li>
          Enter the operator&rsquo;s name under <strong>Licensee&rsquo;s Name</strong>.
        </li>
        <li>
          Read the <strong>License Status</strong> column. University of Florida IFAS Extension
          states that legal pest control operators will be designated{' '}
          <strong>&ldquo;active&rdquo;</strong> there.
        </li>
      </ol>
      <p>
        <strong>This is a Florida route, and this page does not pretend otherwise.</strong> The
        database belongs to the Florida Department of Agriculture and Consumer Services and
        covers operators licensed in Florida. No source consulted for this page publishes an
        equivalent lookup for any other state, so none is offered here. A reader elsewhere has
        the principle &mdash; check against the state&rsquo;s own record rather than against
        the company&rsquo;s own claim &mdash; but not the link, because we have no source for
        one.
      </p>

      <h2 id="categories">The Licence Categories</h2>
      <p>
        A licence is not a single thing, and the category decides who may do which job.
        University of Florida IFAS Extension names the two a householder is most likely to
        meet:
      </p>
      <ul>
        <li>
          <strong>General household pest control</strong>, abbreviated GHP, covering pests such
          as ants, cockroaches, fleas and rodents.
        </li>
        <li>
          <strong>Termites and wood-destroying organisms</strong>, abbreviated WDO, covering
          beetles and wood-decay fungi as well as termites.
        </li>
      </ul>
      <p>
        The distinction is the practical reason to check the category and not only the status.
        A company holding one is not thereby licensed for the other, and it is termites and
        wood-destroying organisms that the same publication says should be handled by pest
        management professionals if you own your home.
      </p>

      <h2 id="comparing">Comparing Operators</h2>
      <p>
        On how many to approach, University of Florida IFAS Extension is specific:{' '}
        <em>&ldquo;Interview three to five pest control companies.&rdquo;</em>
      </p>
      <p>
        On where to look for supporting information, the same publication names word of mouth,
        local referrals, internet research and online reviews, and the Better Business Bureau.
        It treats those as <em>supporting</em> information, which is the right order: they tell
        you what other people thought of a company, and the licence database tells you whether
        the company is operating legally at all. The second question is the one that has an
        official answer.
      </p>

      <h2 id="scope">What This Page Does Not Cover</h2>
      <p>
        <strong>It does not name a company, rank a company, or link to one.</strong> There is no
        directory here and nothing on this page earns anything.
      </p>
      <p>
        <strong>It does not tell you what a treatment should cost.</strong> No source consulted
        for this page publishes a price, and this site does not publish prices.
      </p>
      <p>
        <strong>It does not carry a licence lookup for any state other than Florida</strong>,
        for the reason given above: the source base for this page is a Florida publication and a
        Florida database.
      </p>
      <p>
        <strong>And it does not replace the pages that send you here.</strong> What the sources
        say about a particular animal, and about where a homeowner&rsquo;s own work ends, is on
        those pages &mdash; <Link href="/us/termites">termites</Link> in particular, where five
        extension services are quoted saying the same thing in their own words.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or
        in the text immediately adjacent to it, and every source named is listed below. The
        wording, ordering and emphasis are our own judgement and are not a finding of any
        source. This page carries no product, no affiliate link and no commercial relationship
        of any kind, so there is nothing on it to disclose.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
