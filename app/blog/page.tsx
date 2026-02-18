import { Metadata } from 'next'
import Link from 'next/link'
import { posts } from './data/posts'

export const metadata: Metadata = {
  title: 'Pest Control Guides & Advice | PestPro Index Blog',
  description: 'Practical pest control and pest removal guides for London homeowners, tenants and commercial operators. Expert advice on rats, bed bugs, wasps, cockroaches and more.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb]">
      {/* Matching homepage gradient layers */}
      <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)'}}></div>
      <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.7) 100%)'}}></div>
      
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
          {/* Page Header - matching homepage hero style */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Pest Control & Pest Removal Guides for London
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Practical guides for London homeowners, tenants and businesses — covering everything from identifying an infestation to understanding your legal rights and finding the right pest control or pest removal specialist.
            </p>
          </div>

          {/* Blog Cards Grid - matching homepage card style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`} 
                className="group block bg-white/5 backdrop-blur-sm border border-blue-400/30 rounded-xl p-8 shadow-md shadow-blue-500/5 hover:border-blue-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed line-clamp-3">
                  {post.metaDescription}
                </p>
                <span className="inline-flex items-center text-sm font-bold text-blue-400 group-hover:text-blue-300 group-hover:underline transition-all">
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
