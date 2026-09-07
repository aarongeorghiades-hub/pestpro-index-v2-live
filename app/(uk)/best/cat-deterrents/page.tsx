import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R6 — ROLLOUT REBUILD to the R8 pattern, on sources. LAW 191 GOVERNS THIS ROUTE:
// every product here is a deterrent, so there is no efficacy claim in our own voice, no
// superlative or ranking label and no rank numeral. Card labels are neutral factual
// descriptors from the listings; maker claims are framed as the maker's own.
//
// THE H1 PROMISED A SPRINKLER THE PAGE DOES NOT CARD. B0153BJ7NQ was removed from this
// route at S67 R5 because its listing named a different target species, and the H1 and
// subtitle were never updated — the subtitle still said "Five cat deterrents" over four
// cards. Both now describe what is here. The <title> is unchanged: ultrasonic and scent
// are both carded, so it was accurate.
//
// TWO CARD NAMES ARE CORRECTED TO THEIR FETCHED TITLES (S50-H): the Get Off pack and the
// Silent Roar box. One feature is gone entirely — the ultrasonic unit's "~7m range",
// which appears nowhere on its listing.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Cat Deterrents UK 2026 — Ultrasonic & Scent",
    description:
      "Cat deterrents for UK gardens: what the law says you may and may not do, the ASA position on repellent claims, and four products described by their listings.",
    alternates: { canonical: "https://pestproindex.com/best/cat-deterrents" },
    openGraph: {
      title: "Best Cat Deterrents UK 2026 — Ultrasonic & Scent",
      description:
        "Cat deterrents for UK gardens: what the law says you may and may not do, the ASA position on repellent claims, and four products described by their listings.",
      url: "https://pestproindex.com/best/cat-deterrents",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Cat Deterrents UK 2026 — Ultrasonic & Scent",
  description:
    "Cat deterrents for UK gardens: what the law says you may and may not do, the ASA position on repellent claims, and four products described by their listings.",
  datePublished: "2026-06-23",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/cat-deterrents" },
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
      name: "Best Cat Deterrents UK 2026",
      item: "https://pestproindex.com/best/cat-deterrents",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: asa-pest-repellents at
// ~/pp-s67r2/sources (banked S67 R2); rspca-cats-gardens and cats-protection-law at
// ~/pp-s68r6/sources, fetched 2026-09-07.
const SRC = {
  asa: "https://www.asa.org.uk/advice-online/pest-repellents.html",
  rspca: "https://www.rspca.org.uk/adviceandwelfare/pets/cats/environment/gardens",
  catsProtection: "https://www.cats.org.uk/help-and-advice/caring-for-your-cat/cats-and-the-law",
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
// TWO LISTINGS CONTRADICT THEMSELVES AND BOTH READINGS ARE RENDERED (Law 146): the Get
// Off pack is 240g in its title and 200g in its detail row, and the Silent Roar box is
// "a 0.5kg box" in its description and "0.5 Grams" in its detail row.
//
// ONE LISTING'S DETAIL TABLE BELONGS TO OTHER PRODUCTS. B01I3E0PKY's rows carry a
// jet-spray, a pepper dust and a 42 x 39 x 17 cm carton; the strip's own size comes from
// its title, and nothing else in those rows is asserted.
const products: ProductRecord[] = [
  {
    anchorId: "best-ultrasonic",
    asin: "B075XN4NNB",
    cardName: "Pestbye Pack of 2 Solar Waterproof Cat Repellent — Ultrasonic, Ground Stake",
    cardLabel: "Ultrasonic, solar, 2 pack",
    features: [
      "Two units, as listed, each with a ground stake",
      "Motion sensor with an adjustable frequency setting, as listed",
      "Monocrystalline solar panel that recharges in daylight, as listed",
      "Target species listed as Cat; listed for outdoor use; 1 year warranty",
      "Listed at 10.5 x 4.7 x 25 cm; no detection distance is stated on the listing",
    ],
    tableCells: ["Pestbye Solar Cat Repeller, 2 pack", "Ultrasonic, solar", "Detection range not stated", "Ultrasonic, solar, 2 pack"],
    h2Label: "Ultrasonic, solar, 2 pack",
    h2Name: "Pestbye Pack of 2 Solar Waterproof Cat Repellent",
    tocLabel: "Ultrasonic, solar, 2 pack",
    tocName: "Pestbye Solar Cat Repeller",
  },
  {
    anchorId: "best-scent",
    asin: "B00THGEB5S",
    cardName: "Get Off cat & Dog Repellent 240g, Clear",
    cardLabel: "Scent crystals, 240g",
    features: [
      "Weight stated two ways on the listing: 240g in the title, 200g in the detail row",
      "The description calls them jelly-like crystals and says they work in all weather conditions",
      "The maker says that over a period of weeks they condition a cat or dog to stay away from treated areas",
      "Listed for lawns and borders and for protecting newly-bedded plants",
      "Active substance not stated on the listing",
    ],
    tableCells: ["Get Off cat & Dog Repellent", "Scent crystals", "240g (title) / 200g (row)", "Scent crystals, 240g"],
    h2Label: "Scent crystals, 240g",
    h2Name: "Get Off cat & Dog Repellent 240g",
    tocLabel: "Scent crystals, 240g",
    tocName: "Get Off Repellent",
  },
  {
    anchorId: "best-physical",
    asin: "B01I3E0PKY",
    cardName: "Defenders STV628M Prickle Strip Dig Stopper, Cat & Dog Repellent 28 cm x 2 m, Black 3-Pack",
    cardLabel: "Prickle strips, 3 x 2m",
    features: [
      "Three strips of 28 cm x 2 m, as listed; the listing says they can be cut to size and hooked together",
      "Listed as weather-resistant plastic that plants grow through",
      "The maker describes them as safe for pets and wildlife and as working without chemicals",
      "Listed for gardens and flowerbeds",
      "The only product here that is a physical barrier rather than a scent or a sound",
    ],
    tableCells: ["Defenders Prickle Strip Dig Stopper", "Physical strips", "3 x 28 cm x 2 m, as listed", "Prickle strips, 3 x 2m"],
    h2Label: "Prickle strips, 3 x 2m",
    h2Name: "Defenders Prickle Strip Dig Stopper, 3-Pack",
    tocLabel: "Prickle strips, 3 x 2m",
    tocName: "Defenders Prickle Strips",
  },
  {
    anchorId: "best-natural",
    asin: "B0002B7OT2",
    cardName: "Silent Roar Lion Manure Cat Repellent Pellets",
    cardLabel: "Scented pellets, 0.5kg box",
    features: [
      "Pack size stated two ways on the listing: a 0.5kg box in the description, 0.5 grams in the detail row",
      "Pellets the maker says are soaked in real essence of lion dung",
      "The maker says one application can last up to three months in normal weather",
      "Listing directions: sprinkle a few more pellets after heavy rain; keep out of reach of children",
      "Target species listed as Cat; the maker says it contains no artificial chemicals",
    ],
    tableCells: ["Silent Roar Lion Manure Pellets", "Scented pellets", "0.5kg box (description) / 0.5 g (row)", "Scented pellets, 0.5kg box"],
    h2Label: "Scented pellets, 0.5kg box",
    h2Name: "Silent Roar Lion Manure Cat Repellent Pellets",
    tocLabel: "Scented pellets, 0.5kg box",
    tocName: "Silent Roar Pellets",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "Is it legal to deter cats from my garden in the UK?",
    a: "Deterring is not the problem; harming is. The RSPCA states that cats are protected by law and are free to roam, that any deterrent used must be non-harmful, and that causing unnecessary suffering to a cat is an offence under the Animal Welfare Act 2006 — as is putting down snares, poison or an unlicensed deterrent. Cats Protection adds that the law treats cats as property, so injuring someone's cat can be an offence in its own right.",
  },
  {
    q: "Do cats really have a right to roam?",
    a: "The two sources on this page put it differently, and both are quoted above rather than reconciled. The RSPCA says cats are protected by law and are free to roam. Cats Protection says it is often thought that cats have a right to roam wherever they wish, and explains that this comes from the absence of the control duties that bind dog and livestock owners rather than from a positive right.",
  },
  {
    q: "Do ultrasonic cat deterrents work?",
    a: "This page does not say. The ASA reports that it has yet to accept any claim of efficacy for pest repellent devices, ultrasonic equipment among them, and that marketers without UK-based trial evidence should not state or imply efficacy. The maker's own claims for the unit here are on its card, framed as the maker's.",
  },
  {
    q: "What does the RSPCA suggest instead?",
    a: "Its garden page lists things that are not products at all: planting shrubs closely, growing prickly plants, using small pebbles or chippings to make digging difficult, keeping flowerbeds watered, and — politely — asking the owner to provide a toilet area at home.",
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
  { id: "situation", title: "What You Are Actually Trying to Stop" },
  { id: "legal", title: "The Legal Position" },
  { id: "limits", title: "Where a Deterrent Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Placing Them" },
  { id: "compared", title: "The Four Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestCatDeterrentsPage() {
  return (
    <GuideLayout
      title="Best Cat Deterrents UK 2026 &mdash; Ultrasonic, Scent & Physical"
      subtitle="Four cat deterrents for UK gardens — ultrasonic, scent and physical — described by what their own listings state, beside what the law allows and what the ASA has accepted"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Foxes", href: "/guides/how-to-get-rid-of-foxes" },
        { title: "How to Get Rid of Squirrels", href: "/guides/how-to-get-rid-of-squirrels" },
        { title: "Pigeon Control", href: "/guides/pigeon-control" },
        { title: "Plants That Repel Pests", href: "/guides/plants-that-repel-pests" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
      ]}
      relatedProducts={[
        { title: "Best Fox Deterrents UK 2026", href: "/best/fox-deterrents" },
        { title: "Best Squirrel Deterrents UK 2026", href: "/best/squirrel-deterrents" },
        { title: "Best Bird Deterrents UK 2026", href: "/best/bird-deterrents" },
        { title: "Best Ultrasonic Pest Repellers UK 2026", href: "/best/ultrasonic-pest-repellers" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
        Four products: a solar ultrasonic pair, two scent deterrents and a set
        of plastic prickle strips. Three of them ask a cat to change its mind
        and one physically stops it digging. Before any of them, there is a
        legal position that is more restrictive than most people expect.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You want to know what you are allowed to do.</strong> Snares,
            poison and unlicensed deterrents are offences —{" "}
            <a href="#legal" className="underline">
              the legal position
            </a>
            .
          </li>
          <li>
            <strong>The problem is digging in one bed.</strong> That is the one
            thing here a physical barrier addresses directly —{" "}
            <a href="#best-physical" className="underline">
              the prickle strips
            </a>
            .
          </li>
          <li>
            <strong>You want to know whether ultrasonic works.</strong> The ASA
            has accepted no efficacy claim for the class —{" "}
            <a href="#limits" className="underline">
              where a deterrent does not work
            </a>
            .
          </li>
          <li>
            <strong>You would rather use scent.</strong> Two here —{" "}
            <a href="#best-scent" className="underline">
              jelly-like crystals
            </a>{" "}
            and{" "}
            <a href="#best-natural" className="underline">
              lion manure pellets
            </a>
            , both needing reapplication.
          </li>
          <li>
            <strong>You have not spoken to the owner.</strong> The RSPCA puts
            that on its own list of things to try —{" "}
            <a href="#alternatives" className="underline">
              if a product is not the answer
            </a>
            .
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The RSPCA states that causing unnecessary suffering to a cat is an
            offence under the Animal Welfare Act 2006, and that it is also an
            offence to put down snares, poison or an unlicensed deterrent.
            Nothing on this page is a substitute for reading that before acting.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What You Are Actually Trying to Stop</h2>
      <p>
        A cat crossing a lawn and a cat digging a seed bed are different
        problems, and only one of them has a physical answer on this page. The
        RSPCA frames the whole question as a matter of method:{" "}
        <em>
          &ldquo;The following tips can help deter cats from your garden safely
          and humanely, and, most importantly without harming them.&rdquo;
        </em>{" "}
        (
        <a href={SRC.rspca} rel="nofollow">
          RSPCA
        </a>
        ).
      </p>
      <p>
        Its own list is largely horticultural rather than commercial —{" "}
        <em>
          &ldquo;plant shrubs closely, grow prickly plants or use small pebbles
          or chippings to make it difficult for cats to dig&rdquo;
        </em>{" "}
        — which is worth reading before buying anything, because it is the same
        mechanism as the strips below at the price of a bag of gravel.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position</h2>
      <p>
        Cats are not treated in law like a fox or a rat. The RSPCA states:{" "}
        <em>&ldquo;Remember, cats are protected by law and are free to roam.&rdquo;</em>{" "}
        and{" "}
        <em>
          &ldquo;Causing unnecessary suffering to a cat is an offence under the
          Animal Welfare Act 2006. It is also an offence to put down snares,
          poison or an unlicensed deterrent.&rdquo;
        </em>{" "}
        (
        <a href={SRC.rspca} rel="nofollow">
          RSPCA
        </a>
        ). The phrase to notice is the last one: a deterrent that is not
        licensed is not neutral ground.
      </p>
      <p>
        Cats Protection puts the roaming question differently, and both readings
        stand here rather than being reconciled:{" "}
        <em>
          &ldquo;It is often thought that cats have a right to roam wherever
          they wish.&rdquo;
        </em>{" "}
        — its explanation being that this follows from the absence of the
        control duties placed on dog and livestock owners, not from a positive
        right (
        <a href={SRC.catsProtection} rel="nofollow">
          Cats Protection
        </a>
        ).
      </p>
      <p>
        And the cat in your garden belongs to somebody.{" "}
        <em>
          &ldquo;Cats are regarded in law as property, so the theft of a cat is
          treated as an offence under the Act, in the same way as theft of any
          other property.&rdquo;
        </em>{" "}
        Cats Protection adds that{" "}
        <em>
          &ldquo;If a person kills or injures a cat belonging to another person,
          they may have committed an offence under this act, because the law
          regards cats as property.&rdquo;
        </em>
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Deterrent Does Not Work</h2>
      <p>
        <strong>As a claim you can rely on.</strong> The ASA&rsquo;s
        AdviceOnline entry on pest repellents states that{" "}
        <em>
          &ldquo;In past years, the ASA, together with independent experts, has
          closely examined the evidence for claims for those devices, which can
          range from cat-shaped metal sheets with glowing eyes to ultrasonic and
          electromagnetic equipment. It has yet to accept any claim of
          efficacy.&rdquo;
        </em>{" "}
        (
        <a href={SRC.asa} rel="nofollow">
          ASA
        </a>
        ). That is a statement about evidence accepted by a regulator, not a
        finding that these products do nothing, and this page does not turn it
        into one.
      </p>
      <p>
        <strong>After the rain.</strong> Both scent products need renewing —
        the pellets&rsquo; own listing says to sprinkle more after heavy rain,
        and the crystals&rsquo; maker describes an effect built up over weeks.
        A single application is not a season.
      </p>
      <p>
        <strong>Beyond the bed it is protecting.</strong> Three strips of two
        metres cover a border, not a garden; two ultrasonic units cover two
        places, and the listing states no detection distance at all. Where a
        cat enters somewhere else, the product has not failed — it was never
        there.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Physical, scent or sound</h3>
      <p>
        One product is a barrier that works whether or not the cat cares about
        it. Two are scents that ask it to go elsewhere. One is a sound. Only the
        first is unaffected by the evidence question the ASA raises.
      </p>
      <h3>2. What has to be renewed, and how often</h3>
      <p>
        The pellets state up to three months in normal weather, and more after
        rain. The crystals describe an effect over weeks. The strips and the
        solar units state no consumable at all.
      </p>
      <h3>3. What the listing actually states</h3>
      <p>
        Two of these four listings contradict themselves on pack size, one
        carries another product&rsquo;s detail table, and the ultrasonic unit
        gives no range. The comparison table below reports each of those rather
        than tidying them away.
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
                "Two solar units on ground stakes, with a motion sensor and an adjustable frequency setting, listed for outdoor use with cat as the target species. The listing gives dimensions and a one-year warranty but no detection distance, so this page states none; the card previously claimed about seven metres, which appears nowhere on the listing.",
                "A pack the title gives as 240g and the detail row as 200g, described by the maker as jelly-like crystals for lawns and borders that condition a cat or dog to stay away over a period of weeks. No active substance is named anywhere on the listing.",
                "The one physical product here: three strips of 28 cm by 2 m that can be cut and hooked together, listed as weather-resistant and as letting plants grow through. Its detail table belongs to other products in the range, so the size on this card comes from the title.",
                "Pellets the maker says are soaked in real essence of lion dung, with up to three months claimed in normal weather and more sprinkled after rain. Its description says a 0.5kg box while its detail row says 0.5 grams; the card carries both.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Change the ground.</strong> The RSPCA&rsquo;s own list —
        shrubs planted closely, prickly plants, pebbles or chippings, beds kept
        watered — is the same mechanism as the strips, at the price of a bag of
        gravel.
      </p>
      <p>
        <strong>Talk to the owner.</strong> The RSPCA suggests asking whether
        the cat is neutered and whether it has a toilet area at home, and adds
        the instruction to be polite about it.
      </p>
      <p>
        <strong>Check what the problem really is.</strong> If it is digging in
        one bed, a barrier over that bed ends it. If it is a cat sitting on a
        wall, no product on this page is aimed at that.
      </p>

      {/* Using them */}
      <h2 id="using">Placing Them</h2>
      <ol>
        <li>
          <strong>Read the RSPCA&rsquo;s line before you buy.</strong> Non-harmful
          is the standard, and unlicensed deterrents are named as an offence.
        </li>
        <li>
          <strong>Put the barrier where the digging is.</strong> Strips go into
          the soil of the bed or along the run being used, not around the
          perimeter of the garden.
        </li>
        <li>
          <strong>Renew the scent products.</strong> More pellets after heavy
          rain, per the listing; the crystals are described as working over
          weeks rather than instantly.
        </li>
        <li>
          <strong>Site the solar units where they get light.</strong> They
          recharge in daylight, per the listing, and their stakes are what fixes
          them.
        </li>
        <li>
          <strong>Judge it on the bed, not the garden.</strong> Each of these
          protects the ground it is on.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Four Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing states two different figures, both are shown; where it states
        nothing, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Size or coverage, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Descriptor</th>
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
        heading="A problem in the garden that is not a cat?"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
