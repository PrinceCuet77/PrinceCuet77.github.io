'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className='max-w-6xl mx-auto'>
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className='mb-16 text-center'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              {title}
            </h2>
            {subtitle && (
              <p className='text-muted max-w-2xl mx-auto text-lg'>{subtitle}</p>
            )}
            <div className='mt-4 mx-auto w-20 h-1 bg-accent rounded-full' />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
