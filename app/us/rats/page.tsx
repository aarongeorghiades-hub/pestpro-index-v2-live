import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { RATS_NAV, RATS_HOME } from '../components/ratsNav';

const URL = 'https://pestproindex.com/us/rats';
const TITLE = 'Rats: Identification and the Two Gap Figures';
const DESCRIPTION =
  'Norway rat vs. roof rat, and both vs. a mouse. The half-inch a rat can squeeze through against the quarter-inch sources say to seal to, from eight sources.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Rats', item: URL }],
};

// ---------------------------------------------------------------------------
// TIER 4 HEAD #11 OF 11 — CLOSES THE TIER (Law 158/159, CLAUDE.md). Eight
// sources were read in full: UC IPM Pest Notes 74106 (Rats), Oregon State's
// solvepest Rats page, the Internet Center for Wildlife Damage Management's
// Norway Rat page, Nebraska Extension G1737, the UC ANR snap-trap blog
// article, University of Illinois Extension's Norway Rat page, the National
// Pesticide Information Center's Rats page, and Cornell CALS's Managing Mice
// and Rats. CDC's rodent-control page was attempted and returned HTTP 403 on
// the first try; per S45-D and Law 137, it is not cited and was not retried.
//
// SCOPE, PM RULING FOR THIS ROUND. Identification and telling rats from mice;
// signs of infestation; where they nest and how they enter; exclusion and
// structural proofing; trapping and control; sanitation and food storage; and
// when to call a professional. NO SOURCED TREATMENT OF RODENT-BORNE ILLNESS.
// One short paragraph names the CDC and points there; nothing is enumerated.
// Every source fetched for this page carries disease content beyond that
// boundary, and each is recorded here rather than silently trimmed:
//   - UC IPM Pest Notes 74106: one paragraph naming typhus, leptospirosis,
//     foodborne pathogens, rat bite fever, plague and rabies status — not
//     quoted, not enumerated, out of scope.
//   - Illinois Extension: two paragraphs naming Seoul virus, hepatitis E,
//     Leptospira, Bartonella, Rickettsia, endo/ectoparasites, and Yersinia
//     pestis/bubonic plague — out of scope. Only its identification and
//     management summary paragraphs are used.
//   - Oregon State: a "Risk Card" naming murine typhus, leptospirosis,
//     salmonellosis and rat bite fever — out of scope. Its identification,
//     signs-of-activity and exclusion content is used; its disease risk card
//     is not.
//   - Nebraska G1737: one clause, "and disease-carrying rats" / "transmitting
//     diseases to livestock and humans" — named in passing in its own intro,
//     not developed into a list; not quoted here.
//
// THE ROUTE NAME NEEDED NO SPECIES EXCLUSION, UNLIKE HOUSE-MICE. Every source
// treats "rats" as one subject covering both commensal species present in the
// US — Norway rat and roof rat — and titles itself accordingly. See
// ratsNav.ts for the full reasoning.
//
// TWO GAP FIGURES, NEVER MERGED. UC IPM and Nebraska Extension each state,
// independently and in the SAME document, two different figures answering
// two different questions: what a rat can physically squeeze through (1/2
// inch, a biological fact) and the stricter standard three sources give for
// what to actually seal against, framed as excluding both rats and mice at
// once (1/4 inch). ICWDM gives a third figure, 1/2 inch, framed as its own
// single rat-specific sealing standard, not merged with the others. Oregon
// State gives 1/4 inch framed only for rats. All four are reported with their
// own framing; none is resolved into the others.
//
// A PDF EXTRACTION ARTIFACT WAS FOUND, THREE TIMES, AND CORRECTED SILENTLY.
// UC IPM's PDF, extracted with poppler's raw mode, inserts a stray space
// before closing punctuation at three points this page quotes: "building
// them out ." "trapped ." and "chicken\nwire” ,". In each case the quote on
// this page ends or continues cleanly at the word, with the spurious space
// removed and never presented as part of the verbatim text — the artifact is
// a rendering quirk of this one PDF's line-break handling, not a character
// UC IPM published. This matches the house-mice precedent of not presenting
// a reconstructed span as a verbatim quotation.
//
// CARDS. S60 R7: twenty product ASINs were attempted across three classes
// the sources describe as purchasable — rat-sized snap traps, tamper-
// resistant bait stations, and galvanized hardware cloth at the 1/4-inch or
// 1/2-inch mesh the sources specify. Seventeen returned an anti-bot
// interstitial on the first attempt and were not retried that round, per
// Law 137. Three returned a real product page and were carded: two snap
// traps and one bait station.
//
// S60 R9: the diagnosis round (~/pestpro-s60-r9-report.md) found no shared,
// fixable cause behind the interstitials — the evidence supports Amazon's
// own automated-traffic detection, not a defect in this estate's fetch
// method, and nothing in the rules permits pacing, retrying within a round,
// or changing headers to raise the success rate. What IS within the rules,
// per Law 137's own text ("the next round may try once more"), is a single
// fresh attempt per URL in a new round. All seventeen previously-blocked
// URLs were attempted again this round: sixteen returned a real product
// page, one (a bait station) had been delisted and returned a genuine HTTP
// 404. Of the sixteen, one hardware cloth listing was carded — the one
// class with nothing carded before. The rest repeated a mechanism or
// criterion match already carded and were not added, to avoid padding.
// ---------------------------------------------------------------------------

const tocItems = [
  { id: 'which-rat', title: 'Which Rat? Norway, Roof, and Telling a Rat From a Mouse' },
  { id: 'trapping', title: 'Trapping and Control Methods' },
  { id: 'signs', title: 'Signs of an Infestation' },
  { id: 'nesting-entry', title: 'Where They Nest and How They Enter' },
  { id: 'exclusion', title: 'Exclusion: Two Figures, Two Questions' },
  { id: 'tools', title: 'Tools That Meet the Sources’ Own Criteria' },
  { id: 'sanitation', title: 'Sanitation and Food Storage' },
  { id: 'professional', title: 'When the Sources Say to Call a Professional' },
  { id: 'disease', title: 'Rodent-Borne Illness: What This Page Does Not Cover' },
  { id: 'not-here', title: 'What This Page Does Not Carry' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const products = [
  {
    asin: 'B00DLKKT1Q',
    cardName: 'JT Eaton Bigfoot Rat Snap Trap with Expanded Trigger, 12-Pack',
    whatItDoes: [
      'Its own text states the mechanism UC IPM and ICWDM both recommend: "EXPANDED TRIGGER: Features an extended trigger with adjustable sensitivity for more precise trapping"',
      'Its own text states construction sized for rats specifically: "STRONG AND DURABLE: Built with a sturdy wooden frame, designed for long-lasting use in rat control"',
      'A twelve-pack, matching UC IPM\'s own instruction that a heavily infested home may need "a dozen or more traps"',
      'The listing\'s fifth bullet is manufacturer self-praise about the brand\'s history; it is trimmed from this card copy and is not a ground for exclusion (S47-F)',
    ],
  },
  {
    asin: 'B0CTL12488',
    cardName: 'Victor M205 Easy Set Plastic Pedal Humane Snap Rat Trap, Pack of 3',
    whatItDoes: [
      'Its own text states the same expanded-trigger mechanism: "Expanded trigger for the highest catch rates" (the superlative is the listing\'s own; trimmed from the criterion, not a ground for exclusion)',
      'Its own text names the nontarget caution the sources raise: "Can be used around kids and pets"',
      'An easy-set plastic pedal design, matching UC IPM\'s own note that "newer designs" address the difficulty of setting older rat traps',
      'Made in the U.S.A. per the listing\'s own text',
    ],
  },
  {
    asin: 'B0725X2WHJ',
    cardName: 'Rat Bait Station Outdoor with Key, Tamper-Resistant, 2-Pack',
    whatItDoes: [
      'Its own text states the property every source that discusses bait placement requires: "TAMPER-RESISTANT OUTDOOR STATION: Features a locking lid with included key to help provide controlled access when used as directed"',
      'Its own text states weather resistance, matching Nebraska\'s and ICWDM\'s own instruction to protect bait from moisture: "Weather-resistant construction helps shield bait from rain, dirt, and outdoor exposure"',
      'Bait is not included. This is the station hardware only — the empty, lockable enclosure the sources describe, not a rodenticide, so S48-A\'s material-danger question is not reached',
      'A 2-pack, sized for placing stations at more than one location, which every source on this page recommends over a single station',
    ],
  },
  {
    asin: 'B009894CDU',
    cardName: 'Fencer Wire 19 Gauge Galvanized Hardware Cloth, 1/2-Inch Mesh, 2 x 10 ft',
    whatItDoes: [
      'Its own text states the gauge and mesh size UC IPM\'s own exclusion checklist asks for, together in one sentence: "19 gauge, heavy duty hot dipped galvanized hardware cloth"',
      'The same sentence continues, separated here only because two filler clauses about cutting the material sit between them in the listing\'s own text: "The 1/2-inch mesh roll is flexible and tight enough to leave out larger ground crawling arachnids"',
      'Its own text names rats directly among the animals the mesh excludes, not just rodents in general: "very effective at keeping out critters like squirrels, rabbits, rats, hawks, raccoons, skunks"',
      'Its own text states the finish the sources ask for over a soft or ungalvanized material: "galvanized After Welding," with "a double zinc coating for maximum rust resistance." A 2 ft. by 10 ft. roll, per the listing\'s own stated size — sized for sealing a small number of specific gaps, not a whole foundation',
    ],
  },
];

const faqs: Faq[] = [
  {
    question: 'How do I tell a rat from a mouse?',
    answer:
      'By size, droppings, and the gnaw marks each leaves, and two sources give the same set of figures independently. Nebraska Extension\'s own comparison table states a feces size of "1/8 to 1/4 inch" for a house mouse against "3/4 inch" for a Norway rat, and a minimum access hole of "3/8 inch" for a mouse against "1/2 inch" for a rat. On gnawing specifically, Nebraska\'s table gives a width of "1/12 inch" for a mouse against "1/6 inch" for a rat — and UC IPM Pest Notes 74106 states the identical pair of figures independently, in its own words: "rats leave larger tooth marks of 1/6 inch (4mm) versus a mouse\'s “scratchy marks” of only 1/12 inch (2mm)." UC IPM adds a live-animal test for a young rat specifically: "very young rats have large heads and feet in proportion to their bodies, while those of adult mice are proportionately much smaller (Figure 5)." Cornell CALS states why the distinction matters when trapping: "Rat traps may be too slow to kill a mouse, whereas a mousetrap will not inflict enough force to kill a rat. Identify your target pest to select the correct trap." The National Pesticide Information Center gives the same instruction as a first step: "Identify your rodent first. Young rats may look similar to mice but certain features can tell them apart."',
  },
  {
    question: 'How do I tell a Norway rat from a roof rat?',
    answer:
      'By build, tail length, and where each one nests, and UC IPM Pest Notes 74106 gives a comparison table for exactly this. On general appearance: "sleek, agile" for a roof rat against "large, robust" for a Norway rat. On body weight: "5 to 10 ounces" against "7 to 18 ounces". On the tail, pulled over the back toward the head: a roof rat\'s "extends at least to snout, uniformly dark with fine scales"; a Norway rat\'s "extends to the middle of the skull; dark above and pale below, scaly". On the head: "pointed muzzle" against "blunt muzzle". Oregon State\'s solvepest page states the same distinction independently, in its own infographic text: "Roof rats’ tails are longer than the rest their body. They have a slender body shape. They have big ears and eyes and a pointed snout. Norway rats’ tails are shorter than the rest of their body. They have a sturdy body shape. They have small ears and eyes and a slanted snout." Nesting habits differ too. UC IPM on the roof rat: it "typically nest in enclosed and elevated spaces, such as attics, wall voids, ceiling voids, and cabinets." On the Norway rat: it is "a burrowing rodent" whose "burrows may be found along building foundations, beneath rubbish or woodpiles, and around gardens and fields (Figure 3)."',
  },
  {
    question: 'How big a gap can a rat fit through, and what should I seal it with?',
    answer:
      'Two different figures answer two different questions, and this page keeps them apart rather than merging them. What a rat can physically squeeze through: UC IPM Pest Notes 74106 states: "Rats of either species, especially young rats, can squeeze beneath a door with only a 1/2-inch gap." Nebraska Extension\'s own comparison table independently gives the same figure as a minimum access hole: "1/2 inch." What the sources recommend sealing to, which is stricter: UC IPM states, "All holes larger than 1/4 inch should be sealed to exclude both rats and mice." Nebraska states the identical standard in its own words: "Seal any openings larger than 1/4 inch to exclude both rats and mice." The National Pesticide Information Center gives the same combined figure a third time: "Exclude rats and mice by sealing cracks and crevices larger than a quarter inch." ICWDM gives its own single figure, framed only for rats and not merged with the others: "seal all holes and openings larger than ½ inch across." On material, UC IPM\'s own checklist calls for "18-gauge, 1/2-inch (13 mm) mesh, galvanized expanded metal" or "19-gauge, 1/2-inch (13 mm) mesh, galvanized wire cloth" over vents and low windows, and warns: "Never use lightweight ‘chicken wire’, since rats can easily pass through wire openings." Oregon State adds a starting point for small gaps: "Fill entry points as small as a dime with sealant and/or steel or copper wool."',
  },
  {
    question: 'Should I use snap traps, glue boards, or live traps?',
    answer:
      'The sources recommend snap traps and are cautious or outright negative about the other two for a homeowner. On snap traps, UC IPM Pest Notes 74106: "Rat-sized snap traps are available in a variety of styles. They can be made of plastic or wooden, have larger or expanded triggers, or have bait reservoirs. Finding the best locations to set traps may be more important than what type of trap is used." On glue boards, UC IPM: "Glue traps are also available options for rat management. However, they are difficult to use and are not generally recommended for nonprofessional use." The Internet Center for Wildlife Damage Management states why they work less well on rats specifically than on mice: rats "are less effective for capturing rats than mice, as rats frequently extricate themselves from the glue." On live traps, UC IPM is direct: "Live trapping of rats is not recommended for nonprofessionals because, legally, trapped rats must be humanely euthanized or released immediately in the area where it was trapped." UC IPM adds that releasing a rat elsewhere is not a workaround: it "will continue to pose health concerns to the residents and their neighbors." Cornell CALS adds a placement principle that applies to any trap, under its own heading, "Trap Fatigue": "This can occur when snap traps are left in the same place for a long period of time. Rodents, especially mice, become accustomed to the trap and do not explore, or actively avoid it."',
  },
  {
    question: 'What about diseases rats carry?',
    answer:
      'This page does not cover that, on purpose. Its scope is identification, exclusion, trapping, sanitation and when to call a professional — not a sourced treatment of rodent-borne illness, the same boundary house-mice drew and for the same reason. Cornell CALS’s own rodent management guide states: "The Centers for Disease Control and Prevention (CDC) provides clean up recommendations that reduce the risk of exposure to rodent pathogens." That is as far as this page goes. A specific CDC page was identified and one fetch was attempted so a live link could be given rather than a bare name; it returned an access-denied response, not the document, so no cdc.gov link appears here — the reader is pointed to CDC.gov by name. The attempt is recorded in the sources section below.',
  },
  {
    question: 'Do I need a professional?',
    answer:
      'For most of what this page covers, no — but the sources name specific situations where they say yes. UC IPM Pest Notes 74106, on roof rats traveling utility wires: "If roof rats are traveling on overhead utility wires, contact a pest professional or the utility company for information and assistance to prevent this." The Internet Center for Wildlife Damage Management, on fumigation: "Only licensed pest control operators may use fumigants." On tracking powders: "Tracking powders are available only to licensed pesticide applicators." Oregon State’s solvepest page, on rodent-proof construction generally: "Consider hiring a pest control company or a contractor familiar with rodent-proof construction and exclusion methods." None of these is a general rule about the size of an infestation — each ties to a specific method or circumstance the sources say belongs to a trained applicator rather than a homeowner.',
  },
];

const sources: Source[] = [
  {
    label:
      'Pest Notes: Rats, Publication 74106 — the source of the species identification table, the two gap figures, the mouse-versus-rat gnaw and feces comparison, the signs-of-infestation list, the exclusion checklist, and most of the trapping material',
    publisher: 'UC Statewide IPM Program (Quinn N)',
    date: 'Revised June 2024; read 31 August 2026',
    href: 'https://ipm.ucanr.edu/pdf/pestnotes/pnrats.pdf',
  },
  {
    label:
      'Rats — the source of the Norway-versus-roof-rat infographic corroboration, the signs-of-activity list, the exclusion mesh figure, and the professional-installer recommendation',
    publisher: 'Oregon State University, Solve Pest Problems',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://solvepestproblems.oregonstate.edu/rodents-wildlife/rats',
  },
  {
    label:
      'Norway Rat Damage Prevention and Control Methods — the source of the single-figure exclusion standard, the sanitation detail, the trap-trigger research finding, and the licensed-applicator statements for fumigants and tracking powders',
    publisher: 'Internet Center for Wildlife Damage Management',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://icwdm.org/species/rodents/norway-rats/norway-rat-damage-prevention-and-control-methods/',
  },
  {
    label:
      'G1737, Controlling Rats — the source of the comparison table (feces, gnawing, access hole), the den and bolt-hole description, and the independent corroboration of both gap figures',
    publisher: 'University of Nebraska–Lincoln Extension',
    date: '2007; read 31 August 2026',
    href: 'https://extensionpubs.unl.edu/publication/g1737/2007/html/view',
  },
  {
    label:
      'Rats and Mice: How to Manage Using Snap Traps — the source of the neophobia and prebaiting instructions, the trap-placement patterns, the nontarget-wildlife caution, and the carcass-disposal steps',
    publisher: 'UC Statewide IPM Program (Quinn N)',
    date: '15 January 2020; read 31 August 2026',
    href: 'https://ucanr.edu/blog/pests-urban-landscape/article/rats-and-mice-how-manage-using-snap-traps',
  },
  {
    label: 'Norway Rat — the source of the identification and management-summary paragraphs used on this page',
    publisher: 'University of Illinois Extension',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://extension.illinois.edu/invasives/norway-rat',
  },
  {
    label:
      'Rats — the source of the identify-your-rodent-first instruction and the quarter-inch combined exclusion figure',
    publisher: 'National Pesticide Information Center, Oregon State University',
    date: 'Last updated 27 July 2026; read 31 August 2026',
    href: 'https://npic.orst.edu/pest/rat.html',
  },
  {
    label:
      'Managing Mice and Rats — the source of the trap-fatigue finding, the rat-versus-mouse-trap statement, the glue-board mechanism, and the sentence naming the CDC’s own cleanup guidance',
    publisher: 'Cornell Cooperative Extension, Cornell Integrated Pest Management',
    date: 'Undated on the page; read 31 August 2026',
    href: 'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
  },
];

export default function RatsPage() {
  return (
    <UsPageLayout
      title="Rats"
      subtitle="Identification, where they nest, how they enter, and the exclusion and trapping methods eight university extension and federal publications describe. Two figures answer two different questions about the same gap — what a rat can squeeze through, and what the sources recommend sealing to — and this page keeps them apart. Rodent-borne disease is out of scope here on purpose, named once and not built out further."
      lastUpdated="August 2026"
      readingTime="15 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={RATS_HOME}
      clusterNav={RATS_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the two commensal rat species present across the United States —
        the Norway rat, <em>Rattus norvegicus</em>, and the roof rat, <em>Rattus rattus</em> —
        as eight university extension and federal publications describe them. It covers
        identification and telling a rat from a mouse, signs of an infestation, where rats
        nest and how they get in, exclusion, trapping and control, sanitation, and when the
        sources say to call a professional. It does not cover rodent-borne disease as a
        sourced subject; the section below explains why that is a scope decision rather than
        an oversight.
      </p>

      <h2 id="which-rat">Which Rat? Norway, Roof, and Telling a Rat From a Mouse</h2>
      <p>
        <strong>UC IPM Pest Notes 74106</strong> names the two species this page covers and
        the term for both together:{' '}
        <em>
          &ldquo;Two introduced species of rats, roof rats (Rattus rattus, Figure 1) and
          Norway rats (Rattus norvegicus, Figure 2), are present in almost all cities across
          California and are commonly referred to as commensal rats.&rdquo;
        </em>{' '}
        It gives a comparison table for telling them apart. General appearance:{' '}
        <em>&ldquo;sleek, agile&rdquo;</em> for a roof rat against{' '}
        <em>&ldquo;large, robust&rdquo;</em> for a Norway rat. Body weight:{' '}
        <em>&ldquo;5 to 10 ounces&rdquo;</em> against <em>&ldquo;7 to 18 ounces&rdquo;</em>.{' '}
        The tail, pulled over the back toward the head: a roof rat&rsquo;s{' '}
        <em>&ldquo;extends at least to snout, uniformly dark with fine scales&rdquo;</em>; a
        Norway rat&rsquo;s{' '}
        <em>
          &ldquo;extends to the middle of the skull; dark above and pale below, scaly&rdquo;
        </em>
        . The head: <em>&ldquo;pointed muzzle&rdquo;</em> against{' '}
        <em>&ldquo;blunt muzzle&rdquo;</em>.
      </p>
      <p>
        <strong>Oregon State University&rsquo;s</strong> solvepest page states the same
        distinction independently, in its own infographic text:{' '}
        <em>
          &ldquo;Roof rats&rsquo; tails are longer than the rest their body. They have a
          slender body shape. They have big ears and eyes and a pointed snout. Norway
          rats&rsquo; tails are shorter than the rest of their body. They have a sturdy body
          shape. They have small ears and eyes and a slanted snout.&rdquo;
        </em>{' '}
        <em>
          (the grammar in the first sentence, &ldquo;longer than the rest their body,&rdquo;
          is the source&rsquo;s own)
        </em>
      </p>
      <h3>Where a young rat gets confused with a mouse</h3>
      <p>
        <strong>If the tests below point to a mouse, this is the wrong page.</strong>{' '}
        <Link href="/us/house-mice">Our house mice page</Link> covers that animal on its own
        sources, including the quarter-inch entry gap five of them independently name. The trap
        sizes, the bait quantities and the exclusion measurements are all different, so the
        identification comes first.
      </p>
      <p>
        <strong>UC IPM</strong> gives a live-animal test:{' '}
        <em>
          &ldquo;very young rats have large heads and feet in proportion to their bodies,
          while those of adult mice are proportionately much smaller (Figure 5).&rdquo;
        </em>{' '}
        It gives a gnawing test too:{' '}
        <em>
          &ldquo;rats leave larger tooth marks of 1/6 inch (4mm) versus a mouse&rsquo;s
          &lsquo;scratchy marks&rsquo; of only 1/12 inch (2mm).&rdquo;
        </em>{' '}
        <em>
          (UC IPM&rsquo;s own text sets &ldquo;scratchy marks&rdquo; in double quotation
          marks; this page renders it in its own typography, as every quotation mark on this
          page does)
        </em>{' '}
        <strong>Nebraska Extension&rsquo;s</strong> own comparison table gives the identical
        pair of figures independently: a gnawing width of{' '}
        <em>&ldquo;1/12 inch&rdquo;</em> for a house mouse against{' '}
        <em>&ldquo;1/6 inch&rdquo;</em> for a Norway rat. The same table gives feces size,{' '}
        <em>&ldquo;1/8 to 1/4 inch&rdquo;</em> for a mouse against{' '}
        <em>&ldquo;3/4 inch&rdquo;</em> for a rat, and a minimum access hole,{' '}
        <em>&ldquo;3/8 inch&rdquo;</em> for a mouse against <em>&ldquo;1/2 inch&rdquo;</em>{' '}
        for a rat.
      </p>
      <p>
        <strong>Cornell CALS</strong> states why the distinction matters at the trap, not just
        the inspection:{' '}
        <em>
          &ldquo;Rat traps may be too slow to kill a mouse, whereas a mousetrap will not
          inflict enough force to kill a rat. Identify your target pest to select the correct
          trap.&rdquo;
        </em>{' '}
        <strong>The National Pesticide Information Center</strong> gives the same instruction
        as the first step of control:{' '}
        <em>
          &ldquo;Identify your rodent first. Young rats may look similar to mice but certain
          features can tell them apart.&rdquo;
        </em>
      </p>

      <h2 id="trapping">Trapping and Control Methods</h2>
      <p>
        <strong>UC IPM</strong> describes what is available and the tradeoff against poison
        baiting:{' '}
        <em>
          &ldquo;Rat-sized snap traps are available in a variety of styles. They can be made
          of plastic or wooden, have larger or expanded triggers, or have bait
          reservoirs.&rdquo;
        </em>{' '}
        <em>
          &ldquo;Because snap traps can be used over and over, the materials for trapping can
          be less expensive than poison baiting but trapping will likely be more labor
          intensive.&rdquo;
        </em>{' '}
        On bait: <em>&ldquo;Nuts, dried fruit, bacon, or a piece of dry pet food can be attractive bait for traps.&rdquo;</em>{' '}
        On the amount:{' '}
        <em>&ldquo;it is important to use just a pea-sized amount of bait.&rdquo;</em>
      </p>
      <p>
        On placement, <strong>UC IPM</strong> states:{' '}
        <em>
          &ldquo;For Norway rats, install traps close to walls, behind objects, in dark
          corners, and in places where rat signs (droppings, smudge marks, burrows, etc.) have
          been seen. Position traps along a wall so that they extend from the wall at right
          angles, with the trigger end nearly touching the wall (Figure 6).&rdquo;
        </em>{' '}
        For the climbing species:{' '}
        <em>
          &ldquo;For roof rats, traps often need to be installed both on the ground and
          aboveground (e.g., ledges, shelves, branches, fences, pipes, or overhead beams) (see
          Figures 7 and 8).&rdquo;
        </em>{' '}
        <strong>The UC ANR snap-trap article</strong> (by the same author) gives the specific
        placement patterns:{' '}
        <em>
          &ldquo;Effective placement of snap traps for rodents. Clockwise from top left:
          side-by-side, three in a row with alternating triggers, end-to-end.&rdquo;
        </em>{' '}
        It adds a caution about nontarget animals:{' '}
        <em>
          &ldquo;Set traps only during the night, but leave them where they are during the
          day, making sure they are not set. This greatly reduces trapping animals that are
          mostly active during daylight hours.&rdquo;
        </em>
      </p>
      <h3>Neophobia: why rats ignore a trap for days</h3>
      <p>
        <strong>UC IPM</strong> names the behavior:{' '}
        <em>
          &ldquo;They quickly detect and tend to avoid new objects and new foods. Thus, they
          often avoid traps and baits for the first several days (and maybe weeks) following
          the initial placement. This neophobia (fear of new objects) is thought to be more
          pronounced in roof rats than in Norway rats.&rdquo;
        </em>{' '}
        <strong>Cornell CALS</strong> states the same behavior in its own words and gives a
        prebaiting protocol:{' '}
        <em>
          &ldquo;Rats exhibit this behavior, which is a &lsquo;fear of new.&rsquo; To overcome
          this fear, put out traps with plenty of bait, but do not set the trap. Eventually,
          most rats will approach the trap and take bait. This should be repeated until rats
          have taken bait about three times.&rdquo;
        </em>{' '}
        <em>
          (Cornell&rsquo;s own text sets &ldquo;fear of new.&rdquo; in double quotation marks;
          rendered here in this site&rsquo;s own typography)
        </em>{' '}
        <strong>The UC ANR article</strong> states the same practice:{' '}
        <em>
          &ldquo;When using snap traps for rats, it is good practice to prebait your
          traps.&rdquo;
        </em>{' '}
        It names the consequence of skipping the step:{' '}
        <em>
          &ldquo;Failure to prebait may result in the capture of juveniles only. The
          breeding adults are the most important targets.&rdquo;
        </em>{' '}
        <strong>Nebraska Extension</strong> states the same finding as a timeframe:{' '}
        <em>
          &ldquo;It is common for rats to wait two weeks before interacting with traps and
          toxicants.&rdquo;
        </em>{' '}
        <strong>Cornell</strong> names a related failure mode neither of the others states,
        under its own heading, &ldquo;Trap Fatigue&rdquo;:{' '}
        <em>
          &ldquo;This can occur when snap traps are left in the same place for a long period
          of time. Rodents, especially mice, become accustomed to the trap and do not
          explore, or actively avoid it.&rdquo;
        </em>
      </p>
      <h3>Glue boards and live traps: cautioned against for homeowners</h3>
      <p>
        <strong>UC IPM</strong> is direct about glue boards:{' '}
        <em>
          &ldquo;Glue traps are also available options for rat management. However, they are
          difficult to use and are not generally recommended for nonprofessional use.&rdquo;
        </em>{' '}
        <strong>ICWDM</strong> states why they underperform on rats specifically, compared to
        mice:{' '}
        <em>
          &ldquo;They are less effective for capturing rats than mice, as rats frequently
          extricate themselves from the glue.&rdquo;
        </em>{' '}
        On live traps, <strong>UC IPM</strong> states a legal obligation most readers will not
        expect:{' '}
        <em>
          &ldquo;Live trapping of rats is not recommended for nonprofessionals because,
          legally, trapped rats must be humanely euthanized or released immediately in the
          area where it was trapped&rdquo;
        </em>
        .{' '}
        It adds why releasing elsewhere is not a solution:{' '}
        <em>
          &ldquo;Releasing rats is not recommended, as they will continue to pose health
          concerns to the residents and their neighbors.&rdquo;
        </em>
      </p>
      <p>
        On devices that do not work, <strong>ICWDM</strong> states plainly:{' '}
        <em>&ldquo;Ultrasonic devices do not control rats&rdquo;</em>.{' '}
        <strong>No ultrasonic or vibrational device is named on this page.</strong>
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          The criteria the tools below are measured against
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          Each listing below states, in its own feature text rather than only in a product
          title, the property the sources above ask for: an expanded-trigger, rat-sized snap
          trap, a tamper-resistant weather-resistant bait station, and galvanized hardware
          cloth at the gauge and mesh size UC IPM&rsquo;s own checklist names. Twenty product
          URLs were attempted in S60 R7; seventeen returned an anti-bot interstitial on the
          first fetch and were not retried that round, per Law 137. Seventeen of those same
          URLs were attempted again this round (S60 R9) &mdash; a fresh round, permitted under
          Law 137 &mdash; and sixteen returned a real product page; one (a since-delisted bait
          station) returned a genuine HTTP 404. No source consulted for this page ranks any two
          products against one another, so nothing here is called best, and no price appears
          beside a card.
        </p>
      </div>
      <p>
        The traps below are named because each listing states that it is sized for a rat rather than a mouse, which is the distinction this page opens with.
      </p>

      {products.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="signs">Signs of an Infestation</h2>
      <p>
        <strong>UC IPM</strong> lists the physical evidence a yard or building inspection
        should look for, several of which are not what a homeowner expects:{' '}
        <em>&ldquo;Rat droppings around dog or cat dishes or pet food storage containers&rdquo;</em>
        ; <em>&ldquo;Noises coming from the attic or drop ceilings&rdquo;</em>;{' '}
        <em>&ldquo;Rat nests in your firewood stack&rdquo;</em>;{' '}
        <em>&ldquo;Dead rat carcasses scavenged by pet cats and dogs&rdquo;</em>;{' '}
        <em>
          &ldquo;Smudge marks caused by the rats rubbing their fur against beams, rafters,
          pipes, and walls&rdquo;
        </em>
        ; <em>&ldquo;Rat or mouse droppings in your recycling bins&rdquo;</em>; and{' '}
        <em>&ldquo;Drowned rat(s) in your swimming pool or hot tub&rdquo;</em>.
      </p>
      <p>
        <strong>Oregon State</strong> gives a largely overlapping list independently, adding
        two signs UC IPM does not name:{' '}
        <em>
          &ldquo;Rats traveling along utility lines or on the tops of fences&rdquo;
        </em>{' '}
        and{' '}
        <em>&ldquo;Interest on the part of dogs in holes, small gaps, and climbable structures&rdquo;</em>
        .{' '}
        <strong>The National Pesticide Information Center</strong> states the same
        smudge-mark clue in plainer language:{' '}
        <em>
          &ldquo;Look for brown or gray smudges along walls and other surfaces. These marks
          indicate heavily used paths or rat entrances.&rdquo;
        </em>{' '}
        NPIC adds a scale most inspections miss:{' '}
        <em>
          &ldquo;Check a large area when evidence of chewing is found. Rats may travel
          hundreds of feet per day for food or water.&rdquo;
        </em>
      </p>
      <p>
        <strong>Cornell CALS</strong> adds a caution about reading too much into a dropping
        count, under its own heading, &ldquo;Number of Droppings&rdquo;:{' '}
        <em>
          &ldquo;the sudden appearance of a large number of droppings can be alarming, but
          doesn&rsquo;t prove you have a full-blown infestation.&rdquo;
        </em>{' '}
        It also names a monitoring method neither of the other sources mentions:{' '}
        <em>
          &ldquo;Rodent baits are available without a rodent-killing chemical, but instead
          have a product that makes droppings and urine fluoresce under UV light.
          Monitoring with non-toxic blocks can provide information about rodent movement.
          For example, if non-toxic blocks are used on the exterior of the building, and
          fluorescent droppings are found indoors, this indicates that an entry point is
          present.&rdquo;
        </em>
      </p>

      <h2 id="nesting-entry">Where They Nest and How They Enter</h2>
      <p>
        <strong>UC IPM</strong> gives each species its own nesting habit. The roof rat:{' '}
        <em>
          &ldquo;typically nest in enclosed and elevated spaces, such as attics, wall voids,
          ceiling voids, and cabinets.&rdquo;
        </em>{' '}
        It adds that roof rats{' '}
        <em>
          &ldquo;usually live and nest aboveground in shrubs, trees, or dense vegetation such
          as ivy.&rdquo;
        </em>{' '}
        The Norway rat, by contrast, is{' '}
        <em>&ldquo;a burrowing rodent&rdquo;</em> whose{' '}
        <em>
          &ldquo;burrows may be found along building foundations, beneath rubbish or
          woodpiles, and around gardens and fields (Figure 3).&rdquo;
        </em>{' '}
        <strong>Oregon State</strong> states the same split independently:{' '}
        <em>
          &ldquo;Norway rats build burrows near the ground along building foundations and
          beneath woodpiles and debris piles. Norway rats adapt to crawl spaces. They use
          sewer/utility passages to move through areas.&rdquo;
        </em>{' '}
        Roof rats: <em>&ldquo;nest above ground in vegetation or in buildings above ground level.&rdquo;</em>
      </p>
      <p>
        On how rats actually get inside, <strong>UC IPM</strong> states:{' '}
        <em>
          &ldquo;Rats can gain entry to structures by gnawing, climbing, jumping, or swimming
          through sewers and entering through toilets or broken drains. Norway rats are more
          powerful swimmers, but roof rats are more agile and are better climbers.&rdquo;
        </em>{' '}
        <strong>The Internet Center for Wildlife Damage Management</strong> gives the sewer
        route in more detail:{' '}
        <em>
          &ldquo;Rats enter sewers at outlets and through manholes, catch basins, broken
          pipes, and drains&rdquo;
        </em>{' '}
        and states a figure most readers will not expect:{' '}
        <em>&ldquo;Rats are excellent swimmers, capable of staying afloat up to 72 hours.&rdquo;</em>
      </p>
      <p>
        <strong>Nebraska Extension</strong> describes what a den itself looks like once
        established:{' '}
        <em>
          &ldquo;Den entrances will be 2 to 3 inches in diameter, with the ground worn smooth
          by frequent use (Figure 2).&rdquo;
        </em>{' '}
        It adds a detail neither UC IPM nor Oregon State names:{' '}
        <em>
          &ldquo;Rats may also dig additional openings, called &lsquo;bolt holes&rsquo; for
          emergency escape.&rdquo;
        </em>{' '}
        <em>
          (Nebraska&rsquo;s own text sets &ldquo;bolt holes&rdquo; in double quotation marks;
          rendered in this site&rsquo;s own typography)
        </em>
      </p>

      <h2 id="exclusion">Exclusion: Two Figures, Two Questions</h2>
      <p>
        <strong>
          What a rat can physically squeeze through, and what the sources recommend sealing
          to, are two different figures answering two different questions — and this page
          keeps them apart rather than merging them into one number.
        </strong>
      </p>
      <h3>What a rat can fit through</h3>
      <p>
        <strong>UC IPM</strong> states it plainly:{' '}
        <em>
          &ldquo;Rats of either species, especially young rats, can squeeze beneath a door
          with only a 1/2-inch gap.&rdquo;
        </em>{' '}
        <strong>Nebraska Extension&rsquo;s</strong> comparison table gives the same figure
        independently, as a minimum access hole for a Norway rat:{' '}
        <em>&ldquo;1/2 inch&rdquo;</em>.
      </p>
      <h3>What to seal to, which is stricter</h3>
      <p>
        <strong>UC IPM</strong> states the combined standard:{' '}
        <em>
          &ldquo;All holes larger than 1/4 inch should be sealed to exclude both rats and
          mice.&rdquo;
        </em>{' '}
        <strong>Nebraska</strong> states the identical standard in its own words:{' '}
        <em>
          &ldquo;Seal any openings larger than 1/4 inch to exclude both rats and mice.&rdquo;
        </em>{' '}
        <strong>The National Pesticide Information Center</strong> gives the same combined
        figure a third time, independently:{' '}
        <em>
          &ldquo;Exclude rats and mice by sealing cracks and crevices larger than a quarter
          inch.&rdquo;
        </em>{' '}
        <strong>ICWDM</strong> gives its own figure, framed only for rats and not merged with
        the combined standard above:{' '}
        <em>&ldquo;seal all holes and openings larger than ½ inch across.&rdquo;</em>{' '}
        <strong>Oregon State</strong> also gives the quarter-inch figure, framed only for
        rats:{' '}
        <em>
          &ldquo;Use welded wire &lsquo;hardware cloth&rsquo; with &frac14;-inch openings to
          exclude rats.&rdquo;
        </em>{' '}
        <em>
          (Oregon State&rsquo;s own text sets &ldquo;hardware cloth&rdquo; in double
          quotation marks; rendered in this site&rsquo;s own typography)
        </em>
      </p>
      <p>
        On material, <strong>UC IPM&rsquo;s</strong> own checklist is specific about gauge and
        mesh size:{' '}
        <em>
          &ldquo;Ventilator grills (vent covers) should be enclosed with 18-gauge, 1/2-inch
          (13 mm) mesh, galvanized expanded metal or 16-gauge, 1/2-inch (13 mm) mesh,
          galvanized wire cloth.&rdquo;
        </em>{' '}
        For low windows:{' '}
        <em>
          &ldquo;Windows that open near the ground can be protected with 19-gauge, 1/2-inch
          (13 mm) mesh, galvanized wire cloth.&rdquo;
        </em>{' '}
        And a warning about the obvious wrong choice:{' '}
        <em>
          &ldquo;Never use lightweight &lsquo;chicken wire&rsquo;, since rats can easily pass
          through wire openings.&rdquo;
        </em>{' '}
        <em>
          (UC IPM&rsquo;s own text sets &ldquo;chicken wire&rdquo; in double quotation marks,
          with a stray space its PDF renders before the closing mark; rendered here in this
          site&rsquo;s own typography, with that spacing artifact silently corrected)
        </em>{' '}
        <strong>ICWDM</strong> gives the same instruction about material quality rather than
        just size:{' '}
        <em>
          &ldquo;Rodent-proofing should be done with heavy materials that resist gnawing,
          including concrete mortar, 24-gauge galvanized sheet metal, and 18-gauge hardware
          cloth.&rdquo;
        </em>{' '}
        <strong>Oregon State</strong> gives a starting point for the smallest gaps:{' '}
        <em>
          &ldquo;Fill entry points as small as a dime with sealant and/or steel or copper
          wool.&rdquo;
        </em>{' '}
        For exclusion overall, UC IPM calls it, in its own words, &ldquo;building them
        out&rdquo; — the most successful and longest-lasting strategy for rat control around
        structures, in UC IPM&rsquo;s own assessment.
      </p>
      <p>
        On roof rats specifically, exclusion takes longer to get right. <strong>UC IPM</strong>{' '}
        states:{' '}
        <em>
          &ldquo;Because roof rats are excellent climbers, openings above ground level must
          also be plugged. Rodent proofing against roof rats, because of their greater
          climbing ability, usually requires more time to find entry points than for Norway
          rats.&rdquo;
        </em>{' '}
        For rats traveling utility lines specifically, UC IPM does not recommend a
        do-it-yourself fix — see the professional section below.
      </p>

      <h2 id="sanitation">Sanitation and Food Storage</h2>
      <p>
        <strong>UC IPM</strong> states the principle and its limit in the same breath:{' '}
        <em>
          &ldquo;Sanitation is fundamental to rat control and must be ongoing. If sanitation
          measures aren&rsquo;t properly maintained, the benefits of other measures will be
          lost, and rats will quickly return.&rdquo;
        </em>{' '}
        On garbage specifically:{' '}
        <em>
          &ldquo;Collect garbage, trash, and garden debris frequently, and ensure all garbage
          receptacles have tight-fitting covers.&rdquo;
        </em>{' '}
        On pet food, which several sources single out:{' '}
        <em>
          &ldquo;Where dogs are kept and fed outdoors, rats can become a problem if there is a
          ready supply of dog food. Feed your pet only the amount of food it will eat at a
          feeding, and store pet food in rodent-proof containers.&rdquo;
        </em>{' '}
        UC IPM adds a caution about pet waste specifically:{' '}
        <em>
          &ldquo;Clean up feces from dogs, cats, and other animals since rats will eat feces.
          Feces can harbor pathogens, so always handle with gloves and be careful not to
          breathe in any aerosolized fecal material.&rdquo;
        </em>
      </p>
      <p>
        <strong>Nebraska Extension</strong> gives the same principle as a checklist:{' '}
        <em>
          &ldquo;Reduce food, water and harborage necessary for rat survival. Whenever
          possible, clean up food spills, fix leaky faucets and modify bird feeders.&rdquo;
        </em>{' '}
        <em>
          &ldquo;Stack packaged foods on pallets with adequate space left around and under
          stored articles to allow inspection for rat sign.&rdquo;
        </em>{' '}
        <strong>ICWDM</strong> states the same storage instruction independently and adds a
        detection method neither UC IPM nor Nebraska names:{' '}
        <em>
          &ldquo;Stack foods that are in sacks or boxes in rows on pallets in a way that
          allows thorough inspection for evidence of rats. Keep stored materials away from
          walls. A 12-inch, white band painted on the floor adjacent to the wall will aid in
          detecting droppings of rodents and other signs.&rdquo;
        </em>{' '}
        <strong>Oregon State</strong> gives the same list in plainer form for a residential
        reader:{' '}
        <em>&ldquo;Use Trashcans with Secure Lids&rdquo;</em>;{' '}
        <em>&ldquo;Store Pet Food and Bird Seed in Robust Containers&rdquo;</em>; and{' '}
        <em>&ldquo;Don&rsquo;t Attract Rats with Food Scraps in Your Compost&rdquo;</em>.
      </p>
      <p>
        <strong>ICWDM</strong> adds one figure sanitation alone will not solve, stated as
        context for why exclusion still matters:{' '}
        <em>
          &ldquo;One rat eats approximately 20 to 40 pounds of feed per year and probably
          contaminates 10 times that amount with urine and droppings.&rdquo;
        </em>
      </p>

      <h2 id="professional">When the Sources Say to Call a Professional</h2>
      <p>
        <strong>UC IPM</strong>, on roof rats traveling overhead utility wires, does not
        recommend a do-it-yourself fix:{' '}
        <em>
          &ldquo;If roof rats are traveling on overhead utility wires, contact a pest
          professional or the utility company for information and assistance to prevent
          this.&rdquo;
        </em>{' '}
        <strong>Oregon State</strong> states the same recommendation for rodent-proof
        construction generally:{' '}
        <em>
          &ldquo;Consider hiring a pest control company or a contractor familiar with
          rodent-proof construction and exclusion methods.&rdquo;
        </em>
      </p>
      <p>
        <strong>ICWDM</strong> names two specific tools it reserves for licensed applicators.
        On fumigants:{' '}
        <em>
          &ldquo;Aluminum phosphide is registered as a burrow fumigant, although it is a
          highly restricted pesticide. Fumigation Management Plans must be established prior
          to use of aluminum phosphide. Do not use fumigants where the occupants of a
          building might be exposed to the fumes. Only licensed pest control operators may
          use fumigants.&rdquo;
        </em>{' '}
        On tracking powders:{' '}
        <em>
          &ldquo;Tracking powders are available only to licensed pesticide applicators.&rdquo;
        </em>{' '}
        <strong>UC IPM</strong> draws the same line for live trapping, covered above: the law
        requires a trapped rat to be humanely euthanized or released on the spot, which UC IPM
        frames as a job the sources say belongs to a professional rather than a homeowner.
      </p>

      <h2 id="disease">Rodent-Borne Illness: What This Page Does Not Cover</h2>
      <p>
        <strong>
          This page does not carry a sourced treatment of rodent-borne disease. That is a
          scope decision made before this page was built, not a source that could not be
          found.
        </strong>{' '}
        <strong>Cornell CALS&rsquo;s</strong> own rodent management page states:{' '}
        <em>
          &ldquo;The Centers for Disease Control and Prevention (CDC) provides clean up
          recommendations that reduce the risk of exposure to rodent pathogens.&rdquo;
        </em>{' '}
        That is as far as this page goes: readers with a contamination concern are pointed to
        CDC.gov, by name, for cleanup guidance this page does not reproduce.
      </p>
      <p>
        <strong>
          A specific CDC page was identified and one fetch was attempted, so that a live link
          could be given rather than a bare name. It returned an access-denied response, not
          the document.
        </strong>{' '}
        Under this estate&rsquo;s standing rule, a dead or blocked citation is worse than
        none, so no cdc.gov link appears on this page. The attempt is recorded, with its
        outcome, in the sources section below.
      </p>

      <h2 id="not-here">What This Page Does Not Carry</h2>
      <p>
        <strong>A sourced treatment of rodent-borne disease.</strong> Covered above: this is a
        scope decision, and the reader is pointed to the CDC by name rather than through a
        citation this page could not verify.
      </p>
      <p>
        <strong>Woodrats (pack rats).</strong> UC IPM names them as a separate, often native
        group told apart by a furred tail, but does not give them the depth it gives Norway
        and roof rats, and neither does this page.
      </p>
      <p>
        <strong>A ranking.</strong> Eight publications were read and none compares any two rat
        control products against one another. Nothing here is called best.
      </p>
      <p>
        <strong>An ultrasonic or vibrational repellent device.</strong> ICWDM states plainly
        that these do not control rats, and none is named.
      </p>
      <p>
        <strong>A named rodenticide brand.</strong> UC IPM and Nebraska describe a regulated
        product class rather than a single tool meeting one stated criterion, and Nebraska
        Extension&rsquo;s bait-station specification is not matched against any listing this
        page fetched. No rodenticide and no bait product is carded — only the station hardware
        that holds one.
      </p>
      <p>
        <strong>A second snap trap brand or a second bait station.</strong> Sixteen more
        product listings across the three classes this page already cards were fetched
        successfully in S60 R9 (five more snap traps, six more bait stations, five hardware
        cloth rolls). Most either repeated a mechanism this page already cards without adding a
        distinct one, or a criterion match no stronger than a card already on this page, so
        naming more of the same class was judged padding rather than a genuine addition and was
        not done. The one class with nothing carded before this round &mdash; hardware cloth
        &mdash; now has one card, below.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Eight publications, each named in the sentence that uses it. Every quotation on this
        page was located, byte-exact, in the publication it is attributed to. One phrase that
        could not be reproduced byte-exact because of a PDF extraction artifact — a stray
        space UC IPM&rsquo;s PDF renders before a closing quotation mark — is quoted only up
        to the point the artifact begins, noted above where it occurs.
      </p>
      <p>
        <strong>
          One further URL was attempted and is not a source on this page: a CDC page on
          rodent control, fetched once on 31 August 2026, which returned an access-denied
          response rather than the document.
        </strong>{' '}
        No quotation, citation or link to that page appears here. It is named in this
        paragraph, under this estate&rsquo;s standing rule that a failed fetch is recorded
        rather than substituted, and never quietly dropped.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
