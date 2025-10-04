/**
 * Dynamic Page Component
 * Renders any page from Payload CMS based on slug
 */

import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { serialize } from '@/lib/serializeLexical'

export const dynamic = 'force-dynamic'
export const revalidate = 60

interface PageProps {
  params: {
    slug: string
  }
}

async function getPage(slug: string) {
  const payload = await getPayload({ config })

  try {
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    return pages.docs[0] || null
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps) {
  const page = await getPage(params.slug)

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: `${page.title} | Oregon Idea Lab`,
    description: page.title,
  }
}

export default async function Page({ params }: PageProps) {
  const page = await getPage(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <main className="py-16 lg:py-24 bg-white">
      <Container size="md">
        <article className="prose prose-lg prose-emerald max-w-none">
          {page.content && typeof page.content === 'object' ? (
            <div
              dangerouslySetInnerHTML={{
                __html: serialize(page.content),
              }}
            />
          ) : (
            <div>{page.content}</div>
          )}
        </article>
      </Container>
    </main>
  )
}
