import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your AI Footprint",
  description: "Track how much energy and water your GEN AI usage takes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-900">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <header className="sticky top-0 w-full bg-gray-900 p-4 shadow-md z-10">
        <h1 
          className="text-4xl mb-4 text-center font-extrabold font-mono animate-fade-in">
          <Link href="/" className="text-white">
            your<span className="text-blue-400">AI</span>footprint.com
          </Link>
        </h1>

        
         <div className="align-center">
            <nav className="flex justify-center space-x-[20%] text-blue-400 text-lg font-medium">
            <a href="#" className="hover:text-cyan-200">Daily US Footprint</a>
            <a href="/footprintPage" className="hover:text-cyan-200">Calculate your Footprint</a>
            <a href="#" className="hover:text-cyan-200">Resources</a>
          </nav>
         </div>
          

        </header>
        {children}
      </body>
    </html>
  );
}
