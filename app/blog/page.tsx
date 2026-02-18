import { Metadata } from 'next'
import Link from 'next/link'
import { posts } from './data/posts'

export const metadata: Metadata = {
  title: 'Pest Control Guides & Advice | PestPro Index Blog',
  description: 'Practical pest control and pest removal guides for London homeowners, tenants and commercial operators. Expert advice on rats, bed bugs, wasps, cockroaches and more.',
}

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Pest Control & Pest Removal Guides for London</h1>
      <p className="text-gray-600 mb-10">
        Practical guides for London homeowners, tenants and businesses — covering everything from identifying an infestation to understanding your legal rights and finding the right pest control or pest removal specialist.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.metaDescription}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
