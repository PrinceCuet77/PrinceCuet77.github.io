'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dots = [0, 1, 2];

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className='fixed inset-0 z-9999 flex flex-col items-center justify-center bg-background'
        >
          {/* Monogram ring */}
          <div className='relative flex items-center justify-center mb-8'>
            {/* Outer spinning arc */}
            <motion.svg
              className='absolute w-28 h-28 text-accent'
              viewBox='0 0 100 100'
              fill='none'
              animate={{ rotate: 360 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx='50'
                cy='50'
                r='44'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeDasharray='82 194'
                opacity='0.7'
              />
            </motion.svg>
            {/* Inner static ring */}
            <div className='w-20 h-20 rounded-full border border-border flex items-center justify-center bg-surface'>
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className='text-2xl font-bold text-accent tracking-tight select-none'
              >
                RSP
              </motion.span>
            </div>
          </div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className='text-foreground font-semibold text-base tracking-wide mb-1'
          >
            Rezoan Shakil Prince
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-muted text-xs tracking-widest uppercase mb-6'
          >
            Senior Software Engineer
          </motion.p>

          {/* Bouncing dots */}
          <div className='flex gap-2'>
            {dots.map((i) => (
              <motion.span
                key={i}
                className='w-2 h-2 rounded-full bg-accent'
                animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
