import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  // {
  //   category: 'Programming Languages',
  //   icon: 'Code2',
  //   skills: [
  //     { name: 'TypeScript', level: 75 },
  //     { name: 'JavaScript (ES6+)', level: 85 },
  //   ],
  // },
  {
    category: 'Backend & APIs',
    icon: 'Server',
    skills: [
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'NestJS', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'Next.js', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },

  {
    category: 'Database & ORM',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Prisma ORM', level: 80 },
    ],
  },
  {
    category: 'Architecture & Cloud',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', level: 65 },
      { name: 'Docker', level: 60 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    category: 'State Management',
    icon: 'Layers',
    skills: [
      { name: 'Redux Toolkit', level: 75 },
      { name: 'Jotai', level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub Actions', level: 60 },
      { name: 'Postman', level: 90 },
      { name: 'GitHub Copilot', level: 85 },
      { name: 'ChatGPT', level: 90 },
    ],
  },
];
