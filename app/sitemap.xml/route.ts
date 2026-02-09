import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase'

export const dynamic = 'force-dynamic';

// Slug generation function (must match the one in provider page)
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[&]/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export async function GET() {
  const baseUrl = 'https://pestproindex.com'

  // Static pages
  const staticPages = [
    { url: baseUrl, changefreq: 'weekly', priority: '1.0' },
    { url: `${baseUrl}/residential`, changefreq: 'weekly', priority: '0.9' },
    { url: `${baseUrl}/commercial`, changefreq: 'weekly', priority: '0.9' },
    { url: `${baseUrl}/professionals`, changefreq: 'monthly', priority: '0.7' },
    { url: `${baseUrl}/products`, changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/commercial-products`, changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/resources`, changefreq: 'monthly', priority: '0.7' },
    { url: `${baseUrl}/about`, changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/contact`, changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/pest-control`, changefreq: 'monthly', priority: '0.8' },
  ]

  // Borough pages
  const boroughSlugs = [
    'barking-and-dagenham', 'barnet', 'bexley', 'brent', 'bromley', 'camden',
    'city-of-london', 'croydon', 'ealing', 'enfield', 'greenwich', 'hackney',
    'hammersmith-and-fulham', 'haringey', 'harrow', 'havering', 'hillingdon',
    'hounslow', 'islington', 'kensington-and-chelsea', 'kingston-upon-thames',
    'lambeth', 'lewisham', 'merton', 'newham', 'redbridge', 'richmond-upon-thames',
    'southwark', 'sutton', 'tower-hamlets', 'waltham-forest', 'wandsworth', 'westminster'
  ]

  const boroughPages = boroughSlugs.map(slug => ({
    url: `${baseUrl}/pest-control/${slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  }))

  // Fetch all providers for dynamic provider pages
  const supabase = createClient()
  const { data: providers } = await supabase
    .from('Providers')
    .select('name')

  const providerPages = providers
    ? providers.map(p => ({
        url: `${baseUrl}/provider/${generateSlug(p.name)}`,
        changefreq: 'monthly',
        priority: '0.7',
      }))
    : []

  const pages = [...staticPages, ...boroughPages, ...providerPages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
  <!-- Total URLs: ${pages.length} (${staticPages.length} static + ${boroughPages.length} boroughs + ${providerPages.length} providers) -->
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
