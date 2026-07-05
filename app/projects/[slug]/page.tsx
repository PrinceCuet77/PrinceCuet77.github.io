import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectDetailClient from './ProjectDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Rezoan Shakil Prince`,
    description: `${project.shortDescription} — Built by Rezoan Shakil Prince, Senior Software Engineer at BJIT Ltd. Technologies: ${project.techStack.join(', ')}.`,
    keywords: [
      project.title,
      'Rezoan Shakil Prince',
      'Prince BJIT',
      'Prince CUET',
      ...project.techStack,
    ],
    authors: [{ name: 'Rezoan Shakil Prince' }],
    openGraph: {
      title: `${project.title} | Rezoan Shakil Prince`,
      description: project.shortDescription,
      type: 'article',
      images: project.image ? [project.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Rezoan Shakil Prince`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
