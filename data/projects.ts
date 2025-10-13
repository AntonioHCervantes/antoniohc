import type { Project } from '@/lib/types/project';

export const projects: Project[] = [
  {
    title: 'Proyecto Alpha',
    description: 'Aplicación moderna para gestionar proyectos personales.',
    imageUrl: '/images/project-alpha.svg',
    url: '#',
    cta: 'Ver más',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Proyecto Beta',
    description: 'Dashboard interactivo con métricas en tiempo real.',
    imageUrl: '/images/project-beta.svg',
    url: '#',
    cta: 'Ver demo',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Proyecto Gamma',
    description: 'Plataforma de almacenamiento seguro desarrollada junto a Deddian Technology.',
    imageUrl: '/images/project-gamma.svg',
    url: '#',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
];
