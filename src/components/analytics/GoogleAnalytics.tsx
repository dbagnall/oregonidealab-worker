'use client';

/**
 * Google Analytics Component
 *
 * Integrates Google Analytics 4 (GA4) tracking
 * Only loads in production to avoid tracking during development
 */

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Only load in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Don't load if no measurement ID provided
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics: No valid measurement ID provided');
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}
