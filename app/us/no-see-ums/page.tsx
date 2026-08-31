import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { NOSEEUMS_NAV, NOSEEUMS_HOME } from '../components/noSeeUmsNav';

const URL = 'https://pestproindex.com/us/no-see-ums';
const TITLE = 'No-See-Ums: The Fly That Beats Window Screens';
const DESCRIPTION =
  'Three extension services say ordinary window screening doesn\'t keep biting midges out. The mesh number that does, from the University of Arizona.';

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
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'No-See-Ums', item: URL }],
};

const faqs: Faq[] = [
  {
    question: 'What is a no-see-um?',
    answer:
      'A small biting fly. UF/IFAS Extension places them in the family Ceratopogonidae, genus Culicoides, and records that biting midges are also known as no-see-ums, sand flies, or sand gnats. University of Arizona Cooperative Extension states that entomological literature indicates that no-see-um genera found in Arizona and the southwest are Culicoides, family Ceratopogonidae. Only the female bites: UF/IFAS states that the mouthparts of female biting midges are specialized for piercing the flesh of vertebrate animals and sucking their blood, while male biting midges have mouthparts that generally resemble those of the female but are not adapted for piercing skin.',
  },
  {
    question: 'Why can I feel the bite but not see the insect?',
    answer:
      'Because of the size, and the sources do not agree on a single figure. UF/IFAS Extension states that many species are less than one twenty-fourth of an inch, about 1 mm, and gives a typical range of 1.0 mm to 2.0 mm with an average length of about 1.5 mm. NC State Extension states that biting midges are sometimes only 0.5 mm long. Purdue Extension states that biting midges are very small, ranging in size from 1-3 mm in length. University of Arizona Cooperative Extension states that adult no-see-ums are less than 1/16-inch long. Those figures are quoted here separately with the source that published each, rather than merged into one number.',
  },
  {
    question: 'Will my window screens keep them out?',
    answer:
      'Three extension services say ordinary screening does not. UF/IFAS Extension states that regular window screens do not exclude biting midges from indoor areas. University of Arizona Cooperative Extension states that adult no-see-ums can easily pass through normal window screens, and separately that owing to their minute size, no-see-ums can easily pass through ordinary insect screens on doors and windows, and will occasionally bite people indoors. Finer mesh is the sourced answer: UF/IFAS states that the openings of biting midge, or no-see-um, screen are small enough to exclude biting midges, and Purdue Extension states that window and door screens consisting of a mesh size smaller than normal window screen is much more effective in reducing bites.',
  },
  {
    question: 'What mesh size do I actually need?',
    answer:
      'University of Arizona Cooperative Extension publishes the numbers: no-see-ums can pass through standard 16 x 16 or 18 x16 mesh screens, so replace these with smaller mesh, 30 x 30, wherever possible, and inspect screens periodically and repair any rips or gaps. NC State Extension frames indoor entry differently, stating that although screens on open windows are effective in keeping mosquitoes out, midges may find gaps or tears that allow them to enter homes. Both are reported here. Note that every screening product this page could check is 20 x 20, which is finer than the standard the Arizona source says fails, but is not the 30 x 30 that source names.',
  },
  {
    question: 'Is a no-see-um the same thing as a sand fly?',
    answer:
      'The name is shared, the insect is not. US extension sources themselves use it for these midges: UF/IFAS Extension writes that biting midges are also known as no-see-ums, sand flies, or sand gnats, and University of Arizona Cooperative Extension writes that they are also known as punkies or sand flies. But the sand flies that transmit leishmaniasis belong to a different family. A 2016 paper in Parasites and Vectors gives their designation as sand flies, Diptera: Psychodidae: Phlebotominae, for the species Phlebotomus papatasi and Lutzomyia longipalpis. CDC states that leishmaniasis is a parasitic disease caused by an infection with Leishmania parasites, which are spread by the bite of infected sand flies, and that leishmaniasis occurs in parts of approximately 90 countries, usually in tropical or subtropical climates.',
  },
  {
    question: 'Do no-see-ums spread disease in the United States?',
    answer:
      'Purdue Extension states of biting midges that none are known to transmit disease agents to humans in the U.S. On leishmaniasis, which is carried by the unrelated Phlebotominae sand flies rather than by these midges, CDC states that occasionally people have had locally acquired cutaneous leishmaniasis, especially in Texas and rarely other states such as Oklahoma and Arizona, and that there have been no known cases of acquired visceral leishmaniasis in the US.',
  },
  {
    question: 'How do I tell a no-see-um bite from a chigger bite?',
    answer:
      'By what the animal is and where it bites. A no-see-um is a blood-feeding fly: UF/IFAS Extension states that females of most species feed on vertebrate blood to obtain nutrients for egg development. A chigger is a larval mite that does not feed on blood at all, as set out with its own sources on our chiggers page. Position differs too. University of Arizona Cooperative Extension notes for no-see-ums that the head and neck are often where bites occur, while the chigger sources place chigger bites where clothing is tight, at the ankles, waist and armpits. No source consulted for this page compares a midge bite with a mosquito bite, so this page does not draw that comparison.',
  },
  {
    question: 'What does a no-see-um bite feel like?',
    answer:
      'UF/IFAS Extension states that reactions to bites generally consist of localized stinging or burning sensations with defined red areas surrounding bite sites, and that while discomfort usually lasts for minutes to hours, individuals who are hypersensitive to bites may itch for two to three days. University of Arizona Cooperative Extension states that the bite usually starts as a small red welt, an eighth of an inch or so, or a water-filled blister that itches, that once scratched the welt can break open and bleed but the itching usually continues, and that allergic or sensitive individuals may develop long-lasting painful and itchy lesions.',
  },
  {
    question: 'When are they biting, and where are they coming from?',
    answer:
      'UF/IFAS Extension states that most biting midge species generally bite during dusk, night, or morning, and that during cold weather and in coastal areas many biting midge species will bite in broad daylight. Seasonality is given by region rather than nationally: NC State Extension states that along the North Carolina coast and around inland breeding sites, flies are usually present throughout most of the warm weather seasons, while University of Arizona Cooperative Extension states that no-see-ums are seen in largest numbers in the summer, but in places with warm winters they can occur year-round. As for where they come from, University of Arizona Cooperative Extension states that females may disperse a little over 1 mile in distance from where they emerge, but high numbers of bites are likely to be experienced very close to emergence locations.',
  },
  {
    question: 'Which repellent works against them?',
    answer:
      'The sources do not agree, and this page reports that rather than picking one. UF/IFAS Extension states that DEET-based repellents commonly used to protect humans from mosquitoes are also the main repellent used to repel biting midges. University of Arizona Cooperative Extension states that insect repellents containing DEET typically used against mosquitoes are also labeled for use against biting midges, but seem to be only marginally effective in repelling them. Purdue Extension states that repellents containing DEET and clothing impregnated with DEET or permethrin provide only limited protection. A second University of Arizona publication states that repellents effective against mosquitos are effective against biting midges. Two of those four are from the same institution.',
  },
  {
    question: 'Can I treat my yard for them?',
    answer:
      'The sources are consistently discouraging. NC State Extension states that control of immature biting midges is impractical in North Carolina, and that chemical controls, meaning ULV, fogs, mists and sprays, are only temporarily effective against adult biting midges. Purdue Extension states that control of biting midge larvae and adults is very difficult, and that suppressing adult biting midges with insecticides has enjoyed limited success, and only under certain conditions. University of Arizona Cooperative Extension states that management of larvae with insecticides is not a viable option due to their inaccessible and dispersed breeding sites. What is sourced as useful is drying the habitat: the same source states that eliminating stagnant water rich in organic matter will help reduce biting midge breeding habitat, and a second Arizona publication advises holding off irrigation in the vicinity and allowing moist spots to drain and dry.',
  },
  {
    question: 'What do I put on the bites?',
    answer:
      'University of Arizona Cooperative Extension states that bite treatments recommended by some dermatologists include topical cortisone creams and non-steroidal anti-inflammatory drugs such as aspirin or ibuprofen, and that persons having severe reactions should consult a physician or dermatologist. A second University of Arizona publication states that over-the-counter topical cortisone creams usually provide relief from itching, that over-the-counter anti-inflammatory medication may be required if there is pain or swelling, and that for more severe reactions medical help should be sought from a dermatologist or physician. Both sources refer severe reactions onward to a doctor, and nothing on this page is medical advice.',
  },
];

const sources: Source[] = [
  {
    label: 'EENY-349/IN626 — Biting Midges, No-See-Ums Culicoides spp.',
    publisher:
      'UF/IFAS Extension — Burkett-Cadena, Cooper, Addae, Connelly and Buckner',
    date: 'Accessed 24 August 2026',
    href: 'https://ask.ifas.ufl.edu/publication/IN626',
  },
  {
    label: 'Biting Midges and Their Control — Charles Apperson and Michael Waldvogel',
    publisher: 'NC State Extension',
    date: 'Published 1 April 1999, reviewed 12 December 2022. Accessed 24 August 2026',
    href: 'https://content.ces.ncsu.edu/biting-midges-and-their-control',
  },
  {
    label:
      'Backyard Gardener #59, No-See-Um Biting Flies — adapted from Jeff Schalau, Yavapai County',
    publisher: 'University of Arizona Cooperative Extension',
    date: 'Dated 15 January 2023. Accessed 24 August 2026',
    href: 'https://extension.arizona.edu/sites/extension.arizona.edu/files/barnesm/No-See-Um.pdf',
  },
  {
    label:
      'Something’s biting me, but I can’t see it! — Shaku Nair, Dawn H. Gouge and Shujuan Li — the source of the mesh figures',
    publisher: 'University of Arizona Cooperative Extension',
    date: 'Dated June 2018. Accessed 24 August 2026',
    href: 'https://cales.arizona.edu/apmc/docs/No-See-Ums-IPMShort.pdf',
  },
  {
    label: 'AZ1761 — Mosquito and Tick Repellents — Gouge, Li, Nair, Walker and Bibbs',
    publisher: 'University of Arizona Cooperative Extension',
    date: 'Dated March 2018. Accessed 24 August 2026',
    href: 'https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1761-2018.pdf',
  },
  {
    label: 'Biting Midges — Public Health and Medical Entomology',
    publisher: 'Purdue Extension',
    date: 'Accessed 24 August 2026',
    href: 'https://extension.entm.purdue.edu/publichealth/insects/bitingmidge.html',
  },
  {
    label:
      'Diagnostic doses and times for Phlebotomus papatasi and Lutzomyia longipalpis sand flies — Denlinger, Creswell, Anderson, Reese and Bernhardt',
    publisher: 'Parasites and Vectors 2016;9:212',
    date: 'Published 15 April 2016. Accessed 24 August 2026',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4833940/',
  },
];

const tocItems = [
  { id: 'what-they-are', title: 'The Insect That Walks Through Screens' },
  { id: 'sand-fly', title: 'The Sand Fly Problem' },
  { id: 'the-bite', title: 'Identifying the Bite' },
  { id: 'screens', title: 'Screens, and the Mesh Numbers' },
  { id: 'screen-products', title: 'Screening: What Is Actually Available' },
  { id: 'repellents', title: 'Repellents, and Why the Sources Disagree' },
  { id: 'boundaries', title: 'What the Sources Say Does Not Work' },
  { id: 'bites', title: 'Treating the Bites' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function NoSeeUmsPage() {
  return (
    <UsPageLayout
      title="No-See-Ums"
      subtitle="A biting fly small enough to walk through an ordinary window screen. Three extension services say so, one of them publishes the mesh numbers, and the screening you can actually buy does not quite reach the figure they name."
      lastUpdated="August 2026"
      readingTime="12 min"
      tocItems={tocItems}
      homeHref={NOSEEUMS_HOME}
      clusterNav={NOSEEUMS_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Most biting-insect problems are solved outdoors. This one has an indoor half,
        because the insect is small enough to come through the screen you already have.
        That is not a marketing line; it is what three separate extension services say,
        and one of them publishes the numbers.
      </p>

      <h2 id="what-they-are">The Insect That Walks Through Screens</h2>
      <p>
        UF/IFAS Extension places them in the{' '}
        <strong>&ldquo;family Ceratopogonidae&rdquo;</strong> and the{' '}
        <strong>&ldquo;genus <em>Culicoides</em>&rdquo;</strong>, and records the names
        they go by: <strong>&ldquo;Biting midges (also known as no-see-ums, sand flies,
        or sand gnats)&rdquo;</strong>. University of Arizona Cooperative Extension gives
        the same placement:{' '}
        <strong>
          &ldquo;Entomological literature indicates that no-see-um genera found in Arizona
          and the southwest are Culicoides (family Ceratopogonidae).&rdquo;
        </strong>
      </p>
      <p>
        On size, the sources give different figures and this page keeps them apart rather
        than averaging them:
      </p>
      <ul>
        <li>
          UF/IFAS Extension: &ldquo;many species are less than one twenty-fourth of an
          inch (about 1 mm [0.04 in])&rdquo;, and &ldquo;usually 1.0 mm to 2.0 mm (0.04
          to 0.08 in) long&rdquo;, with an &ldquo;average length is about 1.5 mm (0.06
          in)&rdquo;.
        </li>
        <li>NC State Extension: &ldquo;Biting midges are sometimes only 0.5 mm long.&rdquo;</li>
        <li>
          Purdue Extension: &ldquo;Biting midges are very small, ranging in size from 1-3
          mm in length.&rdquo;
        </li>
        <li>
          University of Arizona Cooperative Extension:{' '}
          <strong>
            &ldquo;Adult no-see-ums are less than 1/16-inch long, can easily pass through
            normal window screens, and resemble a smaller, more compact version of the
            mosquito.&rdquo;
          </strong>
        </li>
      </ul>
      <p>
        Only the female bites. UF/IFAS states that{' '}
        <strong>
          &ldquo;The mouthparts of female biting midges are specialized for piercing the
          flesh of vertebrate animals and sucking their blood&rdquo;
        </strong>
        , while &ldquo;Male biting midges have mouthparts that generally resemble those of
        the female but are not adapted for piercing skin&rdquo;. Arizona puts the same
        point plainly: &ldquo;Both males and females feed on flower nectar but only the
        female feeds on blood. She must consume blood for her eggs to mature and become
        viable.&rdquo;
      </p>
      <p>
        The larvae live in wet organic material, which is why this is so often a coastal
        complaint. NC State states that &ldquo;The larvae are found in mud, salt marshes
        and intertidal sand&rdquo; and that{' '}
        <strong>
          &ldquo;decaying seaweed that is tossed up onto beaches after storms presents an
          ideal breeding habitat.&rdquo;
        </strong>{' '}
        UF/IFAS names &ldquo;marshes, swamps, and mangroves of coastal Florida as larval
        habitats&rdquo;. Arizona adds the suburban version: &ldquo;Any location inside or
        outside buildings that has moist organic matter can serve as a breeding
        site&rdquo;, including over-irrigated turf, poorly drained ground, and indoor
        potted plants.
      </p>
      <p>
        And the distance matters, because it tells you where to look. University of
        Arizona Cooperative Extension states:{' '}
        <strong>
          &ldquo;Females may disperse a little over 1 mile in distance from where they
          emerge, but high numbers of bites are likely to be experienced very close to
          emergence locations.&rdquo;
        </strong>
      </p>

      <h2 id="sand-fly">The Sand Fly Problem</h2>
      <p>
        Searching for &ldquo;sand fly&rdquo; will produce alarming results about
        leishmaniasis. The two things share a name and are not the same insect, and the
        confusion is not the public&rsquo;s fault &mdash; the extension services use the
        term for these midges themselves.
      </p>
      <p>
        UF/IFAS Extension writes that biting midges are{' '}
        <strong>&ldquo;also known as no-see-ums, sand flies, or sand gnats&rdquo;</strong>
        , and University of Arizona Cooperative Extension writes that{' '}
        <strong>&ldquo;They are also known as punkies or sand flies.&rdquo;</strong>
      </p>
      <p>
        The sand flies that carry leishmaniasis sit in a different family. A 2016 paper in{' '}
        <em>Parasites and Vectors</em> gives their designation as{' '}
        <strong>
          &ldquo;sand flies (Diptera: Psychodidae: Phlebotominae)&rdquo;
        </strong>
        , for the species <em>Phlebotomus papatasi</em> and{' '}
        <em>Lutzomyia longipalpis</em>. No-see-ums are Ceratopogonidae. Same English name,
        different families.
      </p>
      <p>
        The two facts that keep this straight are worth stating together. Purdue Extension
        says of biting midges that{' '}
        <strong>
          &ldquo;none are known to transmit disease agents to humans in the U.S.&rdquo;
        </strong>{' '}
        And CDC places leishmaniasis elsewhere.{' '}
        <strong>
          CDC states that leishmaniasis occurs in parts of approximately 90 countries, usually in
          tropical or subtropical climates. On the United States specifically, it states that people
          have occasionally had locally acquired cutaneous leishmaniasis, especially in Texas and
          rarely in other states, giving Oklahoma and Arizona as its examples, and that there have
          been no known cases of acquired visceral leishmaniasis in the United States.
        </strong>{' '}
        <em>
          (CDC&rsquo;s pages could not be retrieved when this page was last checked, so what it says
          is reported here in our own words rather than quoted; the two disease names are written out
          where CDC abbreviates them)
        </em>
      </p>
      <p>
        <strong>
          Nothing on this page attaches leishmaniasis risk to a no-see-um bite. The
          disease belongs to a different family of fly, and the sources are kept apart
          deliberately.
        </strong>
      </p>

      <h2 id="the-bite">Identifying the Bite</h2>
      <p>
        UF/IFAS Extension describes the reaction:{' '}
        <strong>
          &ldquo;Reactions to bites generally consist of localized stinging or burning
          sensations with defined red areas surrounding bite sites&rdquo;
        </strong>
        , and adds that while &ldquo;discomfort usually lasts for minutes to hours,
        individuals who are hypersensitive to bites may itch for two to three days&rdquo;.
      </p>
      <p>
        University of Arizona Cooperative Extension is more specific about what it looks
        like: &ldquo;The bite usually starts as a small red welt (1/8&rdquo; or so) or
        water-filled blister that itches. Once scratched, the welt can break open and
        bleed, but the itching usually continues. Allergic or sensitive individuals may
        develop long-lasting painful and itchy lesions.&rdquo;
      </p>
      <p>
        Position is a clue. The same source notes that{' '}
        <strong>&ldquo;the head and neck are often where bites occur&rdquo;</strong>, which
        is the opposite pattern to a chigger. A chigger is a larval mite that does not
        feed on blood and bites where clothing is tight &mdash; the ankles, waist and
        armpits &mdash; as set out with its own sources on{' '}
        <Link href="/us/chiggers">our chiggers page</Link>. A no-see-um is a fly that does
        feed on blood: UF/IFAS states that &ldquo;females of most species feed on
        vertebrate blood to obtain nutrients for egg development&rdquo;.
      </p>
      <p>
        <strong>
          No source consulted for this page compares a no-see-um bite with a mosquito
          bite, so this page does not make that comparison.
        </strong>{' '}
        What the sources do offer is the description above, the biting times, and the fact
        that the insect is usually never seen.
      </p>

      <h2 id="screens">Screens, and the Mesh Numbers</h2>
      <p>
        This is the part of the subject where the sources are unusually specific, and it
        is the reason this page exists.
      </p>
      <p>Ordinary screening does not exclude them:</p>
      <ul>
        <li>
          UF/IFAS Extension:{' '}
          <strong>
            &ldquo;regular window screens do not exclude biting midges from indoor
            areas&rdquo;
          </strong>
        </li>
        <li>
          University of Arizona Cooperative Extension: adult no-see-ums &ldquo;can easily
          pass through normal window screens&rdquo;
        </li>
        <li>
          University of Arizona Cooperative Extension, in a second publication:{' '}
          <strong>
            &ldquo;Owing to their minute size, no-see-ums can easily pass through ordinary
            insect screens on doors and windows, and will occasionally bite people
            indoors.&rdquo;
          </strong>
        </li>
      </ul>
      <p>Finer mesh does:</p>
      <ul>
        <li>
          UF/IFAS Extension: &ldquo;The openings of biting midge (no-see-um) screen are
          small enough to exclude biting midges&rdquo;
        </li>
        <li>
          Purdue Extension:{' '}
          <strong>
            &ldquo;window and door screens consisting of a mesh size smaller than normal
            window screen is much more effective in reducing bites&rdquo;
          </strong>
        </li>
      </ul>
      <p>
        And one source publishes the actual figures. University of Arizona Cooperative
        Extension states:
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-300 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">The mesh specification</p>
        <p className="m-0 mt-3 text-base text-blue-900">
          <strong>
            &ldquo;No-see-ums can pass through standard 16 x 16 or 18 x16 mesh screens, so
            replace these with smaller mesh (30 x 30) wherever possible. Inspect screens
            periodically and repair any rips or gaps.&rdquo;
          </strong>
        </p>
        <p className="m-0 mt-3 text-sm text-blue-900">
          Quoted exactly as published, including the source&rsquo;s own spacing in
          &ldquo;18 x16&rdquo;.
        </p>
      </div>
      <p>
        NC State Extension frames indoor entry differently, and both framings are reported
        here rather than one being chosen: &ldquo;Although screens on open windows are
        effective in keeping mosquitoes out, midges may find gaps or tears that allow them
        to enter homes.&rdquo; In practice the Arizona advice covers both, since it asks
        for finer mesh <em>and</em> for periodic inspection for rips and gaps.
      </p>
      <p>
        Arizona&rsquo;s other publication adds the alternatives if replacing screen is not
        possible: &ldquo;you can replace damaged screen with tighter mesh screen, consider
        treating existing screens with an approved insecticide such permethrin, or use
        fans to keep them from flying in your general vicinity.&rdquo;
      </p>

      <h2 id="screen-products">Screening: What Is Actually Available</h2>

      <div className="not-prose my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-amber-900">
          Read this before the three cards below
        </p>
        <p className="m-0 mt-3 text-base text-amber-900">
          The University of Arizona figure is <strong>30 x 30</strong> mesh.{' '}
          <strong>
            No 30 x 30 product could be confirmed for sale when the products on this page
            were checked on 24 August 2026.
          </strong>
        </p>
        <p className="m-0 mt-3 text-base text-amber-900">
          Every screening product below is <strong>20 x 20</strong>. That is finer than the
          16 x 16 and 18 x16 the source says they pass through, and it satisfies
          Purdue&rsquo;s description of a mesh size smaller than normal window screening.{' '}
          <strong>It is not the 30 x 30 the Arizona source names.</strong>
        </p>
        <p className="m-0 mt-3 text-base text-amber-900">
          That gap is stated here rather than left for a reader to discover. If the
          distinction matters for your situation, the number to look for on any product is
          the mesh count, and it is worth checking that a figure quoted in inches is a roll
          width and not a mesh count &mdash; the two are easy to confuse.
        </p>
      </div>

      <p>
        <strong>
          These are examples of the one product class the sources actually support, and
          they are in no order of preference. None is called better than another, because
          no source consulted for this page compares any two named products.
        </strong>{' '}
        All three carry their mesh count in their own product titles, which is the figure
        the sources make checkable.
      </p>

      <UsToolCard
        name="No-See-Um Small Insect Screen, 20 x 20 Mesh Roll, 36 inch x 25 feet"
        whatItDoes={[
          'A replacement screening roll whose own title states a 20 x 20 mesh count.',
          'University of Arizona Cooperative Extension states that no-see-ums can pass through standard 16 x 16 or 18 x16 mesh screens, so replace these with smaller mesh, 30 x 30, wherever possible. This product is finer than the standard that fails, and below the figure that source names.',
          'Purdue Extension states that window and door screens consisting of a mesh size smaller than normal window screen is much more effective in reducing bites.',
        ]}
        asin="B0BS4KH2FH"
      />

      <UsToolCard
        name="No-See-Um Small Insect Screen, 20 x 20 Mesh Roll, 36 inch x 100 feet"
        whatItDoes={[
          'The same 20 x 20 mesh in a longer roll, for larger openings or a porch.',
          'UF/IFAS Extension states that regular window screens do not exclude biting midges from indoor areas, and that the openings of biting midge, or no-see-um, screen are small enough to exclude biting midges.',
          'The Arizona source also asks for screens to be inspected periodically and any rips or gaps repaired, which applies to new screening as much as old.',
        ]}
        asin="B01N3BAPJO"
      />

      <UsToolCard
        name="No-Seeum 20x20 Window Screen Mesh, Heavy-Duty Roll"
        whatItDoes={[
          'A third 20 x 20 option, from a different manufacturer, for windows, doors, porches and patios.',
          'NC State Extension notes that midges may find gaps or tears that allow them to enter homes, so fit and condition matter alongside the mesh count.',
          'No source consulted for this page evaluates this or any other named screening product. The mesh count is the sourced criterion; the product is an example of it.',
        ]}
        asin="B0DNNY2KJX"
      />

      <h2 id="repellents">Repellents, and Why the Sources Disagree</h2>
      <p>
        <strong>
          Four extension publications address repellents against biting midges and they
          reach three different verdicts. Two of the four come from the same institution.
        </strong>{' '}
        This page reports the disagreement instead of picking the most convenient answer.
      </p>
      <ul>
        <li>
          <strong>UF/IFAS Extension:</strong> &ldquo;DEET-based repellents commonly used to
          protect humans from mosquitoes are also the main repellent used to repel biting
          midges&rdquo;.
        </li>
        <li>
          <strong>University of Arizona Cooperative Extension, Backyard Gardener #59:</strong>{' '}
          &ldquo;Insect repellents containing DEET typically used against mosquitoes are
          also labeled for use against biting midges, but seem to be only marginally
          effective in repelling them.&rdquo;
        </li>
        <li>
          <strong>Purdue Extension:</strong> &ldquo;Repellents containing DEET
          (diethytoluamide) and clothing impregnated with DEET or permethrin provide only
          limited protection.&rdquo;
        </li>
        <li>
          <strong>University of Arizona Cooperative Extension, second publication:</strong>{' '}
          &ldquo;Repellents effective against mosquitos are effective against biting
          midges.&rdquo;
        </li>
      </ul>
      <p>
        <em>
          The spellings &ldquo;diethytoluamide&rdquo; and &ldquo;mosquitos&rdquo; are the
          sources&rsquo; own and are reproduced as published.
        </em>
      </p>
      <p>
        UF/IFAS separately reports research on plant-derived alternatives against a named
        species: that &ldquo;essential oil from <em>Melaleuca ericifolia</em> has been shown
        to achieve 95% repelling efficacy&rdquo;, and that &ldquo;essential oils from lemon
        eucalyptus <em>Eucalyptus maculata</em> var. <em>citriodora</em> were up to 100%
        repellent against <em>Culicoides obsoletus</em>, performing even better than DEET,
        which showed 75% repellency&rdquo;. Those are research findings about specific oils
        against one species, not a recommendation to buy an essential-oil product, and this
        page does not convert them into one.
      </p>
      <p>
        <strong>How the two repellent cards below are sourced, stated plainly.</strong>{' '}
        Picaridin is not named against <em>Culicoides</em> by any source consulted. It
        reaches this page through a chain: one University of Arizona publication states
        that repellents effective against mosquitoes are effective against biting midges,
        and directs the reader to a second Arizona publication for which repellent to
        choose, which names picaridin among the EPA-registered active ingredients CDC
        recommends. That is an honest chain, and it is a chain rather than a direct finding
        about midges. The listings themselves make no no-see-um claim.
      </p>

      <UsToolCard
        name="Sawyer Products SP543 Premium Insect Repellent with 20% Picaridin, Pump Spray"
        whatItDoes={[
          'Picaridin is among the EPA-registered active ingredients named in the University of Arizona repellent publication this page relies on.',
          'That publication states that in general, repellents containing a higher percentage of the active ingredient typically provide longer-lasting protection.',
          'The four sources on this page disagree about how well repellents work against biting midges specifically. That disagreement is set out above and is not settled here.',
        ]}
        asin="B002CMQJYU"
      />

      <UsToolCard
        name="OFF! Deep Woods Max Insect Repellent, Mosquito &amp; Tick Aerosol with 20% Picaridin"
        whatItDoes={[
          'A second example of the same active ingredient, in an aerosol rather than a pump spray.',
          'Repellent product labels give specific use instructions that should be followed carefully, per the University of Arizona repellent publication.',
          'No source consulted for this page names picaridin against biting midges directly; the basis is the mosquito-equivalence chain described above.',
        ]}
        asin="B0G5VN3GB3"
      />

      <UsToolCard
        name="Sawyer Premium Permethrin Insect Repellent for Clothing, Gear &amp; Tents"
        whatItDoes={[
          'A permethrin treatment for fabric, not for skin.',
          'The University of Arizona repellent publication states that some repellents containing permethrin actually kill biting pests on contact, and a second Arizona publication suggests treating existing screens with an approved insecticide such as permethrin.',
          'Purdue Extension states that clothing impregnated with DEET or permethrin provides only limited protection. That limitation is part of the record and is stated here rather than omitted.',
        ]}
        asin="B001ANQVYU"
      />

      <p>
        Six products appear above and there is no seventh.{' '}
        <strong>No DEET product is listed</strong>, even though DEET is the ingredient most
        often named for this insect: no DEET listing could be sourced and confirmed
        available when the products on this page were checked on 24 August 2026, and
        nothing was substituted into the gap.
      </p>
      <p>
        Physical protection is also sourced and costs nothing to consider. University of
        Arizona Cooperative Extension states that &ldquo;The simplest strategy to prevent
        no-see-um bites is to wear long sleeve shirts, long pants, shoes and socks, and a
        hat during times when no-see-ums are most active. Choose lighter colored garments
        and consider hats with fine meshed netting.&rdquo; The same source notes that
        &ldquo;No-see-um-proof netting is also available and outdoor equipment companies
        market head nets, jackets, and pants made from this material.&rdquo;
      </p>

      <h2 id="boundaries">What the Sources Say Does Not Work</h2>
      <p>
        This is a subject where the honest answer to several popular questions is that the
        evidence is not there.
      </p>
      <p>
        <strong>Spraying for adults is temporary.</strong> NC State Extension states that
        &ldquo;Chemical controls (ULV, fogs, mists, and sprays) are only temporarily
        effective against adult biting midges&rdquo;. Purdue Extension states that
        &ldquo;Suppressing adult biting midges with insecticides has enjoyed limited
        success, and only under certain conditions&rdquo;, and that &ldquo;Control of biting
        midge larvae and adults is very difficult.&rdquo;
      </p>
      <p>
        <strong>Treating the larvae is not a homeowner job.</strong> NC State states that
        &ldquo;Control of immature biting midges is impractical in North Carolina.&rdquo;
        University of Arizona Cooperative Extension states that{' '}
        <strong>
          &ldquo;Management of larvae with insecticides is not a viable option due to their
          inaccessible and dispersed breeding sites.&rdquo;
        </strong>{' '}
        Where wider work is contemplated, NC State states that &ldquo;As with mosquito
        control, wide area control programs should be administered by professionals.&rdquo;
      </p>
      <p>
        <strong>Habitat modification is sourced, with one published null result.</strong>{' '}
        Arizona states that &ldquo;some reduction of breeding is possible through cultural
        practices that modify larval habitat&rdquo; and that &ldquo;Eliminating stagnant
        water rich in organic matter will help reduce biting midge breeding habitat&rdquo;,
        and its second publication advises that &ldquo;If high numbers of bites are
        observed, hold off irrigation in the vicinity and allow moist spots to drain and
        dry. This will kill eggs and larvae.&rdquo; Against that, UF/IFAS reports that
        &ldquo;no difference on the adult <em>Culicoides sonorensis</em> population was
        found after removing the ponds, despite the elimination of what is thought to be
        the main developmental site&rdquo;, and notes that &ldquo;The practicality of
        habitat modification to control biting midges may be limited by the implementation
        cost&rdquo;. All three are reported.
      </p>
      <p>
        <strong>
          There are no trap products on this page, and that is a deliberate outcome.
        </strong>{' '}
        Purdue Extension&rsquo;s biting midge page was checked specifically for statements
        about traps, carbon dioxide traps, light traps and bug zappers, and it contains
        none. No other source consulted recommends a trap for biting midge control. With
        nothing at extension grade to set against manufacturer marketing, no trap product
        was looked at and none appears here.
      </p>
      <p>
        One low-technology measure is sourced, and it is cheap: Arizona suggests you
        &ldquo;use fans to keep them from flying in your general vicinity.&rdquo; The same
        source notes that mosquito dunks releasing <em>Bacillus thuringiensis</em>
        &ldquo;may also reduce numbers of these pests&rdquo; in water features, birdbaths
        and livestock water troughs &mdash; note both the hedge and the narrow scope.
      </p>

      <h2 id="bites">Treating the Bites</h2>
      <div className="not-prose my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-red-900">Where this page stops</p>
        <p className="m-0 mt-3 text-base text-red-900">
          University of Arizona Cooperative Extension states that &ldquo;Bite treatments
          recommended by some dermatologists include topical cortisone creams and
          non-steroidal anti-inflammatory drugs such as aspirin or ibuprofen. Persons
          having severe reactions should consult a physician or dermatologist.&rdquo;
        </p>
        <p className="m-0 mt-3 text-base text-red-900">
          Its second publication states that &ldquo;Over-the-counter topical cortisone
          creams usually provide relief from itching. Over-the-counter anti-inflammatory
          medication may be required if there is pain or swelling. For more severe
          reactions, medical help should be sought from a dermatologist or
          physician.&rdquo;
        </p>
        <p className="m-0 mt-3 text-base text-red-900">
          <strong>
            Both sources refer severe reactions onward to a doctor. Nothing on this page is
            medical advice, and no bite-treatment product is sold here.
          </strong>
        </p>
      </div>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the eight publications below:
        six university extension documents, one Centers for Disease Control and Prevention
        page, and one peer-reviewed paper used only to establish the family name of the
        unrelated sand flies that carry leishmaniasis. Where sources give different figures
        for the same thing, each is quoted with the source that published it rather than
        merged, and where four sources disagree about repellents that disagreement is set
        out in full. The product names above were read from each product&rsquo;s own listing
        on 24 August 2026 and are recorded rather than assessed; the listings read were
        B0BS4KH2FH, B01N3BAPJO, B0DNNY2KJX, B002CMQJYU, B0G5VN3GB3 and B001ANQVYU. Each is
        reachable from its own card above, where the disclosure sits directly beside the
        link, and they are named here rather than linked again so that every link to a
        product on this page carries its disclosure. Framing and ordering are our own
        judgement and are not a finding of any source.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
