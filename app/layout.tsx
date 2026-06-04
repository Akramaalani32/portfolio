import type { Metadata } from 'next';
import { Syne, Space_Mono, Outfit } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio — Full-Stack Developer',
  description: 'Développeur Full-Stack React · Node.js · TypeScript basé au Bénin.',
  keywords: ['full-stack', 'developer', 'react', 'nodejs', 'typescript', 'benin', 'africa'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='fr'
      className={`${syne.variable} ${spaceMono.variable} ${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
