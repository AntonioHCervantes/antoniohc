import type { Project } from '@/lib/types/project';

export const projects: Project[] = [
  {
    title: 'Apex FinTech Solutions',
    description:
      'Arquitectura orientada a microservicios con onboarding seguro, conciliación financiera automática y paneles de liquidez en tiempo real.',
    imageUrl: '/images/project-alpha.svg',
    url: '#',
    cta: 'Ver detalles del proyecto',
    focus: 'Sistema de pagos inteligente',
    status: 'En producción',
    result: 'Liquidez en tiempo real +24%',
    duration: '12 semanas',
    technologies: ['React', 'Node.js', 'GraphQL', 'Kubernetes'],
    accent: 'amber',
  },
  {
    title: 'OmniShop E-commerce Suite',
    description:
      'Plataforma omnicanal con catálogo inteligente, checkout sin fricción y analítica de conversión para retail internacional.',
    imageUrl: '/images/project-beta.svg',
    url: '#',
    cta: 'Explorar proyecto',
    focus: 'Suite de comercio unificado',
    status: 'Listo para producción',
    result: '+21% conversión en mobile',
    duration: '9 semanas',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    accent: 'violet',
  },
  {
    title: 'FlowBank AI Analytics',
    description:
      'Motor de decisiones con modelos predictivos y tableros operativos, diseñado para equipos de riesgo y producto.',
    imageUrl: '/images/project-gamma.svg',
    url: '#',
    cta: 'Ver detalles',
    focus: 'Analítica con IA',
    status: 'QA aprobado',
    result: 'Tiempo de respuesta <150 ms',
    duration: '10 semanas',
    technologies: ['Python', 'Next.js', 'PostgreSQL'],
    accent: 'cyan',
  },
  {
    title: 'EduConnect Adaptive Learning',
    description:
      'Plataforma educativa con personalización dinámica, rutas de aprendizaje adaptativas y reportes de rendimiento en vivo.',
    imageUrl: '/images/project-beta.svg',
    url: '#',
    cta: 'Ver estudio de caso',
    focus: 'Aprendizaje adaptativo',
    status: 'Piloto corporativo',
    result: 'Retención de usuarios +32%',
    duration: '7 semanas',
    technologies: ['React', 'Supabase', 'Tailwind', 'Vercel'],
    accent: 'emerald',
  },
];
