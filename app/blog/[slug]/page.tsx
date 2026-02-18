import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '../data/posts'

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishDate,
    publisher: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: `https://pestproindex.com/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="text-sm text-gray-500 hover:underline mb-6 block">← Back to guides</Link>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-8">Published {new Date(post.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
    </>
  )
}
