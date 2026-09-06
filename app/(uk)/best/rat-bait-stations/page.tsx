import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S67 R8 — ROLLOUT REBUILD. Title and H1 byte-unchanged. Award labels, rank numerals
// and card order are UNCHANGED: these are bait stations, not repellents, so Law 191
// does not reach them.
//
// THE DESCRIPTION IS REWRITTEN. It said "Our pick of the best rat bait stations …
// stations for poison and snap traps". No listing here states snap-trap compatibility;
// that came from a feature bullet this round deletes as unsupported.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Rat Bait Stations UK 2026: Tamper-Resistant & Lockable",
    description:
      "Lockable rat bait stations for UK homes: the standard a station has to meet, what the label requires of you, and five compared on what the listings state.",
    alternates: { canonical: "https://pestproindex.com/best/rat-bait-stations" },
    openGraph: {
      title: "Best Rat Bait Stations UK 2026: Tamper-Resistant & Lockable",
      description:
        "Lockable rat bait stations for UK homes: the standard a station has to meet, what the label requires of you, and five compared on what the listings state.",
      url: "https://pestproindex.com/best/rat-bait-stations",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Rat Bait Stations UK 2026: Tamper-Resistant & Lockable",
  description:
    "Lockable rat bait stations for UK homes: the standard a station has to meet, what the label requires of you, and five compared on what the listings state.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/rat-bait-stations" },
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
      name: "Best Rat Bait Stations UK 2026",
      item: "https://pestproindex.com/best/rat-bait-stations",
    },
  ],
};

// S67 R8 — THE FAQ IS REMOVED, BLOCK AND SCHEMA TOGETHER (Law 190). All six questions
// are answered by the body above — the legal requirement at #legal, the standard at
// #standard, placement and checking at #using, whether a station is needed at all at
// #situation — or by a general search without this page's products.

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually read (S59-A). All three bodies were banked at S66 R8 and are kept under
// Law 175; none was re-fetched this round.
const SRC = {
  crru:
    "https://thinkwildlife.org/implications-for-rodenticide-users-of-new-label-text-specifying-bait-station-standards/",
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
  defra:
    "https://www.gov.uk/government/publications/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms",
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
  tocLabel: string;
  tocName: string;
};

// AWARD LABELS, RANK NUMERALS, ANCHOR IDS, CARD ORDER AND EVERY NAME ARE UNCHANGED.
// Only the feature text and the comparison cells are rebuilt, from the banked Amazon
// bodies fetched 2026-09-01 and inside the S45-C window. A property is asserted only
// where the listing's own title or detail table states it (S52-E, S50-H); a cell the
// listing does not state reads "not stated".
//
// FOUR CLAIMS ARE GONE AND ARE WORTH NAMING. "Accepts both poison bait blocks and snap
// traps" — no listing here mentions a snap trap. "Used by BPCA-certified pest
// controllers" — no listing says so and we hold no source for it. "Ground anchor points
// for permanent installation" and "UV-stabilised plastic" — neither is on the listing.
// The G3 hit "Trusted Rentokil brand" went with them: trusted is banned in our own
// voice, and it was carrying no information anyway.
//
// TWO PRODUCTS HERE INCLUDE RODENTICIDE and the page now says so on the card rather
// than leaving a reader to discover it: the Big Cheese pack ships 900g of bait with
// three boxes, and the Pest Expert kit ships 1.5kg of brodifacoum blocks with two.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B072KL5YRK",
    rank: 1,
    cardName: "Rentokil Advanced Rat Bait Station",
    cardLabel: "Best Overall",
    features: [
      "Listed as lockable, tamper-resistant and reusable",
      "One station; no bait included",
      "Listed at 26.6 x 17 x 11.3 cm and 340 grams",
      "Target species listed as Rat",
      "Clear plastic",
    ],
    tableCells: ["Rentokil Advanced", "1 station, no bait", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Rentokil Advanced Rat Bait Station",
    tocLabel: "Best Overall",
    tocName: "Rentokil Advanced Bait Station",
  },
  {
    anchorId: "best-professional",
    asin: "B010E2GRGO",
    rank: 2,
    cardName: "Pest Expert Professional Rat Bait Station",
    cardLabel: "Best Professional-Grade",
    features: [
      "Two boxes with a key included",
      "Listed as taking blocks, grain and pasta bait",
      "Listed at 28.4 x 21.8 x 21.6 cm and 770 grams",
      "Target species listed as Mouse, Rat",
      "Listed for outdoor use; no bait included",
    ],
    tableCells: ["Pest Expert Station", "2 stations, no bait", "Best Professional"],
    h2Label: "Best Professional",
    h2Name: "Pest Expert Rat Bait Station",
    tocLabel: "Best Professional",
    tocName: "Pest Expert Rat Bait Station",
  },
  {
    anchorId: "best-value",
    asin: "B00XL382T4",
    rank: 3,
    cardName: "Roshield External Rat Bait Station Box",
    cardLabel: "Best Value",
    features: [
      "Two extra-large stations, listed as no bait included",
      "Listed with a secure solid lid for inspection",
      "Listed at 26 x 19 x 12 cm and 500 grams",
      "Target species listed as Mouse, Rat",
      "Listed for indoor and outdoor use",
    ],
    tableCells: ["Roshield PRO BOX", "2 stations, no bait", "Best Value"],
    h2Label: "Best Value",
    h2Name: "Roshield External Bait Box",
    tocLabel: "Best Value",
    tocName: "Roshield External Bait Box",
  },
  {
    anchorId: "best-multi",
    asin: "B088TH1XCS",
    rank: 4,
    cardName: "The Big Cheese Rat Bait Station Pack",
    cardLabel: "Best Multi-Pack",
    features: [
      "Three bait boxes supplied with 900g of bait",
      "Bait blocks included — this is not an empty box",
      "Target species listed as Rodents",
      "Active substance stated on the listing: difenacoum",
    ],
    tableCells: ["Big Cheese Rat Station", "3 stations, 900g bait included", "Best Multi-Pack"],
    h2Label: "Best Multi-Pack",
    h2Name: "The Big Cheese Rat Bait Station",
    tocLabel: "Best Multi-Pack",
    tocName: "The Big Cheese Rat Bait Station",
  },
  {
    anchorId: "best-kit",
    asin: "B010E2H7KY",
    rank: 5,
    cardName: "Pest Expert Rat Bait Station + Poison Kit",
    cardLabel: "Best Complete Kit",
    features: [
      "Two lockable bait boxes with 1.5kg of bait blocks",
      "Active substance stated on the listing: brodifacoum",
      "Listed as 5 x 300g single-feed blocks",
      "Everything to deploy in one purchase",
    ],
    tableCells: ["Pest Expert Kit", "2 stations, 1.5kg brodifacoum", "Best Kit"],
    h2Label: "Best Complete Kit",
    h2Name: "Pest Expert Station + Poison Kit",
    tocLabel: "Best Complete Kit",
    tocName: "Pest Expert Station + Poison Kit",
  },
];

// The contents entry is DERIVED from the same fields the h2 renders, so an entry cannot
// say something the heading does not (the S66 R4 pattern).
const tocItems = [
  { id: "situation", title: "Do You Need a Station at All?" },
  { id: "legal", title: "What the Label Requires of You" },
  { id: "limits", title: "Where a Bait Station Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Bait Is Not the Answer" },
  { id: "using", title: "Placing and Checking Them" },
  { id: "compared", title: "Best Rat Bait Stations Compared" },
];

export default function BestRatBaitStationsPage() {
  return (
    <GuideLayout
      title="Best Rat Bait Stations UK 2026: Tamper-Resistant & Lockable"
      subtitle="Lockable boxes that hold rodenticide where a rat can reach it and a child or a dog cannot — five compared on what their listings state"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Rats: Complete UK Guide", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Mice: Complete UK Guide", href: "/guides/how-to-get-rid-of-mice" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "How to Get Rid of Bed Bugs: Complete UK Guide", href: "/guides/how-to-get-rid-of-bed-bugs" },
        { title: "How to Get Rid of Cockroaches: Complete UK Guide", href: "/guides/how-to-get-rid-of-cockroaches" },
        { title: "How to Get Rid of Fleas: Complete UK Guide", href: "/guides/how-to-get-rid-of-fleas" },
        { title: "How to Get Rid of Ants: Complete UK Guide", href: "/guides/how-to-get-rid-of-ants" },
        { title: "Wasp Nest Removal: Complete UK Guide", href: "/guides/wasp-nest-removal" },
        { title: "How to Get Rid of Squirrels: Complete UK Guide", href: "/guides/how-to-get-rid-of-squirrels" },
        { title: "Pigeon Control: Complete UK Guide", href: "/guides/pigeon-control" },
        { title: "How to Get Rid of Moths", href: "/guides/how-to-get-rid-of-moths" },
        { title: "Restaurant Pest Control: UK Compliance Guide", href: "/guides/restaurant-pest-control" },
        { title: "Carpet Beetle Control: Complete UK Guide", href: "/guides/carpet-beetle-control" },
      ]}
      relatedProducts={[
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        { title: "Best Cockroach Killers UK 2026", href: "/best/cockroach-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        {
          title: "Best Commercial Rodent Bait Stations UK 2026",
          href: "/best/commercial-rodent-bait-stations",
        },
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
        A bait station is a lockable box that holds rodenticide where a rat can
        reach it and a child or a dog cannot. It is a container, not a treatment
        — three of the five here are sold empty, and two arrive with bait in
        them.
      </p>

      {/* DECISION BLOCK — situation first, product second. The legal line and the
          does-not-help line sit ABOVE the product lines. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You are not sure you should be putting poison down.</strong>{" "}
            HSE is plain that anticoagulants carry more risk than is normally
            acceptable (
            <a href={SRC.hse} rel="nofollow" className="underline">
              HSE
            </a>
            ) —{" "}
            <a href="#situation" className="underline">
              whether you need a station at all
            </a>
            .
          </li>
          <li>
            <strong>You do not know what the law asks of you.</strong> The
            station requirement is a legally binding label instruction, and the
            box is your responsibility —{" "}
            <a href="#legal" className="underline">
              what the label requires
            </a>
            .
          </li>
          <li>
            <strong>You have baited before and the rats kept coming.</strong>{" "}
            A box in the wrong place, or read too early, looks like failure —{" "}
            <a href="#limits" className="underline">
              where a station does not help
            </a>
            .
          </li>
          <li>
            <strong>You want one box that arrives ready to use.</strong> Two
            here ship with bait —{" "}
            <a href="#best-multi" className="underline">
              the three-box pack
            </a>{" "}
            and{" "}
            <a href="#best-kit" className="underline">
              the brodifacoum kit
            </a>
            .
          </li>
          <li>
            <strong>You already have bait and want boxes only.</strong> Three
            are supplied empty —{" "}
            <a href="#best-overall" className="underline">
              the single station
            </a>
            ,{" "}
            <a href="#best-professional" className="underline">
              the two-box pack
            </a>{" "}
            and{" "}
            <a href="#best-value" className="underline">
              the extra-large pair
            </a>
            .
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Rodenticide is toxic to mammals generally, not only to rats. Every
            bait on this page must be used inside a tamper-resistant station,
            and that is a condition of the product&rsquo;s label rather than a
            recommendation.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Do You Need a Station at All?</h2>
      <p>
        A station does not kill anything. It holds bait, keeps it dry, and keeps
        it away from anyone it is not meant for. If you are not putting
        rodenticide down, you do not need one — trapping and proofing are
        different pages.
      </p>
      <p>
        And bait is not the default. HSE states that{" "}
        <em>
          &ldquo;Risk assessments carried out by regulators, including HSE, have
          shown that anticoagulants present a higher risk to people and
          non-target animals than is normally acceptable for authorisation in
          Great Britain and Northern Ireland.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). They are authorised under controls, not because they are safe.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What the Label Requires of You</h2>
      <p>
        The station requirement is not advice. CRRU UK, which co-ordinates UK
        rodenticide stewardship, sets out the label text HSE requires: a
        tamper-resistant station must be{" "}
        <em>
          &ldquo;Strong enough to prevent entry or destruction by dogs.&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;Lockable or sealable so that children and dogs cannot gain
          access through the opening or mechanisms used to fill the bait
          compartments.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crru} rel="nofollow">
          CRRU UK
        </a>
        ).
      </p>
      <p>
        And the box is yours to get right, not the bait manufacturer&rsquo;s.
        CRRU is explicit:{" "}
        <em>
          &ldquo;It is the responsibility of the end user to ensure the bait
          station employed complies with the new label requirements.&rdquo;
        </em>{" "}
        That is the test to apply to every box below — lockable, strong, and
        weather-resistant if it is going outside.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Bait Station Does Not Help</h2>
      <p>
        <strong>It does nothing about the way in.</strong> A station reduces the
        rats that are here. The gap they came through is still there, and a new
        rat will find it.
      </p>
      <p>
        <strong>It will not tell you anything for a fortnight.</strong> Defra&rsquo;s
        code of practice for rodent control notes that{" "}
        <em>
          &ldquo;it is best to allow at least two to three weeks for rats to get
          used to feeding in bait boxes placed in their environment, before
          deciding on whether the method being used is working.&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra code of practice
        </a>
        ). Rats are wary of new objects. A box ignored in week one is normal, not
        a fault in the box.
      </p>
      <p>
        <strong>An empty box is not a treatment.</strong> Three of the five here
        ship with no bait at all, and which rodenticide you put in them is a
        separate decision with its own label conditions.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Bait included, or an empty box</h3>
      <p>
        This is the single biggest difference on the page and the comparison
        table states it for every row. Two products arrive with rodenticide in
        them; three do not.
      </p>
      <h3>2. How many boxes you actually need</h3>
      <p>
        Packs here run from one station to three. Count the places you have seen
        activity — runs along walls, burrow entrances, the route to a bin — and
        buy for that number rather than for the size of the garden.
      </p>
      <h3>3. Whether the listing states what is in the bait</h3>
      <p>
        Both bait-carrying products name their active substance. The Pest Expert
        kit states brodifacoum; the Big Cheese pack states difenacoum. Neither
        figure is on the detail table &mdash; both are in the listing&rsquo;s own
        description, which is where to read it.
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
              rank={p.rank}
            />
          </div>
          <p>
            {
              [
                "A single clear station, listed as lockable, tamper-resistant and reusable, with rat as its only stated target species. No bait is included, so the label conditions of whatever you put in it are yours to read.",
                "Two black boxes with a key, listed as taking blocks, grain and pasta bait — which is the detail that tells you what bait format to buy. The largest footprint here at 28.4 x 21.8 x 21.6 cm.",
                "Two extra-large stations with a solid lid the listing describes as being for easy inspection. Supplied empty, and listed for indoor and outdoor use.",
                "Three boxes supplied with 900g of bait, so this arrives ready to deploy. Its description states the bait contains difenacoum — read the pack before you use it.",
                "Two lockable boxes with 1.5kg of blocks, listed as five 300g single-feed packs containing brodifacoum. One of the two products here whose listing names its active substance.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If Bait Is Not the Answer</h2>
      <p>
        <strong>Proof the building first.</strong> Bait removes the rats that
        are here; it does nothing about the way in.
      </p>
      <p>
        <strong>Trap instead of baiting.</strong> If there are children, pets or
        non-target animals about and you would rather not have rodenticide in the
        house at all, a trap is a different trade-off — see our{" "}
        <a href="/best/rat-traps">rat traps</a> page.
      </p>
      <p>
        <strong>Read the substance question before you buy bait.</strong> Which
        rodenticide goes in the box decides whether it works — our{" "}
        <a href="/best/rat-poison">rat poison</a> page covers that separately.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Placing and Checking Them</h2>
      <ol>
        <li>
          <strong>Put them on the runs, not where it is tidy.</strong> Rats
          travel along walls and fixed edges; a box in the middle of a lawn is a
          box in the wrong place.
        </li>
        <li>
          <strong>Lock them and keep the key.</strong> A station that is not
          locked is a bowl.
        </li>
        <li>
          <strong>Give it two to three weeks before you judge it.</strong> That
          is Defra&rsquo;s own guidance above, and it is the most common reason a
          working station gets moved too early.
        </li>
        <li>
          <strong>Check consumption rather than time elapsed.</strong> You cannot
          tell whether bait is being taken without opening the box.
        </li>
        <li>
          <strong>Follow the bait&rsquo;s own label.</strong> The station does
          not change what the label on the rodenticide requires.
        </li>
      </ol>

      {/* [16] Comparison table */}
      <h2 id="compared">Best Rat Bait Stations Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">
                Pack and bait, as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">Award</th>
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
        heading="Rats you cannot get on top of?"
        subtext="For a persistent infestation, or one you would rather not treat with rodenticide yourself, compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
