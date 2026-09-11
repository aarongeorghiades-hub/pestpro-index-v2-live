import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R6 — ROLLOUT REBUILD to the R8 pattern, on sources. LAW 191 GOVERNS THIS ROUTE:
// four of the five products are repellents, so there is no efficacy claim in our own
// voice anywhere on the page, no superlative or ranking label, and no rank numeral.
// Card labels are neutral factual descriptors taken from the listings.
//
// THE TITLE AND H1 PROMISED PRODUCT TYPES THE PAGE DOES NOT CARD. The <title> said
// "Sprays & Plug-Ins" and the H1 said "Sprays, Traps & Natural Options"; all five cards
// are sprays. Both now say what is here. The head keyword is unchanged.
//
// THE FAQ IS ONE ARRAY (Law 190), schema derived from it.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Spider Repellent UK: Five Sprays Compared",
    description:
      "Spider sprays for UK homes: what extension guidance says actually reduces spiders indoors, the ASA position on repellent claims, and five sprays as listed.",
    alternates: { canonical: "https://pestproindex.com/best/spider-repellent" },
    openGraph: {
      title: "Best Spider Repellent UK: Five Sprays Compared",
      description:
        "Spider sprays for UK homes: what extension guidance says actually reduces spiders indoors, the ASA position on repellent claims, and five sprays as listed.",
      url: "https://pestproindex.com/best/spider-repellent",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Spider Repellent UK 2026: Five Sprays Compared",
  description:
    "Spider sprays for UK homes: what extension guidance says actually reduces spiders indoors, the ASA position on repellent claims, and five sprays as listed.",
  datePublished: "2026-03-31",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/spider-repellent" },
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
      name: "Best Spider Repellent UK 2026",
      item: "https://pestproindex.com/best/spider-repellent",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: asa-pest-repellents at
// ~/pp-s67r2/sources (banked S67 R2); ucipm-spiders and purdue-spiders at
// ~/pp-s68r6/sources, fetched 2026-09-07.
//
// BOTH EXTENSION SOURCES ARE AMERICAN AND ARE ATTRIBUTED AS SUCH (Law 135). What is
// taken from them is general control practice — webs, clutter, gaps, what a spray does
// and does not do. Their statements about which local species can injure a person are
// about California and Indiana and are NOT repeated here as UK facts.
const SRC = {
  asa: "https://www.asa.org.uk/advice-online/pest-repellents.html",
  ucipm: "https://ipm.ucanr.edu/home-and-landscape/spiders/",
  purdue: "https://extension.entm.purdue.edu/publications/E-72/E-72.html",
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
// S50-H); a cell the listing does not state reads "not stated". Every maker claim about
// what a product does to spiders is framed as the maker's own (Law 191).
//
// GONE, BY NAME: "Established UK spider repellent", "UK-developed natural barrier
// spray", "From a specialist UK pest control brand", "Non-staining on surfaces" as an
// assertion, and "Second bottle on hand for the next reapplication" — none was on the
// listing it sat under, and the first three are our voice vouching for a repellent.
//
// ONE LISTING'S DETAIL TABLE BELONGS TO A DIFFERENT PRODUCT. B00FJ4LWWW's rows carry
// "Powered by: Mains", "Ultrasonic Technology", "Effective on Rodents" and a £30.98
// price — an ultrasonic plug-in's specification table attached to a 500ml spray. Nothing
// from those rows is asserted; the card reads the title and the feature bullets only.
const products: ProductRecord[] = [
  {
    anchorId: "zero-in",
    asin: "B00IIOR7NS",
    cardName: "Zero In Spider Repellent Peppermint Oil Spray 500ml",
    cardLabel: "Peppermint spray, 500ml",
    features: [
      "500ml, listed as ready to use; mint scent",
      "The maker describes it as a non-toxic peppermint oil barrier that repels spiders without harming them",
      "The maker states protection for up to 3 weeks",
      "Item form stated two ways on the listing: Aerosol in the detail table, a trigger bottle with an on/off nozzle in the feature text",
      "Listing directions: shake, twist the nozzle open, spray around entry points and skirting",
    ],
    tableCells: ["Zero In Spider Repellent 500ml", "Peppermint oil, as listed", "Up to 3 weeks, per the maker", "Peppermint spray, 500ml"],
    h2Label: "Peppermint spray, 500ml",
    h2Name: "Zero In Spider Repellent Peppermint Oil Spray 500ml",
    tocLabel: "Peppermint spray, 500ml",
    tocName: "Zero In Spider Repellent",
  },
  {
    anchorId: "zero-in-twin",
    asin: "B0DBZXWGLG",
    cardName: "Zero In Spider Repellent 500ml Twin Pack",
    cardLabel: "Peppermint spray, 2 x 500ml",
    features: [
      "Two 500ml bottles, as listed; mint scent",
      "The maker describes it as a non-hazardous mint oil spray that repels spiders without harming them",
      "The maker states the barrier lasts 2 to 3 weeks",
      "Listed as stain-free and low-odour, for living areas",
      "Item form listed as Liquid; the same maker's single pack lists Aerosol",
    ],
    tableCells: ["Zero In Spider Repellent twin pack", "Peppermint oil, as listed", "2–3 weeks, per the maker", "Peppermint spray, 2 x 500ml"],
    h2Label: "Peppermint spray, 2 x 500ml",
    h2Name: "Zero In Spider Repellent 500ml Twin Pack",
    tocLabel: "Peppermint spray, 2 x 500ml",
    tocName: "Zero In Twin Pack",
  },
  {
    anchorId: "acana",
    asin: "B0DFMLDNPT",
    cardName: "Acana Natural Spider Stopper 500ml",
    cardLabel: "Peppermint and clove spray, 500ml",
    features: [
      "500ml, listed as a water-based spray with peppermint and clove oils",
      "The maker states protection lasting up to 12 weeks",
      "Listed as usable on any surface and as not staining",
      "Listed for homes, garages and sheds",
      "Country of origin listed as United Kingdom",
    ],
    tableCells: ["Acana Natural Spider Stopper 500ml", "Peppermint and clove oils, as listed", "Up to 12 weeks, per the maker", "Peppermint and clove spray, 500ml"],
    h2Label: "Peppermint and clove spray, 500ml",
    h2Name: "Acana Natural Spider Stopper 500ml",
    tocLabel: "Peppermint and clove spray, 500ml",
    tocName: "Acana Spider Stopper",
  },
  {
    anchorId: "pestbye",
    asin: "B00FJ4LWWW",
    cardName: "Pestbye Get Rid of Spiders Spray Repellent & Deterrent 500ml",
    cardLabel: "Unscented spray, 500ml",
    features: [
      "500ml single bottle; scent listed as unscented",
      "The maker describes it as creating a barrier and says it will not directly harm spiders",
      "The maker states it stops cobwebs forming on treated areas for up to 4 weeks",
      "Listed as cruelty free; country of origin listed as China",
      "Active substance not stated on the listing",
    ],
    tableCells: ["Pestbye Spider Repellent 500ml", "not stated", "Up to 4 weeks, per the maker", "Unscented spray, 500ml"],
    h2Label: "Unscented spray, 500ml",
    h2Name: "Pestbye Get Rid of Spiders Spray Repellent & Deterrent 500ml",
    tocLabel: "Unscented spray, 500ml",
    tocName: "Pestbye Spider Spray",
  },
  {
    anchorId: "nope",
    asin: "B09FB4QX9H",
    cardName: "NOPE! Spider Killer Spray 500ml",
    cardLabel: "Pyrethroid contact spray, 500ml",
    features: [
      "500ml; the one insecticide here — the listing calls it a contact killer with synthetic pyrethroid technology",
      "Target species listed as Spider",
      "Listed as water-based, odourless and non-staining, for indoor and outdoor use",
      "The maker states a residual barrier giving up to 6 weeks of protection",
      "Manufacturer listed as Safeguard Europe; country of origin United Kingdom",
    ],
    tableCells: ["NOPE! Spider Killer Spray 500ml", "Synthetic pyrethroid, as listed", "Up to 6 weeks, per the maker", "Pyrethroid contact spray, 500ml"],
    h2Label: "Pyrethroid contact spray, 500ml",
    h2Name: "NOPE! Spider Killer Spray 500ml",
    tocLabel: "Pyrethroid contact spray, 500ml",
    tocName: "NOPE! Spider Killer Spray",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "Does peppermint oil repel spiders?",
    a: "This page cannot tell you that it does. Four of the five products here are repellents, and the ASA reports that it has yet to accept any claim of efficacy for pest repellent devices, and that marketers without UK-based trial evidence should not state or imply efficacy. What the makers claim is on each card, framed as theirs. What the extension guidance quoted above recommends instead is removing webs and hiding places, and sealing the gaps insects come in through.",
  },
  {
    q: "Why do I see more spiders in September?",
    a: "Adult house spiders are more visible in late summer and early autumn as males move about looking for mates. No listing here mentions a season, and this page holds no UK source on the timing, so it does not put a date range on it.",
  },
  {
    q: "Will a spray clear an infestation?",
    a: "UC IPM's guidance is that insecticides will not provide long-term control and should not generally be used against spiders outdoors, and that control by spraying is only temporary unless accompanied by housekeeping. Only one product here is an insecticide at all; the other four are repellents.",
  },
  {
    q: "What about the gaps they come in through?",
    a: "Purdue Extension's guidance is that many spiders may be excluded by caulking or otherwise eliminating cracks and crevices around the foundation and around windows and doors, and UC IPM says to inspect window and door screens for good seals. That is a sealant-and-screen job, and nothing on this page does it.",
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
  { id: "situation", title: "What Is Actually in the House" },
  { id: "regulator", title: "What the Regulator Has Accepted" },
  { id: "limits", title: "Where a Spray Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Spray Is Not the Answer" },
  { id: "using", title: "Using One" },
  { id: "compared", title: "The Five Sprays Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestSpiderRepellentPage() {
  return (
    <GuideLayout
      title="Best Spider Repellent UK 2026: Five Sprays Compared"
      subtitle="Four repellent sprays and one insecticide, described by what their own listings state — beside the ASA position on repellent claims and what extension guidance says reduces spiders indoors"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Spiders", href: "/guides/how-to-get-rid-of-spiders" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        {
          title: "Ultrasonic Pest Repellers: Do They Work?",
          href: "/guides/ultrasonic-pest-repellers-do-they-work",
        },
      ]}
      relatedProducts={[
        { title: "Best Ultrasonic Pest Repellers UK 2026", href: "/best/ultrasonic-pest-repellers" },
        { title: "Best Cockroach Killers UK 2026", href: "/best/cockroach-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
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
        Five 500ml sprays. Four are sold as repellents — peppermint, or
        peppermint and clove — and one is an insecticide whose listing names a
        synthetic pyrethroid. The difference between those two things is the
        whole of this page, and the regulator&rsquo;s position on the first
        group is set out below before any of them.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You want to know whether a repellent spray works.</strong>{" "}
            The ASA reports it has accepted no efficacy claim for this class —{" "}
            <a href="#regulator" className="underline">
              what the regulator has accepted
            </a>
            .
          </li>
          <li>
            <strong>You have webs and want fewer of them.</strong> The extension
            guidance puts a vacuum cleaner ahead of a bottle —{" "}
            <a href="#situation" className="underline">
              what is actually in the house
            </a>
            .
          </li>
          <li>
            <strong>You have sprayed before and they came back.</strong> That is
            what the guidance predicts —{" "}
            <a href="#limits" className="underline">
              where a spray does not work
            </a>
            .
          </li>
          <li>
            <strong>You want the one product here that is an insecticide.</strong>{" "}
            <a href="#nope" className="underline">
              The NOPE! contact spray
            </a>{" "}
            names a synthetic pyrethroid; the other four do not name an active
            at all.
          </li>
          <li>
            <strong>You want a scented barrier and nothing stronger.</strong>{" "}
            <a href="#zero-in" className="underline">
              Peppermint
            </a>
            ,{" "}
            <a href="#acana" className="underline">
              peppermint and clove
            </a>{" "}
            or{" "}
            <a href="#pestbye" className="underline">
              unscented
            </a>
            .
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            One product on this page is an insecticide and four are not. Read
            the label on whichever you buy: the repellents name no active
            substance at all, and the insecticide names a synthetic pyrethroid.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What Is Actually in the House</h2>
      <p>
        Before anything is sprayed, it is worth knowing what the published
        guidance treats spiders as. UC IPM&rsquo;s pest note says{" "}
        <em>
          &ldquo;spiders are mostly beneficial because they feed on pest
          insects&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). Its advice on what to do about them is not a product:{" "}
        <em>
          &ldquo;Focus spider control efforts on removing webs and hiding
          places. Pesticides are not generally needed.&rdquo;
        </em>
      </p>
      <p>
        Purdue Extension puts the same point in one line —{" "}
        <em>&ldquo;Sanitation is the most practical method of spider control.&rdquo;</em>{" "}
        — and is specific about the method:{" "}
        <em>
          &ldquo;Clean away all webbing with a vacuum cleaner so that eggs and
          spiders are picked up and destroyed.&rdquo;
        </em>{" "}
        (
        <a href={SRC.purdue} rel="nofollow">
          Purdue Extension
        </a>
        ). Both are American services writing about their own states; what is
        taken from them here is method, not a claim about which species live in
        a British house.
      </p>

      {/* [1] Regulator */}
      <h2 id="regulator">What the Regulator Has Accepted</h2>
      <p>
        Four of the five products here are repellents, and the advertising
        regulator has a settled position on that class. The ASA&rsquo;s
        AdviceOnline entry on pest repellents states:{" "}
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
        ).
      </p>
      <p>
        And it is direct about what a seller may say:{" "}
        <em>
          &ldquo;Marketers who do not hold evidence in the form of UK-based
          trials should not state or imply efficacy for the products, through
          either claims, visuals or product names.&rdquo;
        </em>{" "}
        That is why every claim on the cards below is attributed to the maker
        who made it. &ldquo;No claim of efficacy has been accepted&rdquo; is not
        the same statement as &ldquo;these products do not work&rdquo;, and this
        page does not make the second one.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Spray Does Not Work</h2>
      <p>
        <strong>As a lasting answer, on the published evidence.</strong> UC IPM
        is plain about insecticides:{" "}
        <em>
          &ldquo;Insecticides will not provide long-term control and should not
          generally be used against spiders outdoors.&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;Control by spraying is only temporary unless accompanied by
          housekeeping.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). That is written about the strongest thing on this page, not the
        weakest.
      </p>
      <p>
        <strong>Against a spider that is not there yet.</strong> Purdue notes
        that{" "}
        <em>&ldquo;Most spiders can live for several months without food.&rdquo;</em>{" "}
        A treated skirting board is not a sealed one, and a spider that walks in
        under a door has not met the treated surface.
      </p>
      <p>
        <strong>On the gap itself.</strong> The two things the guidance names —
        caulking cracks and crevices, and screens that seal — are jobs for
        sealant and mesh. No spray on this page does either, and the comparison
        table says how long each maker claims its film lasts rather than what it
        achieves.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether it is a repellent or an insecticide</h3>
      <p>
        One listing names an active substance — a synthetic pyrethroid — and
        gives spider as its target species. The other four name no active at
        all. That is the largest single difference on the page and the table
        states it for every row.
      </p>
      <h3>2. What the maker claims about duration</h3>
      <p>
        The stated figures run from up to 3 weeks to up to 12, and one product
        states 4 weeks for cobwebs specifically. Every one of those is the
        maker&rsquo;s own figure, listing-traceable, and none has been tested by
        this page.
      </p>
      <h3>3. Scent, and where it is going</h3>
      <p>
        Three of the five are mint or mint-and-clove; one is listed as
        unscented; the insecticide is listed as odourless. In a bedroom or a
        living room that is a real difference between products, and it is one
        the listings do state.
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
                "A 500ml peppermint oil spray for use around entry points and skirting, with the maker claiming a barrier lasting up to three weeks. Its own listing describes the form two ways — an aerosol in the detail table, a trigger bottle with an on/off nozzle in the text — and the card carries both.",
                "The same product in two bottles, listed as mint scent, stain-free and low-odour, with the maker claiming two to three weeks per application. Its detail table lists the item form as Liquid where the single pack says Aerosol.",
                "A water-based peppermint and clove spray listed for any surface and for homes, garages and sheds, made in the United Kingdom. Its maker claims the longest duration here, up to twelve weeks; that figure is the maker's and is not tested by this page.",
                "An unscented 500ml spray whose maker says it will not directly harm spiders and claims cobwebs are stopped on treated areas for up to four weeks. Its detail table belongs to a different product — mains power, ultrasonic technology, a £30.98 price — so nothing in that table is stated here.",
                "The one insecticide on the page: a 500ml contact spray whose listing names synthetic pyrethroid technology and gives spider as the target species, water-based, odourless and for indoor or outdoor use. The maker claims a residual barrier of up to six weeks.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Spray Is Not the Answer</h2>
      <p>
        <strong>The vacuum cleaner.</strong> It is the first method both
        extension services name, and it removes the eggs as well as the web.
      </p>
      <p>
        <strong>Sealant and screens.</strong> Caulking cracks around the
        foundation, windows and doors is what Purdue names as exclusion; UC IPM
        adds{" "}
        <em>
          &ldquo;Inspect window and door screens for good seals to keep out
          spiders and the insects they prey on.&rdquo;
        </em>
      </p>
      <p>
        <strong>The light by the door.</strong> UC IPM notes that outdoor
        lighting attracts the insects spiders feed on. Moving a light is free
        and it addresses the food supply rather than the spider.
      </p>

      {/* Using them */}
      <h2 id="using">Using One</h2>
      <ol>
        <li>
          <strong>Clear the webs first.</strong> That is the step the guidance
          puts ahead of everything else, and a spray does not do it.
        </li>
        <li>
          <strong>Read the label.</strong> One of these is an insecticide; four
          are not. The label, not the card, governs where it may be used.
        </li>
        <li>
          <strong>Treat the edges, not the room.</strong> Every listing here
          describes entry points, skirting and frames rather than open floor.
        </li>
        <li>
          <strong>Test the surface.</strong> Two listings claim not to stain;
          none of them claims that for every surface in a house.
        </li>
        <li>
          <strong>Expect to reapply.</strong> The makers&rsquo; own figures run
          from three to twelve weeks, and UC IPM&rsquo;s line about spraying
          being temporary applies whichever bottle you bought.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Five Sprays Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with a
        duration figure attributed to the maker who claims it. Where a listing
        does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Active or base, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Duration claimed by the maker</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
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
        heading="Spiders you would rather not deal with yourself?"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
