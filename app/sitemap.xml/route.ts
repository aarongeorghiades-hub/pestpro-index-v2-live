import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://pestproindex.com'

  const pages = [
    { url: baseUrl, changefreq: 'weekly', priority: '1.0' },
    { url: `${baseUrl}/residential`, changefreq: 'weekly', priority: '0.9' },
    { url: `${baseUrl}/commercial`, changefreq: 'weekly', priority: '0.9' },
    { url: `${baseUrl}/professionals`, changefreq: 'monthly', priority: '0.7' },
    { url: `${baseUrl}/products`, changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/commercial-products`, changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/resources`, changefreq: 'monthly', priority: '0.7' },
    { url: `${baseUrl}/about`, changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/contact`, changefreq: 'monthly', priority: '0.5' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
