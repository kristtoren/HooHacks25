import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <header className="sticky top-0 w-full bg-gray-900 p-4 shadow-md z-10">
        <h1 className="text-4xl mb-4 text-center">
  <Link href="/" className="hover:underline text-white">
    yourAIfootprint.com
  </Link>
</h1>

        
         <div className="align-center">
            <nav className="flex justify-center gap-6 text-blue-400">
            <a href="#" className="hover:text-blue-300">Daily US Footprint</a>
            <a href="/footprintPage" className="hover:text-blue-300">Calculate your Footprint</a>
            <a href="#" className="hover:text-blue-300">Resources</a>
          </nav>
         </div>
          

        </header>
        {children}
      </body>
    </html>
  );
}
