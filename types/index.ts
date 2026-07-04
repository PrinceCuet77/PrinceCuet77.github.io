export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  techStack: string[];
  uniquePoints: string;
  keyFeatures: string[];
  liveLink: string;
  githubLink: string;
  challenges: string[];
  futureImprovements: string[];
  screenshots?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  name: string;
  platform: string;
  credentialLink: string;
  credentialId: string;
  date?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  result: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
