import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Mouse Bait Stations UK 2026 | Tamper-Proof & Pet-Safe",
    description:
      "Mouse bait stations for UK homes. When a station is the right answer, the standard one has to meet, and five compared on what the listings state.",
    alternates: {
      canonical: "https://pestproindex.com/best/mouse-bait-stations",
    },
    openGraph: {
      title: "Best Mouse Bait Stations UK 2026 | Tamper-Proof & Pet-Safe",
      description:
        "Mouse bait stations for UK homes. When a station is the right answer, the standard one has to meet, and five compared on what the listings state.",
      url: "https://pestproindex.com/best/mouse-bait-stations",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Mouse Bait Stations UK 2026: Tamper-Proof & Pet-Safe",
  description:
    "Mouse bait stations for UK homes. When a station is the right answer, the standard one has to meet, and five compared on what the listings state.",
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
    "@id": "https://pestproindex.com/best/mouse-bait-stations",
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
      name: "Best Mouse Bait Stations UK 2026",
      item: "https://pestproindex.com/best/mouse-bait-stations",
    },
  ],
};

// S66 R8 — THE FAQ IS REMOVED, BLOCK AND STRUCTURED DATA TOGETHER. All six answers
// were either given by the body above them — safety around children and pets at
// #standard, placement and how many at #what-decides and #using, what bait at
// #legal, how often to check at #using — or answerable by a general search without
// this page's products.

// SOURCES. Every quotation on this page is extracted by byte range from a body saved
// under ~/pp-s66r8/sources/, or from a banked Amazon listing, and verified by exact
// string match before it was written here (Law 164). Each citation names the host
// actually read (S59-A).
const SRC = {
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
  crru: "https://thinkwildlife.org/implications-for-rodenticide-users-of-new-label-text-specifying-bait-station-standards/",
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
};

// S66 R8. AWARD LABELS, RANK NUMERALS AND CARD ORDER ARE UNCHANGED on every surface.
// FEATURE text is rebuilt from the banked Amazon bodies fetched 2026-09-01 and
// re-read this round, inside the S45-C freshness window. A property is asserted only
// where the listing's own feature text, detail table or fetched title states it
// (S52-E, S50-H); a comparison cell the listing does not state reads "not stated".
//
// TWO CLAIMS WERE REMOVED FROM EVERY CARD AND ARE WORTH NAMING HERE. The page used
// to assert an entry-hole diameter of "approximately 25mm" and that a hole that size
// is too small for "a cat's paw or a toddler's fingers". NOT ONE of the five
// listings states an entry-hole size, and no source fetched this round states one.
// Those were unsourced SAFETY assurances, which is the worst kind to carry, and they
// are replaced by the actual published standard a station must meet.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B07J2NSX9M",
    rank: 1,
    cardName: "Roshield 5x Pre-Baited Mouse Bait Box Kit",
    cardLabel: "Best Overall",
    features: [
      "5 lockable tamper-resistant stations, supplied pre-baited",
      "Blocks listed as containing brodifacoum",
      "Includes an access key for re-baiting",
      "Designed to take a range of rodenticide formats",
      "Listed as manufactured in the UK",
    ],
    tableCells: [
      "Roshield 5x Pre-Baited Kit",
      "Best Overall",
      "5 stations",
      "Supplied pre-baited",
      "Lockable, tamper-resistant",
      "not stated",
    ],
    h2Label: "Best Overall",
    h2Name: "Roshield 5x Pre-Baited Mouse Bait Box Kit",
  },
  {
    anchorId: "best-bulk",
    asin: "B00XL351Y8",
    rank: 2,
    cardName: "Roshield 10x Mouse Bait Boxes (Empty, No Bait)",
    cardLabel: "Best Bulk",
    features: [
      "10 boxes and 2 keys; no bait included",
      "Rear chambers listed to hold 2 x 20g blocks or 2-3 x 10g pasta sachets",
      "Listed as used within the professional pest control industry",
      "Listed as manufactured in the UK",
      "Black plastic",
    ],
    tableCells: [
      "Roshield 10x Empty Boxes",
      "Best Bulk",
      "10 stations",
      "Empty — bait bought separately",
      "Tamper-resistant",
      "not stated",
    ],
    h2Label: "Best Bulk",
    h2Name: "Roshield 10x Mouse Bait Boxes (Empty, No Bait)",
  },
  {
    anchorId: "best-compact",
    asin: "B00KVGCBJG",
    rank: 3,
    cardName: "Roshield 5x Black Tamper-Resistant Mouse Bait Boxes",
    cardLabel: "Best Compact",
    features: [
      "5 boxes and 1 key; no bait included",
      "Rear chambers listed to hold 2 x 20g blocks or 2-3 x 10g pasta sachets",
      "Listed at 150 grams per the detail table",
      "Listed as used within the professional pest control industry",
      "Black plastic",
    ],
    tableCells: [
      "Roshield 5x Black Boxes",
      "Best Compact",
      "5 stations",
      "Empty — bait bought separately",
      "Tamper-resistant",
      "not stated",
    ],
    h2Label: "Best Compact",
    h2Name: "Roshield 5x Black Tamper-Resistant Mouse Bait Boxes",
  },
  {
    anchorId: "best-brand",
    asin: "B00OHI13ZW",
    rank: 4,
    cardName: "The Big Cheese Rat & Mouse Bait Station Compact",
    cardLabel: "Best Brand",
    features: [
      "Single station with a lockable lid",
      "Listed as damp-proof and all-weather",
      "Listed as taking blocks, pasta and sachets",
      "Bait sold separately",
      "For indoor or outdoor use",
    ],
    tableCells: [
      "The Big Cheese Bait Station",
      "Best Brand",
      "1 station",
      "Empty — bait bought separately",
      "Lockable lid, all-weather",
      "not stated",
    ],
    h2Label: "Best Brand",
    h2Name: "The Big Cheese Rat & Mouse Bait Station Compact",
  },
  {
    anchorId: "best-budget",
    asin: "B000YPXJ1I",
    rank: 5,
    cardName: "Pest-Stop Lockable Mouse Bait Station",
    cardLabel: "Best Budget",
    features: [
      "Single lockable station",
      "Bait bars listed as holding the bait so it cannot be shaken out",
      "Listed for indoor and outdoor use",
      "Listed as weather-proof plastic, in frost or high heat",
      "Bait bought separately",
    ],
    tableCells: [
      "Pest-Stop Lockable Station",
      "Best Budget",
      "1 station",
      "Empty — bait bought separately",
      "Lockable, weather-proof",
      "not stated",
    ],
    h2Label: "Best Budget",
    h2Name: "Pest-Stop Lockable Mouse Bait Station",
  },
];

// The contents entry is DERIVED from the same fields the h2 renders, so an entry
// cannot say something the heading does not (the S66 R4 pattern).
const tocItems = [
  { id: "do-you-need-one", title: "Do You Need a Station at All?" },
  { id: "legal", title: "What a Householder May Use" },
  { id: "standard", title: "The Standard a Station Has to Meet" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({
    id: p.anchorId,
    title: `${p.h2Label} — ${p.h2Name}`,
  })),
  { id: "alternatives", title: "If Bait Is Not the Answer" },
  { id: "using", title: "Placing Them" },
  { id: "compared", title: "Best Mouse Bait Stations Compared" },
];

export default function BestMouseBaitStationsPage() {
  return (
    <GuideLayout
      title="Best Mouse Bait Stations UK 2026: Tamper-Proof & Pet-Safe"
      subtitle="Lockable, tamper-resistant boxes that hold rodenticide bait away from children and pets"
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
          title: "How to Get Rid of Rats: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-rats",
        },
        {
          title: "Pest Control Costs UK 2026",
          href: "/guides/pest-control-costs",
        },
        {
          title: "How to Get Rid of Cockroaches: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-cockroaches",
        },
        {
          title: "How to Get Rid of Fleas: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-fleas",
        },
        {
          title: "How to Get Rid of Bed Bugs: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-bed-bugs",
        },
        {
          title: "How to Get Rid of Ants: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-ants",
        },
        {
          title: "Wasp Nest Removal: Complete UK Guide",
          href: "/guides/wasp-nest-removal",
        },
        {
          title: "Restaurant Pest Control: UK Compliance Guide",
          href: "/guides/restaurant-pest-control",
        },
        {
          title: "Landlord Pest Control: UK Compliance Guide",
          href: "/guides/landlord-pest-control",
        },
      ]}
      relatedProducts={[
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        {
          title: "Best Rat Bait Stations UK 2026",
          href: "/best/rat-bait-stations",
        },
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        {
          title: "Best Cockroach Killers UK 2026",
          href: "/best/cockroach-killers",
        },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
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
        A bait station is a lockable box that holds rodenticide where a mouse can
        reach it and a child or a dog cannot. It is a container, not a treatment
        — four of the five here are sold empty.
      </p>

      {/* DECISION BLOCK — situation first, product second, every line.
          NOT a card: no Amazon link, no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You are not sure poison is the right answer.</strong> HSE is
            plain that rodenticides carry real risk to people, pets and wildlife
            —{" "}
            <a href={SRC.hse} rel="nofollow" className="underline">
              HSE
            </a>
            . Read{" "}
            <a href="#do-you-need-one" className="underline">
              whether you need a station at all
            </a>{" "}
            first.
          </li>
          <li>
            <strong>You do not know what you are allowed to buy.</strong> Amateur
            and professional rodenticides are authorised differently —{" "}
            <a href="#legal" className="underline">
              what a householder may use
            </a>
            .
          </li>
          <li>
            <strong>You want one box that arrives ready to use.</strong> Only one
            here is supplied pre-baited —{" "}
            <a href="#best-overall" className="underline">
              the five-station kit
            </a>
            .
          </li>
          <li>
            <strong>You are covering a whole property or several lets.</strong>{" "}
            The largest pack here is ten —{" "}
            <a href="#best-bulk" className="underline">
              the ten empty boxes
            </a>
            .
          </li>
          <li>
            <strong>You need one box for one spot, outdoors.</strong> Two are
            single stations listed as all-weather —{" "}
            <a href="#best-brand" className="underline">
              the lockable-lid station
            </a>{" "}
            and{" "}
            <a href="#best-budget" className="underline">
              the weather-proof one
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="do-you-need-one">Do You Need a Station at All?</h2>
      <p>
        A station does not kill anything. It holds bait, keeps it dry, and keeps
        it away from anyone it is not meant for. If you are not putting
        rodenticide down, you do not need one — traps and proofing are a
        different page.
      </p>
      <p>
        And bait alone rarely settles it. Defra&rsquo;s code of practice for
        rodent control notes that{" "}
        <em>
          &ldquo;Mice live in small social groups and their erratic feeding
          behaviour results in them visiting several different food
          sources&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra code of practice
        </a>
        ) — written for poultry units, but it is the same animal in a kitchen.
        One box in one corner is not a plan.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What a Householder May Use</h2>
      <p>
        Rodenticides are authorised separately for amateur and professional use,
        and the stewardship rules that govern professional users do not reach
        products sold to the public. HSE is direct about why the controls exist:
        rodenticides can carry higher risk than other biocides because of how
        they are used and how they look and smell, which makes children, pets and
        other non-target animals more likely to be harmed by them (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ).
      </p>
      <p>
        In practice: buy an amateur-authorised product, read its label, and use it
        only as the label says. The pre-baited kit on this page states brodifacoum
        in its blocks; the other four are empty boxes, and what you put in them is
        your decision and the label&rsquo;s.
      </p>

      {/* [2] The standard */}
      <h2 id="standard">The Standard a Station Has to Meet</h2>
      <p>
        There is a published standard, and it is more useful than any
        manufacturer&rsquo;s description. The label text specified for
        rodenticide products requires a bait station to be{" "}
        <em>
          &ldquo;Strong enough to prevent entry or destruction by dogs.&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;Lockable or sealable so that children and dogs cannot gain access
          through the opening or mechanisms used to fill the bait
          compartments.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crru} rel="nofollow">
          CRRU UK
        </a>
        ). For use outdoors around buildings it must also be{" "}
        <em>
          &ldquo;Resistant to destruction or weakening from exposure to typical
          non-catastrophic weather&rdquo;
        </em>
        .
      </p>
      <p>
        That is the test to apply to a box: lockable, strong, and weather-resistant
        if it is going outside. This page previously gave an entry-hole size and
        said it was too small for a cat&rsquo;s paw. No listing here states an
        entry-hole size and no source we hold states one, so that claim is gone.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Pre-baited or empty</h3>
      <p>
        One of the five arrives with bait in it; the other four are containers
        only. That is the single biggest difference on this page, and the
        comparison table at the bottom states it for every row.
      </p>
      <h3>2. How many you need, not how many you want</h3>
      <p>
        Because mice work several food sources, Defra&rsquo;s guidance is that{" "}
        <em>
          &ldquo;it is necessary to provide an adequate number of bait points in
          places where rodents are living or moving&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra code of practice
        </a>
        ). Packs here run from one station to ten. Count the places you have seen
        activity, then buy for that number.
      </p>
      <h3>3. Indoors or out</h3>
      <p>
        The weather clause in the standard above only bites outdoors. Two of the
        five are listed as all-weather; the others do not say. Under the counter
        in a kitchen, it does not matter.
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
        The only one here that arrives ready to use. Five lockable
        tamper-resistant stations supplied pre-baited, with blocks the listing
        states contain brodifacoum, and an access key so they can be re-baited.
        If you would rather not choose a rodenticide separately, this is the one
        that removes that decision — which also means the choice has been made
        for you.
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
        Ten boxes and two keys, no bait. This is the pack for a whole property or
        several lets, and the listing is specific about capacity: the rear
        chambers are stated to hold two 20g blocks or two to three 10g pasta
        sachets, which tells you what bait format to buy.
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
        The same box as above in a pack of five with one key, listed at 150 grams
        each. For a single house where ten would be waste.
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
        A single station with a lockable lid, listed as damp-proof and
        all-weather, and stated to take blocks, pasta or sachets. Bait is sold
        separately. This is the one to buy one of, for one place outside.
      </p>

      {/* Product 5 */}
      <h2 id={products[4].anchorId}>
        {products[4].h2Label} &mdash; {products[4].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[4].cardName}
          features={products[4].features}
          asin={products[4].asin}
          bestFor={products[4].cardLabel}
          rank={products[4].rank}
        />
      </div>
      <p>
        Another single lockable station, listed as weather-proof in frost or high
        heat, with bait bars that the listing says hold the bait so it cannot be
        shaken out. That last detail is the one that matters if the box is
        somewhere it can be knocked.
      </p>

      {/* [14] Alternatives */}
      <h2 id="alternatives">If Bait Is Not the Answer</h2>
      <p>
        <strong>Proof the building first.</strong> Defra&rsquo;s guidance puts
        prevention ahead of control: keeping rodents out and denying them food is
        what stops an infestation returning after the bait is gone.
      </p>
      <p>
        <strong>Traps instead of poison.</strong> If there are children, pets or
        non-target animals about and you would rather not have rodenticide in the
        house at all, a trap is a different trade-off — see our{" "}
        <a href="/best/mouse-traps">mouse traps</a> page.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Placing Them</h2>
      <ol>
        <li>
          <strong>Put them where the mice are, not where it is tidy.</strong>{" "}
          Defra&rsquo;s guidance is that bait should be{" "}
          <em>
            &ldquo;placed where the rodents are nesting and travelling&rdquo;
          </em>
          , not only in set baiting points.
        </li>
        <li>
          <strong>Use enough of them.</strong> Several food sources means several
          stations.
        </li>
        <li>
          <strong>Lock them.</strong> A station that is not locked is a bowl.
        </li>
        <li>
          <strong>Keep the bait fresh and dry.</strong> The same guidance asks
          for bait kept fresh and free from dust and dampness.
        </li>
        <li>
          <strong>Check them, and keep the key.</strong> You cannot tell whether
          bait is being taken without opening the box.
        </li>
        <li>
          <strong>Follow the bait&rsquo;s own label.</strong> The station does not
          change what the label on the rodenticide requires.
        </li>
      </ol>

      {/* [16] Comparison table */}
      <h2 id="compared">Best Mouse Bait Stations Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Award</th>
              <th className="text-left p-2 border-b font-semibold">
                Pack as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Bait included
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Security as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Entry hole size
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
        heading="Mice you cannot get on top of?"
        subtext="For a persistent infestation, or one you would rather not treat with rodenticide yourself, compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
