import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { TICKS_NAV, TICKS_HOME } from '../components/ticksNav';

const URL = 'https://pestproindex.com/us/ticks';
const TITLE = 'Ticks: What Prevents Bites, and Removing One';
const DESCRIPTION =
  'The clothing treatment concentration and repellent ingredients sources name, the nine-foot lawn edge where most deer ticks live, and the removal steps.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Ticks', item: URL }],
};

const faqs: Faq[] = [
  {
    question: 'How do I remove a tick?',
    answer:
      'The University of Maine Cooperative Extension Tick Lab publishes a procedure and this page carries it complete and in its own words. It states that if you find a tick on your body, your children or your pets it is important to remove it immediately. There are several tick removal devices on the market, but a plain set of fine-tipped tweezers will work. Use the tweezers to grasp the tick as close to the skin surface as possible. Pull upward with steady, even pressure. Do not twist or jerk the tick, because that can cause the mouth-parts to break off and remain in the skin; if that happens, remove the mouth-parts with tweezers. After removing the tick, thoroughly clean the bite area, your hands, and the tweezers with rubbing alcohol, an iodine scrub, or soap and water. Two further instructions come from Purdue University Extension, reporting guidance it attributes to the Indiana Department of Health: never crush a tick with your fingers, and dispose of a live tick by putting it in alcohol, placing it in a sealed bag or container, wrapping it tightly in tape, or flushing it down the toilet. Those two are not steps of the Maine procedure and are not presented as part of it.',
  },
  {
    question: 'Should I use petroleum jelly, heat or nail polish to make a tick let go?',
    answer:
      'No. The University of Maine Cooperative Extension states not to use petroleum jelly, a hot match, nail polish, or other folk remedies to remove ticks. The University of Wisconsin-Madison says the same thing in its own words, advising readers to avoid home remedies like painting the tick with nail polish or petroleum jelly.',
  },
  {
    question: 'Do I need a special tick removal tool?',
    answer:
      'The University of Maine Cooperative Extension states that there are several tick removal devices on the market, but a plain set of fine-tipped tweezers will work. That is a description of a tool, not a recommendation of a brand, and no source consulted for this page compares one removal tool against another.',
  },
  {
    question: 'Should I get the tick tested?',
    answer:
      'Cornell University Integrated Pest Management advises against it and says whose position it is following. It states that though tick testing services are available from some organizations, it follows the CDC recommendation of not having the tick tested for disease diagnosis. The reasons it prints are introduced on its own page with the words From the CDC website, and they are that laboratories conducting tick testing are not required to have the high standards of quality control used by clinical diagnostic laboratories, that results of tick testing should not be used for treatment decisions, that a positive result does not necessarily mean you have been infected, that negative results can lead to false assurance, and that if you do become ill you should not wait for tick testing results before beginning appropriate treatment. This page quotes Cornell, which it can open and verify, and states that Cornell attributes the reasoning to CDC rather than presenting CDC as a source it checked itself.',
  },
  {
    question: 'What should I put on my clothes?',
    answer:
      'CDC states: treat clothing and gear with products containing 0.5% permethrin, and that permethrin can be used to treat boots, clothing and camping gear and remain protective through several washings. It adds that you can alternatively buy permethrin-treated clothing and gear. The Connecticut Agricultural Experiment Station gives the same figure, stating that products for consumer application to clothing contain 0.5% permethrin, and that permethrin works primarily by killing ticks on contact with the treated clothes.',
  },
  {
    question: 'What should I put on my skin?',
    answer:
      'CDC states to use Environmental Protection Agency registered insect repellents containing DEET, picaridin, IR3535, Oil of Lemon Eucalyptus (OLE), para-menthane-diol (PMD), or 2-undecanone, and to look for an EPA registration number, written EPA Reg. No., on the insect repellent product label. CDC explains that this registration number means the company provided EPA with technical information on the effectiveness of the product. CDC also states not to use products containing OLE or PMD on children under 3 years old, and that if you are using sunscreen you should apply sunscreen first and insect repellent second.',
  },
  {
    question: 'Where in my yard are ticks actually found?',
    answer:
      'The Connecticut Agricultural Experiment Station reports that on lawns, most deer ticks, 82 percent, have been recovered within 9 feet of the lawn edge, especially areas adjacent to woods, stonewalls or ornamental plantings, and that fewer ticks are found in the sunny, manicured areas of the lawn. CDC recommends placing a 3-foot wide barrier of wood chips or gravel between lawns and wooded areas to restrict tick migration into recreational areas.',
  },
  {
    question: 'Will spraying the yard solve it?',
    answer:
      'CDC states that use of pesticides can reduce the number of ticks in treated areas of your yard, however you should not rely on spraying to reduce your risk of infection. The Connecticut Agricultural Experiment Station adds a practical limit on what a homeowner can buy: many pesticide products are restricted to licensed commercial pesticide applicators, and it lists deltamethrin and lambda-cyhalothrin as restricted use products for use by licensed applicators only.',
  },
  {
    question: 'Which tick carries Lyme disease?',
    answer:
      'CDC lists Borrelia burgdorferi and B. mayonii, which cause Lyme disease, among the pathogens transmitted by the blacklegged tick, Ixodes scapularis, which it describes as widely distributed across the eastern United States. CDC also lists Borrelia burgdorferi among the pathogens transmitted by the western blacklegged tick, Ixodes pacificus, found along the Pacific coast of the United States, particularly northern California. CDC cautions that even though a specific tick species is found in a region of the United States, it does not necessarily mean it transmits a specific disease in that area, because disease transmission is influenced by multiple factors beyond mere tick presence.',
  },
  {
    question: 'What is alpha-gal syndrome?',
    answer:
      'CDC describes alpha-gal syndrome as a serious, potentially life-threatening allergy and tickborne disease. Alpha-gal is a molecule naturally produced in the bodies of most mammals but not in people, and it is also found in the saliva of some ticks; when a tick bites it can transfer alpha-gal from its saliva into a person blood, and symptoms occur after people eat red meat or are exposed to other products made from mammals. CDC states that in the United States it is primarily associated with the bite of a lone star tick, and less commonly by the bite of a blacklegged tick or a western blacklegged tick, and that the reason why certain people develop it and others do not is not known.',
  },
];

const sources: Source[] = [
  {
    label:
      'Tick Removal, Tick Lab — the source of the removal procedure, which is carried here complete and in its own words, and of the folk-remedy warning and the seek-care instruction',
    publisher: 'University of Maine Cooperative Extension',
    date: 'Undated on the page; read 30 August 2026',
    href: 'https://extension.umaine.edu/ticks/removal/',
  },
  {
    label:
      'Do All You Can to Prevent Tick Bites — reporting guidance it attributes to the Indiana Department of Health; the source of the do-not-crush instruction and the disposal methods',
    publisher: 'Purdue University Extension',
    date: 'Article dated April 2025; read 30 August 2026',
    href: 'https://extension.purdue.edu/news/county/whitley/2025/04/do-all-you-can-to-prevent-tick-bites.html',
  },
  {
    label: 'Tick Safety Instructions, I-TICK — the source of the reason not to crush a tick',
    publisher: 'University of Illinois College of Veterinary Medicine',
    date: 'Undated on the document; read 30 August 2026',
    href: 'https://vetmed.illinois.edu/i-tick/wp-content/uploads/sites/69/2019/05/TICK-SAFETY-INSTRUCTIONS.pdf',
  },
  {
    label:
      'Protect Yourself from Ticks — the source of the daily tick check, one of the two dryer positions, and the tick-testing position, which Cornell attributes to CDC on its own page',
    publisher: 'Cornell University Integrated Pest Management',
    date: 'Undated on the page; read 30 August 2026',
    href: 'https://cals.cornell.edu/integrated-pest-management/outreach-education/whats-bugging-you/ticks/protect-yourself-ticks',
  },
  {
    label: 'Tick Removal — the source of the symptom list and its thirty-day window',
    publisher: 'University of Wisconsin–Madison, Wisconsin Ticks and Tick-borne Diseases',
    date: 'Undated on the page; read 30 August 2026',
    href: 'https://wisconsin-ticks.russell.wisc.edu/tick-removal/',
  },
  {
    label:
      'As Lyme Disease Season Approaches, Certain Precautions Are Particularly Effective — the source of the shower and body-check figures, from its own study of 716 people in 24 Connecticut towns',
    publisher: 'Yale School of Public Health',
    date: 'Undated on the page; read 30 August 2026',
    href: 'https://ysph.yale.edu/news-article/as-lyme-disease-season-approaches-certain-precautions-are-particularly-effective/',
  },
  {
    label:
      'Alpha-Gal Syndrome: What We Know and Don’t Know — a question-and-answer piece; the alpha-gal answers are the named researchers’ words, not an institutional fact sheet',
    publisher: 'Tufts University',
    date: 'Article dated 27 May 2026; read 30 August 2026',
    href: 'https://now.tufts.edu/2026/05/27/alpha-gal-syndrome-what-we-know-and-dont-know',
  },
  {
    label:
      'Tick Checks and Use of Insect Repellents — the source of the repellent active ingredients, the DEET figures and one of the two dryer positions',
    publisher: 'The Connecticut Agricultural Experiment Station',
    date: 'Fact sheet dated 2015; read 30 August 2026',
    href: 'https://portal.ct.gov/-/media/caes/documents/publications/fact_sheets/entomology/repellentfactsheetnewformat2015pdf.pdf',
  },
  {
    label:
      'Managing Exposure to Ticks on Your Property — Kirby C. Stafford III, Ph.D., Chief Entomologist',
    publisher: 'The Connecticut Agricultural Experiment Station, 2014',
    date: 'Accessed 23 August 2026',
    href: 'https://portal.ct.gov/-/media/CAES/DOCUMENTS/Publications/Fact_Sheets/Entomology/TickControlFSpdf.pdf',
  },
  {
    label: 'Blacklegged Tick or Deer Tick — Tick Lab',
    publisher: 'University of Maine Cooperative Extension',
    date: 'Accessed 23 August 2026',
    href: 'https://extension.umaine.edu/ticks/maine-ticks/deer-tick-or-black-legged-tick/',
  },
  {
    label: 'Permethrin General Fact Sheet',
    publisher: 'National Pesticide Information Center, Oregon State University and US EPA',
    date: 'Accessed 23 August 2026',
    href: 'https://npic.orst.edu/factsheets/PermGen.html',
  },
];

const tocItems = [
  { id: 'prevention', title: 'Preventing Bites' },
  { id: 'the-yard', title: 'The Yard' },
  { id: 'removal', title: 'If One Is Already Attached' },
  { id: 'species', title: 'Which Tick, and What It Carries' },
  { id: 'biology', title: 'How Ticks Find You' },
  { id: 'health', title: 'The Diseases' },
  { id: 'yard-treatment', title: 'Treating the Yard' },
  { id: 'products', title: 'Examples, by Sourced Ingredient' },
  { id: 'where', title: 'Where This Applies' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function TicksPage() {
  return (
    <UsPageLayout
      title="Ticks"
      subtitle="Prevention first, because that is where the sources put the weight: a named concentration for clothing, a named list of repellent ingredients, and nine feet of lawn edge where most of the ticks actually are."
      lastUpdated="August 2026"
      readingTime="14 min"
      tocItems={tocItems}
      homeHref={TICKS_HOME}
      clusterNav={TICKS_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Most of what the public health and extension sources say about ticks is about not being
        bitten in the first place, and about a small number of specific, checkable things &mdash; a
        concentration on a label, a distance from the lawn edge, a way of holding a pair of
        tweezers. This page leads with those, because that is the order the sources put them in.
      </p>
      <p>
        <strong>CDC notes that many people get ticks in their own yard or neighborhood.</strong>{' '}
        <em>
          (CDC&rsquo;s pages could not be retrieved when this page was last checked, so what it says
          is reported here in our own words rather than quoted)
        </em>
      </p>

      <h2 id="prevention">Preventing Bites</h2>
      <p>
        <strong>
          CDC states that tick exposure can occur year-round, but that ticks are most active during
          the warmer months of April to September.
        </strong>{' '}
        Its advice divides into what goes on clothing, what goes on skin, and what to do when you
        come back indoors.
      </p>

      <h3>On clothing: one concentration, named twice</h3>
      <p>
        <strong>The Connecticut Agricultural Experiment Station gives the concentration:</strong>{' '}
        <strong>
          &ldquo;Products for consumer application to clothing contain 0.5% permethrin&rdquo;
        </strong>
        , and explains the mechanism &mdash; permethrin{' '}
        &ldquo;works primarily by killing ticks on contact with the treated clothes and can provide
        high levels of protection against ticks (and mosquitoes).&rdquo; The same source notes that
        &ldquo;Permethrin has low mammalian toxicity, is poorly absorbed through the skin, and is
        rapidly neutralized by the body. Skin reactions are uncommon.&rdquo;
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">Permethrin and cats</p>
        <p className="m-0 mt-3 text-base text-amber-900">
          The National Pesticide Information Center states:{' '}
          <strong>
            &ldquo;Cats are more sensitive to permethrin than dogs or people because it takes their
            bodies a long time to break it down.&rdquo;
          </strong>{' '}
          It further states that cats &ldquo;exposed by accident to products with high (45-65%)
          levels of permethrin may seem anxious and can&rsquo;t walk normally. They may also have
          muscle tremors and seizures and they may die from the exposure.&rdquo;
        </p>
        <p className="m-0 mt-3 text-base text-amber-900">
          The 45&ndash;65% figure in that sentence is not the 0.5% of a clothing spray, and this
          page does not present the two as the same thing. It is here because permethrin appears in
          three separate places further down and the caution belongs with the ingredient.
        </p>
      </div>

      <h3>On skin: an ingredient list and a number to look for</h3>
      <p>
        <strong>
          The Connecticut Agricultural Experiment Station names the repellent active ingredients one
          by one.
        </strong>{' '}
        Of the commonest it states that{' '}
        <strong>
          &ldquo;The primary active ingredient in most insect/tick repellents today is DEET
          (N,N-diethyl-3-methylbenzamide or N,Ndiethyl-m-toluamide)&rdquo;
        </strong>
        , and it treats picaridin, IR3535 and oil of lemon eucalyptus as separate entries, noting of
        the last that it is &ldquo;p-menthane-3,8diol&rdquo; and that &ldquo;This compound occurs
        naturally in the oil of the lemon eucalyptus plant and the synthesized oil is the sole
        active ingredient in some newer products.&rdquo;{' '}
        <em>
          (the spelling &ldquo;N,Ndiethyl&rdquo; and the closed-up &ldquo;p-menthane-3,8diol&rdquo;
          are the Connecticut Agricultural Experiment Station&rsquo;s own and are not corrected
          here)
        </em>
      </p>
      <p>
        <strong>
          CDC states that a reader should use repellents registered with the Environmental
          Protection Agency, and that an EPA registration number on the label means the company
          provided the EPA with technical information on the product&rsquo;s effectiveness. It
          attaches two conditions in its own guidance: to follow the product instructions, and not
          to use products containing oil of lemon eucalyptus or para-menthane-diol on children under
          three years old.
        </strong>{' '}
        <em>
          (CDC&rsquo;s pages could not be retrieved when this page was last checked, so what it says
          is reported here in our own words rather than quoted)
        </em>
      </p>
      <p>
        The Connecticut Agricultural Experiment Station adds a figure about DEET specifically, and
        it points the opposite way from most packaging. Having noted that DEET products &ldquo;range
        in concentration from 4% to 100%&rdquo; and that &ldquo;Higher concentrations up can provide
        longer protection&rdquo;, it states:{' '}
        <strong>
          &ldquo;However, a concentration greater than 30% doesn&rsquo;t provide extra
          protection.&rdquo;
        </strong>{' '}
        <em>
          That statement is about DEET. It is not extended here to picaridin or to any other
          ingredient, because the source did not extend it.
        </em>
      </p>
      <p>
        The same source is candid about what a repellent does and does not do:{' '}
        <strong>
          &ldquo;DEET will repel ticks and decrease the chances of tick bite, but depending upon the
          concentration, it may not provide total protection and can vary between tick
          species.&rdquo;
        </strong>{' '}
        It adds the placement advice that follows from how ticks climb: &ldquo;When applying a
        repellent against ticks, particular attention should be given to the shoe tops, socks, and
        lower portion of pants.&rdquo;
      </p>

      <h3>When you come back indoors</h3>
      <p>
        <strong>
          On the dryer, two sources give two different times and this page gives both rather than
          picking one.
        </strong>{' '}
        <strong>Cornell University Integrated Pest Management</strong> states that{' '}
        <em>
          &ldquo;you&rsquo;re safest if you put your clothes in a clothes dryer and run on high heat
          for 20 minutes&rdquo;
        </em>
        , and gives the mechanism:{' '}
        <em>
          &ldquo;The tumbling action of the dryer and the high heat kill ticks and similar
          critters.&rdquo;
        </em>{' '}
        <strong>The Connecticut Agricultural Experiment Station</strong> puts it differently and
        longer:{' '}
        <em>
          &ldquo;Many ticks can survive a warm or hot water wash, but cannot withstand 1 hour in a
          hot dryer.&rdquo;
        </em>{' '}
        <strong>
          Twenty minutes and one hour are not the same instruction. Neither source is preferred here
          and neither figure is averaged with the other.
        </strong>{' '}
        <strong>CDC also publishes a figure for this step. It is not carried, because its pages
        could not be retrieved to check it.</strong>
      </p>
      <ul>
        <li>
          <strong>The Yale School of Public Health</strong> studied which precautions actually work
          in a domestic setting, tracking 716 people across 24 Connecticut towns, and found that{' '}
          <strong>
            <em>
              &ldquo;body checks within 36 hours of being outdoors and showers within two hours are
              particularly effective in terms of prevention&rdquo;
            </em>
          </strong>
          . It puts a figure on the shower:{' '}
          <em>
            &ldquo;People who bathed soon after spending time outside can reduce their risk by as
            much as 58 percent.&rdquo;
          </em>{' '}
          and on the check:{' '}
          <em>
            &ldquo;They found that people who routinely did body checks after being outdoors were up
            to 45 percent less likely to contract the disease.&rdquo;
          </em>{' '}
          <em>
            (both figures are the Yale Emerging Infections Program&rsquo;s own study result, not a
            figure Yale attributes to anyone else)
          </em>
        </li>
        <li>
          <strong>Cornell University Integrated Pest Management</strong> on the check itself:{' '}
          <em>
            &ldquo;However, a detailed, daily tick check, or an examination of your whole body, can
            help you detect a tick that somehow got past other efforts.&rdquo;
          </em>{' '}
          It adds that{' '}
          <em>&ldquo;A daily tick check is your best defense against long-term tick attachment.&rdquo;</em>
        </li>
        <li>
          <strong>
            CDC also lists the places on the body worth checking &mdash; under the arms, in and
            around the ears, inside the belly button, behind the knees, in and around the hair,
            between the legs and around the waist. That list is reported here in our own words
            rather than quoted, because CDC&rsquo;s pages could not be retrieved to check it.
          </strong>
        </li>
      </ul>

      <h2 id="the-yard">The Yard</h2>
      <p>
        <strong>
          If the bites came from long grass but nothing was ever attached, the animal may not be a
          tick.
        </strong>{' '}
        <Link href="/us/chiggers">Our chiggers page</Link> covers the other mite acquired the same
        way in the same vegetation, which leaves an intensely itchy welt and no embedded animal to
        remove. The yard work below reduces both.
      </p>
      <p>
        There is one measured figure here that is worth more than any general advice. The
        Connecticut Agricultural Experiment Station reports:{' '}
        <strong>
          &ldquo;On lawns, most deer ticks (82%) have been recovered within 9 feet of the lawn edge,
          especially areas adjacent to woods, stonewalls, or ornamental plantings.&rdquo;
        </strong>{' '}
        The same source adds that &ldquo;Fewer ticks are found in the sunny, manicured areas of the
        lawn,&rdquo; and that ticks &ldquo;may also be found in groundcover such as
        Pachysandra.&rdquo;
      </p>
      <p>
        That is why the sources concentrate the work on a border rather than on the whole lawn.{' '}
        <strong>
          CDC gives a specification for that border, a three-foot width of wood chips or gravel
          between lawn and woodland, and lists alongside it removing leaf litter, clearing tall
          grasses and brush at the edge of the lawn, mowing frequently, stacking wood neatly in a
          dry area to discourage rodents, keeping play equipment and patios away from yard edges and
          trees, and removing old furniture or trash that gives ticks somewhere to hide.
        </strong>{' '}
        <em>
          (CDC&rsquo;s pages could not be retrieved when this page was last checked, so its
          specification and its list are reported here in our own words rather than quoted)
        </em>
      </p>
      <p>
        The Connecticut Agricultural Experiment Station describes the same idea as building a border
        deliberately:{' '}
        <strong>
          &ldquo;A dry wood chip, tree bark, mulch, or gravel barrier between woods and lawn can
          reduce tick migration into the lawn.&rdquo;
        </strong>{' '}
        It adds that &ldquo;The removal of leaf litter at the lawn perimeter also can help reduce
        the number of I. scapularis nymphs on the lawn,&rdquo; and lists &ldquo;Move play sets away
        from the woodland edge&rdquo; among its landscape modifications. It also notes that
        &ldquo;Wildflower meadows, herbal gardens, etc. have very few ticks and may be an acceptable
        alternative to grass in some areas.&rdquo;
      </p>

      <h2 id="removal">If One Is Already Attached</h2>
      <p>
        <strong>
          The procedure below is the University of Maine Cooperative Extension Tick Lab&rsquo;s, in
          full and in its own words.
        </strong>{' '}
        It is reproduced complete rather than assembled, and nothing from any other publisher has
        been added to it or spliced into it. The two instructions that follow it come from a
        different source and are set out separately for that reason.
      </p>
      <p>
        <strong>University of Maine Cooperative Extension</strong> on the timing:{' '}
        <strong>
          <em>
            &ldquo;If you find a tick on your body, your children, or your pets it is important to
            remove it immediately.&rdquo;
          </em>
        </strong>
      </p>
      <ol>
        <li>
          <em>
            &ldquo;There are several tick removal devices on the market, but a plain set of
            fine-tipped tweezers will work.&rdquo;
          </em>
        </li>
        <li>
          <em>
            &ldquo;Use the tweezers to grasp the tick as close to the skin&rsquo;s surface as
            possible.&rdquo;
          </em>
        </li>
        <li>
          <em>&ldquo;Pull upward with steady, even pressure.&rdquo;</em>
        </li>
        <li>
          <em>
            &ldquo;Don&rsquo;t twist or jerk the tick; this can cause the mouth-parts to break off
            and remain in the skin. If this happens, remove the mouth-parts with tweezers.&rdquo;
          </em>
        </li>
        <li>
          <em>
            &ldquo;After removing the tick, thoroughly clean the bite area, your hands, and the
            tweezers with rubbing alcohol, an iodine scrub, or soap and water.&rdquo;
          </em>
        </li>
      </ol>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          Two further instructions, from a different publisher
        </p>
        <p className="m-0 mt-3 text-base text-red-900">
          <strong>
            These are not steps of the Maine procedure above and are not presented as part of it.
            They are separate safety instructions with their own source.
          </strong>{' '}
          <strong>Purdue University Extension</strong>, reporting guidance it attributes to{' '}
          <strong>the Indiana Department of Health</strong>, states:{' '}
          <strong>
            <em>&ldquo;Never crush a tick with your fingers.&rdquo;</em>
          </strong>{' '}
          and{' '}
          <em>
            &ldquo;Dispose of a live tick by putting it in alcohol, placing it in a sealed
            bag/container, wrapping it tightly in tape, or flushing it down the toilet.&rdquo;
          </em>
        </p>
        <p className="m-0 mt-3 text-base text-red-900">
          <strong>
            The University of Illinois College of Veterinary Medicine gives the reason for the
            first:
          </strong>{' '}
          <em>
            &ldquo;Never crush or break them apart with fingernails, because that releases the germs
            inside the tick.&rdquo;
          </em>
        </p>
      </div>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">What not to do</p>
        <p className="m-0 mt-3 text-base text-red-900">
          <strong>University of Maine Cooperative Extension:</strong>{' '}
          <strong>
            <em>
              &ldquo;Do not use petroleum jelly, a hot match, nail polish, or other folk remedies to
              remove ticks.&rdquo;
            </em>
          </strong>{' '}
          <strong>University of Wisconsin&ndash;Madison</strong> says the same thing in its own
          words:{' '}
          <em>
            &ldquo;Avoid home remedies like painting the tick with nail polish or petroleum
            jelly.&rdquo;
          </em>
        </p>
      </div>
      <p>
        On having a removed tick tested,{' '}
        <strong>Cornell University Integrated Pest Management</strong> sets out its position and
        says whose it is:{' '}
        <strong>
          <em>
            &ldquo;Though tick testing services are available from some organizations, we follow the
            CDC recommendation of not having the tick tested for disease diagnosis.&rdquo;
          </em>
        </strong>{' '}
        <strong>
          The reasons it prints are CDC&rsquo;s, and Cornell introduces them as such, with the words
          &ldquo;From the CDC website&rdquo;:
        </strong>{' '}
        <em>
          &ldquo;Laboratories that conduct tick testing are not required to have the high standards
          of quality control used by clinical diagnostic laboratories.&rdquo;
        </em>{' '}
        <em>
          &ldquo;Positive results showing that the tick contains a disease-causing organism do not
          necessarily mean that you have been infected.&rdquo;
        </em>{' '}
        <em>&ldquo;Negative results can lead to false assurance.&rdquo;</em>{' '}
        <em>
          &ldquo;If you do become ill, you should not wait for tick testing results before beginning
          appropriate treatment.&rdquo;
        </em>{' '}
        <strong>
          Those four sentences are quoted from Cornell, which is where this page can verify them.
          Cornell says they came from CDC, and that is stated here rather than hidden. This page
          does not cite CDC directly for them, because CDC&rsquo;s pages could not be retrieved.
        </strong>
      </p>
      <p>
        <strong>University of Maine Cooperative Extension</strong> gives the follow-up:{' '}
        <strong>
          <em>
            &ldquo;If you experience a rash, headaches, fever, or flu-like symptoms after a recent
            tick bite, see a physician right away.&rdquo;
          </em>
        </strong>
      </p>

      <h2 id="species">Which Tick, and What It Carries</h2>
      <p>
        CDC publishes range and transmitted pathogens species by species. It also publishes a
        caution that has to travel with the table, and this page states it first rather than last.
      </p>
      <p>
        <strong>
          CDC states that a tick species being found in a region of the United States does not
          necessarily mean it transmits a particular disease there, because transmission is
          influenced by several factors beyond the tick simply being present.
        </strong>{' '}
        <em>
          (CDC&rsquo;s pages could not be retrieved when this page was last checked, so everything
          attributed to CDC below is reported in our own words rather than quoted)
        </em>
      </p>
      <div className="not-prose my-8">
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Species</th>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Where found</th>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Transmits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">Blacklegged tick</td>
                <td className="px-4 py-3 text-gray-700">
                  Widely distributed across the eastern United States
                </td>
                <td className="px-4 py-3 text-gray-700">
                  Anaplasmosis, babesiosis, Lyme disease, hard tick relapsing fever, ehrlichiosis,
                  Powassan virus disease
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">Western blacklegged tick</td>
                <td className="px-4 py-3 text-gray-700">
                  Along the Pacific coast, particularly northern California
                </td>
                <td className="px-4 py-3 text-gray-700">
                  Anaplasmosis, Lyme disease, hard tick relapsing fever
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">Lone star tick</td>
                <td className="px-4 py-3 text-gray-700">
                  Widely distributed in the Northeast, South, and Midwest
                </td>
                <td className="px-4 py-3 text-gray-700">
                  Bourbon virus, human ehrlichiosis, Heartland virus, tularemia; STARI rash; alpha-gal
                  syndrome evidence growing
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">American dog tick</td>
                <td className="px-4 py-3 text-gray-700">
                  Widely distributed east of the Rocky Mountains
                </td>
                <td className="px-4 py-3 text-gray-700">
                  Tularemia and Rocky Mountain spotted fever
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">Gulf Coast tick</td>
                <td className="px-4 py-3 text-gray-700">
                  Primarily the southeastern United States, with focal populations elsewhere
                </td>
                <td className="px-4 py-3 text-gray-700">
                  Rickettsia parkeri rickettsiosis, a form of spotted fever
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">Brown dog tick</td>
                <td className="px-4 py-3 text-gray-700">Worldwide</td>
                <td className="px-4 py-3 text-gray-700">
                  Rocky Mountain spotted fever, in the southwestern U.S. and along the U.S.-Mexico
                  border
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-900">Rocky Mountain wood tick</td>
                <td className="px-4 py-3 text-gray-700">
                  Rocky Mountain states and southwestern Canada, 4,000 to 10,500 feet
                </td>
                <td className="px-4 py-3 text-gray-700">
                  Rocky Mountain spotted fever, Colorado tick fever, tularemia
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Which stage bites matters as much as which species.{' '}
        <strong>
          CDC states that for the blacklegged tick the stages most likely to bite people are nymphs
          and adult females, and that although the greatest risk falls in spring, summer and autumn,
          adults may search for a host whenever winter temperatures rise above freezing. It
          describes the lone star tick as a very aggressive tick that bites humans; says that for
          the American dog tick adult females are the ones most likely to bite; and says that dogs
          are the primary host of the brown dog tick at every life stage, though it may also bite
          people and other mammals.
        </strong>
      </p>
      <p>
        <strong>
          CDC also notes one bite reaction that is not an infection: it states that lone star tick
          saliva can be irritating, and that redness and discomfort at the bite site do not
          necessarily indicate an infection.
        </strong>
      </p>
      <p>
        There is an eighth species CDC lists whose status is openly unresolved.{' '}
        <strong>
          Of the Asian longhorned tick, which it records as reported in the United States for the
          first time in 2017, CDC states that the tick appears to be less attracted to humans than
          native species, and that it is not yet known if or how often these ticks can pass
          pathogens to people and make them ill. It notes a laboratory finding that the tick can
          carry the bacteria causing Rocky Mountain spotted fever, and states immediately afterwards
          that those bacteria have not yet been found in these ticks in nature and that research is
          ongoing.
        </strong>{' '}
        This page leaves that unresolved because the source does.
      </p>

      <h2 id="biology">How Ticks Find You</h2>
      <p>
        <strong>
          CDC describes the mechanism, and the first thing it rules out is the thing people assume:
          it states that ticks cannot fly or jump.
        </strong>
      </p>
      <p>
        <strong>
          CDC states that ticks find their hosts by detecting breath and body odors, or by sensing
          body heat, moisture and vibration, that some species can even recognize a shadow, and that
          ticks choose where to wait by identifying well-used paths. They then wait on the tips of
          grasses and shrubs in a position CDC calls questing.
        </strong>
      </p>
      <p>
        <strong>
          While questing, CDC states, a tick holds onto leaves and grass with its third and fourth
          pairs of legs and holds the first pair outstretched, ready to climb onto a host that
          brushes the spot where it is waiting.
        </strong>
      </p>
      <p>
        <strong>
          Once attached, CDC states that ticks secrete small amounts of saliva with anesthetic
          properties so that the animal or person cannot feel that the tick has attached, and that
          many species also secrete a cement-like substance holding them firmly in place during the
          meal.
        </strong>{' '}
        That is why a tick check is a check rather than something you notice.
      </p>
      <p>
        On the life cycle, University of Maine Cooperative Extension states that the blacklegged tick
        &ldquo;is a three-host tick, meaning it utilizes a different host at each of its three active
        life stages (larva, nymph, and adult),&rdquo; and that{' '}
        <strong>
          &ldquo;It undergoes a two-year life cycle, beginning during the spring when an adult female
          lays several thousand eggs in the leaf litter.&rdquo;
        </strong>{' '}
        It gives the seasonality as: &ldquo;Adult blacklegged ticks are found from early spring to
        late fall with two peaks, one in April or May and another in late October. Nymph numbers peak
        in June and early July.&rdquo;
      </p>
      <p>
        Size is the reason the nymph matters. The same source states that{' '}
        <strong>&ldquo;Deer tick nymphs are very small, about the size of a poppy seed&rdquo;</strong>{' '}
        and that &ldquo;Adult females are typically less than 1/8 inch in length.&rdquo; The
        Connecticut Agricultural Experiment Station connects that to risk:{' '}
        <strong>
          &ldquo;Most people acquire Lyme disease from the nymphal stage of the &lsquo;deer&rsquo;
          tick, which is active during late spring and summer.&rdquo;
        </strong>{' '}
        The stage that transmits most is the stage hardest to see.
      </p>
      <p>
        On where they are, University of Maine Cooperative Extension states that blacklegged ticks
        &ldquo;are commonly encountered in mixed forests and along the woodland edges of fields and
        suburban landscapes&rdquo; &mdash; which is the same edge the nine-foot figure above
        describes.
      </p>

      <h2 id="health">The Diseases</h2>
      <p>
        CDC lists the tickborne diseases in the United States as: alpha-gal syndrome, anaplasmosis,
        babesiosis, Bourbon virus, Colorado tick fever, ehrlichiosis, hard tick relapsing fever,
        Heartland virus, Lyme disease, Powassan virus, Rickettsia parkeri rickettsiosis, Rocky
        Mountain spotted fever, soft tick relapsing fever, STARI, tularemia and 364D rickettsiosis.
      </p>
      <p>
        <strong>
          CDC warns that many tickborne diseases have similar signs and symptoms, and names aches
          and pains among them &mdash; headache, fatigue and muscle aches, with joint pain also
          possible in Lyme disease. It states that Lyme disease, Southern tick-associated rash
          illness, Rocky Mountain spotted fever, ehrlichiosis and tularemia can each cause
          distinctive rashes.
        </strong>
      </p>
      <p>
        <strong>The University of Wisconsin&ndash;Madison</strong> gives the symptom list a reader
        can act on, with a window and an instruction attached:{' '}
        <strong>
          <em>
            &ldquo;Watch for symptoms for 30 days and call your healthcare provider if you get any
            of the following symptoms after a tick bite: Rash Fever Fatigue Headache Muscle pain
            Joint swelling and pain&rdquo;
          </em>
        </strong>
      </p>
      <p>
        <strong>
          On tick paralysis, CDC states that it is thought to be caused by a toxin in the saliva of
          an attached tick, and that patients typically regain movement within 24 hours of the tick
          being removed.
        </strong>
      </p>
      <p>
        <strong>Alpha-gal syndrome</strong> is the one that surprises people, because it is an
        allergy rather than an infection.{' '}
        <strong>
          CDC describes it as a serious and potentially life-threatening allergy and tickborne
          disease, and explains that alpha-gal is a molecule, galactose-&alpha;-1,3-galactose, made
          naturally in the bodies of most mammals but not in people and also found in the saliva of
          some ticks. It states that a tick bite can transfer alpha-gal from that saliva into a
          person&rsquo;s blood, and that symptoms follow when the person eats red meat or is exposed
          to other products made from mammals.
        </strong>
      </p>
      <p>
        <strong>
          On which tick and how common, CDC associates the syndrome in the United States primarily
          with the bite of a lone star tick and less commonly with a blacklegged or western
          blacklegged tick. On numbers it is careful: it records more than 110,000 suspected cases
          identified between 2010 and 2022, states that the condition is not nationally notifiable
          to it, and says the true number is unknown though as many as 450,000 people may be
          affected.
        </strong>
      </p>
      <p>
        <strong>
          On who develops it, the reassurance comes from a source this page can open.
        </strong>{' '}
        <strong>Cara Martone</strong>, a doctoral student in the Department of Infectious Disease
        and Global Health at the Cummings School of Veterinary Medicine at{' '}
        <strong>Tufts University</strong>, working with Professor <strong>Sam Telford III</strong>,
        answers it directly in a Tufts University question-and-answer piece:{' '}
        <strong>
          <em>&ldquo;Will everyone bitten by a lone star tick end up with AGS? No.&rdquo;</em>
        </strong>{' '}
        <em>
          &ldquo;Only some people who are bitten by lone star ticks develop antibodies against
          alpha-gal.&rdquo;
        </em>{' '}
        <em>
          &ldquo;And, a proportion of those people have detectable antibodies specific for alpha-gal
          without any symptoms, which is a very interesting piece of the puzzle.&rdquo;
        </em>{' '}
        <em>
          (those are the researchers&rsquo; words in a Tufts interview, not an institutional fact
          sheet, and they are attributed to the speakers for that reason)
        </em>
      </p>

      <h2 id="yard-treatment">Treating the Yard</h2>

      <div className="not-prose my-8 rounded-lg border-l-4 border-slate-500 bg-slate-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-slate-900">Two things to know before buying anything for the yard</p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>
            CDC states that using pesticides can reduce the number of ticks in a treated area of a
            yard, and that a reader should not rely on spraying to reduce their risk of infection.
          </strong>
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          The Connecticut Agricultural Experiment Station:{' '}
          <strong>
            &ldquo;Many pesticide products are restricted to licensed commercial pesticide
            applicators.&rdquo;
          </strong>{' '}
          It lists deltamethrin and lambda-cyhalothrin as restricted use products &ldquo;for use by
          licensed applicators only&rdquo;, and, of carbaryl, &ldquo;Some products are for
          commercial use only.&rdquo;
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>
            CDC also states that a reader should always follow label instructions and check with
            local health or agricultural officials before spraying, naming application timing,
            choice of product and the rules on residential application as the things to ask about.
          </strong>
        </p>
      </div>

      <p>
        With that established: the Connecticut Agricultural Experiment Station states that{' '}
        <strong>
          &ldquo;Acaricides (pesticides or insecticides that kill ticks) may be applied to lawns and
          woodland edges to kill ticks around the home&rdquo;
        </strong>
        , that &ldquo;Both liquid and granular formulations have been reported effective against I.
        scapularis,&rdquo; and that &ldquo;A sufficient spray volume and pressure for thorough
        coverage and penetration of the vegetation and leaf litter is needed. Wooded areas adjacent
        to the home should be treated for maximum effectiveness.&rdquo;
      </p>
      <p>
        On timing it is specific:{' '}
        <strong>
          &ldquo;The optimum time for an application to control the nymphal deer ticks would be
          mid-May to early June. A single application of most acaricides is sufficient for the summer
          tick season.&rdquo;
        </strong>
      </p>
      <p>
        Of the ingredients it lists as labeled for residential tick control, the ones it marks as
        available to homeowners are permethrin &mdash; &ldquo;Some are concentrates and some are
        ready to spray products, mainly for homeowners&rdquo; &mdash; cyfluthrin, of which
        &ldquo;Some homeowner formulations available&rdquo;, and bifenthrin, which it lists as
        &ldquo;A pyrethroid insecticide&rdquo; without a restriction note.
      </p>
      <p>
        One more caution from the same source, which cuts against a whole shelf of products marketed
        as gentler. Of the FIFRA 25(b) minimum-risk botanicals &mdash; &ldquo;cedar oil, geraniol,
        rosemary oil, peppermint oil, garlic oil, and cinnamon oil&rdquo; &mdash; it states they{' '}
        <strong>
          &ldquo;do not require registration with the EPA and therefore do not have an EPA review of
          efficacy data or label claims,&rdquo;
        </strong>{' '}
        and that &ldquo;Tests of products with these ingredients are limited&rdquo;. That is the
        counterweight to CDC&rsquo;s advice to look for an EPA registration number: a product can
        legitimately have none, and that also means nobody reviewed its claims.
      </p>

      <h2 id="products">Examples, by Sourced Ingredient</h2>
      <p>
        <strong>
          These are examples of the ingredient classes the sources name, grouped by what each is
          for. They are in no order of preference and none is called better than another, because no
          source consulted for this page compares any two named products.
        </strong>
      </p>
      <p>
        The Connecticut Agricultural Experiment Station states the position plainly on the same fact
        sheet that lists product names:{' '}
        <strong>
          &ldquo;Mention of a pesticide product does not constitute an endorsement by the CT
          Agricultural Experiment Station&rdquo;
        </strong>
        , alongside &ldquo;Information is intended as a guide and products are subject to
        change&rdquo; and &ldquo;Always read and follow U.S. Environmental Protection Agency (EPA)
        approved labels on a product container.&rdquo; This page adopts the same posture. What is
        selected below is selected against a <em>sourced ingredient or specification</em> &mdash;
        0.5% permethrin for clothing, an EPA-registered repellent active, fine-tipped tweezers
        &mdash; not against a brand.
      </p>

      <h3>Clothing treatment, at the concentration both sources name</h3>

      <UsToolCard
        name="Sawyer Premium Permethrin Insect Repellent for Clothing, Gear &amp; Tents"
        whatItDoes={[
          'A permethrin treatment applied to fabric, not to skin. CDC states to treat clothing and gear with products containing 0.5% permethrin.',
          'The Connecticut Agricultural Experiment Station states that products for consumer application to clothing contain 0.5% permethrin, and that permethrin works primarily by killing ticks on contact with the treated clothes.',
          'CDC states that permethrin can be used to treat boots, clothing and camping gear and remain protective through several washings.',
          'The National Pesticide Information Center states that cats are more sensitive to permethrin than dogs or people because it takes their bodies a long time to break it down.',
        ]}
        asin="B001ANQVYU"
      />

      <h3>Skin repellents carrying an EPA-registered active</h3>
      <p>
        Picaridin is one of the six actives CDC names. Both examples below state 20% picaridin on
        their own listings. The Connecticut Agricultural Experiment Station&rsquo;s 30% ceiling
        figure quoted earlier is about DEET and is not applied to these.
      </p>

      <UsToolCard
        name="Sawyer Products SP543 Premium Insect Repellent with 20% Picaridin, Pump Spray"
        whatItDoes={[
          'Picaridin is one of the actives CDC names for EPA-registered insect repellents, alongside DEET, IR3535, Oil of Lemon Eucalyptus, para-menthane-diol and 2-undecanone.',
          'CDC states to look for an EPA registration number, written EPA Reg. No., on the insect repellent product label, and that this number means the company provided EPA with technical information on the effectiveness of the product.',
          'The Connecticut Agricultural Experiment Station advises that when applying a repellent against ticks, particular attention should be given to the shoe tops, socks, and lower portion of pants.',
        ]}
        asin="B002CMQJYU"
      />

      <UsToolCard
        name="OFF! Deep Woods Max Insect Repellent, Mosquito &amp; Tick Aerosol with 20% Picaridin"
        whatItDoes={[
          'A second example of the same CDC-named active, in an aerosol rather than a pump spray.',
          'CDC states always to follow product instructions, and not to use products containing Oil of Lemon Eucalyptus or para-menthane-diol on children under 3 years old.',
          'CDC states that if you are using sunscreen, apply sunscreen first and insect repellent second.',
        ]}
        asin="B0G5VN3GB3"
      />

      <h3>Fine-tipped tweezers, which is what the procedure specifies</h3>
      <p>
        <strong>University of Maine Cooperative Extension</strong> is direct about this category:{' '}
        <strong>
          <em>
            &ldquo;There are several tick removal devices on the market, but a plain set of
            fine-tipped tweezers will work.&rdquo;
          </em>
        </strong>{' '}
        That is the tool its procedure uses, and both examples below are ordinary fine-point
        tweezers.
      </p>

      <UsToolCard
        name="Precision Splinter Pointed Tweezers, Stainless Steel, Extra Fine Points"
        whatItDoes={[
          'CDC specifies clean fine-tipped tweezers, used to grasp the tick as close to the skin surface as possible.',
          'CDC states that there are several tick removal devices on the market, but a plain set of tweezers works very well. This is not a specialist device and is not offered as one.',
          'CDC states to pull the tick away from the skin with steady, even pressure and not to twist or jerk it.',
        ]}
        asin="B0F9VQ7J1Q"
      />

      <UsToolCard
        name="Majestic Bombay Fine Point Tweezers, Stainless Steel"
        whatItDoes={[
          'A second example of the same tool type CDC describes.',
          'CDC states that if fine-tipped tweezers are not available, regular tweezers or your fingers can be used to grasp the tick, grasping close to the skin surface to avoid squeezing the tick body.',
        ]}
        asin="B00BAYWOFY"
      />

      <h3>Tick tubes, with what the evidence actually says</h3>
      <div className="not-prose my-8 rounded-lg border-l-4 border-slate-500 bg-slate-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-slate-900">
          Read this before the card below, not after it
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          Tick tubes work by getting mice to carry permethrin-treated cotton into their nests. On the
          published trials, the Connecticut Agricultural Experiment Station states:{' '}
          <strong>&ldquo;The results from studies with the tubes have been mixed.&rdquo;</strong>
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          Specifically:{' '}
          <strong>
            &ldquo;No reduction in the number of infected, host-seeking nymphal blacklegged ticks in
            woodland and residential areas of about 4 acres or less was found in several CT and NY
            trials.&rdquo;
          </strong>{' '}
          A reduction &ldquo;was reported in a Massachusetts study with the treatment of an 18-acre
          site and at some sites in another NY study on Fire Island.&rdquo;
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          Most suburban properties are well under four acres. The same source adds two further
          limits: &ldquo;Product effectiveness is dependent upon the collection of the cotton by the
          mice as nesting material from distributed tubes,&rdquo; and &ldquo;Chipmunks, another
          reservoir host for Borrelia, do not collect the cotton.&rdquo;
        </p>
      </div>

      <UsToolCard
        name="Thermacell Tick Control Tubes, 12 Pack"
        whatItDoes={[
          'A tick tube product. The Connecticut Agricultural Experiment Station describes the method as permethrin-treated cotton that targets larvae and nymphs of Ixodes scapularis on white-footed mice.',
          'The same source states that the results from studies with the tubes have been mixed, and that no reduction was found in woodland and residential areas of about 4 acres or less in several Connecticut and New York trials.',
          'The mixed-evidence finding above is about the method and about the Damminix product the source names. No source consulted for this page evaluated this particular product.',
          'The National Pesticide Information Center states that cats are more sensitive to permethrin than dogs or people.',
        ]}
        asin="B07D2GGYPF"
      />

      <h3>Yard granules</h3>
      <p>
        Only one of the granule products checked names ticks in its own product title, and that is
        the one listed here. The block at the top of the previous section applies to it in full.
      </p>

      <UsToolCard
        name="Ortho BugClear Lawn Insect Killer, 20 lb"
        whatItDoes={[
          'A granular lawn product whose own listing title names ticks among the insects it addresses.',
          'The Connecticut Agricultural Experiment Station states that both liquid and granular formulations have been reported effective against Ixodes scapularis, and that wooded areas adjacent to the home should be treated for maximum effectiveness.',
          'The same source gives the optimum time for an application against nymphal deer ticks as mid-May to early June, and states that a single application of most acaricides is sufficient for the summer tick season.',
          'CDC states that use of pesticides can reduce the number of ticks in treated areas of your yard, however you should not rely on spraying to reduce your risk of infection.',
        ]}
        asin="B082LJK8K7"
      />

      <p>
        Seven products appear above and there is no eighth. Two absences are deliberate. No DEET
        product is listed, even though DEET is the first active CDC names, because no DEET listing
        was confirmed available when the products on this page were checked on 23 August 2026 &mdash;
        rather than substitute something else into that slot, the slot is left empty. And no pet
        product is listed: the sources consulted describe veterinary tick products for animals, and
        this page has no basis for recommending a consumer one.
      </p>

      <h2 id="where">Where This Applies</h2>
      <p>
        Tick risk is not uniform across the country and this page does not imply that it is.{' '}
        <strong>
          CDC places the blacklegged tick widely across the eastern United States and the western
          blacklegged tick along the Pacific coast, particularly northern California. It places most
          reported alpha-gal cases in southern, eastern and central states, which are the areas where
          most lone star ticks are found, and brown dog tick Rocky Mountain spotted fever in the
          southwestern United States and along the border with Mexico. The Rocky Mountain wood tick
          it places at elevations between 4,000 and 10,500 feet.
        </strong>
      </p>
      <p>
        One scope note belongs with the yard material above. The Connecticut Agricultural Experiment
        Station fact sheet is written for Connecticut &mdash; it opens &ldquo;In Connecticut, the two
        most common ticks are the blacklegged tick&hellip; and the American dog tick&rdquo; &mdash;
        so its landscape figures are Northeast data and are attributed to it rather than presented as
        national.
      </p>
      <p>
        <strong>
          A region-specific treatment of the Northeast, of the lone star and alpha-gal belt, or of the
          Pacific coast would each need its own page and its own sources. None has been written yet,
          and this page does not pretend to be one.
        </strong>
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the eight publications below: five from
        the Centers for Disease Control and Prevention, one from the Connecticut Agricultural
        Experiment Station, one from University of Maine Cooperative Extension, and one from the
        National Pesticide Information Center, a cooperative of Oregon State University and the US
        Environmental Protection Agency. Where a source qualified its own statement the qualification
        is kept, and where a source left a question open it is left open here. The product names
        above were read from each product&rsquo;s own listing on 23 August 2026 and are recorded
        rather than assessed; the listings read were B001ANQVYU, B002CMQJYU, B0G5VN3GB3, B0F9VQ7J1Q,
        B00BAYWOFY, B07D2GGYPF and B082LJK8K7. Each is reachable from its own card above, where the
        disclosure sits directly beside the link, and they are named here rather than linked again so
        that every link to a product on this page carries its disclosure. Framing and ordering are
        our own judgment and are not a finding of any source.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
