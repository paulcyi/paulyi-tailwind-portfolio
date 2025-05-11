'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mb-6 inline-block"
        >
          {/* Ghost SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-24 h-24 mx-auto fill-gray-400 dark:fill-gray-600"
          >
            <path d="M32 2C17.6 2 6 13.6 6 28v30c0 1.1.9 2 2 2h2.8c1.1 0 2-.9 2-2s.9-2 2-2 2 .9 2 2 1 2 2 2 2-.9 2-2 .9-2 2-2 2 .9 2 2 1 2 2 2 2-.9 2-2 .9-2 2-2 2 .9 2 2 1 2 2 2 2-.9 2-2 .9-2 2-2 2 .9 2 2 1 2 2 2 2-.9 2-2V28C58 13.6 46.4 2 32 2zm-9 30a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm18 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        </motion.div>

        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Boo! This page doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 border rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Return Home
        </Link>
      </motion.div>
    </main>
  );
}
