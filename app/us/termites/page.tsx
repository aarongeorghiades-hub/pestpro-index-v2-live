import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { TERMITES_NAV, TERMITES_HOME } from '../components/termitesNav';

const URL = 'https://pestproindex.com/us/termites';
const TITLE = 'Termites: Signs, the Two Main Types, and Limits';
const DESCRIPTION =
  'Mud tubes, hexagonal pellets and swarmers, the difference between subterranean and drywood termites, and why sources agree consumer products rarely eradicate them.';

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

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2026-08-23',
  dateModified: '2026-08-23',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Termites', item: URL }],
};

const faqs: Faq[] = [
  {
    question: 'Can I get rid of termites myself?',
    answer:
      'Five university extension services say no, in six separate places, and no source consulted says otherwise. The Alabama Cooperative Extension System states that do-it-yourself products sold to homeowners at retail stores or bought over the Internet will seldom eradicate an existing termite problem. University of Florida IFAS Extension states that controlling existing infestations is generally not a do-it-yourself project. Mississippi State University Extension states that do-it-yourself termite control is not a good idea. UC IPM states that it is unlikely that homeowners will be able to execute subterranean termite control on their own, and for drywood termites states that do-it-yourself treatments are not recommended. The Alabama Cooperative Extension System gives one narrow exception: a possible exception would be termite infestations in a mailbox, sandbox, or other small wooden object not attached to the house.',
  },
  {
    question: 'What is the most common sign of termites?',
    answer:
      'UC IPM states that shelter tubes, sometimes called mud tubes, are the most commonly seen evidence of subterranean termites. For drywood termites the diagnostic sign is different: UC IPM states that their fecal pellets have six hexagonal sides and are diagnostic for drywood termites. Mississippi State University Extension adds the timing problem behind both, stating that infestations rarely become evident until populations have grown large enough to cause some visible damage or produce swarmers.',
  },
  {
    question: 'How do I tell a subterranean termite from a drywood termite?',
    answer:
      'By the evidence each leaves rather than by the insect itself. UC IPM gives mud tubes as the most commonly seen evidence of subterranean termites, and gives six-sided fecal pellets as diagnostic for drywood termites. The distinction matters because it changes what any treatment has to reach: a subterranean colony is connected to soil, which is why University of Florida IFAS Extension describes application of liquid soil termiticides as still the most common method, while a drywood infestation sits inside the wood.',
  },
  {
    question: 'What does professional termite treatment cost?',
    answer:
      'Mississippi State University Extension publishes one figure and qualifies it itself: as a very rough estimate, initial treatment cost for most single-family homes will be in the range of $1,000 to $2,000 and the annual contract renewal fee will be around $200 to $300 per year. The same source states that some companies have buildings retreated approximately every 10 years. That is the only cost figure any source consulted for this page publishes. University of Florida IFAS Extension publication IN1277 was checked specifically for cost figures and carries none.',
  },
  {
    question: 'Do termite bait stakes work?',
    answer:
      'No source consulted for this page measures how well any particular bait product performs, so this page does not say. What the sources do state is the maintenance requirement: Mississippi State University Extension states that bait stations must be inspected and maintained on at least an annual basis. The same source states plainly that do-it-yourself termite control is not a good idea. A stake put in the ground and forgotten is not doing the thing the source describes.',
  },
  {
    question: 'Is borate wood treatment a cure for an active infestation?',
    answer:
      'The sources describe it as a construction-stage treatment rather than a cure. University of Florida IFAS Extension states that borate treatments for termites are usually only done during the new construction phase. The Alabama Cooperative Extension System states that all borate-based products are water soluble, thus borate-treated wood should be used only interiorly. Those two statements together set the scope: bare interior wood, ideally before a structure is closed up, and not as a remedy applied to a house with an active infestation in it.',
  },
  {
    question: 'Why does this page not rank termite products?',
    answer:
      'Because no source consulted compares any two termite products on any measure. There is no published specification for a termite product of the kind that would let one be measured against another, so there is no sourced basis for calling any product better than another and this page does not claim one. The products further down are grouped by what they are for, with the limitation each source states attached to each, and they are in no order of preference.',
  },
];

const sources: Source[] = [
  {
    label: 'Subterranean and Other Termites — Pest Notes, Home and Landscape',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 23 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/subterranean-and-other-termites/',
  },
  {
    label: 'Drywood Termites — Pest Notes, Home and Landscape',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 23 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/drywood-termites/',
  },
  {
    label: 'Publication IN1277 — subterranean termite control',
    publisher: 'University of Florida IFAS Extension',
    date: 'Accessed 23 August 2026',
    href: 'https://ask.ifas.ufl.edu/publication/in1277',
  },
  {
    label: 'Signs of Termite Infestation',
    publisher: 'Mississippi State University Extension',
    date: 'Accessed 23 August 2026',
    href: 'https://extension.msstate.edu/insects/termites/signs-termite-infestation',
  },
  {
    label: 'Common Questions About Termites and Termite Control — the source of the cost range',
    publisher: 'Mississippi State University Extension',
    date: 'Accessed 23 August 2026',
    href: 'https://extension.msstate.edu/insects/termites/common-questions-about-termites-and-termite-control',
  },
  {
    label: 'Termite Bait Stations — Bug’s Eye View, Vol 7 No 10',
    publisher: 'Mississippi State University Extension',
    date: 'Accessed 23 August 2026',
    href: 'https://extension.msstate.edu/newsletters/bugs-eye-view/2021/termite-bait-stations-vol-7-no-10',
  },
  {
    label: 'Subterranean Termite Control Products for Alabamians',
    publisher: 'Alabama Cooperative Extension System',
    date: 'Accessed 23 August 2026',
    href: 'https://aces.edu/blog/topics/home/subterranean-termite-control-products-for-alabamians/',
  },
  {
    label:
      'Formosan Subterranean Termite, Coptotermes formosanus Shiraki (EENY-121/IN278) — the source of the second soldier-proportion row in the table above',
    publisher: 'University of Florida IFAS Extension',
    date: 'Distribution data as of July 2024; accessed 25 August 2026',
    href: 'https://edis.ifas.ufl.edu/publication/in278',
  },
  {
    label: 'Circular C868 — Formosan Subterranean Termite',
    publisher: 'University of Georgia Extension',
    date: 'Accessed 23 August 2026',
    href: 'https://fieldreport.caes.uga.edu/publications/C868/',
  },
];

const tocItems = [
  { id: 'the-boundary', title: 'What Consumer Products Cannot Do' },
  { id: 'signs', title: 'The Signs' },
  { id: 'two-types', title: 'Subterranean or Drywood' },
  { id: 'formosan', title: 'The Formosan Termite' },
  { id: 'getting-rid', title: 'Getting Rid of Them' },
  { id: 'prevention', title: 'Prevention' },
  { id: 'cost', title: 'What Treatment Costs' },
  { id: 'products', title: 'Prevention, Monitoring and Spot Treatment' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function TermitesPage() {
  return (
    <UsPageLayout
      title="Termites"
      subtitle="Mud tubes against a foundation, or a small pile of six-sided pellets under a beam. Here is what university extension services say about the signs, the two main types, and the one thing all of them agree a homeowner cannot buy their way out of."
      lastUpdated="August 2026"
      readingTime="11 min"
      tocItems={tocItems}
      homeHref={TERMITES_HOME}
      clusterNav={TERMITES_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Most termite pages open with products. This one opens with a limit, because that is what
        the sources put first and because putting it anywhere else would be putting it after the
        point at which a reader has already decided what to buy.
      </p>
      <p>
        Five university extension services, writing separately, say the same thing about
        consumer termite products. There is no source consulted for this page that says the
        opposite. That agreement is unusual enough to belong at the top rather than in a
        footnote.
      </p>

      <h2 id="the-boundary">What Consumer Products Cannot Do</h2>

      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          The point every source consulted agrees on
        </p>
        <p className="m-0 mt-3 text-base text-amber-900">
          The Alabama Cooperative Extension System states:{' '}
          <strong>
            &ldquo;Do-it-yourself products sold to homeowners at retail stores or bought over the
            Internet will seldom eradicate an existing termite problem.&rdquo;
          </strong>
        </p>
        <p className="m-0 mt-3 text-base text-amber-900">
          An active infestation in a structure is a job for a professional. Nothing further down
          this page changes that, and nothing sold on this page is offered as a way around it.
        </p>
      </div>

      <p>Four more sources say it in their own words:</p>
      <ul>
        <li>
          University of Florida IFAS Extension: &ldquo;Controlling existing infestations is
          generally not a do-it-yourself project.&rdquo;
        </li>
        <li>
          Mississippi State University Extension: &ldquo;Do-it-yourself termite control is not a
          good idea!&rdquo;
        </li>
        <li>
          UC IPM, on subterranean termites: &ldquo;It is unlikely that homeowners will be able to
          execute subterranean termite control on their own.&rdquo;
        </li>
        <li>
          UC IPM, on drywood termites: &ldquo;do-it-yourself treatments are not
          recommended.&rdquo;
        </li>
      </ul>

      <p>
        There is one narrow exception in the material, and it is narrow. The Alabama Cooperative
        Extension System states that{' '}
        <strong>
          &ldquo;A possible exception would be termite infestations in a mailbox, sandbox, or
          other small wooden object not attached to the house.&rdquo;
        </strong>{' '}
        A detached wooden object is the whole of the exception. It does not extend to a porch, a
        deck, a subfloor or anything else that is part of the building.
      </p>

      <p>
        One further statement belongs here, and its scope is part of the fact. UC IPM states that{' '}
        <strong>
          &ldquo;There are no reliable over-the-counter termite control products available for the
          public in California&rdquo;
        </strong>
        . That sentence is about California. It is quoted here as written and is not extended to
        the rest of the country, because the source did not extend it.
      </p>

      <h2 id="signs">The Signs</h2>
      <p>
        The hardest thing about termites is when they become visible. Mississippi State University
        Extension states that{' '}
        <strong>
          &ldquo;Infestations rarely become evident until populations have grown large enough to
          cause some visible damage or produce swarmers.&rdquo;
        </strong>{' '}
        By the time there is something to look at, there has usually been something to find for a
        while.
      </p>
      <p>
        Two signs are described as diagnostic, and they belong to different animals. UC IPM states
        that <strong>&ldquo;Shelter tubes (sometimes called mud tubes) are the most commonly seen
        evidence&rdquo;</strong> of subterranean termites. These are the earth-coloured tubes run
        up a foundation wall, a pier or a joist, connecting soil to wood.
      </p>
      <p>
        For drywood termites the sign is the droppings rather than the tubes. UC IPM states that{' '}
        <strong>
          &ldquo;These fecal pellets have six hexagonal sides and are diagnostic for drywood
          termites.&rdquo;
        </strong>{' '}
        Six flat sides on a pellet is a specific thing to look for, and the source calls it
        diagnostic rather than suggestive.
      </p>
      <p>
        Swarmers are the third sign, and Mississippi State University Extension names them
        alongside visible damage as one of the two things that finally make an infestation
        evident.
      </p>

      <h2 id="two-types">Subterranean or Drywood</h2>
      <p>
        The distinction is not academic, because it changes what any treatment has to reach. A
        subterranean colony is connected to the soil. That connection is why University of Florida
        IFAS Extension states that{' '}
        <strong>
          &ldquo;Application of liquid soil termiticides is still the most common method&rdquo;
        </strong>{' '}
        &mdash; the treatment goes into the ground because that is where the colony is.
      </p>
      <p>
        A drywood infestation is inside the wood and is not connected to soil, which is why the
        soil approach does not apply to it and why the evidence it leaves is pellets rather than
        tubes. UC IPM addresses drywood termites separately and reaches the same conclusion it
        reaches for subterranean ones:{' '}
        <strong>&ldquo;do-it-yourself treatments are not recommended.&rdquo;</strong> That is a
        statement about the approach, not about any one product.
      </p>

      <h2 id="formosan">The Formosan Termite</h2>
      <p>
        University of Georgia Extension describes the Formosan subterranean termite separately from
        native subterranean termites, and gives three differences a person can actually observe.
      </p>
      <div className="not-prose my-8">
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Feature</th>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Formosan</th>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Native subterranean</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">Swarmer length</td>
                <td className="px-4 py-3 text-gray-700">One-half of an inch</td>
                <td className="px-4 py-3 text-gray-700">Three-eighths of an inch</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">Swarmer colour</td>
                <td className="px-4 py-3 text-gray-700">Caramel- to brownish-yellow colored</td>
                <td className="px-4 py-3 text-gray-700">Black</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">
                  Soldiers, share of colony
                  <span className="block font-normal text-gray-600">
                    University of Georgia Extension
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-700">15 to 20 percent</td>
                <td className="px-4 py-3 text-gray-700">1 to 3 percent</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">
                  Soldiers, share of colony
                  <span className="block font-normal text-gray-600">
                    University of Florida IFAS Extension
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-700">10% to 15%</td>
                <td className="px-4 py-3 text-gray-700">1%&ndash;2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        <strong>Two extension services publish different soldier proportions, and both rows
        are given above rather than one being chosen.</strong> The Formosan ranges overlap at 15
        percent and nowhere else. Neither is corrected here and neither is averaged, because
        both are published figures from extension services and this page has no basis for
        preferring one.
      </p>
      <p>
        Beyond the characters in that table, this page carries nothing further on the Formosan
        termite. Its range, its colony size, its swarm season and what the sources say a
        householder can and cannot do about it are set out on our{' '}
        <Link href="/us/formosan-termites">Formosan termites page</Link>.
      </p>

      <h2 id="getting-rid">Getting Rid of Them</h2>
      <p>
        The honest answer for an active infestation in a building is the one at the top of this
        page: it is a professional job, and the sources are unanimous about that. What follows is
        what the sources say the professional methods are, so that a reader knows what is being
        proposed to them and on what basis.
      </p>
      <p>
        <strong>Liquid soil termiticide.</strong> University of Florida IFAS Extension states that
        application of liquid soil termiticides is still the most common method. It is applied to
        the soil around and under a structure, which is why it is not something that comes out of a
        bottle bought for the afternoon.
      </p>
      <p>
        <strong>Baiting.</strong> Mississippi State University Extension states that{' '}
        <strong>&ldquo;bait stations must be inspected and maintained on at least an annual
        basis.&rdquo;</strong> Baiting is a programme with a maintenance schedule rather than a
        one-off application, and the same source states in the same place that do-it-yourself
        termite control is not a good idea.
      </p>
      <p>
        <strong>Borate wood treatment.</strong> University of Florida IFAS Extension states that{' '}
        <strong>&ldquo;Borate treatments for termites are usually only done during the new
        construction phase.&rdquo;</strong> The Alabama Cooperative Extension System adds the
        constraint that decides where it can go:{' '}
        <strong>&ldquo;All borate-based products are water soluble, thus borate-treated wood should
        be used only interiorly&rdquo;</strong>. Borate is a way of treating bare interior wood,
        most usefully before a building is closed up, rather than a remedy for a house that already
        has termites in it.
      </p>
      <p>
        <strong>Treating a drywood infestation.</strong> UC IPM states that do-it-yourself
        treatments are not recommended. That applies to any spot treatment a homeowner might
        reach for, including the foam product listed further down, and it is the reason nothing on
        this page is offered as a whole-structure remedy.
      </p>

      <h2 id="prevention">Prevention</h2>
      <p>
        Two prevention specifications appear in the sources, and both are about separating wood
        from ground.
      </p>
      <ul>
        <li>
          University of Florida IFAS Extension: <strong>&ldquo;Eliminate wood-to-ground
          contact.&rdquo;</strong>
        </li>
        <li>
          UC IPM: <strong>&ldquo;Keep a 12-inch barrier of smooth concrete, coarse sand&rdquo;</strong>{' '}
          between soil and wood.
        </li>
      </ul>
      <p>
        Prevention is the part of this subject where a homeowner genuinely can act, and the twelve
        inches is a measurable figure rather than general advice. It is also the reason the
        products further down are scoped the way they are: the sources support acting before there
        is an infestation far more strongly than they support acting after.
      </p>

      <h2 id="cost">What Treatment Costs</h2>
      <p>
        One source consulted publishes a cost figure, and it qualifies the figure itself.
        Mississippi State University Extension states:{' '}
        <strong>
          &ldquo;As a very rough estimate, initial treatment cost for most single-family homes will
          be in the range of $1,000 to $2,000 and the annual contract renewal fee will be around
          $200 to $300 per year.&rdquo;
        </strong>
      </p>
      <p>
        The words <em>as a very rough estimate</em> are the source&rsquo;s own and are kept here
        because removing them would make the range sound firmer than the people who published it
        intended. The same source states that some companies have buildings retreated
        approximately every 10 years.
      </p>
      <p>
        That is the only cost figure on this page. University of Florida IFAS Extension publication
        IN1277 was checked for cost figures specifically and publishes none, so none is quoted from
        it.
      </p>

      <h2 id="products">Prevention, Monitoring and Spot Treatment</h2>
      <p>
        <strong>
          These four products are for prevention, for monitoring, and for treating a spot. None of
          them is a cure for an active infestation in a structure, and none is presented as one.
        </strong>{' '}
        The statement at the top of this page applies to every one of them: consumer products
        seldom eradicate an existing termite problem, and a structural infestation is a
        professional job.
      </p>
      <p>
        They are in no order of preference and none is called better than another, because no
        source consulted compares any two termite products on any measure. Each card carries the
        limitation its own sources state. What is written under each product is what that class of
        product is for, not an assessment of how well the product performs, which is not something
        this page has a source for.
      </p>

      <h3>Monitoring and baiting</h3>

      <UsToolCard
        name="Spectracide Terminate Termite Detection &amp; Killing Stakes, 15 Count"
        whatItDoes={[
          'Ground stakes, placed around a structure, of the detection-and-bait type.',
          'Mississippi State University Extension states that bait stations must be inspected and maintained on at least an annual basis. Stakes left in the ground and forgotten are not doing what the source describes.',
          'The same source states that do-it-yourself termite control is not a good idea. This is a monitoring aid, not a treatment for an active infestation.',
        ]}
        asin="B00AA8WVLI"
      />

      <UsToolCard
        name="Spectracide Terminate Termite Detection &amp; Killing Replacement Stakes, 8 Pack"
        whatItDoes={[
          'Replacement stakes for the system above, listed separately by the manufacturer.',
          'Listed here because the annual inspection and maintenance that Mississippi State University Extension describes is an ongoing requirement rather than a one-time purchase.',
        ]}
        asin="B00EORPBQI"
      />

      <h3>Borate treatment for bare interior wood</h3>

      <UsToolCard
        name="Bora-Care Termiticide Insecticide and Fungicide Concentrate, 1 Gallon"
        whatItDoes={[
          'A borate concentrate applied to bare wood.',
          'University of Florida IFAS Extension states that borate treatments for termites are usually only done during the new construction phase.',
          'The Alabama Cooperative Extension System states that all borate-based products are water soluble, thus borate-treated wood should be used only interiorly. Interior, bare wood, and not an exterior application.',
        ]}
        asin="B01HDYAOY2"
      />

      <h3>Spot treatment</h3>

      <UsToolCard
        name="BASF Termidor Foam, 20 oz"
        whatItDoes={[
          'A foam applied into a crack, a void or a gallery, for treating one located spot.',
          'University of Florida IFAS Extension states that controlling existing infestations is generally not a do-it-yourself project, and UC IPM states that do-it-yourself treatments are not recommended. This treats one located spot; it is not a whole-structure remedy.',
          'The Alabama Cooperative Extension System gives the only exception it recognises for consumer treatment as a mailbox, sandbox, or other small wooden object not attached to the house.',
        ]}
        asin="B00B5WI5VI"
      />

      <p>
        Four products appear above and there is no fifth. Two further classes were looked for and
        are deliberately absent: no consumer liquid soil termiticide concentrate is listed, even
        though University of Florida IFAS Extension calls that the most common method, and no
        standalone monitoring-only device is listed because the detection function here belongs to
        the stakes already shown. Where a product could not be listed honestly, nothing is listed
        in its place.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the nine extension service
        publications below. Where a source qualified its own statement, the qualification is kept.
        The product names above were read from each product&rsquo;s own listing on 23 August 2026
        and are recorded rather than assessed; the listings read were B00AA8WVLI, B00EORPBQI,
        B01HDYAOY2 and B00B5WI5VI. Each is reachable from its own card above, where the disclosure
        sits directly beside the link, and they are named here rather than linked again so that
        every link to a product on this page carries its disclosure. Framing and ordering are our
        own judgement and are not a finding of any source.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
