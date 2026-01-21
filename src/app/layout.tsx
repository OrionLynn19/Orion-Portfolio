
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import Holder from "../components/Holder";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat ( {
  variable : "--font-mont", 
  subsets: ["latin"], 
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont pt-20  text-dark  w-full min-h-screen bg-gradient-to-tr from-orange-600 via-orange-400 to-light `}
      >
        <Navbar /> 
        {children} 
        <Footer />
      </body>
    </html>
  );
}
