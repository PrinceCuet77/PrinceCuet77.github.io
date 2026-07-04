'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Lightbulb,
  Target,
  Rocket,
  AlertTriangle,
  Camera,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/types';

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  return (
    <div className='min-h-screen bg-background'>
      {/* Back Navigation */}
      <div className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center'>
          <Link
            href='/#projects'
            className='inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Portfolio
          </Link>
        </div>
      </div>

      <main className='pt-24 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Project Image */}
            <div className='relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border mb-8'>
              {/* Fallback shown only when image fails */}
              <div className='absolute inset-0 flex items-center justify-center text-muted/30 z-0'>
                <div className='text-center'>
                  <div className='w-20 h-20 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center'>
                    <Rocket className='w-10 h-10 text-accent/40' />
                  </div>
                  <p className='text-sm'>Project Screenshot</p>
                </div>
              </div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover relative z-10'
                priority
              />
            </div>

            {/* Title & Tech */}
            <h1 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              {project.title}
            </h1>

            <div className='flex flex-wrap gap-2 mb-6'>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1.5 text-sm font-medium bg-accent/10 text-accent rounded-lg border border-accent/20'
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className='flex flex-wrap gap-3 mb-12'>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/25'
                >
                  <ExternalLink className='w-4 h-4' />
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-lg hover:border-accent/30 hover:bg-surface transition-all duration-300'
                >
                  <GithubIcon className='w-4 h-4' />
                  Source Code
                </a>
              )}
              {!project.liveLink && !project.githubLink && (
                <span className='inline-flex items-center gap-2 px-5 py-2.5 text-muted text-sm bg-surface border border-border rounded-lg'>
                  Production client project — source code is proprietary
                </span>
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='mb-12'
          >
            <h2 className='text-2xl font-bold text-foreground mb-4'>
              About This Project
            </h2>
            <p className='text-muted leading-relaxed text-lg'>
              {project.description}
            </p>
          </motion.section>

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className='mb-12'
            >
              <div className='flex items-center gap-3 mb-6'>
                <Camera className='w-6 h-6 text-accent' />
                <h2 className='text-2xl font-bold text-foreground'>
                  Screenshots
                </h2>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {project.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className='relative aspect-video rounded-xl overflow-hidden bg-surface border border-border hover:border-accent/30 transition-all duration-300 group'
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* What Makes It Unique */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-12 p-6 rounded-xl bg-accent/5 border border-accent/20'
          >
            <div className='flex items-center gap-3 mb-4'>
              <Lightbulb className='w-6 h-6 text-accent' />
              <h2 className='text-xl font-bold text-foreground'>
                What Makes It Unique
              </h2>
            </div>
            <p className='text-muted leading-relaxed'>{project.uniquePoints}</p>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mb-12'
          >
            <div className='flex items-center gap-3 mb-6'>
              <Target className='w-6 h-6 text-accent' />
              <h2 className='text-2xl font-bold text-foreground'>
                Key Features
              </h2>
            </div>
            <ul className='grid sm:grid-cols-2 gap-3'>
              {project.keyFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className='flex items-start gap-3 p-3 rounded-lg bg-surface border border-border'
                >
                  <span className='mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0' />
                  <span className='text-muted text-sm'>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mb-12'
          >
            <div className='flex items-center gap-3 mb-6'>
              <AlertTriangle className='w-6 h-6 text-amber-500' />
              <h2 className='text-2xl font-bold text-foreground'>
                Challenges Faced
              </h2>
            </div>
            <div className='space-y-3'>
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-4 rounded-lg bg-surface border border-border'
                >
                  <span className='mt-1 text-amber-500 font-bold text-sm'>
                    {index + 1}.
                  </span>
                  <span className='text-muted text-sm leading-relaxed'>
                    {challenge}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Future Improvements */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='mb-12'
          >
            <div className='flex items-center gap-3 mb-6'>
              <Rocket className='w-6 h-6 text-accent' />
              <h2 className='text-2xl font-bold text-foreground'>
                Future Improvements
              </h2>
            </div>
            <div className='space-y-3'>
              {project.futureImprovements.map((improvement, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-4 rounded-lg bg-surface border border-border'
                >
                  <span className='mt-1 text-accent font-bold text-sm'>→</span>
                  <span className='text-muted text-sm leading-relaxed'>
                    {improvement}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className='pt-8 border-t border-border'
          >
            <Link
              href='/#projects'
              className='inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium'
            >
              <ArrowLeft className='w-4 h-4' />
              Back to All Projects
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
