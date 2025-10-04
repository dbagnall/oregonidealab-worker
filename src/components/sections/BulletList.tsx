/**
 * Bullet List Component
 *
 * Clean, styled list for presenting multiple points or issues
 * Optimized for readability and visual hierarchy with icon support
 */

import Container from '@/components/ui/Container';

interface BulletItem {
  title?: string;
  description: string;
  icon?: React.ReactNode;
}

interface BulletListProps {
  title?: string;
  intro?: string;
  items: BulletItem[];
  className?: string;
}

// Default icon mapping for common themes
const getIconForTitle = (title?: string): React.ReactNode => {
  if (!title) return null;

  const titleLower = title.toLowerCase();

  // Public Safety icon - Shield with alert
  if (titleLower.includes('safety') || titleLower.includes('security')) {
    return (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
      </svg>
    );
  }

  // Housing icon - House
  if (titleLower.includes('housing') || titleLower.includes('home')) {
    return (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    );
  }

  // Election Reform icon - Chart/Pie
  if (titleLower.includes('election') || titleLower.includes('voting') || titleLower.includes('reform')) {
    return (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>
    );
  }

  // Government Accountability icon - Briefcase
  if (titleLower.includes('government') || titleLower.includes('accountability')) {
    return (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    );
  }

  // Default icon - Checkmark circle
  return (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
};

export default function BulletList({
  title,
  intro,
  items,
  className = '',
}: BulletListProps) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container size="md">
        {/* Section title */}
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
        )}

        {/* Introduction text */}
        {intro && (
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{intro}</p>
        )}

        {/* Bullet list with circular icons */}
        <ul className="space-y-6">
          {items.map((item, index) => {
            const icon = item.icon || getIconForTitle(item.title);

            return (
              <li key={index} className="flex items-center gap-4">
                {/* Circular icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-lg p-3">
                  {icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {item.title && (
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      {item.title}
                    </h3>
                  )}
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
