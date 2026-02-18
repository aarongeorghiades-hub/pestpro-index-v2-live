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
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb]">
      {/* Matching homepage gradient layers */}
      <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)'}}></div>
      <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.7) 100%)'}}></div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-16">
        {/* Back link */}
        <Link 
          href="/blog" 
          className="inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline mb-8 transition-colors"
        >
          ← Back to guides
        </Link>
        
        {/* Post header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-slate-400">
            Published {new Date(post.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </header>
        
        {/* Article content with styled elements */}
        <article 
          className="prose prose-lg max-w-none
            prose-headings:text-white
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-slate-300 prose-p:text-base prose-p:leading-relaxed prose-p:mb-4
            prose-ul:text-slate-300 prose-ul:mb-4 prose-ul:ml-6 prose-ul:list-disc
            prose-ol:text-slate-300 prose-ol:mb-4 prose-ol:ml-6 prose-ol:list-decimal
            prose-li:mb-2
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-300
            prose-strong:text-white prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-300"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* CTA section at bottom */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-blue-400/30 rounded-xl p-8 shadow-md shadow-blue-500/5">
          <h3 className="text-xl font-bold text-white mb-4">
            Looking for pest control in London?
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Browse our directory of{' '}
            <Link href="/residential" className="text-blue-400 hover:text-blue-300 hover:underline font-semibold">
              391 residential providers
            </Link>
            {' '}or{' '}
            <Link href="/commercial" className="text-blue-400 hover:text-blue-300 hover:underline font-semibold">
              240 commercial providers
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  )
}
