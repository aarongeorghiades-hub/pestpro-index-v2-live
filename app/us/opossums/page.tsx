import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, AsOf, type Source } from '../components/UsSources';
import { OPOSSUM_NAV, OPOSSUM_HOME } from '../components/opossumNav';

const URL = 'https://pestproindex.com/us/opossums';
const TITLE = 'Opossums: Why They\'re Under the Deck';
const DESCRIPTION =
  'The Virginia opossum doesn\'t dig its own burrow, which changes what works. Hardware cloth specs, how to tell its damage from a skunk\'s or raccoon\'s, and disease notes.';

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
  datePublished: '2026-08-22',
  dateModified: '2026-08-22',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Opossums', item: 'https://pestproindex.com/us/opossums' },
    { '@type': 'ListItem', position: 2, name: 'Opossums', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'Did an opossum dig up my lawn?',
    answer:
      'On the evidence in these sources, almost certainly not. UF/IFAS Extension states plainly that opossums do not dig burrows, and instead take shelter in hollow logs, rockpiles, woodpiles, barns, abandoned buildings, burrows dug by gopher tortoises and other animals such as skunks, and even old squirrel nests. Nebraska Extension adds that while raccoons and opossums will climb or squeeze under or through a fence, they usually will avoid digging extensively to gain access. Nebraska Extension gives a digging signature for two other animals instead: skunks create precise cone-shaped depressions when digging, while raccoons will roll up or shred the sod in search of food. It gives no digging signature for the opossum, and neither does any other source read for this page.',
  },
  {
    question: 'How big is an opossum, really?',
    answer:
      'Two different measurements are in circulation and they are often mistaken for a disagreement. UF/IFAS Extension gives a body length of 14 to 19 inches with a tail length of 10 to 17 inches. The Missouri Department of Conservation and Kansas State University Extension both give a total length of 24 to 34 inches, which is the body and the tail together. Those figures are consistent with each other once you know which measurement each one means. On weight the sources genuinely differ: Kansas State University Extension and the Missouri Department of Conservation give 4 to 15 pounds, Alabama Cooperative Extension gives 4 to 13 pounds, Los Angeles County Department of Animal Care and Control gives 4 to 14 pounds, and Nebraska Extension says around 10 pounds. Separately, UF/IFAS Extension gives a national average of 6 pounds for males and 4 pounds for females, which is an average rather than a range and does not contradict the others.',
  },
  {
    question: 'How do I keep one out from under my deck?',
    answer:
      'With mesh, and with a check before you close the last hole. Nebraska Extension states that crawl spaces below sheds, porches and decks should be secured using 1 inch by half-inch galvanized hardware cloth, that the mesh should be buried at least 4 inches below the soil with a 12 to 18 inch skirt under the soil to discourage digging, and that preferred repair materials are 10-gauge quarter-inch wire mesh, aluminum flashing and solid half-inch wood or plywood. Los Angeles County Department of Animal Care and Control states that opossums can be excluded from buildings by covering foundation vents with slotted metal vent covers and by using quarter-inch grid screening to cover attic vents and chimneys. The same county agency states that before completing the final seal on the last entry point, it is wise to make sure no animals are trapped inside.',
  },
  {
    question: 'Do opossums carry rabies?',
    answer:
      'The sources say rarely, and one state health agency explains why it matters less than people expect. The Louisiana Department of Health states that animals including opossums are usually killed during an encounter with a rabid animal and therefore are not a source of infection. Los Angeles County Department of Animal Care and Control lists rabies among diseases opossums carry but marks it as rare. Alabama Cooperative Extension states that opossums have a remarkable resistance to many viruses and rarely contract rabies, and UF/IFAS Extension states that opossums are nearly immune to rabies. Where the sources part company is on the wider disease picture, and both sides are given on this page rather than only the reassuring one.',
  },
  {
    question: 'How many young does an opossum have?',
    answer:
      'Three sources give three different figures and none is preferred here. UF/IFAS Extension gives an average of 7 to 8 young per litter. Kansas State University Extension gives an average of nine, varying from five to 13. Nebraska Extension gives litters typically averaging 7 to 10 young but which can include up to 17. The sources also differ on how many litters a year: UF/IFAS Extension says usually one or two, Nebraska Extension says opossums mate twice a year, and Alabama Cooperative Extension says most females produce two litters in a year although some may produce three. What they agree on is that gestation is very short, given as 13 days by Alabama Cooperative Extension and UF/IFAS Extension and as 12 or 13 days by Kansas State University Extension and the Missouri Department of Conservation.',
  },
  {
    question: 'Does an opossum really play dead?',
    answer:
      'It does, and it is less common than its reputation. The Missouri Department of Conservation describes the behavior of playing dead as a defensive adaptation. UF/IFAS Extension states that opossums may play dead for up to four hours, and describes them lying stiff with their eyes open, drooling saliva from their open mouths. Alabama Cooperative Extension states that when threatened, opossums appear to go into a catatonic state, but also states that this method of defense is not the most common one practiced and that most often, when confronted with danger, opossums try to escape. Alabama Cooperative Extension adds that some opossums may gape and hiss rather than play dead, and Nebraska Extension states that when frightened they will often hunker down, baring their teeth in a menacing manner.',
  },
  {
    question: 'Is it a problem that I saw one during the day?',
    answer:
      'Not on its own. Alabama Cooperative Extension states that opossums are nocturnal, preferring to forage at night rather than in the daytime, and UF/IFAS Extension and Nebraska Extension both describe them as nocturnal. Alabama Cooperative Extension also states an exception in its own words: even in the northernmost part of their range, opossums can be found in winter searching for food during the warmest part of the day. The Missouri Department of Conservation adds that opossums are active in winter while raccoons are dormant or inactive. Nothing in the sources read for this page treats a daytime sighting as a sign of illness.',
  },
];

const sources: Source[] = [
  {
    label: 'Virginia Opossum: Our Only Native Marsupial',
    publisher: 'Alabama Cooperative Extension System (Mark D. Marable)',
    date: 'July 18, 2022. Accessed August 22, 2026',
    href: 'https://www.aces.edu/blog/topics/forestry-wildlife/virginia-opossum-our-only-native-marsupial/',
  },
  {
    label: 'Wildlife of Florida Factsheet: Virginia Opossum, WEC426',
    publisher: 'UF/IFAS Extension, University of Florida (Hance Ellington)',
    date: 'Accessed August 22, 2026',
    href: 'https://ask.ifas.ufl.edu/publication/uw471',
  },
  {
    label: 'Controlling Raccoon and Opossum Damage',
    publisher: 'Nebraska Extension, University of Nebraska–Lincoln',
    date: 'Accessed August 22, 2026',
    href: 'https://cms.unl.edu/ianr/extension/wildlife/sites/unl.edu.ianr.extension.wildlife/files/media/file/controlling-raccoon-opossum-damage.pdf',
  },
  {
    label: 'Opossum',
    publisher: 'Kansas State University Extension Wildlife Management',
    date: 'Accessed August 22, 2026',
    href: 'https://www.wildlife.k-state.edu/species/opossum/',
  },
  {
    label: 'Managing Opossum Damage (publication catalog entry)',
    publisher: 'Texas A&M AgriLife Extension Service',
    date: 'January 25, 2022. Accessed August 22, 2026',
    href: 'https://agrilifeextension.tamu.edu/asset-external/managing-opossum-damage/',
  },
  {
    label: 'Virginia Opossum field guide',
    publisher: 'Missouri Department of Conservation',
    date: 'Accessed August 22, 2026',
    href: 'https://mdc.mo.gov/discover-nature/field-guide/virginia-opossum',
  },
  {
    label: 'Managing Opossum Problems',
    publisher: 'Los Angeles County Department of Animal Care and Control',
    date: 'Accessed August 22, 2026',
    href: 'https://animalcare.lacounty.gov/wp-content/uploads/2024/12/029450_L_ELivingwithwildlife-Opossum2.3.15.pdf',
  },
  {
    label: 'Rabies summary',
    publisher: 'Louisiana Department of Health, Office of Public Health',
    date: 'June 2023. Accessed August 22, 2026',
    href: 'https://ldh.la.gov/assets/oph/Center-PHCH/Center-CH/infectious-epi/VetInfo/Rabies/RabiesSummary_6_2023_ab.pdf',
  },
  {
    label: 'Opossum, Pest Notes Publication 74123 (R. A. Baldwin), updated 10/2015',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 24 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/opossum/',
  },
  {
    label: 'Problems with Skunks & Opossums',
    publisher: 'Virginia Department of Wildlife Resources',
    date: 'Accessed 24 August 2026',
    href: 'https://dwr.virginia.gov/wildlife/nuisance/skunks-and-opossums/',
  },
  {
    label: 'Problem Wildlife in the Garden and Yard',
    publisher: 'National Pesticide Information Center, Oregon State University',
    date: 'Accessed August 22, 2026',
    href: 'https://npic.orst.edu/pest/wildyard.html',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'range', title: 'Range' },
  { id: 'when-active', title: 'When They Are Active' },
  { id: 'what-they-eat', title: 'What They Eat' },
  { id: 'shelter', title: 'They Do Not Dig' },
  { id: 'signs', title: 'Whose Damage Is It' },
  { id: 'exclusion', title: 'Control: Exclusion First' },
  { id: 'trapping', title: 'Control: Trapping' },
  { id: 'breeding', title: 'Breeding and Pouch Young' },
  { id: 'playing-dead', title: 'Playing Dead' },
  { id: 'disease', title: 'Disease' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function OpossumsPage() {
  return (
    <UsPageLayout
      title="Opossums"
      subtitle="Something has moved in under the deck, and something has been through the trash. Here is what university extension services and state agencies say about the animal, and the one fact about it that changes which remedies can possibly work."
      lastUpdated="August 2026"
      readingTime="10 min"
      tocItems={tocItems}
      homeHref={OPOSSUM_HOME}
      clusterNav={OPOSSUM_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        One fact about this animal decides most of what follows, so it goes first. UF/IFAS Extension
        states that <strong>opossums do not dig burrows</strong>. They take shelter in what is
        already there, which means an opossum under a deck got in through an opening that already
        existed, and closing that opening is the whole job.
      </p>
      <p>
        It also means that if your lawn has been dug up, the sources read for this page will not let
        us blame an opossum. Nebraska Extension gives a digging signature for two other animals and
        none for this one. That comparison is below.
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        Alabama Cooperative Extension states that the opossum is the only marsupial, meaning pouched
        mammal, native to the United States, and names it the Virginia opossum,{' '}
        <em>Didelphis virginiana</em>. UF/IFAS Extension describes it as the only marsupial north of
        Mexico and the only native marsupial in the continental United States, and the Missouri
        Department of Conservation calls it North America&rsquo;s only native marsupial. Nebraska
        Extension makes the point that matters for anyone who has just seen one: opossums are not
        rodents, but marsupials.
      </p>
      <p>
        <strong>On size, two different measurements are in circulation and they are not a
        disagreement.</strong> UF/IFAS Extension gives a <strong>body</strong> length of 14 to 19
        inches, with a tail length of 10 to 17 inches. The Missouri Department of Conservation and
        Kansas State University Extension both give a <strong>total</strong> length of 24 to 34
        inches, which is body and tail together. Read that way the figures agree.
      </p>
      <p>
        Weight is where the sources actually differ, and each figure is given here as its source
        states it. Kansas State University Extension and the Missouri Department of Conservation give
        4 to 15 pounds. Alabama Cooperative Extension gives 4 to 13 pounds. Los Angeles County
        Department of Animal Care and Control describes an animal about the size of a house cat at 4
        to 14 pounds, and Nebraska Extension says opossums grow to the size of housecats and weigh
        around 10 pounds. Separately, UF/IFAS Extension gives a national average of 6 pounds for
        males and 4 pounds for females, and notes a trend toward smaller individuals in southern
        populations. That is an average rather than a range, so it sits alongside the others rather
        than against them.
      </p>
      <p>
        Two more details from the sources. Alabama Cooperative Extension states that the opossum has
        about fifty teeth, more than most other mammals, and that it lives 1 to 3 years in the wild;
        UF/IFAS Extension gives the lifespan as 1 to 2 years in the wild and 3 to 4 years in
        captivity.
      </p>

      <h2 id="range">Range</h2>
      <p>
        <AsOf date="July 18, 2022">
          Alabama Cooperative Extension states that opossums are native to Central America and the
          southern United States, and have expanded their range northward over the past 100 years.
        </AsOf>{' '}
        UF/IFAS Extension states that they are continuing to expand their range north, and attributes
        it to a combination of climate change and human intervention, while noting the limit on it:
        opossums do not thrive in extremely cold or arid climates.
      </p>
      <p>
        Nebraska Extension gives the clearest worked example of that expansion in a single state.
        Before the arrival of European settlers, it states, opossums lived only in
        Nebraska&rsquo;s extreme southeastern corner; today they are common throughout eastern
        Nebraska, and in the Sandhills and Panhandle regions they are generally restricted to major
        waterways. The Missouri Department of Conservation describes them as abundant throughout that
        state and less abundant in the northwest and southeast regions.
      </p>
      <p>
        On the scale an individual animal uses, UF/IFAS Extension states that home ranges vary greatly
        and have been recorded as 10 to 350 acres, and Alabama Cooperative Extension states that
        opossums are solitary creatures but are not territorial and may have overlapping home ranges.
      </p>

      <h2 id="when-active">When They Are Active</h2>
      <p>
        Nocturnal is the rule. Alabama Cooperative Extension states that opossums are nocturnal,
        preferring to forage at night rather than in the daytime; UF/IFAS Extension describes them as
        nocturnal and solitary; Nebraska Extension states that raccoons and opossums are nocturnal.
      </p>
      <p>
        Alabama Cooperative Extension states the exception itself: even in the northernmost part of
        their range, opossums can be found in winter searching for food during the warmest part of
        the day. The Missouri Department of Conservation adds that opossums are active in winter,
        while raccoons are dormant or inactive. <strong>None of the sources read for this page treats
        a daytime sighting as a sign that anything is wrong with the animal.</strong>
      </p>

      <h2 id="what-they-eat">What They Eat</h2>
      <p>
        Alabama Cooperative Extension puts it simply: opossums are opportunists and will eat almost
        anything. It states that most of their diet consists of animal matter, such as eggs,
        crustaceans, reptiles, amphibians, birds, small mammals and carrion, and that insects in
        particular are a staple food. UF/IFAS Extension describes opportunistic omnivores whose diets
        consist of fruits, nuts, seeds, insects, worms, eggs, frogs, snakes, small mammals, carrion,
        human garbage and the occasional farm chicken. Nebraska Extension ranks it: opossums are
        omnivores, but prefer insects, carrion and fruit. The Missouri Department of Conservation
        states that they prefer animal matter, including many types of insects, and carrion.
      </p>
      <ul>
        <li>
          <strong>Fruit.</strong> Alabama Cooperative Extension names persimmons, apples, plums,
          blackberries, hackberries, wild grapes and nuts. The Missouri Department of Conservation
          adds that they eat fruits particularly in fall and early winter.
        </li>
        <li>
          <strong>What brings them to a house.</strong> Alabama Cooperative Extension states that in
          urban and suburban settings, opossums scavenge garbage and bird seeds. The Missouri
          Department of Conservation states that they scavenge food from unsecured garbage cans and
          pet food from bowls left outdoors.{' '}
          <AsOf date="January 25, 2022">
            Texas A&amp;M AgriLife Extension states that opossums are omnivores that can become a
            nuisance when they eat pet food, fruit on trees, pecans, seeds in bird feeders and
            garbage in trash cans.
          </AsOf>
        </li>
        <li>
          <strong>The other side of the ledger.</strong> The Missouri Department of Conservation
          states that opossums feed on many insects considered injurious by farmers, and Alabama
          Cooperative Extension describes their carrion feeding as acting as a cleanup crew. Alabama
          Cooperative Extension also addresses a common accusation directly, stating that predation
          on nests by opossums and other medium-sized mammals is not the cause of low game
          populations.
        </li>
      </ul>

      <h2 id="shelter">They Do Not Dig</h2>
      <p>
        This is the fact that separates an opossum problem from a skunk or a groundhog problem, and
        it is stated outright by the source.
      </p>
      <p>
        UF/IFAS Extension states that <strong>opossums do not dig burrows</strong>, and that instead
        they take shelter in hollow logs, rockpiles, woodpiles, barns, abandoned buildings, burrows
        dug by gopher tortoises and other animals such as skunks, and even old squirrel nests.
        Nebraska Extension describes the same behavior from the other direction: while raccoons and
        opossums will climb or squeeze under or through a fence, they usually will avoid digging
        extensively to gain access.
      </p>
      <p>
        Where that brings them into conflict with people is predictable. Alabama Cooperative Extension
        states that they sometimes attempt to den in attics or under porches, and lists attics,
        garages and crawl spaces as the access points to close. The Missouri Department of
        Conservation states that opossums prefer wooded areas mostly near streams, especially near
        farms, and Los Angeles County Department of Animal Care and Control states that they are
        found in many different habitats from woodlands to highly developed residential areas.
      </p>

      <h2 id="signs">Whose Damage Is It</h2>
      <p>
        Nebraska Extension states that signs found at the damage scene will help you identify the
        species causing damage, and gives the two contrasts that matter most.
      </p>
      <ul>
        <li>
          <strong>Digging.</strong> Nebraska Extension states that,{' '}
          <em>
            &ldquo;Unlike skunks, which create precise cone-shaped depressions when digging, raccoons
            will roll up or shred the sod in search of food.&rdquo;
          </em>{' '}
          It gives no digging signature for the opossum, which is consistent with the section above.
        </li>
        <li>
          <strong>Entry hole width.</strong> Nebraska Extension states that,{' '}
          <em>
            &ldquo;Opossums need an opening that is at least 3 inches wide, while raccoons need at
            least 4.&rdquo;
          </em>{' '}
          Both of those are Nebraska Extension&rsquo;s comparisons between animals, quoted as they
          wrote them.
        </li>
        <li>
          <strong>Timing does not separate them.</strong> Nebraska Extension asks whether the damage
          occurred at night and answers that both animals are nocturnal, so timing alone will not
          tell you which one it was.
        </li>
        <li>
          <strong>Droppings.</strong> Nebraska Extension states that raccoon and opossum feces will
          generally be cat-sized.
        </li>
        <li>
          <strong>Tracks.</strong> The Missouri Department of Conservation describes the hind foot as
          handlike, with a thumb sticking out at a right angle that does not leave a claw print.
        </li>
      </ul>
      <p>
        On how much damage to expect, Nebraska Extension states that opossums can damage lawns and
        gardens, scatter trash, invade buildings and injure livestock, and that indoor denning brings
        creating or enlarging entry holes and tearing insulation. Alabama Cooperative Extension is
        more measured about the usual case, stating that in these cases they usually are not a
        significant source of damage, and that they will occasionally take advantage of gardens and
        crops, particularly corn.
      </p>

      <h2 id="exclusion">Control: Exclusion First</h2>
      <p>
        Because they do not dig their own way in, closing the openings is the method the sources
        support most directly. <strong>The measured specifications and the check that has to precede
        the last one are in this section together.</strong>
      </p>
      <h3>Before you close the last hole</h3>
      <p>
        Los Angeles County Department of Animal Care and Control states that{' '}
        <strong>
          before completing the final seal on the last entry point, it is wise to make sure no
          animals are trapped inside
        </strong>
        . No source read for this page describes how to build a one-way door for an opossum, so none
        is described here.
      </p>
      <h3>The mesh, and how deep</h3>
      <ul>
        <li>
          <strong>Crawl spaces.</strong> Nebraska Extension states that crawl spaces below sheds,
          porches and decks should be secured using 1 inch by half-inch galvanized hardware cloth.
        </li>
        <li>
          <strong>Burial depth and skirt.</strong> Nebraska Extension states to bury the mesh at
          least 4 inches below the soil and create a 12 to 18 inch skirt under the soil to discourage
          digging.
        </li>
        <li>
          <strong>Repair materials.</strong> Nebraska Extension names 10-gauge quarter-inch wire
          mesh, aluminum flashing, and solid half-inch wood or plywood.
        </li>
        <li>
          <strong>Vents and chimneys.</strong> Los Angeles County Department of Animal Care and
          Control states that opossums can be excluded from buildings by covering foundation vents
          with slotted metal vent covers, and by using quarter-inch grid screening to cover attic
          vents and chimneys. It gives quarter-inch grid screening or solid metal flashing as the
          general answer.
        </li>
        <li>
          <strong>The whole list.</strong> Nebraska Extension states that homeowners should cap
          chimneys, keep structures in good repair, install mesh over vents, trench-screen decks,
          sheds and crawl spaces, and reduce potential food sources. Alabama Cooperative Extension
          states to close any access points to potential denning areas such as attics, garages and
          crawl spaces, and to remove any brushy areas or piles of wood and rocks around the yard.
        </li>
        <li>
          <strong>Fences.</strong> Nebraska Extension states that a single strand of electrical wire
          near the top of the fence protruding 3 inches outward on outrigger insulators will prevent
          access, and cautions that gardens and crops are more difficult to protect because of the
          climbing abilities of these two animals. It also states that{' '}
          <em>&ldquo;Raccoons, being stronger, are more difficult to exclude than opossums&rdquo;</em>,
          which is its comparison between the two animals, quoted as written.
        </li>
      </ul>
      <h3>Taking away the reasons to stay</h3>
      <ul>
        <li>
          Nebraska Extension states that trash cans, preferably metal, should have tight-fitting lids
          that remain attached even if tipped over. The National Pesticide Information Center states
          to keep garbage in a can with a tight-fitting lid that cannot be opened by animals.
        </li>
        <li>
          Los Angeles County Department of Animal Care and Control states that tight fitting lids
          should be kept on garbage cans, that pets should be fed during daylight hours with any
          leftovers removed immediately, that water bowls should be emptied or taken in at night, and
          that gardens should be frequently harvested and windfall fruit picked up.
        </li>
        <li>
          UF/IFAS Extension states it in one line: secure your garbage bins and do not leave pet food
          outside.
        </li>
      </ul>

      <h3>Hardware for closing the openings</h3>
      <p>
        <strong>
          These are examples of one thing: quarter-inch mesh hardware cloth. They are in no order of
          preference and none is called better than another, because no source read for this page
          compares one product against another.
        </strong>{' '}
        UC IPM states plainly what to close the gaps with: &ldquo;Close off all potential entrances
        or openings under the house, garden tool shed, mobile home, deck, etc. with 1/4&ndash;inch
        mesh hardware cloth.&rdquo; That quarter-inch figure is what every card below is selected
        against, and it is printed on each product&rsquo;s own listing.
      </p>
      <p>
        <strong>The sources do not give one set of numbers, and this page does not merge them.</strong>{' '}
        UC IPM gives quarter-inch mesh, and says to &ldquo;bury the hardware cloth up to 6
        inches.&rdquo; Nebraska Extension, quoted higher up this page, gives 1 inch by half-inch
        galvanized hardware cloth for crawl spaces, names 10-gauge quarter-inch wire mesh among its
        repair materials, and asks for the mesh to be buried at least 4 inches with a 12 to 18 inch
        skirt. Los Angeles County Department of Animal Care and Control gives quarter-inch grid
        screening for attic vents and chimneys. Two of the three converge on a quarter inch; the
        burial depths genuinely differ, and each figure is quoted with the source that published it.
      </p>
      <p>
        One thing the listings cannot settle: Nebraska Extension specifies <em>galvanized</em>
        hardware cloth, and that word does not appear in the product titles below. Where a title
        states a coating, the card repeats it; where it does not, this page says nothing about the
        finish rather than guessing at it.
      </p>

      <UsToolCard
        name="Hardware Cloth 1/4 inch, 48 x 50 ft Wire Fencing"
        whatItDoes={[
          'Its own title states a 1/4 inch mesh, which is the figure UC IPM gives for closing openings under a house, shed, mobile home or deck.',
          'Its title states no coating, so this card claims none.',
          'UC IPM states to bury the hardware cloth up to 6 inches; Nebraska Extension asks for at least 4 inches with a 12 to 18 inch skirt. The two figures differ and both are given here.',
        ]}
        asin="B0832YDD5B"
      />

      <UsToolCard
        name="SEBOSS Hardware Cloth Wire Mesh 1/4 inch, 48 x 100 ft, 23 Gauge"
        whatItDoes={[
          'A longer roll at the same 1/4 inch mesh stated in its own title.',
          'Its title states a 23 gauge and no coating.',
          'Los Angeles County Department of Animal Care and Control gives quarter-inch grid screening as its answer for attic vents and chimneys.',
        ]}
        asin="B08PPYX999"
      />

      <UsToolCard
        name="Black PVC Coated 1/4&quot; Hardware Cloth, 48&quot; x 100&#39;, 23 Gauge"
        whatItDoes={[
          'The same 1/4 inch mesh, in a roll its own title describes as PVC coated.',
          'The coating is stated here only because the product title states it. No source read for this page expresses a preference between coated and uncoated mesh.',
        ]}
        asin="B0D1QXZFKJ"
      />

      <UsToolCard
        name="FORIMO Hardware Cloth 1/4 inch, 24 in x 50 ft, 19 Gauge, Black Vinyl Coated"
        whatItDoes={[
          'A narrower roll at the same 1/4 inch mesh, described in its own title as 19 gauge and black vinyl coated.',
          'A narrow roll suits the trench-and-skirt work Nebraska Extension describes rather than a large vent or wall panel.',
        ]}
        asin="B09W8XZDVS"
      />

      <UsToolCard
        name="Hardware Cloth 1/4 inch, 19 Gauge, 8 in x 10 ft"
        whatItDoes={[
          'The smallest roll of the five, at the same 1/4 inch mesh stated in its own title.',
          'Sized for a single vent or a patch rather than a run of decking. Los Angeles County Department of Animal Care and Control also names slotted metal vent covers for foundation vents, which this is not.',
        ]}
        asin="B0H75HHMDX"
      />

      <div className="not-prose my-8 rounded-lg border-l-4 border-slate-500 bg-slate-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-slate-900">
          Two things this page does not sell, and why
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>
            Repellents. UC IPM states: &ldquo;An array of chemical products is marketed for
            repelling various wildlife species but, unfortunately, none offer significant results
            for opossums.&rdquo;
          </strong>{' '}
          The same source notes that the odor of mothballs, naphthalene crystals, or household
          ammonia has been used as a home remedy repellent, which is a report of what people do
          rather than a finding that it works.
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Motion-activated devices.</strong> UC IPM states that &ldquo;A motion-activated
          sprinkler device sometimes induces a fright response in opossums, skunks, and raccoons. If
          the animal has established the habit of visiting the yard or garden, such frightening
          responses rarely last for more than a few days.&rdquo; The Virginia Department of Wildlife
          Resources states that &ldquo;Reflective tape, lights, or noise sometimes works, but they
          will eventually grow accustomed to these methods, so this is only a temporary
          solution.&rdquo; Both sources that address these devices describe the effect as
          short-lived, so none is listed here.
        </p>
      </div>

      <h2 id="trapping">Control: Trapping</h2>
      <p>
        Everything in this section comes from one source, Nebraska Extension, and that source
        addresses raccoons and opossums together rather than opossums on their own. The figures are
        given here on that basis.
      </p>
      <ul>
        <li>
          <strong>Trap size.</strong> Nebraska Extension states that cage or box traps should be well
          built and have minimum sizes of 10 by 10 by 32 inches for single-door traps and 10 by 10 by
          42 inches for two-door traps.
        </li>
        <li>
          <strong>Bait.</strong> Nebraska Extension states that effective baits include sardines, dry
          and moist cat food, table scraps and fish oil.
        </li>
        <li>
          <strong>The floor of the trap.</strong> Nebraska Extension states that some trappers
          recommend covering the trap floor with grass and soil to reduce an animal&rsquo;s
          apprehension when entering the cage.
        </li>
        <li>
          <strong>A cover cloth.</strong> Nebraska Extension states that the cloth will protect the
          animal and bait from the elements.
        </li>
        <li>
          <strong>Handling.</strong> Nebraska Extension states that both animals can bite, scratch
          and harbor parasites such as fleas and ticks. The National Pesticide Information Center
          notes that someone with experience trapping and handling wildlife can be very helpful.
        </li>
      </ul>
      <p>
        No source read for this page describes a trap feature as opossum-specific, and no source
        compares one trap against another. <strong>We do not card opossum traps, and the reason
        is not the traps.</strong> UC IPM states that &ldquo;Live-trapping presents the problem of
        dealing with the animal once captured,&rdquo; and that &ldquo;Since it is illegal to
        relocate an opossum without a permit, those not wanting to deal with its disposal may
        prefer to hire a professional wildlife control operator.&rdquo; The Virginia Department of
        Wildlife Resources states that &ldquo;It is illegal in the State of Virginia to trap and
        relocate an animal to another area.&rdquo; Those two statements are about California and
        Virginia and neither is a national rule, so a reader has to check their own state before
        trapping anything. What the sources do recommend is closing the openings, and the hardware
        for that is in the section above.
      </p>

      <h2 id="breeding">Breeding and Pouch Young</h2>
      <p>
        Gestation is remarkably short and the sources are close to agreement on it. Alabama
        Cooperative Extension and UF/IFAS Extension both give 13 days; Kansas State University
        Extension and the Missouri Department of Conservation both give 12 or 13 days. Nebraska
        Extension states that partially-developed opossums are born 13 days after mating, then
        migrate to the female&rsquo;s pouch to continue to grow for several more weeks.
      </p>
      <p>
        Alabama Cooperative Extension states that, much like kangaroos, opossums give birth to
        relatively undeveloped young that complete development inside the mother&rsquo;s marsupium,
        and that at birth the young weigh less than one hundredth of an ounce each and are about the
        size of a honeybee. UF/IFAS Extension states that females normally have 13 teats and that
        newborns unable to secure a nipple do not survive, that young are typically weaned at around
        100 days, and that they increasingly leave the pouch and often ride atop the
        mother&rsquo;s back.
      </p>
      <p>
        On timing, Kansas State University Extension states that in Kansas breeding begins about the
        first of February, and the Missouri Department of Conservation states that breeding begins in
        early February with most litters born by the end of February. Nebraska Extension states that
        opossums mate twice a year, in mid-January through February and July through August. Kansas
        State University Extension states that the first litter is weaned in May and the female mates
        again, with the second litter weaned around mid to late September.
      </p>
      <p>
        <strong>How many young is not agreed.</strong> UF/IFAS Extension gives an average of 7 to 8
        per litter. Kansas State University Extension gives an average of nine, varying from five to
        13. Nebraska Extension gives litters typically averaging 7 to 10 but which can include up to
        17. <strong>How many litters a year is not agreed either.</strong> UF/IFAS Extension says
        usually one or two; Nebraska Extension says opossums mate twice a year; Alabama Cooperative
        Extension says most females can produce two litters in a year, one in winter and one in
        spring, although some may produce three. All of those figures are reported as their sources
        state them and none is preferred.
      </p>

      <h2 id="playing-dead">Playing Dead</h2>
      <p>
        The behavior is real, it is well described, and it is less common than its reputation. All
        three positions are given here.
      </p>
      <ul>
        <li>
          The Missouri Department of Conservation describes the opossum&rsquo;s famous behavior of
          playing dead, or playing possum, as a defensive adaptation, and adds that opossums will
          hiss in conflicts with other animals or if cornered.
        </li>
        <li>
          UF/IFAS Extension states that opossums may play dead for up to four hours, and describes
          what it looks like: when they feel gravely threatened they may enter a catatonic state in
          which they lie stiff with their eyes open, drool saliva from their open mouths, and may
          defecate or excrete a putrid-smelling liquid from their anal glands.
        </li>
        <li>
          Alabama Cooperative Extension states that when threatened, opossums appear to go into a
          catatonic state &mdash; and then states that this method of defense is not the most common
          one practiced, and that most often, when confronted with danger, opossums try to escape. It
          adds that some opossums may gape and hiss rather than play dead.
        </li>
        <li>
          Nebraska Extension states that when frightened, opossums will often just play dead or will
          hunker down, baring their teeth in a menacing manner.
        </li>
      </ul>

      <h2 id="disease">Disease</h2>
      <p>
        On rabies, the sources point the same way.{' '}
        <AsOf date="June 2023">
          The Louisiana Department of Health states that animals such as squirrels, hamsters, guinea
          pigs, gerbils, chipmunks, rats, mice, rabbits, hares and opossums are usually killed during
          an encounter with a rabid animal and therefore are not a source of infection.
        </AsOf>{' '}
        Los Angeles County Department of Animal Care and Control includes rabies in its list of
        diseases opossums carry, and marks it as rare. Alabama Cooperative Extension states that
        opossums have a remarkable resistance to many viruses and rarely contract rabies, parvovirus,
        distemper or feline hepatitis, and UF/IFAS Extension states that opossums are nearly immune
        to rabies, and have very strong resistance to venomous snakes such as water moccasins and
        rattlesnakes.
      </p>
      <p>
        <strong>On the wider disease picture the sources genuinely part company, and both sides are
        given here rather than only the reassuring one.</strong>
      </p>
      <ul>
        <li>
          <strong>Alabama Cooperative Extension says the reputation is overstated.</strong> It states
          that opossums often are believed to carry many diseases transferrable to humans and pets,
          and that in reality they have a remarkable resistance to many viruses.
        </li>
        <li>
          <strong>Los Angeles County Department of Animal Care and Control publishes a long
          list.</strong> It states that opossums are carriers of many diseases: tuberculosis,
          relapsing fever, herpes virus, tularemia, salmonella, spotted fever, toxoplasmosis,
          coccidiosis, trichomoniasis, Chagas Disease, yellow fever, and rabies, which it marks as
          rare.
        </li>
      </ul>
      <p>
        Both are inside the sources this page relies on, one a university extension service and one a
        county public-health agency, and neither is preferred here. What they do agree on is that
        rabies is rare.
      </p>
      <p>
        Two specific conditions are named by sources and are recorded as they were stated. Alabama
        Cooperative Extension states that opossums do carry one type of parasite,{' '}
        <em>Sarcocystis neurona</em>, that can cause a serious disease known as equine protozoal
        myeloencephalitis, or EPM, in horses, and that they may also carry ticks, fleas, roundworms
        and other common parasites.{' '}
        <AsOf date="January 25, 2022">
          Texas A&amp;M AgriLife Extension states that opossums also carry murine typhus and can
          transmit the disease to people and pets.
        </AsOf>{' '}
        Nebraska Extension states that both raccoons and opossums can bite, scratch and harbor
        parasites such as fleas and ticks, and advises handling carcasses with thick leather gloves.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or in
        the text immediately adjacent to it, and every source named is listed below. Framing,
        ordering and emphasis are our own judgement and are not a finding of any source. Where
        sources give different figures for the same measurement, all are reported and attributed
        rather than averaged.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
