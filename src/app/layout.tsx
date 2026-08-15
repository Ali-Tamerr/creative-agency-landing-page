import type { Metadata } from 'next';
import { Syne, Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'STUDIO MONOLITH // RADICAL DIGITAL CREATIVE AGENCY',
  description:
    'Award-winning single-screen portfolio for Studio Monolith. Architects of high-impact spatial 3D, radical brand systems, and brutalist web monoliths.',
  keywords: [
    'Creative Agency',
    'Brutalist Web Design',
    'Next.js Portfolio',
    'Spatial 3D',
    'WebGL Experience',
    'Generative Branding',
    'Horizontal Scroll Showcase',
  ],
  authors: [{ name: 'Studio Monolith' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#080808',
  openGraph: {
    title: 'STUDIO MONOLITH // RADICAL DIGITAL CREATIVE AGENCY',
    description: 'Autonomous spatial 3D, generative identities, and brutalist digital monoliths.',
    type: 'website',
    url: 'https://studiomonolith.digital',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Studio Monolith Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STUDIO MONOLITH // RADICAL CREATIVE AGENCY',
    description: 'Single-screen brutalist portfolio for modern digital monoliths.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${spaceMono.variable} font-sans bg-brutal-black text-brutal-white antialiased min-h-screen relative selection:bg-brutal-lime selection:text-black`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
