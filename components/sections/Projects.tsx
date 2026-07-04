'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/common/Section';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <Section
      id='projects'
      title='Featured Projects'
      subtitle='A selection of projects that showcase my skills and approach to problem-solving'
    >
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className='group'
          >
            <div className='h-full rounded-xl bg-surface border border-border overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1'>
              {/* Project Image */}
              <div className='relative aspect-video overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors'>
                  {project.title}
                </h3>
                <p className='text-muted text-sm mb-4 line-clamp-2'>
                  {project.shortDescription}
                </p>

                {/* Tech Stack Tags */}
                <div className='flex flex-wrap gap-2 mb-5'>
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className='px-2.5 py-1 text-xs font-medium bg-accent/8 text-accent rounded-md border border-accent/15'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className='px-2.5 py-1 text-xs font-medium text-muted rounded-md border border-border'>
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <Link
                  href={`/projects/${project.slug}`}
                  className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-all duration-300'
                >
                  View Details
                  <ExternalLink className='w-3.5 h-3.5' />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
