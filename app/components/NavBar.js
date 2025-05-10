'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative inline-block text-sm transition-colors duration-200 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''
        }`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute left-0 bottom-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'
          }`}
      />
    </Link>
  );
}

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="space-x-6 text-sm font-medium group">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
