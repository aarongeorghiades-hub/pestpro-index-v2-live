import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { GROUNDHOG_NAV, GROUNDHOG_HOME } from '../components/groundhogNav';

const URL = 'https://pestproindex.com/us/groundhogs';
const TITLE = 'Groundhogs: The Fence Spec, and What State Law Says';
const DESCRIPTION =
  'Three states classify the groundhog three ways, and one bans relocating a trapped one. The burrow, the structural damage, and four fence specs that disagree.';

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
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Groundhogs', item: URL }],
};

// ---------------------------------------------------------------------------
// ONE CARD, AND THE REASONS THE OTHER CLASSES CARRY NONE ARE NOT THE SAME
// REASON. This matters because a reader who sees one product and four empty
// sections should be told which absences are ours and which are the sources'.
//
//   LIVE TRAP        ONE card. Penn State publishes a minimum size and the
//                    listing's own detail block exceeds it. Seven further
//                    listings were attempted on 2026-09-03 and every one
//                    returned Amazon's anti-bot interstitial, so this is the
//                    only listing whose own title could be read (S50-H).
//
//   REPELLENTS       NO card, and the reason is REGISTRATION, not efficacy.
//                    Penn State: none are registered for use against
//                    woodchucks in Pennsylvania. ICWDM lists fox urine with no
//                    specification of any kind. No criterion, no card (Law 139).
//
//   TOXICANTS        NO card. Penn State: none are registered.
//
//   FUMIGANTS        NO card, and this is a MATERIAL DANGER exclusion under
//                    S48-A rather than a weak-effectiveness one. UNH states
//                    outright that a gas cartridge must never be used under a
//                    wooden structure — which is precisely where most readers
//                    have their groundhog. Penn State adds that the gases are
//                    toxic to other wildlife, and that the aluminum phosphide
//                    alternative must be stored in a locked ventilated room.
//
//   BODY-GRIP TRAPS  NO card. UNH: a pet or non-target animal that walks
//                    through one gets no second chance. Same ground as the
//                    glue-board exclusion on /us/snakes: non-target welfare is
//                    a material danger, not an efficacy judgment.
//
// AVAILABILITY IS NOT CLAIMED FOR THE ONE CARD. Its title and its dimensions
// were read from its own fetched page on 2026-09-03; the buy-box state could
// not be established from that page and no claim about it is made here, on the
// house position already written on /us/mole-and-vole-control — a title read on
// one day is an identity, not an inventory.
// ---------------------------------------------------------------------------

const faqs: Faq[] = [
  {
    question: 'Is it legal to trap or shoot a groundhog?',
    answer:
      'It depends entirely on the state, and this page carries three rather than a general rule. Penn State Extension states that in Pennsylvania woodchucks are classified as game animals, and that game protection is removed when they damage personal property. The Missouri Department of Conservation states that the Wildlife Code of Missouri classifies the groundhog as a game mammal that may be taken during the prescribed hunting season, that cage-type traps are allowed as a hunting method, and that you may shoot or trap damage-causing groundhogs out-of-season without a permit, referring the reader to 3 CSR 10-4.130 for details and restrictions. University of Connecticut states that woodchucks can be hunted most of the year in Connecticut with no daily or seasonal limits, on a 2015 statement. Three states, three positions, and no source consulted covers the other forty-seven.',
  },
  {
    question: 'Can I catch one and release it somewhere else?',
    answer:
      'This is the sharpest disagreement on the page and it is a legal one, not a practical one. Penn State Extension states that because woodchucks are considered a potential rabies vector, the Pennsylvania Game Commission does not allow them to be relocated to other properties, and that a trapped animal should be humanely euthanized or released elsewhere on the landowner\'s own property. Purdue Extension takes the opposite position for Indiana and states that captured woodchucks should be relocated at least five miles from the trap site. University of Connecticut states that live trapping and relocating is legal in Connecticut for species that do not carry rabies. UNH Cooperative Extension adds that written permission must be obtained from the landowner before releasing an animal on their property. Check your own state agency before trapping, because in at least one of these states the answer is no.',
  },
  {
    question: 'How do I tell a groundhog from a gopher or a ground squirrel?',
    answer:
      'By size and by the hole. A groundhog is far larger than any of them, and Penn State Extension gives the burrow entrance as 10 to 12 inches in diameter, which is wider than a gopher or ground squirrel opening. It also describes a mound of excavated earth at the main entrance that the animal sits on to watch for danger. Our mole, vole or gopher page covers the three smaller diggers and the signs that separate them; nothing on that page has a 10 to 12 inch entrance.',
  },
  {
    question: 'Can a groundhog actually damage my house?',
    answer:
      'Both structural sources say yes, and they say it about foundations specifically. Penn State Extension states that on occasion burrowing can weaken dikes and building foundations. The Missouri Department of Conservation states that burrows can undermine concrete building foundations, porches and driveways. Penn State also states that mounds of earth from the excavated burrow systems and holes at burrow entrances present a hazard to farm equipment, horses and riders.',
  },
  {
    question: 'What fence actually keeps them out?',
    answer:
      'Four sources give four different specifications and this page reports all four rather than averaging them. They agree on the height — at least three feet — and on almost nothing else. Penn State says to bury the lower edge 12 inches with the lower 6 inches bent outward in an L, and to bend the top 15 inches outward at 45 degrees. Missouri gives the same 15 inches at 45 degrees. UNH gives 12 to 15 inches at about 45 degrees. UConn gives the top 12 inches left loose and bent outward at 90 degrees, over a 10 to 12 inch burial. ICWDM gives an 18-inch skirt buried only 2 inches with a 9 to 12 inch overhang. The burial depth alone runs from 2 inches to 12.',
  },
  {
    question: 'Do repellents work on groundhogs?',
    answer:
      'No source consulted names one you can measure. Penn State Extension states that no repellents are registered for use against woodchucks in Pennsylvania, and that no toxicants are registered either. ICWDM lists fox urine under repellents with no specification of any kind attached. That is a registration statement and an unspecified listing, not evidence of effect, so no repellent is named on this page.',
  },
  {
    question: 'What about a gas cartridge in the burrow?',
    answer:
      'No fumigant is named on this page, and the reason is danger rather than doubt about whether it works. UNH Cooperative Extension states plainly that a gas cartridge must never be used near flammables or under a wooden structure — which is exactly where a reader with a groundhog under a deck or shed would want to use one. Penn State Extension states that the gases are toxic to other wildlife species, and that the other registered fumigant, aluminum phosphide, must be stored in a locked, ventilated room and applied only as the label directs. Both sources describe these as burrow treatments for open ground, not for under a building.',
  },
  {
    question: 'Where should the trap go?',
    answer:
      'At the burrow, on every source that says. UNH Cooperative Extension states that the most effective technique is to place the trap directly at the burrow entrance and use a barrier of boards or other material to direct the animal into the trap, and that no bait is needed in that situation because the animal simply walks out of its burrow and into the trap. Penn State states a live trap may be placed at the burrow entrance, in major travel lanes, or at the site of damage, and that guide logs on either side help funnel the animal in. Purdue describes setting the trap in the trail immediately in front of the main burrow entrance.',
  },
];

const sources: Source[] = [
  {
    label:
      'Woodchucks — the source of the Pennsylvania game-animal status, the Game Commission relocation prohibition, the 10 x 10 x 24 inch minimum live-trap size, the 10 to 12 inch burrow entrance diameter, the foundation and dike damage statement, the fence specification, the electric-wire addition, and the statements that no repellents and no toxicants are registered in Pennsylvania',
    publisher: 'Penn State Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.psu.edu/woodchucks',
  },
  {
    label:
      'Groundhog Control — the source of the Missouri Wildlife Code game-mammal classification, the cage-trap-as-hunting-method statement, the out-of-season damage provision and its 3 CSR 10-4.130 citation, the foundation and driveway undermining statement, and one of the two 15-inch 45-degree fence figures. This is a state wildlife agency rather than a university extension service',
    publisher: 'Missouri Department of Conservation',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://mdc.mo.gov/wildlife/nuisance-problem-species/groundhog-control',
  },
  {
    label:
      'Dealing with Woodchuck Damage — the source of the trap-at-the-burrow-entrance technique, the no-bait-needed statement, the prohibition on gas cartridges under a wooden structure, the body-grip trap non-target warning, and one fence specification',
    publisher: 'University of New Hampshire Cooperative Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.unh.edu/resource/dealing-woodchuck-damage-fact-sheet-0',
  },
  {
    label:
      'Woodchucks, ADM-16-W — the source of the Indiana relocation position, the named live-trap models, and the trap-placement instruction. Its relocation sentence is paraphrased rather than quoted, because the PDF wraps it mid-clause and quoting across that wrap would mean normalizing the source text',
    publisher: 'Purdue Extension (Judy Loven, USDA-APHIS-Wildlife Services)',
    date: 'No publication date carried in the document; fetched 3 September 2026',
    href: 'https://www.extension.entm.purdue.edu/publications/ADM-16.pdf',
  },
  {
    label:
      'Woodchuck Damage and Control — the source of the Connecticut relocation position, the Connecticut hunting position, and the 90-degree top-bend fence specification',
    publisher: 'University of Connecticut, Home & Garden Education Center',
    date: 'Carries a 2015 date against its hunting statement; fetched 3 September 2026',
    href: 'https://homegarden.cahnr.uconn.edu/factsheets/woodchuck-damage-and-control/',
  },
  {
    label:
      'Woodchuck Damage Prevention and Control Methods — the source of the larger 10 x 12 x 32 inch trap specification, the 18-inch skirt fence variant, the fox-urine repellent listing and the habitat-modification position. This is a wildlife damage management information center rather than a university extension service, and it is the only source on this page that is not a .edu or a state agency',
    publisher: 'Internet Center for Wildlife Damage Management (ICWDM)',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://icwdm.org/species/rodents/woodchucks/woodchuck-damage-prevention-and-control-methods/',
  },
];

const tocItems = [
  { id: 'scope', title: 'What This Page Carries' },
  { id: 'identification', title: 'Which Animal Is Digging' },
  { id: 'damage', title: 'The Burrow, and the Structural Damage' },
  { id: 'legal', title: 'The Legal Position: Three States' },
  { id: 'relocation', title: 'Relocation: The Sharpest Disagreement' },
  { id: 'fence', title: 'The Fence, and Four Specifications' },
  { id: 'trapping', title: 'Trapping' },
  { id: 'not-named', title: 'What Is Not Named Here, and Why' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function GroundhogsPage() {
  return (
    <UsPageLayout
      title="Groundhogs"
      subtitle="The woodchuck, Marmota monax. The burrow that undermines a foundation, the fence four sources cannot agree on, and the legal question that has a different answer in every state this page could read."
      lastUpdated="September 2026"
      readingTime="10 min read"
      homeHref={GROUNDHOG_HOME}
      clusterNav={GROUNDHOG_NAV}
      tocItems={tocItems}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the largest burrowing animal on this estate, and the one whose damage
        claim is structural rather than horticultural. Two sources say its burrowing reaches
        building foundations. Six publications were read for it, and on the two questions that
        decide what a reader may actually do &mdash; whether they may take the animal, and what
        they may do with it afterwards &mdash; the sources do not agree, because the law does not.
      </p>

      <h2 id="scope">What This Page Carries</h2>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>One product is named, and four classes are deliberately empty.</strong> The
          reasons are not the same reason, and the page says which is which rather than leaving a
          reader to assume the sources recommend nothing.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Repellents and toxicants:</strong> not named because Penn State Extension states
          none are registered &mdash; a registration fact, not a verdict on whether they work.{' '}
          <strong>Fumigants:</strong> not named because UNH states a gas cartridge must never be
          used under a wooden structure, which is where most readers have the problem.{' '}
          <strong>Body-grip traps:</strong> not named because of the non-target hazard UNH
          describes. <strong>Live traps:</strong> one named, because Penn State publishes a minimum
          size and one listing&rsquo;s own page could be read against it.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Seven further listings were attempted on 3 September 2026 and every one returned
          an anti-bot interstitial instead of a product page.</strong> No product is described here
          from a search result, so those seven are recorded and carried forward rather than guessed
          at.
        </p>
      </div>

      <h2 id="identification">Which Animal Is Digging</h2>
      <p>
        <strong>The hole is the fastest test, and it is a big one.</strong> Penn State Extension
        describes a mound of excavated earth at the main entrance, on which{' '}
        <em>&ldquo;the woodchuck frequently sits to look for danger&rdquo;</em>, and gives the
        entranceway as{' '}
        <em>&ldquo;which is 10 to 12 inches in diameter&rdquo;</em>. Nothing else in this estate&rsquo;s
        burrowing group digs an opening that wide.
      </p>
      <p>
        If the hole is smaller than that, the animal is a different one. Our{' '}
        <Link href="/us/moles-voles-gophers">mole, vole or gopher page</Link> separates the three
        smaller diggers by the sign each leaves, and our{' '}
        <Link href="/us/ground-squirrels">ground squirrels page</Link> covers the other large
        diurnal burrowing rodent. A groundhog is heavier than all of them together, and it is the
        only one any source here connects to a building foundation.
      </p>
      <p>
        Purdue Extension gives the species as{' '}
        <em>Marmota monax</em>, a member of the squirrel family.
      </p>

      <h2 id="damage">The Burrow, and the Structural Damage</h2>
      <p>
        <strong>Two sources make the foundation claim, independently.</strong> Penn State
        Extension:{' '}
        <em>&ldquo;On occasion, burrowing can weaken dikes and building foundations.&rdquo;</em>{' '}
        The Missouri Department of Conservation puts it more concretely:{' '}
        <em>
          &ldquo;burrows can undermine concrete building foundations, porches, and driveways&rdquo;
        </em>
        .
      </p>
      <p>
        Penn State also names the hazard the spoil itself creates:{' '}
        <em>
          &ldquo;Mounds of earth from the excavated burrow systems and holes formed at burrow
          entrances present a hazard to farm equipment, horses, and riders.&rdquo;
        </em>
      </p>
      <p>
        Both statements are hedged by their own sources &mdash; Penn State says{' '}
        <em>on occasion</em> &mdash; and neither is presented here as the usual outcome. What they
        establish is that the structural concern is real and published, not that every burrow
        threatens a building.
      </p>

      <h2 id="legal">The Legal Position: Three States</h2>
      <p>
        <strong>
          This is not legal advice, and yours will differ. Three sources describe three states, and
          none of them speaks for the other forty-seven.
        </strong>
      </p>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-left">State, and source</th>
              <th className="border border-gray-300 px-3 py-2 text-left">What the source states</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">
                Pennsylvania — Penn State Extension
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <em>
                  &ldquo;In Pennsylvania, woodchucks are classified as game animals. Game protection
                  is removed when woodchucks damage personal property.&rdquo;
                </em>{' '}
                Shooting is lawful at any time of year where they are damaging property, with no bag
                limit, but a valid Pennsylvania hunting license is required.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">
                Missouri — Department of Conservation
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <em>
                  &ldquo;The Wildlife Code of Missouri classifies the groundhog as a game mammal
                  that may be taken during the prescribed hunting season&rdquo;
                </em>
                .{' '}
                <em>&ldquo;Cage-type traps are allowed as a hunting method.&rdquo;</em> And out of
                season,{' '}
                <em>
                  &ldquo;you may shoot or trap damage-causing groundhogs out-of-season without a
                  permit&rdquo;
                </em>{' '}
                &mdash; the source refers the reader to 3 CSR 10-4.130 of the Code for details and
                restrictions.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">
                Connecticut — UConn Home &amp; Garden
              </td>
              <td className="border border-gray-300 px-3 py-2">
                States that woodchucks can be hunted most of the year with no daily or seasonal
                limits, on a statement its own text dates to 2015.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>What all three have in common is that the animal has a legal status at all.</strong>{' '}
        A groundhog is not vermin in any of these states; it is a game animal or game mammal whose
        protection is conditional. That is the opposite of the position most household insects
        occupy, and it is the reason this section sits above the trapping section rather than below
        it.
      </p>

      <h2 id="relocation">Relocation: The Sharpest Disagreement</h2>
      <div className="not-prose my-6 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          One of the three states this page reads PROHIBITS relocating a trapped groundhog. Another
          recommends it. Do not carry a trapped animal anywhere before checking your own state.
        </p>
        <p className="mt-3 mb-0 text-base text-red-900">
          <strong>Pennsylvania &mdash; prohibited.</strong> Penn State Extension:{' '}
          <em>
            &ldquo;Since woodchucks are considered a potential rabies vector, the Game Commission
            does not allow them to be relocated to other properties.&rdquo;
          </em>{' '}
          The same source states that a trapped animal should instead be humanely euthanized or
          released elsewhere on the landowner&rsquo;s own property.
        </p>
        <p className="mt-3 mb-0 text-base text-red-900">
          <strong>Indiana &mdash; recommended.</strong> Purdue Extension states that captured
          woodchucks should be relocated at least five miles from the trap site and released
          somewhere they will not become someone else&rsquo;s problem.{' '}
          <em>
            (Paraphrased rather than quoted &mdash; that sentence wraps mid-clause in the source
            PDF.)
          </em>
        </p>
        <p className="mt-3 mb-0 text-base text-red-900">
          <strong>Connecticut &mdash; permitted, conditionally.</strong> UConn:{' '}
          <em>
            &ldquo;Live trapping and relocating is legal in the state of Connecticut for species
            that do not carry rabies.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base text-red-900">
          <strong>And wherever it is permitted, the destination is not yours to choose.</strong> UNH
          Cooperative Extension states that{' '}
          <em>
            &ldquo;you must acquire written permission from the landowner to relocate trapped
            animals&rdquo;
          </em>
          .
        </p>
      </div>
      <p>
        <strong>These positions are not reconciled here, and they cannot be.</strong> They are three
        states&rsquo; law, not three opinions about one fact. Pennsylvania&rsquo;s prohibition rests
        on the animal being treated as a potential rabies vector; that is the whole of what this
        page says on the health question, and anything further belongs to a state wildlife agency or
        a veterinarian rather than to this page.
      </p>

      <h2 id="fence">The Fence, and Four Specifications</h2>
      <p>
        <strong>Every source calls fencing the most durable answer, and then gives a different
        fence.</strong> Penn State:{' '}
        <em>
          &ldquo;Fences should be at least 3 feet high and made of heavy poultry wire or 2-inch
          woven mesh wire.&rdquo;
        </em>{' '}
        That much is common ground. Below it is not.
      </p>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-left">Source</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Below ground</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Top of the fence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">Penn State</td>
              <td className="border border-gray-300 px-3 py-2">
                <em>
                  &ldquo;bury the lower edge 12 inches in the ground with the lower 6 inches bent at
                  an L-shaped angle leading outward&rdquo;
                </em>
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <em>
                  &ldquo;Bending the top 15 inches of wire fence outward at a 45-degree angle will
                  also prevent woodchucks from climbing over the fence&rdquo;
                </em>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">Missouri DoC</td>
              <td className="border border-gray-300 px-3 py-2">Not specified in the passage read</td>
              <td className="border border-gray-300 px-3 py-2">
                <em>
                  &ldquo;Bending the top 15 inches of the wire fence outward at a 45-degree angle
                  will prevent groundhogs from climbing over the fence&rdquo;
                </em>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">UNH</td>
              <td className="border border-gray-300 px-3 py-2">
                An 18-inch strip laid flat on the ground below the fence, as an alternative to
                burial
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <em>
                  &ldquo;Bending the top 12 to 15 inches outward at about a 45 degree angle will
                  help deter them from climbing a non-electrified fence.&rdquo;
                </em>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">UConn</td>
              <td className="border border-gray-300 px-3 py-2">
                <em>
                  &ldquo;Bury the lower edge 10 to 12 inches deep in the soil to prevent burrowing
                  under the fence.&rdquo;
                </em>
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <em>
                  &ldquo;the fence should be three to four feet high with the top 12&rdquo; left
                  loose and bent outward at a 90&deg; angle&rdquo;
                </em>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">ICWDM</td>
              <td className="border border-gray-300 px-3 py-2">
                An 18-inch skirt buried at least 2 inches
              </td>
              <td className="border border-gray-300 px-3 py-2">A 9 to 12 inch overhang</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>The burial depth runs from 2 inches to 12, and the top bend from 9 inches to 15,
        at either 45 degrees or 90.</strong> None of these is averaged here and none is presented
        as the specification. A reader building one fence has to pick a source and follow it whole,
        and the deepest and tallest of them is Penn State&rsquo;s.
      </p>
      <p>
        <strong>One addition all of them treat as optional and two describe in detail.</strong> Penn
        State:{' '}
        <em>
          &ldquo;place an electric wire 4 to 5 inches off the ground and the same distance outside
          the fence&rdquo;
        </em>
        . UNH goes further and calls electric fencing probably the most effective material, giving
        one wire 4 inches off the ground and a second at 8 or 9 inches.
      </p>

      <h2 id="trapping">Trapping</h2>
      <p>
        <strong>Placement matters more than bait, on the sources that address it.</strong> UNH:{' '}
        <em>
          &ldquo;The most effective technique is to place the trap directly at the burrow entrance,
          and use a barrier of boards or other material to direct the animal into the trap.&rdquo;
        </em>{' '}
        UNH adds that no bait is needed in that situation, because the animal walks out of its
        burrow into the trap. Penn State states that{' '}
        <em>
          &ldquo;A live trap may be placed either at the burrow entrance, in major travel lanes, or
          at the site of damage.&rdquo;
        </em>{' '}
        Purdue describes setting the trap{' '}
        <em>&ldquo;Set the live trap in the trail immediately in&rdquo;</em>{' '}
        <em>&ldquo;front of the main burrow entrance&rdquo;</em> &mdash; its own sentence, broken
        where the source PDF breaks it.
      </p>
      <div className="not-prose my-6 rounded-lg border border-blue-300 bg-blue-50 p-5">
        <p className="m-0 text-base text-blue-900">
          <strong>The size criterion, and the two figures that state it.</strong> Penn State:{' '}
          <em>&ldquo;Live traps should be at least 10 x 10 x 24 inches in size.&rdquo;</em> ICWDM
          gives a larger cage or box trap at{' '}
          <em>&ldquo;10 x 12 x 32-inch, single-door&rdquo;</em> and{' '}
          <em>&ldquo;9 x 9 x 32-inch, 2-door&rdquo;</em>. The card below is measured against Penn
          State&rsquo;s minimum, which is the lower of the two, and it also exceeds ICWDM&rsquo;s.
        </p>
      </div>
      <p>
        Purdue names specific models rather than dimensions, listing{' '}
        <em>&ldquo;Tomahawk No. 108, 108.5, 608, 608.5, or the Havahart Nos.&rdquo;</em> 3, 3A or
        1079. None of those was among the listings this page could read.
      </p>

      <UsToolCard
        name="HomGarden Live Animal Cage Trap 32'' Steel Humane Release Rodent Cage for Rabbits, Stray Cat, Squirrel, Raccoon, Mole, Gopher, Chicken, Opossum, Skunk, Chipmunks, Groundhog Squire"
        whatItDoes={[
          'Its own product detail block gives the dimensions as 32 inches long by 12 inches wide by 12.5 inches high, which exceeds Penn State Extension’s 10 x 10 x 24 inch minimum and also exceeds ICWDM’s larger 10 x 12 x 32 inch figure',
          'Its own feature text names groundhogs among the animals it is intended for, so the claim rests on the listing’s text and not only on its title',
          'Its own text describes a spring-loaded door, a trigger rod sited outside the cage, and solid doors with handle guards',
          '⚠ Its own feature text describes the trap as being for relocating wild animals. In at least one state on this page that is prohibited — read the relocation section above before using it that way. No source consulted endorses relocation as a general practice',
          'Availability was not established. Its title and dimensions were read from its own page on 3 September 2026; no claim about stock, price or delivery is made anywhere on this page',
        ]}
        asin="B07KWYM922"
      />

      <h2 id="not-named">What Is Not Named Here, and Why</h2>
      <p>
        <strong>Repellents and toxicants: a registration statement, not a verdict.</strong> Penn
        State:{' '}
        <em>&ldquo;No repellents are registered for use against woodchucks in Pennsylvania.&rdquo;</em>{' '}
        And:{' '}
        <em>&ldquo;No toxicants are registered for woodchuck control in Pennsylvania.&rdquo;</em>{' '}
        ICWDM lists fox urine under repellents with no specification of any kind. A listing with no
        specification gives nothing to measure a product against, so none is named.
      </p>
      <p>
        <strong>Fumigants: a danger exclusion, and it lands exactly where readers have the
        problem.</strong> UNH:{' '}
        <em>&ldquo;Never use a gas cartridge near flammables or under a wooden structure.&rdquo;</em>{' '}
        A groundhog under a deck, a shed or a porch is the commonest version of this problem and it
        is the one case the source rules out by name. Penn State adds that{' '}
        <em>&ldquo;These gases are toxic to other wildlife species.&rdquo;</em>
      </p>
      <p>
        <strong>Body-grip traps: a non-target hazard.</strong> UNH describes them as killing almost
        instantly and warns that a pet or other non-target animal that walks through one gets no
        second chance. That is the same ground on which our{' '}
        <Link href="/us/snakes">snakes page</Link> declines to name glue boards: a material danger
        to animals the reader did not intend to catch, rather than a judgment about whether the tool
        works.
      </p>
      <p>
        <strong>Habitat modification: one source rules it out directly.</strong> ICWDM:{' '}
        <em>&ldquo;Habitat modification is not recommended for the control of woodchucks.&rdquo;</em>{' '}
        That is unusual among the classes on this page, and it is recorded rather than worked
        around.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Six publications, fetched and read on 3 September 2026: four university extension services,
        one state wildlife agency, and one wildlife damage management information center which is
        identified as such below. Where sources disagree &mdash; on relocation, on the fence, on
        the trap size &mdash; every position is given with the source that holds it, and none is
        averaged into one answer. Framing, ordering and emphasis are our own judgment and are not a
        finding of any source.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
