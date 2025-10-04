/**
 * Two Column Section Component
 *
 * Responsive two-column layout for content and images
 * Inspired by modern political campaign sites
 */

import Container from '@/components/ui/Container';
import Image from 'next/image';

interface TwoColumnSectionProps {
  title: string;
  content: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageOnLeft?: boolean;
  className?: string;
}

export default function TwoColumnSection({
  title,
  content,
  imageSrc,
  imageAlt = '',
  imageOnLeft = false,
  className = '',
}: TwoColumnSectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            imageOnLeft ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text content */}
          <div className={imageOnLeft ? 'lg:col-start-2' : ''}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <div className="prose prose-lg text-gray-700">{content}</div>
          </div>

          {/* Image */}
          {imageSrc && (
            <div className={imageOnLeft ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
