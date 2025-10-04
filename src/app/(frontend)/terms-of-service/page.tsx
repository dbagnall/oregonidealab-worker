/**
 * Terms of Service Page
 *
 * Legal terms and conditions for using the Oregon Idea Lab website
 */

import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Oregon Idea Lab terms of service - Legal terms and conditions for using our website.',
};

export default function TermsOfServicePage() {
  return (
    <main className="py-16 lg:py-24">
      <Container size="md">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using oregonidealab.com (the "Website"), you accept and agree
              to be bound by these Terms of Service and our Privacy Policy. If you do not
              agree to these terms, please do not use our Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on Oregon Idea Lab's
              Website for personal, non-commercial use only. This is the grant of a license,
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for commercial purposes</li>
              <li>Attempt to reverse engineer any software on the Website</li>
              <li>Remove copyright or proprietary notations</li>
              <li>Transfer materials to another person or mirror on another server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to use the Website to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Violate any local, state, national, or international law</li>
              <li>Harass, threaten, or harm others</li>
              <li>Impersonate any person or entity</li>
              <li>Distribute spam or unsolicited messages</li>
              <li>Interfere with or disrupt the Website's operation</li>
              <li>Upload viruses or malicious code</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The content, organization, graphics, design, compilation, and other matters
              related to the Website are protected under applicable copyrights, trademarks,
              and other proprietary rights.
            </p>
            <p className="text-gray-700 leading-relaxed">
              "Oregon Idea Lab" and related logos are trademarks or registered trademarks
              of Oregon Idea Lab. Use without permission is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User-Generated Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you submit comments, suggestions, or other content to us, you grant Oregon
              Idea Lab a non-exclusive, royalty-free, perpetual, and worldwide license to
              use, reproduce, and publish such content.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You represent that you own or have permission to use any content you submit
              and that it does not violate any third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Website may contain links to third-party websites. We are not responsible
              for the content, accuracy, or practices of these external sites. Accessing
              third-party links is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The materials on Oregon Idea Lab's Website are provided "as is." Oregon Idea
              Lab makes no warranties, expressed or implied, and disclaims all other warranties.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Oregon Idea Lab does not warrant that the Website will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitations of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Oregon Idea Lab or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to
              business interruption) arising out of the use or inability to use the materials
              on Oregon Idea Lab's Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Political Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Oregon Idea Lab is a political organization focused on ballot measures and
              initiative petitions in Oregon. The views expressed on this Website are those
              of Oregon Idea Lab and do not necessarily reflect the views of all Oregonians.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any ballot measure information provided is for educational purposes only and
              should not be considered legal advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend access to our Website immediately,
              without prior notice, for any reason, including breach of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with
              the laws of the State of Oregon, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting to the Website. Your continued use of the Website after
              changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Oregon Idea Lab</strong><br />
                Email: <a href="mailto:legal@oregonidealab.com" className="text-blue-600 hover:underline">legal@oregonidealab.com</a>
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
