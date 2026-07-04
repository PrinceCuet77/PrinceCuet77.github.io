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
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className='relative p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group'
          >
            {/* Top Accent */}
            <div className='absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors'>
                <GraduationCap className='w-6 h-6 text-accent' />
              </div>
              <div className='flex-1'>
                <h3 className='font-bold text-foreground text-lg mb-1'>
                  {edu.degree}
                </h3>
                <p className='text-accent font-medium text-sm mb-3'>
                  {edu.institution}
                </p>
                <div className='space-y-2'>
                  <div className='flex items-center gap-2 text-muted text-sm'>
                    <MapPin className='w-3.5 h-3.5' />
                    <span>{edu.location}</span>
                  </div>
                  <div className='flex items-center gap-2 text-muted text-sm'>
                    <Calendar className='w-3.5 h-3.5' />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                <div className='mt-4 px-3 py-1.5 bg-accent/10 rounded-lg inline-block'>
                  <span className='text-accent font-semibold text-sm'>
                    {edu.result}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
