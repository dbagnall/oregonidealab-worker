/**
 * Button Component
 *
 * Reusable button with multiple variants and sizes
 * Follows design system for consistent styling
 */

import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

const variantClasses = {
  primary: 'bg-emerald-800 text-white hover:bg-emerald-900 focus:ring-emerald-700',
  secondary: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-700',
  outline: 'border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white focus:ring-emerald-700',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  external = false,
}: ButtonProps) {
  const baseClasses = 'inline-block font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Link button
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
