import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './components/ThemeToggle';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata = {
  title: 'Paul Yi – Cloud & AI Engineer',
  description: 'U.S. Army veteran building secure AI tools for healthcare and defense.',
  keywords: [
    'Paul Yi', 'AI Engineer', 'Cloud Engineer', 'DevOps', 'Veteran',
    'Healthcare AI', 'Next.js Portfolio', 'Terraform', 'AWS', 'Python', 'Resume', 'Projects'
  ],
  openGraph: {
    title: 'Paul Yi – Cloud & AI Engineer',
    description: 'U.S. Army veteran building secure AI tools for healthcare and defense.',
    url: 'https://paulyi.dev',
    siteName: 'Paul Yi Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-v2.png',
        width: 1200,
        height: 630,
        alt: 'Paul Yi – Cloud & AI Engineer',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yipaul_',
    title: 'Paul Yi – Cloud & AI Engineer',
    description: 'U.S. Army veteran building secure AI tools for healthcare and defense.',
    images: ['/og-v2.png']
  },
};

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white text-black dark:bg-black dark:text-white font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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

          {/* 👇 Push content down below navbar height */}
          <div className="pt-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
