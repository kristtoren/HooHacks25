'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-12 max-w-6xl mx-auto">
      {/* Left Text Block */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:w-1/2"
      >
        <div className="text-xl space-y-4 text-white">
  <h1 className="text-5xl font-bold text-blue-300">Hello there!</h1>

  <h2 className="text-gray-300">
    This project was created in March 2025 at HooHacks at the University of Virginia!
  </h2>

  <h3 className="text-gray-200">
    Our code is open-source and available on{" "}
    <Link
      href="https://github.com/kristtoren/HooHacks25"
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-300 underline hover:text-cyan-200"
    >
      GitHub
    </Link>
    .
  </h3>
</div>

      </motion.div>

      {/* Right Image Block */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="md:w-1/2 flex flex-col justify-center"
      >
        <figure>
        <Image
          src="/founders.png"
          alt="Creators of the website Austin, Mann, and Toren"
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-cover max-w-full h-auto"
        />
        </figure>
        <figcaption className="mt-2 text-sm text-gray-400">
      From left to right: Austin, Mann, and Toren
    </figcaption>
      </motion.div>
    </div>
  );
}
