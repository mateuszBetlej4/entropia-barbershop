import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Entropia Barbershop - Profesjonalny Barber Shop w Krośnie",
  description: "Najwyższej jakości usługi barberskie w Krośnie. Strzyżenie, trymowanie brody, stylizacja i więcej. Zarezerwuj swoją wizytę już dziś!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
} 