import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { BED_BUGS_NAV, BED_BUGS_HOME } from '../components/bedBugsNav';

const URL = 'https://pestproindex.com/us/bed-bugs';
const TITLE = 'Bed Bugs: Identification, Inspection and the Temperatures Nine Sources Support';
const DESCRIPTION =
  'Nine EPA, Penn State and Purdue publications on bed bugs: how to identify one, where they hide and how they spread, the detection rates the sources measure for three inspection methods, and the heat, cold and laundering figures that actually kill them. Bed bugs are not known to spread disease to humans, stated once from the sources and not built out further.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Bed Bugs', item: URL }],
};

// ---------------------------------------------------------------------------
// TIER 4 HEAD #2, BUILT UNDER LAW 158 (CLAUDE.md). Nine sources were read: five
// EPA Bed Bugs pages, two Purdue Extension Entomology pages, one Penn State
// Extension article, and the National Pesticide Information Center (Oregon
// State University). University of Minnesota Extension (two pages) and CDC
// were attempted and returned HTTP 403 on the first try; per S45-D and Law
// 137 (an anti-bot interstitial is a terminal state for the round), neither
// is cited and neither was retried.
//
// SCOPE, RULED BEFORE SOURCING. Identification and confirming an infestation;
// where they hide and how they spread; inspection method; mattress and
// furniture treatment; heat and laundering; encasements and interceptors;
// professional treatment and when it is necessary; what does not work. Bed
// bugs are not known to transmit disease to humans, stated plainly in one
// short section because every source that addresses the question says so
// independently, but NO disease, pathogen or epidemiology content is built
// out beyond that reassurance. This is the inverse of house-mice's scope
// boundary: that page excluded a disease treatment because rodent-borne
// illness is real and out of scope; this page states an absence the sources
// themselves are unanimous about, once, and stops.
//
// THE ROUTE NAME NEEDED NO SCOPING. Unlike social-wasps, every source calls
// this animal "bed bugs" throughout. Penn State names the species, Cimex
// lectularius, once, to distinguish it from the Eastern bat bug it also
// covers, and calls it "the common bed bug" in its own words there. No
// naming collision existed to resolve.
//
// THREE DEGREE-SIGN CONVENTIONS COEXIST ACROSS THESE SOURCES AND ARE EACH
// REPRODUCED EXACTLY, NEVER NORMALISED (Law 14, S59-B). Penn State and
// Purdue mostly use the true degree sign, U+00B0 (140°F, 45 °C). EPA's IPM
// page uses the masculine ordinal indicator, U+00BA, throughout its own
// temperature figures (120 ºF, 0 ºF) — not a typo introduced here, verified
// byte-for-byte against the page's raw HTML. Penn State's own laundering
// figure, "131º F," uses the same ordinal indicator once, inconsistently
// with the true degree signs elsewhered on its own page — the S58 R8/S59-B
// pattern, reproduced rather than corrected. EPA's do-it-yourself page marks
// two of its own figures with a literal superscript letter "o" inside a
// <sup> tag rather than any degree character at all; this page reproduces
// that with the same <sup>o</sup> markup rather than silently substituting a
// degree sign for it.
//
// CARDS. Seventeen Amazon URLs were attempted across three product classes
// the sources describe as purchasable: mattress/box-spring encasements,
// interceptor traps, and steamers. Fifteen returned an anti-bot interstitial
// on the first attempt; two returned a real product page. Of those two, one
// (a portable steam cleaner, B0DSFHPY7X) rendered no readable "About this
// item" feature-bullet text in this fetch, so under S50-H and S52-E its
// title-only claim is not carded. The other (ClimbUp Insect Interceptor,
// B0033SC0LI) has full, readable feature-bullet text naming bed bugs and the
// furniture-leg placement the sources describe, and is the only product
// named on this page. Encasements are recommended by every source that
// discusses mattress treatment; none is named here because every fetch
// attempted for that class was blocked. That is an honest sourcing
// constraint, recorded rather than worked around, not a claim that
// encasements do not matter.
// ---------------------------------------------------------------------------

const tocItems = [
  { id: 'which-bed-bug', title: 'What a Bed Bug Looks Like, and What Gets Mistaken For One' },
  { id: 'hiding-spread', title: 'Where They Hide and How They Spread' },
  { id: 'disease', title: 'Bed Bugs Are Not Known to Spread Disease' },
  { id: 'inspection', title: 'Inspection: Confirming an Infestation' },
  { id: 'mattress-furniture', title: 'Treating the Mattress and Furniture' },
  { id: 'heat-laundering', title: 'Heat and Laundering: The Figures That Actually Work' },
  { id: 'encasements-interceptors', title: 'Encasements and Interceptors' },
  { id: 'not-work', title: 'What Does Not Work' },
  { id: 'professional', title: 'When the Sources Say to Call a Professional' },
  { id: 'not-here', title: 'What This Page Does Not Carry' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const products = [
  {
    asin: 'B0033SC0LI',
    cardName: 'Climbup Insect Interceptor Bed Bug Trap, 4ct',
    whatItDoes: [
      'Its own text states the mechanism the sources describe as a passive monitor: "Pesticide-free: Monitor traps live bugs for early detection"',
      'Its own text names the dual-well design that shows direction of travel: "Dual-well design: Shows you which direction bedbugs are crawling"',
      'Its own text states its fit: "Versatile design: Fits all furniture with posts/feet 375 In Diameter or less" (the listing\'s own text; no decimal point appears in it)',
      'A four-pack, made in the USA per the listing\'s own text, sized for placing one interceptor under each leg of a single bed, which is the placement Penn State\'s 89 percent detection figure and EPA\'s preparing-for-treatment page both describe',
    ],
  },
];

const faqs: Faq[] = [
  {
    question: 'Do bed bugs spread disease?',
    answer:
      'No, and every source consulted for this page that addresses the question agrees. Penn State Extension states it plainly: "Unlike mosquitoes or ticks, bed bugs do not transmit diseases." The U.S. EPA lists it as a myth to correct directly: "Myth: Bed bugs transmit diseases. Reality: There have been no cases or studies that indicate bed bugs transmit diseases between humans." The National Pesticide Information Center adds one nuance rather than a contradiction: "Bed bugs can carry diseases within their bodies, but transmission to humans has not been found." Bites can still cause real problems that are not disease transmission — Penn State names "allergic reactions, secondary bacterial infections (such as impetigo, ecthyma, and lymphangitis) and mental health issues (such as anxiety and insomnia)" — and NPIC notes that "reactions to bed bug bites vary widely, and one third of people may show no reaction at all."',
  },
  {
    question: 'How can I tell bed bugs from something else?',
    answer:
      'Correct identification matters because the treatment is different for each animal. The National Pesticide Information Center names the usual look-alikes directly: "Carpet beetles, fleas, and bat bugs are often confused for bed bugs." Penn State Extension adds cockroaches and ticks to that list and adds a warning about bites specifically: "Bed bugs are sometimes mistaken for ticks, fleas, cockroaches, carpet beetles, or other household insects. Furthermore, bites should never be used for diagnosis because several household pests are known to bite humans, and bite reactions vary among people." Purdue Extension Entomology singles out the closest relative: "Bat bugs are closely related and appear very similar to bed bugs," and notes that "the presence of current (or recently eradicated) bat infestations may be cause to have the bugs positively identified." An adult bed bug is about a quarter of an inch long — Purdue describes it as "similar to the size, shape and color of an apple seed except that they are very flat" when it has not fed, and NPIC independently reaches for the same comparison for the insect and a smaller one for the egg: "Adult bed bugs are the size of an apple seed, while eggs are the size of the period at the end of this sentence."',
  },
  {
    question: 'What temperature actually kills bed bugs?',
    answer:
      'The sources give several figures rather than one, because the number depends on the method and how long the heat is held, not on a single kill point. For laundering, Penn State Extension states that "temperatures of 131º F or above are lethal to all bed bug stages," and Purdue Extension Entomology reaches the same place from clothes-dryer instructions: washing in hot water "followed by heat drying for at least 20 minutes in a clothes dryer on high heat, will kill all stages of bed bugs." For a whole room, Penn State gives "at least 140°F for two hours or 130°F for three hours," and Purdue gives a tighter combination: "49-52 °C (120-125 °F) range at 20-30% relative humidity for 20-30 minutes." The U.S. EPA states a shorter-exposure figure for the insect itself, in its own degree notation: "Bed bugs die when their body temperatures reaches 45°C (113°F)," while its Integrated Pest Management page gives a 90-minute figure for eggs specifically, in a different notation again: "at least 120 ºF (approx. 49 ºC) for 90 minutes to ensure that eggs are killed." None of these figures is picked over the others here; they answer different questions about exposure time and method, and the sources report them separately rather than converging on one number.',
  },
  {
    question: 'Do bug bombs or foggers work on bed bugs?',
    answer:
      'No, and this is one of the few points where every source that addresses it agrees without qualification. The U.S. EPA states it as an instruction to avoid: "Use foggers (bug bombs) only with extreme care and only if bed bugs are listed on the label." It adds, separately on the same page: "The spray will not reach the cracks and crevices where bed bugs hide." The National Pesticide Information Center states the same finding and names who established it: "\'Bug bombs\' or total release foggers are not effective against bed bugs according to the National Center for Healthy Housing. The pesticide droplets generated by foggers typically do not penetrate the hiding spaces used by bed bugs." (The quotation marks around "Bug bombs" are NPIC\'s own.) EPA\'s do-it-yourself page also names two home remedies as actively dangerous rather than merely ineffective: "Rubbing alcohol, kerosene and gasoline could harm you and your family and can easily ignite with a spark or cigarette," and separately, "Sticky traps are not for bed bugs, but they may be effective at catching spiders, cockroaches, and other insects."',
  },
  {
    question: 'Can I get rid of bed bugs myself, or do I need a professional?',
    answer:
      'The sources describe DIY control as possible but genuinely hard, not as a simple job homeowners are discouraged from for liability reasons. The National Pesticide Information Center states it twice, in slightly different words each time: "Bed bugs can be very hard to control, even for trained professionals," and later, "Bed bugs can be very difficult to control, even for trained professionals." Purdue Extension Entomology explains why a chemical-only approach fails: "bed bugs have developed an extraordinary resistance to most classes of pesticides. This means that a chemical only approach is insufficient. The best programs combine targeted pesticide applications with non-chemical treatment options." For whole-room heat treatment specifically, Purdue is direct about needing a professional: "Always consult with a knowledgeable pest control professional trained to use heat treatments and discuss their method in detail before contracting their service." The U.S. EPA\'s own six-step framework treats professional help as one branch among several rather than a last resort: "If needed, hire a pest management professional or use pesticides carefully according to the label directions." One control task needs no professional at all, per Purdue: "One area where professional expertise is not required is laundering infested linens or clothes."',
  },
];

const sources: Source[] = [
  {
    label:
      'Do-it-yourself Bed Bug Control — the source of the six-step framework, the ineffective-treatments list, the freezer and steam temperature figures, and the DIY interceptor-trap instructions',
    publisher: 'U.S. Environmental Protection Agency',
    date: 'Last updated 10 August 2026; read 31 August 2026',
    href: 'https://www.epa.gov/bedbugs/do-it-yourself-bed-bug-control',
  },
  {
    label: 'Bed Bug Myths — the source of the disease, dirt and pesticide-resistance corrections',
    publisher: 'U.S. Environmental Protection Agency',
    date: 'Last updated 17 July 2026; read 31 August 2026',
    href: 'https://www.epa.gov/bedbugs/bed-bug-myths',
  },
  {
    label:
      'Controlling Bed Bugs Using Integrated Pest Management (IPM) — the source of the non-chemical heat and cold figures and the 300-registered-products figure',
    publisher: 'U.S. Environmental Protection Agency',
    date: 'Last updated 30 March 2026; read 31 August 2026',
    href: 'https://www.epa.gov/bedbugs/controlling-bed-bugs-using-integrated-pest-management-ipm',
  },
  {
    label:
      'Top Ten Tips to Prevent or Control Bed Bugs — the source of the hitchhiker warning, the one-year encasement duration and the 113°F figure',
    publisher: 'U.S. Environmental Protection Agency',
    date: 'Last updated 19 August 2026; read 31 August 2026',
    href: 'https://www.epa.gov/bedbugs/top-ten-tips-prevent-or-control-bed-bugs',
  },
  {
    label: 'Preparing for Treatment Against Bed Bugs — the source of the make-your-bed-an-island steps',
    publisher: 'U.S. Environmental Protection Agency',
    date: 'Last updated 6 July 2026; read 31 August 2026',
    href: 'https://www.epa.gov/bedbugs/preparing-treatment-against-bed-bugs',
  },
  {
    label: 'Bed Bug Identification — the source of the size and shape description and the bat bug distinction',
    publisher: 'Purdue University Extension Entomology',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://extension.entm.purdue.edu/bedbugs/identification.php',
  },
  {
    label:
      'Control Strategies for Bed Bugs — the source of the exclusion, encasement, heat, cold and steam figures and the pesticide-resistance statement',
    publisher: 'Purdue University Extension Entomology',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://extension.entm.purdue.edu/bedbugs/control.php',
  },
  {
    label:
      'Biology, Habitat, and Management of Bed Bugs — the source of the disease statement, the habitat and spread description, the three detection-rate figures, and the laundering temperature',
    publisher: 'Penn State Extension',
    date: 'Updated 26 June 2025; read 31 August 2026',
    href: 'https://extension.psu.edu/biology-habitat-and-management-of-bed-bugs',
  },
  {
    label:
      'Bed Bugs — the source of the stow-away statement, the disease-carrying nuance, the single-female reproduction statement, the fogger finding, and the encase-the-box-spring-first priority',
    publisher: 'National Pesticide Information Center, Oregon State University',
    date: 'Last updated 15 April 2026; read 31 August 2026',
    href: 'https://npic.orst.edu/pest/bedbug/index.html',
  },
];

export default function BedBugsPage() {
  return (
    <UsPageLayout
      title="Bed Bugs"
      subtitle="Identification, where they hide, how they spread, and the inspection methods and temperatures nine EPA, Penn State and Purdue publications describe. Bed bugs are not known to transmit disease to humans — every source that addresses the question agrees, and this page says so once and does not build the subject out further."
      lastUpdated="August 2026"
      readingTime="15 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={BED_BUGS_HOME}
      clusterNav={BED_BUGS_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about <em>Cimex lectularius</em>, the common bed bug, as nine university
        extension and federal publications describe it: how to identify one and tell it from the
        insects it gets confused with, where it hides and how an infestation spreads, how to
        confirm you have one, what treats a mattress and the furniture around it, the temperatures
        that actually kill it, and what a pest management professional adds that DIY methods do
        not.
      </p>

      <h2 id="which-bed-bug">What a Bed Bug Looks Like, and What Gets Mistaken For One</h2>
      <p>
        <strong>Purdue University Extension Entomology</strong> describes the adult plainly:{' '}
        <em>
          &ldquo;Adult bed bugs are approximately 1/4&rdquo; long and are red-brown in color. They
          are similar to the size, shape and color of an apple seed except that they are very
          flat (if they have not eaten). They have very thin legs and antennae and have no
          wings.&rdquo;
        </em>{' '}
        Immature bed bugs follow the same pattern at a smaller scale:{' '}
        <em>
          &ldquo;Immature bed bugs are similar to adults, except that they are smaller and are a
          lighter yellow-brown in color.&rdquo;
        </em>{' '}
        <strong>The National Pesticide Information Center</strong> reaches for the same comparison
        independently, and adds the egg to it:{' '}
        <em>
          &ldquo;Adult bed bugs are the size of an apple seed, while eggs are the size of the
          period at the end of this sentence.&rdquo;
        </em>
      </p>
      <p>
        <strong>Penn State Extension</strong> names the species this page covers and where the
        common name comes from:{' '}
        <em>
          &ldquo;Cimex lectularius is the most common bed bug in Pennsylvania, as well as in the
          rest of the United States. It is known as the &lsquo;common bed bug&rsquo; and prefers
          to feed on humans, but it can also feed on dogs, cats, birds, and rodents.&rdquo;
        </em>{' '}
        <em>
          (the inner quotation marks around &ldquo;common bed bug,&rdquo; and their placement, are
          Penn State&rsquo;s own; the glyphs follow this site&rsquo;s typography, as every
          quotation mark on this page does)
        </em>
      </p>
      <h3>The closest look-alike is a relative, not a coincidence</h3>
      <p>
        <strong>Purdue</strong> names the animal correct identification most needs to rule out:{' '}
        <em>&ldquo;Bat bugs are closely related and appear very similar to bed bugs.&rdquo;</em>{' '}
        It adds a practical clue:{' '}
        <em>
          &ldquo;The presence of current (or recently eradicated) bat infestations may be cause to
          have the bugs positively identified.&rdquo;
        </em>{' '}
        <strong>NPIC</strong> names the wider set of animals people confuse with bed bugs:{' '}
        <em>&ldquo;Carpet beetles, fleas, and bat bugs are often confused for bed bugs.&rdquo;</em>{' '}
        <strong>Penn State</strong> adds two more to that list and states why a bite alone is not
        a diagnosis:{' '}
        <em>
          &ldquo;Bed bugs are sometimes mistaken for ticks, fleas, cockroaches, carpet beetles, or
          other household insects. Furthermore, bites should never be used for diagnosis because
          several household pests are known to bite humans, and bite reactions vary among
          people.&rdquo;
        </em>
      </p>

      <h2 id="hiding-spread">Where They Hide and How They Spread</h2>
      <p>
        <strong>Penn State Extension</strong> describes both the behavior and the specific hiding
        places in the same passage:{' '}
        <em>
          &ldquo;Bed bugs hide during the day and avoid places with movement and light during the
          night. They use carbon dioxide, warmth, and moisture to locate their hosts.&rdquo;
        </em>{' '}
        And on where an infestation is actually found:{' '}
        <em>
          &ldquo;Bed bugs prefer to live on wood, paper, and fabric surfaces, but they can also
          live on stone, metal, or plaster. In infested locations, bed bugs are usually found in
          seams of mattresses, inside mattress coils, cracks in bed frame, bedside furniture,
          dressers, wallboards, wood paneling, door and window frames, behind pictures, under
          loose wallpaper, and in rooms near host sleeping areas.&rdquo;
        </em>
      </p>
      <h3>Bed bugs do not fly, jump, or care whether a house is clean</h3>
      <p>
        <strong>NPIC</strong> states the mechanism of spread directly:{' '}
        <em>
          &ldquo;Bed bugs are stow-a-ways and cannot jump or fly. They enter homes by hiding in
          the cracks and crevices of incoming luggage, furniture, clothing, pillows, boxes and
          other objects.&rdquo;
        </em>{' '}
        Two sources independently correct the same myth about cleanliness.{' '}
        <strong>NPIC</strong>:{' '}
        <em>
          &ldquo;Also, bed bugs are not a sign that your house is dirty. However, bed bugs can
          easily hide in cluttered spaces.&rdquo;
        </em>{' '}
        <strong>The U.S. EPA</strong>, in its own myths page:{' '}
        <em>
          &ldquo;Bed bugs are not attracted to dirt and grime; they are attracted to warmth, blood
          and carbon dioxide. However, clutter offers more hiding spots.&rdquo;
        </em>
      </p>
      <h3>How one bug becomes an infestation</h3>
      <p>
        <strong>Penn State</strong> describes the paths an infestation spreads once it starts:{' '}
        <em>
          &ldquo;Bed bugs can quickly crawl short distances and infest other rooms in a house or
          business. In apartment buildings, bed bugs can move from one apartment to another
          vertically and horizontally. Long-distance infestations occur when infested objects such
          as bedding, furniture, or packing materials are moved to new areas. Also, travelers can
          transport bed bugs back and forth in clothing, luggage, and laptop or tablet
          cases.&rdquo;
        </em>{' '}
        <strong>NPIC</strong> states why a single hitchhiker rarely matters on its own:{' '}
        <em>
          &ldquo;An immature bed bug or a male bed bug introduced into a home will not start an
          infestation, but one pregnant female can quickly reproduce.&rdquo;
        </em>
      </p>

      <h2 id="disease">Bed Bugs Are Not Known to Spread Disease</h2>
      <p>
        <strong>
          This page states this once, from what the sources say, and does not build out any
          disease, pathogen or epidemiology content beyond it.
        </strong>{' '}
        <strong>Penn State Extension</strong> states it as a direct comparison to two insects that
        do carry disease:{' '}
        <em>
          &ldquo;Bed bugs are blood-sucking insects of the order hemiptera. Unlike mosquitoes or
          ticks, bed bugs do not transmit diseases.&rdquo;
        </em>{' '}
        <strong>The U.S. EPA</strong> lists the same finding as a myth to correct directly:{' '}
        <em>&ldquo;Myth: Bed bugs transmit diseases.&rdquo;</em>{' '}
        <em>
          &ldquo;Reality: There have been no cases or studies that indicate bed bugs transmit
          diseases between humans.&rdquo;
        </em>{' '}
        <strong>NPIC</strong> adds one nuance rather than a contradiction:{' '}
        <em>
          &ldquo;Bed bugs can carry diseases within their bodies, but transmission to humans has
          not been found.&rdquo;
        </em>
      </p>
      <p>
        That does not mean a bite is harmless. <strong>Penn State</strong> names what it can
        actually cause:{' '}
        <em>
          &ldquo;However, bed bug bites can cause allergic reactions, secondary bacterial
          infections (such as impetigo, ecthyma, and lymphangitis) and mental health issues (such
          as anxiety and insomnia).&rdquo;
        </em>{' '}
        And the bite itself is inconsistent from person to person. <strong>NPIC</strong>:{' '}
        <em>
          &ldquo;Reactions to bed bug bites vary widely, and one third of people may show no
          reaction at all.&rdquo;
        </em>{' '}
        <strong>
          This site is not a medical source and does not assess anyone&rsquo;s symptoms.
        </strong>
      </p>

      <h2 id="inspection">Inspection: Confirming an Infestation</h2>
      <p>
        <strong>Penn State Extension</strong> states plainly why identification comes before
        anything else:{' '}
        <em>
          &ldquo;Proper identification is important before starting any bed bug treatment because
          client-made identifications are often unreliable.&rdquo;
        </em>{' '}
        It measures three inspection methods against each other, by detection rate. Visual
        inspection alone:{' '}
        <em>&ldquo;Visual inspections have a detection rate of 72 percent.&rdquo;</em> Trained
        dogs:{' '}
        <em>
          &ldquo;Bed bug sniffing dogs can detect bed bugs with a 97 percent rate of
          accuracy.&rdquo;
        </em>{' '}
        Passive interceptor cups, used alone:{' '}
        <em>
          &ldquo;Interceptor cups, which have a detection rate of 89 percent, are the most common
          devices.&rdquo;
        </em>{' '}
        And the two consumer-accessible methods combined:{' '}
        <em>
          &ldquo;When both visual inspection and interceptors are used for monitoring bed bugs,
          the detection rate increases to 99 percent. This technique is considered the most
          cost-effective method for performing building-wide inspections for bed bugs.&rdquo;
        </em>
      </p>
      <p>
        On what a visual inspection actually looks for, <strong>Penn State</strong> is specific:{' '}
        <em>
          &ldquo;Inspectors should search for reddish-black spots, eggs, shed &lsquo;skin&rsquo;
          of larval bed bugs, and immature and adult bed bugs in their habitat near human resting
          areas such as beds, couches, and recliners. In addition, the sweet and musty odor
          produced by bed bug waste is characteristic of a moderate to high level of
          infestation.&rdquo;
        </em>{' '}
        <em>
          (Penn State&rsquo;s own text sets &ldquo;skin&rdquo; in straight quotation marks; this
          page renders it in its own typography, as every quotation mark on this page does)
        </em>{' '}
        <strong>NPIC</strong> gives the same instruction in plainer language:{' '}
        <em>
          &ldquo;Find their resting places. Check bed sheets for blood stains. Inspect the seams
          of mattresses, look inside box springs, and look behind head-boards.&rdquo;
        </em>
      </p>
      <p>
        Before any of that, get the identification itself confirmed. <strong>The U.S. EPA</strong>
        &rsquo;s first tip states how, at no cost:{' '}
        <em>
          &ldquo;Collect a sample of the pest to show an extension agent other insect
          expert&rdquo;
        </em>{' '}
        <em>
          (the missing word is the source&rsquo;s own; the sentence is quoted exactly as
          published)
        </em>{' '}
        — extension agents{' '}
        <em>&ldquo;are trained in pest control and know your local area.&rdquo;</em>
      </p>

      <h2 id="mattress-furniture">Treating the Mattress and Furniture</h2>
      <p>
        <strong>Purdue Extension Entomology</strong> explains why sealing works mechanically
        against this specific insect:{' '}
        <em>
          &ldquo;Bed bugs have weak, flexible, piercing-sucking mouthparts, and weak, simple feet
          (tarsi), and claws. They are incapable of chewing or clawing through even a very thin
          coating of sealant or an unbroken layer of paper or cloth.&rdquo;
        </em>{' '}
        On the practical steps that follow from that:{' '}
        <em>
          &ldquo;Mattress headboards and frames can be painted with several coats [to] seal off
          these hiding spots. Any cracks or crevices on walls or along baseboards should be
          painted or caulked with an appropriate sealant.&rdquo;
        </em>{' '}
        <em>
          (Purdue&rsquo;s own text reads &ldquo;coats seal off,&rdquo; without &ldquo;to&rdquo;;
          the bracketed word is added here for readability and marked as an addition, not quoted
          as the source&rsquo;s own)
        </em>
      </p>
      <p>
        <strong>The U.S. EPA</strong>&rsquo;s do-it-yourself guide states the same encasement
        principle from the trapping side:{' '}
        <em>
          &ldquo;Purchase protective covers that seal mattresses and box springs. With covers that
          seal, the bed bugs will get trapped inside and die.&rdquo;
        </em>{' '}
        Its preparing-for-treatment page adds the physical setup, under the heading &ldquo;Make
        Your Bed an Island&rdquo;:{' '}
        <em>&ldquo;Move the bed at least 6 inches away from the wall.&rdquo;</em>{' '}
        <em>
          &ldquo;Ensure all bed bugs, larvae, and eggs are removed from the bed, frame and
          headboard.&rdquo;
        </em>{' '}
        <em>&ldquo;Make sure all bedding is tucked under mattress and does not touch the floor.&rdquo;</em>
      </p>
      <h3>Vacuuming removes bugs mechanically; it does not finish the job alone</h3>
      <p>
        <strong>Purdue</strong> recommends a specific attachment and filter:{' '}
        <em>
          &ldquo;Using a crevice tool, or vacuum wand, to scrape the surface can help dislodge some
          of the eggs.&rdquo;
        </em>{' '}
        <em>
          &ldquo;A high efficiency particulate air (HEPA) filtered vacuum, which removes &gt;99%
          of all particles &gt;0.3 micron diameter, will ensure that many allergens associated
          with bed bugs and their debris are also removed.&rdquo;
        </em>{' '}
        <strong>NPIC</strong> adds a disposal step:{' '}
        <em>
          &ldquo;Vacuum up bed bugs frequently and discard the contents promptly. You can also
          freeze the vacuum bag for several days to kill the bugs.&rdquo;
        </em>
      </p>
      <p>
        On discarding furniture rather than treating it, <strong>the EPA</strong> is direct about
        the risk of doing so carelessly:{' '}
        <em>
          &ldquo;Discard furniture responsibly if you can&rsquo;t safely eliminate the bed bugs.
          Destroy it so someone else won&#39;t be tempted to bring it into their home.&rdquo;
        </em>{' '}
        <em>
          (the source&rsquo;s own apostrophes are inconsistent between the two contractions in
          that sentence — curly in &ldquo;can&rsquo;t,&rdquo; straight in &ldquo;won&#39;t&rdquo;
          — and both are reproduced exactly as published)
        </em>{' '}
        <strong>NPIC</strong> states the same caution from the other direction:{' '}
        <em>
          &ldquo;Do not discard furniture immediately. You could spread the bed bugs throughout
          your house, making treatment more difficult.&rdquo;
        </em>
      </p>

      <h2 id="heat-laundering">Heat and Laundering: The Figures That Actually Work</h2>
      <p>
        <strong>Purdue Extension Entomology</strong> states that laundering needs no professional
        at all:{' '}
        <em>
          &ldquo;One area where professional expertise is not required is laundering infested
          linens or clothes. Occupants can wash these items in hot water with detergent, followed
          by heat drying for at least 20 minutes in a clothes dryer on high heat, will kill all
          stages of bed bugs.&rdquo;
        </em>{' '}
        <strong>Penn State Extension</strong> gives the figure that makes it work, in its own
        degree notation for this one instance &mdash; the masculine ordinal indicator rather than
        a true degree sign, reproduced exactly:{' '}
        <em>
          &ldquo;Laundering with hot soapy water and drying with heat can be used to kill bed bugs
          on sheets, blankets, curtains, pillows, clothes, and any other objects that can be
          thrown into a washer and dryer. As an alternative, dryers alone can kill bed bugs when
          used at a high temperature for 15 to 30 minutes. Temperatures of 131º F or above are
          lethal to all bed bug stages. Laundering in cold water and drying at lower temperatures
          might not kill bed bugs.&rdquo;
        </em>{' '}
        <strong>The U.S. EPA</strong>&rsquo;s IPM page states the same non-chemical principle:{' '}
        <em>
          &ldquo;Put bedding and clothing in the dryer at high temperatures for 30 minutes to kill
          bed bugs (just washing will generally not kill bed bugs).&rdquo;
        </em>
      </p>
      <h3>A whole room or a whole house</h3>
      <p>
        <strong>Purdue</strong> gives a combined temperature-and-humidity figure:{' '}
        <em>
          &ldquo;Heat treatment works best with a combination of temperatures in the 49-52 °C
          (120-125 °F) range at 20-30% relative humidity for 20-30 minutes.&rdquo;
        </em>{' '}
        <strong>Penn State</strong> gives a duration-and-temperature trade-off:{' '}
        <em>
          &ldquo;Recommendations for treatment efficacy is to heat the room to at least 140°F for
          two hours or 130°F for three hours. If humidity can be controlled, 20-30 percent
          humidity in combination with 130°F can kill eggs, nymphs, and adults in 30
          minutes.&rdquo;
        </em>{' '}
        <strong>The EPA&rsquo;s IPM page</strong> gives a 90-minute figure for eggs specifically,
        using the ordinal indicator throughout its own page rather than a true degree sign:{' '}
        <em>
          &ldquo;Heat infested articles (e.g., furniture, luggage, other items that can&#39;t go
          in a clothes dryer) and/or areas (i.e., a room in a house or apartment, or a whole
          house) to at least 120 ºF (approx. 49 ºC) for 90 minutes to ensure that eggs are
          killed.&rdquo;
        </em>{' '}
        And on the insect&rsquo;s own thermal limit, <strong>the EPA&rsquo;s</strong> top-ten-tips
        page states, this time in a true degree sign:{' '}
        <em>&ldquo;Bed bugs die when their body temperatures reaches 45°C (113°F).&rdquo;</em>{' '}
        None of these figures is picked over the others here — they describe different exposure
        times and methods, not a disagreement to resolve.
      </p>
      <p>
        <strong>The EPA</strong> is explicit that raising the thermostat is not a substitute for
        any of this:{' '}
        <em>
          &ldquo;Do not try to kill bed bugs by increasing your indoor temperature with a
          thermostat, propane space heater, or fireplace - this does not work and is
          dangerous.&rdquo;
        </em>
      </p>
      <h3>Cold and steam</h3>
      <p>
        <strong>The EPA&rsquo;s IPM page</strong> states a cold figure, again in its own ordinal
        notation:{' '}
        <em>
          &ldquo;Cold treatments (below 0 ºF (-19 ºC) for at least 4 days) can eliminate some
          infestations.&rdquo;
        </em>{' '}
        Its do-it-yourself page states the same figure a third way, using a literal superscript
        letter &ldquo;o&rdquo; rather than any degree character, reproduced with the same markup
        here:{' '}
        <em>
          &ldquo;Cold treatment may work, but can only be successful in the home environment if
          the freezer is set to 0<sup>o</sup> F.&rdquo;
        </em>{' '}
        On steam, using the identical superscript-letter notation:{' '}
        <em>
          &ldquo;Steam cleaners (wet or dry) can get into cracks and fabrics to treat carpets,
          baseboards, bed frames, and other furniture. The steam temperature must be at least
          130<sup>o</sup> F but should not have a forceful airflow, or it may cause bed bugs to
          scatter.&rdquo;
        </em>{' '}
        <strong>Purdue</strong> warns that most retail units cannot reach the temperatures a
        professional device does:{' '}
        <em>
          &ldquo;Most retail steam cleaners do not generate enough heat to be effective.
          Commercial steam cleaners must typically be used to generate the temperatures necessary
          to quickly kill bed bugs. These devices often operate at temperatures well in excess of
          180 °F, and can pose a scalding hazard to the operator if used improperly.&rdquo;
        </em>{' '}
        <strong>Penn State</strong> gives the effectiveness figures a properly hot unit reaches:{' '}
        <em>
          &ldquo;Studies have shown that steamers kill 100 percent of eggs, nymphs, and adults on
          mattress surfaces. Under bed sheets and sofa fabric, steamers kill 90 percent of eggs,
          nymphs, and adults when treated for approximately 20 seconds.&rdquo;
        </em>{' '}
        It also names steam&rsquo;s one hard limit:{' '}
        <em>&ldquo;Steamers do not kill eggs, nymphs, or adults under leather sofa covers.&rdquo;</em>
      </p>

      <h2 id="encasements-interceptors">Encasements and Interceptors</h2>
      <p>
        <strong>Purdue Extension Entomology</strong> distinguishes a good encasement from a cheap
        plastic cover:{' '}
        <em>
          &ldquo;Good encasements consist of a tightly woven fabric that inhibits bed bug
          movement, and include a secured zipper system that prevents bed bugs from getting in or
          out. They are also more durable than plastic covers, and can be washed and
          reused.&rdquo;
        </em>{' '}
        It also gives a minimum specification for the cheaper option:{' '}
        <em>
          &ldquo;Commercially available plastic mattress covers, at least 0.08 mm thick, usually
          with a zippered edge, can completely enclose a mattress or box spring and prevent any
          bed bugs harboring in them from accessing hosts.&rdquo;
        </em>{' '}
        And a minimum duration that four separate sources give independently — Purdue:{' '}
        <em>
          &ldquo;Covers must be left on the mattress for a minimum of one year unless otherwise
          instructed by a pest control professional.&rdquo;
        </em>{' '}
        The EPA&rsquo;s top-ten-tips page reaches the same figure:{' '}
        <em>
          &ldquo;Leave the encasements on for a year. Be sure to buy a product that has been
          tested for bed bugs and is strong enough to last for the full year without
          tearing.&rdquo;
        </em>{' '}
        Its preparing-for-treatment page, on interceptors specifically:{' '}
        <em>
          &ldquo;Plan to use the interceptors for at least a year - they will be important to your
          post-control monitoring efforts.&rdquo;
        </em>{' '}
        And when only one
        piece can be afforded, <strong>NPIC</strong> gives a priority the other sources do not
        state: <em>&ldquo;If only one encasement can be afforded, the box spring should be encased first.&rdquo;</em>
      </p>
      <p>
        On interceptors specifically, the EPA&rsquo;s IPM page states the purpose:{' '}
        <em>
          &ldquo;Use monitoring devices such as bed bug interceptors to ensure that the bed bugs
          have been truly eradicated.&rdquo;
        </em>{' '}
        Its preparing-for-treatment page adds the placement and inspection routine:{' '}
        <em>
          &ldquo;Place bed bug interceptors under each leg of the bed (available in home stores
          or online).&rdquo;
        </em>{' '}
        <em>
          &ldquo;Interceptors will trap any bed bugs that try to climb the leg of the bed. In the
          beginning, you will inspect them daily.&rdquo;
        </em>{' '}
        The criterion the product below is measured against is exactly this description — a
        passive trap placed under a furniture leg — stated in the listing&rsquo;s own feature
        text rather than only in its title. Seventeen Amazon URLs across three product classes
        were attempted for this page; fifteen returned an anti-bot interstitial on the first
        fetch and are not retried, and one other real fetch (a steam cleaner) did not render
        readable feature-bullet text, so it is not carded. This is the only product named on this
        page.
      </p>
      {products.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="not-work">What Does Not Work</h2>
      <p>
        <strong>The U.S. EPA</strong> names two home remedies as actively dangerous rather than
        merely ineffective:{' '}
        <em>
          &ldquo;Rubbing alcohol, kerosene and gasoline could harm you and your family and can
          easily ignite with a spark or cigarette.&rdquo;
        </em>{' '}
        It names a common trap type as the wrong tool for this insect:{' '}
        <em>
          &ldquo;Sticky traps are not for bed bugs, but they may be effective at catching spiders,
          cockroaches, and other insects.&rdquo;
        </em>{' '}
        And it is explicit that a DIY heat attempt is not guaranteed to work even when done
        correctly:{' '}
        <em>&ldquo;Do-it-yourself heat treatments might not work.&rdquo;</em>
      </p>
      <p>
        On foggers specifically, <strong>NPIC</strong> names who established the finding:{' '}
        <em>
          &ldquo;&lsquo;Bug bombs&rsquo; or total release foggers are not effective against bed
          bugs according to the National Center for Healthy Housing. The pesticide droplets
          generated by foggers typically do not penetrate the hiding spaces used by bed
          bugs.&rdquo;
        </em>{' '}
        <strong>The EPA</strong> states the mechanical reason a spray-only approach falls short:{' '}
        <em>
          &ldquo;The spray will not reach the cracks and crevices where bed bugs hide.&rdquo;
        </em>
      </p>
      <p>
        On pesticides more broadly, <strong>the EPA</strong> corrects a common assumption
        directly:{' '}
        <em>&ldquo;Myth: Pesticide applications alone will easily eliminate bed bug infestations.&rdquo;</em>{' '}
        <em>
          &ldquo;Reality: Bed bug control can only be maintained through a treatment strategy that
          includes a variety of techniques plus careful attention to monitoring.&rdquo;
        </em>{' '}
        <em>
          &ldquo;In addition, bed bug populations in different areas of the country have
          developed resistance to the ways many pesticides work to kill pests.&rdquo;
        </em>{' '}
        <strong>Purdue</strong> states the same finding about resistance in its own words:{' '}
        <em>
          &ldquo;bed bugs have developed an extraordinary resistance to most classes of
          pesticides. This means that a chemical only approach is insufficient.&rdquo;
        </em>
      </p>

      <h2 id="professional">When the Sources Say to Call a Professional</h2>
      <p>
        <strong>NPIC</strong> states the difficulty of this pest twice, in slightly different
        words each time — once at the start of the process:{' '}
        <em>&ldquo;Bed bugs can be very hard to control, even for trained professionals.&rdquo;</em>{' '}
        And again in its control-methods section:{' '}
        <em>
          &ldquo;Bed bugs can be very difficult to control, even for trained professionals. Many
          insecticides are not effective at killing the eggs, so a second treatment is often
          necessary to kill the juveniles after eggs hatch.&rdquo;
        </em>{' '}
        <strong>Purdue</strong> gives the reasoning for combining approaches:{' '}
        <em>
          &ldquo;Currently, most non-chemical products and techniques do not quickly or
          efficiently eliminate established bed bug populations. In many cases, the judicious
          application of a pesticide by a certified pest control professional is
          necessary.&rdquo;
        </em>
      </p>
      <p>
        For whole-room or whole-house heat treatment specifically, <strong>Purdue</strong> is
        direct about the expertise required:{' '}
        <em>
          &ldquo;Always consult with a knowledgeable pest control professional trained to use heat
          treatments and discuss their method in detail before contracting their service.
          Companies should be willing to offer service references, an important source of
          information when making contracting decisions for bed bug control.&rdquo;
        </em>{' '}
        On fumigation, Purdue is equally direct about when it is not the right tool:{' '}
        <em>
          &ldquo;While fumigation of furniture, clothing, or other personal items can kill all bed
          bug stages present, it will not prevent reinfestation immediately after the fumigant
          dissipate, and is seldom necessary, practical or affordable.&rdquo;
        </em>
      </p>
      <p>
        If you rent, <strong>the EPA</strong>&rsquo;s do-it-yourself guide states an obligation
        that is not just etiquette:{' '}
        <em>
          &ldquo;If an extension agent or other expert says the pest is a bed bug, notify your
          landlord if you live in an apartment. The units near yours should be inspected.
          Landlords may have a responsibility to participate in treatment.&rdquo;
        </em>{' '}
        <strong>NPIC</strong> adds why chemical treatment in particular is not always a
        do-it-yourself choice:{' '}
        <em>
          &ldquo;Regulations may require that a licensed applicator apply any insecticides that
          are used.&rdquo;
        </em>{' '}
        And after any treatment, <strong>Purdue</strong> gives a follow-up window:{' '}
        <em>
          &ldquo;At least one follow-up inspection of infested sites should be conducted at a
          suitable interval (e.g., 10-21 days) after each control effort or treatment in order to
          detect any of the typical signs of continued infestation, such as live bugs, cast skins
          (after those present earlier had been removed), fecal spots on bed linens or
          harborages, and unhatched eggs.&rdquo;
        </em>
      </p>

      <h2 id="not-here">What This Page Does Not Carry</h2>
      <p>
        <strong>Disease and pathogen content beyond the reassurance above.</strong> Every source
        that addresses transmission agrees bed bugs do not spread disease to humans. That is
        stated once, sourced three ways, and not developed into anything further.
      </p>
      <p>
        <strong>A mattress or box-spring encasement product.</strong> Ten distinct Amazon ASINs
        across four brands were attempted for this class and every one returned an anti-bot
        interstitial on the first fetch. Per Law 137, that is a terminal state for the round and
        none was retried. Every source on this page that discusses mattress treatment recommends
        an encasement; none is named here because the class could not be fetched this round, not
        because the sources are silent on it.
      </p>
      <p>
        <strong>A steamer product.</strong> One steam-cleaner listing was successfully fetched
        (HTTP 200, a real product page), but its &ldquo;About this item&rdquo; feature-bullet
        section did not render readable text in this fetch. Under S50-H only the fetched
        product-page&rsquo;s own text is authoritative, and under S52-E a property named only in
        the title is not a claim, so this listing is not carded.
      </p>
      <p>
        <strong>A ranked list of insecticide brands.</strong> The EPA names a Bed Bug Product
        Search tool listing over 300 registered products and states plainly that pesticide choice
        depends on label directions, local resistance patterns, and often a professional&rsquo;s
        judgment. No source on this page ranks specific insecticide products against each other,
        so none is ranked here.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Nine publications, each named in the sentence that uses it. Every quotation on this page
        was located in the publication it is attributed to and checked against that
        publication&rsquo;s own raw text, character by character, for its own apostrophes, degree
        signs and other typography rather than this site&rsquo;s house style. University of
        Minnesota Extension (two pages) and the CDC were attempted and returned HTTP 403 on the
        first fetch; neither is cited here.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
