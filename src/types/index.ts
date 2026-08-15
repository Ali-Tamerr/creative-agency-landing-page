export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  year: string;
  category: 'Spatial 3D' | 'Generative Brand' | 'Experience UI' | 'E-Commerce' | 'Digital Artifact';
  description: string;
  longDescription: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  stack: string[];
  awards: string[];
  heroImage: string;
  secondaryImage: string;
  accentColor: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  code: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  startingBudget: string;
  tags: string[];
  badge: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
  metricLabel: string;
  tag: string;
}
