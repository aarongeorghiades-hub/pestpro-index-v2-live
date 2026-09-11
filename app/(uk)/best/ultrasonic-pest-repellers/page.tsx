import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R6 — ROLLOUT REBUILD to the R8 pattern, on sources. LAW 191 GOVERNS THIS ROUTE:
// every product is a repeller, so there is no efficacy claim in our own voice, no
// superlative or ranking label and no rank numeral. Card labels are neutral factual
// descriptors from the listings; every maker claim is framed as the maker's own.
//
// THREE NEVER TOUCH ITEMS LIVE ON THIS ROUTE AND ALL THREE SURVIVE BYTE-UNCHANGED:
//   1. the mixed-reviews FAQ question and answer, verbatim, in the faqs array below;
//   2. its FAQPage twin, which is DERIVED from that same array (Law 190), so it cannot
//      drift from the visible copy;
//   3. the "full evidence review" link label in the warning callout.
// Law 192 applies to the callout around item 3: the label is furniture and survives; the
// unsourced FTC sentence that sat beside it is replaced with sourced material.
//
// THE <title> AND H1 ARE BYTE-UNCHANGED. "Do They Work?" is a question, not a claim, and
// the standing title ruling does not reach it. The SUBTITLE is rewritten: it promised
// "the truth about what the science actually says", which is our voice ruling on the
// evidence rather than reporting it.
//
// ONE CARD NAME IS CORRECTED TO ITS FETCHED TITLE (S50-H): B0072H60MG is a spider and
// crawling insect repeller whose listed target species is Spider. It was carded as a
// "Spider & Mouse Repeller" with a feature claiming it is marketed for mice. It is not.
// This is the same product that was removed from /best/mouse-repellent at S67 R3 for
// exactly this reason; here it stays, because this route cards repellers generally.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Ultrasonic Pest Repellers UK 2026 | Do They Work?",
    description:
      "Ultrasonic pest repellers in the UK: the ASA has accepted no efficacy claim, what the wildlife-damage literature reports, and six units as their listings state.",
    alternates: { canonical: "https://pestproindex.com/best/ultrasonic-pest-repellers" },
    openGraph: {
      title: "Best Ultrasonic Pest Repellers UK 2026 | Do They Work?",
      description:
        "Ultrasonic pest repellers in the UK: the ASA has accepted no efficacy claim, what the wildlife-damage literature reports, and six units as their listings state.",
      url: "https://pestproindex.com/best/ultrasonic-pest-repellers",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Ultrasonic Pest Repellers UK 2026 | Do They Work?",
  description:
    "Ultrasonic pest repellers in the UK: the ASA has accepted no efficacy claim, what the wildlife-damage literature reports, and six units as their listings state.",
  datePublished: "2026-03-31",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/ultrasonic-pest-repellers",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pestproindex.com" },
    { "@type": "ListItem", position: 2, name: "Best", item: "https://pestproindex.com/best" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Ultrasonic Pest Repellers UK 2026",
      item: "https://pestproindex.com/best/ultrasonic-pest-repellers",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: asa-pest-repellents at
// ~/pp-s67r2/sources (banked S67 R2); icwdm-ultrasound at ~/pp-s68r6/sources, fetched
// 2026-09-07.
const SRC = {
  asa: "https://www.asa.org.uk/advice-online/pest-repellents.html",
  icwdm: "https://icwdm.org/management/repellents/ultrasound/",
};

type ProductRecord = {
  anchorId: string;
  asin: string;
  cardName: string;
  cardLabel: string;
  features: string[];
  tableCells: string[];
  h2Label: string;
  h2Name: string;
  tocLabel: string;
  tocName: string;
};

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, all inside
// the S45-C window. A property is asserted only where the listing states it (S52-E,
// S50-H); a cell the listing does not state reads "not stated".
//
// GONE, BY NAME: "Long-established UK pest control brand", "Established UK brand in this
// category" (x3), "Lets you try the technology in two places at once", "Goes where it is
// needed rather than where the sockets are" and "Marketed for spiders as well as mice" —
// the first four are our voice vouching for a repeller, the last is contradicted by its
// own listing.
//
// TWO LISTINGS CONTRADICT THEMSELVES AND BOTH READINGS ARE RENDERED (Law 146): the
// EcoMyLife pack lists 2 units and 4 pieces, and the VNEED unit lists "Is electric: No"
// while being a mains plug-in. The Big Cheese detail table also carries an unrelated
// bait-block product's rows, which are not asserted here.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B000LP64K4",
    cardName: "The Big Cheese Sonic Mouse & Rat Repeller Plug-In",
    cardLabel: "Mains plug-in, 140g",
    features: [
      "Mains plug-in; target species listed as Mouse, Rat",
      "The maker states it protects areas of up to 37m²",
      "Halo-red LED and a TEST button for an in-situ check, as listed",
      "The listing's own scope: recommended for use once infestations in the home are under control",
      "The maker describes it as suitable to use around children and pets such as cats and dogs",
    ],
    tableCells: ["The Big Cheese Sonic Repeller", "Mains plug-in", "Mouse, Rat", "Up to 37m², per the maker"],
    h2Label: "Mains plug-in, 140g",
    h2Name: "The Big Cheese Sonic Mouse & Rat Repeller Plug-In",
    tocLabel: "Mains plug-in, 140g",
    tocName: "The Big Cheese Sonic",
  },
  {
    anchorId: "vneed-plug-in",
    asin: "B08CGW5M9X",
    cardName: "VNEED Ultrasonic Pest Repeller Plug-In",
    cardLabel: "Mains plug-in, 180g",
    features: [
      "Mains plug-in; the listing describes combined electromagnetic and ultrasonic operation",
      "Target species listed as Ant, Cockroach, Flea, Fly, Mosquito, Moth, Mouse, Rat, Spider",
      "The maker states an effective area of up to 1,200 sq ft",
      "Detail row states \"Is electric: No\" on a product that plugs into a socket",
      "Listed at 0.18 kg; country of origin listed as China",
    ],
    tableCells: ["VNEED Ultrasonic Pest Repeller", "Mains plug-in", "Nine species listed", "Up to 1,200 sq ft, per the maker"],
    h2Label: "Mains plug-in, 180g",
    h2Name: "VNEED Ultrasonic Pest Repeller Plug-In",
    tocLabel: "Mains plug-in, 180g",
    tocName: "VNEED Plug-In",
  },
  {
    anchorId: "best-multiple-rooms",
    asin: "B0B8VQ6C76",
    cardName: "EcoMyLife Ultrasonic Pest Repeller (2 Pack)",
    cardLabel: "Mains plug-in, 2 pack",
    features: [
      "Pack size stated two ways on the listing: unit count 2, number of pieces 4",
      "The maker states 1,200 sq ft per repeller",
      "The listing's own limitation: ultrasound cannot pass through walls and solid objects, so it recommends one unit per room",
      "Target species listed as eleven, from ant and bed bug to wasp",
      "Mains plug-in; listed at 0.13 kg; country of origin listed as China",
    ],
    tableCells: ["EcoMyLife Ultrasonic Pest Repeller", "Mains plug-in, 2 units", "Eleven species listed", "1,200 sq ft each, per the maker"],
    h2Label: "Mains plug-in, 2 pack",
    h2Name: "EcoMyLife Ultrasonic Pest Repeller (2 Pack)",
    tocLabel: "Mains plug-in, 2 pack",
    tocName: "EcoMyLife 2 Pack",
  },
  {
    anchorId: "best-cordless",
    asin: "B0D984JR8Z",
    cardName: "Pestbye 360 Ultrasonic Rechargeable Rodent Repeller",
    cardLabel: "Rechargeable, USB-C",
    features: [
      "USB-C rechargeable; the maker states up to 170 hours on a charge",
      "Fixed and variable frequency settings listed as 20–80 kHz",
      "The maker says the variable setting is there to stop rodents becoming accustomed to the sound",
      "Listed for lofts, barns, caravans and homes — places without a power source",
      "Power source listed as Battery Powered; target species not stated in the detail table",
    ],
    tableCells: ["Pestbye 360 Rechargeable", "Rechargeable, cordless", "Rodents, per the title", "Up to 170 hours a charge, per the maker"],
    h2Label: "Rechargeable, USB-C",
    h2Name: "Pestbye 360 Ultrasonic Rechargeable Rodent Repeller",
    tocLabel: "Rechargeable, USB-C",
    tocName: "Pestbye 360",
  },
  {
    anchorId: "best-for-spiders",
    asin: "B0072H60MG",
    cardName: "Pestbye Battery Operated Spider Repellent & Deterrent — Ultrasonic Spider & Crawling Insect Repeller",
    cardLabel: "Battery unit, 2 x PP3",
    features: [
      "Target species listed as Spider — the listing does not name mice",
      "Takes two 9V PP3 batteries, not supplied; the maker states up to 12 months of continuous use",
      "The maker states a signal every 8 seconds covering an unobstructed area of up to 2,500 sq ft",
      "Listed for garages, lofts, outbuildings, sheds, greenhouses and river boats",
      "The maker describes it as safe for pets, wildlife (except rodents) and humans",
    ],
    tableCells: ["Pestbye Spider & Crawling Insect Repeller", "Battery, 2 x PP3", "Spider", "Up to 2,500 sq ft unobstructed, per the maker"],
    h2Label: "Battery unit, 2 x PP3",
    h2Name: "Pestbye Battery Operated Spider & Crawling Insect Repeller",
    tocLabel: "Battery unit, 2 x PP3",
    tocName: "Pestbye Spider Repeller",
  },
  {
    anchorId: "pestbye-long-life",
    asin: "B003ZIV9Y0",
    cardName: "Pestbye Long Life Battery Operated Sonic Rat and Mouse Repellent",
    cardLabel: "Battery unit, long-life",
    features: [
      "Target species listed as Mouse, Rat",
      "Takes two 9V PP3 batteries, not supplied; the maker states 8 to 12 months of continuous use",
      "The maker states a signal every 8 seconds covering an unobstructed area of up to 2,500 sq ft",
      "Listed for homes, garages, lofts, outbuildings, sheds and greenhouses",
      "Listed at 9.7 x 9.7 x 2.5 cm with a 2 year warranty",
    ],
    tableCells: ["Pestbye Long Life Sonic Repellent", "Battery, 2 x PP3", "Mouse, Rat", "Up to 2,500 sq ft unobstructed, per the maker"],
    h2Label: "Battery unit, long-life",
    h2Name: "Pestbye Long Life Battery Operated Sonic Rat and Mouse Repellent",
    tocLabel: "Battery unit, long-life",
    tocName: "Pestbye Long Life",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
// THE FINAL ENTRY IS NEVER TOUCH AND IS REPRODUCED BYTE-FOR-BYTE.
const faqs: { q: string; a: string }[] = [
  {
    q: "Do ultrasonic pest repellers work?",
    a: "This page does not answer that in its own voice, and no product page should. The ASA reports that it has yet to accept any claim of efficacy for pest repellent devices, ultrasonic equipment among them. The Internet Center for Wildlife Damage Management goes further for rodents specifically, listing references it says show ultrasound devices are not effective in controlling them, while also reporting a 2011 finding of some evidence that ultrasound kept bats and mice out of an open area. Both are quoted in full above.",
  },
  {
    q: "Are ultrasonic pest repellers safe for pets (dogs, cats)?",
    a: "The makers' own claims differ and are on each card: one says its unit is suitable around children and pets such as cats and dogs, another that it is safe for pets and wildlife except rodents. No fetched source on this page tests those claims. A pet that can hear into the ultrasonic range — rabbits, hamsters, guinea pigs and rodents kept as pets — is the case to think about, because these devices are aimed at rodent hearing.",
  },
  {
    q: "How many units do I need?",
    a: "The EcoMyLife listing answers this against its own product: it states that ultrasound cannot pass through walls and solid objects and recommends installing one unit per room. The stated coverage figures on this page range from 37m² to 1,200 sq ft to 2,500 sq ft unobstructed, and every one of them is the maker's own.",
  },
  {
    q: "Do they work on rats, mice, spiders and insects?",
    a: "The listings disagree about which species they address, and that is a fact about the listings rather than about the devices: one names mouse and rat only, one names spider only, one names nine species and one names eleven. The comparison table below carries each listing's own target species.",
  },
  {
    q: "Can I use one alongside traps and poison?",
    a: "Nothing on these listings says otherwise, and one of them — The Big Cheese unit — states its own scope as being for use once an infestation in the home is under control. Our rat trap, mouse trap, rat poison and mouse poison pages cover the methods that act on the animal directly.",
  },
  {
    q: "Why are reviews so mixed for ultrasonic pest repellers?",
    a: "Reviews for ultrasonic pest repellers are notoriously polarised — you will see a mix of five-star and one-star reviews for virtually every product on the market. This is likely because: confirmation bias plays a role (people who buy them want them to work); pest activity is often seasonal and may decline naturally, leading people to credit the device; some users may simultaneously be taking other measures (cleaning, sealing gaps) without realising those actions are doing the real work; and the devices may have a short-term startling effect on pests that wears off quickly as they habituate.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const tocItems = [
  { id: "situation", title: "What These Devices Are" },
  { id: "evidence", title: "What the Regulator and the Literature Say" },
  { id: "limits", title: "Where They Do Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If This Is Not the Answer" },
  { id: "using", title: "Placing One" },
  { id: "compared", title: "The Six Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestUltrasonicPestRepellersPage() {
  return (
    <GuideLayout
      title="Best Ultrasonic Pest Repellers UK 2026 | Do They Work?"
      subtitle="Six plug-in and battery ultrasonic repellers described by what their own listings state, beside the ASA's position on repellent claims and what the wildlife-damage literature reports"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        {
          title: "Ultrasonic Pest Repellers: Do They Work?",
          href: "/guides/ultrasonic-pest-repellers-do-they-work",
        },
        { title: "How to Get Rid of Rats", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Mice", href: "/guides/how-to-get-rid-of-mice" },
        {
          title: "Professional vs DIY Pest Control",
          href: "/guides/professional-pest-control-vs-diy",
        },
      ]}
      relatedProducts={[
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        { title: "Best Rodent Proofing Products UK 2026", href: "/best/rodent-proofing" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Affiliate disclosure */}
      <div className="not-prose mb-8 rounded-xl border border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] p-4">
        <p className="text-sm text-[var(--color-ochre-deep)]">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        Six devices that emit sound above human hearing: four mains plug-ins and
        two battery units. This page sets out what the advertising regulator has
        accepted about that class, what the wildlife-damage literature reports,
        and then what each listing states — in that order, because the first two
        are what a reader needs before the third.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You want to know whether these work before you buy.</strong>{" "}
            Read the regulator and the literature first —{" "}
            <a href="#evidence" className="underline">
              what the regulator and the literature say
            </a>
            .
          </li>
          <li>
            <strong>You have an active infestation right now.</strong> One
            listing here scopes itself to after that is under control —{" "}
            <a href="#limits" className="underline">
              where they do not work
            </a>
            .
          </li>
          <li>
            <strong>You want one for a loft, shed or caravan.</strong> Three run
            without a socket —{" "}
            <a href="#best-cordless" className="underline">
              the rechargeable
            </a>
            ,{" "}
            <a href="#best-for-spiders" className="underline">
              the spider unit
            </a>{" "}
            and{" "}
            <a href="#pestbye-long-life" className="underline">
              the long-life rodent unit
            </a>
            .
          </li>
          <li>
            <strong>You have more than one room.</strong> One maker states its
            own sound will not pass through a wall —{" "}
            <a href="#best-multiple-rooms" className="underline">
              the two-pack
            </a>
            .
          </li>
          <li>
            <strong>You want the species the listing actually names.</strong>{" "}
            They range from one to eleven —{" "}
            <a href="#compared" className="underline">
              the comparison table
            </a>
            .
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The ASA reports that it has yet to accept any claim of efficacy for
            pest repellent devices, and the Internet Center for Wildlife Damage
            Management lists references it says show ultrasound devices are not
            effective in controlling rodents. Treat these as a supplement to
            traps, proofing and sanitation rather than a substitute for them,
            and read our{" "}
            <a
              href="/guides/ultrasonic-pest-repellers-do-they-work"
              className="underline font-semibold"
            >
              full evidence review
            </a>{" "}
            before buying.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What These Devices Are</h2>
      <p>
        Ultrasound is defined by the Internet Center for Wildlife Damage
        Management as sound above the upper limit of human hearing, about 20
        kilohertz. Every unit here emits it: four from a wall socket, two from
        9V batteries, and one of the six from a rechargeable cell. Their own
        listings state coverage figures from 37m² to 2,500 sq ft, and those
        figures are the makers&rsquo;.
      </p>
      <p>
        What none of them does is touch the animal. There is no trap, no bait
        and no barrier on this page — which is why the evidence question below
        is not academic, and why every alternative named at the end of the page
        acts on something physical.
      </p>

      {/* [1] Evidence */}
      <h2 id="evidence">What the Regulator and the Literature Say</h2>
      <p>
        The ASA&rsquo;s AdviceOnline entry on pest repellents sets out the
        advertising position:{" "}
        <em>
          &ldquo;In past years, the ASA, together with independent experts, has
          closely examined the evidence for claims for those devices, which can
          range from cat-shaped metal sheets with glowing eyes to ultrasonic and
          electromagnetic equipment. It has yet to accept any claim of
          efficacy.&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;Marketers who do not hold evidence in the form of UK-based
          trials should not state or imply efficacy for the products, through
          either claims, visuals or product names.&rdquo;
        </em>{" "}
        (
        <a href={SRC.asa} rel="nofollow">
          ASA
        </a>
        ). That is a statement about what evidence has been accepted. It is not
        a finding that these devices do nothing, and this page does not restate
        it as one.
      </p>
      <p>
        The wildlife-damage literature is more specific about rodents. The
        Internet Center for Wildlife Damage Management writes:{" "}
        <em>
          &ldquo;Here are several references that show that ultrasound devices
          are not effective in controlling rodents.&rdquo;
        </em>{" "}
        and quotes a researcher on that work:{" "}
        <em>
          &ldquo;I think we demonstrated that the success of a rodent control
          program with ultrasonics was just as successful if the units were not
          turned on.&rdquo;
        </em>{" "}
        (
        <a href={SRC.icwdm} rel="nofollow">
          ICWDM
        </a>
        ).
      </p>
      <p>
        The same page reports the other side of it, and so does this one:{" "}
        <em>
          &ldquo;In 2011, one researcher found some evidence that ultrasound did
          keep bats and mice out of an open area (e.g. empty floor, open
          rafters).&rdquo;
        </em>{" "}
        An open loft with no clutter is the setting that finding describes, and
        it is not the setting most of these products are bought for.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where They Do Not Work</h2>
      <p>
        <strong>Through a wall.</strong> This is not our claim about the class;
        it is a maker&rsquo;s claim about its own product. The EcoMyLife listing
        states that ultrasound cannot pass through walls and solid objects and
        recommends one unit per room. Furniture, boxes and doors are in the same
        category as walls.
      </p>
      <p>
        <strong>On an infestation already under way.</strong> The Big Cheese
        listing scopes itself: recommended for use once infestations in the home
        are under control. That is the maker of one of these six drawing the
        line, not us.
      </p>
      <p>
        <strong>As the whole of a control programme.</strong> ICWDM&rsquo;s
        references are quoted above. Whatever weight a reader gives them, a
        device that emits sound does not block a gap, remove a food source or
        catch anything.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Power, and where the unit has to go</h3>
      <p>
        Four are mains plug-ins and go where the sockets are. Two run on 9V PP3
        batteries the listings say are not supplied, and one recharges over
        USB-C with up to 170 hours claimed. A loft with no socket rules out four
        of the six.
      </p>
      <h3>2. The species the listing actually names</h3>
      <p>
        Mouse and rat on two of them; spider only on one; nine species on one;
        eleven on another; and one names none in its detail table. A listing
        naming eleven species is making a broader claim than a listing naming
        two, and the table records which is which.
      </p>
      <h3>3. The coverage figure, and whose figure it is</h3>
      <p>
        37m², 1,200 sq ft, 2,500 sq ft unobstructed. Every one of those is
        stated by the maker, and the word &ldquo;unobstructed&rdquo; is doing
        real work in the two that use it, given what the EcoMyLife listing says
        about walls.
      </p>

      {products.map((p, i) => (
        <div key={p.asin}>
          <h2 id={p.anchorId}>
            {p.h2Label} &mdash; {p.h2Name}
          </h2>
          <div className="not-prose my-6">
            <ProductCard
              name={p.cardName}
              features={p.features}
              asin={p.asin}
              bestFor={p.cardLabel}
            />
          </div>
          <p>
            {
              [
                "A mains plug-in listed for mice and rats with a TEST button and an indicator LED, which the maker rates at up to 37m². Its listing is the one here that scopes itself, recommending use once an infestation in the home is under control; its detail table also carries an unrelated bait-block product's rows, which are not read here.",
                "A mains plug-in whose listing describes combined electromagnetic and ultrasonic operation and names nine target species, with up to 1,200 sq ft claimed. Its detail table says \"Is electric: No\" of a device that plugs into a socket.",
                "Two mains units, listed as unit count 2 and number of pieces 4, each rated by the maker at 1,200 sq ft. This is the listing that states its own limitation plainly: ultrasound does not pass through walls and solid objects, so it recommends one per room.",
                "A USB-C rechargeable unit for places without a socket — lofts, barns, caravans — with up to 170 hours a charge claimed and fixed or variable frequency between 20 and 80 kHz, which the maker says is there to stop rodents becoming accustomed to the sound.",
                "A battery unit taking two 9V PP3 cells, not supplied, which the maker rates at up to 12 months and an unobstructed 2,500 sq ft with a pulse every 8 seconds. Its listed target species is Spider; the card previously said it was marketed for mice, and the listing does not say that.",
                "The rodent counterpart of the unit above: two 9V PP3 cells, not supplied, 8 to 12 months claimed, the same 8-second pulse and unobstructed 2,500 sq ft, with mouse and rat as the listed target species and a two-year warranty.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If This Is Not the Answer</h2>
      <p>
        <strong>Close the way in.</strong> Our{" "}
        <a href="/best/rodent-proofing">rodent proofing</a> page covers mesh,
        wire wool and brush strips — the things that stop an animal entering
        rather than asking it to leave.
      </p>
      <p>
        <strong>Trap.</strong> Our <a href="/best/rat-traps">rat traps</a> and{" "}
        <a href="/best/mouse-traps">mouse traps</a> pages cover the methods that
        act on the animal directly.
      </p>
      <p>
        <strong>Read the evidence in full.</strong> Our{" "}
        <a href="/guides/ultrasonic-pest-repellers-do-they-work">
          guide to whether ultrasonic repellers work
        </a>{" "}
        goes further into the studies than a product page should.
      </p>

      {/* Using them */}
      <h2 id="using">Placing One</h2>
      <ol>
        <li>
          <strong>One per room, if you follow the makers&rsquo; own advice.</strong>{" "}
          The EcoMyLife listing says the sound does not cross a wall.
        </li>
        <li>
          <strong>Keep the line of sight clear.</strong> Two listings state
          their coverage figure for an unobstructed area, which a furnished room
          is not.
        </li>
        <li>
          <strong>Buy the batteries.</strong> Both PP3 units state that cells
          are not supplied.
        </li>
        <li>
          <strong>Do the other things at the same time.</strong> Proofing,
          cleaning and trapping are what the ICWDM references above are
          measuring these against.
        </li>
        <li>
          <strong>Judge it against what you also changed.</strong> If gaps were
          sealed in the same week, the device is not the only variable — which
          is the point the last question below makes.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Six Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        coverage figure attributed to the maker who claims it. Where a listing
        does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Power</th>
              <th className="text-left p-2 border-b font-semibold">Target species, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Coverage claimed by the maker</th>
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

      {/* FAQ — rendered from the same array the schema above is derived from */}
      <h2 id="faq">Frequently Asked Questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <FindProviderCTA
        heading="A rodent problem that needs dealing with?"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
