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

export const metadata: Metadata = {
  title: 'Rezoan Shakil Prince | Senior Software Engineer',
  description:
    'Full Stack Developer specializing in Node.js, React, Next.js, and cloud-native architectures. 4+ years of experience building scalable enterprise applications.',
  openGraph: {
    title: 'Rezoan Shakil Prince | Senior Software Engineer',
    description:
      'Full Stack Developer specializing in Node.js, React, Next.js, and cloud-native architectures.',
    type: 'website',
    locale: 'en_US',
  },
  keywords: [
    'Rezoan Shakil Prince',
    'Full Stack Developer',
    'Senior Software Engineer',
    'React',
    'Node.js',
    'Next.js',
    'TypeScript',
    'Bangladesh',
  ],
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
    >
      <body className='min-h-full flex flex-col bg-background text-foreground'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
