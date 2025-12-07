import type { Project } from '@/lib/types/project';

export const projects: Project[] = [
  {
    title: 'Proyecto Alpha',
    description: 'Aplicación moderna para gestionar proyectos personales.',
    imageUrl: '/images/project-alpha.svg',
    url: '#',
    cta: 'Ver más',
    focus: 'Productividad inteligente',
    status: 'En producción',
    result: '+38% eficiencia del equipo',
    duration: '6 semanas',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Proyecto Beta',
    description: 'Dashboard interactivo con métricas en tiempo real.',
    imageUrl: '/images/project-beta.svg',
    url: '#',
    cta: 'Ver demo',
    focus: 'Analítica en vivo',
    status: 'QA aprobado',
    result: 'Latencia <150ms',
    duration: '8 semanas',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Proyecto Gamma',
    description: 'Plataforma de almacenamiento seguro desarrollada junto a Deddian Technology.',
    imageUrl: '/images/project-gamma.svg',
    url: '#',
    focus: 'Infraestructura crítica',
    status: 'Lanzamiento en curso',
    result: 'Auditoría ISO lista',
    duration: '10 semanas',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
];
