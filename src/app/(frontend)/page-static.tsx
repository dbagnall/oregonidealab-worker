/**
 * Landing Page - Oregon Idea Lab
 *
 * Clean, masculine design with dark forest green color scheme
 */

import Hero from '@/components/sections/Hero';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import ContentBlock from '@/components/sections/ContentBlock';
import TwoColumnSection from '@/components/sections/TwoColumnSection';
import BulletList from '@/components/sections/BulletList';
import ContactForm from '@/components/forms/ContactForm';
import DonationModule from '@/components/sections/DonationModule';
import Container from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';

export const metadata = {
  title: 'Oregon Idea Lab - Practical Solutions Through Democracy',
  description:
    'We are Oregon citizens committed to finding practical ideas that move Oregon forward through the initiative petition process.',
};

export default function Home() {
  return (
    <main>
      {/* Hero Section with Form and Background Image */}
      <section id="home" className="relative">
        <Hero
          title="The solution to problems in a democracy is more democracy"
          subtitle="Join thousands of Oregonians working for practical solutions"
          backgroundImage="/images/hero/Coos 1.jpg"
          showForm={true}
        >
          <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-emerald-800">
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">
              Get Involved
            </h3>
            <p className="text-gray-600 mb-6">
              Sign up to receive updates on our initiatives
            </p>
            <ContactForm variant="compact" submitText="Join the Movement" />
          </div>
        </Hero>
      </section>

      {/* Features Grid - How We Work */}
      <section className="py-16 lg:py-24 bg-white">
        <FeaturesGrid
          title="How We Work"
          subtitle="Three principles that guide everything we do"
          columns={3}
          features={[
            {
              title: 'Direct Democracy',
              description:
                'We go directly to Oregon voters through ballot initiatives, bypassing politicians who won\'t act on popular ideas.',
              illustration: '/images/illustrations/undraw/voting-placeholder.svg',
            },
            {
              title: 'Community Powered',
              description:
                'Ideas come from Oregonians, not special interests. We build coalitions across the political spectrum.',
              illustration: '/images/illustrations/undraw/community-placeholder.svg',
            },
            {
              title: 'Transparent Process',
              description:
                'Every step is documented and open for public review. We believe in accountability from start to finish.',
              illustration: '/images/illustrations/undraw/transparency-placeholder.svg',
            },
          ]}
        />
      </section>

      {/* Core Problems Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <Container size="md">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Oregon Needs Change
          </h2>
          <Card className="shadow-lg border-stone-200">
            <CardContent className="p-8">
              <ol className="space-y-6 list-decimal list-inside text-lg">
                <li className="leading-relaxed text-gray-700">
                  Oregon's government is <strong className="text-emerald-800">unaccountable</strong> to its people.
                </li>
                <li className="leading-relaxed text-gray-700">
                  Elected officials are supposed to serve the many, not the few.
                  <strong className="text-emerald-800"> Politicians won't fix our problems.</strong>
                </li>
                <li className="leading-relaxed text-gray-700">
                  The solution to problems in a democracy is{' '}
                  <strong className="text-emerald-800">more democracy</strong>. In Oregon,
                  this means going around the politicians directly to the people through
                  the initiative petition process.
                </li>
                <li className="leading-relaxed text-gray-700">
                  There are plenty of <strong className="text-emerald-800">practical solutions</strong> to our problems that aren't
                  blinded by ideology or subject to the whims of political parties and
                  institutional politics.
                </li>
                <li className="leading-relaxed text-gray-700">
                  On issue after issue, there are practical ideas{' '}
                  <strong className="text-emerald-800">the vast majority of
                  Oregonians support</strong> that have no chance of moving in Salem.
                </li>
              </ol>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Key Issues Section */}
      <section id="key-issues" className="bg-white">
        <BulletList
          title="Key Issues Facing Oregon"
          // intro="On issue after issue, there are practical ideas the vast majority of Oregonians support that have no chance of moving in Salem:"
          items={[
            {
              title: 'Public Safety',
              description:
                'We are caught between those who want to criminalize homelessness and those who believe we have no right to tell anyone anything to do.',
            },
            {
              title: 'Housing',
              description:
                'We are caught between those who want no building standards and those who want to make building impossible.',
            },
            {
              title: 'Election Reform',
              description:
                'We are caught between those who want all money out of politics, and those who believe there should be no limits.',
            },
            {
              title: 'Government Accountability',
              description:
                'We are caught between those who think government should be torn down, and those who think government is the answer to everything.',
            },
          ]}
        />
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="bg-stone-50">
        <TwoColumnSection
          title="Who We Are"
          imageSrc="/images/gallery/Coos.jpg"
          imageAlt="Oregon landscape"
          imageOnLeft={false}
          content={
            <>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                We are Oregon citizens who believe the public good is not being served
                by our government. We're both Independents, Democrats and Republicans,
                and we're{' '}
                <strong className="text-emerald-800">ideologically bound only to finding practical ways</strong> to move
                Oregon forward. We are aware that in today's hyper-partisan world, it is
                all too easy to attack the messenger rather than debate the message.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                That's why we're committed to <strong className="text-emerald-800">stand together</strong>, and let the ideas we move
                forward stand on their own. We are together dedicated to finding simple,
                practical ideas that have strong public support across the political
                spectrum, but that have no chance of moving through our state government.
              </p>
            </>
          }
        />
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="bg-white">
        <TwoColumnSection
          title="What We Do"
          imageSrc="/images/gallery/Smith.jpg"
          imageAlt="Oregon community"
          imageOnLeft={true}
          content={
            <>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Our purpose is to <strong className="text-emerald-800">explore and incubate positive, popular solutions</strong> to
                real problems through ballot measure concepts that could be moved to the
                ballot if given a fair path forward. When we find success forcing the
                Oregon Secretary of State and Attorney General to create and approve fair
                ballot measure titles, we will build a campaign to move those
                initiatives forward and pass them into law.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We believe in <strong className="text-emerald-800">transparency and open dialogue</strong>. Every step of our process,
                from concept development to petition approval, is guided by the principle
                that government should serve the people, not special interests.
              </p>
            </>
          }
        />
      </section>

      {/* Oregon Gallery Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            The Oregon We Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/gallery/4.jpg"
                alt="Oregon landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/gallery/5.jpg"
                alt="Oregon scenery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/issues/2.jpg"
                alt="Oregon community issues"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Donation Module */}
      <section id="donate">
        <DonationModule />
      </section>
    </main>
  );
}
