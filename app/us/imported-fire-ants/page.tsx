import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { FIREANT_NAV, FIREANT_HOME } from '../components/fireAntNav';

const URL = 'https://pestproindex.com/us/imported-fire-ants';
const TITLE =
  'Imported Fire Ants: ID and the Two-Step Method';
const DESCRIPTION =
  'A federal regulation defines which ants the name covers. Texas A&M\'s two-step control method, with its own rates, temperatures and timing, plus what a sting does.';

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
  datePublished: '2026-08-25',
  dateModified: '2026-08-25',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Imported Fire Ants', item: URL }],
};

const faqs: Faq[] = [
  {
    question: 'Which ants does the name "imported fire ant" actually cover?',
    answer:
      'Three, and a federal regulation says so. 7 CFR 301.81-1 defines the term as: "Living imported fire ants of the species Solenopsis invicta Buren and Solenopsis richteri Forel, and hybrids of these species." So it covers the red imported fire ant, the black imported fire ant and the hybrid between them. Texas A&M states that in Texas, S. invicta is the only imported fire ant, although several species of native fire ants occur in the state such as the tropical fire ant, S. geminata, and the desert fire ant, S. xyloni, which are also capable of stinging — that is a statement about Texas. No source consulted gives a homeowner a way to tell red from black from hybrid in the field, and none gives different control advice for them.',
  },
  {
    question: 'How do I know it is a fire ant and not a native ant I should leave alone?',
    answer:
      'NC State Extension gives the structural character: "Fire ants are our only ants that have two bumps between the thorax and abdomen." The two sources disagree on size and the disagreement is worth knowing. NC State says workers "are approximately ¼ in long, red-brown with shiny, dark abdomens". N.C. Cooperative Extension\'s Pamlico note says "Fire ants are small, only about 1/8 to 1/4-inch long" and treats the spread itself as the tell: "Variation in size is a distinguishing feature as many other ant species are uniform in size." The sting mark is the most specific character Texas A&M gives: most people develop "an often white fluid-filled sterile pustule characteristic of imported fire ant sting", and "No other Texas\' ants are known to cause this type of reaction to the venom." Clemson Extension is blunt about why identification comes first: "There are at least 121 different species of ants in South Carolina, and the majority of these ants are benign and do not warrant control."',
  },
  {
    question: 'When should bait be applied?',
    answer:
      'When the ants are foraging, and the sources give three different temperature figures. Clemson Extension states: "Ideally, soil surface temperatures should be between 70º and 85º °F." Texas A&M\'s 2003 publication gives 70 to 90 degrees F, May to September in most of Texas. AgriLife Extension in 2026 gives a looser figure: "Apply bait when temperatures are about 70 degrees or above, when ants are actively foraging." Rather than pick one, use the test Texas A&M gives: put a small amount of bait or suitable food, a hot dog or potato chip, next to a mound, and "If ants begin removing the food within 30 minutes, it\'s a good time to treat." Clemson checks its potato chips after 20 to 30 minutes. On season, Clemson states: "Make two annual bait applications; one in the spring and one in the fall. Apply baits in late May/early June and again in late September/early October."',
  },
  {
    question: 'How much bait, and with what?',
    answer:
      'AgriLife Extension states: "Follow the label. The typical application is 1 to 1.5 pounds per acre. Using more is wasteful and doesn\'t improve results." Clemson gives the same rate and adds: "DO NOT APPLY MORE BAIT THAN WHAT THE LABEL SPECIFIES." On equipment, Texas A&M states "Hand-held seed spreaders are ideal for applying fire ant baits" and that "Push-type fertilizer spreaders put out most baits too quickly." Clemson excludes two more types: "Do not use belly spreaders or drop spreaders, as the gate openings cannot be restricted adequately, and these put out too much product." Its technique instruction is to "turn the hand crank slowly and walk fast".',
  },
  {
    question: 'Do grits kill fire ants?',
    answer:
      'No, and two extension services explain why. UF/IFAS Extension states: "Fire ants only ingest liquids, so the idea that they will eat the grits, swell, and then explode is false." Clemson Extension adds: "First, adult fire ants cannot physically ingest solid food. Second, grits do not contain any toxicant (poison) that would kill the ants." Texas A&M reports a wider test: "Evaluations of home remedies including aspartame, baking soda, cinnamon, club soda, coffee grounds, grits and Malt-O-Meal, and molasses failed to document control of imported fire ant mounds." Clemson states its position on the category outright: "Clemson Extension does not endorse or recommend DIY home remedies for fire ant management".',
  },
  {
    question: 'Should I use bait if I have native ants in the yard?',
    answer:
      'The sources disagree, and both positions belong to extension services. Texas A&M, AgriLife Extension and Clemson all put a broadcast bait first. UF/IFAS Extension qualifies it: "broadcast baiting may be counterproductive because it can also decrease native ant populations that slow fire ant spread", and "If there are native ants in your treatment area, try using only individual mound treatments to prevent affecting non-target ant populations." Texas A&M puts a number on where the whole programme stops being the right tool: it is "not suggested for previously untreated areas with large numbers of native ants and few fire ant mounds—15 to 20 mounds per acre or less". Texas A&M also states that "preserving and encouraging native ant species that compete with the fire ant for territory and resources is beneficial".',
  },
  {
    question: 'Can I get rid of them completely?',
    answer:
      'No source consulted says so, and Clemson Extension forecloses it in its own voice: "Notice that the words \'control\' and \'manage\' are used when referring to fire ants, and no form of the word \'eradicate\' will appear here. The biology of fire ants and the constant reinfestation pressure from outside areas do not allow for complete eradication." UF/IFAS Extension agrees: "no fire ant control method (with possibly the exception of biological control agents) will permanently eliminate ants from an area. Fire ants can quickly re-infest areas after treatment stops".',
  },
  {
    question: 'Does the federal quarantine stop me buying anything?',
    answer:
      'Nothing in the regulation does. 7 CFR 301.81 states: "No person may move interstate from any quarantined area any regulated article except in accordance with this subpart." That governs articles moving out of quarantined areas — the kinds of thing that can carry ants. 7 CFR 301.81-2 does not list those articles in the regulation itself; it states that "The Administrator has determined that certain articles present a risk of spread of the imported fire ant" and that the list is published on the APHIS website. Nothing in the sections read restricts a consumer buying a pesticide or a pesticide being shipped into a quarantined state.',
  },
];

const sources: Source[] = [
  {
    label:
      'The Texas Two-step Method (L-5070) — the source of the equipment, rain, freshness and activity-test criteria',
    publisher: 'Texas A&M / Texas Cooperative Extension (Michael Merchant and Bastiaan M. Drees)',
    date: 'August 2003',
    href: 'https://williamson.agrilife.org/files/2014/08/two-step-L5070.pdf',
  },
  {
    label:
      'Natural, Organic, and Alternative Methods for Imported Fire Ant Management (ENTO-009) — the source of the home-remedy evaluations and the native-ant threshold',
    publisher: 'Texas A&M AgriLife Extension (Wizzie Brown)',
    date: 'March 2014',
    href: 'https://research.entomology.tamu.edu/wp-content/uploads/sites/28/2014/03/ENTO_009.pdf',
  },
  {
    label:
      'Medical Problems and Treatment Considerations for the Red Imported Fire Ant (Fire Ant Plan Fact Sheet #023) — the source of all sting material on this page',
    publisher: 'Texas A&M (Bastiaan M. Drees)',
    date: 'December 2002 revision',
    href: 'https://research.entomology.tamu.edu/wp-content/uploads/sites/28/2011/12/FAPFS023_2002rev_Medical.pdf',
  },
  {
    label: 'Two-Step Method (programme page)',
    publisher: 'Texas Imported Fire Ant Research and Management Project, Texas A&M',
    date: 'Accessed 25 August 2026',
    href: 'https://fireant.tamu.edu/controlmethods/twostep/',
  },
  {
    label:
      "Spring is the time for Texans to 'two-step' toward fire ant control — the source of the label-is-the-law and environmental instructions",
    publisher: 'AgriLife Today (Paul Schattenberg, quoting Robert Puckett, Ph.D.)',
    date: '20 March 2024',
    href: 'https://agrilifetoday.tamu.edu/2024/03/20/spring-is-the-time-for-texans-to-two-step-toward-fire-ant-control-2/',
  },
  {
    label:
      'How to get rid of fire ants: Expert tips that work — the source of the current rate, rain and placement figures',
    publisher: 'AgriLife Today (Adam Russell, quoting Robert Puckett, Ph.D.)',
    date: '10 March 2026',
    href: 'https://agrilifetoday.tamu.edu/2026/03/10/how-to-get-rid-of-fire-ants-expert-tips-that-work/',
  },
  {
    label:
      'Sustainable Fire Ant Control — the source of the native-ant warning, the liquid-feeding mechanism and the hot-water figures',
    publisher: 'UF/IFAS Extension, Solutions for Your Life',
    date: 'Accessed 25 August 2026',
    href: 'https://sfyl.ifas.ufl.edu/lawn-and-garden/sustainable-fire-ant-control/',
  },
  {
    label:
      'Hints and Tips for an Effective Fire Ant Management Program in Home Landscapes Using Broadcast Baits — the source of the spreader exclusions, the season dates and the eradication sentence',
    publisher: 'Clemson Cooperative Extension, Home & Garden Information Center',
    date: 'Accessed 25 August 2026',
    href: 'https://hgic.clemson.edu/factsheet/hints-and-tips-for-an-effective-fire-ant-management-program-in-home-landscapes-using-broadcast-baits/',
  },
  {
    label:
      'Fire Ants in Commercial Turfgrass, Home Lawns and Landscapes — the source of the two-bumps character, the water volume and the shelf-life figure',
    publisher: 'NC State Extension / TurfFiles',
    date: 'Accessed 25 August 2026',
    href: 'https://content.ces.ncsu.edu/fire-ants-in-turf',
  },
  {
    label: 'Fire Ants (Solenopsis Invicta) — Insect Note, the source of the size range and the mound description',
    publisher: 'N.C. Cooperative Extension, Pamlico County Center (Teresa Casey)',
    date: '19 September 2025',
    href: 'https://pamlico.ces.ncsu.edu/news/fire-ants-insect-note/',
  },
  {
    label: '7 CFR 301.81-1 Definitions — the source of the federal definition of the term — within the GPO 2025 annual edition of 7 CFR part 301',
    publisher: 'U.S. Government Publishing Office (GPO), regulation issued by APHIS',
    date: 'GPO 2025 annual edition, Title 7 revised as of 1 January 2025. Read 30 August 2026',
    href: 'https://www.govinfo.gov/content/pkg/CFR-2025-title7-vol5/pdf/CFR-2025-title7-vol5-part301.pdf',
  },
  {
    label: '7 CFR 301.81 Restrictions on interstate movement of regulated articles — within the GPO 2025 annual edition of 7 CFR part 301',
    publisher: 'U.S. Government Publishing Office (GPO), regulation issued by APHIS',
    date: 'GPO 2025 annual edition, Title 7 revised as of 1 January 2025. Read 30 August 2026',
    href: 'https://www.govinfo.gov/content/pkg/CFR-2025-title7-vol5/pdf/CFR-2025-title7-vol5-part301.pdf',
  },
  {
    label: '7 CFR 301.81-2 Regulated articles — within the GPO 2025 annual edition of 7 CFR part 301',
    publisher: 'U.S. Government Publishing Office (GPO), regulation issued by APHIS',
    date: 'GPO 2025 annual edition, Title 7 revised as of 1 January 2025. Read 30 August 2026',
    href: 'https://www.govinfo.gov/content/pkg/CFR-2025-title7-vol5/pdf/CFR-2025-title7-vol5-part301.pdf',
  },
  {
    label: '7 CFR 301.81-3 Quarantined areas — within the GPO 2025 annual edition of 7 CFR part 301',
    publisher: 'U.S. Government Publishing Office (GPO), regulation issued by APHIS',
    date: 'GPO 2025 annual edition, Title 7 revised as of 1 January 2025. Read 30 August 2026',
    href: 'https://www.govinfo.gov/content/pkg/CFR-2025-title7-vol5/pdf/CFR-2025-title7-vol5-part301.pdf',
  },
  {
    label: '7 CFR 301.81-4 Interstate movement of regulated articles from quarantined areas — within the GPO 2025 annual edition of 7 CFR part 301',
    publisher: 'U.S. Government Publishing Office (GPO), regulation issued by APHIS',
    date: 'GPO 2025 annual edition, Title 7 revised as of 1 January 2025. Read 30 August 2026',
    href: 'https://www.govinfo.gov/content/pkg/CFR-2025-title7-vol5/pdf/CFR-2025-title7-vol5-part301.pdf',
  },
  {
    label: '7 CFR 301.81-5 Issuance of a certificate or limited permit — within the GPO 2025 annual edition of 7 CFR part 301',
    publisher: 'U.S. Government Publishing Office (GPO), regulation issued by APHIS',
    date: 'GPO 2025 annual edition, Title 7 revised as of 1 January 2025. Read 30 August 2026',
    href: 'https://www.govinfo.gov/content/pkg/CFR-2025-title7-vol5/pdf/CFR-2025-title7-vol5-part301.pdf',
  },
];

const tocItems = [
  { id: 'which-ants', title: 'Which Ants the Name Covers' },
  { id: 'identification', title: 'Telling Them From Native Ants' },
  { id: 'the-sting', title: 'The Sting' },
  { id: 'two-step', title: 'The Two-Step Method' },
  { id: 'spreaders', title: 'The Spreader Matters' },
  { id: 'mound-treatment', title: 'Step Two: Treating a Mound' },
  { id: 'gloves', title: 'Handling Liquid Concentrates' },
  { id: 'does-not-work', title: 'What the Sources Tested and Rejected' },
  { id: 'quarantine', title: 'The Federal Quarantine' },
  { id: 'boundaries', title: 'What This Page Does Not Claim' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function ImportedFireAntsPage() {
  return (
    <UsPageLayout
      title="Imported Fire Ants"
      subtitle="A federal regulation says which ants the name covers, and Texas A&amp;M publishes a control method with real numbers in it. This page sets out both, tells you how to separate an imported fire ant from a native ant you should leave alone, and reports what the sources say about a sting."
      lastUpdated="August 2026"
      readingTime="14 min"
      tocItems={tocItems}
      homeHref={FIREANT_HOME}
      clusterNav={FIREANT_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Everything on this page comes from university extension services and, for the
        quarantine, from the Code of Federal Regulations. Each claim names the source it rests
        on in the sentence that makes it. Where two sources give different figures, both are
        given with the source that holds each, because picking one would misrepresent the
        evidence.
      </p>

      <h2 id="which-ants">Which Ants the Name Covers</h2>
      <p>
        The scope question has a legal answer. 7 CFR 301.81-1 defines the term:
      </p>
      <p>
        <em>
          &ldquo;Imported fire ant. Living imported fire ants of the species Solenopsis
          invicta Buren and Solenopsis richteri Forel, and hybrids of these species.&rdquo;
        </em>
      </p>
      <p>
        So <strong>three things travel under the name</strong>: the red imported fire ant,{' '}
        <em>Solenopsis invicta</em>; the black imported fire ant, <em>Solenopsis richteri</em>;
        and the hybrid between them. It is <em>red imported fire ant</em> that is the narrow
        term, not <em>imported fire ant</em>. Texas A&amp;M uses the same three-way
        construction, describing imported fire ants as those{' '}
        <em>
          &ldquo;which include the red imported fire ant - Solenopsis invicta Buren
          (Hymenoptera: Formicidae), the black imported fire ant - Solenopsis richteri Forel
          and the hybrid between S. invicta and S. richteri&rdquo;
        </em>
        .
      </p>
      <p>
        <strong>One statement on this page is about Texas and only Texas.</strong> Texas A&amp;M
        states:{' '}
        <em>
          &ldquo;In Texas, S. invicta is the only imported fire ant, although several species
          of native fire ants occur in the state such as the tropical fire ant, S. geminata
          (Fabricius), and the desert fire ant, S. xyloni McCook, which are also capable of
          stinging&rdquo;
        </em>
        . That is why the federal term is used throughout the rest of this page: outside
        Texas, the black imported fire ant and the hybrid exist too.
      </p>
      <p>
        <strong>No source consulted tells a homeowner how to separate red from black from
        hybrid in the field</strong>, and none gives different control advice for them. This
        page therefore treats them as one management target, which is what the regulation and
        every extension source here do.
      </p>

      <h2 id="identification">Telling Them From Native Ants</h2>
      <p>
        This matters before anything else, because several of the sources say the ants you
        should leave alone outnumber the ones you should treat. Clemson Extension states:{' '}
        <em>
          &ldquo;There are at least 121 different species of ants in South Carolina, and the
          majority of these ants are benign and do not warrant control.&rdquo;
        </em>{' '}
        It adds why that matters:{' '}
        <em>
          &ldquo;Improperly identifying a pest can lead to pesticide failure, which is a waste
          of time, money, and, most importantly, an ineffective and possibly unnecessary
          pesticide application.&rdquo;
        </em>
      </p>
      <p>
        <strong>The structural character.</strong> NC State Extension states:{' '}
        <em>
          &ldquo;Fire ants are our only ants that have two bumps between the thorax and
          abdomen.&rdquo;
        </em>
      </p>
      <p>
        <strong>On size, two sources disagree, and the disagreement is itself useful.</strong>{' '}
        NC State Extension gives a single length:{' '}
        <em>
          &ldquo;Red imported fire ants, Solenopsis invicta, workers (Figure 1) are
          approximately &frac14; in long, red-brown with shiny, dark abdomens.&rdquo;
        </em>{' '}
        The N.C. Cooperative Extension Pamlico note gives a range and treats the spread as the
        tell:{' '}
        <em>&ldquo;Fire ants are small, only about 1/8 to 1/4-inch long.&rdquo;</em> and{' '}
        <em>
          &ldquo;Variation in size is a distinguishing feature as many other ant species are
          uniform in size.&rdquo;
        </em>{' '}
        One is a length; the other is a range whose spread is the point. Both are recorded
        here.
      </p>
      <p>
        <strong>The mound, and what it does not have.</strong> The Pamlico note states:{' '}
        <em>
          &ldquo;Fire ant mounds are usually a distinct dome shape with no opening at the top,
          which are found out in the open, not in the woods.&rdquo;
        </em>{' '}
        UF/IFAS Extension corrects the assumption that follows from that:{' '}
        <em>
          &ldquo;Fire ant nests will not have a single nest entry, but rather, several
          entrances under the mound.&rdquo;
        </em>{' '}
        And the behaviour, from the Pamlico note:{' '}
        <em>
          &ldquo;If a mound is disturbed, usually hundreds of fire ant workers will swarm out
          and run up vertical surfaces to sting.&rdquo;
        </em>
      </p>
      <p>
        <strong>The most specific character is the mark the sting leaves.</strong> Texas
        A&amp;M states that within several hours to a day, most people develop{' '}
        <em>
          &ldquo;an often white fluid-filled sterile pustule characteristic of imported fire
          ant sting&rdquo;
        </em>
        , and adds:{' '}
        <em>
          &ldquo;No other Texas&rsquo; ants are known to cause this type of reaction to the
          venom.&rdquo;
        </em>
      </p>

      <h2 id="the-sting">The Sting</h2>
      <p>
        <strong>
          Everything in this section is what one named publication says. This site is not a
          medical source and does not assess anyone&rsquo;s symptoms.
        </strong>{' '}
        The publication it comes from opens by disclaiming exactly that, and the disclaimer is
        worth reading in full:
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-gray-300 bg-gray-50 p-6">
        <p className="m-0 text-sm text-gray-800">
          <em>
            &ldquo;DISCLAIMER: This fact sheet provides a review of information gathered
            regarding medical aspects of the red imported fire ant. As such, this fact sheet is
            not intended to provide treatment recommendations for fire ant stings or reactions
            that may develop as a result of a stinging incident. Readers are encouraged to seek
            health-related advice and recommendations from their medical doctors, allergists or
            other appropriate specialists.&rdquo;
          </em>
        </p>
        <p className="m-0 mt-3 text-sm font-bold text-gray-900">
          Texas A&amp;M, Fire Ant Plan Fact Sheet #023
        </p>
      </div>

      <p>
        <strong>Scale.</strong> Texas A&amp;M states:{' '}
        <em>
          &ldquo;Over 40 million people live in areas infested by the red imported fire ant in
          the southeastern United States. An estimated 14 million people are stung
          annually.&rdquo;
        </em>
      </p>
      <p>
        <strong>How fast.</strong>{' '}
        <em>
          &ldquo;Generally, these ants can begin to sting within 10 to 20 seconds after
          climbing upon victims.&rdquo;
        </em>{' '}
        The same publication notes that response slows when temperatures are cooler than 55
        degrees F, because the ants move more slowly, and when they are above 95 degrees F,
        because the workers sit deeper in the soil.
      </p>
      <p>
        <strong>What a normal sting does.</strong>{' '}
        <em>
          &ldquo;The site of the sting hurts for a few minutes and then reddens; then it swells
          into a bump or hive within 20 minutes.&rdquo;
        </em>{' '}
        Then the pustule described in the section above. Texas A&amp;M adds one instruction
        about it:{' '}
        <em>
          &ldquo;Care must be taken not to rupture the sterile pustules, because resulting
          lesions occasionally become infected.&rdquo;
        </em>
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          The emergency instruction, as Texas A&amp;M gives it
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          <em>
            &ldquo;If a sting causes severe chest pain, nausea, severe sweating, loss of breath,
            serious swelling or slurred speech, the person should be taken to an emergency
            medical facility immediately.&rdquo;
          </em>
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          On the symptoms themselves, the same publication states:{' '}
          <em>
            &ldquo;The symptoms of anaphylaxis can include dizziness, nausea, sweating, low
            blood pressure, headache and shortness of breath. If any of these symptoms occur,
            the person requires immediate medical attention. Anaphylactic shock can lead to
            death.&rdquo;
          </em>
        </p>
      </div>

      <p>
        <strong>
          On how often that happens, one document carries three different figures, and this
          page gives all three rather than choosing.
        </strong>{' '}
        In its own body text, Texas A&amp;M states that{' '}
        <em>
          &ldquo;severe allergic reactions (anaphylaxis) occur in less than 1% of people stung
          by fire ants.&rdquo;
        </em>{' '}
        The same document also states that{' '}
        <em>
          &ldquo;Anaphylaxis occurs in 0.6 to 6 percent of persons who are stung, and these
          reactions have been reported to have caused more than 80 deaths (deShazo et al.
          1999).&rdquo;
        </em>{' '}
        And quoting a Texas Allergy, Asthma and Immunology Society leaflet, it states that{' '}
        <em>
          &ldquo;Severe allergic reactions (anaphylaxis) occur in 1 - 6 % of people stung by
          fire ants and occasionally these reactions may be fatal&rdquo;
        </em>
        . Under one per cent, 0.6 to 6 per cent, and 1 to 6 per cent &mdash; in a single
        source. Any page that picked one of those would be misrepresenting it.
      </p>
      <p>
        Texas A&amp;M also states:{' '}
        <em>
          &ldquo;People who show symptoms indicating anaphylactic shock should seek advice from
          an allergist before entering known fire ant infested areas.&rdquo;
        </em>{' '}
        And, quoting Solley and colleagues:{' '}
        <em>
          &ldquo;Anyone who has had stinging-insect-induced anaphylaxis should carry an EpiPen
          (or EpiPen Jr for children; CSL) for immediate first-aid use, if hypotension or
          dyspnoea occurs.&rdquo;
        </em>
      </p>
      <p>
        That publication also contains a block of treatment guidance addressed explicitly to
        medical doctors, naming drugs and formulations. It is named here so a reader knows it
        exists and who it is written for. None of it is reproduced on this page.
      </p>
      <p>
        <strong>Who is most at risk, and where.</strong> Texas A&amp;M names people{' '}
        <em>
          &ldquo;hypersensitive to venom or may have other medical conditions (e.g., heart
          condition, diabetes) that can result in serious medical problems or even death from a
          single sting&rdquo;
        </em>
        . It records that{' '}
        <em>&ldquo;Fire ants move into beds of children or immobile people during the
        night&rdquo;</em>{' '}
        and that a number of serious multiple stinging incidents have occurred indoors in
        Texas, and, citing deShazo and colleagues, in health care facilities.
      </p>
      <p>
        <strong>Avoiding a sting in the first place</strong>, in the same publication&rsquo;s
        words:{' '}
        <em>
          &ldquo;Be aware of fire ants and take care not to stand on ant nests or resources on
          which they are foraging.&rdquo;
        </em>
        ;{' '}
        <em>
          &ldquo;Wear protective clothing during outdoor activities, such as boots and/or tuck
          pant legs into socks.&rdquo;
        </em>
        ; and{' '}
        <em>
          &ldquo;Teach children and visitors about fire ants and their hazard.&rdquo;
        </em>{' '}
        Two situations it singles out:{' '}
        <em>&ldquo;Ants in migrating colonies are highly defensive and should be avoided&rdquo;</em>
        , and during flooding, colonies{' '}
        <em>
          &ldquo;are capable of floating in clusters or &ldquo;rafts,&rdquo; posing a threat to
          anything encountering them.&rdquo;
        </em>
      </p>

      <h2 id="two-step">The Two-Step Method</h2>
      <p>
        This is the method Texas A&amp;M AgriLife Extension publishes and the one every Texas
        source on this page points at. AgriLife Extension describes it as{' '}
        <em>
          &ldquo;less labor-intensive, less toxic and more environmentally friendly than most
          other means of do-it-yourself fire ant control.&rdquo;
        </em>
      </p>
      <p>
        <strong>Step one, in the source&rsquo;s words:</strong>{' '}
        <em>
          &ldquo;The first step is to broadcast a fire ant bait&mdash;a product containing a
          food plus an insecticide&mdash;over the whole yard, usually in the fall and
          spring.&rdquo;
        </em>{' '}
        The mechanism is why a bait works where a spray does not. UF/IFAS Extension states:{' '}
        <em>
          &ldquo;Fire ants are omnivorous. They eat plants, insects, oils, and sugars, but they
          are only able to ingest liquids.&rdquo;
        </em>{' '}
        And the target:{' '}
        <em>
          &ldquo;To eliminate a colony, the queen must be killed; in multi-queen colonies, all
          queens must be killed.&rdquo;
        </em>
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Before you broadcast anything: two sources say it can be the wrong move
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          UF/IFAS Extension states that{' '}
          <em>
            &ldquo;broadcast baiting may be counterproductive because it can also decrease
            native ant populations that slow fire ant spread&rdquo;
          </em>
          , and gives the alternative:{' '}
          <em>
            &ldquo;If there are native ants in your treatment area, try using only individual
            mound treatments to prevent affecting non-target ant populations.&rdquo;
          </em>
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          Texas A&amp;M puts a number on where the whole programme stops being the right tool.
          It is{' '}
          <em>
            &ldquo;not suggested for previously untreated areas with large numbers of native
            ants and few fire ant mounds&mdash;15 to 20 mounds per acre or less&rdquo;
          </em>
          . The same publication states that{' '}
          <em>
            &ldquo;preserving and encouraging native ant species that compete with the fire ant
            for territory and resources is beneficial&rdquo;
          </em>
          .
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          <strong>
            Texas A&amp;M, AgriLife Extension and Clemson Extension all put a broadcast bait
            first. UF/IFAS qualifies it and Texas A&amp;M names a density below which it is not
            suggested at all. Both positions come from extension services and both are given
            here.
          </strong>
        </p>
      </div>

      <p>
        <strong>The rate.</strong> AgriLife Extension states:{' '}
        <em>
          &ldquo;Follow the label. The typical application is 1 to 1.5 pounds per acre. Using
          more is wasteful and doesn&rsquo;t improve results.&rdquo;
        </em>{' '}
        Clemson Extension gives the same figure and adds:{' '}
        <em>&ldquo;DO NOT APPLY MORE BAIT THAN WHAT THE LABEL SPECIFIES.&rdquo;</em>
      </p>
      <p>
        <strong>The temperature, where three sources give three answers.</strong> Clemson
        Extension states:{' '}
        <em>&ldquo;Ideally, soil surface temperatures should be between 70&ordm; and 85&ordm; &deg;F.&rdquo;</em>{' '}
        The 2003 Texas A&amp;M publication gives 70 to 90 degrees F, and puts the season at May
        to September in most of Texas &mdash; that sentence is broken across a column by a
        table in the original, so it is paraphrased here rather than quoted. AgriLife Extension
        in 2026 gives a looser figure:{' '}
        <em>
          &ldquo;Apply bait when temperatures are about 70 degrees or above, when ants are
          actively foraging.&rdquo;
        </em>
      </p>
      <p>
        <strong>Rather than pick a temperature, use the test.</strong> Texas A&amp;M says to put
        a small amount of bait or suitable food &mdash; a hot dog or potato chip &mdash; next to
        a mound, and:{' '}
        <em>
          &ldquo;If ants begin removing the food within 30 minutes, it&rsquo;s a good time to
          treat.&rdquo;
        </em>{' '}
        Clemson checks its potato chips after 20 to 30 minutes. On the season, Clemson states:{' '}
        <em>
          &ldquo;Make two annual bait applications; one in the spring and one in the fall. Apply
          baits in late May/early June and again in late September/early October.&rdquo;
        </em>
      </p>
      <p>
        <strong>Rain, and the two sources give different windows.</strong> Texas A&amp;M in 2003:{' '}
        <em>&ldquo;Apply baits when no rain is expected for at least 8 hours.&rdquo;</em>{' '}
        AgriLife Extension in 2026:{' '}
        <em>&ldquo;Check the forecast and avoid applying bait within 48 hours of rain.&rdquo;</em>
      </p>
      <p>
        <strong>Where to put it.</strong> AgriLife Extension states:{' '}
        <em>
          &ldquo;Sprinkle bait around the mound&rsquo;s perimeter rather than directly on the
          mound. When disturbed, ants go into defense mode and won&rsquo;t collect bait.&rdquo;
        </em>{' '}
        NC State Extension gives the distance:{' '}
        <em>
          &ldquo;Do not place on top of mound. Foraging ants exit the nest along the outside
          base of the mound. Place product within a 2 ft radius around mound.&rdquo;
        </em>
      </p>
      <p>
        <strong>Freshness, where the two sources are irreconcilable.</strong> Texas A&amp;M
        states:{' '}
        <em>&ldquo;Unopened containers stay fresh for up to 2 years.&rdquo;</em> NC State
        Extension states that baits function as attractants and so{' '}
        <em>&ldquo;the product must be fresh (1-3 month shelf life)&rdquo;</em>. Two years
        against one to three months. The practical route through it is Texas A&amp;M&rsquo;s own
        test:{' '}
        <em>
          &ldquo;Sprinkle a small amount next to an active mound. If the bait is fresh, ants
          will begin removing it within 30 minutes.&rdquo;
        </em>
      </p>
      <p>
        <strong>Three baits are named below, and they are named for one reason: the active
        ingredient each listing publishes is one a source names for fire ants.</strong> They are
        not ranked. No speed claim is made for any of them, because the sources disagree with
        each other on how fast these actives work and this page has no basis for choosing.
      </p>

      <UsToolCard
        name="Amdro Fire Ant Bait, Granular, 1 lb"
        whatItDoes={[
          'Its listing publishes hydramethylnon as the active ingredient. Texas A&M names hydramethylnon among the actives used in fire ant baits, and UF/IFAS Extension describes hydramethylnon as killing ants by preventing them from converting food into energy.',
          'A granular bait — a product containing a food plus an insecticide, which is what Texas A&M describes step one as using.',
          'Sold as 1 lb, which is roughly the 1 to 1.5 pounds per acre AgriLife Extension gives as the typical application. Read the label rate for your product and area, which is the instruction every source gives.',
        ]}
        asin="B00GRT5E18"
      />

      <UsToolCard
        name="Fertilome Come and Get It Fire Ant Killer Bait, 1 lb"
        whatItDoes={[
          'Its listing publishes spinosad as the active ingredient and carries an OMRI listing. AgriLife Extension in 2026 recommends products containing spinosad for a vegetable bed or where an organic approach is preferred.',
          'Texas A&M describes the natural-products route as broadcasting a spinosad bait first, and states that the Organic Materials Review Institute certifies several spinosad-containing products for fire ant control.',
          'UF/IFAS Extension advises looking for products certified by OMRI, which is the one organic criterion any source here gives that a listing can be checked against.',
        ]}
        asin="B08YS87GR5"
      />

      <UsToolCard
        name="Extinguish Plus Fire Ant Bait, 1.5 lb"
        whatItDoes={[
          'Its listing publishes two actives, hydramethylnon and methoprene. Texas A&M names both: hydramethylnon among the faster actives, and methoprene among the insect growth regulator baits.',
          'UF/IFAS Extension describes insect growth regulators including methoprene as reducing egg production and preventing worker development, and notes that they do not kill adult ants, so a treated colony persists until its workers die naturally.',
          'Named here because its published actives are ones the sources name. No comparison against the other two baits on this page is offered or implied.',
        ]}
        asin="B015BSWVCU"
      />

      <h2 id="spreaders">The Spreader Matters</h2>
      <p>
        This is the one piece of equipment the sources specify, and they specify it by
        exclusion as much as by type. Texas A&amp;M states:{' '}
        <em>&ldquo;Hand-held seed spreaders are ideal for applying fire ant baits.&rdquo;</em>{' '}
        and{' '}
        <em>&ldquo;Push-type fertilizer spreaders put out most baits too quickly.&rdquo;</em>{' '}
        Clemson Extension excludes two more:{' '}
        <em>
          &ldquo;Do not use belly spreaders or drop spreaders, as the gate openings cannot be
          restricted adequately, and these put out too much product.&rdquo;
        </em>
      </p>
      <p>
        Clemson also gives the technique, which follows from the rate:{' '}
        <em>&ldquo;turn the hand crank slowly and walk fast&rdquo;</em>. Texas A&amp;M says to
        set the spreader on the smallest opening and make one pass over the area to be treated.
      </p>
      <p>
        <strong>Both spreaders below are the hand-held type the sources name, and neither is a
        belly, drop, push or chest-mounted spreader, all of which the sources exclude.</strong>{' '}
        No source names a product. Texas A&amp;M mentions two models by name in its 2003
        publication and attaches this to the mention:{' '}
        <em>
          &ldquo;Reference to commercial products or trade names is made with the understanding
          that no discrimination is intended and no endorsement by Texas Cooperative Extension
          is implied.&rdquo;
        </em>
      </p>

      <UsToolCard
        name="Scotts Whirl Hand-Powered Spreader"
        whatItDoes={[
          'A hand-held, hand-powered spreader — the type Texas A&M names as ideal for applying fire ant baits.',
          'Not a belly spreader, a drop spreader or a push-type fertilizer spreader, each of which the sources exclude by name.',
          'Its listing describes it as hand-held. Nothing further about it is claimed here, and no source names it or any other product.',
        ]}
        asin="B0DV9W259K"
      />

      <UsToolCard
        name="EarthWay 14014 Hand Spreader, 4 lb"
        whatItDoes={[
          'Sold as a hand spreader with a 4 lb capacity, which is the hand-held type the sources name.',
          'Its product title states the hand-spreader type; its body copy does not restate it, so the type is taken from the title and that is recorded here rather than glossed over.',
          'Clemson Extension says to set the gate opening just wide enough for the product to come out and no wider, because only 1 to 1.5 pounds of bait are being applied per acre.',
        ]}
        asin="B08MB5VG9M"
      />

      <h2 id="mound-treatment">Step Two: Treating a Mound</h2>
      <p>
        Texas A&amp;M describes the second step:{' '}
        <em>
          &ldquo;The second step is to treat problem ant colonies&mdash;those needing immediate
          attention&mdash;using a mound treatment.&rdquo;
        </em>{' '}
        It is explicit that this is not a whole-yard job:{' '}
        <em>
          &ldquo;It&rsquo;s not necessary to treat all fire ant colonies with mound treatments
          after applying a bait. Limit Step Two treatments to mounds located next to house
          foundations, in high-traffic areas or other trouble spots.&rdquo;
        </em>{' '}
        AgriLife Extension adds that where a property has only a few mounds, it may not even be
        necessary to apply bait as a first step.
      </p>
      <p>
        <strong>The criterion for this step is a volume of water, and it decides whether it
        works.</strong> NC State Extension states:{' '}
        <em>
          &ldquo;Must apply with considerable volume (2 gal water/mound) of liquid to reach the
          queen in the nest or the colony will survive.&rdquo;
        </em>{' '}
        Texas A&amp;M gives 1 to 2 gallons per nest for both granules and liquid drenches. NC
        State adds two instructions: treat in mid-morning, when the ants are closest to the
        surface, and{' '}
        <em>&ldquo;Do not physically disturb the mound before or after application.&rdquo;</em>
      </p>
      <p>
        <strong>No mound-treatment product is named on this page.</strong> The natural-products
        route Texas A&amp;M describes is a spinosad bait first and then a d-limonene drench, and
        the listings checked for this page either did not publish a mound application in their
        own text or did not publish an active ingredient at all. A product that does not state
        the job the source describes is not one this page will put a criterion against, so the
        criteria are given above as content and nothing is sold against them.
      </p>

      <h2 id="gloves">Handling Liquid Concentrates</h2>
      <p>
        AgriLife Extension states that{' '}
        <em>
          &ldquo;Wearing proper protection such as gloves and possibly even safety goggles is
          key if you&rsquo;re mixing chemicals.&rdquo;
        </em>{' '}
        Texas A&amp;M is the one source that gives a specification:{' '}
        <em>
          &ldquo;Always wear chemical resistant, unlined gloves to protect your skin when
          handling liquid concentrates, and follow label safety directions.&rdquo;
        </em>
      </p>
      <p>
        <strong>Note the scope.</strong> That instruction is attached to handling liquid
        concentrates, which is step two. It is not attached to broadcasting a granular bait.
      </p>
      <p>
        The three gloves below each state both properties the instruction names &mdash;
        chemical resistant, and unlined &mdash; in their own listings. Listings that state one
        and not the other, or that contradict themselves, are not named here.
      </p>

      <UsToolCard
        name="Gemplers Unlined Nitrile Gloves, 15 mil"
        whatItDoes={[
          'Its listing states both properties Texas A&M names for handling liquid concentrates: chemical resistant, and unlined.',
          '15 mil nitrile per the listing. No source names a thickness, so the figure is recorded and not held up as a criterion.',
          'For step two, mixing and applying a liquid concentrate — not for broadcasting a granular bait.',
        ]}
        asin="B072KL69L5"
      />

      <UsToolCard
        name="SHOWA 727 Nitrile Chemical Resistant Glove, Unlined"
        whatItDoes={[
          'Chemical resistant and unlined, both stated in its own listing, which is the specification Texas A&M gives.',
          'A second option in the same class rather than an improvement on the one above; no source compares any two gloves.',
          'Same scope: liquid concentrates, per the instruction the specification comes from.',
        ]}
        asin="B0FDH2LTTN"
      />

      <UsToolCard
        name="SHOWA 737 Nitrile Chemical Resistant Glove, Unlined, 22 mil"
        whatItDoes={[
          'Chemical resistant and unlined per its own listing, at 22 mil, which is the thickest of the three named here.',
          'Thickness is a listing figure and not a sourced criterion. It is recorded because the listing publishes it.',
          'Same scope again: Texas A&M attaches the requirement to handling liquid concentrates.',
        ]}
        asin="B007VR5H3K"
      />

      <h2 id="does-not-work">What the Sources Tested and Rejected</h2>
      <p>
        <strong>Grits.</strong> UF/IFAS Extension states:{' '}
        <em>
          &ldquo;Fire ants only ingest liquids, so the idea that they will eat the grits, swell,
          and then explode is false.&rdquo;
        </em>{' '}
        Clemson Extension adds:{' '}
        <em>
          &ldquo;First, adult fire ants cannot physically ingest solid food. Second, grits do
          not contain any toxicant (poison) that would kill the ants.&rdquo;
        </em>
      </p>
      <p>
        <strong>The wider tested list.</strong> Texas A&amp;M reports:{' '}
        <em>
          &ldquo;Evaluations of home remedies including aspartame, baking soda, cinnamon, club
          soda, coffee grounds, grits and Malt-O-Meal, and molasses failed to document control
          of imported fire ant mounds.&rdquo;
        </em>{' '}
        On club soda specifically, UF/IFAS states:{' '}
        <em>&ldquo;This method is ineffective and at most may only drown a few ants.&rdquo;</em>{' '}
        On soap and wood ashes:{' '}
        <em>
          &ldquo;These substances supposedly remove the wax layer that protects the ant&rsquo;s
          body, which is not true.&rdquo;
        </em>
      </p>
      <p>
        <strong>Shovelling one mound onto another.</strong> UF/IFAS states:{' '}
        <em>
          &ldquo;Multi-queen colonies are not territorial and this method is not even effective
          for single-queen colonies. Florida has multi-queen populations, so by following this
          ineffective method you risk increasing your fire ant problem.&rdquo;
        </em>{' '}
        Texas A&amp;M agrees:{' '}
        <em>
          &ldquo;Colonies in mounds that are regularly disturbed or knocked down may move, but
          this does not eliminate the ants.&rdquo;
        </em>{' '}
        And the general reason disturbance alone fails, from UF/IFAS:{' '}
        <em>
          &ldquo;If the queens are not killed, the colony will not be destroyed and will most
          likely establish itself in another nearby area.&rdquo;
        </em>
      </p>
      <p>
        <strong>Hot water works partially, and the three sources give three figures.</strong>{' '}
        Texas A&amp;M states:{' '}
        <em>
          &ldquo;Approximately 3 gallons of hot water poured on each mound will eliminate about
          60 percent of the mounds treated&rdquo;
        </em>
        , citing Tschinkel and Howard. UF/IFAS states:{' '}
        <em>
          &ldquo;Scalding water (190&ordm;F-212&ordm;F) has been used on mounds with an
          elimination success rate of 20%-60%. Slowly pour at least 3 gallons onto the mound,
          being careful to avoid getting burned.&rdquo;
        </em>{' '}
        The 2003 Texas A&amp;M publication is vaguer and blunter about the risk:{' '}
        <em>
          &ldquo;Boiling water (about 3 gallons per mound) can eliminate some fire ant colonies.
          However, this method can be hazardous to the person carrying the hot water. Boiling
          water poured on grass or over plant roots also can be lethal to the plants.&rdquo;
        </em>{' '}
        AgriLife Extension in 2026 offers it as an organic option and warns that it{' '}
        <em>&ldquo;requires caution and often repeated attempts.&rdquo;</em> About 60 per cent,
        20 to 60 per cent, and &ldquo;some&rdquo;. All three agree on roughly three gallons and
        all three warn about burns.
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">Never gasoline</p>
        <p className="m-0 mt-3 text-sm text-red-900">
          Texas A&amp;M:{' '}
          <em>
            &ldquo;Never use gasoline or other petroleum products for fire ant control! Although
            gasoline kills fire ants, it is extremely flammable and dangerous&mdash;both to you
            and to the environment.&rdquo;
          </em>{' '}
          AgriLife Extension in 2024:{' '}
          <em>&ldquo;Do not use gasoline or other petroleum products to control fire ants.&rdquo;</em>{' '}
          Texas A&amp;M elsewhere adds that such materials{' '}
          <em>
            &ldquo;are not EPA-registered pesticides, are dangerously flammable, kill grass and
            plants around the treated mounds, and can seriously pollute the soil and
            groundwater.&rdquo;
          </em>{' '}
          UF/IFAS extends the list to{' '}
          <em>
            &ldquo;gasoline or petroleum products, battery acid, bleach, ammonia, or other
            cleaning products.&rdquo;
          </em>
        </p>
      </div>

      <p>
        <strong>On devices sold for fire ant control.</strong> Texas A&amp;M states:{' '}
        <em>
          &ldquo;Devices that do not use chemical insecticides or microorganisms are not
          required to be labeled as pesticides by the Environmental Protection Agency, and are
          often marketed without scientific evaluation. The fact that a &ldquo;control&rdquo;
          device is on the market does not indicate that it is effective.&rdquo;
        </em>{' '}
        It says deceptive claims should be reported{' '}
        <em>
          &ldquo;to the office of the Texas Attorney General or the Federal Trade
          Commission.&rdquo;
        </em>{' '}
        No such device is named on this page.
      </p>
      <p>
        <strong>Two more the sources reject on their own grounds.</strong> On diatomaceous
        earth, Texas A&amp;M states that{' '}
        <em>
          &ldquo;when applied as a dust or drench to fire ant mounds, diatomaceous earth usually
          does not eliminate colonies.&rdquo;
        </em>{' '}
        On soap products, it states that{' '}
        <em>&ldquo;these insecticidal products are not registered to treat fire ant mounds&rdquo;</em>{' '}
        and that the manufacturers do not support uses outside their directions.
      </p>
      <p>
        <strong>And Clemson&rsquo;s position on the whole category:</strong>{' '}
        <em>
          &ldquo;Clemson Extension does not endorse or recommend DIY home remedies for fire ant
          management&rdquo;
        </em>
        .
      </p>

      <h2 id="quarantine">The Federal Quarantine</h2>
      <p>
        There is a federal quarantine, and it is worth knowing what it actually restricts. 7
        CFR 301.81 states in full:{' '}
        <em>
          &ldquo;No person may move interstate from any quarantined area any regulated article
          except in accordance with this subpart.&rdquo;
        </em>
      </p>
      <p>
        <strong>The list of regulated articles is not in the regulation.</strong> 7 CFR 301.81-2
        states that{' '}
        <em>
          &ldquo;The Administrator has determined that certain articles present a risk of spread
          of the imported fire ant&rdquo;
        </em>{' '}
        and that the list is published on the APHIS website. The list of quarantined areas is
        delegated the same way. This page therefore does not reproduce either list, because the
        regulation itself does not contain them.
      </p>
      <p>
        7 CFR 301.81-4 gives the enforcement power, and the paragraph is quoted here to its
        end rather than stopped at the inspection power:{' '}
        <em>
          &ldquo;Inspectors are authorized to stop any person or means of conveyance moving in
          interstate commerce they have probable cause to believe is moving regulated articles,
          and to inspect the articles being moved and the means of conveyance. Articles found to
          be infested by an inspector, and articles not in compliance with the regulations in
          this subpart, may be seized, quarantined, treated, subjected to other remedial
          measures, destroyed, or otherwise disposed of. Any treatments will be in accordance
          with part 305 of this chapter.&rdquo;
        </em>{' '}
        That is the whole of paragraph (b). It was read from the Government Publishing Office&rsquo;s
        2025 annual edition of Title 7 on govinfo.gov, which is the text cited below.
      </p>
      <p>
        <strong>What it does not do is restrict what a householder can buy.</strong> The
        quarantine governs articles moving <em>out of</em> quarantined areas &mdash; the kinds
        of thing that can carry ants. Nothing in the sections read restricts a consumer buying a
        pesticide, or a pesticide being shipped into a quarantined state.
      </p>

      <h2 id="boundaries">What This Page Does Not Claim</h2>
      <p>
        <strong>It does not claim you can clear them.</strong> Clemson Extension forecloses that
        in its own voice:{' '}
        <em>
          &ldquo;Notice that the words &ldquo;control&rdquo; and &ldquo;manage&rdquo; are used
          when referring to fire ants, and no form of the word &ldquo;eradicate&rdquo; will
          appear here. The biology of fire ants and the constant reinfestation pressure from
          outside areas do not allow for complete eradication.&rdquo;
        </em>{' '}
        UF/IFAS Extension agrees:{' '}
        <em>
          &ldquo;no fire ant control method (with possibly the exception of biological control
          agents) will permanently eliminate ants from an area. Fire ants can quickly re-infest
          areas after treatment stops&rdquo;
        </em>
        .
      </p>
      <p>
        <strong>The label decides what is legal and where.</strong> Clemson Extension states:{' '}
        <em>
          &ldquo;It is a violation of Federal Law to use a pesticide in a manner inconsistent
          with its label and labeling.&rdquo;
        </em>{' '}
        AgriLife Extension states that the label determines where a product can be used &mdash;
        lawn, garden, agricultural production pasture or orchard &mdash; and that users should
        read it to be sure the site they are treating is listed. NC State Extension adds that
        some products are not labeled for edible plants.
      </p>
      <p>
        <strong>What to do with what is left over</strong>, from Texas A&amp;M and AgriLife
        Extension, near-identically: do not leave insecticide granules on streets or sidewalks
        after application, because they wash into storm sewers; follow label directions when
        disposing of pesticides and containers; and never pour leftovers down the drain.
      </p>
      <p>
        <strong>And where this stops being a job for a householder.</strong> Texas A&amp;M
        states:{' '}
        <em>
          &ldquo;If you and your neighbors prefer not to apply pesticides yourselves, or want to
          ensure that treatments are applied uniformly and on time, consider a professional pest
          control company.&rdquo;
        </em>
      </p>
      <p>
        <strong>One note on what &ldquo;organic&rdquo; means here.</strong> Texas A&amp;M is
        careful about it: the organic certification programmes{' '}
        <em>
          &ldquo;are solely for certified organic food and livestock production. There is no
          similar program that applies to nonagricultural pest management practices where
          options termed &ldquo;organic&rdquo; may be based on personal judgment and disputed by
          others&rdquo;
        </em>
        . That is why the only organic criterion used on this page is an OMRI listing, which is
        a certification a reader can check.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or
        in the text immediately adjacent to it, and every source named is listed below. Where two
        sources disagree, both are given with the source that holds each position rather than one
        being chosen. The wording, ordering and emphasis are our own judgement and are not a
        finding of any source. The products named on this page were read from their own listings
        on 25 August 2026 and are recorded rather than assessed; the listings read were
        B00GRT5E18, B08YS87GR5, B015BSWVCU, B0DV9W259K, B08MB5VG9M, B072KL69L5, B0FDH2LTTN and
        B007VR5H3K, each reachable from its own card above where the disclosure sits directly
        beside the link. No claim is made anywhere on this page about whether any of them can be
        bought today, and no price appears anywhere on it.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
