import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';
import NavBar from './components/NavBar';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata = {
  title: 'Paul Yi – Cloud & AI Engineer',
  description: 'U.S. Army veteran building secure AI tools for healthcare and defense.',
  keywords: [
    'Paul Yi', 'AI Engineer', 'Cloud Engineer', 'DevOps', 'Veteran',
    'Healthcare AI', 'Next.js Portfolio', 'Terraform', 'AWS', 'Python', 'Resume', 'Projects'
  ],
  metadataBase: new URL('https://paulyi.dev'),
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white text-black dark:bg-black dark:text-white font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <div className="pt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
