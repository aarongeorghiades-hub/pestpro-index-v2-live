import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R3 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Rank
// numerals, anchor ids and card order are UNCHANGED. Labels on this route were settled
// by three rules, each applied to the record it names:
//   Law 188 (both fields awards, they disagree, the h2 wins): card 2's label "Best 4L
//     Fogger" becomes the h2's "Best for Flats & HMOs".
//   S68 R3 ride-along ruling (a label that misstates its listing): card 3's "Best 6L
//     Fogger" — the listing states Tank Capacity 5 Litres — becomes "Best 5L Fogger",
//     and its name's "6L Tank" becomes "5L Tank".
//   Law 189 (h2 holds a descriptor, not an award): cards 3, 4 and 5's h2s — "Proven
//     Large-Tank Design", "Battery Powered Freedom", "Large-Area Specialist" — take the
//     award the card shows, in this route's layout.
// Card 1's name dropped "5L Tank": its listing says 6 liter in one line and 5-liter in
// another, and both are rendered on the card instead (Law 146).
//
// THE DESCRIPTION IS REWRITTEN. It said "VectorFog machines"; one of five is an Ewbank.
//
// THE FAQ IS REMOVED, BLOCK AND SCHEMA TOGETHER (Law 190). Its questions — what can
// be fogged, PPE, re-entry — are answered at #legal, #limits and #using.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Professional ULV Foggers UK (2026)",
    description:
      "ULV cold foggers for large-space application: HSE's position on fogging risk and re-entry, and five compared on tank, motor and droplet size as listed.",
    alternates: {
      canonical: "https://pestproindex.com/best/professional-ulv-foggers",
    },
    openGraph: {
      title: "Best Professional ULV Foggers UK (2026)",
      description:
        "ULV cold foggers for large-space application: HSE's position on fogging risk and re-entry, and five compared on tank, motor and droplet size as listed.",
      url: "https://pestproindex.com/best/professional-ulv-foggers",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Professional ULV Foggers UK (2026)",
  description:
    "ULV cold foggers for large-space application: HSE's position on fogging risk and re-entry, and five compared on tank, motor and droplet size as listed.",
  datePublished: "2026-04-06",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/professional-ulv-foggers",
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
      name: "Professional ULV Foggers",
      item: "https://pestproindex.com/best/professional-ulv-foggers",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: hse-disinfectants and
// hse-sr03 (a PDF, reached from HSE's SR series index and converted with pdftotext) at
// ~/pp-s68r3/sources, fetched 2026-09-07; hse-biocides-using at ~/pp-s68r1/sources;
// purdue-fly-control at ~/pp-s68r2/sources.
const SRC = {
  hseDisinfectants: "https://www.hse.gov.uk/food/occupational-health/disinfectants.htm",
  hseSr03: "https://www.hse.gov.uk/pubns/guidance/sr03.pdf",
  hseBiocides: "https://www.hse.gov.uk/biocides/using/overview.htm",
  purdue: "https://extension.entm.purdue.edu/publications/E-7/E-7.html",
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

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, all inside
// the S45-C window. A property is asserted only where the listing states it (S52-E,
// S50-H); a cell the listing does not state reads "not stated". "The world's most
// trusted fogger brand", "proven by pest controllers worldwide" and "100m² per minute"
// are gone: the first two are self-praise and a G3 hit, the third is on no listing.
const products: ProductRecord[] = [
  {
    anchorId: "vectorfog-c150-plus",
    asin: "B08FH8HV24",
    rank: 1,
    cardName: "VectorFog C150+ Cold ULV Fogger — 1250W Samsung Motor",
    cardLabel: "Best Overall",
    features: [
      "Tank stated two ways on the listing: 6 liter in one line, 5-liter in another",
      "1250W Samsung motor, as listed",
      "Droplet size listed as adjustable, 5 to 50 microns",
      "Listed for indoor and outdoor use, and for disinfectants, biocides and insecticides",
      "Net weight listed as 4.7 kg; 62 x 31 x 17 cm",
    ],
    tableCells: ["VectorFog C150+", "6 litre / 5 litre (both stated)", "1250W, 5–50 microns", "Best Overall"],
    h2Label: "#1 VectorFog C150+ Cold ULV Fogger",
    h2Name: "Best Overall",
    tocLabel: "#1 VectorFog C150+",
    tocName: "Best Overall",
  },
  {
    anchorId: "vectorfog-c100-plus",
    asin: "B00MMWPK6S",
    rank: 2,
    cardName: "VectorFog C100 Plus Cold ULV Fogger — 4L Tank",
    cardLabel: "Best for Flats & HMOs",
    features: [
      "4 litre tank, 220V, 1250W Samsung motor, as listed",
      "Droplet size listed as adjustable, 5 to 50 microns; flow rate 60 litres per hour",
      "The listing's own instruction: indoors, use only the 5 micron setting to prevent a wet mist",
      "Listed as spraying up to 8 metres, with a 10 metre cable",
      "Listed for disinfectants; boxed weight 4.5 kg",
    ],
    tableCells: ["VectorFog C100 Plus", "4 litre", "1250W, 5–50 microns", "Best for Flats & HMOs"],
    h2Label: "#2 VectorFog C100 Plus Cold ULV Fogger",
    h2Name: "Best for Flats & HMOs",
    tocLabel: "#2 VectorFog C100 Plus",
    tocName: "Best for Flats & HMOs",
  },
  {
    anchorId: "vectorfog-c150",
    asin: "B00MMX1T94",
    rank: 3,
    cardName: "VectorFog C150 Cold Fogger — 5L Tank",
    cardLabel: "Best 5L Fogger",
    features: [
      "Tank capacity listed as 5 litres",
      "Samsung 1250W motor, 220V, as listed",
      "Droplet size listed as 5 to 30 microns",
      "Listed at 5.35 kg; boxed weight 6.5 kg",
      "The listing carries three feature lines and no use instructions",
    ],
    tableCells: ["VectorFog C150", "5 litre", "1250W, 5–30 microns", "Best 5L Fogger"],
    h2Label: "#3 VectorFog C150 Cold Fogger",
    h2Name: "Best 5L Fogger",
    tocLabel: "#3 VectorFog C150",
    tocName: "Best 5L Fogger",
  },
  {
    anchorId: "vectorfog-dc20-plus",
    asin: "B08FF71Z32",
    rank: 4,
    cardName: "VectorFog DC20+ Cordless ULV Fogger — Battery Powered",
    cardLabel: "Best Cordless Fogger",
    features: [
      "2 litre tank, as listed",
      "Mabuchi 170W 12V DC motor; flow listed as 20 litres per hour",
      "Droplet size listed as adjustable, 5 to 50 microns",
      "Listed as up to 40 minutes of continuous fogging from a 3 hour charge",
      "Net weight listed as 3.1 kg; 48 x 19 x 22 cm",
    ],
    tableCells: ["VectorFog DC20+", "2 litre", "170W battery, 5–50 microns", "Best Cordless Fogger"],
    h2Label: "#4 VectorFog DC20+ Cordless ULV Fogger",
    h2Name: "Best Cordless Fogger",
    tocLabel: "#4 VectorFog DC20+ Cordless",
    tocName: "Best Cordless Fogger",
  },
  {
    anchorId: "ewbank-ew5000",
    asin: "B09J1LNZGS",
    rank: 5,
    cardName: "Ewbank EW5000 Commercial Backpack Fogger — 10L, 1400W",
    cardLabel: "Best Backpack Fogger",
    features: [
      "Maximum capacity listed as 10 litres",
      "1400W motor, as listed",
      "Mist diameter listed as adjustable, 20 to 60 microns",
      "Horizontal reach listed as 5 to 7 metres, vertical 1.5 to 2 metres; 1 metre flexible hose",
      "Listed for disinfecting surfaces, and for greenhouse and garden pest control",
    ],
    tableCells: ["Ewbank EW5000", "10 litre", "1400W, 20–60 microns", "Best Backpack Fogger"],
    h2Label: "#5 Ewbank EW5000 Commercial Backpack Fogger",
    h2Name: "Best Backpack Fogger",
    tocLabel: "#5 Ewbank EW5000 Backpack",
    tocName: "Best Backpack Fogger",
  },
];

const tocItems = [
  { id: "situation", title: "Is Fogging the Right Job?" },
  { id: "legal", title: "Who May Fog, and With What" },
  { id: "limits", title: "Where a Fogger Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Fogging Is Not the Answer" },
  { id: "using", title: "Before, During and After" },
  { id: "compared", title: "Foggers Compared" },
];

export default function BestProfessionalUlvFoggersPage() {
  return (
    <GuideLayout
      title="Best Professional ULV Cold Foggers for Facilities Managers & Landlords (2026)"
      subtitle="ULV cold foggers for large-space application — five compared on tank, motor and droplet size as their listings state them, with HSE's position on the respiratory risk of fogging and on re-entry"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Landlord Pest Control Guide", href: "/guides/landlord-pest-control" },
        { title: "How to Get Rid of Fleas", href: "/guides/how-to-get-rid-of-fleas" },
        { title: "How to Get Rid of Cockroaches", href: "/guides/how-to-get-rid-of-cockroaches" },
        {
          title: "Professional vs DIY Pest Control",
          href: "/guides/professional-pest-control-vs-diy",
        },
      ]}
      relatedProducts={[
        { title: "Best Flea Foggers UK 2026", href: "/best/flea-fogger" },
        { title: "Best Flea Spray for Home", href: "/best/flea-spray-for-home" },
        { title: "Best Cockroach Killers UK 2026", href: "/best/cockroach-killers" },
        { title: "Best Bed Bug Spray UK 2026", href: "/best/bed-bug-spray" },
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
        A ULV cold fogger turns a liquid into droplets small enough to hang in
        the air. Four of the five listings here sell that for disinfectant;
        one names insecticides as well. The machine is sold freely. The
        droplets are the part HSE has something to say about.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You have not read HSE&rsquo;s line on fogging.</strong> It
            names the respiratory risk and how long droplets stay up —{" "}
            <a href="#situation" className="underline">
              is fogging the right job
            </a>
            .
          </li>
          <li>
            <strong>You are a landlord, not a pest control business.</strong>{" "}
            HSE says the general public must not use professional-use products
            —{" "}
            <a href="#legal" className="underline">
              who may fog, and with what
            </a>
            .
          </li>
          <li>
            <strong>You expect one treatment to end a fly problem.</strong>{" "}
            Purdue Extension&rsquo;s line is that insecticides alone will not —{" "}
            <a href="#limits" className="underline">
              where a fogger does not help
            </a>
            .
          </li>
          <li>
            <strong>You need mains power and a large tank.</strong> Three corded
            VectorFogs and a 10 litre backpack —{" "}
            <a href="#vectorfog-c150-plus" className="underline">
              C150+
            </a>
            ,{" "}
            <a href="#vectorfog-c100-plus" className="underline">
              C100 Plus
            </a>
            ,{" "}
            <a href="#vectorfog-c150" className="underline">
              C150
            </a>{" "}
            and{" "}
            <a href="#ewbank-ew5000" className="underline">
              the Ewbank
            </a>
            .
          </li>
          <li>
            <strong>You have no socket where you need to work.</strong>{" "}
            <a href="#vectorfog-dc20-plus" className="underline">
              The DC20+
            </a>{" "}
            is listed at 40 minutes on a charge, from a 2 litre tank.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            HSE states that fogging produces smaller droplets than spraying and
            presents a particular risk to the respiratory system, and that
            respiratory protective equipment is normally needed for space
            spraying. The machine&rsquo;s listing does not tell you what to put
            in it or what to wear; the product label does.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Is Fogging the Right Job?</h2>
      <p>
        HSE&rsquo;s guidance on disinfectants at work is the clearest fetched
        statement of what a fogger does that a sprayer does not:{" "}
        <em>
          &ldquo;However, fogging presents a particular risk to the respiratory
          system as it produces smaller droplets than spraying.&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;These can remain suspended in air for 45-60 minutes or longer,
          depending upon the droplet size.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hseDisinfectants} rel="nofollow">
          HSE
        </a>
        ). Every listing here gives a droplet range that starts at 5 microns.
        That is the property being bought, and it is also the hazard.
      </p>
      <p>
        So the first question is whether a space treatment is needed at all.
        A flea problem in one flat, a cockroach problem in one kitchen, is a
        bait or a residual spray on our{" "}
        <a href="/best/flea-fogger">flea fogger</a> and{" "}
        <a href="/best/cockroach-killers">cockroach killer</a> pages, not a 6
        litre tank.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">Who May Fog, and With What</h2>
      <p>
        The foggers are sold to anyone. What goes in them is not, and that is
        the honest position for a landlord or facilities manager reading this
        page. HSE states that{" "}
        <em>
          &ldquo;members of the general public must not use professional or
          industrial use products&rdquo;
        </em>{" "}
        and gives the reason:{" "}
        <em>
          &ldquo;This is because professional users are required to have had
          the appropriate information, instruction and training to be able to
          use such products.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hseBiocides} rel="nofollow">
          HSE
        </a>
        ). A fogger that can atomise a professional-use insecticide does not
        make its owner a professional user, and no listing here claims
        otherwise.
      </p>
      <p>
        For the fogging itself, HSE&rsquo;s COSHH Essentials sheet for space
        sprayers in service and retail premises states that{" "}
        <em>&ldquo;RPE is normally needed.&rdquo;</em> (
        <a href={SRC.hseSr03} rel="nofollow">
          HSE, SR3
        </a>
        ). Which respirator and which filter is set by the product label and
        the risk assessment, not by this page.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Fogger Does Not Help</h2>
      <p>
        <strong>Against the source of a fly problem.</strong> Purdue
        Extension&rsquo;s fly control guidance is blunt:{" "}
        <em>
          &ldquo;Insecticides alone cannot be expected to rid premises of
          flies.&rdquo;
        </em>{" "}
        (
        <a href={SRC.purdue} rel="nofollow">
          Purdue Extension
        </a>
        ). A fog reaches what is in the air when the fog is; it does not reach
        the drain, the bin or the gap the flies are breeding in or coming
        through.
      </p>
      <p>
        <strong>Before the space can be re-entered.</strong> HSE states that{" "}
        <em>
          &ldquo;Initially, air sampling may be required to check re-entry is
          safe into areas where fogging has been carried out, particularly when
          high-hazard disinfectants are used, such as aldehydes.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hseDisinfectants} rel="nofollow">
          HSE
        </a>
        ). A space that is fogged is a space that is out of use afterwards, for
        a period the label and the assessment set.
      </p>
      <p>
        <strong>Where the listing cannot say how big the tank is.</strong> The
        C150+ listing says 6 liter in one line and 5-liter in another. The card
        reports both.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Tank capacity as listed</h3>
      <p>
        From 2 litres on the cordless unit to 10 on the backpack. The tank
        decides how much floor area one fill reaches; the product label decides
        the dose per cubic metre, and the two together decide how many fills
        a space takes.
      </p>
      <h3>2. Droplet range as listed</h3>
      <p>
        Four listings state 5 to 50 microns, the C150 states 5 to 30, the
        Ewbank 20 to 60. The C100 Plus listing adds the instruction that
        indoors it should only be used on the 5 micron setting, to prevent a
        wet mist — and 5 microns is the end of the range HSE is describing
        when it says droplets stay suspended.
      </p>
      <h3>3. Power source as listed</h3>
      <p>
        Four are corded and listed at 1250W or 1400W; one is battery, listed
        at 170W and 40 minutes a charge. Where you can work is set by where the
        socket is.
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
                "The one listing here that names insecticides alongside disinfectants and biocides, with a 1250W Samsung motor, 5 to 50 micron droplets and indoor or outdoor use. Its tank is listed as 6 liter in one line and 5-liter in another; the card carries both and this page picks neither.",
                "A 4 litre, 1250W unit listed with a 60 litre per hour flow rate and an 8 metre throw. Its listing is the only one here with a use instruction: indoors, only the 5 micron setting. The card label follows the h2 under Law 188.",
                "A 5 litre, 1250W unit with a 5 to 30 micron droplet range and no use instructions on the listing. The card previously said 6L; the listing states 5 litres, and the label and name now say so.",
                "A cordless 2 litre unit with a 170W 12V motor, listed at up to 40 minutes of continuous fogging from a 3 hour charge and 3.1 kg net. The one fogger here for a space with no socket.",
                "A 10 litre backpack with a 1400W motor and a 20 to 60 micron mist, listed at 5 to 7 metres horizontal reach. Its listing sells it for disinfecting surfaces and for greenhouse and garden pest control; it does not mention indoor insecticide use.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If Fogging Is Not the Answer</h2>
      <p>
        <strong>Find the source.</strong> For flies that is the breeding site;
        for fleas it is the host; for cockroaches it is the harbourage. None of
        them is in the air.
      </p>
      <p>
        <strong>Use a targeted product.</strong> Our{" "}
        <a href="/best/bed-bug-spray">bed bug spray</a>,{" "}
        <a href="/best/flea-spray-for-home">flea spray</a> and{" "}
        <a href="/best/cockroach-killers">cockroach killer</a> pages compare
        products that go where the pest is.
      </p>
      <p>
        <strong>Have it done under contract.</strong> Where the product you
        need is professional-use only, that is the arrangement HSE&rsquo;s rule
        describes.
      </p>

      {/* Using them */}
      <h2 id="using">Before, During and After</h2>
      <ol>
        <li>
          <strong>Read the product label first.</strong> Whether it may be
          fogged at all, at what dose, and by whom, is there and nowhere else.
        </li>
        <li>
          <strong>Close the space.</strong> HSE&rsquo;s SR3 sheet says to{" "}
          <em>
            &ldquo;Close doors and windows, and turn off ventilation systems
            before starting the treatment.&rdquo;
          </em>
        </li>
        <li>
          <strong>Wear the RPE the label and assessment call for.</strong>{" "}
          HSE&rsquo;s sheet says it is normally needed.
        </li>
        <li>
          <strong>Set the droplet size the label calls for.</strong> The C100
          Plus listing&rsquo;s own instruction is 5 microns indoors; the label
          on the product governs.
        </li>
        <li>
          <strong>Keep people out until re-entry is safe.</strong> HSE&rsquo;s
          figure for suspended droplets is 45 to 60 minutes or longer, and it
          says air sampling may initially be required.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">Foggers Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing gives two figures, both are shown; where it gives none, the
        cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Tank, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Motor and droplet, as listed</th>
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
        heading="A space you would rather have treated under contract?"
        subtext="Where the product is professional-use only, compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
