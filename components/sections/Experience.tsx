'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Section from '@/components/common/Section';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <Section
      id='experience'
      title='Professional Experience'
      subtitle='My career journey building enterprise-grade solutions'
    >
      <div className='relative'>
        {/* Timeline Line */}
        <div className='absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border' />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className='absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center z-10'>
              <Briefcase className='w-3.5 h-3.5 text-accent' />
            </div>

            {/* Content Card */}
            <div
              className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}
            >
              <div className='p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5'>
                <div className='flex flex-wrap items-center gap-2 mb-3'>
                  <span className='px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full'>
                    {exp.duration}
                  </span>
                </div>
                <h3 className='text-xl font-bold text-foreground mb-1'>
                  {exp.role}
                </h3>
                <p className='text-accent font-medium mb-4'>
                  {exp.company}, {exp.location}
                </p>
                <ul className='space-y-3'>
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + hIndex * 0.1 }}
                      className='flex items-start gap-3 text-muted text-sm leading-relaxed'
                    >
                      <span className='mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0' />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Spacer for opposite side */}
            <div className='hidden md:block md:w-[calc(50%-2rem)]' />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
