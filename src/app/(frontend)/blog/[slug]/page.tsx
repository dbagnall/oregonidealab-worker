/**
 * Blog Post Page
 * Dynamic route for individual blog posts
 */

import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { serialize } from '@/lib/serializeLexical'
import Image from 'next/image'

export const dynamic = 'force-dynamic'
export const revalidate = 60

interface PostPageProps {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
  const payload = await getPayload({ config })

  try {
    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
        status: {
          equals: 'published',
        },
      },
      depth: 2,
      limit: 1,
    })

    return posts.docs[0] || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.seo?.title || post.title} | Oregon Idea Lab`,
    description: post.seo?.description || post.excerpt,
  }
}

// For static export: generate all post pages at build time
export async function generateStaticParams() {
  const payload = await getPayload({ config })

  try {
    const posts = await payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'published',
        },
      },
      limit: 1000,
    })

    return posts.docs.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const category = post.category && typeof post.category === 'object' ? post.category : null
  const featuredImage =
    post.featuredImage && typeof post.featuredImage === 'object' ? post.featuredImage : null

  const publishedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="py-16 lg:py-24 bg-white">
      <Container size="md">
        <article>
          {/* Header */}
          <header className="mb-8">
            {category && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-full">
                  {category.name}
                </span>
              </div>
            )}

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.publishedDate}>{publishedDate}</time>
            </div>

            {post.excerpt && (
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
            )}
          </header>

          {/* Featured Image */}
          {featuredImage && featuredImage.url && (
            <div className="mb-12 -mx-4 sm:mx-0">
              <Image
                src={featuredImage.url}
                alt={featuredImage.alt || post.title}
                width={featuredImage.width || 1200}
                height={featuredImage.height || 600}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-emerald max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: serialize(post.content),
              }}
            />
          </div>
        </article>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/blog"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </a>
        </div>
      </Container>
    </main>
  )
}
