/**
 * CMS-Powered Root Layout - Oregon Idea Lab
 *
 * Layout that fetches navigation and site settings from Payload CMS
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderCMS from '@/components/ui/Header-cms'
import Footer from '@/components/ui/Footer'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import { getNavigationData, getSiteSettings, getMediaUrl } from '@/lib/payload'

// Clean, modern sans-serif for everything
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://oregonidealab.com'
  ),
  title: {
    default: 'Oregon Idea Lab - Practical Solutions Through Democracy',
    template: '%s | Oregon Idea Lab',
  },
  description:
    'We are Oregon citizens committed to finding practical ideas that move Oregon forward through the initiative petition process.',
  keywords: [
    'Oregon',
    'democracy',
    'initiative petition',
    'ballot measures',
    'political reform',
    'public good',
    'Oregon government',
  ],
  authors: [{ name: 'Oregon Idea Lab' }],
  creator: 'Oregon Idea Lab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://oregonidealab.com',
    siteName: 'Oregon Idea Lab',
    title: 'Oregon Idea Lab - Practical Solutions Through Democracy',
    description:
      'We are Oregon citizens committed to finding practical ideas that move Oregon forward through the initiative petition process.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oregon Idea Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oregon Idea Lab - Practical Solutions Through Democracy',
    description:
      'We are Oregon citizens committed to finding practical ideas that move Oregon forward through the initiative petition process.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

  // Fetch CMS data
  const navigation = await getNavigationData()
  const siteSettings = await getSiteSettings()

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {/* Google Analytics */}
        {gaId && <GoogleAnalytics measurementId={gaId} />}

        {/* Header Navigation */}
        <HeaderCMS
          navigation={navigation || undefined}
          siteName={siteSettings?.siteName}
          logoUrl={getMediaUrl(siteSettings?.logo)}
        />

        {/* Main Content */}
        <div className="pt-20">{children}</div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
