// Common types used across the application

export interface Post {
  slug: string;
  data: {
    title: string;
    date: string;
    excerpt?: string;
    coverImage?: string;
  };
}

export interface ChartData {
  [key: string]: string | number;
}

export interface ComparisonData extends ChartData {
  method: string;
  time: number;
  cost: number;
  research?: number;
  docs?: number;
}

export interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  details: string[];
  outcome: string;
}

export interface SearchablePost {
  title: string;
  slug: string;
}

// Theme types
export type Theme = 'light' | 'dark';

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// SEO and metadata types
export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title: string;
    description: string;
    image?: string;
    type?: string;
  };
  twitter?: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    image?: string;
  };
}

// Error types
export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
}
