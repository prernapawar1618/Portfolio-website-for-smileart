import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  metadataBase: new URL('https://smileartphotography.in'),
  title: {
    default: BRAND.metaTitle,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.metaDescription,
  keywords: [
    'Smile Art Photography',
    'Harshal Mahajan',
    'Wedding Photography Burhanpur',
    'Pre-wedding photography',
    'Indian wedding photographer',
    'Bridal portraiture',
    'Cinematic wedding films',
    'Madhya Pradesh wedding photographer',
  ],
  authors: [{ name: 'Harshal Mahajan' }],
  creator: 'Harshal Mahajan',
  publisher: 'Smile Art Photography',
  openGraph: {
    title: BRAND.metaTitle,
    description: BRAND.metaDescription,
    url: 'https://smileartphotography.in',
    siteName: BRAND.name,
    images: [
      {
        url: '/images/smileart/hero_wedding_marigold.jpg',
        width: 1200,
        height: 630,
        alt: 'Smile Art Photography by Harshal Mahajan',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.metaTitle,
    description: BRAND.metaDescription,
    images: ['/images/smileart/hero_wedding_marigold.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-charcoal text-ivory-100 flex flex-col min-h-screen selection:bg-gold selection:text-charcoal-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
