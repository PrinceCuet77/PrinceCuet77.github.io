'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Layers,
  Wrench,
} from 'lucide-react';
import Section from '@/components/common/Section';
import { skillCategories } from '@/data/skills';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Layers,
  Wrench,
};

export default function Skills() {
  return (
    <Section
      id='skills'
      title='Skills & Technologies'
      subtitle='The tools and technologies I use to bring ideas to life'
    >
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skillCategories.map((category, catIndex) => {
          const Icon = iconMap[category.icon] || Code2;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className='p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 group'
            >
              <div className='flex items-center gap-3 mb-5'>
                <div className='p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors'>
                  <Icon className='w-5 h-5 text-accent' />
                </div>
                <h3 className='font-semibold text-foreground'>
                  {category.category}
                </h3>
              </div>

              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className='flex justify-between mb-1.5'>
                      <span className='text-sm text-muted'>{skill.name}</span>
                      <span className='text-xs text-muted/70'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='h-2 bg-border rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className='h-full bg-gradient-to-r from-accent to-accent-hover rounded-full'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
