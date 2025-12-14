import type { Project, ProjectDetail } from '@/lib/types/project';

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'check-planner',
    title: 'CheckPlanner',
    description: 'Aplicación moderna para gestionar proyectos personales.',
    summary: 'Una aplicación web centrada en la planificación diaria con flujos guiados, recordatorios inteligentes y paneles claros.',
    imageUrl: '/images/project-alpha.svg',
    heroImage: {
      src: '/images/project-alpha.svg',
      alt: 'Ilustración de paneles de productividad del Proyecto Alpha',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    content: [
      {
        title: 'Enfoque del reto',
        body: 'El proyecto nació para simplificar la gestión personal de objetivos y tareas. Diseñamos una interfaz minimalista con navegación clara y espacios dedicados a la priorización diaria.',
      },
      {
        title: 'Diseño centrado en la claridad',
        body: 'Creamos patrones de tarjetas y paneles con tipografía jerárquica y estados vacíos ilustrados. El usuario siempre sabe qué paso sigue gracias a microcopys en español y un flujo de onboarding guiado.',
      },
      {
        title: 'Escalabilidad tecnológica',
        body: 'La solución se construyó con componentes reutilizables y animaciones sutiles para mantener el rendimiento en dispositivos móviles. Integramos tests de regresión visual para proteger el diseño.',
      },
    ],
    results: [
      {
        label: 'Adopción',
        value: '+38%',
        description: 'Incremento en usuarios activos tras las primeras cuatro semanas.',
      },
      {
        label: 'Soporte',
        value: '-42%',
        description: 'Reducción de incidencias gracias a flujos explicados paso a paso.',
      },
      {
        label: 'Rendimiento',
        value: '92/100',
        description: 'Puntuación Lighthouse promedio en dispositivos móviles.',
      },
    ],
  },
  {
    slug: 'keep-calm-keep-working',
    title: 'Keep Calm Keep Working',
    description: 'Dashboard interactivo con métricas en tiempo real.',
    summary: 'Panel de control responsive para visualizar KPIs en vivo, optimizado para equipos de producto y negocio.',
    imageUrl: '/images/project-beta.svg',
    heroImage: {
      src: '/images/project-beta.svg',
      alt: 'Dashboard de métricas del Proyecto Beta',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    cta: 'Ver más',
    content: [
      {
        title: 'Contexto de negocio',
        body: 'El cliente necesitaba una vista única con métricas en tiempo real que se adaptara a equipos remotos. Se priorizaron la fiabilidad de los datos y la rapidez de acceso.',
      },
      {
        title: 'Arquitectura de visualización',
        body: 'Diseñamos un sistema modular de widgets con estados de carga accesibles y opciones de personalización rápida. El uso de TypeScript garantizó contratos claros entre el frontend y la API.',
      },
      {
        title: 'Entrega y governance',
        body: 'Documentamos componentes y tokens de diseño en Storybook para facilitar la adopción. Los equipos podían clonar configuraciones y compartir paneles con un clic.',
      },
    ],
    results: [
      {
        label: 'Decisiones',
        value: '12x',
        description: 'Mayor velocidad en la creación de reportes semanales comparado con el flujo previo.',
      },
      {
        label: 'Disponibilidad',
        value: '99.2%',
        description: 'Estabilidad del dashboard durante picos de tráfico en lanzamientos.',
      },
      {
        label: 'Satisfacción',
        value: '4.7/5',
        description: 'Evaluación promedio en las encuestas internas de los squads de producto.',
      },
    ],
  },
  {
    slug: 'gift-ideas-finder',
    title: 'Gift Ideas Finder',
    description: 'Dashboard interactivo con métricas en tiempo real.',
    summary: 'Panel de control responsive para visualizar KPIs en vivo, optimizado para equipos de producto y negocio.',
    imageUrl: '/images/project-beta.svg',
    heroImage: {
      src: '/images/project-beta.svg',
      alt: 'Dashboard de métricas del Proyecto Beta',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    cta: 'Ver más',
    content: [
      {
        title: 'Contexto de negocio',
        body: 'El cliente necesitaba una vista única con métricas en tiempo real que se adaptara a equipos remotos. Se priorizaron la fiabilidad de los datos y la rapidez de acceso.',
      },
      {
        title: 'Arquitectura de visualización',
        body: 'Diseñamos un sistema modular de widgets con estados de carga accesibles y opciones de personalización rápida. El uso de TypeScript garantizó contratos claros entre el frontend y la API.',
      },
      {
        title: 'Entrega y governance',
        body: 'Documentamos componentes y tokens de diseño en Storybook para facilitar la adopción. Los equipos podían clonar configuraciones y compartir paneles con un clic.',
      },
    ],
    results: [
      {
        label: 'Decisiones',
        value: '12x',
        description: 'Mayor velocidad en la creación de reportes semanales comparado con el flujo previo.',
      },
      {
        label: 'Disponibilidad',
        value: '99.2%',
        description: 'Estabilidad del dashboard durante picos de tráfico en lanzamientos.',
      },
      {
        label: 'Satisfacción',
        value: '4.7/5',
        description: 'Evaluación promedio en las encuestas internas de los squads de producto.',
      },
    ],
  },
  {
    slug: 'smieals',
    title: 'Smieals',
    description: 'Plataforma de almacenamiento seguro desarrollada junto a Deddian Technology.',
    summary: 'Una plataforma cloud con énfasis en seguridad, auditoría y experiencia de autoservicio para equipos técnicos.',
    imageUrl: '/images/project-gamma.svg',
    heroImage: {
      src: '/images/project-gamma.svg',
      alt: 'Ilustración de infraestructura segura del Proyecto Gamma',
    },
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    cta: 'Ver más',
    content: [
      {
        title: 'Seguridad como pilar',
        body: 'Implementamos controles de acceso granulares, bitácoras auditables y cifrado de datos en tránsito y reposo. El diseño comunica confianza mediante paletas sobrias y mensajes claros.',
      },
      {
        title: 'Experiencia de autoservicio',
        body: 'Los usuarios pueden aprovisionar espacios seguros en minutos gracias a asistentes guiados. Se añadieron checklists y validaciones en tiempo real para evitar configuraciones erróneas.',
      },
      {
        title: 'Monitoreo continuo',
        body: 'Se integraron paneles de salud del sistema y alertas proactivas que informan de anomalías antes de impactar a los clientes finales.',
      },
    ],
    results: [
      {
        label: 'Despliegues',
        value: '-35%',
        description: 'Reducción en tiempos de puesta en marcha de nuevos entornos.',
      },
      {
        label: 'Incidentes',
        value: '-28%',
        description: 'Disminución de incidentes críticos tras la implementación de alertas preventivas.',
      },
      {
        label: 'Retención',
        value: '+18%',
        description: 'Aumento de retención al ofrecer mayor transparencia y controles de seguridad.',
      },
    ],
  },
  {
    slug: 'kuicco',
    title: 'Kuicco',
    description: 'Plataforma de almacenamiento seguro desarrollada junto a Deddian Technology.',
    summary: 'Una plataforma cloud con énfasis en seguridad, auditoría y experiencia de autoservicio para equipos técnicos.',
    imageUrl: '/images/project-gamma.svg',
    heroImage: {
      src: '/images/project-gamma.svg',
      alt: 'Ilustración de infraestructura segura del Proyecto Gamma',
    },
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    cta: 'Ver más',
    content: [
      {
        title: 'Seguridad como pilar',
        body: 'Implementamos controles de acceso granulares, bitácoras auditables y cifrado de datos en tránsito y reposo. El diseño comunica confianza mediante paletas sobrias y mensajes claros.',
      },
      {
        title: 'Experiencia de autoservicio',
        body: 'Los usuarios pueden aprovisionar espacios seguros en minutos gracias a asistentes guiados. Se añadieron checklists y validaciones en tiempo real para evitar configuraciones erróneas.',
      },
      {
        title: 'Monitoreo continuo',
        body: 'Se integraron paneles de salud del sistema y alertas proactivas que informan de anomalías antes de impactar a los clientes finales.',
      },
    ],
    results: [
      {
        label: 'Despliegues',
        value: '-35%',
        description: 'Reducción en tiempos de puesta en marcha de nuevos entornos.',
      },
      {
        label: 'Incidentes',
        value: '-28%',
        description: 'Disminución de incidentes críticos tras la implementación de alertas preventivas.',
      },
      {
        label: 'Retención',
        value: '+18%',
        description: 'Aumento de retención al ofrecer mayor transparencia y controles de seguridad.',
      },
    ],
  },
  {
    slug: 'board-game-finder',
    title: 'Board Game Finder',
    description: 'Plataforma de almacenamiento seguro desarrollada junto a Deddian Technology.',
    summary: 'Una plataforma cloud con énfasis en seguridad, auditoría y experiencia de autoservicio para equipos técnicos.',
    imageUrl: '/images/project-gamma.svg',
    heroImage: {
      src: '/images/project-gamma.svg',
      alt: 'Ilustración de infraestructura segura del Proyecto Gamma',
    },
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    cta: 'Ver más',
    content: [
      {
        title: 'Seguridad como pilar',
        body: 'Implementamos controles de acceso granulares, bitácoras auditables y cifrado de datos en tránsito y reposo. El diseño comunica confianza mediante paletas sobrias y mensajes claros.',
      },
      {
        title: 'Experiencia de autoservicio',
        body: 'Los usuarios pueden aprovisionar espacios seguros en minutos gracias a asistentes guiados. Se añadieron checklists y validaciones en tiempo real para evitar configuraciones erróneas.',
      },
      {
        title: 'Monitoreo continuo',
        body: 'Se integraron paneles de salud del sistema y alertas proactivas que informan de anomalías antes de impactar a los clientes finales.',
      },
    ],
    results: [
      {
        label: 'Despliegues',
        value: '-35%',
        description: 'Reducción en tiempos de puesta en marcha de nuevos entornos.',
      },
      {
        label: 'Incidentes',
        value: '-28%',
        description: 'Disminución de incidentes críticos tras la implementación de alertas preventivas.',
      },
      {
        label: 'Retención',
        value: '+18%',
        description: 'Aumento de retención al ofrecer mayor transparencia y controles de seguridad.',
      },
    ],
  }
];

export const projects: Project[] = projectDetails.map(
  ({ slug, title, description, imageUrl, technologies, url, cta }) => ({
    slug,
    title,
    description,
    imageUrl,
    technologies,
    url: url ?? `/projects/${slug}`,
    cta: cta ?? 'Ver más',
  }),
);

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
