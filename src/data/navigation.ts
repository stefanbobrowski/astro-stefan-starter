import type { NavigationLink } from '@lib/types';

/**
 * Main navigation links
 */
export const navLinks: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Components', href: '/components' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Footer navigation links
 */
export const footerLinks = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Components', href: '/components' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
