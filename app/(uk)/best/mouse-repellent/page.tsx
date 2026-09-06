import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S67 R3 — REBUILD UNDER THE EVIDENCE RULING.
//
// TITLE AND H1 ARE BYTE-UNCHANGED (D-7), including "Prevention Products That Work".
// The page's honest answer to that promise is the proofing section: sealing gaps is the
// one thing on this page that a source actually supports. The body asserts no efficacy
// for any carded product in our own voice.
//
// THE SUBTITLE WAS REWRITTEN AND IT IS A THIRD SURFACE, NEITHER TITLE NOR H1 — the same
// trap R2 found on mouse-poison. It read "Our pick of the most effective mouse repellents
// and proofing products to keep mice out of your home for good": an unsourced superlative,
// a claim to card "proofing products" when NONE is carded, and "for good".
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Mouse Repellent UK 2026 | Prevention Products That Work",
    description:
      "What the UK advertising regulator says about mouse repellent devices, the 6mm gap that lets mice in, and four products as their own listings describe them.",
    alternates: { canonical: "https://pestproindex.com/best/mouse-repellent" },
    openGraph: {
      title: "Best Mouse Repellent UK 2026 | Prevention Products That Work",
      description:
        "What the UK advertising regulator says about mouse repellent devices, the 6mm gap that lets mice in, and four products as their own listings describe them.",
      url: "https://pestproindex.com/best/mouse-repellent",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Mouse Repellent UK 2026 | Prevention Products That Work",
  description:
    "What the UK advertising regulator says about mouse repellent devices, the 6mm gap that lets mice in, and four products as their own listings describe them.",
  datePublished: "2026-03-31",
  dateModified: "2026-09-06",
  author: {
    "@type": "Organization",
    name: "PestPro Index",
    url: "https://pestproindex.com",
  },
  publisher: {
    "@type": "Organization",
    name: "PestPro Index",
    url: "https://pestproindex.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/mouse-repellent",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pestproindex.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Best",
      item: "https://pestproindex.com/best",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Mouse Repellent UK 2026",
      item: "https://pestproindex.com/best/mouse-repellent",
    },
  ],
};

// S67 R3 — THE FAQ IS REMOVED, VISIBLE BLOCK AND STRUCTURED DATA TOGETHER. All six are
// answered by the body above or by a general search, and two could not have survived
// ruling D-5 in any case:
//   "best way to stop mice getting in"     -> #proofing, on Oxford's and Defra's words
//   "does peppermint oil repel mice"       -> NO ACCEPTABLE SOURCE EXISTS ON DISK. The old
//                                             answer asserted an efficacy position with
//                                             nothing behind it. D-5 deletes it rather
//                                             than letting it stand as a question
//   "what gaps should I seal"              -> #proofing, the 6mm figure, cited to Oxford
//   "steel wool or copper mesh"            -> the page cards NEITHER, and the comparison
//                                             was unsourced
//   "when should I mouse-proof"            -> a general search answers it
//   "repellents alongside traps"           -> #alternatives

// SOURCES. Every quotation was extracted by byte range out of a saved body and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually read (S59-A). All four bodies were fetched in earlier rounds and are kept
// on disk under Law 175 — ~/pp-s67r2/sources/ — so none was re-fetched this round.
const SRC = {
  asa: "https://www.asa.org.uk/advice-online/pest-repellents.html",
  oxford: "https://www.oxford.gov.uk/pest-control-advice/pest-control-advice-mice",
  defra:
    "https://www.gov.uk/government/publications/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms",
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
};

type ProductRecord = {
  anchorId: string;
  asin: string;
  rank: number;
  cardName: string;
  cardLabel: string;
  features: string[];
  tableCells: string[];
  h2Label: string;
  h2Name: string;
};

// D-1 — B0072H60MG IS REMOVED, CARD AND h2 TOGETHER. It was carded at rank 4 as "Best
// Battery-Powered" mouse repellent. Its listing is a SPIDER product: the fetched title
// reads "Spider Repellent & Deterrent - Ultrasonic Spider & Crawling Insect Repeller",
// all five feature bullets are about spiders, and the detail table gives
// "Target species :: Spider". Its only rodent word is "safe for pets, wildlife (except
// rodents)" — a safety statement, not an efficacy one. The four survivors keep their
// relative order and the numerals close up 1-2-3-4.
//
// D-2 — EVERY AWARD LABEL IS REPLACED BY A NEUTRAL FACTUAL DESCRIPTOR taken from the
// listing itself: form factor, type, size. No superlative, no ranking word, no implied
// efficacy. The SAME string is used for cardLabel, h2Label and the comparison table, so
// the three surfaces cannot disagree and Law 188 has nothing to adjudicate.
//   Best Overall         -> Ultrasonic, mains powered
//   Best Spray           -> Peppermint oil spray, 250ml
//   Best Premium Spray   -> Peppermint and geraniol spray, 250ml
//   Best Natural         -> Paper and corn cob sachets, 6 pack
//
// THE anchorId VALUES ARE DELIBERATELY UNCHANGED and still read "best-*". An anchor id
// is a URL fragment identifier, not a label a reader is shown: D-2 names card labels, h2
// labels and the comparison table, and CLAUDE.md treats an anchor id as a distinct
// protected thing in its own right (the NEVER TOUCH entry for id="best-seller" on
// commercial-rodent-bait-stations). Renaming them would break every existing fragment
// link into this page to change a string no reader reads.
//
// D-5 — A MANUFACTURER'S EFFICACY CLAIM APPEARS ONLY AS THE MAKER'S OWN CLAIM, marked as
// such in the feature text. Nothing here is asserted in this site's voice.
const products: ProductRecord[] = [
  {
    anchorId: "best-ultrasonic",
    asin: "B0B8VQ6C76",
    rank: 1,
    cardName: "EcoMyLife Ultrasonic Pest Repeller 2 Pack",
    cardLabel: "Ultrasonic, mains powered",
    features: [
      "Electric plug-in unit; power source listed as AC/DC",
      "Sold as a 2 pack; listed at 6 x 7 x 14 cm",
      "Target species listed as eleven, from ants and bed bugs to mice, rats and wasps",
      "The maker claims coverage of 1200 sq ft per unit; the detail table gives a maximum range of 93 centimetres",
      "Listed for indoor use; country of origin listed as China",
    ],
    tableCells: [
      "EcoMyLife Ultrasonic Repeller",
      "Ultrasonic, mains powered",
      "Electric plug-in",
      "2 units",
      "Ant, Bed Bug, Cockroach, Flea, Fly, Mosquito, Moth, Mouse, Rat, Spider, Wasp",
      "Indoor",
    ],
    h2Label: "Ultrasonic, mains powered",
    h2Name: "EcoMyLife Ultrasonic Pest Repeller 2 Pack",
  },
  {
    anchorId: "best-spray",
    asin: "B08DKSX32W",
    rank: 2,
    cardName: "RepellShield Rat & Mouse Repellent Spray 250ml",
    cardLabel: "Peppermint oil spray, 250ml",
    features: [
      "Item form listed as Oil; scent listed as Peppermint",
      "250 ml, listed as a pack of one",
      "Target species listed as Mouse, Rat",
      "Listed for indoor use; manufacturer Vivere GmbH, country of origin Germany",
      "The maker's directions: reapply every 2-3 days, with persistent use over 2-3 weeks",
    ],
    tableCells: [
      "RepellShield Spray",
      "Peppermint oil spray, 250ml",
      "Oil",
      "250 ml",
      "Mouse, Rat",
      "Indoor",
    ],
    h2Label: "Peppermint oil spray, 250ml",
    h2Name: "RepellShield Rat & Mouse Repellent Spray",
  },
  {
    anchorId: "best-premium-spray",
    asin: "B0CRRSTHNG",
    rank: 3,
    cardName: "REPELEM Rat & Mouse Repellent Spray 250ml — Peppermint Oil",
    cardLabel: "Peppermint and geraniol spray, 250ml",
    features: [
      "The maker describes the formula as peppermint oil and geraniol",
      "Item form listed as Oil; scent listed as Peppermint",
      "250 ml, listed as a pack of one",
      "No target species stated in the listing's detail table",
      "The maker's directions: apply daily to entry points for the first week, then once or twice weekly",
    ],
    tableCells: [
      "REPELEM Spray",
      "Peppermint and geraniol spray, 250ml",
      "Oil",
      "250 ml",
      "not stated",
      "not stated",
    ],
    h2Label: "Peppermint and geraniol spray, 250ml",
    h2Name: "REPELEM Rat & Mouse Repellent Spray",
  },
  {
    anchorId: "best-natural",
    asin: "B0CNV2CWQS",
    rank: 4,
    cardName: "REPELEM Rat & Mouse Repellent Peppermint Oil Sachets — 6 Pack",
    cardLabel: "Paper and corn cob sachets, 6 pack",
    features: [
      "The maker describes each sachet as paper, corn cobs and peppermint oil",
      "Size listed as 6 sachets; scent listed as Peppermint",
      "No target species stated in the listing's detail table",
      "The maker claims each sachet retains its scent for up to 90 days",
      "The maker suggests confined spaces such as cars, caravans, lofts and sheds",
    ],
    tableCells: [
      "REPELEM Sachets",
      "Paper and corn cob sachets, 6 pack",
      "Sachet",
      "6 sachets",
      "not stated",
      "not stated",
    ],
    h2Label: "Paper and corn cob sachets, 6 pack",
    h2Name: "REPELEM Rat & Mouse Repellent Peppermint Oil Sachets",
  },
];

// The contents entry is DERIVED from the same fields the h2 renders, so an entry cannot
// say something the heading does not (the S66 R4 pattern).
const tocItems = [
  { id: "situation", title: "What You Are Actually Dealing With" },
  { id: "asa", title: "What the Advertising Regulator Says" },
  { id: "limits", title: "Where These Products Do Not Help" },
  { id: "proofing", title: "What Actually Reduces Mouse Entry" },
  ...products.map((p) => ({
    id: p.anchorId,
    title: `${p.h2Label} — ${p.h2Name}`,
  })),
  { id: "alternatives", title: "If This Is Not the Answer" },
  { id: "using", title: "Using Them, If You Use Them" },
  { id: "compared", title: "The Four Products Compared" },
];

export default function BestMouseRepellentPage() {
  return (
    <GuideLayout
      title="Best Mouse Repellent UK 2026 | Prevention Products That Work"
      subtitle="What the UK advertising regulator has said about repellent devices, the gap size that actually lets mice in, and four products described as their own listings describe them"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        {
          title: "How to Get Rid of Mice: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-mice",
        },
        {
          title: "Professional Pest Control vs DIY",
          href: "/guides/professional-pest-control-vs-diy",
        },
        {
          title: "Pest Control Costs UK 2026",
          href: "/guides/pest-control-costs",
        },
        {
          title: "Autumn Pest Proofing: Complete UK Guide",
          href: "/guides/autumn-pest-proofing",
        },
        {
          title: "How to Get Rid of Rats: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-rats",
        },
        {
          title: "Landlord Pest Control Responsibilities",
          href: "/guides/landlord-pest-control",
        },
      ]}
      relatedProducts={[
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        {
          title: "Best Mouse Bait Stations UK 2026",
          href: "/best/mouse-bait-stations",
        },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* Affiliate disclosure */}
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        This page used to rank five mouse repellents and tell you which worked
        best. It no longer does, and the reason is worth reading before the
        products: the UK advertising regulator has looked at the evidence behind
        claims for this class of product and has not accepted one.
      </p>

      {/* DECISION BLOCK — the evidence position and the proofing answer sit ABOVE any
          product line. NOT a card: no Amazon link, no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>
              You want to know whether these products are proven to work.
            </strong>{" "}
            The ASA has examined the evidence for pest repellent devices with
            independent experts and has yet to accept a claim of efficacy (
            <a href={SRC.asa} rel="nofollow" className="underline">
              ASA/CAP
            </a>
            ) —{" "}
            <a href="#asa" className="underline">
              what the regulator says
            </a>
            .
          </li>
          <li>
            <strong>You want mice to stop getting in.</strong> Sealing gaps is
            the one thing on this page a source supports, and the number that
            matters is 6mm (
            <a href={SRC.oxford} rel="nofollow" className="underline">
              Oxford City Council
            </a>
            ) —{" "}
            <a href="#proofing" className="underline">
              what actually reduces mouse entry
            </a>
            .
          </li>
          <li>
            <strong>You already have mice inside.</strong> A deterrent is not a
            treatment —{" "}
            <a href="#alternatives" className="underline">
              traps, bait stations and poison
            </a>{" "}
            are different pages and a different decision.
          </li>
          <li>
            <strong>You want to see the products anyway.</strong> Four are
            listed below with{" "}
            <a href="#compared" className="underline">
              what their listings state and nothing more
            </a>
            .
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Nothing on this page is described as proven to repel mice, because
            no source we hold supports that for any of it. Where a product makes
            a claim, it is reported as the manufacturer&rsquo;s claim and
            attributed to them.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What You Are Actually Dealing With</h2>
      <p>
        A house mouse gets in through an opening far smaller than most people
        picture, and then lives somewhere you cannot see. Oxford City
        Council&rsquo;s pest advice notes that{" "}
        <em>
          &ldquo;Mice often nest in hard-to-detect places, such as under
          floorboards or in wall cavities.&rdquo;
        </em>{" "}
        (
        <a href={SRC.oxford} rel="nofollow">
          Oxford City Council
        </a>
        ). That is the fact every product on this page is up against: a scent or
        a sound in the room is not reaching the space the animal is living in.
      </p>
      <p>
        The same advice gives the reason mice matter indoors beyond the nuisance
        —{" "}
        <em>
          &ldquo;Mice are a concern in buildings due to their need to gnaw on
          hard materials to maintain their teeth, which poses a fire risk from
          damaged cables.&rdquo;
        </em>{" "}
        A deterrent that a mouse ignores leaves that risk exactly where it was.
      </p>

      {/* [1] The ASA position */}
      <h2 id="asa">What the Advertising Regulator Says</h2>
      <p>
        The Committee of Advertising Practice publishes guidance on how pest
        repellents may be advertised in the UK, and it is unusually direct:
      </p>
      <blockquote>
        <p>
          &ldquo;In past years, the ASA, together with independent experts, has
          closely examined the evidence for claims for those devices, which can
          range from cat-shaped metal sheets with glowing eyes to ultrasonic and
          electromagnetic equipment. It has yet to accept any claim of
          efficacy.&rdquo;
        </p>
      </blockquote>
      <p>
        And on what a seller may therefore say:{" "}
        <em>
          &ldquo;Marketers who do not hold evidence in the form of UK-based
          trials should not state or imply efficacy for the products, through
          either claims, visuals or product names.&rdquo;
        </em>{" "}
        (
        <a href={SRC.asa} rel="nofollow">
          ASA/CAP, Pest repellents
        </a>
        ).
      </p>
      <p>
        <strong>
          Read that carefully, because it does not say these products do not
          work.
        </strong>{" "}
        It says no claim of efficacy has been accepted, and that a seller
        without UK trial evidence should not imply one. Those are different
        statements and this page is not going to blur them. The same guidance
        notes that{" "}
        <em>
          &ldquo;No set rules exist for testing the efficacy of repellent
          devices under UK conditions.&rdquo;
        </em>{" "}
        — so the absence of accepted evidence is partly an absence of any agreed
        way to produce it.
      </p>
      <p>
        It is also why the reviews are not the answer here. The guidance is
        explicit that{" "}
        <em>
          &ldquo;Marketers should remember that customer testimonials do not by
          themselves constitute evidence of efficacy and claims.&rdquo;
        </em>{" "}
        A long run of five-star reviews is not a trial.
      </p>

      {/* [2] Where they do not help */}
      <h2 id="limits">Where These Products Do Not Help</h2>
      <p>
        Three limits follow from the listings themselves rather than from any
        judgement of ours.
      </p>
      <p>
        <strong>An ultrasonic unit is bounded by the room it is in.</strong> The
        EcoMyLife listing states coverage of 1200 square feet per unit in a
        feature bullet, while its own detail table gives a maximum range of 93
        centimetres. We are not going to reconcile those two figures for the
        manufacturer; we report that the listing carries both.
      </p>
      <p>
        <strong>A scent product has to be re-applied to keep existing.</strong>{" "}
        The RepellShield listing directs reapplication every two to three days,
        and the REPELEM spray directs daily application to entry points for the
        first week. Those are the makers&rsquo; own instructions, and they
        describe an ongoing job rather than a fix.
      </p>
      <p>
        <strong>None of them closes the hole.</strong> Two of the four listings
        do not state a target species at all, and none of the four is a physical
        barrier. Whatever a mouse thinks of the smell or the sound, the gap it
        came through is still there in the morning.
      </p>

      {/* [3] What actually works */}
      <h2 id="proofing">What Actually Reduces Mouse Entry</h2>
      <p>
        This is the part of the page with a source behind it. Oxford City
        Council gives the measurement that decides everything else:{" "}
        <em>
          &ldquo;Even gaps as small as 6mm, like those around pipes, can allow
          entry, so sealing these is crucial.&rdquo;
        </em>{" "}
        (
        <a href={SRC.oxford} rel="nofollow">
          Oxford City Council
        </a>
        ). Six millimetres is smaller than most people search for, which is why
        a proofing job that looks thorough often is not.
      </p>
      <p>
        Defra&rsquo;s rodent control code of practice puts prevention ahead of
        everything else —{" "}
        <em>
          &ldquo;The overall aim should be to prevent rodent infestations
          becoming established in the first place.&rdquo;
        </em>{" "}
        — and is blunt about the alternative:{" "}
        <em>
          &ldquo;It is unacceptable to repeatedly make remedial applications of
          rodenticides on premises where insufficient attention is paid to
          preventing the ingress of rodents&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra code of practice
        </a>
        ). That code is written for poultry units; the animal and the gap are
        the same in a house.
      </p>
      <p>
        It also does not pretend proofing is easy:{" "}
        <em>
          &ldquo;Effective proofing of buildings or other structures against
          mouse entry is often extremely difficult due to their ability to get
          through very small gaps, but efforts to limit entry will have some
          beneficial effect.&rdquo;
        </em>{" "}
        That is a fair description of the work — not a guarantee, and better
        than anything claimed for the products below.
      </p>
      <p>
        <strong>
          We do not currently card any proofing material, and this page&rsquo;s
          description used to say we did.
        </strong>{" "}
        It offered &ldquo;Steel wool, peppermint sprays and sealants&rdquo;; no
        steel wool and no sealant has ever been carded here. The description has
        been corrected rather than the gap quietly left open.
      </p>

      {/* Product 1 */}
      <h2 id={products[0].anchorId}>
        {products[0].h2Label} &mdash; {products[0].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[0].cardName}
          features={products[0].features}
          asin={products[0].asin}
          bestFor={products[0].cardLabel}
          rank={products[0].rank}
        />
      </div>
      <p>
        A mains plug-in unit sold in twos. Its detail table lists eleven target
        species, from ants and bed bugs through to mice, rats and wasps — which
        is a wide claim for one device, and it is the manufacturer&rsquo;s, not
        ours. The coverage figure and the maximum range figure on the same
        listing do not agree with each other.
      </p>

      {/* Product 2 */}
      <h2 id={products[1].anchorId}>
        {products[1].h2Label} &mdash; {products[1].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[1].cardName}
          features={products[1].features}
          asin={products[1].asin}
          bestFor={products[1].cardLabel}
          rank={products[1].rank}
        />
      </div>
      <p>
        A 250ml peppermint oil spray for indoor use, and the only one of the
        four whose detail table names mice and rats and nothing else. The
        ultrasonic unit above also lists them, but inside a roster of eleven
        species; the other two spray and sachet listings state no target species
        at all. The maker directs reapplication every two to three days and
        persistent use over two to three weeks.
      </p>

      {/* Product 3 */}
      <h2 id={products[2].anchorId}>
        {products[2].h2Label} &mdash; {products[2].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[2].cardName}
          features={products[2].features}
          asin={products[2].asin}
          bestFor={products[2].cardLabel}
          rank={products[2].rank}
        />
      </div>
      <p>
        Also 250ml, and the maker describes the formula as peppermint oil with
        geraniol rather than peppermint alone. Its detail table states no target
        species. The directions are the most demanding of the four: daily
        application to entry points for the first week, reducing to once or
        twice weekly.
      </p>

      {/* Product 4 */}
      <h2 id={products[3].anchorId}>
        {products[3].h2Label} &mdash; {products[3].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[3].cardName}
          features={products[3].features}
          asin={products[3].asin}
          bestFor={products[3].cardLabel}
          rank={products[3].rank}
        />
      </div>
      <p>
        Six sachets, described by the maker as paper, corn cobs and peppermint
        oil, with a claimed scent life of up to 90 days per sachet. Its detail
        table states no target species. The maker suggests confined spaces —
        cars, caravans, lofts, sheds — which is the one setting where a scent
        has least room to disperse.
      </p>

      {/* [4] Alternatives */}
      <h2 id="alternatives">If This Is Not the Answer</h2>
      <p>
        <strong>Seal the building first.</strong> It is the only step on this
        page with a source behind it, and it is the one that stops the next
        mouse as well as this one.
      </p>
      <p>
        <strong>If mice are already inside, a deterrent is the wrong tool.</strong>{" "}
        Trapping is the lower-risk way to remove them — see our{" "}
        <a href="/best/mouse-traps">mouse traps</a> page.
      </p>
      <p>
        <strong>If you are considering bait, read the conditions first.</strong>{" "}
        Rodenticide has to sit in a lockable station as a condition of its own
        label, which is our{" "}
        <a href="/best/mouse-bait-stations">mouse bait stations</a> page, and
        which substance is in the pack decides whether it works on mice at all,
        which is our <a href="/best/mouse-poison">mouse poison</a> page. HSE asks
        you to weigh that step rather than take it first:{" "}
        <em>
          &ldquo;it is important to remember to consider other available control
          methods, such as those listed above, before reaching for anticoagulant
          products.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ).
      </p>

      {/* [5] Using them */}
      <h2 id="using">Using Them, If You Use Them</h2>
      <p>
        Every instruction below is the manufacturer&rsquo;s own, taken from the
        listing. We are not adding a method of our own to products whose
        efficacy no source we hold establishes.
      </p>
      <ol>
        <li>
          <strong>Follow the reapplication interval on the pack.</strong> Two to
          three days for one spray, daily for the first week for the other. A
          scent product that is not maintained is not doing whatever it does.
        </li>
        <li>
          <strong>Put sachets where air is still.</strong> The maker&rsquo;s own
          suggestion is confined spaces such as cars, caravans, lofts and sheds.
        </li>
        <li>
          <strong>Give an ultrasonic unit line of sight.</strong> Its own
          listing says the sound does not pass through walls and solid objects,
          so a unit behind furniture is covering less than the room.
        </li>
        <li>
          <strong>Do not treat any of it as the proofing job.</strong> None of
          these products closes a 6mm gap, and the gap is what let the mouse in.
        </li>
        <li>
          <strong>Judge it on whether activity actually stops.</strong>{" "}
          Droppings, gnaw marks and noise are the measure; the absence of a
          smell you have grown used to is not.
        </li>
      </ol>

      {/* [6] Comparison table */}
      <h2 id="compared">The Four Products Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
        There is no ranking column, because nothing on this page establishes an
        order.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">
                What it is
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Form as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Size as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Target species as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Where listed for use
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.asin} className="align-top">
                {p.tableCells.map((c, i) => (
                  <td key={i} className="p-2 border-b">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FindProviderCTA
        heading="Mice getting in faster than you can seal gaps?"
        subtext="Proofing an older building is a long job and not always a DIY one. Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
