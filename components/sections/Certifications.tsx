'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Section from '@/components/common/Section';
import { certifications } from '@/data/certifications';

export default function Certifications() {
  return (
    <Section
      id='certifications'
      title='Certifications'
      subtitle='Professional certifications that validate my expertise'
    >
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className='group'
          >
            <div className='h-full p-5 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 flex flex-col'>
              <div className='flex items-start gap-3 mb-4'>
                <div className='p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors shrink-0'>
                  <Award className='w-5 h-5 text-accent' />
                </div>
                <div className='flex-1 min-w-0'>
                  <h3 className='font-semibold text-foreground text-sm leading-tight mb-1'>
                    {cert.name}
                  </h3>
                  <p className='text-muted text-xs'>{cert.platform}</p>
                </div>
              </div>

              <div className='mt-auto pt-3 flex items-center justify-between border-t border-border/50'>
                {cert.date && (
                  <p className='text-xs text-muted/70'>Issued: {cert.date}</p>
                )}

                <a
                  href={cert.credentialLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors'
                >
                  <ExternalLink className='w-3 h-3' />
                  Show Credentials
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
