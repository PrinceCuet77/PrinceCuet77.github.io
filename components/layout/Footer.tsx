'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='py-8 px-4 border-t border-border bg-surface/50'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <p className='text-muted text-sm'>
          © {new Date().getFullYear()} Rezoan Shakil Prince. All rights
          reserved.
        </p>

        <div className='flex items-center gap-4'>
          <a
            href='https://github.com/PrinceCuet77' // TODO: replace with actual GitHub link
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted hover:text-accent transition-colors'
            aria-label='GitHub'
          >
            <GithubIcon className='w-5 h-5' />
          </a>
          <a
            href='https://www.linkedin.com/in/rezoan-shakil-prince/' // TODO: replace with actual LinkedIn link
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted hover:text-accent transition-colors'
            aria-label='LinkedIn'
          >
            <LinkedinIcon className='w-5 h-5' />
          </a>
          <a
            href='mailto:prince.cuet.77@gmail.com'
            className='text-muted hover:text-accent transition-colors'
            aria-label='Email'
          >
            <Mail className='w-5 h-5' />
          </a>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors'
          aria-label='Back to top'
        >
          <ArrowUp className='w-5 h-5' />
        </motion.button>
      </div>
    </footer>
  );
}
