import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import Callout from '@/components/Callout';
import ProductCard from '@/components/ProductCard';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Plants That Repel Pests UK: Grow a Natural Pest-Free Garden',
    description:
      'Plant lavender, mint, citronella and more to naturally deter pests from your garden and home. Complete UK planting guide for pest control.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/plants-that-repel-pests',
    },
    openGraph: {
      title: 'Plants That Repel Pests UK: Grow a Natural Pest-Free Garden',
      description:
        'Plant lavender, mint, citronella and more to naturally deter pests from your garden and home. Complete UK planting guide for pest control.',
      url: 'https://pestproindex.com/guides/plants-that-repel-pests',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Plants That Repel Pests UK: Grow a Natural Pest-Free Garden',
  description: 'Plant lavender, mint, citronella and more to naturally deter pests from your garden and home. Complete UK planting guide for pest control.',
  datePublished: '2026-04-02',
  dateModified: '2026-04-02',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://pestproindex.com/guides/plants-that-repel-pests' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://pestproindex.com/guides' },
    { '@type': 'ListItem', position: 3, name: 'Plants That Repel Pests', item: 'https://pestproindex.com/guides/plants-that-repel-pests' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best plant for repelling pests in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lavender is the most versatile pest-repellent plant for UK gardens. It deters moths, fleas, flies, mosquitoes, and even mice, while being extremely easy to grow in UK conditions. It thrives in well-drained soil and full sun, is drought-tolerant once established, and provides beautiful flowers and fragrance as a bonus. For the strongest pest-repellent effect, choose varieties with high oil content such as Lavandula angustifolia "Hidcote" or "Munstead".',
      },
    },
    {
      '@type': 'Question',
      name: 'Does mint really repel mice and rats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mint (particularly strong peppermint varieties like Mentha × piperita) has moderate evidence as a rodent deterrent. The intense menthol scent overwhelms the sensitive noses of mice and rats. Growing mint near doorways, under windows, and around the perimeter of outbuildings can provide a mild deterrent. However, growing mint alone is unlikely to deter determined rodents — it works best as one layer of a broader prevention strategy that includes physical proofing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I grow citronella in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'True citronella grass (Cymbopogon nardus) struggles in UK winters as it is a tropical plant. However, you can grow it as an annual, in pots that are brought indoors over winter, or in a greenhouse. Lemongrass (Cymbopogon citratus), a close relative with similar pest-repellent properties, is slightly hardier and can be grown outdoors in sheltered spots in southern England. For a fully hardy alternative with citronella-like scent, try lemon balm (Melissa officinalis).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do pest-repellent plants actually work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pest-repellent plants work by releasing volatile compounds that pests find unpleasant. Their effectiveness is real but mild compared to concentrated essential oils or chemical repellents. They are best understood as one layer of a natural pest prevention strategy — they reduce pest activity in an area over time rather than providing an impenetrable barrier. Planting them near doorways, windows, and seating areas maximises their benefit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What plants repel wasps in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mint, thyme, eucalyptus (grown as a pot plant in the UK), citronella grass or lemon balm, and wormwood (Artemisia absinthium) are all reported to deter wasps. Planting these near outdoor seating areas can reduce wasp interest. However, the effect is mild — for serious wasp deterrence during peak season, combine these plants with essential oil sprays and wasp traps for best results.',
      },
    },
  ],
};

const tocItems = [
  { id: 'how-it-works', title: 'How Pest-Repellent Plants Work' },
  { id: 'by-pest', title: 'Plants by Pest They Deter' },
  { id: 'top-plants', title: 'The Top 10 Pest-Repellent Plants for UK Gardens' },
  { id: 'planting-tips', title: 'Where to Plant for Maximum Effect' },
  { id: 'deterrent-products', title: 'Seeds and Plants to Get Started' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function PlantsThatRepelPestsPage() {
  return (
    <GuideLayout
      title="Plants That Repel Pests UK: Grow a Natural Pest-Free Garden"
      subtitle="Complete UK guide to pest-repellent plants — which plants deter which pests, where to plant them, and how to maximise their effectiveness"
      lastUpdated="April 2026"
      readingTime="15 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'Natural Ant Repellents', href: '/guides/natural-ant-repellents' },
        { title: 'Natural Mouse Deterrents', href: '/guides/natural-mouse-deterrents' },
        { title: 'Natural Rat Deterrents', href: '/guides/natural-rat-deterrents' },
        { title: 'Natural Spider Repellents', href: '/guides/natural-spider-repellents' },
        { title: 'Natural Wasp Deterrents', href: '/guides/natural-wasp-deterrents' },
        { title: 'Natural Flea Remedies', href: '/guides/natural-flea-remedies' },
        { title: 'Natural Moth Repellents', href: '/guides/natural-moth-repellents' },
        { title: 'Natural Fox Deterrents', href: '/guides/natural-fox-deterrents' },
        { title: 'Essential Oils for Pest Control', href: '/guides/essential-oils-for-pest-control' },
        { title: 'Spring Pest Prevention Guide', href: '/guides/spring-pest-prevention' },
        { title: 'Autumn Pest-Proofing Guide', href: '/guides/autumn-pest-proofing' },
        { title: 'How to Pest-Proof Your Shed', href: '/guides/how-to-pest-proof-your-shed' },
      ]}
      relatedProducts={[]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ------------------------------------------------------------------ */}
      <h2 id="how-it-works">How Pest-Repellent Plants Work</h2>

      <p>
        Pest-repellent plants are not magic. They work by releasing <strong>volatile organic compounds</strong> (VOCs) &mdash; aromatic molecules that evaporate from the plant&apos;s leaves, stems, and flowers into the surrounding air. These compounds have evolved over millions of years as a defence mechanism against herbivorous insects, and many of them are the same chemicals we extract and concentrate as essential oils.
      </p>
      <p>
        When you plant lavender near your back door, the linalool and linalyl acetate released from its flowers and foliage create a low-level scent barrier that many insects and some mammals find unpleasant. It is the same principle as applying lavender essential oil to a cotton ball, but at a lower, continuous concentration.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>Pest-repellent plants provide a mild, continuous deterrent effect. They reduce pest activity over time rather than creating an impenetrable barrier. For best results, combine them with other natural methods described in our dedicated pest-specific guides.</p>
        </Callout>
      </div>

      <p>
        <strong>Setting realistic expectations:</strong> Growing mint near your back door will not make your kitchen mouse-proof. But planting pest-repellent herbs and flowers strategically around your home and garden does create an additional layer of natural defence that, combined with physical proofing and good hygiene, contributes to a less pest-friendly environment. Think of plants as one ingredient in a recipe, not the whole meal.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 id="by-pest">Plants by Pest They Deter</h2>

      <h3>Plants That Deter Ants</h3>
      <p>
        <strong>Mint</strong> (all varieties), <strong>tansy</strong> (<em>Tanacetum vulgare</em>), <strong>lavender</strong>, and <strong>chrysanthemums</strong>. Mint is the most effective plant-based ant deterrent &mdash; the strong menthol disrupts pheromone trails that ants use to navigate. Plant mint in pots near doorways (mint is invasive and will take over beds if planted directly in the ground). Chrysanthemums contain natural <strong>pyrethrins</strong>, which are used commercially as insecticides.
      </p>
      <p className="text-sm text-gray-600">
        <em>For more: <Link href="/guides/natural-ant-repellents" className="text-blue-600 hover:text-blue-800 underline">Natural Ant Repellents Guide</Link></em>
      </p>
      <p>
        If ants persist despite planting mint and other deterrent herbs, our guide to <Link href="/best/ant-gel-bait" className="text-green-600 hover:underline">ant killer gel</Link> covers stronger colony-eliminating options.
      </p>

      <h3>Plants That Deter Mosquitoes and Flies</h3>
      <p>
        <strong>Citronella grass</strong> (<em>Cymbopogon nardus</em>), <strong>lavender</strong>, <strong>basil</strong> (particularly lemon basil and African basil), <strong>rosemary</strong>, <strong>marigolds</strong> (<em>Tagetes</em> species), and <strong>lemongrass</strong>. Citronella is the most well-known mosquito repellent plant &mdash; the same compound is used in commercial citronella candles. In the UK, citronella grass is best grown in pots as it is not fully hardy. Lemon balm (<em>Melissa officinalis</em>) is a fully hardy alternative with a similar citrus scent.
      </p>

      <h3>Plants That Deter Wasps</h3>
      <p>
        <strong>Mint</strong>, <strong>thyme</strong>, <strong>eucalyptus</strong> (grown as a pot plant in the UK), <strong>wormwood</strong> (<em>Artemisia absinthium</em>), and <strong>citronella grass</strong>. Wormwood is a particularly interesting choice &mdash; it has been used for centuries as an insect repellent and contains <strong>thujone</strong>, a compound that many flying insects actively avoid. It is fully hardy in the UK and grows into an attractive, silvery-foliaged perennial.
      </p>
      <p className="text-sm text-gray-600">
        <em>For more: <Link href="/guides/natural-wasp-deterrents" className="text-blue-600 hover:text-blue-800 underline">Natural Wasp Deterrents Guide</Link></em>
      </p>

      <h3>Plants That Deter Mice and Rats</h3>
      <p>
        <strong>Mint</strong> (strong peppermint varieties such as <em>Mentha &times; piperita</em>), <strong>daffodils</strong> (the bulbs contain lycorine, which is toxic to rodents), and <strong>lavender</strong>. Mint is the most commonly cited plant-based rodent deterrent. While growing plants alone will not mouse-proof your home, dense plantings of mint near doorways and around the base of buildings can contribute to a less appealing environment for rodents. <strong>Always combine with physical proofing</strong> for genuine results.
      </p>
      <p className="text-sm text-gray-600">
        <em>For more: <Link href="/guides/natural-mouse-deterrents" className="text-blue-600 hover:text-blue-800 underline">Natural Mouse Deterrents</Link> | <Link href="/guides/natural-rat-deterrents" className="text-blue-600 hover:text-blue-800 underline">Natural Rat Deterrents</Link></em>
      </p>

      <h3>Plants That Deter Moths</h3>
      <p>
        <strong>Lavender</strong>, <strong>rosemary</strong>, <strong>thyme</strong>, and <strong>southernwood</strong> (<em>Artemisia abrotanum</em>). Lavender is the classic moth-repellent plant &mdash; dried lavender sachets in wardrobes are a centuries-old tradition precisely because the scent deters clothes moths. Southernwood is an underused but effective choice with a strong, camphor-like scent that moths find repellent.
      </p>
      <p className="text-sm text-gray-600">
        <em>For more: <Link href="/guides/natural-moth-repellents" className="text-blue-600 hover:text-blue-800 underline">Natural Moth Repellents Guide</Link></em>
      </p>

      <h3>Plants That Deter Spiders</h3>
      <p>
        <strong>Mint</strong>, <strong>eucalyptus</strong>, <strong>lavender</strong>, and <strong>lemon balm</strong>. These plants release scents that spiders detect through their leg-mounted chemoreceptors and generally avoid. Planting them in pots on windowsills and near doorways can reduce the number of spiders entering your home, particularly during the autumn mating season.
      </p>
      <p className="text-sm text-gray-600">
        <em>For more: <Link href="/guides/natural-spider-repellents" className="text-blue-600 hover:text-blue-800 underline">Natural Spider Repellents Guide</Link></em>
      </p>

      <h3>Plants That Deter Fleas</h3>
      <p>
        <strong>Chrysanthemums</strong> (contain natural pyrethrins &mdash; the basis for many commercial insecticides), <strong>lavender</strong>, and <strong>rosemary</strong>. Chrysanthemums are the standout choice for flea deterrence because pyrethrins are genuinely toxic to fleas on contact. Planting chrysanthemums near doorways and around areas where pets play can help reduce flea populations in the garden.
      </p>
      <p className="text-sm text-gray-600">
        <em>For more: <Link href="/guides/natural-flea-remedies" className="text-blue-600 hover:text-blue-800 underline">Natural Flea Remedies Guide</Link></em>
      </p>

      <h3>Plants That Deter Foxes</h3>
      <p>
        Thorny shrubs such as <strong>holly</strong>, <strong>berberis</strong>, and <strong>pyracantha</strong> create physical barriers along fence lines that foxes are reluctant to push through. Strong-scented herbs such as <strong>mint</strong> and <strong>rosemary</strong> may provide a mild additional deterrent. For foxes, physical barriers (thorny plants and mesh fencing) are far more effective than scent-based plant repellents.
      </p>
      <p className="text-sm text-gray-600">
        <em>For more: <Link href="/guides/natural-fox-deterrents" className="text-blue-600 hover:text-blue-800 underline">Natural Fox Deterrents Guide</Link></em>
      </p>

      <h3>Bonus: Plants That Deter Slugs and Snails</h3>
      <p>
        While not a core pest for this site, many readers are also interested in slug and snail deterrence. <strong>Rosemary</strong>, <strong>lavender</strong>, <strong>fennel</strong>, <strong>astrantia</strong>, and <strong>euphorbia</strong> are all plants that slugs and snails tend to avoid. The strong aromatic oils in rosemary and lavender are unpalatable, while euphorbias produce a milky, toxic sap. Interplanting these with susceptible crops in the vegetable garden can reduce slug damage naturally.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 id="top-plants">The Top 10 Pest-Repellent Plants for UK Gardens</h2>

      <p>
        If you want to create a pest-repellent garden, these are the 10 most effective and versatile plants to start with. All are easy to grow in UK conditions.
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border-b border-gray-200 font-bold text-gray-900">Plant</th>
              <th className="text-left p-3 border-b border-gray-200 font-bold text-gray-900">Pests Deterred</th>
              <th className="text-left p-3 border-b border-gray-200 font-bold text-gray-900">UK Hardiness</th>
              <th className="text-left p-3 border-b border-gray-200 font-bold text-gray-900">Growing Tips</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Lavender</td>
              <td className="p-3 text-gray-700">Moths, fleas, flies, mosquitoes, mice</td>
              <td className="p-3 text-green-700 font-semibold">Fully hardy</td>
              <td className="p-3 text-gray-700">Full sun, well-drained soil. Drought-tolerant.</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-3 font-medium text-gray-900">Mint</td>
              <td className="p-3 text-gray-700">Ants, mice, rats, spiders, wasps</td>
              <td className="p-3 text-green-700 font-semibold">Fully hardy</td>
              <td className="p-3 text-gray-700">Grow in pots — invasive in beds. Sun or part shade.</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Rosemary</td>
              <td className="p-3 text-gray-700">Moths, mosquitoes, flies, slugs</td>
              <td className="p-3 text-green-700 font-semibold">Fully hardy</td>
              <td className="p-3 text-gray-700">Full sun, well-drained soil. Excellent in pots.</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-3 font-medium text-gray-900">Chrysanthemum</td>
              <td className="p-3 text-gray-700">Fleas, ants, beetles, roaches</td>
              <td className="p-3 text-green-700 font-semibold">Mostly hardy</td>
              <td className="p-3 text-gray-700">Contains natural pyrethrins. Sun, fertile soil.</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Thyme</td>
              <td className="p-3 text-gray-700">Wasps, moths, mosquitoes</td>
              <td className="p-3 text-green-700 font-semibold">Fully hardy</td>
              <td className="p-3 text-gray-700">Full sun, well-drained/rocky soil. Low-growing.</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-3 font-medium text-gray-900">Basil</td>
              <td className="p-3 text-gray-700">Flies, mosquitoes</td>
              <td className="p-3 text-amber-700 font-semibold">Annual/tender</td>
              <td className="p-3 text-gray-700">Grow outdoors in summer. Warm, sheltered spot.</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Marigold (Tagetes)</td>
              <td className="p-3 text-gray-700">Flies, mosquitoes, aphids, whitefly</td>
              <td className="p-3 text-amber-700 font-semibold">Annual</td>
              <td className="p-3 text-gray-700">Full sun. Excellent companion plant for veg.</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-3 font-medium text-gray-900">Lemon balm</td>
              <td className="p-3 text-gray-700">Mosquitoes, flies, spiders</td>
              <td className="p-3 text-green-700 font-semibold">Fully hardy</td>
              <td className="p-3 text-gray-700">Hardy citronella alternative. Sun or part shade.</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Wormwood</td>
              <td className="p-3 text-gray-700">Wasps, flies, moths, fleas</td>
              <td className="p-3 text-green-700 font-semibold">Fully hardy</td>
              <td className="p-3 text-gray-700">Full sun. Attractive silvery foliage. Drought-tolerant.</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-gray-900">Citronella grass</td>
              <td className="p-3 text-gray-700">Mosquitoes, flies, wasps</td>
              <td className="p-3 text-red-700 font-semibold">Tender (pot/indoor)</td>
              <td className="p-3 text-gray-700">Grow in pots, bring indoors over winter.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 id="planting-tips">Where to Plant for Maximum Effect</h2>

      <p>
        Strategic placement is everything when using plants as pest deterrents. The volatile compounds that repel pests are released into the air around the plant and dissipate with distance. For maximum impact, place pest-repellent plants:
      </p>

      <h3>Near Doorways and Windows</h3>
      <p>
        Place pots of mint, lavender, and rosemary on either side of external doors and beneath windows that you regularly open. This creates a scent barrier at the points where pests are most likely to enter your home. Windowsill herb pots are particularly effective and double as a kitchen herb supply.
      </p>

      <h3>Around Outdoor Seating Areas</h3>
      <p>
        Position citronella grass, lemongrass (or lemon balm), lavender, and mint in pots around your patio dining table and seating area. During barbecue season, the aromatic plants help reduce interest from wasps, flies, and mosquitoes. For an extra boost, bruise the leaves of mint and lemon balm between your fingers to release more volatile oils.
      </p>

      <h3>Along Garden Boundaries</h3>
      <p>
        Plant a mixed border of lavender, rosemary, and thyme along fence lines and garden boundaries. These plants create a fragrant, low-maintenance barrier that deters a range of pests. For fox deterrence, add thorny shrubs such as berberis, holly, or pyracantha at the base of fences.
      </p>

      <h3>Near Compost Bins and Waste Areas</h3>
      <p>
        Plant strong-scented herbs near compost bins, recycling areas, and any part of the garden where food waste is stored. This helps mask the food odours that attract rats, foxes, and flies.
      </p>

      <h3>Companion Planting in Vegetable Gardens</h3>
      <p>
        Interplant pest-deterrent herbs and flowers among your vegetables. Marigolds alongside tomatoes deter whitefly. Basil near tomatoes repels flies and aphids. Rosemary and thyme near brassicas help deter cabbage white butterflies. This is the traditional basis of <strong>companion planting</strong>, and it works.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Grow mint in pots rather than directly in the ground. Mint is extremely invasive and will rapidly take over a bed or border. A large pot on either side of your back door is the ideal placement for pest deterrence.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 id="deterrent-products">Seeds and Plants to Get Started</h2>

      <div className="not-prose space-y-6 my-8">
        <ProductCard
          name="Citronella / Lemongrass Seeds"
          rating={4.1}
          features={[
            'Grow your own citronella — the classic mosquito deterrent',
            'Can be grown in pots and brought indoors over winter',
            'Fresh lemongrass doubles as a cooking ingredient',
            'Sow indoors from March, transplant after last frost',
          ]}
          price="£2.95"
          asin="B0824ZJWK2"
          bestFor="Best for Mosquitoes"
        />

        <ProductCard
          name="Organic Peppermint Seeds (~3,300 Seeds)"
          rating={4.0}
          features={[
            'Strong peppermint variety — high menthol content',
            'Organic/BIO certified seeds',
            'Best grown in pots to control spreading',
            'Deters ants, mice, spiders, and wasps',
          ]}
          price="£2.20"
          asin="B00ICQQWQU"
          bestFor="Best Multi-Pest Deterrent"
        />

        <ProductCard
          name="English Lavender 'Munstead' Plug Plants (Pack of 6)"
          rating={4.3}
          features={[
            'Ready-to-plant lavender plugs — faster than seeds',
            'Munstead variety — compact, strongly scented, fully hardy',
            'Deters moths, fleas, flies, and mosquitoes',
            'Beautiful purple flowers attract pollinators',
          ]}
          price="£10.99"
          asin="B08X1MHTQN"
          bestFor="Best All-Round Plant"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What is the best plant for repelling pests in the UK?</h3>
      <p>
        Lavender is the most versatile pest-repellent plant for UK gardens. It deters moths, fleas, flies, mosquitoes, and even mice, while being extremely easy to grow in UK conditions. It thrives in well-drained soil and full sun, is drought-tolerant once established, and provides beautiful flowers and fragrance as a bonus. For the strongest pest-repellent effect, choose varieties with high oil content such as <em>Lavandula angustifolia</em> &ldquo;Hidcote&rdquo; or &ldquo;Munstead&rdquo;.
      </p>

      <h3>Does mint really repel mice and rats?</h3>
      <p>
        Mint (particularly strong peppermint varieties) has moderate evidence as a rodent deterrent. The intense menthol scent overwhelms the sensitive noses of mice and rats. Growing mint near doorways, under windows, and around outbuildings can provide a mild deterrent. However, growing plants alone is unlikely to deter determined rodents &mdash; it works best as one layer of a broader prevention strategy that includes <Link href="/guides/natural-mouse-deterrents" className="text-blue-600 hover:text-blue-800 underline">physical proofing</Link>.
      </p>

      <h3>Can I grow citronella in the UK?</h3>
      <p>
        True citronella grass (<em>Cymbopogon nardus</em>) struggles in UK winters as it is a tropical plant. However, you can grow it as an annual, in pots that are brought indoors over winter, or in a greenhouse or conservatory. Lemongrass (<em>Cymbopogon citratus</em>), a close relative with similar pest-repellent properties, is slightly hardier and can survive outdoors in sheltered spots in southern England. For a fully hardy alternative with a citronella-like scent, try <strong>lemon balm</strong> (<em>Melissa officinalis</em>), which is completely hardy throughout the UK.
      </p>

      <h3>Do pest-repellent plants actually work?</h3>
      <p>
        Pest-repellent plants work by releasing volatile compounds that pests find unpleasant, and their effectiveness is real but mild compared to concentrated essential oils or chemical repellents. They are best understood as one layer of a natural pest prevention strategy &mdash; they reduce pest activity in an area over time rather than providing an impenetrable barrier. Planting them near doorways, windows, and outdoor seating areas maximises their practical benefit, and they look beautiful too.
      </p>

      <h3>What plants repel wasps in the UK?</h3>
      <p>
        Mint, thyme, eucalyptus (grown as a pot plant), citronella grass or lemon balm, and wormwood (<em>Artemisia absinthium</em>) are all reported to deter wasps. Planting these near outdoor seating areas can reduce wasp interest, particularly when combined with other measures. For serious wasp deterrence during peak season, combine these plants with <Link href="/guides/natural-wasp-deterrents" className="text-blue-600 hover:text-blue-800 underline">essential oil sprays and wasp traps</Link>.
      </p>
    </GuideLayout>
  );
}
