import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { HOUSE_MICE_NAV, HOUSE_MICE_HOME } from '../components/houseMiceNav';

const URL = 'https://pestproindex.com/us/house-mice';
const TITLE = 'House Mice: Identification, Exclusion and the Traps Nine Sources Support';
const DESCRIPTION =
  'Nine university extension and federal publications on the house mouse: how to tell it from a deer mouse, the quarter-inch gap five sources name independently, and where the sources disagree about glue boards. Rodent-borne disease is out of scope here and named only in passing.';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', siteName: 'PestPro Index' },
  };
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  datePublished: '2026-08-31',
  dateModified: '2026-08-31',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'House Mice', item: URL }],
};

// ---------------------------------------------------------------------------
// SCOPE, RULED AT S59 R6. This page covers identification, signs of an
// infestation, exclusion and structural proofing, trapping and control
// methods, sanitation, and when to call a professional. It does NOT carry a
// sourced treatment of rodent-borne illness: that is a scope decision, not a
// sourcing failure. Contamination is named once, in one short paragraph, in
// reported speech, pointing the reader toward the CDC rather than sourced and
// carried here. No pathogen, epidemiology or disease-transmission source was
// fetched, declared or quoted for this page.
//
// NINE SOURCES WERE READ: UC IPM, Nebraska Extension, the Internet Center for
// Wildlife Damage Management (published here via Maine DACF), Penn State,
// the National Park Service, Cornell CALS, Utah State, and two EPA pages.
// A tenth and eleventh (Arizona Cooperative Extension, Oregon State's school
// IPM guide) were fetched and read but not declared — their content duplicated
// what the nine already establish, or fell inside the disease scope this page
// does not carry (Law 83: a candidate pool is sized double the build).
//
// THE ROUTE NAME. Every species-specific source treats ONE species, Mus
// musculus, and distinguishes it explicitly from the deer mouse — UC IPM's own
// identification test and Cornell's inspection guidance both turn on telling
// the two apart. "Mice" alone would silently annex the deer mouse, whose
// disease profile is exactly what this page's scope excludes. "House mice" is
// the species name in its plural form, matching this estate's existing
// plural-route convention.
//
// THE QUARTER-INCH SPINE. Five sources state independently that a house mouse
// enters through a gap of about 1/4 inch: UC IPM, Nebraska, the ICWDM sheet,
// the National Park Service, and (as a hole-size comparison against a rat)
// Penn State. That figure, not a product, is the page's spine.
//
// GLUE BOARDS ARE A THREE-WAY DISAGREEMENT, RENDERED, NOT RESOLVED. UC IPM
// lists them neutrally as an option with a stated drawback. Cornell gives its
// own mechanism (specialized guard hairs) without ruling them out. Penn State
// says outright that they are "not recommended for rodent control and should
// be used with caution." All three are named; none is picked.
//
// TWO EXTRACTION ARTEFACTS WERE FOUND AND NOT QUOTED. UC IPM's PDF renders its
// opening sentence with a dropped-capital "H" that pdftotext separates from
// the rest of the word by blank lines, and its snap-trap paragraph loses the
// hyphen in "mouse-size" at a line wrap. Both facts are reported in this
// page's own voice instead of inside quotation marks, because neither
// extraction is reliably byte-exact to what the PDF displays.
// ---------------------------------------------------------------------------

const tocItems = [
  { id: 'which-mouse', title: 'Which Mouse? Telling It From a Deer Mouse' },
  { id: 'contamination', title: 'Contamination: What This Page Does Not Cover' },
  { id: 'signs', title: 'Signs of an Infestation' },
  { id: 'exclusion', title: 'Exclusion: The Quarter-Inch Rule' },
  { id: 'trapping', title: 'Trapping and Control Methods' },
  { id: 'tools', title: 'Tools That Meet the Sources’ Own Criteria' },
  { id: 'chemical', title: 'Rodenticides: What Consumers May Buy' },
  { id: 'sanitation', title: 'Sanitation: Necessary, Not Sufficient' },
  { id: 'professional', title: 'When the Sources Say to Call a Professional' },
  { id: 'not-here', title: 'What This Page Does Not Carry' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const products = [
  {
    asin: 'B0CQ8RSTC9',
    cardName: 'Victor Metal Pedal Mouse Traps, 12-Pack, Reusable Wooden Snap Traps',
    whatItDoes: [
      'Its own title names the animal and the mechanism this page covers: a metal-pedal wooden snap trap sized for mice, not for rats',
      'A twelve-pack, which matches the sources’ own instruction to use enough traps at once rather than one at a time — UC IPM states that traps should be spaced no more than about 10 feet apart in an active area',
      'Reusable wooden-base construction, the plain design UC IPM describes as the least expensive snap-trap option on the market',
      'This is a source-side match rather than a listing-side one: the criterion is UC IPM’s and Penn State’s own description of a standard mouse-sized snap trap, not a claim made in the product’s feature text',
    ],
  },
  {
    asin: 'B005F5U686',
    cardName: 'Trapper LTD Mouse/Insect Glue Boards, Case of 72',
    whatItDoes: [
      'Its own text names mice as a target pest, "Target pests: Mice , Insects , Spiders" (its punctuation, not ours), at 8 by 4 inches per board',
      'Its own text states the placement UC IPM and the ICWDM sheet both describe: "Place glue board near baseboards, corners, along walls, or in spaces where pests are likely to travel"',
      'A case of 72 boards, sized for the kind of infestation where several sources recommend placing multiple traps at once rather than one',
      'This page reports the sources’ disagreement about glue boards as a class — see the trapping section — and does not resolve it. Naming this product is not this page endorsing the method over the alternatives it also names',
    ],
  },
  {
    asin: 'B0GRNS3MXS',
    cardName: '1/4 Inch Hardware Cloth, 36 in x 50 ft, Galvanized',
    whatItDoes: [
      'Its own text states the exact mesh size five sources name independently for excluding a house mouse: "FINE 1/4 INCH MESH: Small square openings keep out rabbits, rodents, and other small pests"',
      'Its own text states the finish the sources ask for over a soft material — "HOT DIPPED GALVANIZED AFTER WELDING:" — which UC IPM and Nebraska both specify (metal or concrete, never plastic, rubber or foam) for a permanent seal',
      'A 36-inch by 50-foot roll, sized for sealing multiple entry points across a foundation rather than a single gap',
      'This is exclusion material, not a trap or a bait. The sources are explicit that exclusion, not chemical control, is the most permanent method',
    ],
  },
];

const faqs: Faq[] = [
  {
    question: 'How do I tell a house mouse from a deer mouse?',
    answer:
      'By the coat and the tail, and university sources give the same test independently. UC IPM Pest Notes 7483 states: "The house mouse is distinguished from the deer mouse by its overall gray coat." And: "The deer mouse has larger eyes and a white underside with a distinct line of demarcation between the dark coloration on top and the white underside." On the tail, UC IPM continues: "In addition, the tail on the house mouse has almost no fur on it, whereas the tail of the deer mouse is moderately to well furred and is light underneath and dark on top." Cornell CALS gives the same distinction a practical use: "Knowing the mouse species, for example, can tell you if they are primarily living indoors (house mouse) or if they enter the home from exterior entry points (white-footed and deer mouse) such as high up on a building where electrical wires connect, or where tree branches provide a bridge." This page covers the house mouse only — the deer mouse is a different animal with a different profile this page does not carry.',
  },
  {
    question: 'How small a gap can a house mouse fit through?',
    answer:
      'About a quarter of an inch, and five sources give that figure independently. UC IPM: "House mice can squeeze under gaps ¼ inch tall, and through openings 3/8 inch wide." Nebraska Extension: "Mice can squeeze through openings slightly larger than ¼-inch in diameter." The ICWDM sheet, published here by the Maine Department of Agriculture, Conservation and Forestry: "Seal all openings larger than 1/4 inch (0.6 cm) wide." The National Park Service, in mechanical rather than biological terms: "Their slender body and lack of a collar bone allows them to squeeze through openings of ¼ inch in diameter (6mm), about the same diameter as a #2 wooden pencil." And Penn State gives the comparison against the animal this page does not cover: "A mouse can fit through a hole about the size of a dime (or a pencil), and a rat can fit through a hole about the size of a quarter."',
  },
  {
    question: 'What should I seal gaps with?',
    answer:
      'Something rigid, never something soft, and the sources agree from both directions. UC IPM states plainly what does not work: "Plastic screening, rubber, vinyl, insulating (expanding) foam, wood, and other gnawable materials are ineffective for plugging holes used by house mice." Nebraska Extension states the same thing in its own words: "Latex, plastic, rubber, boards less than ½-inch thick, or other soft materials are unsuitable for plugging holes used by mice." Nebraska separately names what does: "Larger openings can be secured with wood, aluminum flashing, concrete, or ¼-inch wire mesh." UC IPM adds a caveat about the most common quick fix: "Steel wool scouring pads make good temporary plugs but may rust over time." The National Park Service names an alternative to steel wool: "Insert Stuf-it copper mesh into the opening, then trim and paint over the foam."',
  },
  {
    question: 'Should I use glue boards?',
    answer:
      'The sources do not agree, and this page reports all three positions rather than choosing one. UC IPM lists them as an option with a stated limitation: "An alternative to traps are glue boards, which catch and hold house mice that attempt to cross them, similar to the way that flypaper catches flies." UC IPM adds: "One drawback to glue boards is that adult rodents can often detect and avoid the glue before getting stuck, resulting in capture of mostly juvenile individuals." Cornell CALS is more cautious, and gives its own reasons: "First, adult rodents have specialized guard hairs that are used to detect changes in ground texture." Because of this, Cornell states, "glue traps primarily catch juvenile rodents that do not have fully formed guard hairs." And separately, "some rodents can escape by pulling off fur or urinating and making the glue less tacky." Penn State is the most direct of the three: "Glue boards are not recommended for rodent control and should be used with caution." Penn State explains why: "They are nontoxic, but they do not kill the mouse leaving you to deal with a live mouse." Nothing here picks a side.',
  },
  {
    question: 'Can homeowners still buy the strongest mouse poison?',
    answer:
      'No, and this has been federal policy for over a decade. The EPA states: "Due to these risks, second-generation anticoagulant rodenticides no longer are registered for use in products geared toward consumers and are registered only for the commercial pest control and structural pest control markets." The compounds meant are named separately: "Second-generation anticoagulants registered in the United States include brodifacoum, bromadiolone, difenacoum, and difethialone." On why, in the EPA’s own words: "These compounds kill over a similar course of time but tend to remain in animal tissues longer than do first-generation ones." And: "These properties mean that second-generation products pose greater risks to nontarget species that might feed on bait only once or that might feed upon animals that have eaten the bait." The EPA also states: "Pelleted baits no longer are permitted to be used in rodenticide products targeted for consumer markets." And on a refillable consumer bait station: "If bait stations are of a refillable design, up to one pound of bait to be used to fill or refill the bait station may be included with the bait station in the retail package." Nebraska Extension independently states the same restriction in its own words, which is the kind of agreement between a regulator and an extension service this page looks for before naming a rule as settled.',
  },
  {
    question: 'What about diseases mice carry?',
    answer:
      'This page does not cover that, on purpose. Its scope is identification, exclusion, trapping, sanitation and when to call a professional — not a sourced treatment of rodent-borne illness, which is a large enough subject that folding it in here would mean covering it thinly or not fetching it properly. Cornell CALS’s own rodent management guide states: "The Centers for Disease Control and Prevention (CDC) provides clean up recommendations that reduce the risk of exposure to rodent pathogens." That is as far as this page goes: contamination from droppings, urine and nesting material is real, and the CDC publishes cleanup guidance for it. This page attempted to fetch and link the relevant CDC page directly and could not — see the sources section — so the reader is pointed to CDC.gov by name rather than by a link this page could not verify.',
  },
];

const sources: Source[] = [
  {
    label: 'Pest Notes: House Mouse, Publication 7483 — the source of the identification test against the deer mouse, the biology, the exclusion gap figures, and most of the trapping and glue-board material',
    publisher: 'UC Statewide IPM Program (Quinn N, Frye M)',
    date: 'Revised July 2025; read 31 August 2026',
    href: 'https://ipm.ucanr.edu/legacy_assets/PDF/PESTNOTES/pnhousemouse.pdf',
  },
  {
    label: 'G1105, Controlling House Mice — the source of the droppings and gnaw-mark figures, the exclusion-material corroboration, and the GUP rodenticide restrictions independently confirming the EPA',
    publisher: 'University of Nebraska–Lincoln Extension',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://extensionpubs.unl.edu/publication/g1105/na/html/view',
  },
  {
    label: 'B-31, House Mice: Damage Prevention and Control Methods — the source of the exclusion instruction, the mouse-versus-rat gnawing comparison, and the when-to-call-a-professional statements',
    publisher: 'Internet Center for Wildlife Damage Management, published via Maine Dept. of Agriculture, Conservation and Forestry',
    date: 'Undated on the document; read 31 August 2026',
    href: 'https://www.maine.gov/dacf/php/gotpests/othercritters/factsheets/mice-ICWDM.pdf',
  },
  {
    label: 'Is There a Mouse in the House? Eliminate Mice with IPM — the source of the mouse-versus-rat hole-size comparison and the glue-board position most cautious of the three reported',
    publisher: 'Penn State Extension',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://extension.psu.edu/is-there-a-mouse-in-the-house-eliminate-mice-with-ipm',
  },
  {
    label: 'Rodent Exclusion Manual: Mechanical Rodent-Proofing Techniques — the source of the pencil-diameter comparison for the quarter-inch gap and the copper-mesh exclusion material',
    publisher: 'National Park Service',
    date: '2019 edition; read 31 August 2026',
    href: 'https://www.nps.gov/orgs/1103/upload/NPS-Rodent-Exclusion-Manual-Mechanical-Rodent-Proofing-Techniques_2019_508.pdf',
  },
  {
    label: 'Managing Mice and Rats — the source of the sebum-trail and droppings-count inspection detail, the trap-fatigue finding, the middle glue-board position, and the sentence naming the CDC’s own cleanup guidance',
    publisher: 'Cornell Cooperative Extension, Cornell Integrated Pest Management',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://cals.cornell.edu/integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
  },
  {
    label: 'House Mouse, Structural and Nuisance Pest Notes — the source of the independent corroboration on trap placement, sanitation and door sweeps',
    publisher: 'Utah State University Extension',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://extension.usu.edu/planthealth/ipm/notes_nuisance/house-mouse',
  },
  {
    label: 'Restrictions on Rodenticide Products — the source of the second-generation anticoagulant ban for consumer products and the one-pound bait-station limit',
    publisher: 'U.S. Environmental Protection Agency',
    date: 'Last updated 16 September 2025; read 31 August 2026',
    href: 'https://www.epa.gov/rodenticides/restrictions-rodenticide-products',
  },
  {
    label: 'Safely Use Rodent Bait Products — the source of the storage and carcass-disposal safety instructions',
    publisher: 'U.S. Environmental Protection Agency',
    date: 'Last updated 6 October 2025; read 31 August 2026',
    href: 'https://www.epa.gov/rodenticides/safely-use-rodent-bait-products',
  },
];

export default function HouseMicePage() {
  return (
    <UsPageLayout
      title="House Mice"
      subtitle="Identification, exclusion and trapping, as nine university extension and federal publications describe them. Five sources independently name the same quarter-inch gap a house mouse can enter through. The sources disagree, in three distinct positions, about whether to use a glue board. Rodent-borne disease is out of scope here on purpose, and is named once rather than sourced and carried."
      lastUpdated="August 2026"
      readingTime="13 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={HOUSE_MICE_HOME}
      clusterNav={HOUSE_MICE_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about one species: the house mouse, <em>Mus musculus</em>, as nine
        university extension and federal publications describe it. It covers identification,
        signs of an infestation, exclusion, trapping and control methods, sanitation, and when
        the sources say to call a professional. It does not cover rodent-borne disease as a
        sourced subject, and the section below explains why that is a scope decision rather than
        an oversight.
      </p>

      <h2 id="which-mouse">Which Mouse? Telling It From a Deer Mouse</h2>
      <p>
        <strong>UC Statewide IPM Program</strong> describes the animal this page is about as
        small, common indoors, and easy to confuse with a relative that this page does not cover:{' '}
        <em>
          &ldquo;House mice are small rodents with relatively large ears and small, black eyes
          (Figure 1). They weigh about ½ ounce and usually are light brownish to gray.&rdquo;
        </em>{' '}
        <strong>An adult house mouse is about 5 to 7 inches long, including the 3- to 4-inch
        tail,</strong>{' '}
        by UC IPM&rsquo;s own figures, and UC IPM states in its own voice — not a direct
        quotation, because the source PDF renders this sentence with a decorative dropped
        capital that an automated extraction cannot reliably reproduce byte-exact — that
        house mice are highly adaptable animals found in many habitat types worldwide, often
        living close to people.
      </p>
      <p>
        <strong>UC IPM</strong> gives the test for telling it apart from the deer mouse, which is
        &ldquo;sometimes found in homes and outbuildings&rdquo; alongside it:{' '}
        <em>
          &ldquo;The house mouse is distinguished from the deer mouse by its overall gray
          coat.&rdquo;
        </em>{' '}
        <em>
          &ldquo;The deer mouse has larger eyes and a white underside with a distinct line of
          demarcation between the dark coloration on top and the white underside.&rdquo;
        </em>{' '}
        UC IPM continues, on the tail specifically:{' '}
        <em>
          &ldquo;In addition, the tail on the house mouse has almost no fur on it, whereas the
          tail of the deer mouse is moderately to well furred and is light underneath and dark on
          top.&rdquo;
        </em>
      </p>
      <p>
        <strong>Cornell CALS</strong> gives the same distinction a practical use during an
        inspection:{' '}
        <em>
          &ldquo;Knowing the mouse species, for example, can tell you if they are primarily living
          indoors (house mouse) or if they enter the home from exterior entry points
          (white-footed and deer mouse) such as high up on a building where electrical wires
          connect, or where tree branches provide a bridge.&rdquo;
        </em>{' '}
        <strong>
          This page is about the house mouse only. The deer mouse is a different animal with a
          different profile, and that profile is not carried here.
        </strong>
      </p>
      <p>
        On why a house mouse is difficult to starve out entirely, <strong>UC IPM</strong> states:{' '}
        <em>
          &ldquo;House mice do not need to drink water to survive but will seek liquids if they
          are not getting sufficient moisture from their food, or if there are additional
          requirements from living in a hot or dry environment.&rdquo;
        </em>{' '}
        And on how quickly a small problem becomes a large one, UC IPM&rsquo;s own figures state
        that a female house mouse may have{' '}
        <em>&ldquo;5 to 10 litters of about 5 or 6 pups each&rdquo;</em> in a single year. UC IPM
        continues:{' '}
        <em>
          &ldquo;Young are born 18 to 21 days after conception, and house mice are sexually
          mature 5 to 6 weeks after birth, although this can be delayed until as late as 12
          weeks.&rdquo;
        </em>
      </p>

      <h2 id="contamination">Contamination: What This Page Does Not Cover</h2>
      <p>
        <strong>
          This page does not carry a sourced treatment of rodent-borne disease. That is a scope
          decision made before this page was built, not a source that could not be found.
        </strong>{' '}
        Contamination is real: house mice can foul food and surfaces with droppings, urine and
        nesting material. <strong>Cornell CALS</strong>&rsquo;s own rodent management page
        states:{' '}
        <em>
          &ldquo;The Centers for Disease Control and Prevention (CDC) provides clean up
          recommendations that reduce the risk of exposure to rodent pathogens.&rdquo;
        </em>{' '}
        That is as far as this page goes: readers with a contamination concern are pointed to
        CDC.gov, by name, for cleanup guidance this page does not reproduce.
      </p>
      <p>
        <strong>
          A specific CDC page was identified and one fetch was attempted, so that a live link
          could be given rather than a bare name. It returned an access-denied response, not the
          document.
        </strong>{' '}
        Under this estate&rsquo;s standing rule, a dead or blocked citation is worse than none, so
        no cdc.gov link appears on this page. The attempt is recorded, with its outcome, in the
        sources section below.
      </p>

      <h2 id="signs">Signs of an Infestation</h2>
      <p>
        <strong>UC IPM</strong> names the physical evidence:{' '}
        <em>
          &ldquo;Droppings and gnaw marks can reveal house mouse activity, and though more
          difficult to find, tracks or footprints can also indicate their presence.&rdquo;
        </em>{' '}
        <strong>Nebraska Extension</strong> gives the droppings their own figure:{' '}
        <em>
          &ldquo;Droppings average ⅛- to ¼-inch in length with one or both ends
          narrowing to a point (Figure 2).&rdquo;
        </em>{' '}
        <strong>Cornell CALS</strong>, under its own heading &ldquo;Number of Droppings&rdquo;,
        adds a caution about reading too much into a count:{' '}
        <em>
          &ldquo;the sudden appearance of a large number of droppings can be alarming, but
          doesn&rsquo;t prove you have a full-blown infestation.&rdquo;
        </em>
      </p>
      <h3>How many droppings a day? Two sources, two figures, both given</h3>
      <p>
        <strong>Nebraska Extension</strong> states:{' '}
        <em>
          &ldquo;House mice deposit approximately 50 to 75 pellets per day as they explore their
          environment.&rdquo;
        </em>{' '}
        <strong>Cornell CALS</strong> gives a narrower range, from a different estimate it names
        as such:{' '}
        <em>
          &ldquo;According to some estimates, rats can produce 40 to 50 droppings per day, while
          mice can create between 50 and 60.&rdquo;
        </em>{' '}
        <strong>
          The two figures do not agree, and this page reports both rather than averaging them or
          picking one.
        </strong>
      </p>
      <p>
        On gnaw marks specifically, <strong>Nebraska Extension</strong> states:{' '}
        <em>
          &ldquo;Fresh gnaw marks, 1/32-inch wide, provide another clue that mice are present.&rdquo;
        </em>{' '}
        The <strong>ICWDM sheet</strong> gives a way to tell mouse gnawing from rat gnawing by the
        hole it leaves:{' '}
        <em>
          &ldquo;Size of entry holes (often 1 1/2 inches [3.8 cm] in diameter or less for mice, 2
          inches [5 cm] or larger for rat) or tooth marks can be used to distinguish rat gnawing
          from mouse gnawing.&rdquo;
        </em>{' '}
        On odor, <strong>Nebraska Extension</strong> states:{' '}
        <em>
          &ldquo;A musky odor can occur in areas with long-term presence by house mice.&rdquo;
        </em>{' '}
        This matches UC IPM&rsquo;s own statement:{' '}
        <em>
          &ldquo;House mice have a characteristic musky odor that is common in large or long-term
          infestations.&rdquo;
        </em>{' '}
        <strong>Cornell CALS</strong> names one further sign most homeowner checklists miss, as
        part of one inspection instruction:{' '}
        <em>
          &ldquo;Look for droppings, gnaw marks, footprints, and sebum marks (an oily, brown
          substance that accumulates on pathways that rodents use frequently).&rdquo;
        </em>
      </p>

      <h2 id="exclusion">Exclusion: The Quarter-Inch Rule</h2>
      <p>
        <strong>
          Five sources state independently that a house mouse can enter through a gap of about
          a quarter of an inch, and this page treats that figure as its spine rather than a
          single source&rsquo;s claim.
        </strong>{' '}
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;House mice can squeeze under gaps ¼ inch tall, and through openings 3/8
          inch wide.&rdquo;
        </em>{' '}
        <strong>Nebraska Extension:</strong>{' '}
        <em>
          &ldquo;Mice can squeeze through openings slightly larger than ¼-inch in
          diameter.&rdquo;
        </em>{' '}
        <strong>The ICWDM sheet:</strong>{' '}
        <em>&ldquo;Seal all openings larger than 1/4 inch (0.6 cm) wide.&rdquo;</em>{' '}
        <strong>The National Park Service</strong> gives the same figure in mechanical rather than
        behavioral terms:{' '}
        <em>
          &ldquo;Their slender body and lack of a collar bone allows them to squeeze through
          openings of ¼ inch in diameter (6mm), about the same diameter as a #2 wooden
          pencil.&rdquo;
        </em>{' '}
        <strong>Penn State</strong> gives the same figure as a comparison against the animal this
        page does not cover:{' '}
        <em>
          &ldquo;A mouse can fit through a hole about the size of a dime (or a pencil), and a rat
          can fit through a hole about the size of a quarter.&rdquo;
        </em>
      </p>
      <p>
        On what to seal a gap with, <strong>UC IPM</strong> and{' '}
        <strong>Nebraska Extension</strong> agree from both directions. What fails:{' '}
        <em>
          &ldquo;Plastic screening, rubber, vinyl, insulating (expanding) foam, wood, and other
          gnawable materials are ineffective for plugging holes used by house mice&rdquo;
        </em>{' '}
        (UC IPM);{' '}
        <em>
          &ldquo;Latex, plastic, rubber, boards less than ½-inch thick, or other soft
          materials are unsuitable for plugging holes used by mice&rdquo;
        </em>{' '}
        (Nebraska). What works: UC IPM says:{' '}
        <em>
          &ldquo;Seal cracks in building foundations and around openings for water pipes, vents,
          and utility cables with metal or concrete.&rdquo;
        </em>{' '}
        Nebraska adds:{' '}
        <em>
          &ldquo;Larger openings can be secured with wood, aluminum flashing, concrete, or
          ¼-inch wire mesh.&rdquo;
        </em>{' '}
        <strong>UC IPM</strong> flags the most common quick fix as temporary only:{' '}
        <em>
          &ldquo;Steel wool scouring pads make good temporary plugs but may rust over
          time.&rdquo;
        </em>{' '}
        <strong>The National Park Service</strong> names a longer-lasting alternative:{' '}
        <em>
          &ldquo;Insert Stuf-it copper mesh into the opening, then trim and paint over the
          foam.&rdquo;
        </em>
      </p>

      <h2 id="trapping">Trapping and Control Methods</h2>
      <p>
        <strong>UC IPM</strong> describes the plain wooden snap trap, sized for a mouse rather
        than a rat, as the least expensive option on the market, and the newer plastic mouse traps
        as easier to set and clean — reported here in this page&rsquo;s own words rather than
        UC IPM&rsquo;s exact wording, because the source PDF&rsquo;s extracted text renders the
        word as one unhyphenated run &mdash; &ldquo;mousesize&rdquo; &mdash; consistent with a
        hyphen dropped at a line wrap, and this page will not present a reconstructed spelling as
        a verbatim quotation. On bait, UC IPM names peanut butter as a popular choice, easy to use
        and very attractive to house mice, while noting in its own text that peanut butter can
        pose an allergy risk to the person setting the trap rather than to the mouse.
      </p>
      <p>
        On trap design, <strong>UC IPM</strong> states:{' '}
        <em>
          &ldquo;Mouse traps with a wide trigger plate (Figure 4) have higher catch rates, and
          triggers should be set lightly so the traps spring easily.&rdquo;
        </em>{' '}
        On how many traps and where, UC IPM states:{' '}
        <em>
          &ldquo;House mice seldom venture more than 30 feet from their nest sites and food
          supply, so space traps no more than about 10 feet apart in areas where house mice are
          active.&rdquo;
        </em>{' '}
        <strong>Utah State Extension</strong> corroborates the placement independently:{' '}
        <em>
          &ldquo;Use snap-traps placed with triggers toward the baseboards, especially in dark
          corners.&rdquo;
        </em>{' '}
        Utah State names the same range of baits UC IPM does, in the very next sentence of its own
        checklist:{' '}
        <em>&ldquo;Use multiple baits: peanut butter, hotdogs, floss, etc.&rdquo;</em>
      </p>
      <p>
        <strong>Cornell CALS</strong> makes a point neither of the other sources states directly:
        a rat trap and a mouse trap are not interchangeable.{' '}
        <em>
          &ldquo;Rat traps may be too slow to kill a mouse, whereas a mousetrap will not inflict
          enough force to kill a rat. Identify your target pest to select the correct
          trap.&rdquo;
        </em>{' '}
        Cornell names a failure mode neither UC IPM nor Penn State mentions, under its own
        heading, &ldquo;Trap Fatigue&rdquo;:{' '}
        <em>
          &ldquo;This can occur when snap traps are left in the same place for a long period of
          time. Rodents, especially mice, become accustomed to the trap and do not explore, or
          actively avoid it.&rdquo;
        </em>{' '}
        Cornell recommends moving past it by relocating traps to new areas for a few days.
      </p>
      <h3>Glue boards: three sources, three positions, none picked</h3>
      <p>
        <strong>UC IPM</strong> lists them as a working option with a named limitation:{' '}
        <em>
          &ldquo;An alternative to traps are glue boards, which catch and hold house mice that
          attempt to cross them, similar to the way that flypaper catches flies.&rdquo;
        </em>{' '}
        <em>
          &ldquo;One drawback to glue boards is that adult rodents can often detect and avoid the
          glue before getting stuck, resulting in capture of mostly juvenile individuals.&rdquo;
        </em>{' '}
        <strong>Cornell CALS</strong> is more cautious and gives its own mechanism, naming it
        first of a few reasons:{' '}
        <em>
          &ldquo;First, adult rodents have specialized guard hairs that are used to detect changes
          in ground texture.&rdquo;
        </em>{' '}
        Because of this, Cornell states,{' '}
        <em>
          &ldquo;glue traps primarily catch juvenile rodents that do not have fully formed guard
          hairs.&rdquo;
        </em>{' '}
        And separately,{' '}
        <em>
          &ldquo;some rodents can escape by pulling off fur or urinating and making the glue less
          tacky.&rdquo;
        </em>{' '}
        <strong>Penn State</strong> is the most direct of the three:{' '}
        <em>
          &ldquo;Glue boards are not recommended for rodent control and should be used with
          caution.&rdquo;
        </em>{' '}
        <em>
          &ldquo;They are nontoxic, but they do not kill the mouse leaving you to deal with a live
          mouse.&rdquo;
        </em>{' '}
        <strong>
          None of the three positions is picked here. A reader choosing a glue board is choosing
          against Penn State&rsquo;s recommendation and inside UC IPM&rsquo;s and Cornell&rsquo;s
          stated limitations, and should know that before buying one.
        </strong>
      </p>
      <p>
        On devices that do not work, <strong>UC IPM</strong> states:{' '}
        <em>
          &ldquo;There is little evidence that sound, or magnetic or vibrational devices of any
          kind will drive established house mice or rats from buildings or provide any prevention
          or control.&rdquo;
        </em>{' '}
        <strong>The ICWDM sheet</strong> agrees independently:{' '}
        <em>&ldquo;Ultrasonic devices have not been proven to control mice.&rdquo;</em>{' '}
        <strong>No ultrasonic or vibrational device is named on this page.</strong>
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          The criteria the three tools below are measured against
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          Each listing below states, in its own text rather than only in a product title, the
          property the sources above ask for: a mouse-sized snap trap, a glue board that names
          mice as a target pest, and hardware cloth at the quarter-inch mesh five sources
          independently name. No source consulted for this page ranks any two products against
          one another, so nothing here is called best, and no price appears beside a card.
        </p>
      </div>
      {products.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="chemical">Rodenticides: What Consumers May Buy</h2>
      <p>
        <strong>The EPA</strong> states that most rodenticides in use are anticoagulants, and
        draws a line between two classes:{' '}
        <em>
          &ldquo;Due to these risks, second-generation anticoagulant rodenticides no longer are
          registered for use in products geared toward consumers and are registered only for the
          commercial pest control and structural pest control markets.&rdquo;
        </em>{' '}
        The compounds named:{' '}
        <em>
          &ldquo;Second-generation anticoagulants registered in the United States include
          brodifacoum, bromadiolone, difenacoum, and difethialone.&rdquo;
        </em>{' '}
        On the form a consumer product may take:{' '}
        <em>
          &ldquo;Pelleted baits no longer are permitted to be used in rodenticide products
          targeted for consumer markets.&rdquo;
        </em>{' '}
        On quantity:{' '}
        <em>
          &ldquo;If bait stations are of a refillable design, up to one pound of bait to be used
          to fill or refill the bait station may be included with the bait station in the retail
          package.&rdquo;
        </em>{' '}
        A non-refillable station has its own rule, also from the EPA:{' '}
        <em>
          &ldquo;Ready-to-use bait stations that are not refillable must be properly disposed
          after the bait in them has been consumed or contaminated.&rdquo;
        </em>
      </p>
      <p>
        <strong>Nebraska Extension</strong> independently confirms the same restriction from the
        extension side rather than the regulator side, listing the changes as:{' '}
        <em>&ldquo;Other changes to GUP rodenticides include:&rdquo;</em> block or paste form
        with an EPA-approved bait station; no brodifacoum, bromadiolone, difethialone or
        difenacoum; and no more than one pound sold at a time. <strong>A regulator and an
        extension service agreeing independently is the kind of corroboration this page looks
        for before naming a rule as settled.</strong>
      </p>
      <p>
        On using a rodenticide safely, <strong>the EPA</strong> states:{' '}
        <em>
          &ldquo;Always store pesticides away from the reach of children and pets, such as in a
          locked utility cabinet or garden shed.&rdquo;
        </em>{' '}
        And on what to do with a rodent that a bait has killed:{' '}
        <em>
          &ldquo;To prevent accidental poisoning of wildlife and pets that might eat a dead
          animal, promptly remove and dispose of carcasses of dead rodents.&rdquo;
        </em>{' '}
        <strong>No rodenticide is carded on this page.</strong> The sources describe a regulated
        product class rather than a single tool with a stated criterion, and naming one brand
        over another is not something any source here supports.
      </p>

      <h2 id="sanitation">Sanitation: Necessary, Not Sufficient</h2>
      <p>
        <strong>UC IPM</strong> is careful not to overstate what cleaning alone can do:{' '}
        <em>
          &ldquo;While good sanitation (achieved through cleaning and decluttering) will seldom
          completely control house mice, poor sanitation can attract them and will permit them to
          thrive in greater numbers.&rdquo;
        </em>{' '}
        <strong>Cornell CALS</strong> defines the term the same way other sources use it:{' '}
        <em>
          &ldquo;Sanitation, also referred to as housekeeping, eliminates sources of food and
          water and makes the site less attractive.&rdquo;
        </em>{' '}
        <strong>Utah State Extension</strong> gives the same instructions as a checklist:{' '}
        <em>&ldquo;Install tight-fitting door sweeps.&rdquo;</em>{' '}
        <em>&ldquo;Reduce clutter indoors and outdoors.&rdquo;</em>{' '}
        <em>&ldquo;Move dumpsters at least 50 feet from buildings.&rdquo;</em>{' '}
        <em>&ldquo;Store food in pest-proof containers.&rdquo;</em>{' '}
        <em>&ldquo;Train kitchen and custodial staff to clean thoroughly.&rdquo;</em>
      </p>

      <h2 id="professional">When the Sources Say to Call a Professional</h2>
      <p>
        <strong>The ICWDM sheet</strong> names three specific circumstances where it defers to a
        pest control operator rather than a homeowner. For fumigation:{' '}
        <em>&ldquo;Contact a pest control operator for fumigation.&rdquo;</em> For a single-dose
        toxicant:{' '}
        <em>
          &ldquo;Use singledose toxicant (assistance of a pest control operator may be
          required).&rdquo;
        </em>{' '}
        And for a specific tool most homeowners will not have on hand:{' '}
        <em>
          &ldquo;For the most part, tracking powders are used by professional pest control
          operators and others trained in rodent control.&rdquo;
        </em>{' '}
        <strong>
          None of the three is a general escalation rule about the size of an infestation. Each
          is tied to a specific method the sources say belongs to a trained applicator rather than
          a homeowner.
        </strong>
      </p>

      <h2 id="not-here">What This Page Does Not Carry</h2>
      <p>
        <strong>A sourced treatment of rodent-borne disease.</strong> Covered above: this is a
        scope decision, and the reader is pointed to the CDC by name rather than through a
        citation this page could not verify.
      </p>
      <p>
        <strong>The deer mouse.</strong> A different species with a different profile. Two sources
        give the test for telling it apart from the house mouse; neither this page nor its cards
        cover it further.
      </p>
      <p>
        <strong>A ranking.</strong> Nine publications were read and none compares any two mouse
        control products against one another. Nothing here is called best.
      </p>
      <p>
        <strong>An ultrasonic or vibrational repellent device.</strong> Two sources state
        independently that the evidence for these does not support them, and none is named.
      </p>
      <p>
        <strong>A named rodenticide brand.</strong> The EPA and Nebraska Extension describe a
        regulated product class, not a single product meeting a stated criterion, so none is
        carded.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Nine publications, each named in the sentence that uses it. Every quotation on this page
        was located, byte-exact, in the publication it is attributed to. Two sentences that could
        not be reproduced byte-exact because of a PDF extraction artifact are reported in this
        page&rsquo;s own words instead, and are named as such above.
      </p>
      <p>
        <strong>
          One further URL was attempted and is not a source on this page: a CDC page on rodent
          control, fetched once on 31 August 2026, which returned an access-denied response
          rather than the document.
        </strong>{' '}
        No quotation, citation or link to that page appears here. It is named in this paragraph,
        under this estate&rsquo;s standing rule that a failed fetch is recorded rather than
        substituted, and never quietly dropped.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
