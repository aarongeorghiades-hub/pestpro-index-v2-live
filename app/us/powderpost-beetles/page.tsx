import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { POWDERPOST_NAV, POWDERPOST_HOME } from '../components/powderpostNav';

const URL = 'https://pestproindex.com/us/powderpost-beetles';
const TITLE = 'Powderpost Beetles: Is It Active, and Is It Termites?';
const DESCRIPTION =
  'Two questions decide everything: is the infestation active, and is it termites? The fresh-powder test, the stain test, and the frass that separates them.';

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
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Powderpost Beetles', item: URL }],
};

// ---------------------------------------------------------------------------
// THREE CARDS, AND TWO CLASSES DELIBERATELY EMPTY. The reasons differ and the
// page says which is which.
//
//   BORATES        TWO cards. University of Kentucky names both formulations by
//                  name for this pest. THE SAME SOURCE'S LIMITATION SITS BESIDE
//                  THEM: borates will not penetrate a finished surface, and on
//                  dry indoor flooring the same source says penetration would be
//                  minimal. A card without that sentence would be a half-truth.
//
//   MOISTURE METER ONE card. Kentucky names moisture meters as tools for
//                  measuring wood moisture and predicting reinfestation, and the
//                  sources publish numeric thresholds between 8% and 30%. The
//                  criterion is therefore a SOURCED SPECIFICATION and not a
//                  vocabulary (Law 139): the instrument must report wood moisture
//                  content as a PERCENTAGE across that band. Two candidates were
//                  read and rejected on exactly that test -- see section
//                  'not-named'.
//
//   SEALERS        NO card. Kentucky states that sealed surfaces are generally
//                  safe from future attack, but publishes NO specification that
//                  separates one finish from another for this purpose. No
//                  criterion, no card (Law 139).
//
//   FUMIGANTS      NO card, and it is not a consumer activity. Structural
//                  fumigation is described here only as to WHEN it is indicated,
//                  with the reader sent to a professional. No application,
//                  dosage or handling guidance appears on this page.
// ---------------------------------------------------------------------------

const sources: Source[] = [
  {
    label:
      'ENTFACT-616: Powderpost Beetles, by Michael F. Potter, Extension Entomologist — the source of the active-versus-inactive test, the lyctid hardwood restriction, the anobiid structural-damage statement, the 13-30% and 14% moisture figures, the eight-percent lyctid floor, the borate statements and their limits, the sulfuryl fluoride effectiveness statement, the fumigation description, the moisture-meter statement and the sealed-surface statement',
    publisher: 'University of Kentucky Department of Entomology',
    date: 'Carries "Revised: 3/26"; fetched 3 September 2026 from entomology.mgcafe.uky.edu',
    href: 'https://entomology.mgcafe.uky.edu/ef616',
  },
  {
    label:
      'Powderpost Beetles and Wood-Inhabiting Fungi — the source of the two frass textures, the yellow-and-caked test, the May-to-August emergence window, the lyctid hardwood list, and the two statements about when a reader cannot judge the damage themselves',
    publisher: 'NC State Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://content.ces.ncsu.edu/powderpost-beetles-and-wood-inhabiting-fungi',
  },
  {
    label:
      'ENY-266/IG119: Powderpost Beetles and Other Wood-Infesting Insects, by P. G. Koehler, F. M. Oi and C. A. Andrews — the source of the anobiine and bostrichid emergence-hole diameters, the five-year lyctine statement, and the 13% to 30% optimal moisture figure',
    publisher: 'University of Florida IFAS Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026 from edis.ifas.ufl.edu',
    href: 'https://edis.ifas.ufl.edu/ig119',
  },
  {
    label:
      'Wood-Boring Beetles in Homes — the source of the frass comparison that separates powderpost beetle powder from drywood termite pellets, including the ridged sides of the pellets',
    publisher: 'University of California Statewide IPM Program (UC IPM)',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/wood-boring-beetles-in-homes/',
  },
  {
    label:
      'Wood destroying insects — the source of the subterranean termite shelter-tube statement, which is the second half of the termite question this page opens with',
    publisher: 'Cornell University Integrated Pest Management',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://cals.cornell.edu/integrated-pest-management/outreach-education/whats-bugging-you/wood-destroying-insects',
  },
  {
    label:
      'Powderpost Beetles: Got Pests? — the source of the year-after-year reinfestation statement and the untreated-or-non-sealed statement. This is a state regulatory agency rather than a university extension service',
    publisher: 'Maine Department of Agriculture, Conservation and Forestry, Board of Pesticides Control',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://www.maine.gov/dacf/php/gotpests/bugs/powderpost-beetles.htm',
  },
  {
    label:
      'Powderpost Beetles fact sheet — the source of the 15% moisture floor, which disagrees with Kentucky. Its sentence is PARAPHRASED rather than quoted, because the PDF wraps it between "moisture" and "content" and quoting across that wrap would mean normalizing the source text',
    publisher: 'Ohio State University Extension',
    date: 'Carries a 2008 copyright line; fetched 3 September 2026 from woodlandstewards.osu.edu',
    href: 'https://woodlandstewards.osu.edu/sites/woodlands/files/d6/files/pubfiles/2090%20powderpost.pdf',
  },
];

const faqs: Faq[] = [
  {
    question: 'How do I tell whether the infestation is still active?',
    answer:
      'University of Kentucky gives four tests and none of them requires an expert. Active infestations usually have powder that is the color of freshly sawed wood sifting from the exit holes. New holes will not have taken on the weathered appearance of the surrounding wood. If the wood was previously stained, new emergence holes will have no traces of stain inside them. And if accumulations of powder appear yellowed, caked, or covered with dust or debris, the damage is probably old. NC State puts the same test more briefly: frass that is yellow and caked is usually considered old and likely an indication of an infestation that is no longer active. Kentucky adds one caution worth reading twice, which is that careful observation may be required to distinguish new powder from powder dislodged out of old larval galleries by vibrations.',
  },
  {
    question: 'Is it powderpost beetles or termites?',
    answer:
      'The frass is the test, and two sources give the two halves. For drywood termites, UC IPM states that the fine powdery frass of powderpost beetles differs from the larger, granular, and almost pepperlike pellets drywood termites leave behind, and that if you look closely at termite pellets you will see they have ridges on their sides. For subterranean termites, Cornell IPM states that they make tubes from soil particles, saliva and feces — a shelter tube running up a foundation wall is a termite sign and is not something a powderpost beetle produces. This site has a separate termites page and this page does not repeat it.',
  },
  {
    question: 'Do I need to do anything immediately?',
    answer:
      'University of Kentucky says not, and says so plainly: powderpost beetles damage wood slowly, and there is no need to act immediately for fear of risking the structural integrity of the home. The same source states that powderpost beetle infestations often die out of their own accord, and that a wait-and-see approach often makes the most sense when there is uncertainty about whether the infestation is active. That is the source position and this page does not argue with it. It is also the reason the active-versus-inactive question sits at the top of this page rather than at the bottom.',
  },
  {
    question: 'What moisture reading matters, and do the sources agree?',
    answer:
      'They do not agree, and this page reports the disagreement rather than averaging it. University of Kentucky states that a 13-30% moisture content is required for development of anobiid larvae, and separately that wood moisture below 14 percent during spring and summer is generally unsuitable for development. University of Florida gives the optimal wood moisture content for development as 13% to 30%, which agrees. Ohio State Extension states that most beetles do not develop in wood with a moisture content below 15%, which is a higher floor than Kentucky uses. And Kentucky itself states that lyctid infestations can persist in wood with a moisture content as low as about eight percent — so the floor depends on which family you have.',
  },
  {
    question: 'Will a borate treatment fix a beetle problem in my hardwood floor?',
    answer:
      'University of Kentucky is directly discouraging about that specific case, and the sentence sits beside the product on this page rather than below it. The source states that for borates to penetrate, the wood surface must be unfinished, and that the spray will not penetrate paint, polyurethane, or other water repellent coatings. It adds that borate treatment of hardwood floors first requires sanding to remove the finish, that such treatments are seldom necessary because emerging lyctids and bostrichids are unlikely to re-infest, and that in temperature-controlled buildings the moisture content of wood flooring tends to be around 10%, at which borate penetration would be minimal. The same source names borates as the most widely used insecticide for beetle-infested wood — which is why the products appear at all. Both halves are the same source.',
  },
  {
    question: 'When is fumigation the answer?',
    answer:
      'It is a professional structural operation, not a consumer one, and this page gives no application guidance of any kind. University of Kentucky describes it as an extreme and costly option: homes undergoing fumigation are sealed with tarps and occupants must remain out for about three days. The same source states that current fumigants containing sulfuryl fluoride are less effective against wood-boring beetles than those containing methyl bromide, which is no longer available, and that consequently de-infestation may not be successful. It gives the case where it is warranted as infestations, typically of anobiids, that have spread into walls, between floors, and other areas where access for surface treatment or wood removal is impractical. If that is the description of your building, the next step is a licensed structural pest control professional.',
  },
];

const tocItems = [
  { id: 'scope', title: 'What This Page Carries' },
  { id: 'active', title: 'First Question: Is It Active?' },
  { id: 'termites', title: 'Second Question: Is It Termites?' },
  { id: 'families', title: 'Three Families, and Which Wood Each Attacks' },
  { id: 'holes', title: 'The Holes and the Powder, by Family' },
  { id: 'structural', title: 'Structural Timber or Furniture' },
  { id: 'moisture', title: 'Moisture, and Where the Sources Disagree' },
  { id: 'treatment', title: 'Treatment' },
  { id: 'prevention', title: 'Prevention' },
  { id: 'not-named', title: 'What Is Not Named Here, and Why' },
  { id: 'professional', title: 'When to Call a Professional' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function PowderpostBeetlesPage() {
  return (
    <UsPageLayout
      title="Powderpost Beetles"
      subtitle="Small round holes in wood, and a little pile of powder underneath. Two questions decide what you do next: whether the infestation is still live, and whether what you are looking at is a beetle at all. This page answers those two first."
      lastUpdated="September 2026"
      readingTime="11 min read"
      homeHref={POWDERPOST_HOME}
      clusterNav={POWDERPOST_NAV}
      tocItems={tocItems}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        University of Kentucky opens its publication on this insect by saying that{' '}
        <em>
          &ldquo;Powderpost beetles are second only to termites in their ability to damage dry,
          seasoned wood.&rdquo;
        </em>{' '}
        The same source says something less expected immediately afterwards: that customers often
        receive conflicting opinions about whether what they are seeing is due to powderpost beetles
        at all, and that mistakes are also made in determining whether the infestation is active.
      </p>
      <p>
        <strong>
          That is why this page leads with the two diagnostic questions rather than with treatment.
        </strong>{' '}
        Almost everything a reader might do next &mdash; replace a board, sand and treat a floor,
        call a company, or do nothing at all &mdash; depends on the answers, and both answers are
        reachable by looking carefully at the wood.
      </p>

      <h2 id="scope">What This Page Carries</h2>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>Three products are named and two classes are deliberately empty.</strong> The
          reasons are not the same reason, and the page says which is which.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Borates:</strong> two named, because University of Kentucky names both
          formulations by name for this pest. The same source&rsquo;s limits on them are printed
          beside the products, not further down the page.{' '}
          <strong>Moisture meter:</strong> one named, because the sources publish numeric moisture
          thresholds and Kentucky names the instrument that reads them.{' '}
          <strong>Wood finishes and sealers:</strong> none named. Kentucky states that sealed
          surfaces are generally safe from future attack, but publishes no specification separating
          one finish from another for this purpose, so there is nothing to rank against.{' '}
          <strong>Fumigants:</strong> none named, and no application guidance of any kind appears
          here. Structural fumigation is a licensed operation and this page describes only when the
          sources say it is indicated.
        </p>
      </div>

      <h2 id="active">First Question: Is It Active?</h2>
      <p>
        <strong>
          Most of the cost of a powderpost beetle problem is spent on infestations that had already
          finished.
        </strong>{' '}
        University of Kentucky states plainly that{' '}
        <em>&ldquo;Powderpost beetle infestations often die out of their own accord.&rdquo;</em>{' '}
        The exit holes are made by adults leaving, not by anything boring in, so a wall of holes can
        be a record of an infestation that ended years ago.
      </p>
      <p>Kentucky gives four tests. None of them needs a tool.</p>
      <ul>
        <li>
          <strong>Fresh powder.</strong>{' '}
          <em>
            &ldquo;Active infestations usually have powder that is the color of freshly sawed wood
            sifting from the exit holes.&rdquo;
          </em>
        </li>
        <li>
          <strong>Old powder.</strong>{' '}
          <em>
            &ldquo;If accumulations of powder appear yellowed, caked, or covered with dust or
            debris, the damage is probably old.&rdquo;
          </em>{' '}
          NC State gives the same test independently:{' '}
          <em>&ldquo;The frass of the lyctid beetles looks and feels like talcum powder.&rdquo;</em>{' '}
          and separately notes that yellow, caked frass usually indicates an infestation that is no
          longer active.
        </li>
        <li>
          <strong>The stain test, which is the most decisive one.</strong>{' '}
          <em>
            &ldquo;If flooring, cabinetry, etc. were previously stained, new emergence holes will
            have no traces of stain inside the holes.&rdquo;
          </em>{' '}
          A hole with finish inside it was there when the finish was applied.
        </li>
        <li>
          <strong>Weathering.</strong> Kentucky adds that compared to old, abandoned holes, new
          holes will not have taken on the weathered appearance of the surrounding wood.
        </li>
      </ul>
      <p>
        <strong>One caution from the same source, because it undoes a careless reading:</strong>{' '}
        careful observation may be required to distinguish new powder from powder dislodged out of
        old larval galleries by vibrations. A pile of powder appearing after a floor was walked on
        hard is not by itself evidence of a live infestation.
      </p>
      <p>
        <strong>Timing helps too.</strong> NC State states that{' '}
        <em>&ldquo;the peak time to watch for emerging beetles is usually May through August&rdquo;</em>
        , while noting that exit holes and frass can be found almost any time of year in heated
        buildings and crawl spaces. If you are reading this in September and want a cleaner answer,
        vacuuming the powder away and marking the holes gives you a controlled surface to re-check.
      </p>

      <h2 id="termites">Second Question: Is It Termites?</h2>
      <p>
        <strong>The powder answers this, and two sources give the two halves.</strong>
      </p>
      <p>
        For drywood termites, UC IPM states that this fine powdery frass{' '}
        <em>
          &ldquo;This fine, powdery frass distinguishes powderpost beetles from other wood-boring
          beetles in homes.&rdquo;
        </em>{' '}
        and continues:{' '}
        <em>
          &ldquo;It also differs from the larger, granular, and almost pepperlike pellets drywood
          termites leave behind; if you look closely at termite pellets, you will see they have
          ridges on their sides.&rdquo;
        </em>{' '}
        Powder that behaves like flour is a beetle. Discrete pellets with ridged sides are a drywood
        termite.
      </p>
      <p>
        For subterranean termites, the sign is not in the wood at all. Cornell IPM states that{' '}
        <em>&ldquo;Subterranean termites make tubes from soil particles, saliva and feces.&rdquo;</em>{' '}
        A shelter tube running up a foundation wall or a pier is a termite sign. Powderpost beetles
        produce nothing of the kind.
      </p>
      <p>
        Our <Link href="/us/termites">termites page</Link> covers the signs, the subterranean and
        drywood types and the limits of consumer products, and our{' '}
        <Link href="/us/formosan-termites">Formosan termites page</Link> covers the introduced
        species separately. None of that is repeated here, so the pages cannot drift apart.
      </p>

      <h2 id="families">Three Families, and Which Wood Each Attacks</h2>
      <p>
        <strong>
          &ldquo;Powderpost beetle&rdquo; is a name for three beetle families, not one insect
        </strong>
        , and which one you have decides whether the problem is your furniture or your building.
        Maine&rsquo;s Board of Pesticides Control states that{' '}
        <em>
          &ldquo;Powderpost beetles can infest any untreated or non-sealed wood article.&rdquo;
        </em>
      </p>
      <ul>
        <li>
          <strong>Lyctids &mdash; hardwood only.</strong> Kentucky:{' '}
          <em>
            &ldquo;Lyctid powderpost beetles attack only wood products manufactured from hardwood
            (broadleaf) trees such as oak, ash, walnut, hickory, poplar or cherry.&rdquo;
          </em>{' '}
          NC State gives the same restriction with a different list:{' '}
          <em>
            &ldquo;Lyctid (&quot;lick-tid&quot;) powderpost beetles attack only hardwoods, such as
            oak, ash, hickory, and maple.&rdquo;
          </em>{' '}
          That is why lyctids turn up in flooring, paneling, molding, doorframes and furniture
          rather than in framing. University of Florida adds a timing rule that is often the whole
          diagnosis:{' '}
          <em>&ldquo;Lyctine rarely infest wood older than five years.&rdquo;</em>
        </li>
        <li>
          <strong>Anobiids &mdash; the structural ones.</strong> Kentucky:{' '}
          <em>
            &ldquo;Unlike the powderpost beetles discussed previously, anobiids can seriously damage
            beams, joists, and other structural components of buildings.&rdquo;
          </em>{' '}
          They attack both hardwoods and softwoods, which is why they reach framing lumber that
          lyctids cannot use.
        </li>
        <li>
          <strong>Bostrichids.</strong> Attack seasoned hardwood and softwood, with bamboo
          particularly susceptible. Like lyctids, they are largely a contents-and-finish-carpentry
          problem rather than a framing one.
        </li>
      </ul>
      <p>
        <strong>Why the lyctid five-year rule matters commercially, not just entomologically.</strong>{' '}
        Kentucky states that lyctid infestation almost always results from wood that already
        contained eggs or larvae when it was brought into the building, and that responsibility for
        treatment or replacement therefore often resides with the supplier, manufacturer or
        installer rather than the homeowner. If your floor is two years old, that sentence is worth
        reading before you pay anybody.
      </p>

      <h2 id="holes">The Holes and the Powder, by Family</h2>
      <p>
        <strong>The hole diameter and the feel of the powder narrow it down.</strong> University of
        Florida publishes the diameters. For anobiines,{' '}
        <em>&ldquo;Emergence holes from Anobiines are 1/16 to 1/8 inch in diameter and round.&rdquo;</em>{' '}
        For bostrichids,{' '}
        <em>&ldquo;The round emergence holes are 1/8 to 3/16 inch in diameter.&rdquo;</em> Lyctid
        holes are the smallest of the three; Kentucky describes them as round and about the size of
        a pinhead.
      </p>
      <p>
        <strong>The powder is the other half.</strong> NC State:{' '}
        <em>&ldquo;The frass of anobiid beetles is powdery but has a gritty texture.&rdquo;</em>{' '}
        Rubbed between finger and thumb, a lyctid&rsquo;s powder behaves like talc and an
        anobiid&rsquo;s does not. Kentucky records one exception rather than leaving the test looking
        universal: for a few anobiid species attacking hardwoods, the gritty feel is not the case.
      </p>
      <p>
        Maine states the consequence of leaving an anobiid population alone:{' '}
        <em>
          &ldquo;They re-infest dry, seasoned wood year after year and the wood becomes completely
          riddled with holes and galleries packed with powdery frass.&rdquo;
        </em>
      </p>

      <h2 id="structural">Structural Timber or Furniture</h2>
      <p>
        <strong>These are two different problems with two different answers</strong>, and the family
        usually tells you which one you have. Lyctids and bostrichids are overwhelmingly a
        contents, flooring and trim problem. Anobiids are the family that reaches joists, beams and
        sills, and they are the family that keeps going: Kentucky notes that anobiids can digest the
        cellulose in wood and are less dependent on the starch that declines as wood ages, which is
        why they can infest wood regardless of its age.
      </p>
      <p>
        <strong>You cannot judge structural damage by looking, and NC State says so directly:</strong>{' '}
        <em>
          &ldquo;You cannot simply look at a piece of wood and know if beetle damage is severe enough
          to warrant repair or replacement.&rdquo;
        </em>{' '}
        The same source gives the referral rather than leaving the reader to guess:{' '}
        <em>
          &ldquo;If you are concerned about the condition of structural wood, such as floor joists,
          you may need to contact a general contractor or structural engineer.&rdquo;
        </em>{' '}
        That is a structural question, and it is not the same trade as a pest control company.
      </p>

      <h2 id="moisture">Moisture, and Where the Sources Disagree</h2>
      <p>
        <strong>
          Three sources publish a moisture floor for development and they do not agree on it.
        </strong>{' '}
        All three are reported here; none is averaged.
      </p>
      <ul>
        <li>
          <strong>University of Kentucky, for anobiids:</strong>{' '}
          <em>&ldquo;A 13-30% moisture content is required for development of the larvae.&rdquo;</em>{' '}
          and separately{' '}
          <em>
            &ldquo;Wood moisture below 14 percent during spring and summer are generally unsuitable
            for development.&rdquo;
          </em>
        </li>
        <li>
          <strong>University of Florida:</strong>{' '}
          <em>&ldquo;The optimal wood moisture content for development is 13% to 30%.&rdquo;</em> This
          agrees with Kentucky.
        </li>
        <li>
          <strong>Ohio State Extension:</strong> states that most beetles do not develop in wood with
          a moisture content below 15% &mdash; a higher floor than either of the other two.{' '}
          <strong>
            That sentence is paraphrased rather than quoted, because the PDF wraps it between
            &ldquo;moisture&rdquo; and &ldquo;content&rdquo;
          </strong>{' '}
          and quoting across the wrap would mean altering the source&rsquo;s own text.
        </li>
        <li>
          <strong>And Kentucky undercuts all three for one family.</strong> For lyctids:{' '}
          <em>
            &ldquo;Infestations can persist in wood with a moisture content as low as about eight
            percent&rdquo;
          </em>
          , which the same source notes is a common condition in indoor, temperature-controlled
          environments.
        </li>
      </ul>
      <p>
        <strong>What that means for a reader holding a meter.</strong> A reading in the twenties in a
        crawl space is inside every anobiid figure any of these sources publish. A reading around 10%
        in a heated room rules anobiid development out on all three thresholds &mdash; but does not
        rule out a lyctid, on Kentucky&rsquo;s own eight-percent sentence. The number is useful and
        it is not by itself an answer.
      </p>

      <h2 id="treatment">Treatment</h2>
      <p>
        <strong>Kentucky puts the least dramatic option first and this page keeps that order.</strong>{' '}
        <em>
          &ldquo;Powderpost beetles damage wood slowly. There is no need to act immediately for fear
          of risking the structural integrity of one&rsquo;s home.&rdquo;
        </em>{' '}
        Where damage is confined to a few boards or pieces of trim, the same source describes removing
        and replacing them, along with directly adjacent pieces, as often the most efficient
        approach &mdash; especially for lyctids and bostrichids, which have a hard time re-infesting
        finished indoor wood.
      </p>
      <p>
        <strong>Borates are the treatment the source names.</strong> Kentucky:{' '}
        <em>&ldquo;Insecticides known as borates are most widely used for this purpose.&rdquo;</em>{' '}
        It names the two formulations directly, and both are carded below.
      </p>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>Read this before either product below.</strong> The same source that names them
          also bounds them:{' '}
          <em>
            &ldquo;For borates to penetrate the wood surface must be unfinished; the spray will not
            penetrate paint, polyurethane, or other water repellent coatings.&rdquo;
          </em>{' '}
          Kentucky adds that treating an infested hardwood floor first requires sanding off the
          finish, that this is seldom necessary because emerging lyctids and bostrichids are unlikely
          to re-infest, and that in temperature-controlled buildings flooring moisture tends to sit
          around 10%, at which borate penetration would be minimal and would likely have little
          effect on developing larvae. Kentucky describes borates as most often used for anobiids in
          joists, beams, sills, studs and other structural elements &mdash; which is bare wood, in a
          crawl space or basement, and not a finished floor upstairs.
        </p>
      </div>

      <UsToolCard
        name="Bora-Care Termiticide Insecticide and Fungicide Concentrate, Wood Treatment for Termite and Wood-Boring Beetle Control, 1 Gallon"
        whatItDoes={[
          'A borate concentrate applied to bare wood. This is one of the two formulations University of Kentucky names for powderpost beetles.',
          'Its own listing text states that it penetrates wood fibers to eliminate and prevent termites, carpenter ants, wood-boring beetles, and decay fungi.',
          'University of Kentucky states that for borates to penetrate, the wood surface must be unfinished, and that the spray will not penetrate paint, polyurethane, or other water repellent coatings. Bare wood only.',
        ]}
        asin="B01HDYAOY2"
      />

      <UsToolCard
        name="Nisus Tim-BOR Professional Insecticidal Dust, 1.5 lbs"
        whatItDoes={[
          'The second of the two borate formulations University of Kentucky names for powderpost beetles.',
          'Its own listing text states that it is designed for bare wood, that it is made with a borate mineral, and that it can be applied as a dust, a liquid or a foam.',
          'The same unfinished-surface limit applies to this product as to the one above, on the same University of Kentucky sentence.',
        ]}
        asin="B09M2GHBBC"
      />

      <p>
        <strong>Heat and cold are also on the list, for objects rather than buildings.</strong>{' '}
        Kentucky describes de-infestation of furniture and similar objects in a professional heat
        chamber, and states that smaller items such as wood carvings and picture frames can be killed
        by placing them in a deep freeze at 0&deg;F for 3 to 7 days, depending on wood thickness.
        That second one needs no product and no professional.
      </p>

      <h2 id="prevention">Prevention</h2>
      <p>
        <strong>The single rule is that the beetles need bare wood to lay in.</strong> Kentucky:{' '}
        <em>&ldquo;Powderpost beetles lay their eggs only in bare, unfinished wood.&rdquo;</em> And
        the consequence:{' '}
        <em>
          &ldquo;Surfaces that are stained, varnished, painted or otherwise sealed are generally safe
          from future attack.&rdquo;
        </em>{' '}
        Kentucky notes that beetles emerging through a finish were usually in the wood before the
        finish went on, and that sealing the emergence holes prevents beetles from laying eggs back
        into them.
      </p>
      <p>
        <strong>The second rule is about where the wood came from.</strong> Kentucky states that many
        of the most serious infestations come from using old lumber from a barn or woodpile to panel
        a room or build an addition, and that wood showing fresh emergence holes or powder should not
        be used.
      </p>
      <p>
        <strong>The third is moisture, and it is where the instrument earns its place.</strong> For
        anobiids in a crawl space, Kentucky describes covering the soil with polyethylene sheeting to
        reduce moisture movement into the substructure, improving drainage, and increasing air
        circulation. It then names the tool:{' '}
        <em>
          &ldquo;Moisture meters utilized by pest control firms are handy tools for measuring the
          moisture content of wood and predicting the potential for infestation&rdquo;
        </em>
        .
      </p>

      <UsToolCard
        name="Extech MO50 Compact Pin Moisture Meter"
        whatItDoes={[
          'A pin-type meter read against the thresholds in the moisture section above.',
          'Its own listing text states that it measures moisture in wood from 5 to 50 percent — a band that contains every figure the sources on this page publish, from Kentucky’s eight-percent lyctid floor to the top of the 13-30% anobiid range.',
          'It reports a percentage rather than a relative scale, which is what reading against a published threshold requires.',
        ]}
        asin="B011BLHBBM"
      />

      <h2 id="not-named">What Is Not Named Here, and Why</h2>
      <p>
        <strong>Two moisture meters were read and rejected on the criterion, not on brand.</strong>{' '}
        The test this page applied is that the instrument must report wood moisture content as a
        percentage across the band the sources use, roughly 8% to 30%. A meter that reports a
        relative scale cannot be read against a published percentage threshold at all &mdash; there
        is no way to tell where Kentucky&rsquo;s 14 percent sits on an unlabeled bar. One
        candidate&rsquo;s
        own listing text describes detecting{' '}
        <strong>relative</strong> moisture content and indicating a range with LED bars, with no
        percentage; it fails the criterion. A second candidate&rsquo;s listing names a moisture
        percentage display but publishes no wood range in its own feature text, so the band could not
        be established from the listing itself and no claim about it could be made here.
      </p>
      <p>
        <strong>Wood finishes and sealers carry no card.</strong> The sources support sealing as
        prevention &mdash; that is the Kentucky sentence quoted above &mdash; but none of them
        publishes any specification that separates one finish from another for this purpose. There is
        a supported practice here and no supported product criterion, and this site does not rank
        products against a vocabulary.
      </p>
      <p>
        <strong>No fumigant is named and no application guidance is given.</strong> Structural
        fumigation is a licensed operation carried out on an occupied building, and nothing on this
        page is a substitute for the professional who would perform it.
      </p>

      <h2 id="professional">When to Call a Professional</h2>
      <p>
        <strong>Three of the sources draw the line in three different places, and all three are
        useful.</strong>
      </p>
      <ul>
        <li>
          <strong>For the condition of the wood itself</strong>, NC State sends the reader to a
          general contractor or structural engineer rather than to a pest company, as quoted above.
          Whether a joist needs replacing is a structural question.
        </li>
        <li>
          <strong>For an infestation that has spread beyond reach</strong>, Kentucky gives fumigation
          as the option and describes when it is warranted:{' '}
          <em>
            &ldquo;Structural fumigation may be warranted when infestations (typically of anobiids)
            have spread into walls, between floors, and other areas where access for surface
            treatment or wood removal is impractical.&rdquo;
          </em>
        </li>
        <li>
          <strong>And Kentucky is candid about what fumigation delivers</strong>, which is unusual
          enough to quote in full:{' '}
          <em>
            &ldquo;Current fumigants containing sulfuryl fluoride are less effective against
            wood-boring beetles than those containing methyl bromide, which is no longer
            available.&rdquo;
          </em>{' '}
          It follows that with the sentence that de-infestation may not be successful. A reader being
          quoted for a whole-house fumigation is entitled to know that the source that describes the
          procedure also doubts its outcome. Kentucky notes that portable items such as furniture can
          be fumigated far more effectively, and at substantially lower cost, than an entire building.
        </li>
      </ul>
      <p>
        Our{' '}
        <Link href="/us/choosing-a-pest-control-service">
          choosing a pest control service page
        </Link>{' '}
        covers what to check before hiring, and is not repeated here.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
