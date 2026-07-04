'use client';

import { motion } from 'framer-motion';
import { Download, MessageCircle, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/Icons';
import AnimatedText from '@/components/common/AnimatedText';
import Image from 'next/image';

export default function Hero() {
  const designations = [
    'Senior Software Engineer',
    'Full Stack Developer',
    'React & Node.js Specialist',
    'Cloud Architecture Enthusiast',
  ];

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden'
    >
      {/* Animated Background */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/2 rounded-full blur-3xl' />
      </div>

      <div className='max-w-6xl mx-auto w-full'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='order-2 lg:order-1'
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='text-accent font-medium mb-3 text-sm tracking-wider uppercase'
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight'
            >
              Rezoan Shakil
              <br />
              <span className='text-accent'>Prince</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='text-xl sm:text-2xl mb-6'
            >
              <AnimatedText texts={designations} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='text-muted text-lg mb-8 max-w-lg leading-relaxed'
            >
              Building scalable, enterprise-grade applications with 5+ years of
              expertise in Node.js, React, and cloud-native architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='flex flex-wrap gap-4 mb-8'
            >
              <a
                href='/resume/REZOAN_SHAKIL_PRINCE_RESUME.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5'
              >
                <Download className='w-4 h-4' />
                Download Resume
              </a>
              <a
                href='#contact'
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-all duration-300 hover:-translate-y-0.5'
              >
                <MessageCircle className='w-4 h-4' />
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className='flex items-center gap-4'
            >
              <span className='text-muted text-sm'>Find me on</span>
              <div className='flex gap-3'>
                <a
                  href='https://github.com/PrinceCuet77'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 rounded-lg bg-surface hover:bg-surface-hover text-muted hover:text-accent transition-all duration-300 hover:-translate-y-1'
                  aria-label='GitHub'
                >
                  <GithubIcon className='w-5 h-5' />
                </a>
                <a
                  href='https://www.linkedin.com/in/rezoan-shakil-prince/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 rounded-lg bg-surface hover:bg-surface-hover text-muted hover:text-accent transition-all duration-300 hover:-translate-y-1'
                  aria-label='LinkedIn'
                >
                  <LinkedinIcon className='w-5 h-5' />
                </a>
                <a
                  href='https://wa.me/8801861164307'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 rounded-lg bg-surface hover:bg-surface-hover text-muted hover:text-accent transition-all duration-300 hover:-translate-y-1'
                  aria-label='WhatsApp'
                >
                  <WhatsAppIcon className='w-5 h-5' />
                </a>
                <a
                  href='mailto:prince.cuet.77@gmail.com'
                  className='p-2 rounded-lg bg-surface hover:bg-surface-hover text-muted hover:text-accent transition-all duration-300 hover:-translate-y-1'
                  aria-label='Email'
                >
                  <Mail className='w-5 h-5' />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className='order-1 lg:order-2 flex flex-col items-center gap-6'
          >
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
              {/* Decorative ring */}
              <div className='absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow' />
              <div className='absolute inset-3 rounded-full border border-accent/20' />
              {/* Image */}
              <div className='absolute inset-6 rounded-full bg-surface border-2 border-border overflow-hidden flex items-center justify-center'>
                <Image
                  src='/personal-photo/prince.jpeg'
                  alt='Rezoan Shakil Prince'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover'
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="flex flex-col items-center justify-center text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span class="text-xs">Prince's Photo</span>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Floating accent dots */}
              <div className='absolute top-0 right-8 w-3 h-3 bg-accent rounded-full animate-bounce' />
              <div className='absolute bottom-8 left-0 w-2 h-2 bg-accent/60 rounded-full animate-bounce delay-500' />
            </div>

            {/* Experience Badge — below the photo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className='bg-surface border border-accent/30 rounded-2xl px-6 py-3 shadow-lg shadow-accent/5 flex items-center gap-4'
            >
              <div className='w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0'>
                <span className='text-accent font-bold text-lg'>5+</span>
              </div>
              <div>
                <p className='text-foreground font-bold text-sm leading-tight'>
                  Years of Industry Experience
                </p>
                <p className='text-muted text-xs mt-0.5'>
                  Currently at{' '}
                  <span className='text-accent font-semibold'>BJIT Ltd</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
