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

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rezoan Shakil Prince',
    alternateName: [
      'Prince',
      'Rezoan Prince',
      'Shakil Prince',
      'Prince CUET',
      'Prince BJIT',
      'Rezoan Shakil',
      'Prince Rezoan',
      'Prince Software Engineer',
      'Prince Developer',
      'PrinceCuet77',
      'rezoan-shakil-prince',
    ],
    url: SITE_URL,
    image: `${SITE_URL}/personal-photo/prince.jpeg`,
    jobTitle: 'Senior Software Engineer',
    description:
      'Senior Software Engineer at BJIT Ltd with 5+ years of experience building scalable full-stack enterprise applications using Node.js, NestJS, React.js, Next.js, JavaScript (ES6+), TypeScript, PostgreSQL, Redis, and AWS.',
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
    nationality: {
      '@type': 'Country',
      name: 'Bangladesh',
    },
    sameAs: [
      'https://github.com/PrinceCuet77',
      'https://www.linkedin.com/in/rezoan-shakil-prince/',
      'https://princecuet77.github.io/',
    ],
    knowsAbout: [
      'JavaScript (ES6+)',
      'Node.js',
      'React.js',
      'React',
      'Next.js',
      'TypeScript',
      'Express.js',
      'Express',
      'NestJS',
      'Nest.js',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'AWS',
      'Amazon Web Services',
      'Full Stack Development',
      'Full Stack Engineering',
      'Software Engineering',
      'Backend Development',
      'Frontend Development',
      'REST API',
      'GraphQL',
      'Docker',
      'Prisma ORM',
      'Tailwind CSS',
      'Redux',
      'Redux Toolkit',
      'Git',
      'CI/CD',
      'Microservices',
      'Cloud Architecture',
      'Web Development',
      'Enterprise Software',
      'Real Estate Software',
      'Healthcare Software',
      'AI Integration',
      'Azure OpenAI',
      'BullMQ',
      'Microsoft Dynamics 365',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'B.Sc. in Computer Science & Engineering',
        credentialCategory: 'degree',
        recognizedBy: {
          '@type': 'CollegeOrUniversity',
          name: 'Chittagong University of Engineering and Technology',
        },
      },
    ],
    seeks: {
      '@type': 'Demand',
      description:
        'Open to senior software engineering and technical leadership roles',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rezoan Shakil Prince — Portfolio',
    alternateName: [
      'Prince Portfolio',
      'Prince Developer Portfolio',
      'Rezoan Shakil Prince Portfolio',
    ],
    url: SITE_URL,
    description:
      'Portfolio of Rezoan Shakil Prince — Senior Software Engineer at BJIT Ltd specializing in Node.js, NestJS, React.js, Next.js, TypeScript, and cloud-native architectures.',
    author: {
      '@type': 'Person',
      name: 'Rezoan Shakil Prince',
    },
    inLanguage: 'en-US',
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rezoan Shakil Prince | Senior Software Engineer | BJIT Ltd',
    template: '%s | Rezoan Shakil Prince',
  },
  description:
    'Rezoan Shakil Prince — Senior Software Engineer at BJIT Ltd, Bangladesh. 5+ years building scalable full-stack enterprise applications with Node.js, NestJS, React.js, Next.js, JavaScript (ES6+), TypeScript, PostgreSQL, Redis, and AWS. CUET CSE graduate.',
  keywords: [
    // Primary name variations
    'Rezoan Shakil Prince',
    'Rezoan Prince',
    'Shakil Prince',
    'Prince Rezoan',
    'Prince Shakil',
    'Rezoan Shakil',
    'Prince',
    'PrinceCuet77',
    'princecuet77',
    'princecuet77 github',
    'princecuet77 github io',
    // Professional identity
    'Prince BJIT',
    'Prince CUET',
    'Prince Software Engineer',
    'Prince Developer',
    'Prince Full Stack Developer',
    'Prince Senior Software Engineer',
    'Rezoan Shakil Prince BJIT',
    'Rezoan Shakil Prince CUET',
    'Rezoan Shakil Prince Software Engineer',
    'Rezoan Shakil Prince Developer',
    'Rezoan Shakil Prince Portfolio',
    'Rezoan Shakil Prince LinkedIn',
    'Rezoan Shakil Prince GitHub',
    // Role-based searches
    'Senior Software Engineer',
    'Senior Software Engineer Bangladesh',
    'Senior Software Engineer Dhaka',
    'Senior Software Engineer BJIT',
    'Full Stack Developer',
    'Full Stack Engineer',
    'Full Stack Developer Bangladesh',
    'Full Stack Developer Dhaka',
    'Backend Engineer',
    'Backend Developer Bangladesh',
    'Frontend Developer Bangladesh',
    'Software Engineer Bangladesh',
    'Software Developer Bangladesh',
    'Software Engineer Dhaka',
    // Company searches
    'BJIT Ltd',
    'BJIT Group',
    'BJIT Engineer',
    'BJIT Developer',
    'BJIT Software Engineer',
    // University searches
    'CUET CSE',
    'CUET Computer Science',
    'CUET CSE Graduate',
    'Chittagong University of Engineering and Technology',
    'CUET Developer',
    'CUET Software Engineer',
    // Technology searches
    'Node.js Developer',
    'Node.js Developer Bangladesh',
    'React.js Developer',
    'React Developer Bangladesh',
    'Next.js Developer',
    'Next.js Developer Bangladesh',
    'TypeScript Developer',
    'NestJS Developer',
    'NestJS Developer Bangladesh',
    'Express.js Developer',
    'JavaScript Developer Bangladesh',
    'PostgreSQL Developer',
    'Redis Developer',
    'AWS Developer Bangladesh',
    'Full Stack Node.js React',
    'Node.js React Developer',
    'Node.js Next.js Developer',
    'NestJS React Developer',
    // Skill-based searches
    'Express.js',
    'NestJS',
    'REST API Developer',
    'Microservices Developer',
    'Cloud Architecture',
    'Enterprise Software Developer',
    'Real Estate Software Developer',
    'Healthcare Software Developer',
    'AI Integration Developer',
    'Prisma ORM Developer',
    'Redux Developer',
    'Tailwind CSS Developer',
    // Location-based
    'Bangladesh Developer',
    'Dhaka Software Engineer',
    'Bangladeshi Software Engineer',
    'Bangladeshi Developer',
    // Portfolio / generic
    'Portfolio',
    'Developer Portfolio',
    'Software Engineer Portfolio',
    'Full Stack Developer Portfolio',
    'Rezoan Shakil Prince Portfolio Website',
    // Resume
    'Rezoan Shakil Prince Resume',
    'Prince Resume',
    'Prince CV',
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
  verification: {
    google: '_x1laOV6_KVOses5y6xreNL4ydxuY-JfmBUKR2JJIsk',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Rezoan Shakil Prince — Portfolio',
    title: 'Rezoan Shakil Prince | Senior Software Engineer at BJIT Ltd',
    description:
      'Rezoan Shakil Prince — Senior Software Engineer at BJIT Ltd, Bangladesh. 5+ years building scalable full-stack enterprise applications with Node.js, NestJS, React.js, Next.js, TypeScript, PostgreSQL, Redis, and AWS. CUET CSE graduate.',
    firstName: 'Rezoan Shakil',
    lastName: 'Prince',
    username: 'rezoan-shakil-prince',
    images: [
      {
        url: '/personal-photo/prince.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rezoan Shakil Prince — Senior Software Engineer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rezoan Shakil Prince | Senior Software Engineer at BJIT Ltd',
    description:
      'Senior Software Engineer at BJIT Ltd, Bangladesh. Full-stack developer specializing in Node.js, NestJS, React.js, Next.js, TypeScript, PostgreSQL, Redis, and AWS.',
    creator: '@rezoanshakil',
    images: ['/personal-photo/prince.jpeg'],
  },
  category: 'technology',
  verification: {},
  other: {
    'google-site-verification': 'DL5N23dLO08p8sWCpDs2Jr6I00rmEHQLa1RQ7bLHgsY',
  },
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
        <link rel='sitemap' type='application/xml' href='/sitemap.xml' />
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
