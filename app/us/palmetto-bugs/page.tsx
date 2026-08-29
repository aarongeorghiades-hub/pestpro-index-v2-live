import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { PALMETTO_NAV, PALMETTO_HOME } from '../components/palmettoNav';

const URL = 'https://pestproindex.com/us/palmetto-bugs';
const TITLE = 'Palmetto Bugs: One Name, Several Different Insects';
const DESCRIPTION =
  'University of Georgia Extension calls palmetto bug a catch-all term. One insect it covers is flightless and does not colonise indoors, which changes what to do about it. Here is how to tell which one you have.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Palmetto Bugs', item: URL }],
};

const faqs: Faq[] = [
  {
    question: 'Is a palmetto bug the same thing as a cockroach?',
    answer:
      'Yes, but it is not one particular cockroach. University of Georgia Extension states that "Palmetto bug" is a regional term for several winged species of cockroach that can grow to more than an inch in length, and that it is a catch-all term often applied to smokybrown cockroaches and their cousins, the American cockroach (Periplaneta americana) and the Oriental cockroach (Blatta orientalis). The same source puts it more bluntly: people will say they have palmetto bugs, but it is just a nice way to say cockroach. UF/IFAS Extension separately states that the larger cockroaches, the American, Australian, brown and smokybrown, are 1-1/4 to 2 inches long and are often called palmetto bugs.',
  },
  {
    question: 'Which insect is the real palmetto bug?',
    answer:
      'There is no single one, and that is the point. Beyond the winged cockroaches University of Georgia Extension lists, UF/IFAS Extension states that the Florida woods cockroach, Eurycotis floridana, is native to the southeastern United States, where it is often referred to as a palmetto bug. That insect is genuinely different from the others: UF/IFAS states it lacks developed wings in either sex, that it is an occasional invader of the home but lacks effective flight wings and is slow moving, and that it has not been shown to commonly colonize inside structures.',
  },
  {
    question: 'Why does it matter which one I have?',
    answer:
      'Because the sources describe different situations. UF/IFAS states that the presence of the Florida woods cockroach in the home is typically a result of being transported indoors on another item, such as firewood, and that it has not been shown to commonly colonize inside structures. The American cockroach is described differently: UF Entomology and Nematology states it is commonly found in sewers, food preparation areas and basements. Mississippi State University Extension describes the common situation for the large roaches as breeding outside and occasionally invading the home without having established indoor populations.',
  },
  {
    question: 'Can I deal with palmetto bugs myself?',
    answer:
      'UF/IFAS Extension states that homeowners may undertake their own IPM plan for cockroach control with good success, or they may elect to contract the services of a professional pest control operator. The same source states that professionals have the equipment and training to do a thorough job and have access to products not available to homeowners. Mississippi State University Extension states that hiring a professional pest control company is one of the easiest and most effective ways to establish and maintain control of large roaches, and separately that if you do not have the time or inclination to do your own roach control, you can hire a company to provide the service.',
  },
  {
    question: 'What is the single most useful thing I can do?',
    answer:
      'Mississippi State University Extension states that exclusion is the most effective tactic home and building owners can use to prevent or reduce indoor invasions by large roaches and other insects, and separately that sanitation is the most important part of any roach control program. The same source notes that because of their flattened body shape, even adult large roaches can easily crawl under poorly sealed doors, and recommends door sweeps, foam or spring metal strips around door edges, undamaged window screens, and tightly fitting, properly screened soffit and attic vents.',
  },
  {
    question: 'Do palmetto bugs cause health problems?',
    answer:
      'Mississippi State University Extension states that cockroach excrement and cast skins may cause allergies in some people, and that cockroach-induced allergies and asthma are some of the most serious problems caused by these pests, with symptoms including sneezing, runny nose, skin reactions and eye irritation. On disease the same source is careful, stating that cockroaches potentially can transmit disease organisms on their body parts. The National Pesticide Information Center states that indoor cockroach infestations may cause allergy and asthma symptoms to get worse.',
  },
  {
    question: 'Which bait station should I buy for a large roach?',
    answer:
      'The sources give a size distinction rather than a product recommendation. Mississippi State University Extension states that bait stations designed specifically for German cockroaches are too small, and UF/IFAS Extension separately states to get small stations for German cockroaches and large stations for the larger outdoor cockroaches. That is a fitness test a reader can check on a label. No source consulted for this page compares any two products against each other, so this page does not rank them and does not call any product better than another.',
  },
  {
    question: 'Can I use a spray and a bait together?',
    answer:
      'The sources say not in the same place. UF/IFAS Extension states never to spray a liquid insecticide where baits have been applied, because liquid insecticides used in the vicinity of baits will repel cockroaches from the bait. Mississippi State University Extension states the same thing in its own words: do not apply insecticide sprays in areas where baits are used, because the sprays can potentially repel roaches and prevent them from eating the bait.',
  },
];

const sources: Source[] = [
  {
    label: 'Is that a roach or a palmetto bug? — the source of the catch-all finding',
    publisher: 'University of Georgia, CAES Field Report',
    date: 'Published 2 July 2024. Accessed 23 August 2026',
    href: 'https://fieldreport.caes.uga.edu/news/is-that-a-roach-or-a-palmetto-bug/',
  },
  {
    label: 'ENY-214/IG082 — Cockroaches and Their Management',
    publisher: 'University of Florida IFAS Extension',
    date: 'Accessed 23 August 2026',
    href: 'https://ask.ifas.ufl.edu/publication/IG082',
  },
  {
    label: 'EENY-514/IN915 — Florida Woods Cockroach, Eurycotis floridana',
    publisher: 'University of Florida IFAS Extension',
    date: 'Accessed 23 August 2026',
    href: 'https://ask.ifas.ufl.edu/publication/IN915',
  },
  {
    label: 'American cockroach, Periplaneta americana',
    publisher: 'University of Florida, Entomology and Nematology',
    date: 'Accessed 23 August 2026',
    href: 'https://entnemdept.ufl.edu/projex/gallery/dl/cockroaches/text/american_cockroach.htm',
  },
  {
    label: 'Cockroaches (order Blattaria)',
    publisher: 'University of Georgia, Integrated Pest Management',
    date: 'Accessed 23 August 2026',
    href: 'https://ipm.uga.edu/2022/09/21/cockroaches-order-blattaria/',
  },
  {
    label: 'Publication P3346 — Control Cockroaches in and Around Your Home',
    publisher: 'Mississippi State University Extension',
    date: 'Accessed 23 August 2026',
    href: 'https://extension.msstate.edu/sites/default/files/document/2026-01/P3346_web.pdf',
  },
  {
    label: 'Cockroaches',
    publisher: 'National Pesticide Information Center, Oregon State University and US EPA',
    date: 'Last updated 18 July 2025. Accessed 23 August 2026',
    href: 'https://npic.orst.edu/pest/roach.html',
  },
  {
    label:
      'National Prevalence and Exposure Risk for Cockroach Allergen in U.S. Households — Cohn, Arbes, Jaramillo, Reid and Zeldin',
    publisher: 'Environmental Health Perspectives',
    date: 'Published 15 November 2005, issue dated April 2006',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1440774/',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What the Name Covers' },
  { id: 'the-different-one', title: 'The One That Is Different' },
  { id: 'american-cockroach', title: 'The American Cockroach' },
  { id: 'health', title: 'Allergens and Health' },
  { id: 'keeping-them-out', title: 'Keeping Them Out' },
  { id: 'control', title: 'What the Sources Say About Control' },
  { id: 'products', title: 'Examples, Grouped by Purpose' },
  { id: 'gulf', title: 'The Gulf and the Deep South' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function PalmettoBugsPage() {
  return (
    <UsPageLayout
      title="Palmetto Bugs"
      subtitle="One name, several different insects, and one of them is flightless and does not breed indoors at all. Which one is on your wall changes what you should do about it, so this page starts there."
      lastUpdated="August 2026"
      readingTime="12 min"
      tocItems={tocItems}
      homeHref={PALMETTO_HOME}
      clusterNav={PALMETTO_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Almost every page about palmetto bugs treats the name as a polite synonym for one insect.
        The extension services do not. They treat it as a label that several different animals
        answer to, and at least one of those animals behaves so differently from the others that
        the usual advice does not apply to it.
      </p>
      <p>
        That is where this page starts, because it is the part that changes what a reader should
        actually do.
      </p>

      <h2 id="what-it-is">What the Name Covers</h2>
      <p>
        University of Georgia Extension is direct about it:{' '}
        <strong>
          &ldquo;&lsquo;Palmetto bug&rsquo; is a regional term for several winged species of
          cockroach that can grow to more than an inch in length.&rdquo;
        </strong>{' '}
        The same source calls it{' '}
        <strong>
          &ldquo;a catch-all term often applied to smokybrown cockroaches and their cousins, the
          American cockroach (<em>Periplaneta americana</em>) and the Oriental cockroach (
          <em>Blatta orientalis</em>)&hellip;&rdquo;
        </strong>
      </p>
      <p>
        And on what people mean when they use it:{' '}
        <em>
          &ldquo;People will say they have palmetto bugs, but it&rsquo;s just a nice way to say
          cockroach.&rdquo;
        </em>
      </p>
      <p>
        UF/IFAS Extension draws the line by size rather than by species:{' '}
        <strong>
          &ldquo;The larger cockroaches&mdash;American, Australian, brown, and the
          smokybrown&mdash;are 1&ndash;1/4 to 2 inches (31&ndash;51 mm) long and are often called
          palmetto bugs.&rdquo;
        </strong>{' '}
        UF Entomology and Nematology says of the American cockroach specifically that it is
        &ldquo;often called a &lsquo;palmetto bug&rsquo;&rdquo;.
      </p>
      <p>
        On the smokybrown, University of Georgia Extension adds that{' '}
        <em>
          &ldquo;the one we&rsquo;re talking about is called the smokybrown cockroach,{' '}
          <em>Periplaneta fuliginosa</em>. It&rsquo;s not native to the U.S. &mdash; it is believed
          to be from Japan.&rdquo;
        </em>{' '}
        and that smokybrown cockroaches &ldquo;prefer warm weather (above 68 degrees Fahrenheit) and
        they require constant moisture to avoid drying out.&rdquo;
      </p>

      <h2 id="the-different-one">The One That Is Different</h2>
      <p>
        UF/IFAS Extension documents a fourth animal under the same name, and it is not a{' '}
        <em>Periplaneta</em> at all:{' '}
        <strong>
          &ldquo;The Florida woods cockroach, <em>Eurycotis floridana</em> (Walker), is native to the
          southeastern United States, where it is often referred to as a palmetto bug.&rdquo;
        </strong>
      </p>
      <p>
        Three things separate it from every other insect on this page, all from the same source:
      </p>
      <ul>
        <li>
          It cannot fly. It &ldquo;lacks developed wings in either sex, instead having reduced wing
          pads and absent hind wings.&rdquo;
        </li>
        <li>
          It does not settle in. It &ldquo;has not been shown to commonly colonize inside
          structures.&rdquo;
        </li>
        <li>
          It usually arrives by accident. &ldquo;It is also an occasional invader of the home, but
          lacks effective flight wings and is slow moving. Its presence in the home is typically a
          result of being transported indoors on another item, such as firewood.&rdquo;
        </li>
      </ul>
      <p>
        For size, UF/IFAS gives{' '}
        <strong>
          &ldquo;30&ndash;40 mm (1.20&ndash;1.60 in) long and up to 24 mm (1.00 in) wide&rdquo;
        </strong>
        , with a body ranging &ldquo;in color from reddish brown to nearly black.&rdquo; Its
        recorded range is &ldquo;coastal Georgia, Alabama, and Mississippi, and throughout most of
        Florida.&rdquo;
      </p>
      <p>
        One handling note from the same source, because it is the sort of thing worth knowing
        before picking one up: the insect&rsquo;s{' '}
        <strong>
          &ldquo;oily, odiferous secretion is harmful to skin and sensitive tissue such as the
          eyes.&rdquo;
        </strong>
      </p>
      <p>
        <strong>
          Why this section exists: a slow, flightless insect carried in on firewood that does not
          breed indoors is a different problem from a colony living in a sewer.
        </strong>{' '}
        Treating the first like the second means treating a house for something that was never
        living in it.
      </p>

      <h2 id="american-cockroach">The American Cockroach</h2>
      <p>
        This is the animal most people mean. UF Entomology and Nematology gives the adult as{' '}
        <strong>&ldquo;about 1 3/8 to 2 1/8 inches (34-54 mm) long&rdquo;</strong> and{' '}
        &ldquo;reddish-brown with light markings behind the head on the pronotum.&rdquo; University
        of Georgia Extension describes adults as &ldquo;large (2 inches) with pale outer margins on
        the pronotum (upper thorax)&rdquo; and as &ldquo;Chestnut to light brown-colored insects
        that run quickly.&rdquo;
      </p>
      <p>
        On flight, the answer is less dramatic than the reputation: UF Entomology and Nematology
        states that <strong>&ldquo;Both sexes are poor to average fliers&rdquo;</strong>.
      </p>
      <p>
        Where it lives is the useful part. UF Entomology and Nematology states it is
        &ldquo;commonly found in sewers, food preparation areas and basements&rdquo; and that it is
        &ldquo;more common in commercial buildings than in residences.&rdquo; University of Georgia
        Extension adds that it is &ldquo;Mainly found in sewers and other dark, damp hideaways such
        as basements. Rarely, if ever, found in attics,&rdquo; and that it is &ldquo;Night
        active.&rdquo;
      </p>
      <p>
        That last detail separates it from the smokybrown, which University of Georgia Extension
        calls the &ldquo;Most common cockroach in suburban, Southern neighborhoods with mature
        hardwood trees present, where they commonly live in tree holes, attics, crawlspaces,
        sheds.&rdquo; An insect in the attic and an insect in the basement are, on these sources,
        likely to be two different species.
      </p>
      <p>
        On lifecycle, UF Entomology and Nematology states the egg case &ldquo;contains 14 to 16
        eggs&rdquo;, that a &ldquo;female will produce nine to ten such cases during her
        lifetime&rdquo;, that nymphs &ldquo;molt 10 to 13 times&rdquo;, and that an
        &ldquo;individual may live well over a year.&rdquo; The species is &ldquo;originally from
        Africa and is worldwide in distribution.&rdquo;
      </p>
      <p>
        Mississippi State University Extension describes the large-roach group together and gives a
        wider egg figure: their ootheca &ldquo;contains 12&ndash;24 eggs&rdquo;, it &ldquo;normally
        takes at least 6 weeks for eggs to hatch&rdquo;, and &ldquo;it takes from 9 to 20 months for
        the nymphs to become adults.&rdquo;{' '}
        <strong>
          These two egg figures are not the same, and this page does not blend them:
        </strong>{' '}
        the first is about the American cockroach specifically, the second about the large-roach
        complex as a group, so both can be right and each is quoted with the source that published
        it.
      </p>
      <p>
        The sentence that explains the whole shape of this page comes from Mississippi State
        University Extension:{' '}
        <strong>
          &ldquo;In one of the most common situations, large roaches breed outside and occasionally
          invade the home but do not have established indoor populations.&rdquo;
        </strong>{' '}
        That is why what follows leads with the outside of the building rather than the kitchen.
      </p>

      <h2 id="health">Allergens and Health</h2>
      <p>
        Mississippi State University Extension states that{' '}
        <strong>
          &ldquo;cockroach excrement and cast skins may cause allergies in some people. In fact,
          cockroach-induced allergies and asthma are some of the most serious problems caused by
          these pests.&rdquo;
        </strong>{' '}
        The listed symptoms are &ldquo;sneezing, runny nose, skin reactions, and eye
        irritation.&rdquo; The National Pesticide Information Center puts the mechanism plainly:
        &ldquo;cockroaches shed, and their waste products can get into the air you breathe&rdquo;,
        and &ldquo;Indoor cockroach infestations may cause allergy and asthma symptoms to get
        worse.&rdquo;
      </p>
      <p>
        On disease, the source is careful and this page keeps its qualifier. Mississippi State
        University Extension states that cockroaches{' '}
        <strong>&ldquo;potentially can transmit disease organisms on their body parts&rdquo;</strong>{' '}
        and that they &ldquo;can contaminate food, imparting an unpleasant odor and taste.&rdquo;
        That word <em>potentially</em> is the source&rsquo;s own. No source consulted for this page
        claims cockroaches are a proven route of disease in the home.
      </p>
      <p>
        The same source reports a study result: &ldquo;In one study of 476 asthmatic inner-city
        children, half of the children&rsquo;s bedrooms had high levels of cockroach allergen in
        dust. That study also found that children who were both allergic to cockroaches and exposed
        to high levels of cockroach allergens had three times as many hospitalizations a year
        compared with other children.&rdquo; It adds that asthma problems from cockroaches
        &ldquo;seem to be most severe among children in inner-city areas, but they may also be
        significant even in nonurban children.&rdquo;
      </p>
      <p>
        A national survey published in <em>Environmental Health Perspectives</em> by Cohn, Arbes,
        Jaramillo, Reid and Zeldin found detectable cockroach allergen in at least one location in{' '}
        <strong>63% of U.S. homes</strong>, with levels above 8.0 U/g on 3% of living room and
        bedroom floors and 10% of kitchen floors. The same paper reports that{' '}
        <strong>
          &ldquo;Children with sensitivity to cockroach allergen who were exposed to bedroom levels
          &gt; 8.0 U/g had asthma hospitalization rates that were 3.7 times higher than sensitive
          children with lower levels of exposure.&rdquo;
        </strong>{' '}
        <em>
          That survey was published in 2005 and its issue is dated 2006. It describes households as
          they were then, not as they are now, and it is quoted here with its date for that reason.
        </em>
      </p>
      <p>
        One practical note follows from the allergen point. Mississippi State University Extension
        states that &ldquo;Vacuums with a HEPA filter are recommended as they will trap many of the
        cockroach allergens, unlike traditional vacuums.&rdquo;
      </p>

      <h2 id="keeping-them-out">Keeping Them Out</h2>
      <p>
        Mississippi State University Extension ranks this above everything else it discusses:{' '}
        <strong>
          &ldquo;Exclusion is the most effective tactic home and building owners can use to prevent
          or reduce indoor invasions by large roaches and other insects.&rdquo;
        </strong>
      </p>
      <p>
        The reason is physical. The same source notes that &ldquo;Because of their flattened body
        shape, even adult large roaches can easily crawl under poorly sealed doors,&rdquo; and
        UF/IFAS Extension gives a tolerance it states of cockroaches generally rather than of the
        large ones in particular: &ldquo;Adult cockroaches can fit into cracks only
        about 1/16 inch.&rdquo;
      </p>
      <p>What the sources say to seal, in their own words:</p>
      <ul>
        <li>
          Mississippi State University Extension: &ldquo;Install door sweeps on the bottoms of
          doors, and use foam strips or spring metal strips to seal around remaining door
          edges.&rdquo;
        </li>
        <li>
          Mississippi State University Extension: &ldquo;Be sure window screens are undamaged and
          fit properly.&rdquo;
        </li>
        <li>
          Mississippi State University Extension: &ldquo;Use caulking, foam sealant, steel wool, or
          other appropriate materials to seal around pipes and other potential entry points.&rdquo;
        </li>
        <li>
          Mississippi State University Extension: &ldquo;Check soffit vents and other attic vents to
          be sure that they fit tightly and are properly screened.&rdquo;
        </li>
        <li>
          The National Pesticide Information Center: &ldquo;Use silicone caulking, screening, and/or
          copper mesh.&rdquo;
        </li>
      </ul>
      <p>
        Because the large roaches live outdoors, the yard matters as much as the wall. Mississippi
        State University Extension states that &ldquo;sanitation efforts for large roaches should
        also be concentrated outdoors, in the area immediately surrounding the home,&rdquo; and
        gives one measurable figure:{' '}
        <strong>
          &ldquo;Ideally, organic mulches should not be used within 3&ndash;4 feet of the
          foundation. Use inorganic mulches like lava rock or pea gravel in this zone.&rdquo;
        </strong>
      </p>
      <p>
        The same source adds a line that lands squarely on the word palmetto:{' '}
        <strong>
          &ldquo;Avoid planting palm trees too near the house because they provide excellent shelter
          for large roaches.&rdquo;
        </strong>{' '}
        It also states &ldquo;Do not allow ivy or other vines to grow on the side of the
        house,&rdquo; advises against &ldquo;stacking firewood, lumber, boxes, or other refuse near
        the house,&rdquo; and in favour of raking &ldquo;leaves and pine needles&rdquo; and keeping
        &ldquo;trees and shrubs pruned away from the house.&rdquo;
      </p>
      <p>
        UF/IFAS Extension adds to the same list: &ldquo;Stack firewood off the ground and well away
        from the house,&rdquo; &ldquo;Pull mulch away from the house,&rdquo; and &ldquo;Fill tree
        holes with cement to remove this prime harborage area.&rdquo;
      </p>
      <p>
        Water is the other half. UF/IFAS Extension states that{' '}
        <strong>&ldquo;Water is the most important factor in cockroach survival&rdquo;</strong> and
        recommends repairing &ldquo;plumbing leaks by tightening connections or patching leaky
        pipes,&rdquo; not letting &ldquo;water stand in sinks for long periods of time,&rdquo; and
        emptying &ldquo;pans under refrigerators used to catch water from condensation.&rdquo;
      </p>

      <h2 id="control">What the Sources Say About Control</h2>
      <p>
        UF/IFAS Extension is explicit that this is something a homeowner can take on:{' '}
        <strong>
          &ldquo;Homeowners may undertake their own IPM plan for cockroach control with good
          success, or they may elect to contract the services of a professional pest control
          operator.&rdquo;
        </strong>{' '}
        It adds that &ldquo;Professionals have the equipment and training to do a thorough job and
        have access to products not available to homeowners,&rdquo; and that if you do hire one,
        &ldquo;get estimates from some reputable firms before you decide on one.&rdquo;
      </p>
      <p>
        Mississippi State University Extension frames the professional route as a matter of
        convenience rather than necessity: &ldquo;If you don&rsquo;t have the time or inclination to
        do your own roach control, you can hire a professional pest control company to provide this
        service.&rdquo;
      </p>
      <p>
        Two rules from the sources govern everything below, and they are stated here rather than
        buried beside a product.
      </p>
      <p>
        <strong>One. Sanitation outranks whatever you buy.</strong> Mississippi State University
        Extension states: &ldquo;Always keep in mind that sanitation is the most important part of
        any roach control program,&rdquo; and, of a spray-and-clean treatment, that &ldquo;In most
        cases, the deep cleaning part of this treatment process provides greater benefit for roach
        control than the insecticide spray.&rdquo; The same source notes that &ldquo;An insecticide
        treatment is only as good as the care taken in applying it.&rdquo;
      </p>
      <p>
        <strong>Two. Never spray where you have baited.</strong> UF/IFAS Extension states:{' '}
        <strong>
          &ldquo;Never spray a liquid insecticide where baits have been applied. Liquid insecticides
          used in the vicinity of baits will repel cockroaches from the bait.&rdquo;
        </strong>{' '}
        Mississippi State University Extension states the same rule independently: &ldquo;Do not
        apply insecticide sprays in areas where baits are used because the sprays can potentially
        repel roaches and prevent them from eating the bait.&rdquo; A spray and a bait used in the
        same place work against each other.
      </p>
      <p>
        Two further notes worth having before buying anything. Mississippi State University
        Extension states that &ldquo;a single insecticide treatment, no matter how thoroughly
        applied, will rarely be sufficient to totally eliminate a heavy infestation,&rdquo; and that
        &ldquo;foggers are not very useful or effective for cockroach control&rdquo; because
        &ldquo;Most of the insecticide aerosols do not penetrate well into the cracks, crevices, and
        voids where roaches hide.&rdquo; The National Pesticide Information Center advises to
        &ldquo;always read and follow the label directions carefully&rdquo; and to &ldquo;Try a
        lower toxicity product first.&rdquo;
      </p>

      <h2 id="products">Examples, Grouped by Purpose</h2>
      <p>
        <strong>
          These are examples of each kind of product, grouped by what the sources say that kind is
          for. They are in no order of preference and none is called better than another, because no
          source consulted for this page compares any two products against each other.
        </strong>{' '}
        Each card carries the scope and the limitation its own sources state.
      </p>
      <p>
        There is, however, one selection rule the sources do give, and it is the organising
        principle of this section. Mississippi State University Extension states that{' '}
        <strong>
          &ldquo;Bait stations designed specifically for German cockroaches are too small.&rdquo;
        </strong>{' '}
        UF/IFAS Extension states the same thing independently:{' '}
        <strong>
          &ldquo;Get small stations for German cockroaches and large stations for the larger outdoor
          cockroaches.&rdquo;
        </strong>{' '}
        Palmetto bugs are the larger outdoor cockroaches. That is a fitness test a reader can check
        on a label before buying, and it is not a ranking.
      </p>
      <p>
        Mississippi State University Extension also notes that the products it lists are examples
        rather than recommendations, and that no single one is meant to be the answer: &ldquo;If
        they do not readily take the first bait you try, switch to another brand or type of
        bait.&rdquo;
      </p>

      <h3>Bait stations sized for large roaches</h3>

      <UsToolCard
        name="Combat Max Roach Killing Bait, Large Roaches, 8 Count"
        whatItDoes={[
          'A ready-to-use bait station. Its own listing names large roaches, which is the distinction both sources draw.',
          'Mississippi State University Extension states that bait stations designed specifically for German cockroaches are too small, and UF/IFAS Extension states to get large stations for the larger outdoor cockroaches.',
          'Mississippi State University Extension states that in living areas you should use childproof bait stations specifically designed for large roaches, placed where they are inaccessible to children and pets.',
        ]}
        asin="B001ACMBJK"
      />

      <h3>Gel bait</h3>

      <UsToolCard
        name="Advion Cockroach Gel Bait, 4 Tubes of 30 Grams"
        whatItDoes={[
          'A syringe gel. UF/IFAS Extension states that baits come in granular formulations, plastic stations, or large syringes for gel applications.',
          'Mississippi State University Extension states that gel baits can be especially effective but must be used correctly, using multiple placements of small amounts of bait, drops generally no larger than a pea.',
          'The same source states that unconsumed bait dries out over time and becomes unpalatable to roaches, so placements need renewing.',
          'UF/IFAS Extension states never to spray a liquid insecticide where baits have been applied.',
        ]}
        asin="B0148W0WOE"
      />

      <h3>Granular bait for the outside perimeter</h3>

      <UsToolCard
        name="Nisus Niban Granular Bait, 4 lbs"
        whatItDoes={[
          'A granular bait scattered rather than placed. Mississippi State University Extension states that granular baits are especially useful for controlling large roaches around exterior building perimeters.',
          'The same source states granular baits are usually intended for outdoor use, or for application in basements, attics, storage rooms, wall voids and other non-living areas.',
          'UF/IFAS Extension states to apply granular formulations outside in plants and mulched areas.',
        ]}
        asin="B005F5PRJE"
      />

      <h3>Residual spray, as a supplement</h3>

      <UsToolCard
        name="Ortho Home Defense Insect Killer for Indoor &amp; Perimeter2, 1.33 gal"
        whatItDoes={[
          'Mississippi State University Extension states that outdoor perimeter sprays are especially useful for control of large roaches.',
          'The same source states that indoor insecticide sprays are not the most effective way to control large roaches, but are sometimes useful as supplemental treatments.',
          'Both UF/IFAS Extension and Mississippi State University Extension state that sprays must not be applied where baits have been placed, because they repel roaches from the bait.',
          'UF/IFAS Extension states never to spray around or into electrical outlets, to avoid food preparation surfaces, and not to touch treated surfaces until dry, at least four hours.',
        ]}
        asin="B01N0TGJHB"
      />

      <h3>Monitoring, which is not control</h3>

      <UsToolCard
        name="Catchmaster Roach Trap Glue Boards, 10 Pack"
        whatItDoes={[
          'Mississippi State University Extension states that traps are useful survey tools to determine if, or where, infestations exist, or to gauge the effectiveness of control efforts.',
          'The same source states plainly that they are not control tools and will not provide effective stand-alone control. This is a monitoring tool and nothing on this page presents it as more than one.',
          'The National Pesticide Information Center describes monitoring and assessing cockroach activity using sticky traps or glue boards.',
        ]}
        asin="B0CFRN4CF3"
      />

      <p>
        Five products appear above and there is no sixth. One class was deliberately left out:
        insect growth regulators are described by Mississippi State University Extension as
        &ldquo;especially useful in control of German cockroaches,&rdquo; and no source consulted
        for this page states that they are useful against the large roaches this page is about. Rather
        than stretch a German-cockroach finding to cover a different animal, that class is absent.
      </p>

      <h2 id="gulf">The Gulf and the Deep South</h2>
      <p>
        The sources repeatedly describe this as a warm, humid-region problem, and the pattern is
        consistent enough to note even though this page does not treat any state in detail.
      </p>
      <p>
        Mississippi State University Extension states that although the large roaches &ldquo;occur
        statewide, they are most common in the southern part of the state.&rdquo; University of
        Georgia Extension states that smokybrown cockroaches &ldquo;prefer warm weather (above 68
        degrees Fahrenheit) and they require constant moisture to avoid drying out,&rdquo; and
        describes the smokybrown as the most common cockroach in &ldquo;suburban, Southern
        neighborhoods with mature hardwood trees present.&rdquo; UF/IFAS Extension records the
        Florida woods cockroach in &ldquo;coastal Georgia, Alabama, and Mississippi, and throughout
        most of Florida&rdquo; &mdash; a Gulf and South Atlantic distribution rather than a national
        one.
      </p>
      <p>
        The consequence for a reader in that band is the emphasis rather than the method: where the
        outdoor population is sustained year-round, the work described under keeping them out
        matters more than anything done indoors.{' '}
        <strong>
          This page stops there. A fuller treatment of the Gulf states belongs on its own page and
          has not been written yet.
        </strong>
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the eight publications below, seven of
        them university extension services or a federally supported information centre, and one a
        peer-reviewed journal paper used for the national allergen figures. Where a source qualified
        its own statement, the qualification is kept, and where two sources give different figures
        for the same thing, both are quoted with their attributions rather than merged. The product
        names above were read from each product&rsquo;s own listing on 23 August 2026 and are
        recorded rather than assessed; the listings read were B001ACMBJK, B0148W0WOE, B005F5PRJE,
        B01N0TGJHB and B0CFRN4CF3. Each is reachable from its own card above, where the disclosure
        sits directly beside the link, and they are named here rather than linked again so that
        every link to a product on this page carries its disclosure. Framing and ordering are our
        own judgement and are not a finding of any source.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
