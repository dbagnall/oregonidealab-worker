/**
 * Cookie Policy Page
 *
 * Detailed explanation of cookie usage on the website
 */

import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Oregon Idea Lab cookie policy - Learn about the cookies we use and how to manage them.',
};

export default function CookiePolicyPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container size="md">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device (computer, smartphone,
              or tablet) when you visit a website. They are widely used to make websites work
              more efficiently and provide information to website owners.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies help us understand how visitors interact with our website, remember your
              preferences, and improve your overall experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Oregon Idea Lab uses cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To enable essential website functionality</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To remember your preferences and settings</li>
              <li>To improve website performance</li>
              <li>To understand how visitors find and use our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies are necessary for the website to function properly. They enable
                basic functions like page navigation and access to secure areas.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Duration: Session or up to 1 year
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                We use Google Analytics to understand how visitors interact with our website.
                These cookies collect information anonymously, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
                <li>Pages visited and time spent</li>
                <li>How visitors arrived at our site</li>
                <li>Device and browser information</li>
                <li>General location data (city/region)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed italic">
                Duration: Up to 2 years
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preference Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies remember your preferences and choices to personalize your experience.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Duration: Up to 1 year
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the following third-party services that may set cookies:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                We use Google Analytics to measure website performance and user behavior.
                Google Analytics uses cookies to collect data anonymously.
              </p>
              <p className="text-gray-700 text-sm">
                Learn more:{' '}
                <a
                  href="https://policies.google.com/technologies/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google's Cookie Policy
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can
              manage your cookie preferences through:
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most web browsers automatically accept cookies, but you can modify your
                browser settings to decline cookies if you prefer:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and security → Cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Privacy, search, and services → Cookies
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Tools</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                You can opt-out of Google Analytics tracking:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Install the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Disabling cookies may affect the functionality of our
                website and prevent you from accessing certain features.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie Duration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies may be either:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Session cookies:</strong> Temporary cookies that expire when you
                close your browser
              </li>
              <li>
                <strong>Persistent cookies:</strong> Remain on your device for a set period
                or until you manually delete them
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our
              practices or legal requirements. Please review this page periodically for updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Oregon Idea Lab</strong><br />
                Email: <a href="mailto:privacy@oregonidealab.com" className="text-blue-600 hover:underline">privacy@oregonidealab.com</a>
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
