import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { TICKS_NAV, TICKS_HOME } from '../components/ticksNav';

const URL = 'https://pestproindex.com/us/ticks';
const TITLE = 'Ticks: What Prevents Bites, What to Do About One Already Attached';
const DESCRIPTION =
  'The clothing treatment and repellent ingredients CDC names, the nine feet of lawn edge where most deer ticks are found, and the removal procedure CDC publishes word for word.';

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
      'CDC publishes a procedure. Remove the tick as soon as possible and do not wait to go to a healthcare provider to remove it, because delaying removal could increase your risk of getting a disease spread through tick bites. Grasp the tick as close to the skin surface as possible using clean fine-tipped tweezers; if fine-tipped tweezers are not available, use regular tweezers or your fingers, grasping close to the skin to avoid squeezing the tick body. Pull the tick away from the skin with steady, even pressure, and do not twist or jerk it, because that can cause the mouthparts to break off and remain in the skin. If that happens, CDC states your body will naturally push the mouthparts out over time as your skin heals, and that if you cannot remove them easily with tweezers you should leave them alone. Afterwards clean the bite area and your hands with soap and water, rubbing alcohol or hand sanitizer.',
  },
  {
    question: 'Should I use petroleum jelly, heat or nail polish to make a tick let go?',
    answer:
      'No. CDC states: do not use petroleum jelly, heat, nail polish, or other substances to try and make the tick detach from the skin. The stated reason is that this may agitate the tick and force infected fluid from the tick into the skin.',
  },
  {
    question: 'Do I need a special tick removal tool?',
    answer:
      'CDC states that there are several tick removal devices on the market, but a plain set of tweezers works very well. What CDC specifies is clean fine-tipped tweezers. That is a description of a tool, not a recommendation of a brand, and no source consulted for this page compares one removal tool against another.',
  },
  {
    question: 'Should I get the tick tested?',
    answer:
      'CDC advises against it. It states that although some commercial groups offer testing, in general this is not recommended, because laboratories that conduct tick testing are not required to have the high standards of quality control used by clinical diagnostic laboratories, and results of tick testing should not be used for treatment decisions. CDC adds that a positive result does not necessarily mean you have been infected, that negative results can lead to false assurance, and that if you do become ill you should not wait for tick testing results before beginning appropriate treatment.',
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
    label: 'Where Ticks Live — the source of the species, range and disease table',
    publisher: 'Centers for Disease Control and Prevention',
    date: 'Page dated 30 July 2025. Accessed 23 August 2026',
    href: 'https://www.cdc.gov/ticks/about/where-ticks-live.html',
  },
  {
    label: 'About Ticks — questing, feeding and the tickborne disease list',
    publisher: 'Centers for Disease Control and Prevention',
    date: 'Accessed 23 August 2026',
    href: 'https://www.cdc.gov/ticks/about/index.html',
  },
  {
    label: 'Preventing Tick Bites',
    publisher: 'Centers for Disease Control and Prevention',
    date: 'Accessed 23 August 2026',
    href: 'https://www.cdc.gov/ticks/prevention/index.html',
  },
  {
    label: 'What to Do After a Tick Bite — the source of the removal procedure',
    publisher: 'Centers for Disease Control and Prevention',
    date: 'Accessed 23 August 2026',
    href: 'https://www.cdc.gov/ticks/after-a-tick-bite/index.html',
  },
  {
    label: 'About Alpha-gal Syndrome',
    publisher: 'Centers for Disease Control and Prevention',
    date: 'Accessed 23 August 2026',
    href: 'https://www.cdc.gov/alpha-gal-syndrome/about/index.html',
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
        CDC notes where the encounters actually happen:{' '}
        <strong>&ldquo;Many people get ticks in their own yard or neighborhood.&rdquo;</strong>
      </p>

      <h2 id="prevention">Preventing Bites</h2>
      <p>
        CDC states that <strong>&ldquo;Tick exposure can occur year-round, but ticks are most
        active during warmer months (April-September).&rdquo;</strong> Its advice divides into what
        goes on clothing, what goes on skin, and what to do when you come back indoors.
      </p>

      <h3>On clothing: one concentration, named twice</h3>
      <p>
        CDC states:{' '}
        <strong>
          &ldquo;Treat clothing and gear with products containing 0.5% permethrin. Permethrin can be
          used to treat boots, clothing and camping gear and remain protective through several
          washings. Alternatively, you can buy permethrin-treated clothing and gear.&rdquo;
        </strong>
      </p>
      <p>
        The Connecticut Agricultural Experiment Station gives the identical figure independently:{' '}
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
        CDC does not name products. It names active ingredients and a registration mark:
      </p>
      <p>
        <strong>
          &ldquo;Use Environmental Protection Agency (EPA)-registered insect repellents containing
          DEET, picaridin, IR3535, Oil of Lemon Eucalyptus (OLE), para-menthane-diol (PMD), or
          2-undecanone. Look for an EPA registration number (EPA Reg. No.) on the insect repellent
          product label.&rdquo;
        </strong>
      </p>
      <p>
        CDC explains what that number signifies: &ldquo;This registration number means the company
        provided EPA with technical information on the effectiveness of the product.&rdquo; It adds
        two conditions: &ldquo;Always follow product instructions. Do not use products containing
        OLE or PMD on children under 3 years old,&rdquo; and &ldquo;If you are using sunscreen,
        apply sunscreen first and insect repellent second.&rdquo;
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
      <ul>
        <li>
          CDC: &ldquo;Tumble dry clothes in a dryer on high heat for 10 minutes to kill ticks on dry
          clothing after you come indoors. If the clothes are damp, additional time may be
          needed.&rdquo; And the part people get wrong:{' '}
          <strong>&ldquo;Cold and medium temperature water will not kill ticks.&rdquo;</strong>
        </li>
        <li>
          CDC: &ldquo;Showering within two hours of coming indoors has been shown to reduce your
          risk of getting Lyme disease and may be effective in reducing the risk of other tickborne
          diseases.&rdquo;
        </li>
        <li>
          CDC: &ldquo;Conduct a full body check upon return from potentially tick-infested areas,
          including your own backyard.&rdquo; The places it names are: &ldquo;Under the arms · In
          and around the ears · Inside belly button · Back of the knees · In and around the hair ·
          Between the legs · Around the waist&rdquo;.
        </li>
      </ul>

      <h2 id="the-yard">The Yard</h2>
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
        That is why the sources concentrate the work on a border rather than on the whole lawn. CDC
        gives the specification:{' '}
        <strong>
          &ldquo;Place a 3-ft wide barrier of wood chips or gravel between lawns and wooded areas to
          restrict tick migration into recreational areas.&rdquo;
        </strong>{' '}
        Its other listed steps are: &ldquo;Remove leaf litter,&rdquo; &ldquo;Clear tall grasses and
        brush around homes and at the edge of lawns,&rdquo; &ldquo;Mow the lawn frequently,&rdquo;
        &ldquo;Stack wood neatly and in a dry area (discourages rodents),&rdquo; &ldquo;Keep
        playground equipment, decks, and patios away from yard edges and trees,&rdquo; and
        &ldquo;Remove old furniture, mattresses, or trash from the yard that may give ticks a place
        to hide.&rdquo;
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
        CDC publishes a procedure, and this page quotes it rather than paraphrasing it.
      </p>
      <p>
        <strong>
          &ldquo;If you find a tick attached to your skin, remove the tick as soon as possible. Do
          not wait to go to a healthcare provider to remove the tick.&rdquo;
        </strong>{' '}
        The stated reason: &ldquo;Delaying tick removal to get help from a healthcare provider could
        increase your risk of getting a disease spread through tick bites&rdquo;.
      </p>
      <ol>
        <li>
          <strong>
            &ldquo;Grasp the tick as close to the skin&rsquo;s surface as possible using clean
            fine-tipped tweezers.&rdquo;
          </strong>{' '}
          CDC adds: &ldquo;If fine-tipped tweezers are not available, use regular tweezers or your
          fingers to grasp the tick. Grasp the tick close to the skin&rsquo;s surface to avoid
          squeezing the tick&rsquo;s body.&rdquo;
        </li>
        <li>
          <strong>
            &ldquo;Pull tick away from the skin with steady, even pressure. Don&rsquo;t twist or
            jerk the tick.&rdquo;
          </strong>{' '}
          &ldquo;This can cause the tick mouthparts to break off and remain in the skin. If this
          happens, your body will naturally push the mouthparts out over time as your skin heals.
          You can also remove the mouthparts with tweezers. If you cannot remove the mouthparts
          easily with tweezers, leave them alone.&rdquo;
        </li>
        <li>
          &ldquo;Dispose of the live tick by taking one of these steps: place it in a sealed
          container; wrap it tightly in tape; flush it down the toilet; or put it in alcohol.{' '}
          <strong>Do not crush the tick with your fingers.</strong>&rdquo;
        </li>
        <li>
          &ldquo;After removing the tick, thoroughly clean the bite area and your hands with soap
          and water, rubbing alcohol, or hand sanitizer.&rdquo;
        </li>
        <li>
          &ldquo;If you find a tick attached to you, there may be other ticks on your body. Do a
          careful tick check to look for other ticks and promptly remove them.&rdquo;
        </li>
      </ol>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">What CDC says not to do</p>
        <p className="m-0 mt-3 text-base text-red-900">
          <strong>
            &ldquo;Do not use petroleum jelly, heat, nail polish, or other substances to try and
            make the tick detach from the skin. This may agitate the tick and force infected fluid
            from the tick into the skin.&rdquo;
          </strong>
        </p>
      </div>
      <p>
        On having a removed tick tested, CDC advises against it:{' '}
        <strong>
          &ldquo;Although some commercial groups offer testing, in general this is not
          recommended&rdquo;
        </strong>
        , because &ldquo;Laboratories that conduct tick testing are not required to have the high
        standards of quality control used by clinical diagnostic laboratories,&rdquo; because
        &ldquo;Positive results showing that the tick contains a disease-causing organism do not
        necessarily mean that you have been infected,&rdquo; and because &ldquo;Negative results can
        lead to false assurance.&rdquo; CDC adds: &ldquo;If you do become ill, you should not wait
        for tick testing results before beginning appropriate treatment.&rdquo;
      </p>
      <p>
        And the follow-up: &ldquo;If you develop a rash or fever within several weeks of removing a
        tick, see your doctor.&rdquo;
      </p>

      <h2 id="species">Which Tick, and What It Carries</h2>
      <p>
        CDC publishes range and transmitted pathogens species by species. It also publishes a
        caution that has to travel with the table, and this page prints it first rather than last:
      </p>
      <p>
        <strong>
          &ldquo;Even though a specific tick species is found in a region of the United States, it
          does not necessarily mean it transmits a specific disease in that area. Disease
          transmission is influenced by multiple factors beyond mere tick presence.&rdquo;
        </strong>
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
        Which stage bites matters as much as which species. CDC states that for the blacklegged tick
        the &ldquo;Stages most likely to bite humans are nymphs and adult females,&rdquo; and that
        although &ldquo;The greatest risk of being bitten exists in the spring, summer, and fall
        &hellip; adults may be out searching for a host any time winter temperatures are above
        freezing.&rdquo; Of the lone star tick it says simply:{' '}
        <strong>&ldquo;A very aggressive tick that bites humans.&rdquo;</strong> Of the American dog
        tick: &ldquo;Adult females are most likely to bite humans.&rdquo; Of the brown dog tick:
        &ldquo;Dogs are the primary host for the brown dog tick in each of its life stages, but the
        tick may also bite humans or other mammals.&rdquo;
      </p>
      <p>
        CDC also notes one bite reaction that is not an infection: &ldquo;Lone star tick saliva can
        be irritating; redness and discomfort at a bite site does not necessarily indicate an
        infection.&rdquo;
      </p>
      <p>
        There is an eighth species CDC lists whose status is openly unresolved. Of the Asian
        longhorned tick, first &ldquo;reported for the first time in the United States in
        2017,&rdquo; CDC states it &ldquo;appears to be less attracted to humans&rdquo; than native
        ticks and that{' '}
        <strong>
          &ldquo;we do not yet know if and how often these ticks are able to pass these pathogens
          along to people and make them ill.&rdquo;
        </strong>{' '}
        It notes a laboratory finding that the tick can carry the Rocky Mountain spotted fever
        bacteria, immediately followed by: &ldquo;The bacteria that cause Rocky Mountain spotted
        fever have not yet been found in these ticks in nature. Research is ongoing.&rdquo; This
        page leaves that unresolved because the source does.
      </p>

      <h2 id="biology">How Ticks Find You</h2>
      <p>
        CDC describes the mechanism, and the first thing it rules out is the thing people assume:{' '}
        <strong>&ldquo;Ticks can&rsquo;t fly or jump.&rdquo;</strong>
      </p>
      <p>
        &ldquo;Ticks find their hosts by detecting animals&acute; breath and body odors, or by
        sensing body heat, moisture, and vibrations. Some species can even recognize a shadow. In
        addition, ticks pick a place to wait by identifying well-used paths. Then they wait for a
        host, resting on the tips of grasses and shrubs&hellip; many tick species wait in a position
        known as &lsquo;questing&rsquo;.&rdquo;
      </p>
      <p>
        &ldquo;While questing, ticks hold onto leaves and grass by their third and fourth pair of
        legs. They hold the first pair of legs outstretched, waiting to climb on to the host. When a
        host brushes the spot where a tick is waiting, it quickly climbs aboard.&rdquo;
      </p>
      <p>
        Once attached, CDC states that ticks &ldquo;secrete small amounts of saliva with anesthetic
        properties so that the animal or person can&rsquo;t feel that the tick has attached
        itself,&rdquo; and that &ldquo;Many species also secrete a cement-like substance that keeps
        them firmly attached during the meal.&rdquo; That is why a tick check is a check rather than
        something you notice.
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
        It warns that they are hard to tell apart:{' '}
        <strong>&ldquo;Many tickborne diseases can have similar signs and symptoms.&rdquo;</strong>{' '}
        On what to watch for, CDC states:{' '}
        <strong>&ldquo;Fever/chills. All tickborne diseases can cause fever.&rdquo;</strong> It adds
        &ldquo;Aches and pains. Tickborne diseases can cause headache, fatigue, and muscle aches.
        People with Lyme disease may also have joint pain.&rdquo; It adds that &ldquo;Lyme disease, Southern tick-associated rash
        illness (STARI), Rocky Mountain spotted fever (RMSF), ehrlichiosis, and tularemia can cause
        distinctive rashes.&rdquo;
      </p>
      <p>
        CDC states that a healthcare provider should evaluate &ldquo;Your symptoms, the geographic
        region where you were bitten, and lab tests&rdquo; before deciding on treatment &mdash;
        which is why the ranges in the table above are worth knowing about your own area.
      </p>
      <p>
        On tick paralysis, CDC states it &ldquo;is thought to be caused by a toxin in the saliva of
        an attached tick&rdquo; and that{' '}
        <strong>
          &ldquo;Patients typically regain movement within 24 hours of removing the tick.&rdquo;
        </strong>
      </p>
      <p>
        <strong>Alpha-gal syndrome</strong> is the one that surprises people, because it is an
        allergy rather than an infection. CDC describes it as &ldquo;a serious, potentially
        life-threatening allergy and tickborne disease,&rdquo; explains that alpha-gal is &ldquo;a
        molecule (galactose-&alpha;-1,3-galactose) that is naturally produced in the bodies of most
        mammals but not in people. It is also found in the saliva (spit) of some ticks.&rdquo; It
        states that &ldquo;When a tick bites, it can transfer alpha-gal from its saliva into a
        person&rsquo;s blood&rdquo;, and that &ldquo;Symptoms occur after people eat red meat or are
        exposed to other products made from mammals.&rdquo;
      </p>
      <p>
        On which tick and how common, CDC states:{' '}
        <strong>
          &ldquo;In the United States, AGS is primarily associated with the bite of a lone star tick,
          and less commonly by the bite of a blacklegged tick or a western blacklegged tick.&rdquo;
        </strong>{' '}
        On numbers it is careful: &ldquo;More than 110,000 suspected cases of AGS were identified
        between 2010 and 2022. However, cases of AGS are not nationally notifiable to CDC. The actual
        number of AGS cases in the United States is not known, but as many as 450,000 people may be
        affected.&rdquo; And on who develops it: &ldquo;not every person bitten by a lone star,
        blacklegged, or western blacklegged tick will develop AGS. The reason why certain people
        develop AGS and others do not is not known.&rdquo;
      </p>

      <h2 id="yard-treatment">Treating the Yard</h2>

      <div className="not-prose my-8 rounded-lg border-l-4 border-slate-500 bg-slate-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-slate-900">Two things to know before buying anything for the yard</p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>
            CDC: &ldquo;Use of pesticides can reduce the number of ticks in treated areas of your
            yard. However, you should not rely on spraying to reduce your risk of infection.&rdquo;
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
          CDC also states: &ldquo;When using pesticides, always follow label instructions. Before
          spraying, check with local health or agricultural officials&rdquo; &mdash; the source lists
          application timing, choice of product, and the rules on residential application as the
          things to ask about.
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
        Of the ingredients it lists as labelled for residential tick control, the ones it marks as
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

      <h3>Fine-tipped tweezers, which is what CDC actually specifies</h3>
      <p>
        CDC is direct about this category:{' '}
        <strong>
          &ldquo;There are several tick removal devices on the market, but a plain set of tweezers
          works very well.&rdquo;
        </strong>{' '}
        What it specifies is &ldquo;clean fine-tipped tweezers&rdquo;. Both examples below are
        ordinary fine-point tweezers, which is the tool described.
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
        Tick risk is not uniform across the country and this page does not imply that it is. CDC
        places the blacklegged tick &ldquo;Widely distributed across the eastern United States&rdquo;
        and the western blacklegged tick &ldquo;Along the Pacific coast of the United States,
        particularly northern California&rdquo;. It places most reported alpha-gal cases in
        &ldquo;South, East, and Central states&rdquo;, being &ldquo;the areas where most lone star
        ticks are found&rdquo;, and brown dog tick Rocky Mountain spotted fever &ldquo;in the
        southwestern U.S. and along the U.S.-Mexico border&rdquo;. The Rocky Mountain wood tick it
        places at &ldquo;elevations of 4,000 to 10,500 feet&rdquo;.
      </p>
      <p>
        Two scope notes belong with the yard material above. The Connecticut Agricultural Experiment
        Station fact sheet is written for Connecticut &mdash; it opens &ldquo;In Connecticut, the two
        most common ticks are the blacklegged tick&hellip; and the American dog tick&rdquo; &mdash;
        so its landscape figures are Northeast data and are attributed to it rather than presented as
        national. And CDC notes that naturally occurring populations of the ticks it describes
        &ldquo;do not occur in Alaska; however, the brown dog tick occurs in Hawaii.&rdquo;
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
        our own judgement and are not a finding of any source.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
