import { Service, Testimonial } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'spatial-3d-web',
    code: 'SRV-01',
    title: 'SPATIAL 3D & WEBGL',
    headline: 'Immersive Real-Time Visual Architecture',
    description:
      'We craft high-performance Three.js, WebGL shaders, and 3D product configurators that run fluidly at 60–120 FPS across mobile and desktop devices without draining battery.',
    deliverables: [
      'Custom GLSL Shaders & Particles',
      '3D Model Optimization & Draco Baking',
      'Interactive Product Staging',
      'Spatial Sound & Audio Nodes',
      'Physics Simulations (Cannon/Rapier)',
    ],
    timeline: '4 – 8 Weeks',
    startingBudget: '$28,000',
    tags: ['WebGL', 'GLSL', 'Three.js', 'Blender', 'Real-Time 3D'],
    badge: 'HIGH DEMAND',
  },
  {
    id: 'generative-brand-identity',
    code: 'SRV-02',
    title: 'RADICAL BRAND SYSTEMS',
    headline: 'Uncompromising Visual Identities & Typography',
    description:
      'Brutal, mathematical, and bespoke design systems. From custom variable typefaces to dynamic algorithmic guidelines that adapt seamlessly across print, physical spaces, and code.',
    deliverables: [
      'Custom Variable Typography & Glyphs',
      'Design Token Architecture & Specs',
      'Brutalist Editorial Guidelines',
      'Motion Choreography & Transitions',
      'Physical Packaging & Industrial Collateral',
    ],
    timeline: '6 – 10 Weeks',
    startingBudget: '$35,000',
    tags: ['Brand Identity', 'Custom Typography', 'Design Systems', 'Packaging'],
    badge: 'CORE PRACTICE',
  },
  {
    id: 'flagship-engineering',
    code: 'SRV-03',
    title: 'FLAGSHIP WEB EXPERIENCES',
    headline: 'Next.js 15 Full-Stack Monoliths with Zero Compromise',
    description:
      'Ultra-fast, micro-animated web applications engineered with Next.js App Router, Tailwind CSS, and headless commerce. Built to win Awwwards and drive multi-million dollar revenue.',
    deliverables: [
      'Next.js 15 Full-Stack Architecture',
      'Framer Motion Micro-Interactions',
      'Headless CMS & Commerce Integration',
      'Global Edge CDN Performance',
      '100/100 Core Web Vitals Guaranteed',
    ],
    timeline: '4 – 12 Weeks',
    startingBudget: '$42,000',
    tags: ['Next.js', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Headless CMS'],
    badge: 'AWARD WINNING',
  },
  {
    id: 'creative-direction-r-and-d',
    code: 'SRV-04',
    title: 'CREATIVE DIRECTION & R&D',
    headline: 'Future-Proof Speculative Prototypes & Digital Art',
    description:
      'We partner with ambitious founders, cultural institutions, and tech pioneers to prototype frontier interfaces, AI-driven installations, and digital art artifacts before competitors even conceive them.',
    deliverables: [
      'Speculative Tech Prototypes',
      'Interactive Exhibition Staging',
      'Generative AI Pipeline Integration',
      'Keynote & Investor Experience Decks',
      'Hardware / Web Telemetry Interfaces',
    ],
    timeline: '2 – 6 Weeks',
    startingBudget: '$22,000',
    tags: ['R&D', 'Creative Direction', 'Hardware HUD', 'AI Generative', 'Exhibitions'],
    badge: 'EXPLORATORY',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote:
      'STUDIO MONOLITH didn’t just redesign our flagship platform—they rewrote the rules of our industry. Our launch drove $4.8M in 48 hours and took Site of the Month.',
    author: 'ALEXANDER ROSTOV',
    role: 'CHIEF DESIGN OFFICER',
    company: 'HYPEROBJECT LABS',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    metric: '+$4.8M',
    metricLabel: '48H Launch Revenue',
    tag: 'SPATIAL 3D',
  },
  {
    id: 't-2',
    quote:
      'Their brutalist aesthetic combined with obsessive sub-millisecond technical execution makes them the single most dangerous digital agency on earth.',
    author: 'MARCUS VANCE',
    role: 'VP OF DIGITAL PRODUCT',
    company: 'OBERHEIM AUDIO SYSTEMS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    metric: '< 1.2ms',
    metricLabel: 'Hardware Telemetry Jitter',
    tag: 'DIGITAL ARTIFACT',
  },
  {
    id: 't-3',
    quote:
      'Unforgiving typography, razor-sharp outlines, and 100/100 performance scores. They completely transformed our brand from a boutique into an absolute monolith.',
    author: 'STEFAN CHEN',
    role: 'FOUNDER & CREATIVE DIRECTOR',
    company: 'NERO COUTURE',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    metric: '+310%',
    metricLabel: 'E-Commerce Conversion Surge',
    tag: 'E-COMMERCE MONOLITH',
  },
];

export const STATS = [
  { value: '48+', label: 'GLOBAL AWARDS & HONORS', note: 'Awwwards, FWA, Tokyo TDC, Red Dot' },
  { value: '0.14s', label: 'AVERAGE TIME TO INTERACTIVE', note: 'Exceeding 99.9% of modern web apps' },
  { value: '$180M+', label: 'CLIENT REVENUE UNLOCKED', note: 'Across 34 international launches' },
  { value: '100%', label: 'IN-HOUSE CRAFT & CODE', note: 'Zero outsourcing, pure engineering' },
];

export const CLIENT_ROLL = [
  'NIKE LABS',
  'BALENCIAGA DIGITAL',
  'TEENAGE ENGINEERING',
  'OBERHEIM AUDIO',
  'HYPEROBJECT',
  'MONOTYPE',
  'ARCHIVUM 404',
  'VECTOR ROBOTICS',
  'SOMETHING SPECIAL STUDIOS',
  'NERO COUTURE',
];
