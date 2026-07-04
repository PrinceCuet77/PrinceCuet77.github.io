import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ThemeProvider from '@/components/providers/ThemeProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://princecuet77.github.io/';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rezoan Shakil Prince',
  alternateName: ['Prince', 'Rezoan Prince', 'Shakil Prince'],
  url: SITE_URL,
  image: `${SITE_URL}/personal-photo/photo.jpg`,
  jobTitle: 'Senior Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'BJIT Ltd',
    url: 'https://bjitgroup.com',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Chittagong University of Engineering and Technology',
    alternateName: 'CUET',
    url: 'https://www.cuet.ac.bd',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  sameAs: [
    'https://github.com/PrinceCuet77',
    'https://www.linkedin.com/in/rezoan-shakil-prince/',
  ],
  knowsAbout: [
    'JavaScript (ES6+)',
    'Node.js',
    'React.js',
    'Next.js',
    'TypeScript',
    'Express.js',
    'NestJS',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'AWS',
    'Full Stack Development',
    'Software Engineering',
  ],
  description:
    'Senior Software Engineer at BJIT Ltd with 5+ years of experience building scalable full-stack enterprise applications using Node.js, NestJS, React.js, Next.js, JavaScript (ES6+) and TypeScript.',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rezoan Shakil Prince | Senior Software Engineer',
    template: '%s | Rezoan Shakil Prince',
  },
  description:
    'Rezoan Shakil Prince — Senior Software Engineer at BJIT Ltd. 5+ years building full-stack enterprise applications with Node.js, NestJS, React.js, Next.js, JavaScript (ES6+), TypeScript, and cloud-native architectures (AWS).',
  keywords: [
    'Rezoan Shakil Prince',
    'Rezoan Prince',
    'Shakil Prince',
    'Prince BJIT',
    'Prince CUET',
    'Senior Software Engineer',
    'Full Stack Developer',
    'Full Stack Engineer',
    'BJIT Ltd',
    'BJIT Group',
    'CUET CSE',
    'Node.js Developer',
    'React.js Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Express.js',
    'NestJS',
    'NestJS Developer',
    'Software Engineer Bangladesh',
    'Dhaka Software Engineer',
    'Bangladesh Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Rezoan Shakil Prince', url: SITE_URL }],
  creator: 'Rezoan Shakil Prince',
  publisher: 'Rezoan Shakil Prince',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Rezoan Shakil Prince — Portfolio',
    title: 'Rezoan Shakil Prince | Senior Software Engineer',
    description:
      'Rezoan Shakil Prince — Senior Software Engineer at BJIT Ltd with 5+ years of experience building scalable full-stack enterprise applications using Node.js, NestJS, React.js, Next.js, JavaScript (ES6+) and TypeScript.',
    firstName: 'Rezoan Shakil',
    lastName: 'Prince',
    username: 'rezoan-shakil-prince',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rezoan Shakil Prince | Senior Software Engineer',
    description:
      'Senior Software Engineer at BJIT Ltd. Full-stack developer specializing in Node.js, NestJS, React.js, Next.js, JavaScript (ES6+) and TypeScript.',
    creator: '@rezoanshakil',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior='smooth'
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className='min-h-full flex flex-col bg-background text-foreground'
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
