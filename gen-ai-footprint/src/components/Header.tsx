'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isResourcesActive = [
    '/resourcesPage',
    '/faqPage',
    '/glossaryPage',
  ].includes(pathname);

  // Open dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  // Delay closing dropdown
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // adjust delay here (ms)
  };

  return (
    <header className="sticky top-0 w-full bg-gray-900 p-4 shadow-md z-10">
      <h1 className="text-4xl mb-4 text-center font-extrabold font-mono animate-fade-in">
        <Link href="/" className="text-white">
          your
          <span className="text-blue-400">AI</span>
          footprint.com
        </Link>
      </h1>

      <nav className="flex justify-center gap-8 text-lg font-space font-bold pt-5">
        <Link href="/usDailyPage" className="text-blue-400 hover:text-cyan-200">
          Daily US Footprint
        </Link>
        <Link href="/footprintPage" className="text-blue-400 hover:text-cyan-200">
          Calculate your Footprint
        </Link>

        {/* Resources Dropdown */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`transition-colors ${
              isResourcesActive || dropdownOpen
                ? 'text-cyan-200'
                : 'text-blue-400 hover:text-cyan-200'
            }`}
          >
            Resources
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
              <ul className="flex flex-col text-sm text-blue-400">
                <li>
                  <Link
                    href="/glossaryPage"
                    className="block px-4 py-2 hover:bg-cyan-800/30"
                  >
                    Glossary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqPage"
                    className="block px-4 py-2 hover:bg-cyan-800/30"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sourcesPage"
                    className="block px-4 py-2 hover:bg-cyan-800/30"
                  >
                    Sources
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link href="/aboutPage" className="text-blue-400 hover:text-cyan-200">
          About
        </Link>
      </nav>
    </header>
  );
}
