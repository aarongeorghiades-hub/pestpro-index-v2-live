import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { COYOTE_NAV, COYOTE_HOME } from '../components/coyoteNav';

const URL = 'https://pestproindex.com/us/coyotes';
const TITLE = 'Coyotes: the Exclusion Specification, the Disagreements, and Who Does the Removal';
const DESCRIPTION =
  'What university extension services publish about urban and suburban coyotes: the fence specification given to the inch, the live disagreement about hazing, the nineteen-year-old California legal position we could not check against a state agency, and why removal is handed to agencies rather than to a householder.';

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
  dateModified: '2026-08-27',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Coyotes', item: URL }],
};

// ---------------------------------------------------------------------------
// THIS PAGE NOW CARDS TWO CLASSES OF FOUR, AND THE OTHER TWO ARE ZERO-CARD FOR
// TWO DIFFERENT REASONS. NEITHER IS THE /us/ground-squirrels REASON.
//
// The listing check was run on 2026-08-27. Eight listings, one per candidate,
// every one returning a real product page. What it found, class by class:
//
//   ROLLERS   three listings evidence the criterion in their own text. CARDED.
//             The two Coyote Roller entries are one kit in two fence-type
//             fitments, so they are ONE card under S47-H, with both fitments
//             named in the copy.
//   FENCING   three listings state a mesh aperture inside UC IPM's 6-inch
//             limit. CARDED ON THE MESH. None states a height in its own text,
//             so the height renders as a reader instruction and no card claims
//             to meet it.
//   APRON     ZERO CARDS. The one apron product publishes its ground coverage
//             and the figure is below what UC IPM specifies. An evidenced
//             failure on the listing's own number.
//   OVERHANG  ZERO CARDS. The retail class exists but is built for the
//             opposite purpose, and no listing states the direction the
//             criterion turns on. Half a criterion is not a criterion.
//
// WHY THIS IS NOT THE /us/ground-squirrels SHAPE. That page names no product at
// all, because every class it proposed failed. This page cards two classes and
// declines two, each for its own stated reason. The two must not be conflated:
// "we checked and nothing qualified" and "we checked and some things qualified"
// are different findings about different classes.
// ---------------------------------------------------------------------------

type ProductGroup = 'roller' | 'fencing';

type ProductRecord = {
  asin: string;
  cardName: string;
  titleAsFetched: string;
  group: ProductGroup;
  whatItDoes: string[];
};

// Titles are the fetched product titles, verbatim, from the identity bank entry
// written when each listing was read on 2026-08-27 (S47-J). Card copy describes
// fitness against the source criterion and nothing else; manufacturer
// superlatives in the listings are not reproduced (S46-G).
const products: ProductRecord[] = [
  {
    asin: 'B0BMNPPN65',
    cardName: 'Coyote Roller 8 Foot Kit',
    titleAsFetched:
      '8 Foot Kit - Keep Pets Contained, Coyotes Out - Cats, Dogs, Coyotes - Wood Dog Ear',
    group: 'roller',
    whatItDoes: [
      'Meets the roller criterion in the listing\u2019s own words: the manufacturer text says it is \u201cDesigned to deny an animals paws the traction needed to pull themselves up and over a fence by spinning freely when attempting to enter or exit a yard\u201d',
      'That is the mechanism UC IPM describes \u2014 denying a foothold at the top of the fence \u2014 stated by the seller rather than inferred by us',
      'The listing states a roller length of 48.5 inches including end caps, and an 8-foot kit containing two rollers and four mounting brackets',
      'Sold in fence-type fitments. This link is the wood dog-ear fitment; the same kit in a chain-link fitment is a separate listing under ASIN B0BMNP26FP. Pick the one matching your fence',
      'UC IPM presents a roller as an addition to a fence that already meets the height, mesh and apron figures, not as a substitute for any of them',
    ],
  },
  {
    asin: 'B0H74XZQT5',
    cardName: 'Guutuca 4 Foot Fence Topper Roller Kit',
    titleAsFetched: '4 Foot Kit, Fence Topper Roller for Pet Contained, Wildlife Away',
    group: 'roller',
    whatItDoes: [
      'Meets the same criterion on its own feature text: \u201cThe anti-climb fence topper creates a rotating barrier at the top of the fence\u201d, and the listing says the roller system helps prevent climbing',
      'A shorter kit than the one above \u2014 the listing states two 60 cm rollers and connecting hardware \u2014 and a different manufacturer, so it is a separate product rather than a fitment of it',
      'The listing states compatibility with chain-link and wood dog-ear fences',
      'Named here because its own text carries the criterion. No source consulted for this page compares one roller against another, and none is called better than another',
    ],
  },
  {
    asin: 'B0H1W3T7ZZ',
    cardName: 'Welded Wire Mesh Fence Roll, 2 x 4 Inch Mesh, 50 Foot',
    titleAsFetched:
      'Welded Wire Mesh Fence 6ft x 50ft 2"x4" 15 Gauge Galvanized Wire Fence Roll',
    group: 'fencing',
    whatItDoes: [
      'Meets the mesh criterion on the listing\u2019s own words: \u201cthe versatile 2\u201dx4\u201d mesh opening\u201d. Two inches by four inches is inside UC IPM\u2019s limit of no larger than 6 inches on both axes',
      'The listing states galvanized steel wire and a 15 gauge',
      'Sold as a roll measuring 6 ft by 50 ft. THAT IS THE ROLL, NOT AN ERECTED FENCE \u2014 the listing never describes the 6 ft figure as a height, and this card makes no height claim on its behalf',
      'The only dimension field on the listing reads 8.7 x 8.7 x 71.7 inches, which is the rolled package',
    ],
  },
  {
    asin: 'B0FX21JKKQ',
    cardName: 'Welded Wire Mesh Fence Roll, 2 x 4 Inch Mesh, 50 Foot, Hot-Dip Galvanized',
    titleAsFetched:
      'Welded Wire Mesh 6ft X 50ft Galvanized Steel Wire Fence 15 Gauge 2x4in Mesh',
    group: 'fencing',
    whatItDoes: [
      'Meets the mesh criterion on its own words: \u201cMade from 15 gauge welded steel with 2\u201d x 4\u201d mesh openings\u201d. Inside the 6-inch limit on both axes',
      'The listing states it is hot-dip galvanized after welding, so the weld joints are coated rather than bare',
      'Sold as a roll the listing describes as \u201cMeasuring 6 ft x 50 ft\u201d. Again a roll dimension, not a stated fence height',
      'The listing states it can be trimmed with wire cutters or metal shears',
    ],
  },
  {
    asin: 'B0DPGFB9ZM',
    cardName: 'Fencer Wire Welded Wire Fence Roll, 4 x 4 Inch Mesh, 100 Foot',
    titleAsFetched:
      'Fencer Wire Welded Wire Fence 12.5 Gauge, Galvanized Welded Fence Wire Roll, Mesh Size 4-Inch x 4-Inch, Hog Wire Fencing Cage, Multiple Use for Home Improvement & Animals Enclosure (6ft. x 100ft.)',
    group: 'fencing',
    whatItDoes: [
      'Meets the mesh criterion on its own words: \u201c4\u201d x 4\u201d Opening Square Mesh Weave; With 4 inch by 4 inch mesh\u201d. Four inches is inside the 6-inch limit, and it is the largest aperture of the three carded here',
      'The listing states 12.5 gauge wire, galvanized before welding, with a Class 1 zinc coating',
      'The listing gives \u201cFence Size: 6 ft. x 100 ft.\u201d \u2014 a roll dimension. It does not state a height and this card does not claim one',
      'Twice the roll length of the two above, at a heavier gauge and a wider aperture',
    ],
  },
];

const tocItems = [
  { id: 'no-products', title: 'What Was Checked, and What Is Named Here' },
  { id: 'what', title: 'What the Sources Describe' },
  { id: 'attractants', title: 'Attractants: Where the Sources Put the Cause' },
  { id: 'hazing', title: 'Hazing: a Live Disagreement' },
  { id: 'exclusion', title: 'Exclusion: the Specification, to the Inch' },
  { id: 'pets', title: 'Pets and Personal Safety' },
  { id: 'attacks', title: 'Attack Risk, and How Old the Numbers Are' },
  { id: 'rabies', title: 'Bites, Scratches and Rabies' },
  { id: 'legal', title: 'The Legal Frame, and a Dating Problem' },
  { id: 'removal', title: 'Removal, and Who Does It' },
  { id: 'not-work', title: 'What the Sources Say Does Not Work' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const faqs: Faq[] = [
  {
    question: 'Which parts of the fence specification can actually be bought?',
    answer:
      'Two of the four, on the evidence of a listing check run on 2026-08-27. Rollers: three listings state the mechanism UC IPM describes in their own text, and they are carded. Fence mesh: three listings state a mesh aperture inside UC IPM\u2019s 6-inch limit, and they are carded on that basis; none of them states a height in its own text, so the 5 1/2 foot minimum is given here as an instruction to whoever builds the fence rather than as a property of any product. The buried apron: one product publishes its ground coverage and the figure is below what UC IPM asks for, so nothing is carded. The outward overhang: the retail class exists, but it is built to keep animals in rather than out, and no listing read states which way it faces, so nothing is carded there either.',
  },
  {
    question: 'What fence does UC IPM actually specify?',
    answer:
      'Four figures in four consecutive sentences, all of them conditions of one design rather than separate options. Height a minimum of 5 1/2 feet, built higher on sloping terrain. Net wire-mesh no larger than 6 inches between stays. A galvanized wire-mesh apron attached to the bottom of the fence, buried 4 to 6 inches below the soil and extending outward at least 15 inches. UC IPM then offers two ways to add to that fence: a wire-mesh overhang of at least 18 inches slanted outward, or roller-type devices on top of the fence. Both are described as an extra degree of protection on a fence that already meets the first three figures, not as things you fit instead of them.',
  },
  {
    question: 'Does hazing work?',
    answer:
      'The sources disagree, and this page gives both rather than picking one. UC IPM, in a page whose text is dated 2007, says sound and visual deterrent devices provide only temporary effectiveness if any, that coyotes quickly adapt or habituate to them, and that they are impractical for use in suburban areas; the same source nonetheless tells suburban residents who see a coyote to act aggressively towards it to reinforce its fear of people. A 2025 peer-reviewed study of community-based hazing in Edmonton found coyotes retreated immediately from 96 percent of hazing events, and in the same paper found no evidence that hazing changed subsequent measures of coyote reaction or flight initiation distance, which the authors attribute in part to how rarely it was implemented. Both are set out below with their dates.',
  },
  {
    question: 'Can I trap a coyote myself?',
    answer:
      'That depends entirely on the state, and this page carries two states rather than a general rule. UC IPM states, in text dated 2007, that since a November 1998 state ballot initiative leghold traps cannot be used to capture coyotes in California except where a human health and safety emergency has been declared by designated officials or in selected situations where an endangered species is threatened by predation. Colorado State University Extension, in a 2018 publication citing Statute 33-6-107(9) and Wildlife Commission Regulations, states that where wildlife is causing damage a person may take listed wildlife including coyotes on their own land without a licence, and that if trapping the only types of traps that may be used are live cage or box traps. A rule written for one state is not advice for another. Neither is presented here as national.',
  },
  {
    question: 'Can a trapped coyote be relocated?',
    answer:
      'The two sources we read both say no, and each is speaking about its own state. UC IPM states, in text dated 2007, that captured coyotes must be destroyed, that relocating problem coyotes would incur unacceptable liability and risk on the part of the agency involved, and that relocation is illegal without prior approval of what that source calls the California Department of Fish and Game. Colorado State University Extension states that small game and furbearers captured in live traps cannot be moved from the capture site and must be killed or released on site when the trap is checked, and that relocating any species other than tree squirrels, cottontail rabbits and raccoons requires a Relocation Permit from CPW.',
  },
  {
    question: 'Who should I call?',
    answer:
      'The destinations UC IPM names are agencies rather than pest control companies. It directs readers to the county agricultural commissioner, the county Cooperative Extension office and USDA Wildlife Services, and notes that private nuisance wildlife control firms also operate in some areas. It says aggression or an attack should be reported to local authorities including animal control and the state wildlife agency, and that livestock attacks should be reported to the county agricultural commissioner.',
  },
];

const sources: Source[] = [
  {
    label:
      'Pest Notes: Coyote, UC ANR Publication 74135 — the source of the exclusion specification, the attractant material, the hazing position, the attack figures, the rabies material, the California legal statements and the removal and agency material. The page carries a publication date of 25 January 2022 and an update stamp reading 03/2007; its text refers throughout to the California Department of Fish and Game, an agency renamed in 2013',
    publisher: 'UC Statewide IPM Program',
    date: 'Text stamped March 2007; page published 25 January 2022; re-fetched and quotations re-checked against the source 26 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/coyote/',
  },
  {
    label:
      'Urban coyotes were observed rarely and retreated consistently from assertive approaches by volunteers in neighborhoods — the source of the Edmonton hazing figures, of the null result on subsequent measures, and of the statement that attacks on people remain rare',
    publisher: 'PLOS, via PubMed Central PMC12002461 (peer-reviewed)',
    date: 'Published 16 April 2025; accessed 26 August 2026',
    href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12002461/',
  },
  {
    label:
      'Nuisance Wildlife Laws in Colorado — the source of every Colorado statement, including the damage condition, the live-trap-only rule and the relocation permit requirement',
    publisher: 'Colorado State University Extension, Boulder County',
    date: 'Updated 6 March 2018; accessed 26 August 2026',
    href: 'https://boulder.extension.colostate.edu/wp-content/uploads/sites/7/2020/01/NuisanceWildlife.pdf',
  },
  {
    label:
      'Trapping Coyotes in the Urban Landscape — the source of the definition of hazing, of the nocturnal and dietary description, and of the Southern California collaring study whose results are not reported here',
    publisher:
      'University of California Cooperative Extension, San Diego County, describing work by Niamh Quinn, UC ANR Human-Wildlife Interactions Advisor',
    date: 'Undated on the page; cites a 2019 study; accessed 26 August 2026',
    href: 'https://ucanr.edu/county-office/san-diego-county/trapping-coyotes-urban-landscape',
  },
];

export default function CoyotesPage() {
  return (
    <UsPageLayout
      title="Coyotes"
      subtitle="The extension sources specify a coyote-resistant fence to the inch, disagree openly about whether hazing achieves anything lasting, and hand the removal half to agencies rather than to a householder. This page carries all three, with the dates the sources themselves carry, and it names the products whose own text carries the parts of that specification a seller actually states."
      lastUpdated="August 2026"
      readingTime="18 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={COYOTE_HOME}
      clusterNav={COYOTE_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the coyote as university extension services describe it: an animal that
        was elusive, has adapted to residential neighbourhoods in some places, and is now the
        subject of a body of published advice that is unusually precise in one half and unusually
        cautious in the other.
      </p>

      <h2 id="no-products">What Was Checked, and What Is Named Here</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          The exclusion specification below gives four things a product could be measured against.
          On 2026-08-27 we read eight listings to see which of them a seller actually states.
        </p>
        <p className="mt-3 mb-0 text-base text-blue-900">
          <strong>Two of the four produced something to name.</strong> Three roller listings state
          the mechanism UC IPM describes, in their own words, and three fence-mesh listings state an
          aperture inside its limit. Those six are named further down.{' '}
          <strong>Two produced nothing, for two different reasons.</strong> The one buried-apron
          product publishes its own ground-coverage figure and that figure is smaller than UC IPM
          asks for. The outward overhang is a class that exists in retail but is built for the
          opposite job, and no listing we read states the one thing the criterion turns on. Both are
          set out where they belong rather than left as a silence.
        </p>
      </div>
      <p>
        <strong>
          One figure in that specification is not something any product can carry, and it is worth
          separating before the cards appear.
        </strong>{' '}
        UC IPM&rsquo;s minimum fence height of 5 1/2 feet is an instruction to whoever builds the
        fence. It is not a property of a roll of wire, and no product below is described here as
        meeting it.
      </p>

      <h2 id="what">What the Sources Describe</h2>
      <p>
        UC IPM opens on the normal case:{' '}
        <em>
          &ldquo;Normally, coyotes are elusive animals that avoid contact with humans. Most active
          after dusk and before daylight, they are typically seen only at a distance.&rdquo;
        </em>{' '}
        It then describes the change that produces the problem:{' '}
        <em>
          &ldquo;Within urban and suburban areas in California, however, some coyotes have adapted
          to residential neighborhoods, parks, and open spaces, and seemingly have lost their fear
          of humans.&rdquo;
        </em>{' '}
        and adds that{' '}
        <em>
          &ldquo;Suburban coyotes can reach densities far greater than they do on rangeland or
          undeveloped wildlands.&rdquo;
        </em>
      </p>
      <p>
        UC Cooperative Extension in San Diego County describes the animal as primarily nocturnal and
        omnivorous, calls them <em>&ldquo;not picky eaters&rdquo;</em>, and notes they have been
        known to attack and eat domestic animals, especially cats.
      </p>

      <h2 id="attractants">Attractants: Where the Sources Put the Cause</h2>
      <p>
        <strong>
          UC IPM does not treat the loss of fear as something that happens on its own. It names a
          cause, and the sentence is the spine of its whole page:
        </strong>{' '}
        <em>
          &ldquo;Never intentionally feed or provide water to coyotes, as this causes them to
          quickly lose their fear of people and become aggressive.&rdquo;
        </em>
      </p>
      <p>
        Everything the same source says about exclusion, hazing and removal sits downstream of that
        sentence. It is worth reading before the parts of this page that involve buying or building
        anything.
      </p>

      <h2 id="hazing">Hazing: a Live Disagreement</h2>
      <p>
        <strong>
          Two sources, nineteen years apart, and this page does not pick between them.
        </strong>
      </p>
      <p>
        UC Cooperative Extension in San Diego County defines the term plainly:{' '}
        <em>&ldquo;Hazing is pretty much what it sounds like&rdquo;</em> &mdash; shouting, arm
        waving and noise-making directed at coyotes to change their behaviour.
      </p>
      <h3>The 2007 position: devices habituate, and are impractical in suburbs</h3>
      <p>
        <strong>UC IPM, in text stamped March 2007:</strong>{' '}
        <em>
          &ldquo;Using sound or visual stimuli to keep coyotes away from livestock or other
          resources will provide only temporary effectiveness, if any.&rdquo;
        </em>{' '}
        The same source states that{' '}
        <em>
          &ldquo;In the absence of any real threat, coyotes quickly adapt or habituate to sounds,
          flashing lights, propane cannons, scarecrows, and so on.&rdquo;
        </em>{' '}
        It reports that a strobe-siren device developed for sheep flocks{' '}
        <em>
          &ldquo;was effective only for several weeks to a few months at most locations where it was
          tested&rdquo;
        </em>
        , and concludes:{' '}
        <em>
          &ldquo;Because of the disturbance such devices cause, they are impractical for use in
          suburban areas.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          The same 2007 source nonetheless recommends hazing by people rather than by devices:
        </strong>{' '}
        <em>
          &ldquo;Suburban residents who see a coyote in their neighborhood should attempt to
          frighten it away by shouting, throwing rocks, squirting it with a water hose, blowing
          portable air horns, or otherwise acting aggressively in order to reinforce its fear of
          people.&rdquo;
        </em>
      </p>
      <h3>The 2025 study: retreat observed, durable change not observed</h3>
      <p>
        A peer-reviewed study published in April 2025 followed community-based hazing in Edmonton by
        120 trained volunteers over 1,598 patrols. It reports:{' '}
        <em>
          &ldquo;Coyotes retreated before volunteers were within 40 m during 124 (71%) of the
          observations and retreated immediately from 22 (96%) of the hazing events.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Those two percentages measure different things and are not one statistic.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          The 71 percent is retreat <em>before an approach closed to 40 metres</em>, across 175
          observations. The 96 percent is immediate retreat <em>from an actual hazing event</em>,
          and it rests on <strong>23 events</strong>. Different denominators, different behaviours,
          and the larger-sounding figure is the one built on the smaller number. They are given
          here separately for that reason.
        </p>
      </div>
      <p>
        <strong>The paper&rsquo;s own null result is the part that bears on the disagreement:</strong>{' '}
        <em>
          &ldquo;We found no evidence that hazing changed subsequent measures of overt reaction or
          flight initiation distances by coyotes&rdquo;
        </em>{' '}
        &mdash; which the authors attribute in part to how rarely it was implemented. Their
        conclusion is carefully qualified:{' '}
        <em>
          &ldquo;Our study supports the use of community-based hazing to reassure members of the
          public while potentially promoting wariness in coyotes.&rdquo;
        </em>
      </p>
      <p>
        <strong>These two sources are not simply opposed, and it is worth saying how.</strong> The
        2007 source is about devices; the 2025 study is about people. Both are sceptical that the
        effect lasts &mdash; one on principle, the other on its own measurements. Where they differ
        is on whether the practice is worth doing anyway. This page reports that difference and does
        not settle it.
      </p>
      <p>
        UC Cooperative Extension in San Diego County describes a parallel Southern California study
        &mdash; twenty GPS-collared coyotes, ten hazed and ten as controls, with a crossover after
        eighteen months. <strong>Its results are not in the material we read</strong>, so this page
        reports that the work exists and says nothing about what it found.
      </p>

      <h2 id="exclusion">Exclusion: the Specification, to the Inch</h2>
      <p>
        This is the most precisely specified thing in any source consulted for this page. UC IPM
        gives it as one design with a stated limitation attached, and the limitation comes first in
        its own text:{' '}
        <em>
          &ldquo;While it is expensive and difficult to construct a completely coyote-proof fence, a
          fence that discourages coyotes will have the following design characteristics.&rdquo;
        </em>
      </p>
      <p>
        <strong>Height.</strong>{' '}
        <em>
          &ldquo;Fence height should be a minimum of 5 1/2 feet and should be built higher on
          sloping terrain.&rdquo;
        </em>
      </p>
      <p>
        <strong>Mesh aperture.</strong>{' '}
        <em>&ldquo;Net wire-mesh should be no larger than 6 inches between stays.&rdquo;</em>
      </p>
      <p>
        <strong>The buried apron.</strong>{' '}
        <em>
          &ldquo;To deter digging under, bury a galvanized wire-mesh apron, attached securely to the
          bottom of the fence, 4 to 6 inches below the soil and extending outward at least 15
          inches.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          The burial depth is an instruction to whoever installs the fence, not a property of
          anything sold.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-900">
          &ldquo;4 to 6 inches below the soil&rdquo; describes how deep to dig. No roll of mesh can
          state it, and no product should ever be judged on whether it does. The figures that
          describe a <em>product</em> are the mesh aperture, the height, and the apron&rsquo;s
          width. The depth describes the work.
        </p>
      </div>
      <h3 id="mesh-products">The mesh figure, and what sellers state</h3>
      <p>
        Of the four figures above, <strong>the mesh aperture is the one retail listings state
        plainly.</strong> All three rolls below give it in their own text, and all three are inside
        UC IPM&rsquo;s limit of no larger than 6 inches.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Two 6-figures appear near these products and they are not the same measurement.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          UC IPM&rsquo;s <strong>5 1/2 feet</strong> is the height of an erected fence, measured
          from the ground up. The <strong>6 ft</strong> in a listing like &ldquo;6 ft x 50 ft&rdquo;
          is <strong>the width of a roll of wire as it is sold</strong>. One is a specification for
          a finished structure; the other is a dimension of goods on a pallet.{' '}
          <strong>
            None of the three listings below uses the word height, tall or high of its 6 ft figure
          </strong>
          , and this page does not translate one into the other on their behalf. Whether a roll of a
          given width yields a fence of a given height depends on how it is set, how much is turned
          into the apron, and the ground it stands on &mdash; and that is the builder&rsquo;s
          arithmetic, not the seller&rsquo;s claim.
        </p>
      </div>
      <p>
        The three rolls are in no order of preference and none is called better than another,
        because no source consulted for this page compares one product against another. What each
        entry records is which part of the specification the seller states, and which it does not.
      </p>
      {products
        .filter((p) => p.group === 'fencing')
        .map((p) => (
          <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
        ))}

      <h3 id="apron-products">The buried apron: nothing is named, and the number is the reason</h3>
      <p>
        UC IPM asks for an apron <strong>extending outward at least 15 inches</strong>. One product
        we read is built for exactly that job &mdash; its own description calls it a physical
        barrier of galvanized welded wire on the ground leading up to the fence &mdash; and it
        publishes what it achieves:
      </p>
      <p>
        <strong>
          Its own text states the kit allows for 8 to 12 inches of coverage on the ground.
        </strong>{' '}
        Against a specification of at least 15 inches, that is short, and{' '}
        <strong>the seller is the one supplying the number.</strong> So nothing is named for this
        class. That is a finding about a published figure rather than a doubt about a product, and
        it is the cleanest kind of result this method produces: the criterion was answerable, and
        the answer was no.
      </p>
      <p>
        The same description mentions a larger version of the same system with a greater ground
        coverage, which would clear the 15 inches. <strong>We have not read that listing</strong>,
        and this page names products it has read. It is recorded as something to check rather than
        as something to buy.
      </p>

      <h3>Rollers and overhangs: additions to that fence, not alternatives to it</h3>
      <p>
        UC IPM gives both in a single sentence, and the opening words govern everything after them:
      </p>
      <p>
        <em>
          &ldquo;An extra degree of protection against coyotes scaling a fence can be obtained by
          installing a wire-mesh overhang of at least 18 inches, slanted outward, or roller-type
          devices designed to be attached to the top of a fence, which prevent coyotes from getting
          a foothold in their attempts to climb or jump over.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          Read as the source writes it, neither the overhang nor the roller is a measure you take
          instead of the height, the mesh and the apron.
        </strong>{' '}
        Both are <em>an extra degree of protection</em> added to a fence that already has those
        three. A roller fitted to a four-foot fence with an eight-inch mesh and no apron is not what
        this sentence describes, and this page will not present it as though it were.
      </p>

      <h4>Rollers: three listings state the mechanism</h4>
      <p>
        Two of the three are the same kit in two fence-type fitments and are named here as one
        product, with both fitments identified so a reader picks the one matching their fence. The
        third is a different manufacturer and a different length.
      </p>
      {products
        .filter((p) => p.group === 'roller')
        .map((p) => (
          <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
        ))}

      <h4 id="overhang-finding">
        The outward overhang: a class that exists, and nothing named in it
      </h4>
      <p>
        <strong>
          This is the one place where what is sold and what the source specifies come apart, and it
          is worth setting out rather than passing over.
        </strong>
      </p>
      <p>
        UC IPM asks for a wire-mesh overhang of at least 18 inches{' '}
        <strong>slanted outward</strong>. Outward matters: the point of the angle is to defeat an
        animal climbing <em>in</em> from the far side.
      </p>
      <p>
        There is a healthy retail category of fence-top extension arms with mesh, and several
        listings state an outreach figure comfortably past 18 inches.{' '}
        <strong>Almost all of them are containment toppers.</strong> They are sold to stop a cat or
        a dog getting <em>out</em>, and the arm therefore turns back over the owner&rsquo;s own
        garden. A stated outreach of twenty-four inches is a real measurement of a real arm; it says
        nothing whatever about which side of the fence that arm leans over.
      </p>
      <p>
        <strong>
          A figure that matches half a criterion does not satisfy it. The direction is not a detail
          attached to the specification &mdash; it is the part that does the work
        </strong>
        , and no listing we read states it. So nothing is named for this class, the criterion stands
        as UC IPM writes it, and no product is faulted by name for being built to do a different
        job perfectly well.
      </p>
      <p>
        UC IPM closes the section with a caveat that belongs with every figure above it:{' '}
        <em>
          &ldquo;In general, truly coyote-proof fences are so expensive to build and maintain that
          they are economically viable only to protect very valuable commodities.&rdquo;
        </em>{' '}
        That is the source&rsquo;s own assessment of its own specification, and it is not softened
        here.
      </p>
      <p>
        On electric fencing, UC IPM says designs of various kinds have been effective in excluding
        coyotes and that retrofitting existing fences with electrified wires may add effectiveness,
        then adds:{' '}
        <em>
          &ldquo;Additionally, electrical fencing may be inappropriate for use or illegal in
          residential or suburban areas.&rdquo;
        </em>{' '}
        Since residential and suburban readers are most of this page&rsquo;s audience, that caveat
        is given here rather than the recommendation it qualifies.
      </p>

      <h2 id="pets">Pets and Personal Safety</h2>
      <p>
        UC IPM records something that bears directly on how much protection a large dog is assumed
        to have:{' '}
        <em>
          &ldquo;In suburban areas, there have been instances of groups of coyotes attacking large
          dogs such as Labrador retrievers, even in the presence of their owners.&rdquo;
        </em>
      </p>
      <p>
        On guard animals it gives a qualified positive: certain guard dog breeds, llamas and donkeys
        may exclude coyotes from pastures and are most effective when bonded to the stock, and then{' '}
        <em>
          &ldquo;there are occasions when guard animals are of limited effectiveness, and multiple
          coyotes or mountain lions may even attack guard animals.&rdquo;
        </em>
      </p>
      <p>
        UC Cooperative Extension in San Diego County reports a dated figure on pet predation:{' '}
        <em>&ldquo;In a 2019 study, cats were found in 19.8% of coyote scat.&rdquo;</em>{' '}
        <strong>One study, one year, one region</strong>, and it is given with those limits attached.
      </p>

      <h2 id="attacks">Attack Risk, and How Old the Numbers Are</h2>
      <p>
        <strong>
          Both figures below come from a source whose text is stamped March 2007. They are reported,
          not assessed here, and neither is a current count.
        </strong>
      </p>
      <p>
        UC IPM, in text stamped 2007:{' '}
        <em>
          &ldquo;More than 160 such attacks have occurred in California since the 1970s, and they
          are becoming more frequent, particularly in suburban areas of Southern California.&rdquo;
        </em>{' '}
        And:{' '}
        <em>
          &ldquo;While only one attack has been fatal (to a 3-year-old girl, attacked in her front
          yard in 1981), a number of attacks have resulted in serious injuries.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          A nineteen-year-old total, of something the same sentence says was becoming more frequent,
          is not a figure for today.
        </strong>{' '}
        We could not reach a state agency source to find a current one. What that number supports is
        that attacks have happened and have injured people; it does not support any statement about
        how many there have been by now.
      </p>
      <p>
        UC IPM also publishes a staged behavioural progression &mdash; it describes{' '}
        <em>
          &ldquo;a predictable pattern of change in coyote behavior in these environments&rdquo;
        </em>{' '}
        set out as a table. <strong>That table is a graded risk-assessment ladder and it is named
        here rather than reproduced.</strong> What this page will report from it is the source&rsquo;s
        own threshold: the stage at which pets are attacked is where UC IPM says area-wide action is
        recommended.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          A separate statement about rarity exists, and it is deliberately not placed beside the
          figures above.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          The 2025 Edmonton study states that{' '}
          <em>&ldquo;Although coyote attacks on people remain rare&rdquo;</em>, and its abstract
          emphasises the rarity of close encounters and the high frequency with which coyotes
          retreat from human approaches. <strong>That is not a counter-figure to the one above.</strong>{' '}
          UC IPM&rsquo;s is a cumulative count of attacks in one US state since the 1970s; the
          study&rsquo;s is about rates of close encounter in one Canadian city over two field
          seasons. They measure different things, over different places and different periods, and
          putting them side by side as though one answered the other would misrepresent both.
        </p>
      </div>

      <h2 id="rabies">Bites, Scratches and Rabies</h2>
      <p>
        UC IPM gives one complete instruction, and it is quoted here in full rather than summarised:{' '}
        <em>
          &ldquo;If you are bitten or scratched by a coyote, wash the affected area thoroughly with
          soap and water and then seek immediate medical attention.&rdquo;
        </em>
      </p>
      <p>
        On the risk itself:{' '}
        <em>
          &ldquo;Although most problem coyotes are healthy, the risk of rabies is always
          present.&rdquo;
        </em>{' '}
        The same source describes transmission by bite or scrape, and by handling a pet after an
        attack where saliva contacts broken skin or mucous membranes.
      </p>
      <p>
        <strong>
          UC IPM goes on to describe what medical authorities typically recommend after contact with
          a wild coyote during an attack. That material is clinical, and this page names it rather
          than repeating it.
        </strong>{' '}
        What we will report is that UC IPM addresses post-exposure immunisation and attributes the
        recommendation to medical authorities. <strong>What treatment is appropriate, and when, is a
        matter for a clinician and not for this page.</strong> The instruction above &mdash; wash the
        area, seek immediate medical attention &mdash; is the source&rsquo;s own and is complete as
        it stands; nothing has been added to it.
      </p>
      <p>
        On pets, UC IPM says to{' '}
        <em>
          &ldquo;vaccinate all pets for rabies, distemper, parvovirus, and other diseases, as
          recommended by a veterinarian&rdquo;
        </em>
        . On reporting, it says aggression or an attack should be reported to local authorities
        including animal control and the state wildlife agency, and livestock attacks to the county
        agricultural commissioner.
      </p>

      <h2 id="legal">The Legal Frame, and a Dating Problem</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          Read this before any legal statement below it.
        </p>
        <p className="mt-3 mb-0 text-base text-red-900">
          Every California legal statement on this page comes from one source whose text carries an
          update stamp of <strong>March 2007</strong> and which refers throughout to the{' '}
          <strong>California Department of Fish and Game</strong>, an agency renamed in 2013.{' '}
          <strong>
            We tried to reach a California state wildlife agency page to check whether these
            positions still hold, and could not: three separate attempts timed out without returning
            anything.
          </strong>{' '}
          So there is one source, it is nineteen years old, and there is nothing set against it.
          Each sentence below therefore carries its date and its attribution, and none of it is
          offered as a statement of current law.
        </p>
      </div>
      <h3>What UC IPM stated in 2007, about California</h3>
      <p>
        <strong>
          UC IPM, in text stamped March 2007, referring to the California Department of Fish and
          Game:
        </strong>{' '}
        <em>
          &ldquo;Coyotes have no special protection in California and may be killed by any method
          that is not prohibited by federal, state, or local statutes.&rdquo;
        </em>
      </p>
      <p>
        <strong>UC IPM, in text stamped March 2007, on leghold traps in California:</strong>{' '}
        <em>
          &ldquo;Since the passage of a state ballot initiative measure in November 1998, leghold
          traps cannot be used to capture coyotes except in situations where a human health and
          safety emergency has been declared by designated officials, or in selected situations
          where the existence of an endangered species is threatened by predation.&rdquo;
        </em>
      </p>
      <p>
        <strong>UC IPM, in text stamped March 2007, on toxicants in California:</strong>{' '}
        <em>
          &ldquo;Toxicants or poisons used to control coyotes are illegal, with the exception of
          fumigant cartridges available only to predator control specialists to asphyxiate coyote
          pups in their dens.&rdquo;
        </em>{' '}
        <strong>
          The closing words are part of the exception rather than a detail after it: as that source
          states it, the exception covers one purpose, not general professional use.
        </strong>
      </p>
      <p>
        <strong>UC IPM, in text stamped March 2007, on repellents:</strong>{' '}
        <em>
          &ldquo;No chemical repellents are registered for use in repelling coyotes from property or
          from livestock.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          UC IPM, in text stamped March 2007, on relocation, and naming the California Department of
          Fish and Game:
        </strong>{' '}
        <em>
          &ldquo;Captured coyotes must be destroyed, as relocating problem coyotes would incur
          unacceptable liability and risk on the part of the agency involved, and relocation is
          illegal without prior approval of the California Department of Fish &amp; Game.&rdquo;
        </em>
      </p>
      <h3>Colorado is a different state with a different rule</h3>
      <p>
        <strong>
          A recommendation written for one state is not advice for another, and this page keeps them
          apart rather than averaging them.
        </strong>{' '}
        Everything in this subsection is Colorado&rsquo;s and applies to Colorado.
      </p>
      <p>
        Colorado State University Extension, in a publication updated 6 March 2018 citing Statute
        33-6-107(9) and Wildlife Commission Regulations, states that where wildlife is causing
        damage to crops, real or personal property or livestock,{' '}
        <em>
          &ldquo;a person (or any employee or agent of the landowner) may hunt, trap, or take the
          following wildlife on lands owned or leased by the person without securing a license to do
          so&rdquo;
        </em>{' '}
        &mdash; and coyotes are named in that list.
      </p>
      <p>
        On method, the same 2018 source is explicit:{' '}
        <em>
          &ldquo;If trapping, the ONLY types of traps that may be used are LIVE (cage or box
          traps).&rdquo;
        </em>{' '}
        On relocation:{' '}
        <em>
          &ldquo;Small game and furbearers captured in live traps cannot be moved from the capture
          site and must be killed or released on site when the trap is checked.&rdquo;
        </em>{' '}
        It records that tree squirrels, cottontail rabbits and raccoons may be relocated without a
        permit under stated conditions, and that{' '}
        <em>
          &ldquo;If you want to relocate any other species, you must first obtain a Relocation
          Permit from CPW.&rdquo;
        </em>
      </p>
      <p>
        <strong>Two states, two rules, and neither is a national rule.</strong> California&rsquo;s
        2007 source describes professionals using padded leghold traps and snares with leghold traps
        barred to the public since 1998; Colorado&rsquo;s 2018 source says a landowner may take a
        coyote causing damage without a licence but may use live cage or box traps only. This page
        has read two states. It has not read the other forty-eight and says nothing about them.
      </p>
      <h3>A tension between two texts, recorded and not resolved</h3>
      <p>
        Our{' '}
        <a href="/us/california-trapping-rules">California trapping rules page</a> quotes Title 14
        section 465.5(e): it is unlawful for <strong>any person</strong> to use a steel-jawed
        leg-hold trap, padded or otherwise, to capture a nongame mammal, with an exception only for
        government employees or their duly authorised agents in an extraordinary case.
      </p>
      <p>
        <strong>
          UC IPM, in text stamped March 2007, states that urban coyote removal is done by
          professionals who capture them in &ldquo;padded leghold traps or snares&rdquo;.
        </strong>
      </p>
      <p>
        <strong>
          Both texts are set out here and neither is adjusted to fit the other.
        </strong>{' '}
        Whether a particular professional falls inside the exception in section 465.5(e) is a
        question about a licensing regime, and answering it would mean reading statutes this page
        has not read. Our California trapping rules page also records that section 465.5 itself
        contains no provision on relocation or transport, and warns in its own words that this is
        not a statement that moving an animal is lawful. The same caution applies to the relocation
        sentence quoted above: it is UC IPM&rsquo;s statement, dated 2007, and it is not statute.
      </p>

      <h2 id="removal">Removal, and Who Does It</h2>
      <p>
        <strong>This is the half of the subject that the sources do not give to a householder.</strong>
      </p>
      <p>
        UC IPM:{' '}
        <em>
          &ldquo;Typically, coyote removal in urban or suburban areas is conducted by predator
          control professionals who shoot coyotes or capture them in padded leghold traps or
          snares.&rdquo;
        </em>{' '}
        And:{' '}
        <em>
          &ldquo;Professional assistance is usually required to remove the responsible coyotes as
          selectively and as efficiently as possible.&rdquo;
        </em>{' '}
        And the sentence that settles the shape of this page:{' '}
        <em>
          &ldquo;They can also use certain tools and methods that are not generally available to the
          public.&rdquo;
        </em>
      </p>
      <h3>Does removal work? The same source states both halves, one after the other</h3>
      <p>
        <em>
          &ldquo;Management experience has shown that removal of only a few problem coyotes from a
          population will reinstill fear of humans in the remaining population, often solving coyote
          problems in that locality for months or even years.&rdquo;
        </em>
      </p>
      <p>
        <em>
          &ldquo;Because other coyotes quickly move in to occupy vacant territories, removal of
          several animals has no long-term impact on coyote numbers.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          Those two sentences are consecutive in the source, and they are given together here for
          that reason.
        </strong>{' '}
        The first is about behaviour in one locality; the second is about population numbers. They
        are routinely quoted against each other as though one refuted the other. This page renders
        both, says what each is measuring, and leaves the source&rsquo;s own framing intact.
      </p>
      <h3>Who the sources tell a reader to contact</h3>
      <p>
        The destinations UC IPM names are <strong>agencies rather than pest control companies</strong>
        : the <strong>county agricultural commissioner</strong>, the{' '}
        <strong>county Cooperative Extension office</strong>, and{' '}
        <strong>USDA Wildlife Services</strong> by telephone and website. It notes that private
        nuisance wildlife control firms also operate in some areas. For reporting, it names local
        authorities including animal control and the <strong>state wildlife agency</strong> for
        aggression or an attack, and the county agricultural commissioner for livestock attacks.
      </p>
      <p>
        <strong>Those are the destinations this page passes on, in the sources&rsquo; own terms.</strong>{' '}
        We attempted to read USDA&rsquo;s own published material on predator damage management and
        could not: the requests failed at the transport level on every attempt across three separate
        rounds. <strong>Nothing on this page is drawn from USDA material</strong>, because we did
        not manage to read any. The agency is named here because UC IPM names it, not because we
        have read what it says.
      </p>

      <h2 id="not-work">What the Sources Say Does Not Work</h2>
      <p>
        <strong>Chemical repellents.</strong> UC IPM, in text stamped March 2007:{' '}
        <em>
          &ldquo;No chemical repellents are registered for use in repelling coyotes from property or
          from livestock.&rdquo;
        </em>
      </p>
      <p>
        <strong>Sound and visual deterrent devices.</strong> The quotations are in the hazing
        section above. It is worth being precise about what that source claims:{' '}
        <strong>
          it does not say such devices never work. It says the effect is temporary, and that the
          disturbance makes them impractical in suburban areas.
        </strong>
      </p>
      <p>
        <strong>Strobe-siren devices, propane cannons and scarecrows</strong> are named in the same
        passage as things coyotes adapt to in the absence of any real threat.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the four publications below. Where a
        source carries its own date, that date is given, and where a statement depends on it the date
        is repeated in the sentence itself.{' '}
        <strong>
          Three attempts to reach a California state wildlife agency page timed out, and every
          attempt to reach USDA material failed, so neither is cited here.
        </strong>
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
