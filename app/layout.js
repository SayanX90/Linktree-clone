import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import HeroSection from "@/components/HeroSection";
//import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BitTree",
  description: "We have re define link shairing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        {children}
    
      </body>
    </html>
  );
}
