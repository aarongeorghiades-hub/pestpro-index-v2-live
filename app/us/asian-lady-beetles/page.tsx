import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { OVERWINTERING_NAV, OVERWINTERING_HOME } from '../components/overwinteringNav';

const URL = 'https://pestproindex.com/us/asian-lady-beetles';
const TITLE = 'Asian Lady Beetles vs Ladybugs: What to Check';
const DESCRIPTION =
  'The multicolored Asian lady beetle massing on siding in fall is not the native ladybug. The M-shaped mark, the staining fluid, the biting, and the allergy link.';

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
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Stink Bugs in the House',
      item: 'https://pestproindex.com/us/stink-bugs-in-house',
    },
    { '@type': 'ListItem', position: 2, name: 'Asian Lady Beetles', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'How do I tell an Asian lady beetle from a ladybug?',
    answer:
      'Look at the white plate behind the head, not at the spots. Ohio State University Extension describes a black, regularly to irregularly shaped M or W on the white pronotum, depending on whether the beetle is viewed from the front or from the rear. Penn State Extension describes it as a white pronotum with a black W, which may be completely filled in. Native lady beetles lack this mark. Color and spot count are unreliable because the Asian species varies enormously.',
  },
  {
    question: 'Why is the marking called an M by some sources and a W by others?',
    answer:
      'Because it is the same mark seen from opposite ends. Ohio State University Extension explains it reads as an M or a W depending on whether you are looking at the beetle from the front or from the rear. Neither description is wrong. If you are looking down at a beetle walking away from you it reads one way; walking toward you, the other.',
  },
  {
    question: 'What color are Asian lady beetles?',
    answer:
      'Almost any shade you like, which is why color is useless for identification. Ohio State University Extension gives different shades of yellow, orange or red, with some individuals having 19 black spots and others having faded spots that vary in number and size. Penn State Extension reports most have red wing covers with up to 18 black spots, but the spots may be small, reduced to four, or entirely absent, and there is also a black form with two, four or twelve orange to red spots.',
  },
  {
    question: 'How big are they?',
    answer:
      'Small. Ohio State University Extension gives approximately 0.2 to 0.3 inches long. Penn State Extension gives 9/32 inch, about 7 mm, long and 7/32 inch, about 5.5 mm, wide.',
  },
  {
    question: 'Do Asian lady beetles bite?',
    answer:
      'Yes, unlike the other fall invaders. Ohio State University Extension states there have been consistent reports of them biting humans and describes the species as more aggressive than native lady beetles. Penn State Extension says they occasionally bite people, which can vary from slightly annoying to painful, and notes the mechanism is not understood because biting is not correlated to feeding rates.',
  },
  {
    question: 'What is the yellow fluid and will it stain?',
    answer:
      'It is a defensive secretion, and yes. Penn State Extension describes a stinky yellow defensive chemical exuded from the leg joints when the beetle is disturbed, resulting in spotting on walls and other surfaces. Ohio State University Extension is blunter, describing a yellow-orange body fluid that causes a permanent stain on carpets, curtains, walls and similar surfaces. This is the strongest single argument for vacuuming them rather than swatting them.',
  },
  {
    question: 'Can Asian lady beetles cause allergies or asthma?',
    answer:
      'The extension literature reports a documented link. Ohio State University Extension lists allergenic responses including rhinoconjunctivitis, asthma, urticaria — welts — and angioedema. Penn State Extension reports that rhinoconjunctivitis, asthma and even angioedema of the face have been linked to lady beetle infestations, and adds that some people cross-react to lady beetles and cockroaches. Penn State also notes dermal reactions can produce a small localized welt, and that pets ingesting them may receive chemical burns inside the mouth.',
  },
  {
    question: 'Are Asian lady beetles good for the garden?',
    answer:
      'Genuinely, yes, which is what makes them awkward. Penn State Extension describes larvae and adults as voracious predators of aphids, insect eggs and other soft-bodied arthropods, and as efficient biocontrol agents in commercial agriculture. Ohio State University Extension calls the species a highly effective predator of aphids and other soft-bodied insects. Penn State adds that for a home garden it is generally not effective to buy and release them, because they disperse.',
  },
  {
    question: 'How do I get them out of the house?',
    answer:
      'Vacuum, and do it in a way that does not crush them. Penn State Extension says vacuuming up clusters is the most efficient method: with a bagged vacuum, remove the bag after each session and either tape and discard it or freeze it; with a bagless machine, place a nylon stocking into the hose and secure it with a rubber band. Ohio State University Extension advises using a fan-bypass vacuum rather than a direct-fan model, which matters because a direct-fan machine passes the beetles through the impeller.',
  },
];

const sources: Source[] = [
  {
    label: 'Multicolored Asian Lady Beetle',
    publisher: 'Penn State Extension (Michael J. Skvarla)',
    date: 'Updated August 12, 2026',
    href: 'https://extension.psu.edu/multicolored-asian-lady-beetle',
  },
  {
    label: 'Multicolored Asian Lady Beetle (ENT-44)',
    publisher: 'Ohio State University Extension (Joe Boggs and Susan C. Jones)',
    date: 'June 2, 2014',
    href: 'https://ohioline.osu.edu/factsheet/ENT-44',
  },
  {
    label: 'Multicolored Asian Lady Beetle Light Traps',
    publisher: 'Ohio State University Integrated Pest Management',
    date: 'Accessed 24 August 2026',
    href: 'https://ipm.osu.edu/sites/ipm/files/imce/light_0.pdf',
  },
];

const tocItems = [
  { id: 'the-distinction', title: 'Why the Distinction Matters' },
  { id: 'the-mark', title: 'The Mark Behind the Head' },
  { id: 'why-not-color', title: 'Why Not Color or Spots' },
  { id: 'behavior', title: 'Behavior Tells You Too' },
  { id: 'bite-stain', title: 'Biting and Staining' },
  { id: 'health', title: 'The Allergy Link' },
  { id: 'good-guy', title: 'The Awkward Part' },
  { id: 'control', title: 'Getting Them Out' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'Stink bugs in the house: the hub', href: '/us/stink-bugs-in-house' },
  { title: 'Boxelder bugs', href: '/us/boxelder-bugs' },
  { title: 'Cluster flies', href: '/us/cluster-flies' },
];

export default function AsianLadyBeetlesPage() {
  return (
    <UsPageLayout
      title="Asian Lady Beetles, Not Ladybugs"
      subtitle="The beetles massing on your siding in October are almost certainly not the native ladybug of childhood. One mark behind the head settles it, and the difference is not academic."
      lastUpdated="August 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: 'Stink Bugs in the House', href: '/us/stink-bugs-in-house' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={OVERWINTERING_HOME}
      clusterNav={OVERWINTERING_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Native lady beetles do not gather by the thousand on the sunny side of a house in
        October. The insect doing that is the multicolored Asian lady beetle,{' '}
        <em>Harmonia axyridis</em>, and telling the two apart takes about three seconds once
        you know where to look.
      </p>

      <h2 id="the-distinction">Why the Distinction Matters</h2>
      <p>
        This is not pedantry about names. Four things follow from which beetle it is.
      </p>
      <ul>
        <li>
          <strong>It bites.</strong> Ohio State University Extension reports consistent reports
          of the Asian species biting humans and describes it as more aggressive than native
          lady beetles. Native lady beetles are not known for this.
        </li>
        <li>
          <strong>It stains permanently.</strong> Ohio State University Extension describes a
          yellow-orange body fluid causing permanent staining on carpets, curtains and walls.
        </li>
        <li>
          <strong>It has a documented allergy link.</strong> Covered below, with sources.
        </li>
        <li>
          <strong>It comes indoors in numbers.</strong> Penn State Extension reports tens of
          thousands congregating in attics, ceilings and wall voids. That is a species trait
          the natives do not share.
        </li>
      </ul>
      <p>
        So &ldquo;it&rsquo;s just ladybugs&rdquo; is a diagnosis with real consequences
        attached, and it is usually wrong when the beetles are indoors in fall.
      </p>

      <h2 id="the-mark">The Mark Behind the Head</h2>
      <p>
        Ignore the wing covers. Look at the <strong>pronotum</strong> — the small plate between
        the head and the wing covers. On the Asian lady beetle it is white or cream, and it
        carries a black marking.
      </p>
      <p>
        Ohio State University Extension describes it as a black, regularly to irregularly shaped
        &ldquo;M&rdquo; or &ldquo;W&rdquo;, depending upon whether the beetle is viewed from the
        front or from the rear, and identifies it as an important feature separating this
        species from native lady beetles including Ohio&rsquo;s own.
      </p>
      <p>
        Penn State Extension describes the same feature as a white pronotum with a black
        &ldquo;W&rdquo;, and adds the caveat that matters in practice: the W may be completely
        filled in.
      </p>
      <p>
        <strong>So the honest instruction is this.</strong> Look for a dark mark on a white plate
        behind the head. It may read as an M, as a W, as four separate black spots, as two curved
        lines, or as a solid black block, and it may be thick, thin or broken. What matters is
        that there is a dark mark on a pale pronotum at all. Native lady beetles do not carry it.
      </p>

      <h2 id="why-not-color">Why Not Color or Spots</h2>
      <p>
        Because this species is called &ldquo;multicolored&rdquo; for a reason, and every
        identification attempt that starts with color fails.
      </p>
      <ul>
        <li>
          <strong>Ohio State University Extension:</strong> different shades of yellow, orange or
          red; some have 19 black spots, others have faded spots varying in number and size.
        </li>
        <li>
          <strong>Penn State Extension:</strong> most have red wing covers with up to 18 black
          spots, but the spots may be small, reduced to four, or entirely absent. There is also a
          black form with two, four or twelve orange to red spots.
        </li>
      </ul>
      <p>
        A beetle with no spots at all and a beetle with nineteen can be the same species. Meanwhile
        plenty of native lady beetles are red with black spots. Color tells you nothing; the
        pronotum tells you everything.
      </p>
      <p>
        On size, both sources agree it is small: Ohio State gives approximately 0.2 to 0.3 inches;
        Penn State gives 9/32 inch (7 mm) long by 7/32 inch (5.5 mm) wide.
      </p>

      <h2 id="behavior">Behavior Tells You Too</h2>
      <p>
        Before you get close enough to see a pronotum, the behavior is already diagnostic.
      </p>
      <p>
        Penn State Extension reports that overwintering behavior begins around the beginning of
        October, that the beetles gather on the south or southwest-facing sides of buildings, and
        that tens of thousands can congregate in attics, ceilings and wall voids. Ohio State
        University Extension notes that seeking overwintering sites in and around buildings is
        precisely what separates this species from the natives.
      </p>
      <p>
        The south and southwest wall detail is shared with{' '}
        <Link href="/us/boxelder-bugs">boxelder bugs</Link>, which congregate in sunny spots on the
        south sides of buildings, and with{' '}
        <Link href="/us/stink-bugs-in-house">brown marmorated stink bugs</Link>, which prefer the
        upper areas of buildings. All four fall invaders are solving the same problem, which is why
        they arrive together and get confused with each other.
      </p>

      <h2 id="bite-stain">Biting and Staining</h2>
      <h3>Biting</h3>
      <p>
        Ohio State University Extension states that the multicolored Asian lady beetle appears to be
        a more aggressive lady beetle compared to native species, and that there have been consistent
        reports of it biting humans. Penn State Extension says they occasionally bite people, which
        can vary from slightly annoying to painful, and notes honestly that the mechanism is not
        understood, because biting is not correlated to feeding rates.
      </p>
      <p>
        It is a nip rather than an injury. It is also the reason people who grew up being told
        ladybugs are harmless are surprised.
      </p>
      <h3>Staining</h3>
      <p>
        When disturbed, the beetle exudes fluid from its leg joints. Penn State Extension calls it a
        stinky yellow defensive chemical, resulting in spotting on walls and other surfaces. Ohio
        State University Extension describes a yellow-orange body fluid that causes a permanent
        stain on carpets, curtains, walls and similar surfaces.
      </p>
      <p>
        &ldquo;Permanent&rdquo; is the operative word, and it converts a nuisance into a decorating
        cost. It is also why every control recommendation below is about removing them intact.
      </p>

      <h2 id="health">The Allergy Link</h2>
      <p>
        This is documented in the extension literature and worth stating carefully.
      </p>
      <p>
        Ohio State University Extension lists allergenic responses including rhinoconjunctivitis,
        asthma, urticaria (welts) and angioedema. Penn State Extension reports that
        rhinoconjunctivitis, asthma and even angioedema of the face have been linked to lady beetle
        infestations, and adds that some people cross-react to lady beetles and cockroaches.
      </p>
      <p>
        Penn State also notes two more specific effects: dermal reactions producing a small,
        localized welt in some individuals, and chemical burns inside the mouth in pets that ingest
        the beetles.
      </p>
      <p>
        If someone in the household has asthma that worsens in the fall in a house with a beetle
        problem, that is a connection the sources support raising with a doctor. This page is not
        medical advice and cannot tell you whether it applies to you.
      </p>

      <h2 id="good-guy">The Awkward Part</h2>
      <p>
        The multicolored Asian lady beetle is a genuinely effective predator, and that is not a
        detail to bury.
      </p>
      <p>
        Penn State Extension describes larvae and adults as voracious predators of aphids, insect eggs
        and other soft-bodied arthropods, and as efficient biocontrol agents in commercial agriculture.
        Ohio State University Extension calls it a highly effective predator consuming aphids and other
        soft-bodied insects. Ohio State also documents that the species arrived through a mix of
        deliberate imports from Russia, Japan and Korea and accidental arrivals via ships, and that it
        was recognized in Ohio in October 1993. Penn State gives the first established North American
        populations in Louisiana in 1988 and first observation in Pennsylvania in fall 1993.
      </p>
      <p>
        Penn State adds a practical footnote for gardeners: it is generally not effective to purchase
        and release them, because they disperse.
      </p>
      <p>
        So the beetle in your garden is doing useful work and the beetle in your bedroom is a problem.
        Both statements are true of the same insect, and the sensible response is exclusion rather than
        eradication.
      </p>

      <h2 id="control">Getting Them Out</h2>
      <p>
        <strong>Vacuum, without crushing.</strong> Penn State Extension says vacuuming up clusters of
        beetles is the most efficient method, and gives two techniques depending on your machine:
      </p>
      <ul>
        <li>
          <strong>Bagged:</strong> remove the bag after each vacuuming and either tape and discard it,
          or freeze it.
        </li>
        <li>
          <strong>Bagless:</strong> place a nylon stocking into the vacuum hose and secure it with a
          rubber band, so the beetles never reach the canister.
        </li>
      </ul>
      <p>
        Ohio State University Extension adds the machine-type point: use a fan-bypass vacuum cleaner
        and avoid direct-fan models. In a direct-fan vacuum the beetles pass through the impeller,
        which crushes them — and crushing is what releases the staining fluid.
      </p>
      <p>
        <strong>Seal.</strong> Penn State Extension gives the same specification as for the other fall
        invaders: seal cracks around windows, doors, siding, utility pipes and behind chimneys with
        good quality silicone or silicone-latex caulk, and cover attics, fireplace chimneys and exhaust
        vents with number 20 or smaller screen mesh. Ohio State University Extension adds door sweeps or
        thresholds and sealing gaps of about 1/8 inch.
      </p>
      <p>
        <strong>On insecticides.</strong> Ohio State University Extension describes exterior treatments
        applied during late September or early October, and advises against indoor aerosol foggers. Penn
        State Extension says exterior treatment should be applied by a licensed pest control operator in
        late September or early October, and warns that insecticidal treatment of wall voids may kill
        thousands of beetles but that carpet beetles will then feed on the dead ones, and that foggers
        will not prevent more beetles emerging shortly afterward. We make no claim about the performance
        of any product; these are the sources&rsquo; statements about timing and about what goes wrong.
      </p>

      <h3>Hardware for the sealing work</h3>
      <p>
        <strong>
          These are examples of the two things Penn State Extension specifies above, and nothing
          else. They are in no order of preference, none is called better than another, and nothing
          here is a claim about how well any of them performs &mdash; that limit is the one stated
          at the end of the paragraph above and it applies to these cards too.
        </strong>
      </p>
      <p>
        The two criteria are the ones already quoted on this page: <strong>good quality silicone or
        silicone-latex caulk</strong> for cracks around windows, doors, siding, utility pipes and
        behind chimneys, and <strong>number 20 or smaller screen mesh</strong> for attics, fireplace
        chimneys and exhaust vents. Each card below is selected against one of those two figures and
        is described only as its own product listing describes it.
      </p>

      <UsToolCard
        name="GE Advanced Silicone Caulk for Window &amp; Door, Clear, 10 fl oz Cartridge"
        whatItDoes={[
          'A silicone caulk, which is the material Penn State Extension names for sealing cracks around windows, doors, siding, utility pipes and behind chimneys.',
          'Its own listing states silicone and a 10 fl oz cartridge. Nothing further about it is claimed here.',
          'Ohio State University Extension adds that gaps of about 1/8 inch are worth sealing.',
        ]}
        asin="B0BVGTM2XY"
      />

      <UsToolCard
        name="GE Advanced Silicone Window &amp; Door Sealant, Clear, 10.1 oz Cartridge"
        whatItDoes={[
          'A second silicone option in the same cartridge size range, for the same sealing work.',
          'Penn State Extension names the material and the locations; it does not name a product, and neither does this page.',
        ]}
        asin="B0000CBJ7W"
      />

      <UsToolCard
        name="GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge"
        whatItDoes={[
          'Also a silicone caulk. Its listing describes it as all purpose rather than as a window and door product, which is the difference between this and the two above.',
          'Penn State Extension specifies good quality silicone or silicone-latex caulk without distinguishing between formulations, so the distinction here is the listings\u2019, not the source\u2019s.',
        ]}
        asin="B0B8QPH3RW"
      />

      <UsToolCard
        name="Insect Screen, 20 x 20 Mesh Roll, 36 inch x 25 feet"
        whatItDoes={[
          'A 20 x 20 mesh screening roll. Penn State Extension specifies number 20 or smaller screen mesh for attics, fireplace chimneys and exhaust vents.',
          'The mesh count is the sourced criterion and it is stated in the product\u2019s own title. The product is marketed under a no-see-um name, which refers to the mesh grade rather than to this beetle.',
          'The same screening is listed on our no-see-ums page against a separate specification.',
        ]}
        asin="B0BS4KH2FH"
      />

      <UsToolCard
        name="Insect Screen, 20 x 20 Mesh Roll, 36 inch x 100 feet"
        whatItDoes={[
          'The same 20 x 20 mesh in a longer roll, for more than one vent or chimney.',
          'Penn State Extension gives the mesh number; it gives no roll length, so length is a practical choice rather than a sourced one.',
        ]}
        asin="B01N3BAPJO"
      />

      <div className="not-prose my-8 rounded-lg border-l-4 border-slate-500 bg-slate-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-slate-900">
          Three things this page does not sell, and why
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Indoor insecticides.</strong> Both sources above point away from them: Ohio State
          University Extension advises against indoor aerosol foggers, and Penn State Extension warns
          that insecticidal treatment of wall voids may kill thousands of beetles but that carpet
          beetles will then feed on the dead ones.
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Exterior perimeter treatment.</strong> Penn State Extension says exterior treatment
          should be applied by a licensed pest control operator in late September or early October.
          That is work assigned to a licensed operator, so no perimeter product is listed here.
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Light traps.</strong> Ohio State University Integrated Pest Management reports of a
          commercial black light trap that it was &ldquo;very effective, catching 90% of the beetles
          in our tests&rdquo;, operated in a dark room or at night. That figure belongs to one
          particular trap, which the same source says is bought from a named specialist supplier
          rather than at retail. A different trap bought elsewhere is not the article that was
          tested, so none is listed here.
        </p>
      </div>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
