'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import Section from '@/components/common/Section';
import { education } from '@/data/education';

export default function Education() {
  return (
    <Section
      id='education'
      title='Education'
      subtitle='My academic foundation in Computer Science & Engineering'
    >
      <div className='relative'>
        {/* Timeline Line */}
        <div className='absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border' />

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
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
              <GraduationCap className='w-3.5 h-3.5 text-accent' />
            </div>

            {/* Content Card */}
            <div
              className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}
            >
              <div className='p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group'>
                {/* Duration badge */}
                <div className='flex flex-wrap items-center gap-2 mb-3'>
                  <span className='px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full flex items-center gap-1.5'>
                    <Calendar className='w-3 h-3' />
                    {edu.duration}
                  </span>
                </div>

                <h3 className='text-lg font-bold text-foreground mb-1'>
                  {edu.degree}
                </h3>
                <p className='text-accent font-medium text-sm mb-3'>
                  {edu.institution}
                </p>

                <div className='flex items-center gap-2 text-muted text-sm mb-4'>
                  <MapPin className='w-3.5 h-3.5 shrink-0' />
                  <span>{edu.location}</span>
                </div>

                <div className='px-3 py-1.5 bg-accent/10 rounded-lg inline-block'>
                  <span className='text-accent font-semibold text-sm'>
                    {edu.result}
                  </span>
                </div>
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
