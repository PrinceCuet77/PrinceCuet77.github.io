'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className='w-10 h-10' />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='relative w-10 h-10 rounded-full flex items-center justify-center bg-surface hover:bg-surface-hover transition-colors duration-300'
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {isDark ? (
          <Sun className='w-5 h-5 text-yellow-400' />
        ) : (
          <Moon className='w-5 h-5 text-slate-700' />
        )}
      </motion.div>
    </button>
  );
}
