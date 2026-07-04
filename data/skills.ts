import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript (ES6+)', level: 95 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 94 },
      { name: 'Next.js', level: 88 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    category: 'Backend & APIs',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 93 },
      { name: 'Express.js', level: 92 },
      { name: 'NestJS', level: 78 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    category: 'Database & ORM',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Prisma ORM', level: 90 },
    ],
  },
  {
    category: 'Architecture & Cloud',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', level: 82 },
      { name: 'Docker', level: 78 },
      { name: 'Redis', level: 83 },
    ],
  },
  {
    category: 'State Management',
    icon: 'Layers',
    skills: [
      { name: 'Redux Toolkit', level: 88 },
      { name: 'Jotai', level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 93 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Postman', level: 90 },
      { name: 'GitHub Copilot', level: 85 },
      { name: 'ChatGPT', level: 88 },
    ],
  },
];
