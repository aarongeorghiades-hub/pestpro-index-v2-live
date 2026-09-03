import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { MVG_NAV, MVG_HOME } from '../components/moleVoleGopherNav';

const URL = 'https://pestproindex.com/us/moles-voles-gophers';
const TITLE = 'Mole, Vole or Gopher? Tell Them Apart by the Sign';
const DESCRIPTION =
  'Three animals leave three different marks on a lawn. What extension services say about the mound, the tunnel and the damage each makes, including where they disagree.';

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
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Moles, Voles and Gophers',
      item: 'https://pestproindex.com/us/moles-voles-gophers',
    },
    { '@type': 'ListItem', position: 2, name: 'Moles, Voles and Gophers', item: URL },
  ],
};

type SignRow = {
  sign: string;
  mole: string;
  vole: string;
  gopher: string;
};

const signRows: SignRow[] = [
  {
    sign: 'Is it a rodent?',
    mole: 'No. An insect-eating mammal (S1, S7, S9)',
    vole: 'Yes, a mouselike rodent (S2)',
    gopher: 'Yes, a burrowing rodent (S3, S9, S11)',
  },
  {
    sign: 'Mound shape',
    mole: 'Volcano, conical or circular (S1, S4, S5, S10, S11)',
    vole: 'Builds no mound at all (S2, S9)',
    gopher: 'Crescent, horseshoe or fan (S3, S4, S7, S8, S9, S10)',
  },
  {
    sign: 'Mound size',
    mole: 'Usually under 1 foot across (S11)',
    vole: 'Not applicable',
    gopher: 'Greater than 1 foot across (S11)',
  },
  {
    sign: 'Where the plug sits',
    mole: 'Center of the mound, or not visible (S3, S8, S9)',
    vole: 'Not applicable',
    gopher: 'SOURCES DISAGREE: off to one side (S3, S7, S8) or on the edge (S9); Iowa State says in the middle (S10)',
  },
  {
    sign: 'Mound soil',
    mole: 'Clumpier than a gopher mound (S8)',
    vole: 'Not applicable',
    gopher: 'Less clumpy than a mole mound (S8)',
  },
  {
    sign: 'Tunnel the soil is pushed from',
    mole: 'A vertical tunnel (S11)',
    vole: 'Not applicable',
    gopher: 'An inclined tunnel (S11)',
  },
  {
    sign: 'Raised surface ridge',
    mole: 'Yes, the characteristic sign (S1, S3, S8, S10, S11)',
    vole: 'A surface runway rather than a ridge (S10)',
    gopher: 'No raised surface ridge; the contrast is drawn by S3 itself (S3)',
  },
  {
    sign: 'Open hole you can see',
    mole: 'No, mounds have no entrance or exit hole (S10)',
    vole: 'Yes, open holes 1 to 2 inches (S6), openings 1½ to 2 inches (S2)',
    gopher: 'No, the hole is plugged (S3, S6, S7)',
  },
  {
    sign: 'Burrow diameter',
    mole: 'About 2 inches, 8 to 12 inches deep (S1)',
    vole: 'Openings 1½ to 2 inches (S2)',
    gopher: '2½ to 3½ inches (S3)',
  },
  {
    sign: 'Does it eat plants?',
    mole: 'Seldom; damage is from tunneling (S1, S10, S11)',
    vole: 'Yes, herbivore (S2, S7)',
    gopher: 'Yes, roots, bulbs and whole plants (S4, S9)',
  },
  {
    sign: 'Gnawed bark or girdling',
    mole: 'Not attributed to a mole by any source read',
    vole: 'Yes, aboveground (S2, S8)',
    gopher: 'Yes, belowground (S3, S8)',
  },
  {
    sign: 'Grass clippings along a path',
    mole: 'Not attributed',
    vole: 'Yes, with greenish droppings about 3/16 inch (S2, S8)',
    gopher: 'Not attributed',
  },
  {
    sign: 'A plant suddenly vanishes or wilts',
    mole: 'Not attributed',
    vole: 'Wilting and missing bulbs (S7)',
    gopher: 'Yes, a hallmark (S4, S5, S6)',
  },
  {
    sign: 'Earthen cores after snowmelt',
    mole: 'Not attributed',
    vole: 'Burrows through snow to the surface (S2)',
    gopher: 'Yes, called eskers (S3, S6, S9)',
  },
  {
    sign: 'Busiest time',
    mole: 'May to June, and after rain (S10, S11)',
    vole: 'Winter, under snow (S2, S6)',
    gopher: 'Winter and spring in dry ground, year round if irrigated (S3)',
  },
];

const faqs: Faq[] = [
  {
    question: 'Is a mole a rodent?',
    answer:
      'No. UC IPM states that, contrary to popular belief, moles are not part of the rodent family, and identifies the mole as Scapanus species, a small insect-eating mammal. UC ANR puts it the same way: moles are mammals, not rodents, eating worms, ants and grubs. The University of Wyoming classifies them as insectivores. Voles and pocket gophers are both rodents, which is why they gnaw and a mole does not.',
  },
  {
    question: 'Which of the three makes no mound?',
    answer:
      'The vole. The University of Wyoming states that voles do not create tunnels, but rather runways or tracks that are open. UC IPM draws the same contrast from the other side, describing open burrow entrances compared to closed pocket gopher mounds. That absence is the most useful single test on this page: the other two animals are identified by the mound they build, and the vole is identified by not building one.',
  },
  {
    question: 'Where is the plug on a pocket gopher mound?',
    answer:
      'The sources disagree, and this page does not pick a side. UC IPM describes mounds of loose dirt that are half circles with a plugged hole off to one side, UC ANR says a hole off to the side and usually plugged, and the University of Wyoming puts the entrance plug on the edge. Iowa State University Extension says the opposite: crescent-shaped mounds which often have a 1 to 3 inch wide plug in the middle. In the middle is where the first three sources place a mole plug, so the disagreement sits exactly on the pivot of the test. Shape and size are the parts nobody disputes.',
  },
  {
    question: 'What is an esker?',
    answer:
      'A tube of soil left on the surface after snow melts. UC IPM states that in snowy regions gophers create burrows in the snow, resulting in long, earthen cores on the surface when the snow melts. PlantTalk Colorado calls them eskers, solid tubes of soil above ground when the snow melts in the spring, and the University of Wyoming gives the same name for soil-filled tunnels seen above ground.',
  },
  {
    question: 'How do I tell mole damage from vole damage on a lawn?',
    answer:
      'Look for whether the path is above the grass or under it. UC IPM states that mole surface tunnels appear as ridges the mole pushes up by forcing its way through the soil, and Iowa State University Extension contrasts that directly: meadow voles make narrow runways along the surface of grassed sites, which differ from mole runways beneath the soil surface. PlantTalk Colorado gives the vole runway as 1 to 2 inches wide through matted grass with open 1 to 2 inch holes. UC IPM adds that fresh clippings of green grass and greenish droppings about 3/16 inch long appear in vole runways.',
  },
  {
    question: 'Something is chewing the bark on my tree. Which animal is it?',
    answer:
      'Not a mole. No source read for this page attributes gnawing or girdling to a mole. UC ANR gives the cleanest split between the other two: voles can girdle trees aboveground while gophers girdle trees belowground. UC IPM defines girdling as gnawing completely around the trunk or roots, disrupting the flow of nutrients and water, and notes that most gopher girdling damage to trunks and large roots occurs belowground. On mark size the sources differ: UC IPM gives vole gnaw marks about 1/8 inch wide and 3/8 inch long, while PlantTalk Colorado gives about 1/16 to 1/8 inch wide.',
  },
  {
    question: 'Do any of the three stop over winter?',
    answer:
      'None of them. UC IPM states that moles are active throughout the year, that voles are active day and night year-round, and that gophers do not hibernate and are active year-round. Iowa State University Extension states that moles do not hibernate. What changes is when each is most obvious: UNL Extension puts mole burrowing at its peak May through June, PlantTalk Colorado states that most vole damage occurs in winter when they move through grass runways under the protection of snow, and UC IPM states that gopher mound building is most pronounced during winter or spring in ground that is not irrigated.',
  },
];

const sources: Source[] = [
  {
    label: 'Moles — Pest Notes, Home and Landscape (S1)',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 22 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/moles/',
  },
  {
    label: 'Voles (Meadow Mice) — Pest Notes 7439 (S2)',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 22 August 2026',
    href: 'https://ipm.ucanr.edu/PMG/PESTNOTES/pn7439.html',
  },
  {
    label: 'Pocket Gophers — Pest Notes, Home and Landscape (S3)',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 22 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/pocket-gophers/',
  },
  {
    label: 'How to identify and manage moles, voles and gophers in gardens (S4)',
    publisher: 'OSU Extension Service',
    date: 'Accessed 22 August 2026',
    href: 'https://extension.oregonstate.edu/news/how-identify-manage-moles-voles-gophers-oregon-gardens',
  },
  {
    label: 'Moles, voles and gophers dig the garden — UNIVERSITY NEWS ITEM, not a peer-reviewed publication (S5)',
    publisher: 'OSU Newsroom',
    date: 'Accessed 22 August 2026',
    href: 'https://news.oregonstate.edu/news/moles-voles-and-gophers-dig-garden',
  },
  {
    label: 'Difference between vole damage and pocket gopher damage (S6)',
    publisher: 'PlantTalk Colorado, Colorado State University',
    date: 'Accessed 22 August 2026',
    href: 'https://planttalk.colostate.edu/topics/wildlife-issues/2310-difference-voles-damage-pocket-gopher-damage/',
  },
  {
    label: 'Serious Garden Pests: Voles, Moles, and Gophers — BLOG ARTICLE, not a peer-reviewed publication (S7)',
    publisher: 'UC ANR, The Real Dirt',
    date: 'Accessed 22 August 2026',
    href: 'https://ucanr.edu/blog/real-dirt/article/serious-garden-pests-voles-moles-and-gophers-0',
  },
  {
    label: 'FAQ: Moles, Voles and Gophers — BLOG ARTICLE, not a peer-reviewed publication (S8)',
    publisher: 'UC ANR, Pests in the Urban Landscape',
    date: 'Accessed 22 August 2026',
    href: 'https://ucanr.edu/blog/pests-urban-landscape/article/faq-moles-voles-gophers',
  },
  {
    label: 'Correctly identifying landscape pests is critical, Barnyards and Backyards (S9)',
    publisher: 'University of Wyoming Extension',
    date: 'Accessed 22 August 2026',
    href: 'https://www.uwyo.edu/barnbackyard/_files/documents/magazine/2019/fall/0919gopherid.pdf',
  },
  {
    label: 'Moles: Damage Management (S10)',
    publisher: 'Iowa State University Extension, Natural Resources',
    date: 'Accessed 22 August 2026',
    href: 'https://naturalresources.extension.iastate.edu/encyclopedia/moles-damage-management',
  },
  {
    label: 'Moles and Their Control, G1538 (S11)',
    publisher: 'UNL Extension, University of Nebraska–Lincoln',
    date: 'Accessed 22 August 2026',
    href: 'https://extensionpubs.unl.edu/publication/g1538/na/html/view',
  },
];

const tocItems = [
  { id: 'the-three', title: 'The Three Animals' },
  { id: 'mound', title: 'The Mound Test' },
  { id: 'tunnel', title: 'The Tunnel and Runway Test' },
  { id: 'plants', title: 'The Plant Damage Test' },
  { id: 'season', title: 'When Each Is Busiest' },
  { id: 'table', title: 'Sign by Sign' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function MolesVolesGophersPage() {
  return (
    <UsPageLayout
      title="Mole, Vole or Pocket Gopher?"
      subtitle="Three animals, three different marks on a yard. This page is about telling which one you have from what it left behind, and about being honest where the extension services do not agree with each other."
      lastUpdated="August 2026"
      readingTime="9 min"
      tocItems={tocItems}
      homeHref={MVG_HOME}
      clusterNav={MVG_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Three different animals are blamed for the same yard, and the three leave signs that are not
        much alike once you know what separates them. This page sets out what university extension
        services say about each sign. It answers one question &mdash; which animal made the mark
        &mdash; and it stops there.
      </p>

      <h2 id="the-three">The Three Animals</h2>
      <p>
        <strong>The first split is not about damage at all. Two of the three are rodents and one is
        not.</strong> UC IPM states that, contrary to popular belief, moles are not part of the
        rodent family, and identifies the mole as <em>Scapanus</em> species, a small insect-eating
        mammal. UC ANR says the same: moles are mammals, not rodents, eating worms, ants and grubs.
        The University of Wyoming classifies moles as insectivores. By contrast UC IPM describes
        voles as mouselike rodents somewhat similar in appearance to gophers, and pocket gophers,{' '}
        <em>Thomomys</em> species, as burrowing rodents that get their name from the fur-lined,
        external cheek pouches they use for carrying food and nesting materials. UNL Extension puts
        the consequence plainly: gophers are rodents and have large incisors, like squirrels and
        mice, that they use to gnaw on the taproots of plants.
      </p>
      <h3>Size, as each source gives it</h3>
      <ul>
        <li>
          <strong>Mole.</strong> UNL Extension gives 4 to 6½ inches long, not including the short
          tail. UC ANR gives five to seven inches. The University of Wyoming gives 4 to 6 inches and
          calls them slightly smaller than pocket gophers. UNL Extension gives the weight as 3 to 5
          ounces. The three length figures are reported as stated; only UNL Extension says whether
          the tail is included.
        </li>
        <li>
          <strong>Vole.</strong> UC IPM gives 5 to 8 inches long including the tail. UC ANR gives
          three to nine inches depending on the species. The University of Wyoming gives 5 to 10
          inches, with small eyes and ears and a short tail. Three ranges, none preferred here.
        </li>
        <li>
          <strong>Pocket gopher.</strong> UC IPM gives 6 to 10 inches long including the short tail,
          and UC ANR agrees at six to ten inches, calling them larger than either moles or voles. OSU
          Extension Service compares them to the size of ground squirrels.
        </li>
      </ul>
      <h3>What each one eats</h3>
      <ul>
        <li>
          <strong>Mole.</strong> UC IPM states that the mole&rsquo;s main diet consists of earthworms
          and insects. Iowa State University Extension describes moles as predators that use their
          exceptional sense of touch to capture invertebrates. The University of Wyoming states they
          can consume 70 to 100 percent of their body weight in insects, larvae and worms each day.
          UNL Extension states that moles seldom eat roots, bulbs, or other plant materials, and that
          plant parts are eaten only occasionally.
        </li>
        <li>
          <strong>Vole.</strong> UC IPM states that voles are mostly herbivorous, feeding on a
          variety of grasses, herbaceous plants, bulbs, and tubers. UC ANR states that voles are
          herbivores that gnaw on the bark of trees and shrubs, or simply eat the roots.
        </li>
        <li>
          <strong>Pocket gopher.</strong> OSU Extension Service states that gophers favor bulbs and
          roots and will even eat whole plants. The University of Wyoming states that pocket gophers
          are rodents that feed on roots and vegetation.
        </li>
      </ul>
      <p>
        One sentence from UC ANR is worth quoting because it is a fact about diet that doubles as a
        check on identification:{' '}
        <em>
          &ldquo;Treating the soil with an insecticide would have no impact on gophers or voles
          because they feed on plant material, not insects.&rdquo;
        </em>{' '}
        Two of the three do not eat insects at all.
      </p>

      <h2 id="mound">The Mound Test</h2>
      <p>
        <strong>This page identifies; it does not treat.</strong> Once the sign has told you which
        of the three you have, <Link href="/us/mole-and-vole-control">our mole and vole control
        page</Link> is where the trapping, the baiting and the sourced limits on each live. The two
        pages are kept apart on purpose so that neither repeats the other.
      </p>
      <p>
        <strong>Start with the vole, because the vole settles itself.</strong> The University of
        Wyoming states that voles do not create tunnels, but rather runways or tracks that are open.
        UC IPM draws the same line from the other direction, contrasting open burrow entrances with
        closed pocket gopher mounds. If there is a mound, it is not a vole.
      </p>
      <h3>Mole mounds</h3>
      <ul>
        <li>
          Iowa State University Extension describes volcano-shaped mounds of soil with no entrance or
          exit holes, pushed up from deep below the soil surface.
        </li>
        <li>
          OSU Extension Service states that mole mounds are volcanic and rounded, and the OSU
          newsroom item gives the same, a volcanic, rounded shape.
        </li>
        <li>
          UNL Extension states that moles build small, conical-shaped mounds, usually less than 1
          foot in diameter, by pushing soil out of vertical tunnels.
        </li>
        <li>
          UC IPM states that the margin tends to be circular, and UC ANR that mole mound margins tend
          to be circular.
        </li>
        <li>UC ANR states that the soil of mole mounds tends to be clumpier than gophers.</li>
      </ul>
      <h3>Pocket gopher mounds</h3>
      <ul>
        <li>
          UC IPM states that mounds are typically crescent- or horse-shoe-shaped when viewed from
          above. UC ANR gives crescent, horseshoe, or fan-shaped. Iowa State University Extension
          gives large, crescent-shaped dirt mounds. The University of Wyoming gives horseshoe-shaped.
        </li>
        <li>
          OSU Extension Service and the OSU newsroom item both describe them as flatter on top,
          fan-shaped with the hole off to the side.
        </li>
        <li>
          UNL Extension states that gophers build relatively large, fan-shaped mounds, greater than 1
          foot in diameter, by pushing soil out of inclined tunnels.
        </li>
        <li>
          PlantTalk Colorado states that the mounds usually have closed entrances, and describes
          mounds of soil with no apparent hole.
        </li>
      </ul>
      <p>
        <strong>Now the part where the sources do not agree, and it falls on the exact detail most
        often quoted.</strong> UC IPM describes mounds of loose dirt that are half circles with a
        plugged hole that is off to one side of the mound. UC ANR gives a hole that is off to the
        side and usually plugged. The University of Wyoming puts the entrance plug on the edge.{' '}
        <strong>
          Iowa State University Extension says the opposite: crescent-shaped dirt mounds which often
          have a 1 to 3 inch wide plug in the middle.
        </strong>{' '}
        The middle is precisely where UC IPM, UC ANR and the University of Wyoming place the plug of
        a <em>mole</em> mound. <strong>This page does not pick a side.</strong> Four sources say off
        to one side or on the edge, one says in the middle, and a reader standing over a mound should
        know that before relying on the plug alone.
      </p>
      <p>
        There is a second reason not to lean on any single feature. PlantTalk Colorado describes
        gopher mounds as fan-shaped <em>to round</em>, and round is the word every other source uses
        for a mole. <strong>The tests that no source disputes are the shape family &mdash; crescent,
        horseshoe or fan against volcano, conical or circular &mdash; and the size</strong>, where
        UNL Extension separates them cleanly at about a foot across.
      </p>

      <h2 id="tunnel">The Tunnel and Runway Test</h2>
      <h3>Mole</h3>
      <ul>
        <li>
          UC IPM states that surface tunnels appear as ridges that the mole pushes up by forcing its
          way through the soil. UNL Extension states that burrows occur when moles search for food
          near the surface, causing the soil to be raised in ridges. Iowa State University Extension
          describes raised linear ridges of soil running through the grass of lawns. UC ANR notes a
          raised soil ridge above a mole feeding tunnel.
        </li>
        <li>
          UC IPM makes the contrast itself: unlike gophers, moles commonly make feeding burrows just
          beneath the surface, leaving a raised ridge to mark their path.
        </li>
        <li>
          Iowa State University Extension states that soil around ridges and mounds feels soft and
          spongy, and that mounds and ridges are most common in the shaded portions of lawns.
        </li>
        <li>
          UC IPM states that more permanent tunnels are deeper underground and are usually about 2
          inches in diameter and 8 to 12 inches below the surface, and that you will find only one
          mole per tunnel.
        </li>
      </ul>
      <h3>Vole</h3>
      <ul>
        <li>
          UC IPM states that the clearest sign of their presence are their well-traveled runways that
          connect burrow openings, and UC ANR gives the same: look for aboveground runways that
          connect burrow openings.
        </li>
        <li>
          UC IPM states that a protective layer of grass or other ground cover usually hides the
          runways; UC ANR states that grass usually covers the burrows.
        </li>
        <li>
          PlantTalk Colorado gives 1 to 2 inch wide runways through matted grass with open 1 to 2
          inch holes and spongy soil. UC IPM gives burrow openings each about 1½ to 2 inches in
          diameter.
        </li>
        <li>
          UC IPM states that fresh clippings of green grass and greenish-colored droppings about 3/16
          inch long appear in the runways and near the burrows. UC ANR says to look for fresh grass
          clippings and fecal pellets around burrow entrances and along runways.
        </li>
        <li>
          Iowa State University Extension draws the line with the mole directly: meadow voles make
          narrow runways along the surface of grassed sites, which differ from mole runways beneath
          the soil surface.
        </li>
      </ul>
      <h3>Pocket gopher</h3>
      <ul>
        <li>
          No raised surface ridge. UC IPM makes the point by contrast, describing the mole&rsquo;s
          shallow feeding burrows as unlike a gopher&rsquo;s.
        </li>
        <li>UC IPM states that the burrows are about 2½ to 3½ inches in diameter.</li>
        <li>
          <strong>Eskers.</strong> UC IPM states that in snowy regions, gophers create burrows in the
          snow, resulting in long, earthen cores on the surface when the snow melts. PlantTalk
          Colorado names them eskers, solid tubes of soil above ground when the snow melts in the
          spring. The University of Wyoming gives the same name for soil-filled tunnels seen above
          ground.
        </li>
        <li>
          UC IPM states that a single gopher can create several mounds a day, and that fresh mounds
          are the sign of an active gopher. The University of Wyoming notes a burrow system that may
          involve 200 yards of tunnels below the soil surface.
        </li>
      </ul>

      <h2 id="plants">The Plant Damage Test</h2>
      <p>
        <strong>The mole is the odd one out, and the reason is its diet.</strong> Iowa State
        University Extension states that the damage caused by moles is primarily the result of
        tunneling, not the direct consumption of plants. UC IPM states that by far the greatest
        damage from moles occurs through their burrowing activity, which dislodges plants and dries
        out their roots. UNL Extension states that mounds and surface burrows interfere with mowing
        and that the activities of moles may disturb root systems and kill grass.{' '}
        <strong>No source read for this page attributes gnawing or girdling to a mole.</strong>
      </p>
      <p>
        For the two rodents, UC ANR gives the cleanest single sentence on the page:{' '}
        <em>&ldquo;Voles can girdle trees aboveground while gophers girdle trees belowground.&rdquo;</em>
      </p>
      <ul>
        <li>
          <strong>Vole.</strong> UC IPM defines the term: if voles gnaw completely around the trunk
          or roots, it will disrupt the tree&rsquo;s flow of nutrients and water, a process known as
          girdling, and girdling damage on trunks and roots can kill trees. It states that voles eat
          bark and roots of trees usually in fall or winter. UC ANR lists yellowed and wilting
          plants, missing bulbs, and teeth marks around the bottom of trees and shrubs.
        </li>
        <li>
          <strong>Vole gnaw marks, where the two figures differ.</strong> UC IPM gives marks about
          1/8 inch wide and 3/8 inch long, in irregular patches and at various angles. PlantTalk
          Colorado gives about 1/16 to 1/8 inch wide. Both are reported as their sources state them
          and neither is preferred.
        </li>
        <li>
          <strong>Pocket gopher.</strong> UC IPM states that most girdling damage to trunks and large
          roots occurs belowground, and that in snow-covered regions gophers can feed on bark several
          feet up a tree by burrowing through the snow. PlantTalk Colorado gives suddenly wilting
          plants due to root damage as a main sign. OSU Extension Service and the OSU newsroom item
          both quote the same rule of thumb: if you see a plant disappear, it is a gopher. UC IPM and
          UC ANR both note gnawing damage to irrigation lines and drip tubing.
        </li>
      </ul>

      <h2 id="season">When Each Is Busiest</h2>
      <p>
        None of the three stops for winter. UC IPM states that moles are active throughout the year,
        that voles are active day and night year-round, and that gophers do not hibernate and are
        active year-round, at all hours of the day and night. Iowa State University Extension states
        that moles do not hibernate. UC ANR states that voles are active both day and night and do
        not hibernate. PlantTalk Colorado states that voles remain active all year round.
      </p>
      <ul>
        <li>
          <strong>Mole.</strong> UNL Extension states they burrow year-round, peaking May through
          June. Iowa State University Extension states that rainy days during late spring and summer
          usually trigger the greatest level of activity. UC IPM notes that surface activity slows or
          is absent during periods of extreme cold, heat, or drought.
        </li>
        <li>
          <strong>Vole.</strong> PlantTalk Colorado states that most damage occurs in the winter when
          voles move through their grass runways under the protection of snow. UC IPM states that in
          areas with winter snow, voles will burrow in and through the snow to the surface.
        </li>
        <li>
          <strong>Pocket gopher.</strong> UC IPM states that in ground that is not irrigated, mound
          building is most pronounced during winter or spring when the soil is moist and easy to dig,
          and that in irrigated areas digging conditions are usually optimal year-round, so mounds
          can appear at any time.
        </li>
      </ul>

      <h2 id="table">Sign by Sign</h2>
      <p>
        Each cell carries the source numbers it rests on. The numbers match the list at the foot of
        the page.
      </p>
      <div className="not-prose my-8">
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm border-collapse">
            <caption className="sr-only">
              Mole, vole and pocket gopher compared sign by sign, with the source for each cell.
            </caption>
            <thead>
              <tr className="bg-gray-50 text-left">
                <th scope="col" className="px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                  Sign
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                  Mole
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                  Vole
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                  Pocket gopher
                </th>
              </tr>
            </thead>
            <tbody>
              {signRows.map((row) => (
                <tr key={row.sign} className="align-top border-b border-gray-100 last:border-0">
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-900 text-left">
                    {row.sign}
                  </th>
                  <td className="px-4 py-3 text-gray-700">{row.mole}</td>
                  <td className="px-4 py-3 text-gray-700">{row.vole}</td>
                  <td className="px-4 py-3 text-gray-700">{row.gopher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Mole, vole and pocket gopher compared sign by sign, with the source for each cell.
        </p>
      </div>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <p>
        <strong>One animal is deliberately absent from every row above.</strong> A groundhog digs
        an entrance Penn State Extension gives as 10 to 12 inches across, which is wider than
        anything on this page, and it is the only burrowing animal in this estate that two sources
        connect to a building foundation. If the hole is that big, the table above is the wrong
        table &mdash; our <Link href="/us/groundhogs">groundhogs page</Link> covers it, including
        the state-by-state legal position, which none of these three animals carries.
      </p>

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or in
        the text immediately adjacent to it, and every source named is listed below. Where sources
        give different figures for the same measurement, or place the same feature differently, all
        are reported and attributed rather than reconciled. Framing and ordering are our own
        judgment and are not a finding of any source.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
