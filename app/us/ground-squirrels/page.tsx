import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { GS_NAV, GS_HOME } from '../components/groundSquirrelNav';

const URL = 'https://pestproindex.com/us/ground-squirrels';
const TITLE = 'Ground Squirrels: Why No Product Is Named Here';
const DESCRIPTION =
  'Extension sources name a trap spec and a fumigant homeowners can buy — but the Amazon listings checked don\'t evidence either. The methods, and why nothing is carded.';

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
  datePublished: '2026-08-26',
  dateModified: '2026-08-26',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Ground Squirrels', item: URL }],
};

// ---------------------------------------------------------------------------
// THIS PAGE CARDS NOTHING, AND THAT IS THE FINDING RATHER THAN AN OMISSION.
//
// There is no product record array here and no UsToolCard import, because there
// is nothing to render. Three classes were proposed from the sources and all
// three were checked against retail listings on 2026-08-26; none produced a
// listing whose own text evidences the criterion the sources publish. The page
// sets out each class, its criterion, and what the listing check found.
//
// If a later round finds a listing that evidences one of these criteria, the
// class is already written and only the card is missing.
// ---------------------------------------------------------------------------

const faqs: Faq[] = [
  {
    question: 'Is it a ground squirrel or a tree squirrel?',
    answer:
      'The test every source uses is behavioral rather than anatomical. UC IPM states that ground squirrels will always retreat to a burrow when frightened, while tree squirrels will climb a tree or other tall structure and never use a burrow. The California Department of Food and Agriculture states the same test in almost the same words. This matters legally as well as practically: UC IPM states that some species of tree squirrels are classified as game animals with a hunting season, that cannot be taken without a permit, while ground squirrels are nongame mammals.',
  },
  {
    question: 'Is it a ground squirrel or a chipmunk?',
    answer:
      'Size, and the burrow opening. CDFA states that a chipmunk is about 8 inches long and weighs around 2 ounces, while a golden-mantled ground squirrel is 9 to 12 inches long and weighs between 4 and 14 ounces, and that the golden-mantled ground squirrel lacks the chipmunk\'s facial stripes. On burrows, Utah State University Extension gives ground squirrel burrow openings as about 4 inches in diameter, while Penn State Extension, quoted on our chipmunk page, gives a chipmunk burrow entrance as usually about 2 inches. Two sources, two species, one measurable difference.',
  },
  {
    question: 'What is the legal status of a ground squirrel in California?',
    answer:
      'Both sources this page uses say the same thing. UC IPM states that the California Fish and Game Code classifies ground squirrels as nongame mammals, and that an owner or tenant can control, in the Code\'s word take, in any legal manner, nongame mammals that are injuring growing crops or other property. The California Department of Food and Agriculture states independently that ground squirrels are classified as nongame mammals by the California Fish and Game Code. The statute those statements rest on is Fish and Game Code section 4152(a), and it carries a qualifying clause that belongs in the same sentence as the permission: mammals found to be injuring growing crops or other property may be taken at any time or in any manner in accordance with this code and regulations adopted pursuant to this code. Our California trapping rules page quotes that section and four others directly from the primary text.',
  },
  {
    question: 'Do I need a trapping license?',
    answer:
      'The two sources disagree and this page does not pick between them. UC IPM, updated June 2025, states that no license is required for the management of California ground squirrels if it is the owner or tenant who is taking damaging ground squirrels, and that a trapping license from the California Department of Fish and Wildlife is required for those who are trapping squirrels for hire or profit. The California Department of Food and Agriculture handbook states flatly that trapping ground squirrels requires a trapping license issued by the Department of Fish and Game. Those cannot both be operative as written. One piece of dating evidence is worth having: the CDFA document refers to the Department of Fish and Game six times and to the Department of Fish and Wildlife not at all, and the agency was renamed in 2013. That dates the text; it does not settle the question, and settling it would mean reading a licensing statute this page has not read. Check the current position with the Department directly.',
  },
  {
    question: 'Can I trap one and release it somewhere else?',
    answer:
      'Both sources say no, not without a permit. UC IPM states that it is illegal to relocate wildlife in the State of California without a permit, and that live-captured ground squirrels must be released immediately on the property where they were caught, or must be euthanized by legal and humane measures. CDFA states that the California Fish and Game Code prohibits transporting and releasing squirrels without a permit. Our California trapping rules page records that Title 14 section 465.5 itself contains no provision on relocation or transport, and warns in its own words that this is not a statement that moving an animal is lawful. These two sources supply what that page said its silence could not: a different provision governs, and both describe it as a prohibition.',
  },
  {
    question: 'What traps do the sources recommend?',
    answer:
      'Kill traps rather than live-catch. UC IPM states that live-catch traps are not often recommended because they present the problem of animal disposal, and CDFA states that live trapping is not recommended because of the pest status of ground squirrels. For kill traps, UC IPM names box traps, tunnel traps and Conibear traps, and gives one countable specification: the Conibear trap No. 110 with a 4 1/2 by 4 1/2 inch jaw spread. CDFA corroborates the model, describing a body gripping trap commonly referred to as the Conibear 110 as effective. Utah State Extension names the same three types. UC IPM also says to inspect traps at least once a day and remove dead squirrels.',
  },
  {
    question: 'Why is no trap named on this page?',
    answer:
      'Because a product search did not surface a purchasable listing for the trap the sources specify. Three separate searches were run for a 110-size body-grip trap. Between them they returned one product page, and that page no longer resolves. Everything else returned was an accessory rather than a trap: setting tools, trap stabilizers, a safety tool, a wire kit. That is a statement about what a search surfaced, and it is not a statement that no such trap is sold. Trap covers made specifically for 110 and 120 sized body-grip traps are on sale, which is good evidence that the traps themselves exist somewhere.',
  },
  {
    question: 'What does California law require of a trap once you set one?',
    answer:
      'Our California trapping rules page quotes Title 14 section 465.5 subsection by subsection, and three of those quotations attach duties to traps used for property protection. Subsection (g) states that, except for common rat and mouse traps, all traps used pursuant to that subsection must be numbered, and subsection (f)(1) requires a trap number issued by and registered with the department. Subsection (g)(2) states that all traps shall be visited at least once daily by the owner of the traps or a designee. Subsection (g)(3) states that traps may not be set within 150 yards of any structure used as a permanent or temporary residence unless such traps are set by a person controlling such property. Subsection (c) lists cage and box traps, nets, suitcase-type live beaver traps, and common rat and mouse traps as things that shall not be considered body-gripping traps, and names conibear traps among the body-gripping ones. None of the pest-management sources on this page mentions the numbering requirement.',
  },
  {
    question: 'Can I use a gas cartridge in a burrow?',
    answer:
      'UC IPM states that the most readily available fumigant for most residential users is the gas cartridge, and that some county agricultural commissioners\' offices sell United States Department of Agriculture gas cartridges designed for fumigating burrowing rodents. It attaches conditions: fumigation is most effective in spring or when soil moisture is high, and UC IPM says not to fumigate in summer or when the soil is dry, and not to fumigate during hibernation because the squirrel plugs its burrow with soil and the plug cannot be seen from the entrance. It also says not to treat a burrow if you suspect a non-target animal is present, naming the kit fox and the burrowing owl as occupants of old ground squirrel burrows. This page names no gas cartridge product, and the reason is about product listings rather than about the method. It is set out in the fumigation section.',
  },
  {
    question: 'Is there a toxic bait a California resident can use?',
    answer:
      'Not for this animal, on the sources this page uses, and it takes three statements to get there. UC IPM states that anticoagulant rodenticide options for residential use are no longer available. It states that toxic grain baits containing zinc phosphide can only be applied by licensed pest management professionals and are not available for use by residential users for ground squirrel management. And it states that rodenticide products labeled for use against rats and house mice should never be used for the management of ground squirrels unless ground squirrels are specifically listed on the label as a target species. UC ANR, writing in July 2025, names the three actives now available to residents as bromethalin, cholecalciferol and zinc phosphide, and says in the same passage that products containing bromethalin and cholecalciferol can only be used to control rats and mice. Two of the three are labeled for other animals and the third is professional-only for this one.',
  },
  {
    question: 'Utah State Extension says to bait with anticoagulants. Which is right?',
    answer:
      'Both, for their own states. Utah State Extension states, for the ground squirrels of its region, bait with anticoagulants or zinc phosphide. UC IPM states that anticoagulant options for residential use in California are no longer available. Neither source is mistaken: they describe different states with different rules, and this page keeps them apart rather than averaging them. A recommendation written for one state is not advice for another, and that is true in both directions.',
  },
  {
    question: 'Do repellents or scaring devices work?',
    answer:
      'Two sources say no, one a university extension program and one a state agency. UC IPM states that there are no effective squirrel-frightening devices or repellents that will cause ground squirrels to leave their burrows or avoid an area or crop. CDFA states of repellents: none registered and not recommended as an effective method of control. UC IPM also states that burrow exploders, devices that inject ignitable gasses into burrow systems, are not generally recommended for urban use and have not proven to be effective.',
  },
  {
    question: 'Is there a disease risk?',
    answer:
      'UC IPM addresses one directly and this page reports what it says without adding to it. It states that ground squirrels can harbor diseases harmful to humans, particularly when squirrel populations are high, and that a major concern is bubonic plague, caused by the bacterium Yersinia pestis and transmitted to humans, pets and other animals by fleas associated with the squirrels. It states that ground squirrels are susceptible to plague, which has wiped out entire colonies, and gives an instruction: if you find unusual numbers of squirrels or other rodents dead for no apparent reason, notify public health officials, and do not handle dead squirrels under these circumstances. UC IPM separately says not to handle carcasses without protective gear when removing them from traps. That is the whole of what this page carries on the subject. No medical or clinical guidance is offered here, and none of these sources provides any.',
  },
];

const sources: Source[] = [
  {
    label:
      'Pest Notes: Ground Squirrel — the source of the legal status, the license position, the relocation prohibition, the Conibear specification, the fumigation and bait positions, the seasonal table and the plague material',
    publisher: 'UC Statewide IPM Program',
    date: 'Published 25 January 2022, updated June 2025; accessed 26 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/ground-squirrel/',
  },
  {
    label:
      'Vertebrate Pest Control Handbook — Mammals, California ground squirrel chapter — the source of the corroborating legal status, the contrary trapping-license statement, the relocation prohibition and the repellent position',
    publisher: 'California Department of Food and Agriculture, Integrated Pest Control Branch',
    date:
      'Document stamped 2009; refers throughout to the Department of Fish and Game, which was renamed in 2013; accessed 26 August 2026',
    href: 'https://www.cdfa.ca.gov/plant/IPC/vertebrates/docs/vpcrac/handbook/MammalPestspart2gmgrdsqhousemice2009peter.pdf',
  },
  {
    label:
      'Rodenticides: Further Restrictions in 2025 — the source of the three residentially available actives and of the statement that two of them are labeled for rats and mice only',
    publisher: 'UC Agriculture and Natural Resources, Pests in the Urban Landscape (Karey Windbiel-Rojas)',
    date: '14 July 2025; accessed 26 August 2026',
    href: 'https://ucanr.edu/blog/pests-urban-landscape/article/rodenticides-further-restrictions-2025',
  },
  {
    label:
      'Ground Squirrels (Urban Pest Guide) — the source of the burrow-opening diameter, the per-acre population range and the Utah baiting position',
    publisher: 'Utah State University Extension',
    date: 'No publication date carried in the page; accessed 26 August 2026',
    href: 'https://extension.usu.edu/pests/ipm/notes_nuisance/ground-squirrels.php',
  },
];

const tocItems = [
  { id: 'no-products', title: 'Why This Page Names No Product' },
  { id: 'which-animal', title: 'Which Animal, and Which Species' },
  { id: 'health', title: 'A Public Health Instruction' },
  { id: 'legal', title: 'The Legal Frame in California' },
  { id: 'trapping', title: 'Trapping: the Specification and the Duties' },
  { id: 'fumigation', title: 'Burrow Fumigation' },
  { id: 'baits', title: 'Toxic Baits: Closed for California Residents' },
  { id: 'elsewhere', title: 'Outside California' },
  { id: 'not-work', title: 'What the Sources Say Does Not Work' },
  { id: 'timing', title: 'When Each Method Works' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  {
    title: 'Squirrels in the Attic: Signs, Exclusion and Repair',
    href: '/us/squirrels-in-attic',
  },
];

export default function GroundSquirrelsPage() {
  return (
    <UsPageLayout
      title="Ground Squirrels"
      subtitle="The extension sources name a trap with a measurable specification and a fumigant they say is the one most readily available to householders. When we went looking for either as a product, the listings did not evidence what the sources ask for. So this page carries the methods, the law and the disagreements, and it names nothing you can buy."
      lastUpdated="August 2026"
      readingTime="16 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={GS_HOME}
      clusterNav={GS_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the California ground squirrel and its relatives &mdash; the animal that
        digs under a patio, strips a vegetable bed and vanishes into a burrow rather than up a tree.
        Most of what follows is what university extension services and one state agency publish
        about managing it, and a fair amount of it is about the law.
      </p>

      <h2 id="no-products">Why This Page Names No Product</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          Nothing on this page is for sale, and that is a finding rather than an omission
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          <strong>
            The sources support classes of product that retail listings do not evidence.
          </strong>{' '}
          Three classes were taken from the sources &mdash; a body-grip trap at a stated jaw spread,
          a gas cartridge burrow fumigant, and a covered box with a stated entrance size &mdash; and
          each was checked against product listings on 26 August 2026.{' '}
          <strong>
            Not one produced a listing whose own description evidences what the source asks for.
          </strong>{' '}
          Each class is set out below with its criterion and with what the check found, so that a
          reader can apply the criterion themselves.
        </p>
      </div>

      <h2 id="which-animal">Which Animal, and Which Species</h2>
      <p>
        <strong>The identifying test is behavioral.</strong> UC IPM states that ground squirrels
        will always retreat to a burrow when frightened, while tree squirrels will climb a tree or
        other tall structure and never use a burrow. CDFA gives the same test.
      </p>
      <p>
        <strong>Size, from two sources.</strong> CDFA:{' '}
        <em>
          &ldquo;The ground squirrel&rsquo;s body measures 9 to 11 inches. Its semi-bushy tail adds
          another 5 to 9 inches.&rdquo;
        </em>{' '}
        Utah State gives bodies up to 11 inches and tails 2 to 9 inches, and adds the figure that
        settles the commonest confusion: <em>&ldquo;burrow openings about 4 inches in diameter&rdquo;</em>.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          The clean line between this animal and the one on our chipmunk page
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          Utah State gives a ground squirrel burrow opening at <strong>about 4 inches</strong>. Penn
          State Extension, quoted on our{' '}
          <a href="https://pestproindex.com/us/chipmunks">chipmunk page</a>, gives a chipmunk burrow
          entrance as <strong>usually about 2 inches</strong>.{' '}
          <strong>Two sources, two species, one measurable difference</strong> &mdash; and neither
          page has to correct the other. CDFA sharpens it further for one species: a chipmunk is
          about 8 inches long and weighs around 2 ounces, while a golden-mantled ground squirrel is
          9 to 12 inches and 4 to 14 ounces, and unlike the chipmunk it{' '}
          <em>&ldquo;lacks stripes on its face&rdquo;</em>.
        </p>
      </div>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Two ground squirrel species are federally protected, and their ranges can overlap
        </p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          <strong>UC IPM:</strong>{' '}
          <em>
            &ldquo;The U. S. Fish and Wildlife Service classifies the Mohave ground squirrel, S.
            mohavensis , and the San Joaquin antelope squirrel, Ammospermophilus nelsoni , as
            threatened species.&rdquo;
          </em>{' '}
          It adds that although you are unlikely to mistake either for the much larger California
          ground squirrel, <strong>their ranges could overlap in some areas</strong>, so
          identification should be settled before any control is attempted. It names further
          protected animals within the same range &mdash; the endangered San Joaquin kit fox, several
          endangered kangaroo rats, the riparian brush rabbit and the riparian wood rat &mdash; and
          says that some squirrel management techniques could affect them too.
        </p>
      </div>

      <h2 id="health">A Public Health Instruction</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          UC IPM gives an instruction about dead squirrels, and it is reported here in its own words
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          <em>
            &ldquo;Ground squirrels can harbor diseases harmful to humans, particularly when squirrel
            populations are high. A major concern is bubonic plague, caused by the bacterium Yersinia
            pestis and transmitted to humans, pets, and other animals by fleas associated with the
            squirrels.&rdquo;
          </em>
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          <em>
            &ldquo;Ground squirrels are susceptible to plague, which has wiped out entire colonies.
            If you find unusual numbers of squirrels or other rodents dead for no apparent reason,
            notify public health officials. Do not handle dead squirrels under these
            circumstances.&rdquo;
          </em>
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          Separately, on removing a trapped animal, UC IPM says{' '}
          <em>&ldquo;Don&rsquo;t handle the carcasses without protective gear&rdquo;</em> and
          describes using a plastic bag inverted over the hand.{' '}
          <strong>
            That is the whole of what this page carries on the subject. It offers no medical or
            clinical guidance of any kind, and none of the sources used here provides any.
          </strong>{' '}
          Utah State says only that ground squirrels <em>&ldquo;carry a wide range of diseases&rdquo;</em>{' '}
          without naming one.
        </p>
      </div>

      <h2 id="legal">The Legal Frame in California</h2>
      <p>
        <strong>Yours may differ and this is not legal advice.</strong> The sources below are a
        university extension program and a state agency describing California law; where the
        underlying statute is quoted, it is quoted as our own record of the primary text quotes it.
      </p>

      <h3>Status: a nongame mammal</h3>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;The California Fish and Game Code classifies ground squirrels as nongame mammals.
          An owner or tenant can control (&ldquo;take&rdquo;), in any legal manner, nongame mammals
          that are injuring growing crops or other property.&rdquo;
        </em>{' '}
        <strong>CDFA states it independently:</strong>{' '}
        <em>
          &ldquo;Ground squirrels are classified as nongame mammals by the … California Fish and
          Game Code.&rdquo;
        </em>
      </p>
      <p>
        <strong>The statute behind those statements carries a qualifying clause, and it belongs in
        the same sentence as the permission.</strong> Our{' '}
        <a href="https://pestproindex.com/us/california-trapping-rules">
          California trapping rules page
        </a>{' '}
        quotes Fish and Game Code &sect; 4152(a) from the primary text: mammals{' '}
        <em>
          &ldquo;found to be injuring growing crops or other property may be taken at any time or in
          any manner in accordance with this code and regulations adopted pursuant to this
          code&rdquo;
        </em>{' '}
        &mdash; by <em>&ldquo;the owner or tenant of the premises&rdquo;</em>, or by{' '}
        <em>
          &ldquo;employees and agents in immediate possession of written permission from the owner
          or tenant&rdquo;
        </em>
        . <strong>The words about accordance with the code and its regulations are part of the
        permission, not a footnote to it</strong>, and the next section of this page is one place
        where they do work.
      </p>

      <h3>⚠ Whether a license is needed: two sources, two answers, unresolved</h3>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-left">Source</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Date</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2">UC IPM</td>
              <td className="border border-gray-300 px-3 py-2">updated June 2025</td>
              <td className="border border-gray-300 px-3 py-2">
                &ldquo;No license is required for the management of California ground squirrels if
                it is the owner or tenant who is taking damaging ground squirrels.&rdquo; A license
                is required for those trapping for hire or profit
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">CDFA handbook</td>
              <td className="border border-gray-300 px-3 py-2">document stamped 2009</td>
              <td className="border border-gray-300 px-3 py-2">
                &ldquo;Trapping ground squirrels requires a trapping license issued by the
                Department of Fish and Game.&rdquo;
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>These cannot both be operative as written, and this page does not choose.</strong>{' '}
        One piece of dating evidence is worth having and is offered as evidence rather than as an
        answer: <strong>the CDFA document refers to the Department of Fish and Game six times and
        to the Department of Fish and Wildlife not at all</strong>, and the agency was renamed in
        2013. That dates the text.{' '}
        <strong>
          It does not settle which position is current, and settling that would mean reading a
          licensing statute this page has not read.
        </strong>{' '}
        The current position is a matter for the Department.
      </p>

      <h3>Relocation: both sources describe a prohibition</h3>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;It is illegal to relocate wildlife in the State of California without a permit.
          Live-captured ground squirrels must be released immediately on the property where they
          were caught, or they must be euthanized by legal and humane measures.&rdquo;
        </em>{' '}
        <strong>CDFA:</strong>{' '}
        <em>
          &ldquo;California Fish and Game Code prohibits transporting and releasing squirrels
          without a permit.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          This completes something our trapping rules page deliberately left open
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          That page records that Title 14 &sect; 465.5{' '}
          <em>&ldquo;contains no provision on relocation or transport&rdquo;</em>, and it warns in
          its own words that this{' '}
          <em>&ldquo;is not a statement that moving an animal is lawful.&rdquo;</em>{' '}
          <strong>It was right to stop there, and these two sources supply what it could not.</strong>{' '}
          A different provision governs, and both describe it as a prohibition without a permit.{' '}
          <strong>
            Note what kind of statement that is: UC IPM and CDFA describing California law, not text
            read from a statute by us.
          </strong>{' '}
          The quotation record is on our{' '}
          <a href="https://pestproindex.com/us/california-trapping-rules">
            California trapping rules page
          </a>
          .
        </p>
      </div>
      <p>
        On method, UC IPM states that{' '}
        <em>&ldquo;Drowning is not an approved method of euthanasia and is illegal in California&rdquo;</em>{' '}
        and names gassing with carbon dioxide and shooting as methods the American Veterinary
        Medical Association considers humane.
      </p>

      <h2 id="trapping">Trapping: the Specification and the Duties</h2>
      <p>
        <strong>The sources prefer kill traps.</strong> UC IPM:{' '}
        <em>
          &ldquo;Live-catch traps are not often recommended, because they present the problem of
          animal disposal.&rdquo;
        </em>{' '}
        CDFA: <em>&ldquo;Live trapping is not recommended because of the pest status of ground
        squirrels.&rdquo;</em> UC IPM adds that{' '}
        <em>&ldquo;Traps are practical for management when squirrel numbers are low to moderate.&rdquo;</em>
      </p>
      <p>
        <strong>UC IPM gives one measurable specification:</strong>{' '}
        <em>
          &ldquo;The Conibear trap No. 110 with a 4 1/2-by 4 1/2-inch jaw spread also is an effective
          kill trap.&rdquo;
        </em>{' '}
        CDFA corroborates the model:{' '}
        <em>
          &ldquo;A body gripping trap commonly referred to as the Conibear&reg; 110 is effective in
          controlling ground squirrels.&rdquo;
        </em>{' '}
        Utah State names the same family of options:{' '}
        <em>
          &ldquo;If populations are small, use box traps, tunnel traps or Conibear traps when
          squirrels are active (February - October).&rdquo;
        </em>
      </p>
      <p>
        UC IPM sets the trap directly in the burrow opening so the squirrel must pass through it,
        says to attach it to a stake so a scavenger cannot carry it off, and says to{' '}
        <em>&ldquo;Inspect traps at least once a day and remove dead squirrels.&rdquo;</em> For
        box-type traps it gives a second figure:{' '}
        <em>
          &ldquo;place box-type traps inside a covered box with a 3-inch-diameter entrance&rdquo;
        </em>
        , to reduce hazards to children, pets, poultry and non-target wildlife.
      </p>

      <h3>What the product check found</h3>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          No 110-size trap is named here, and the reason is about what a search surfaced
        </p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          <strong>Three separate product searches were run for a 110-size body-grip trap.</strong>{' '}
          Between them they returned <strong>one</strong> product page, and that page no longer
          resolves. Everything else returned was an accessory rather than a trap &mdash; setting
          tools, trap stabilizers, a safety tool, a wire kit &mdash; and an accessory is not a trap,
          so none was pursued.
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          <strong>
            That is a statement about what a product search surfaced. It is not a statement about
            what is sold.
          </strong>{' '}
          Trap covers manufactured specifically{' '}
          <em>&ldquo;For 110 and 120 Sized Body Grip Traps&rdquo;</em> are readily on sale, which is
          good evidence that the traps themselves exist. If you find one,{' '}
          <strong>
            the specification to check it against is UC IPM&rsquo;s: a jaw spread of about 4½ by 4½
            inches.
          </strong>
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          <strong>The covered box is a separate gap.</strong> UC IPM asks for a 3-inch-diameter
          entrance. The trap-cover listings checked publish{' '}
          <strong>overall dimensions rather than entrance apertures</strong>, and the smallest
          sections they state are considerably larger than three inches.{' '}
          <strong>No listing evidencing the criterion was identified</strong> &mdash; the same shape
          as the cage-trap gap recorded on our chipmunk page.
        </p>
      </div>

      <h3>⚠ And in California, duties attach to the trap the sources recommend</h3>
      <p>
        <strong>None of the pest-management sources on this page mentions any of this.</strong> Our{' '}
        <a href="https://pestproindex.com/us/california-trapping-rules">
          California trapping rules page
        </a>{' '}
        quotes Title 14 &sect; 465.5 subsection by subsection, and three of those quotations bear
        directly on a body-grip trap set to protect property:
      </p>
      <ul>
        <li>
          <strong>A body-grip trap is not a common rat or mouse trap.</strong> Subsection (c) lists{' '}
          <em>
            &ldquo;Cage and box traps, nets, suitcase-type live beaver traps, and common rat and
            mouse traps&rdquo;
          </em>{' '}
          as things that <em>&ldquo;shall not be considered body-gripping traps&rdquo;</em>, and
          names conibear traps among the body-gripping ones.
        </li>
        <li>
          <strong>Registration.</strong> Subsection (g):{' '}
          <em>
            &ldquo;Except for common rat and mouse traps, all traps used pursuant to this subsection
            must be numbered&rdquo;
          </em>
          , and subsection (f)(1) requires a trap number{' '}
          <em>&ldquo;issued by and registered with the department&rdquo;</em>.
        </li>
        <li>
          <strong>Daily visitation.</strong> Subsection (g)(2):{' '}
          <em>
            &ldquo;All traps shall be visited at least once daily by the owner of the traps or
            his/her designee.&rdquo;
          </em>
        </li>
        <li>
          <strong>Placement.</strong> Subsection (g)(3):{' '}
          <em>
            &ldquo;Traps may not be set within 150 yards of any structure used as a permanent or
            temporary residence&rdquo;
          </em>{' '}
          <em>&ldquo;unless such traps are set by a person controlling such property&rdquo;</em>.
        </li>
      </ul>
      <p>
        <strong>
          The gap between what the pest-management sources recommend and what the regulation
          requires is real, and this page does not close it.
        </strong>{' '}
        The quotations above are recorded on that page from the primary text; what they mean for any
        particular trap is a question for the reader and the department.
      </p>

      <h2 id="fumigation">Burrow Fumigation</h2>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;The most readily available fumigant for most residential users is the gas
          cartridge.&rdquo;
        </em>{' '}
        It adds that some county agricultural commissioners&rsquo; offices sell United States
        Department of Agriculture gas cartridges designed for fumigating burrowing rodents, and that
        other cartridges are available at retail outlets.
      </p>
      <p>
        <strong>Timing is a condition rather than a preference.</strong>{' '}
        <em>
          &ldquo;Burrow fumigation is most effective in spring, when moist soil helps seal gases in
          the burrow system.&rdquo;
        </em>{' '}
        UC IPM says not to fumigate in summer or when soil is dry, because the gas diffuses into
        cracks, and{' '}
        <em>
          &ldquo;Do not fumigate during hibernation, because the ground squirrel plugs its burrow
          with soil&rdquo;
        </em>{' '}
        &mdash; a plug it says cannot be seen from the entrance.
      </p>
      <p>
        <strong>Non-target burrow occupants are a stated hazard.</strong> UC IPM describes kit foxes
        enlarging old burrows into a keyhole-shaped entrance, names the burrowing owl as another
        occupant, and instructs:{' '}
        <em>&ldquo;Do not treat a burrow if you suspect a nontarget animal is present.&rdquo;</em>
      </p>
      <p>
        <strong>One fumigant is professional-only, and UC IPM gives the reason and a distance.</strong>{' '}
        <em>
          &ldquo;Aluminum phosphide is another burrow fumigant that is very effective as a ground
          squirrel management tool. However, its use is restricted to licensed pest management
          professionals.&rdquo;
        </em>{' '}
        And:{' '}
        <em>
          &ldquo;it cannot be used within 100 feet of any structure that is, or may potentially be,
          occupied by humans, pets, or livestock. This eliminates its use from most residential
          areas.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          No gas cartridge product is named here, and the reason is about listings rather than about
          the method
        </p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          <strong>
            To be exact about what this page is and is not saying: UC IPM describes the gas cartridge
            as the fumigant most readily available to residential users, and nothing on this page
            contradicts that.
          </strong>{' '}
          What we could not do is name a product against it.
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          Of the gas cartridge listings checked on 26 August 2026,{' '}
          <strong>
            one stated nothing at all about its regulatory character &mdash; no registration
            statement, no applicator condition, no state note of any kind &mdash; and one stated in
            its own product description that it is not effective against the listed pests in
            California.
          </strong>{' '}
          A third no longer resolves.
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          <strong>
            Those are observations about what two product descriptions said. They are not a
            statement about whether any fumigant may lawfully be used in California, and this page
            makes no such claim.
          </strong>{' '}
          What a particular product may be used for is set by its label and by the agencies that
          register it, and the label is the thing to read.
        </p>
      </div>
      <p>
        UC IPM also records that pressurized exhaust systems injecting concentrated carbon monoxide
        into burrows <em>&ldquo;are also legal for use in California&rdquo;</em>, naming the PERC
        machine as extensively tested. <strong>That is professional equipment, not a consumer
        product, and it is recorded here for completeness rather than as a suggestion.</strong>
      </p>

      <h2 id="baits">Toxic Baits: Closed for California Residents</h2>
      <p>
        <strong>
          It takes three separate statements to establish this, and they close different products.
        </strong>{' '}
        All three are UC IPM&rsquo;s.
      </p>
      <ul>
        <li>
          <em>&ldquo;Anticoagulant rodenticide options for residential use are no longer available.&rdquo;</em>
        </li>
        <li>
          <em>
            &ldquo;Toxic grain baits containing the active ingredient zinc phosphide can only be
            applied by licensed pest management professionals and are not available for use by
            residential users for ground squirrel management.&rdquo;
          </em>
        </li>
        <li>
          <em>
            &ldquo;Rodenticide products labeled for use against rats and house mice should never be
            used for the management of ground squirrels unless ground squirrels are specifically
            listed on the label as a target species.&rdquo;
          </em>
        </li>
      </ul>
      <p>
        <strong>UC ANR, writing in July 2025, supplies the frame.</strong> It names{' '}
        <em>
          &ldquo;Assembly Bill 2552 , known as the Poison-Free Wildlife Act&rdquo;
        </em>{' '}
        and states:{' '}
        <em>
          &ldquo;The toxic bait options now available for residents to use are bromethalin ,
          cholecalciferol , and zinc phosphide .&rdquo;
        </em>{' '}
        &mdash; and in the same passage,{' '}
        <em>
          &ldquo;products containing bromethalin and cholecalciferol can only be used to control rats
          and mice&rdquo;
        </em>
        .
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          Three actives available to residents, and none of them for this animal
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          <strong>Two of the three are labeled for rats and mice</strong>, and UC IPM says
          explicitly that rat and mouse products should not be used on ground squirrels unless the
          label lists them. <strong>The third, zinc phosphide, is professional-only for this
          species.</strong> That is the whole arithmetic, and it is why no bait is named here.
        </p>
        <p className="m-0 mt-3 text-sm text-blue-900">
          <strong>
            This is a different closure from the one on our chipmunk page, and the difference
            matters.
          </strong>{' '}
          There, the reasoning was that nothing is registered for the animal at all. Here, products
          <strong> are</strong> registered &mdash; they are simply not available to a resident for
          this species in this state. The two conclusions look alike and rest on different facts.
        </p>
      </div>

      <h2 id="elsewhere">Outside California</h2>
      <p>
        <strong>Most of this page is Californian, because most of the published material is.</strong>{' '}
        One source is not, and it says something different.
      </p>
      <p>
        <strong>Utah State University Extension</strong>, writing about the ground squirrels of its
        own region, gives its management list as: use box traps, tunnel traps or Conibear traps when
        squirrels are active from February to October; pre-bait traps for a few days before setting
        them; and <em>&ldquo;Bait with anticoagulants or zinc phosphide.&rdquo;</em>
      </p>
      <p>
        <strong>
          That is the opposite of the California position on anticoagulants, and neither source is
          mistaken.
        </strong>{' '}
        They describe different states with different rules.{' '}
        <strong>
          A recommendation written for one state is not advice for another, and this page keeps them
          apart rather than averaging them.
        </strong>
      </p>
      <p>
        Utah State also gives population figures for its region &mdash;{' '}
        <em>&ldquo;populations range from 2 to 20 squirrels per acre&rdquo;</em> &mdash; and burrows{' '}
        <em>&ldquo;5 to 30 or more feet long; 2 to 6 feet below soil surface; no soil plugs&rdquo;</em>.
      </p>

      <h2 id="not-work">What the Sources Say Does Not Work</h2>
      <p>
        <strong>Repellents and frightening devices, from two sources.</strong> UC IPM:{' '}
        <em>
          &ldquo;There are no effective squirrel-frightening devices or repellents that will cause
          ground squirrels to leave their burrows or avoid an area or crop.&rdquo;
        </em>{' '}
        CDFA: <em>&ldquo;Repellents: None registered and not recommended as an effective method of
        control.&rdquo;</em>
      </p>
      <p>
        <strong>Burrow exploders.</strong> UC IPM states that devices injecting ignitable gasses into
        burrow systems <em>&ldquo;are not generally recommended for urban use and have not proven to
        be effective.&rdquo;</em>
      </p>
      <p>
        <strong>Filling in burrows.</strong> UC IPM:{' '}
        <em>
          &ldquo;Simply filling in the burrows with soil does not prevent reinvasion, as ground
          squirrels easily find and reopen old burrows.&rdquo;
        </em>{' '}
        What it describes instead is deep ripping to at least 20 inches with a tractor and ripping
        bars &mdash; <strong>agricultural equipment, and UC IPM says it is not usually possible in
        urban areas.</strong>
      </p>
      <p>
        <strong>Predators.</strong> UC IPM states that although hawks, eagles, rattlesnakes and
        coyotes all eat ground squirrels, in most cases predators{' '}
        <em>
          &ldquo;are not able to keep ground squirrel populations below the level at which they
          become pests for the home gardener.&rdquo;
        </em>
      </p>

      <h2 id="timing">When Each Method Works</h2>
      <p>
        UC IPM publishes a month-by-month efficacy table, and it is the clearest seasonal statement
        in any source used here. Summarized from that table, with its own words for the ratings:
      </p>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-left">Method</th>
              <th className="border border-gray-300 px-3 py-2 text-left">When UC IPM rates it highest</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Rating elsewhere in the year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Fumigation</td>
              <td className="border border-gray-300 px-3 py-2">February to May — <strong>High</strong></td>
              <td className="border border-gray-300 px-3 py-2">No efficacy for the rest of the year</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Toxic baits</td>
              <td className="border border-gray-300 px-3 py-2">June to November — <strong>High</strong></td>
              <td className="border border-gray-300 px-3 py-2">No efficacy December to May</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Trapping</td>
              <td className="border border-gray-300 px-3 py-2">late January to October — <strong>Moderate</strong></td>
              <td className="border border-gray-300 px-3 py-2">No efficacy November to mid-January</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Burrow modification</td>
              <td className="border border-gray-300 px-3 py-2">Moderate, all year</td>
              <td className="border border-gray-300 px-3 py-2">—</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Exclusion, repellents, habitat modification, biological control</td>
              <td className="border border-gray-300 px-3 py-2">—</td>
              <td className="border border-gray-300 px-3 py-2"><strong>Low</strong> wherever rated</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>
          Two things follow from that table which are worth saying plainly. The two methods UC IPM
          rates High are the two this page names no product for. And exclusion — the measure that
          carries the products on several of our other pages — is rated Low in every month of the
          year for this animal, and UC IPM publishes no mesh specification for it at all.
        </strong>
      </p>
      <p>
        UC IPM also gives the animal&rsquo;s calendar: adults active mid-January through October,
        mating February through June, juveniles active April through October, foraging on green
        plants mid-January to mid-May and on seeds from mid-May through October. It adds that{' '}
        <em>&ldquo;ground squirrel activity may vary by region&rdquo;</em> and that this may affect
        the windows.
      </p>
      <p>
        And on how long the job lasts: UC IPM says that for those living next to wildlands or other
        areas where squirrels are common, an ongoing management program will be necessary because
        squirrels reinvade over time.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
