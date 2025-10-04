/**
 * Content Block Component
 *
 * Flexible content section for text, lists, and mixed content
 * Supports clean typography and proper spacing
 */

import Container from '@/components/ui/Container';

interface ContentBlockProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export default function ContentBlock({
  title,
  children,
  className = '',
  centered = false,
}: ContentBlockProps) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container size="md">
        <div className={centered ? 'text-center' : ''}>
          {/* Section heading */}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              {title}
            </h2>
          )}

          {/* Content with proper typography */}
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:my-2">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
