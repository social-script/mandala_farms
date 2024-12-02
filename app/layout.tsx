import type { Metadata } from "next";
import { Playfair_Display, Poppins } from 'next/font/google';
import "./globals.css";

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
  title: "Mandala Farms | Luxury Eco Farm Stay",
  description: "Experience luxury eco-friendly farm stay in Araku Valley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
