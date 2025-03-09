import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5E1A64",
};

export const metadata: Metadata = {
  title: "Entropia Barbershop - Profesjonalny Barber w Krośnie",
  description: "Odkryj sztukę barbering w Entropia Barbershop w Krośnie. Oferujemy profesjonalne strzyżenia, stylizacje brody i wiele więcej.",
  icons: {
    icon: [
      {
        url: '/images/entropia-barbershop-logo.jpg',
        href: '/images/entropia-barbershop-logo.jpg',
      },
    ],
    apple: {
      url: '/images/entropia-barbershop-logo.jpg',
      href: '/images/entropia-barbershop-logo.jpg',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://entropiabarbershop.pl',
    title: 'Entropia Barbershop - Profesjonalny Barber w Krośnie',
    description: 'Odkryj sztukę barbering w Entropia Barbershop w Krośnie. Oferujemy profesjonalne strzyżenia, stylizacje brody i wiele więcej.',
    siteName: 'Entropia Barbershop',
    images: [
      {
        url: 'https://entropiabarbershop.pl/images/barbershop-interior.jpg',
        width: 1200,
        height: 630,
        alt: 'Entropia Barbershop - Profesjonalny salon barberski w Krośnie',
      },
      {
        url: 'https://entropiabarbershop.pl/images/entropia-barbershop-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Entropia Barbershop Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entropia Barbershop - Profesjonalny Barber w Krośnie',
    description: 'Odkryj sztukę barbering w Entropia Barbershop w Krośnie. Oferujemy profesjonalne strzyżenia, stylizacje brody i wiele więcej.',
    images: ['https://entropiabarbershop.pl/images/barbershop-interior.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}