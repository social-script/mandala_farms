import type { Metadata } from "next";
import { Playfair_Display, Poppins } from 'next/font/google';
import "./globals.css";
import JsonLd from './components/JsonLd';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mandalafarmsarakuvalley.com'),
  title: {
    default: "Mandala Farms | Luxury Eco Farm Stay in Araku Valley",
    template: "%s | Mandala Farms"
  },
  description: "Experience sustainable luxury at Mandala Farms, an eco-friendly farm stay in Araku Valley featuring organic farming, luxury cottages, and farm-to-table dining.",
  keywords: ["eco farm stay", "luxury accommodation", "Araku Valley", "sustainable tourism", "organic farming", "farm to table", "eco resort india"],
  authors: [{ name: "Mandala Farms" }],
  creator: "Mandala Farms",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mandalafarmsarakuvalley.com',
    siteName: 'Mandala Farms',
    title: 'Mandala Farms | Luxury Eco Farm Stay in Araku Valley',
    description: 'Experience sustainable luxury at Mandala Farms, an eco-friendly farm stay in Araku Valley',
    images: [
      {
        url: '/hero_img.jpg',
        width: 1200,
        height: 630,
        alt: 'Mandala Farms Luxury Eco Resort',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandala Farms | Luxury Eco Farm Stay',
    description: 'Experience sustainable luxury at Mandala Farms, Araku Valley',
    images: ['/hero_img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://mandalafarmsarakuvalley.com',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
