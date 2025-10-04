/**
 * Hero Section Component
 *
 * Large attention-grabbing header section for the landing page
 * Features bold typography and optional form integration
 */

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  children?: React.ReactNode; // For embedding forms or other content
  showForm?: boolean;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  children,
  showForm = false,
}: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
        </>
      )}

      <Container className="relative z-10">
        {showForm ? (
          // Two-column layout with form
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${
                  backgroundImage ? 'text-white drop-shadow-lg' : 'text-gray-900'
                }`}
              >
                {title}
              </h1>

              {subtitle && (
                <p
                  className={`text-xl sm:text-2xl mb-8 leading-relaxed font-semibold ${
                    backgroundImage ? 'text-white drop-shadow-md' : 'text-gray-700'
                  }`}
                >
                  {subtitle}
                </p>
              )}

              {ctaText && ctaLink && (
                <Button href={ctaLink} variant="primary" size="lg">
                  {ctaText}
                </Button>
              )}
            </div>

            {/* Right: Form or children */}
            <div>{children}</div>
          </div>
        ) : (
          // Single column layout (original)
          <div className="max-w-4xl">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${
                backgroundImage ? 'text-white drop-shadow-lg' : 'text-gray-900'
              }`}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`text-xl sm:text-2xl mb-8 leading-relaxed font-semibold ${
                  backgroundImage ? 'text-white drop-shadow-md' : 'text-gray-700'
                }`}
              >
                {subtitle}
              </p>
            )}

            {ctaText && ctaLink && (
              <Button href={ctaLink} variant="primary" size="lg">
                {ctaText}
              </Button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
