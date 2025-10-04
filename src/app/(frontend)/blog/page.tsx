/**
 * Blog Listing Page
 * Shows all published blog posts with category filtering
 */

import Container from '@/components/ui/Container'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 60

interface BlogPageProps {
  searchParams: Promise<{
    category?: string
  }>
}

async function getPosts(categorySlug?: string) {
  const payload = await getPayload({ config })

  try {
    const where: any = {
      status: {
        equals: 'published',
      },
    }

    // If category filter is provided, add it to the query
    if (categorySlug) {
      const categories = await payload.find({
        collection: 'categories',
        where: {
          slug: {
            equals: categorySlug,
          },
        },
        limit: 1,
      })

      if (categories.docs[0]) {
        where.category = {
          equals: categories.docs[0].id,
        }
      }
    }

    const posts = await payload.find({
      collection: 'posts',
      where,
      depth: 2,
      limit: 100,
      sort: '-publishedDate',
    })

    return posts.docs
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

async function getCategories() {
  const payload = await getPayload({ config })

  try {
    const categories = await payload.find({
      collection: 'categories',
      limit: 100,
      sort: 'name',
    })

    return categories.docs
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export const metadata = {
  title: 'Blog | Oregon Idea Lab',
  description: 'Insights, updates, and stories about democracy and civic engagement in Oregon.',
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const posts = await getPosts(params.category)
  const categories = await getCategories()

  return (
    <main className="py-16 lg:py-24 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, updates, and stories about democracy and civic engagement in Oregon.
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-12 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                !params.category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Posts
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog?category=${category.slug}`}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  params.category === category.slug
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              {params.category
                ? 'No posts found in this category.'
                : 'No posts have been published yet.'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const category = post.category && typeof post.category === 'object' ? post.category : null
              const featuredImage =
                post.featuredImage && typeof post.featuredImage === 'object'
                  ? post.featuredImage
                  : null

              const publishedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })

              return (
                <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {/* Featured Image */}
                  {featuredImage && featuredImage.url && (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative aspect-video">
                        <Image
                          src={featuredImage.url}
                          alt={featuredImage.alt || post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {category && (
                      <Link
                        href={`/blog?category=${category.slug}`}
                        className="inline-block mb-3 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                      >
                        {category.name}
                      </Link>
                    )}

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <time dateTime={post.publishedDate}>{publishedDate}</time>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </Container>
    </main>
  )
}
