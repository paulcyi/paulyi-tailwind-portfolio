'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleResumeClick = () => {
    console.log('Résumé clicked'); // Swap this with Plausible/Amplitude/GA event if needed
  };

  return (
    <main className="min-h-screen px-6 py-10 md:px-12">
      {mounted && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center rounded border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={resolvedTheme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-800" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <header className="pt-10 mb-12">
          <h1 className="text-4xl font-bold">Paul Yi</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
            Veteran • AI/ML Engineer in Training • DevOps Practitioner
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400 mt-1">
            Building secure tools for healthcare and defense
          </p>
        </header>

        <nav className="flex gap-6 text-sm text-blue-600 mt-2">
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/projects" className="hover:underline">Projects</a>
        </nav>

        <motion.section
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Current Projects</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">CheckMyMeds</h3>
            <p className="text-gray-800 dark:text-gray-200">
              An AI-powered medication interaction and adherence assistant.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              <strong>Stack:</strong> Python • NLP • Drug API Integration
            </p>
            <a
              href="https://github.com/paulcyi/drug-interaction-checker"
              className="text-blue-600 hover:underline text-sm mt-1 inline-block"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </motion.section>

        <motion.section
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Mission</h2>
          <p className="text-gray-800 dark:text-gray-200 italic">
            I’m building a real, practical skill set in AI/ML and cloud engineering—
            starting from scratch and putting in the work. This site tracks what I’ve built, what I’ve learned, and where I’m going.
          </p>
        </motion.section>

        <motion.section
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <ul className="text-gray-800 dark:text-gray-200 space-y-1">
            <li>
              LinkedIn: <a href="https://linkedin.com/in/paulcyi" className="text-blue-600 hover:underline">paulcyi</a>
            </li>
            <li>
              Email: <a href="mailto:hi@paulyi.dev" className="text-blue-600 hover:underline">hi@paulyi.dev</a>
            </li>
          </ul>
          <div className="mt-4">
            <a
              href="/paulyi-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="inline-block px-4 py-2 border rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Résumé (PDF)
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
