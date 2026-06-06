import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rohit Shenvi Diwadkar — Senior Data & Analytics Professional',
  description:
    'Senior Data & Marketing Analytics professional with 9 years of experience turning complex datasets into decisions that business leaders actually act on. Specializing in MMM, attribution, BI, and data storytelling.',
  openGraph: {
    title: 'Rohit Shenvi Diwadkar',
    description:
      'Analytics Lead & Advisor. I turn complex data into clear decisions — from prescriptive models to executive dashboards.',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Shenvi Diwadkar',
    description: 'Senior Data & Analytics Professional',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
