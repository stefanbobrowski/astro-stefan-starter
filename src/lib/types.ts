/**
 * Common type definitions for the Astro starter project
 */

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  description: string;
  author: string;
  locale: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export type ButtonVariant = 'default' | 'primary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'default' | 'elevated' | 'bordered';
export type CardPadding = 'sm' | 'md' | 'lg';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface BlogPost {
  title: string;
  description: string;
  publishedDate: Date;
  updatedDate?: Date;
  author: string;
  slug: string;
  tags?: string[];
  image?: string;
  draft?: boolean;
}
