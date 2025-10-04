/**
 * Features Grid Component
 *
 * Display features/benefits in a modern card-based grid layout
 * With illustration support from unDraw, Humaaans, Scribbbles
 */

import Container from '@/components/ui/Container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  illustration?: string; // Path to illustration
}

interface FeaturesGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function FeaturesGrid({
  title,
  subtitle,
  features,
  columns = 3,
  className = '',
}: FeaturesGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container>
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 lg:gap-8`}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-all hover:shadow-lg hover:border-emerald-800"
            >
              <CardHeader>
                {/* Illustration */}
                {feature.illustration && (
                  <div className="mb-4 relative h-48 w-full">
                    <Image
                      src={feature.illustration}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Icon */}
                {feature.icon && (
                  <div className="mb-4 text-emerald-800">
                    {feature.icon}
                  </div>
                )}

                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
