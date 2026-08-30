import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { CHIGGERS_NAV, CHIGGERS_HOME } from '../components/chiggersNav';

const URL = 'https://pestproindex.com/us/chiggers';
const TITLE = 'Chiggers: They Do Not Burrow, and They Do Not Drink Blood';
const DESCRIPTION =
  'Three university extension services correct the same two beliefs about chiggers. Here is what they actually are, why the itch starts hours after the mite has gone, and why one source says yard pesticides are not worth buying.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Chiggers', item: URL }],
};

const faqs: Faq[] = [
  {
    question: 'Do chiggers burrow into your skin?',
    answer:
      'No, and three university extension services say so in their own words. Ohio State University Extension states: Chiggers do not burrow into skin. This is a myth. University of Maryland Extension states: Contrary to popular belief, chiggers do not burrow into the skin or suck blood. Texas A&M AgriLife Extension states: Contrary to common belief, chiggers do not burrow into a host skin or suck blood. Texas A&M also explains why the belief looks true: as the skin becomes red and swollen, it may completely envelop the feeding chigger, making it appear that the chigger has burrowed into the host skin.',
  },
  {
    question: 'Do chiggers drink blood?',
    answer:
      'No. Ohio State University Extension states: Chiggers do not suck blood. They feed on dissolved skin cells. University of Maryland Extension states: Chiggers feed on digested skin cells, not blood. Texas A&M AgriLife Extension describes the mechanism: they pierce the skin with their sharp mouthparts and inject a digestive enzyme, disintegrating skin cells for food. No source consulted for this page says chiggers feed on blood.',
  },
  {
    question: 'What is a chigger, exactly?',
    answer:
      'A larval mite. Ohio State University Extension states that chigger is a common name for tiny mite larva of the family Trombiculidae. University of Maryland Extension states that chiggers, or red bugs, are the tiny larvae of mites in the genus Eutrombicula, and gives their size as 1/120 to 1/150 inch. Texas A&M AgriLife Extension states that chiggers are the immature stage of certain mites belonging to the family Trombiculidae. It is not an insect and not a tick, and only one stage of its life bites.',
  },
  {
    question: 'How do I tell a chigger bite from a tick bite?',
    answer:
      'By whether anything is still there. Chiggers feed and then drop off: Ohio State University Extension gives 2 to 4 days on an animal host, Texas A&M AgriLife Extension gives typically 3 days, and University of Maryland Extension gives up to 3 days. A tick behaves differently. CDC states that ticks suck blood anywhere from minutes to days depending on the species, and that many species secrete a cement-like substance that keeps them firmly attached during the meal. So a tick is an animal you can usually see and have to remove, while a chigger is generally gone by the time the itch begins. Bite position also helps: Ohio State places the bites concentrated around the ankles under socks or shoe straps, near waistbands, under bra straps, and in armpits.',
  },
  {
    question: 'Why does the itch start hours later?',
    answer:
      'Because what itches is your own reaction, not the mite. Ohio State University Extension states that the mite secretes salivary enzymes in order to dissolve skin cells into an ingestible form, that affected skin cells and saliva form a stylostome, a tube-like channel or straw from which the larva sucks the digested skin slurry, and that itch is the result of your skin reaction to the mite saliva. On timing, University of Maryland Extension states that itching is usually not felt for 3 to 6 hours after attachment and may persist for up to 2 weeks. Texas A&M AgriLife Extension states that itching usually begins within 3 to 6 hours after an initial bite and typically peaks at 24 to 48 hours.',
  },
  {
    question: 'Do chiggers spread disease in the United States?',
    answer:
      'University of Maryland Extension states: Chiggers are not known to transmit any infectious diseases in the United States. Scrub typhus is a different situation in a different place. CDC states that scrub typhus is transmitted to humans through bites from infected larval trombiculid mites commonly known as chiggers, and that scrub typhus is distributed throughout the Asia-Pacific region, endemic to Korea, China, Taiwan, Japan, Pakistan, India, Bangladesh, Thailand, Laos, Malaysia, Vietnam, Sri Lanka and Australia. The vectors CDC names are in the genus Leptotrombidium, while the US chiggers the extension services describe are Eutrombicula.',
  },
  {
    question: 'What should I do straight after being in chigger habitat?',
    answer:
      'Wash. Ohio State University Extension states that showering will remove the mite, that wiping exposed skin with a washcloth or showering will help dislodge and remove chiggers, and to wash clothing on the hot setting to kill any remaining mites. Texas A&M AgriLife Extension advises taking a warm, soapy shower or bath within a few hours after exposure to chiggers, and scrubbing your skin vigorously with a washcloth to dislodge any mites. University of Maryland Extension recommends lathering and rinsing several times in a hot shower to remove any remaining chiggers, and states that prompt mite removal can lessen the duration and intensity of the itching.',
  },
  {
    question: 'Should I treat my yard for chiggers?',
    answer:
      'The sources disagree, and this page reports the disagreement rather than resolving it. University of Maryland Extension states: The use of pesticides to control chiggers is not recommended or effective. Ohio State University Extension states that bifenthrin or permethrin are two active ingredients in over-the-counter products. Texas A&M AgriLife Extension states that residual insecticide sprays, such as those containing bifenthrin, cyfluthrin, esfenvalerate or permethrin, can help suppress chigger numbers, which is a claim about suppression rather than elimination. What all three agree on is the non-chemical work: keep lawns mowed and shrubbery trimmed, control brush, and increase sun exposure and air flow, because the stated mechanism is drying the habitat out.',
  },
  {
    question: 'What can I put on the bites?',
    answer:
      'The sources split on this, so both positions are given. Ohio State University Extension states that extension staff are not medical professionals and cannot diagnose bites or other skin ailments, and advises speaking with a pharmacist or medical professional for recommendations on reducing itchy symptoms. University of Maryland Extension states that topical creams or ointments help to relieve itching, and to ask your physician for a recommendation. Texas A&M AgriLife Extension is the one source that names approaches: oral antihistamines, anti-itch creams containing camphor and menthol, calamine or pramoxine, and hydrocortisone ointments, and it advises applying an antiseptic ointment to prevent infection.',
  },
  {
    question: 'Does scratching make it worse?',
    answer:
      'University of Maryland Extension states that scratching often removes the mite but can result in a secondary infection. Texas A&M AgriLife Extension advises applying an antiseptic ointment to prevent infection.',
  },
  {
    question: 'When and where are chiggers active?',
    answer:
      'The sources answer this regionally rather than nationally, and this page does not generalise them. Ohio State University Extension states that the greatest numbers in Ohio are present in June through August. Texas A&M AgriLife Extension states that chiggers are active from late spring to fall in most parts of Texas, but may remain active year-round in southern areas. On habitat, University of Maryland Extension states that chiggers are most often found in vegetation transition zones such as along the junction of forest and grass, along margins of swamps, brush thickets and even home lawns or golf courses.',
  },
];

const sources: Source[] = [
  {
    label: 'Chiggers, Ohioline fact sheet ANR-0182 — Ashley Kulhanek',
    publisher: 'Ohio State University Extension',
    date: 'Dated 13 June 2025. Accessed 23 August 2026',
    href: 'https://ohioline.osu.edu/factsheet/anr-0182-0',
  },
  {
    label: 'Chiggers',
    publisher: 'University of Maryland Extension',
    date: 'Updated 16 April 2026. Accessed 23 August 2026',
    href: 'https://extension.umd.edu/resource/chiggers',
  },
  {
    label: 'Chiggers — Glen C. Moore and M. E. Merchant',
    publisher: 'Texas A&M AgriLife Extension Service',
    date: 'Accessed 23 August 2026',
    href: 'https://agrilifeextension.tamu.edu/library/landscaping/chiggers/',
  },
  {
    label: 'Clinical Overview of Scrub Typhus',
    publisher: 'Centers for Disease Control and Prevention',
    date: 'Accessed 23 August 2026',
    href: 'https://www.cdc.gov/typhus/hcp/clinical-overview/clinical-overview-of-scrub-typhus.html',
  },
  {
    label: 'About Ticks — used here only for the tick side of the comparison',
    publisher: 'Centers for Disease Control and Prevention',
    date: 'Accessed 23 August 2026',
    href: 'https://www.cdc.gov/ticks/about/index.html',
  },
];

const tocItems = [
  { id: 'what-they-are', title: 'What They Actually Are' },
  { id: 'not-a-tick', title: 'Chigger Bite or Tick Bite' },
  { id: 'the-itch', title: 'Why the Itch Comes Late' },
  { id: 'biology', title: 'Only the Larva Bites' },
  { id: 'disease', title: 'Disease, and Scrub Typhus' },
  { id: 'prevention', title: 'Not Being Bitten' },
  { id: 'yard', title: 'The Yard, and What Not to Buy' },
  { id: 'products', title: 'Examples, by Sourced Ingredient' },
  { id: 'where', title: 'Where and When' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function ChiggersPage() {
  return (
    <UsPageLayout
      title="Chiggers"
      subtitle="They do not burrow into your skin and they do not drink your blood. Three university extension services say so in three different sets of words, and what is actually happening is stranger and more useful to know."
      lastUpdated="August 2026"
      readingTime="11 min"
      tocItems={tocItems}
      homeHref={CHIGGERS_HOME}
      clusterNav={CHIGGERS_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Almost everything widely believed about chiggers is wrong, and unusually for
        this subject the corrections are not a matter of opinion. Three university
        extension services, in three different states, take the trouble to say the same
        two things in their own words.
      </p>

      <h2 id="what-they-are">What They Actually Are</h2>
      <p>
        A chigger is not an insect and not a tick. Ohio State University Extension
        states that{' '}
        <strong>
          &ldquo;Chigger is a common name for tiny mite larva (family
          Trombiculidae)&rdquo;
        </strong>
        . Texas A&amp;M AgriLife Extension states that &ldquo;Chiggers are the immature
        stage of certain mites belonging to the family Trombiculidae,&rdquo; and that
        &ldquo;In Texas, the term &ldquo;chigger&rdquo; commonly is used to describe the
        parasitic larval stage of mites in the genus <em>Eutrombicula</em>.&rdquo;{' '}
        <em>
          (the inner quotation marks around the word are Texas A&amp;M AgriLife
          Extension&rsquo;s own and are left as published)
        </em>
      </p>
      <p>
        University of Maryland Extension gives the size, which explains why nobody ever
        sees one:{' '}
        <strong>
          &ldquo;Chiggers or red bugs are the tiny (1/120 to 1/150 inch) larvae of mites
          in the genus <em>Eutrombicula</em>.&rdquo;
        </strong>
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-6">
        <p className="m-0 text-base font-bold text-emerald-900">
          The two things three extension services go out of their way to correct
        </p>
        <p className="m-0 mt-4 text-base text-emerald-900">
          <strong>They do not burrow.</strong>
        </p>
        <ul className="mt-2 mb-0 space-y-2 text-base text-emerald-900">
          <li>
            Ohio State University Extension: &ldquo;Chiggers do not burrow into skin.
            This is a myth.&rdquo;
          </li>
          <li>
            University of Maryland Extension: &ldquo;Contrary to popular belief, chiggers
            do not burrow into the skin or suck blood.&rdquo;
          </li>
          <li>
            Texas A&amp;M AgriLife Extension: &ldquo;Contrary to common belief, chiggers
            do not burrow into a host&rsquo;s skin or suck blood.&rdquo;
          </li>
        </ul>
        <p className="m-0 mt-4 text-base text-emerald-900">
          <strong>They do not drink blood.</strong>
        </p>
        <ul className="mt-2 mb-0 space-y-2 text-base text-emerald-900">
          <li>
            Ohio State University Extension: &ldquo;Chiggers do not suck blood. They feed
            on dissolved skin cells.&rdquo;
          </li>
          <li>
            University of Maryland Extension: &ldquo;Chiggers feed on digested skin cells,
            not blood.&rdquo;
          </li>
        </ul>
      </div>

      <p>
        Texas A&amp;M explains why the burrowing belief looks correct to the person it is
        happening to:{' '}
        <strong>
          &ldquo;As the skin becomes red and swollen, it may completely envelop the
          feeding chigger, making it appear that the chigger has burrowed into the
          host&rsquo;s skin.&rdquo;
        </strong>{' '}
        The mite is sitting on the surface. The skin closes around it.
      </p>

      <h2 id="not-a-tick">Chigger Bite or Tick Bite</h2>
      <p>
        This is the question people actually arrive with, and there is a clean test:{' '}
        <strong>is anything still there?</strong>
      </p>
      <p>
        A chigger feeds and leaves. Ohio State University Extension states that
        &ldquo;Chiggers can feed for 2&ndash;4 days on their animal hosts, then they drop
        off&rdquo;. Texas A&amp;M states that &ldquo;Once a larva finds a host, it
        typically feeds for 3 days before dropping off.&rdquo; University of Maryland
        states that &ldquo;After attaching to the host, the larvae feed for up to 3
        days.&rdquo;{' '}
        <em>
          Those three figures are not identical and this page does not merge them into
          one number; each is quoted with the source that published it.
        </em>
      </p>
      <p>
        A tick does the opposite. CDC states that{' '}
        <strong>
          &ldquo;Ticks suck blood anywhere from minutes to days, depending on the tick
          species,&rdquo;
        </strong>{' '}
        and that &ldquo;Many species also secrete a cement-like substance that keeps them
        firmly attached during the meal.&rdquo; A tick is an animal you can generally see
        and have to remove; a chigger is usually gone before the itching starts. The
        removal procedure, and which tick carries what, are on{' '}
        <Link href="/us/ticks">our ticks page</Link>.
      </p>
      <p>
        Position is the second clue. Ohio State places chigger bites &ldquo;concentrated around the
        ankles under socks or shoe straps, near waistbands, under bra straps, and in
        armpits&rdquo;, and University of Maryland places them &ldquo;at hair follicles in
        areas where clothing is tight-fitting, such as the ankles, waist, and
        armpits&rdquo;. A line of bites
        following a sock top or a waistband is a chigger signature.
      </p>

      <h2 id="the-itch">Why the Itch Comes Late</h2>
      <p>
        What itches is not the mite. Ohio State University Extension describes the
        mechanism: the larvae &ldquo;secrete salivary enzymes in order to dissolve skin
        cells into an ingestible form. Affected skin cells and saliva form a{' '}
        <strong>stylostome, a tube-like channel or straw, from which the larva sucks the
        digested skin slurry</strong>&rdquo;. The same source states plainly that{' '}
        <strong>&ldquo;Itch is the result of your skin&rsquo;s reaction to the mite
        saliva&rdquo;</strong>.
      </p>
      <p>
        Which is why the timing feels wrong. University of Maryland states that{' '}
        <strong>
          &ldquo;Itching is usually not felt for 3 to 6 hours after attachment and may
          persist for up to 2 weeks.&rdquo;
        </strong>{' '}
        Texas A&amp;M agrees on onset and adds a peak: &ldquo;Itching usually begins within
        3 to 6 hours after an initial bite&rdquo; and &ldquo;Itching typically peaks at 24
        to 48 hours after chigger bites occur.&rdquo;
      </p>
      <p>
        By the time there is anything to feel, the animal that caused it has generally
        finished and gone. That one fact disposes of most chigger folklore, including
        every remedy premised on smothering something still in the skin.
      </p>
      <p>
        On scratching, University of Maryland states that{' '}
        <strong>
          &ldquo;Scratching often removes the mite but can result in a secondary
          infection.&rdquo;
        </strong>
      </p>

      <h2 id="biology">Only the Larva Bites</h2>
      <p>All three sources make the same point in their own words:</p>
      <ul>
        <li>
          Ohio State University Extension: &ldquo;Only the chigger mites&rsquo; larval
          stage is parasitic.&rdquo; The same source notes &ldquo;The chigger larva is the
          pest stage and has six legs&rdquo;.
        </li>
        <li>
          University of Maryland Extension: &ldquo;Only the larval life stage bites
          humans.&rdquo; It adds that &ldquo;The nymph and adult stages feed on
          arthropods.&rdquo;
        </li>
        <li>
          Texas A&amp;M AgriLife Extension: &ldquo;Only the chigger larvae are
          parasitic.&rdquo;
        </li>
      </ul>
      <p>
        The two sources that count the life stages do not count them the same way.
        University of Maryland lists &ldquo;egg, deutovum, larva, protonymph, deutonymph,
        tritonymph, and adult&rdquo;; Texas A&amp;M states they &ldquo;pass through four
        life stages: egg, larva, nymph and adult.&rdquo;{' '}
        <em>
          Those are different levels of detail rather than a contradiction, and this page
          keeps each with its source rather than presenting one as the other.
        </em>
      </p>
      <p>
        For the rest of the cycle, University of Maryland states that &ldquo;Adults
        overwinter in the soil,&rdquo; that &ldquo;Eggs are laid in damp soil during the
        first warm spring weather,&rdquo; and that{' '}
        <strong>
          &ldquo;After hatching, the larvae crawl on the soil or up grass blades in search
          of a host.&rdquo;
        </strong>{' '}
        The engorged larvae &ldquo;then drop to the soil to complete development to nymph,
        then adult.&rdquo;
      </p>

      <h2 id="disease">Disease, and Scrub Typhus</h2>
      <p>
        For the United States the position is short. University of Maryland Extension
        states:{' '}
        <strong>
          &ldquo;Chiggers are not known to transmit any infectious diseases in the United
          States.&rdquo;
        </strong>{' '}
        The Ohio State and Texas A&amp;M fact sheets carry no disease-transmission
        statement at all; both were checked for one.
      </p>
      <p>
        Scrub typhus does involve chiggers, and it belongs in a different place. CDC
        states that{' '}
        <strong>
          &ldquo;Scrub typhus is transmitted to humans through bites from infected larval
          trombiculid mites, commonly known as chiggers,&rdquo;
        </strong>{' '}
        and that{' '}
        <strong>
          &ldquo;Scrub typhus is distributed throughout the Asia-Pacific region. It is
          endemic to Korea, China, Taiwan, Japan, Pakistan, India, Bangladesh, Thailand,
          Laos, Malaysia, Vietnam, Sri Lanka, and Australia.&rdquo;
        </strong>
      </p>
      <p>
        The species matter. CDC names the vectors as &ldquo;<em>Leptotrombidium
        pallidum</em>, <em>L. fuji</em>, <em>L. scutellare</em>, and <em>L.
        akamushi</em>&rdquo;. The chiggers the US extension services describe are{' '}
        <em>Eutrombicula</em>. Different genus, different region &mdash; which is why the
        Maryland sentence above sits directly beside this one rather than anywhere else on
        the page.
      </p>

      <h2 id="prevention">Not Being Bitten</h2>
      <p>
        <strong>Washing is the step every source names, and it costs nothing.</strong>{' '}
        Ohio State University Extension states that{' '}
        <strong>&ldquo;Showering will remove the mite&rdquo;</strong>, that &ldquo;wiping
        exposed skin with a washcloth or showering will help dislodge and remove
        chiggers&rdquo;, and to &ldquo;Make sure to wash clothing on the hot setting to
        kill any remaining mites&rdquo;. Texas A&amp;M advises to &ldquo;Take a warm, soapy
        shower or bath within a few hours after exposure to chiggers&rdquo; and to
        &ldquo;Scrub your skin vigorously with a washcloth to dislodge any mites.&rdquo;
        University of Maryland recommends lathering and rinsing several times in a hot
        shower to remove any remaining chiggers, and states that{' '}
        <strong>
          &ldquo;Prompt mite removal can lessen the duration and intensity of the
          itching.&rdquo;
        </strong>
      </p>
      <p>
        <strong>Clothing.</strong> Texas A&amp;M advises to &ldquo;Wear protective
        clothing, such as long pants, long-sleeved shirts and shoes or boots,&rdquo; and to{' '}
        <strong>&ldquo;Tuck pants legs inside boots, and button your cuffs and
        collar&rdquo;</strong>; it describes loose-fitting, tightly woven fabrics as
        offering the strongest protection of the fabrics it discusses. University of
        Maryland states that &ldquo;Long sleeved shirts and long pants, tied at the ankles,
        are recommended.&rdquo; Two sources independently point at closing the ankle, which
        is exactly where the bites cluster.
      </p>
      <p>
        <strong>Repellents, by ingredient.</strong> Ohio State advises to &ldquo;Use insect
        repellent such as DEET, picaridin, or lemon-oil-of-eucalyptus products and wear
        protective clothing&rdquo;. Texas A&amp;M states that &ldquo;Commercially available
        insect repellents containing DEET (N,N-diethyl-meta-toluamide) offer
        protection&rdquo; and to &ldquo;Apply repellents according to label
        directions.&rdquo;
      </p>
      <p>
        <strong>Permethrin, and only on fabric.</strong> Texas A&amp;M states:{' '}
        <strong>&ldquo;Apply products containing permethrin (such as Permanone&reg; Tick
        Repellent) to clothing.&rdquo;</strong> No source consulted for this page gives a
        permethrin concentration for chiggers, so none is stated here.
      </p>

      <h2 id="yard">The Yard, and What Not to Buy</h2>

      <div className="not-prose my-8 rounded-lg border-l-4 border-slate-500 bg-slate-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-slate-900">
          On yard treatments, the extension services do not agree &mdash; and this page
          does not pick a side
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>
            University of Maryland Extension: &ldquo;The use of pesticides to control
            chiggers is not recommended or effective.&rdquo;
          </strong>
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          Ohio State University Extension states that &ldquo;Bifenthrin or permethrin are
          two active ingredients in over-the-counter products&rdquo;. Texas A&amp;M
          AgriLife Extension states that &ldquo;Residual insecticide sprays, such as those
          containing bifenthrin, cyfluthrin, esfenvalerate or permethrin,{' '}
          <strong>can help suppress chigger numbers</strong>&rdquo; &mdash; a claim about
          suppressing numbers, not about eliminating them.
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>
            This page sells no yard treatment for chiggers, and that is a deliberate
            outcome rather than an oversight.
          </strong>{' '}
          Every product checked against these sources was tested for whether its own
          listing so much as mentions chiggers. None did. Rather than put a tick or
          general-purpose lawn product in the gap and let the heading imply it was
          sourced for chiggers, the category is empty.
        </p>
      </div>

      <p>
        Where all three sources do agree is the part that involves no purchase at all, and
        they agree on the mechanism as well as the action: dry the habitat out.
      </p>
      <ul>
        <li>
          University of Maryland Extension:{' '}
          <strong>
            &ldquo;Reduce chigger populations by keeping lawns mowed and shrubbery trimmed.
            These practices promote good air circulation, which dries out the area, making
            it less favorable for chigger development.&rdquo;
          </strong>
        </li>
        <li>
          Ohio State University Extension: &ldquo;Integrated pest-management solutions
          could include brush control, mowing lawns, and adjusting landscape features to
          increase sun exposure and air flow&rdquo;.
        </li>
        <li>
          Texas A&amp;M AgriLife Extension: &ldquo;Keeping grass cut short and vegetation
          well-trimmed can raise soil temperatures and lower humidity.&rdquo;
        </li>
      </ul>
      <p>
        On habitat, University of Maryland states that chiggers are{' '}
        <strong>
          &ldquo;most often found in vegetation transition zones such as along the junction
          of forest and grass, along margins of swamps, brush thickets and even home lawns
          or golf courses&rdquo;
        </strong>
        , and Ohio State that &ldquo;Preferred egg-laying sites include the humid soils of
        grassy fields, scrubby weedy areas, and lawns&rdquo;. Texas A&amp;M separates two
        species by habitat: &ldquo;<em>Eutrombicula alfreddugesi</em> inhabits disturbed
        grassy and weedy upland areas&rdquo; while &ldquo;<em>Eutrombicula splendens</em>
        prefers moist habitats such as swamps and bogs.&rdquo;
      </p>

      <h2 id="products">Examples, by Sourced Ingredient</h2>
      <p>
        <strong>
          These are examples of the ingredient classes the sources name, grouped by what
          each is for. They are in no order of preference and none is called better than
          another, because no source consulted for this page compares any two named
          products.
        </strong>{' '}
        What is selected is selected against an ingredient a source actually named, not
        against a brand.
      </p>
      <p>
        Two categories a reader might expect are deliberately absent, and both absences are
        stated rather than filled.{' '}
        <strong>There is no yard treatment</strong>, for the reason set out above.{' '}
        <strong>There is no DEET product</strong>, even though Ohio State lists DEET first
        and Texas A&amp;M names it explicitly &mdash; no DEET listing could be sourced and
        confirmed available when the products on this page were checked on 23 August 2026,
        and nothing was substituted into the gap.
      </p>

      <h3>Repellents and clothing treatment</h3>
      <p>
        These three also appear on <Link href="/us/ticks">our ticks page</Link>. They are
        listed here because the ingredient classes are independently named for chiggers by
        Ohio State and Texas A&amp;M, and because each product&rsquo;s own listing states
        chigger use.
      </p>

      <UsToolCard
        name="Sawyer Premium Permethrin Insect Repellent for Clothing, Gear &amp; Tents"
        whatItDoes={[
          'A permethrin treatment for fabric, not for skin. Texas A&M AgriLife Extension states to apply products containing permethrin to clothing.',
          'No source consulted for this page gives a permethrin concentration for chiggers, so none is claimed here.',
          'Texas A&M advises tucking pants legs inside boots and buttoning cuffs and collars, which is where treated fabric matters most.',
        ]}
        asin="B001ANQVYU"
      />

      <UsToolCard
        name="Sawyer Products SP543 Premium Insect Repellent with 20% Picaridin, Pump Spray"
        whatItDoes={[
          'Picaridin is one of the repellent ingredients Ohio State University Extension names for chiggers, alongside DEET and lemon-oil-of-eucalyptus products.',
          'Texas A&M AgriLife Extension states to apply repellents according to label directions.',
        ]}
        asin="B002CMQJYU"
      />

      <UsToolCard
        name="OFF! Deep Woods Max Insect Repellent, Mosquito &amp; Tick Aerosol with 20% Picaridin"
        whatItDoes={[
          'A second example of the same ingredient Ohio State University Extension names, in an aerosol rather than a pump spray.',
          'Ohio State University Extension pairs repellent use with protective clothing rather than presenting it as sufficient on its own.',
        ]}
        asin="B0G5VN3GB3"
      />

      <h3>After a bite</h3>

      <div className="not-prose my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-red-900">
          Read this before the four cards below
        </p>
        <p className="m-0 mt-3 text-base text-red-900">
          <strong>
            Ohio State University Extension: &ldquo;Extension Staff are not medical
            professionals and cannot diagnose bites or other skin ailments.&rdquo;
          </strong>{' '}
          The same source advises to &ldquo;speak with a pharmacist or medical professional
          for recommendations on reducing itchy symptoms&rdquo;.
        </p>
        <p className="m-0 mt-3 text-base text-red-900">
          <strong>
            University of Maryland Extension: &ldquo;Topical creams or ointments help to
            relieve itching. Ask your physician for a recommendation.&rdquo;
          </strong>
        </p>
        <p className="m-0 mt-3 text-base text-red-900">
          One source of the three names ingredients. Texas A&amp;M AgriLife Extension names
          oral antihistamines, anti-itch creams containing camphor and menthol, calamine or
          pramoxine, and hydrocortisone ointments, and advises applying an antiseptic
          ointment to prevent infection. The four products below are examples of the
          ingredients Texas A&amp;M named.{' '}
          <strong>
            They are not a recommendation from us, and nothing on this page is medical
            advice. Two of the three sources tell you to ask a pharmacist or a physician,
            and that instruction is theirs, not ours.
          </strong>
        </p>
      </div>

      <UsToolCard
        name="Amazon Basics Medicated Calamine Anti-Itch Lotion, 6 Fluid Ounce"
        whatItDoes={[
          'Calamine is one of the anti-itch cream ingredients Texas A&M AgriLife Extension names.',
          'University of Maryland Extension states that topical creams or ointments help to relieve itching, and to ask your physician for a recommendation.',
          'Ohio State University Extension states that extension staff are not medical professionals and cannot diagnose bites or other skin ailments.',
        ]}
        asin="B0BJRS2F8H"
      />

      <UsToolCard
        name="Leader Medicated Calamine Clear Lotion, Anti-Itch, External Analgesic Skin Protectant"
        whatItDoes={[
          'A second example of calamine, the ingredient Texas A&M AgriLife Extension names.',
          'University of Maryland Extension states that scratching often removes the mite but can result in a secondary infection.',
        ]}
        asin="B08TKJY4R8"
      />

      <UsToolCard
        name="Cortizone-10 Soothing Aloe Itch Relief Cream, 1% Hydrocortisone"
        whatItDoes={[
          'Hydrocortisone ointments are among the approaches Texas A&M AgriLife Extension names for relief.',
          'Ohio State University Extension advises speaking with a pharmacist or medical professional for recommendations on reducing itchy symptoms.',
        ]}
        asin="B0BJMQBSKJ"
      />

      <UsToolCard
        name="Cortizone-10 Water Resistant Itch Relief Ointment, 1% Hydrocortisone"
        whatItDoes={[
          'A second example of hydrocortisone, the ingredient Texas A&M AgriLife Extension names.',
          'Texas A&M AgriLife Extension separately advises applying an antiseptic ointment to prevent infection.',
        ]}
        asin="B0BJMDMDCX"
      />

      <p>
        Seven products appear above and there is no eighth. No monitoring or detection
        product is listed either: no source consulted describes any way of monitoring for
        chiggers, so that category does not exist on this page.
      </p>

      <h2 id="where">Where and When</h2>
      <p>
        Every seasonality statement in the sources is written about a particular state, and
        this page keeps them that way rather than turning them into a national claim.
      </p>
      <p>
        Ohio State University Extension states that{' '}
        <strong>
          &ldquo;the greatest numbers in Ohio are present in June through August&rdquo;
        </strong>
        . Texas A&amp;M AgriLife Extension states that{' '}
        <strong>
          &ldquo;Chiggers are active from late spring to fall in most parts of Texas, but
          they may remain active year-round in southern areas.&rdquo;
        </strong>{' '}
        The University of Maryland material is a Maryland fact sheet.
      </p>
      <p>
        <strong>
          A page for the South and Southeast, where year-round activity and swamp-margin
          habitat would carry real weight, would need its own sources. It has not been
          written, and this page does not stand in for one.
        </strong>
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the five publications below:
        three university extension services and two Centers for Disease Control and
        Prevention pages, the second of which is used only for the tick side of the
        comparison. Where two sources give different figures for the same thing, both are
        quoted with their attributions rather than merged, and where a source declines to
        make a recommendation that refusal is reported rather than filled in. Two further
        extension fact sheets, from University of Missouri Extension and Oklahoma State
        University Extension, could not be retrieved when this page was written and nothing
        from them is used. The product names above were read from each product&rsquo;s own
        listing on 23 August 2026 and are recorded rather than assessed; the listings read
        were B001ANQVYU, B002CMQJYU, B0G5VN3GB3, B0BJRS2F8H, B08TKJY4R8, B0BJMQBSKJ and
        B0BJMDMDCX. Each is reachable from its own card above, where the disclosure sits
        directly beside the link, and they are named here rather than linked again so that
        every link to a product on this page carries its disclosure. Framing and ordering
        are our own judgement and are not a finding of any source.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
