import { Metadata } from 'next'
import Link from 'next/link'
import { posts } from './data/posts'

export const metadata: Metadata = {
  title: 'Pest Control Guides & Advice | PestPro Index Blog',
  description: 'Practical pest control and pest removal guides for London homeowners, tenants and commercial operators. Expert advice on rats, bed bugs, wasps, cockroaches and more.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050812] via-[#0a1128] to-[#050812]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pest Control & Pest Removal Guides for London
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            Practical guides for London homeowners, tenants and businesses — covering everything from identifying an infestation to understanding your legal rights and finding the right pest control or pest removal specialist.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="block bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-400 hover:scale-[1.02] transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h2 className="text-xl font-bold text-white mb-3">
                {post.title}
              </h2>
              <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                {post.metaDescription}
              </p>
              <span className="text-sm font-medium text-blue-400 hover:text-blue-300">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
