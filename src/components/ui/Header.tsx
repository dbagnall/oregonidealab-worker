'use client';

/**
 * Header Component
 *
 * Sticky navigation header with smooth scroll links to page sections
 * Responsive with mobile menu toggle
 */

import { useState } from 'react';
import Image from 'next/image';
import Container from './Container';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Key Issues', href: '#key-issues' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'What We Do', href: '#what-we-do' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src="/images/logo_oil.png"
                alt="Oregon Idea Lab Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-900 hidden sm:inline">
                Oregon Idea Lab
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 hover:text-emerald-800 font-medium transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Donate Button - Desktop */}
            <a
              href="#donate"
              onClick={(e) => handleNavClick(e, '#donate')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {/* Hamburger Icon */}
            {!mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              // Close Icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 hover:text-emerald-800 hover:bg-gray-50 px-3 py-2 rounded-md font-medium transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              {/* Donate Button - Mobile */}
              <a
                href="#donate"
                onClick={(e) => handleNavClick(e, '#donate')}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-2 rounded-md font-semibold hover:from-orange-600 hover:to-red-700 transition-all text-center cursor-pointer"
              >
                Donate
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
