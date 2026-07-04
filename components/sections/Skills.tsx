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
  Globe,
  Sparkles,
} from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiRedis,
  SiRedux,
  SiGit,
  SiGithubactions,
  SiPostman,
  SiGithubcopilot,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import Section from '@/components/common/Section';
import { skillCategories } from '@/data/skills';

type IconComp = React.ComponentType<{
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}>;

const categoryIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Layers,
  Wrench,
};

interface SkillMeta {
  icon: IconComp;
  color?: string; // undefined → use currentColor via className
}

const skillMeta: Record<string, SkillMeta> = {
  'JavaScript (ES6+)': { icon: SiJavascript as IconComp, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript as IconComp, color: '#3178C6' },
  'Node.js': { icon: SiNodedotjs as IconComp, color: '#339933' },
  'Express.js': { icon: SiExpress as IconComp },
  NestJS: { icon: SiNestjs as IconComp, color: '#E0234E' },
  'React.js': { icon: SiReact as IconComp, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs as IconComp },
  HTML5: { icon: SiHtml5 as IconComp, color: '#E34F26' },
  CSS3: { icon: SiCss as IconComp, color: '#1572B6' },
  'Tailwind CSS': { icon: SiTailwindcss as IconComp, color: '#06B6D4' },
  PostgreSQL: { icon: SiPostgresql as IconComp, color: '#4169E1' },
  MySQL: { icon: SiMysql as IconComp, color: '#4479A1' },
  MongoDB: { icon: SiMongodb as IconComp, color: '#47A248' },
  'Prisma ORM': { icon: SiPrisma as IconComp },
  AWS: { icon: FaAws as IconComp, color: '#FF9900' },
  Docker: { icon: SiDocker as IconComp, color: '#2496ED' },
  Redis: { icon: SiRedis as IconComp, color: '#DC382D' },
  'Redux Toolkit': { icon: SiRedux as IconComp, color: '#764ABC' },
  Jotai: { icon: Layers as IconComp },
  Git: { icon: SiGit as IconComp, color: '#F05032' },
  'GitHub Actions': { icon: SiGithubactions as IconComp, color: '#2088FF' },
  Postman: { icon: SiPostman as IconComp, color: '#FF6C37' },
  'GitHub Copilot': { icon: SiGithubcopilot as IconComp },
  'REST APIs': { icon: Globe as IconComp },
  ChatGPT: { icon: Sparkles as IconComp, color: '#10A37F' },
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
          const CatIcon = categoryIconMap[category.icon] || Code2;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className='p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300'
            >
              {/* Card header */}
              <div className='flex items-center gap-3 mb-5 pb-4 border-b border-border'>
                <div className='p-2 rounded-lg bg-accent/10'>
                  <CatIcon className='w-4 h-4 text-accent' />
                </div>
                <h3 className='font-semibold text-foreground text-sm'>
                  {category.category}
                </h3>
                <span className='ml-auto text-[11px] text-muted/60 tabular-nums'>
                  {category.skills.length} skills
                </span>
              </div>

              {/* Tech icon chips */}
              <div className='grid grid-cols-3 gap-2.5'>
                {category.skills.map((skill, skillIndex) => {
                  const meta = skillMeta[skill.name];
                  const SkillIcon = meta?.icon ?? Code2;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.75 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.06 + skillIndex * 0.04,
                      }}
                      className='group flex flex-col items-center gap-2.5 px-2 pt-4 pb-3 rounded-xl bg-surface-hover/50 border border-border/60 hover:border-accent/40 hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/8 transition-all duration-200 cursor-default'
                    >
                      <SkillIcon
                        size={36}
                        style={meta?.color ? { color: meta.color } : undefined}
                        className={
                          !meta?.color
                            ? 'text-muted group-hover:text-foreground transition-colors duration-200'
                            : undefined
                        }
                      />
                      {/* Proficiency bar */}
                      {/* <div className='w-full h-0.5 bg-border rounded-full overflow-hidden'>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: catIndex * 0.06 + skillIndex * 0.04 + 0.25,
                            ease: 'easeOut',
                          }}
                          className='h-full bg-accent/70 rounded-full'
                        />
                      </div> */}
                      <span className='text-[10px] font-medium text-center text-muted/80 group-hover:text-foreground transition-colors duration-200 leading-tight'>
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
