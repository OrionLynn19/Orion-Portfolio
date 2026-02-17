'use client' ; 
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Inter, Space_Grotesk } from "next/font/google";
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

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${montserrat.variable} pt-20 text-dark w-full min-h-screen  bg-gray-400 `}
      >
       
        <Navbar /> 
        {children} 
        <Footer />
      </body>
    </html>
  );
}
