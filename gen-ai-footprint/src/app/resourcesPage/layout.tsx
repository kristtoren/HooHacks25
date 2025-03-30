// resourcesPage/layout.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="flex flex-col items-center justify-center p-8">
        {children}
        <div className="relative mt-8">
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 text-pink-300 font-medium bg-gray-800 rounded-md hover:bg-gray-700 transition"
          >
            Resources Menu
          </button>

          {open && (
            <div className="absolute mt-2 bg-gray-800 border border-pink-600 rounded-md shadow-lg w-56 z-10">
              <ul className="flex flex-col text-pink-300">
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-pink-800/30 transition"
                    onClick={() => setOpen(false)}
                  >
                    Glossary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/footprintPage"
                    className="block px-4 py-2 hover:bg-pink-800/30 transition"
                    onClick={() => setOpen(false)}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resourcesPage"
                    className="block px-4 py-2 hover:bg-pink-800/30 transition"
                    onClick={() => setOpen(false)}
                  >
                    Sources
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
