/**
 * CMS-Powered Landing Page - Oregon Idea Lab
 *
 * This page fetches all content from Payload CMS
 */

import Hero from '@/components/sections/Hero'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import BulletList from '@/components/sections/BulletList'
import ContactForm from '@/components/forms/ContactForm'
import DonationModule from '@/components/sections/DonationModule'
import Container from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { getHomepageData, getMediaUrl } from '@/lib/payload'
import { serialize } from '@/lib/serializeLexical'

export const dynamic = 'force-dynamic'
export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const homepage = await getHomepageData()

  if (!homepage) {
    return (
      <main>
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Content Not Available</h1>
            <p className="text-gray-600">
              Please configure homepage content in the CMS admin panel at{' '}
              <a href="/admin" className="text-emerald-600 hover:underline">
                /admin
              </a>
            </p>
          </div>
        </Container>
      </main>
    )
  }

  const { hero, howWeWork, whyChange, keyIssues, whoWeAre, whatWeDo, gallery } = homepage

  return (
    <main>
      {/* Hero Section */}
      {hero && (
        <section id="home" className="relative">
          <Hero
            title={hero.title || ''}
            subtitle={hero.subtitle || ''}
            backgroundImage={getMediaUrl(hero.backgroundImage) || '/images/hero/Coos 1.jpg'}
            showForm={hero.showForm}
          >
            {hero.showForm && (
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-emerald-800">
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                  {hero.formTitle || 'Get Involved'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {hero.formSubtitle || 'Sign up to receive updates'}
                </p>
                <ContactForm variant="compact" submitText="Join the Movement" />
              </div>
            )}
          </Hero>
        </section>
      )}

      {/* How We Work Section */}
      {howWeWork?.features && howWeWork.features.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <FeaturesGrid
            title={howWeWork.title || 'How We Work'}
            subtitle={howWeWork.subtitle || ''}
            columns={3}
            features={howWeWork.features.map((feature: any) => ({
              title: feature.title,
              description: feature.description,
              illustration: getMediaUrl(feature.illustration),
            }))}
          />
        </section>
      )}

      {/* Why Oregon Needs Change Section */}
      {whyChange?.points && whyChange.points.length > 0 && (
        <section className="py-16 lg:py-24 bg-stone-50">
          <Container size="md">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              {whyChange.title || 'Why Oregon Needs Change'}
            </h2>
            <Card className="shadow-lg border-stone-200">
              <CardContent className="p-8">
                <ol className="space-y-6 list-decimal text-lg">
                  {whyChange.points.map((point: any, index: number) => (
                    <li key={index} className="leading-relaxed text-gray-700 ml-6 pl-2">
                      {point.text && typeof point.text === 'object' ? (
                        <span
                          className="inline"
                          dangerouslySetInnerHTML={{
                            __html: serialize(point.text),
                          }}
                        />
                      ) : (
                        point.text
                      )}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </Container>
        </section>
      )}

      {/* Key Issues Section */}
      {keyIssues?.issues && keyIssues.issues.length > 0 && (
        <section id="key-issues" className="bg-white">
          <BulletList
            title={keyIssues.title || 'Key Issues'}
            intro={keyIssues.intro}
            items={keyIssues.issues.map((issue: any) => ({
              title: issue.title,
              description: issue.description,
            }))}
          />
        </section>
      )}

      {/* Who We Are Section */}
      {whoWeAre && (
        <section id="who-we-are" className="bg-stone-50">
          <TwoColumnSection
            title={whoWeAre.title || 'Who We Are'}
            imageSrc={getMediaUrl(whoWeAre.image) || '/images/gallery/Coos.jpg'}
            imageAlt="Oregon landscape"
            imageOnLeft={whoWeAre.imageOnLeft}
            content={
              whoWeAre.content && typeof whoWeAre.content === 'object' ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: serialize(whoWeAre.content),
                  }}
                />
              ) : (
                <p>{whoWeAre.content}</p>
              )
            }
          />
        </section>
      )}

      {/* What We Do Section */}
      {whatWeDo && (
        <section id="what-we-do" className="bg-white">
          <TwoColumnSection
            title={whatWeDo.title || 'What We Do'}
            imageSrc={getMediaUrl(whatWeDo.image) || '/images/gallery/Smith.jpg'}
            imageAlt="Oregon community"
            imageOnLeft={whatWeDo.imageOnLeft}
            content={
              whatWeDo.content && typeof whatWeDo.content === 'object' ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: serialize(whatWeDo.content),
                  }}
                />
              ) : (
                <p>{whatWeDo.content}</p>
              )
            }
          />
        </section>
      )}

      {/* Gallery Section */}
      {gallery?.images && gallery.images.length > 0 && (
        <section className="py-16 lg:py-24 bg-stone-50">
          <Container>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              {gallery.title || 'Gallery'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.images.slice(0, 6).map((item: any, index: number) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {getMediaUrl(item.image) && (
                    <img
                      src={getMediaUrl(item.image)}
                      alt={item.alt || 'Gallery image'}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Donation Module */}
      <section id="donate">
        <DonationModule />
      </section>
    </main>
  )
}
