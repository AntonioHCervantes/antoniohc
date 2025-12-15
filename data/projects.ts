import type { Project, ProjectDetail } from '@/lib/types/project';

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'check-planner',
    title: 'CheckPlanner',
    description: 'PWA privada para planificar tu día y tus proyectos sin registros ni dependencias de la nube.',
    summary:
      'Planificador diario y tablero Kanban en un solo lugar, con guardado local, modo offline, exportación de datos y experiencia installable.',
    imageUrl: '/images/project-alpha.svg',
    heroImage: {
      src: '/images/project-alpha.svg',
      alt: 'Ilustración abstracta para CheckPlanner, un tablero con columnas y tareas en progreso',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'dnd-kit', 'PWA'],
    liveUrl: 'https://checkplanner.com',
    liveCta: 'Abrir CheckPlanner',
    content: [
      {
        title: 'Motivación y objetivo',
        body: 'Desarrollé CheckPlanner para cubrir mi necesidad de organizar el día sin depender de cuentas ni servidores. El foco es la productividad personal: decidir el trabajo importante, moverlo visualmente y volver a él aunque no haya conexión.',
      },
      {
        title: 'Experiencia centrada en la productividad',
        body: 'Incluye dos vistas complementarias: My Day (To Do, In Progress, Done) para priorizar la jornada y My Tasks (Ideas, Backlog, In Progress, Done) para visualizar proyectos completos. Ambas soportan drag & drop accesible y persistencia inmediata.',
      },
      {
        title: 'Privacidad y entrega técnica',
        body: 'Todo se guarda en localStorage a través de una store de Zustand, con exportación/importación en JSON y sin envío de datos a servidores. Next.js + TypeScript y Tailwind soportan un PWA instalable que funciona offline y se actualiza con service workers.',
      },
    ],
    results: [
      {
        label: 'Privacidad',
        value: 'Datos locales',
        description: 'Sin cuentas ni backend: toda la información vive en localStorage y se puede exportar en JSON.',
      },
      {
        label: 'Modo offline',
        value: 'PWA',
        description: 'Installable y lista para usarse sin conexión gracias a la caché del service worker.',
      },
      {
        label: 'Flujos',
        value: 'My Day + Kanban',
        description: 'Dos tableros pensados para priorizar tareas diarias y organizar proyectos con drag & drop.',
      },
    ],
  },
  {
    slug: 'keep-calm-keep-working',
    title: 'Keep Calm Keep Working',
    description:
      'Marca de bienestar para home office con un pack premium de pelotas antiestrés pensado para quienes trabajan frente al ordenador.',
    summary:
      'Creé la marca Keep Calm Keep Working para lanzar un pack de pelotas antiestrés diseñado para profesionales que trabajan desde casa. Gestioné todo el ciclo: fabricación en China, importación a España y venta en Amazon hasta agotar existencias.',
    imageUrl: '/images/project-beta.svg',
    heroImage: {
      src: '/images/project-beta.svg',
      alt: 'Mockup del pack Keep Calm Keep Working de pelotas antiestrés premium',
    },
    technologies: ['Branding', 'E-commerce', 'Amazon', 'Supply chain', 'WordPress'],
    liveUrl: 'https://keepcalmkeepworking.com/es/pack-pelotas-antiestres-premium/',
    liveCta: 'Ver producto',
    cta: 'Ver más',
    content: [
      {
        title: 'Origen y objetivo',
        body: 'Quería un accesorio que ayudara a mantener la calma durante largas jornadas frente al ordenador, así que diseñé un pack premium de pelotas antiestrés para home office y regalos corporativos.',
      },
      {
        title: 'Producción e importación',
        body: 'Localicé una fábrica en China, definí calidades y packaging y coordiné la logística internacional hasta España, gestionando trámites aduaneros y control de calidad.',
      },
      {
        title: 'Lanzamiento y ventas',
        body: 'Construí la landing, publiqué el producto en Amazon con fotos y copies optimizados y vendí todo el lote inicial. Aprendí a fondo sobre comercio internacional y marketplaces.',
      },
    ],
    results: [
      {
        label: 'Ventas',
        value: 'Stock agotado',
        description: 'El primer lote se vendió por completo en Amazon tras el lanzamiento del producto.',
      },
      {
        label: 'Cadena de valor',
        value: 'Fabricación a entrega',
        description: 'Negociación con fábrica china, producción supervisada, importación y distribución en España.',
      },
      {
        label: 'Aprendizaje',
        value: 'Ecommerce integral',
        description: 'Experiencia end-to-end: branding, landing, optimización de listings y gestión logística internacional.',
      },
    ],
  },
  {
    slug: 'gift-ideas-finder',
    title: 'Gift Ideas Finder',
    description:
      'GPT dentro de ChatGPT que actúa como personal shopper: pide datos del destinatario, gustos y presupuesto para recomendar regalos en Amazon.',
    summary:
      'Asistente conversacional conectado a la API de Productos de Amazon que guía al usuario por mercado, perfil del destinatario y presupuesto para devolver sugerencias reales con enlaces listos para comprar.',
    imageUrl: '/images/project-alpha.svg',
    heroImage: {
      src: '/images/project-alpha.svg',
      alt: 'Ilustración de un asistente de regalos mostrando ideas de Amazon en tarjetas de producto',
    },
    technologies: [
      'GPTs',
      'OpenAI Actions',
      'Amazon Product Advertising API',
      'TypeScript',
      'Next.js',
    ],
    liveUrl:
      'https://chatgpt.com/g/g-6797129ba91c819186e71417942cb9d2-gift-ideas-finder-birthday-gifts',
    liveCta: 'Probar en ChatGPT',
    cta: 'Ver más',
    content: [
      {
        title: 'Rol y objetivo',
        body:
          'Creé un GPT propio dentro de ChatGPT para actuar como personal shopper de regalos. El objetivo: reducir la fricción de buscar ideas y entregar opciones comprables sin salir del chat.',
      },
      {
        title: 'Flujo conversacional guiado',
        body:
          'El asistente pregunta primero en qué marketplace de Amazon comprar (ES, US, UK, DE, FR, IT, MX), luego quién recibe el regalo, sus gustos, ocasión y rango de presupuesto. Con esa información devuelve una lista breve de recomendaciones con descripciones claras y enlaces reales.',
      },
      {
        title: 'Integración técnica',
        body:
          'Conecté el GPT a la API de Productos de Amazon mediante una Action con autenticación propia para cada mercado. El sistema mapea respuestas a consultas parametrizadas (categoría, precio, valoraciones) y controla moneda y disponibilidad antes de mostrar el enlace acortado al usuario.',
      },
    ],
    results: [
      {
        label: 'Mercados',
        value: '7 Amazon locales',
        description: 'Compatible con ES, US, UK, DE, FR, IT y MX para devolver precios y disponibilidad correctos.',
      },
      {
        label: 'Recomendaciones',
        value: 'Top 5-7',
        description: 'Entrega una lista corta de ideas filtradas por gustos y presupuesto en menos de 10 segundos.',
      },
      {
        label: 'Enlaces',
        value: '100% comprobados',
        description: 'Cada sugerencia llega con URL final a Amazon y aviso de moneda para evitar sorpresas en la compra.',
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
    description:
      'Álbum digital privado para guardar fotos, vídeos y anécdotas de la infancia y compartirlos con la familia.',
    summary:
      'En 2016 lancé Kuicco con un grupo de amigos: una app web y móvil para crear álbumes de vida de los peques, mantenerlos organizados de forma automática y compartirlos solo con quien elijas.',
    imageUrl: '/images/project-gamma.svg',
    heroImage: {
      src: '/images/project-gamma.svg',
      alt: 'Ilustración de álbum digital privado para familias',
    },
    technologies: ['PHP', 'jQuery', 'Bootstrap', 'MySQL'],
    liveUrl: 'https://www.kuicco.com',
    liveCta: 'Visitar kuicco.com',
    cta: 'Ver más',
    content: [
      {
        title: 'Recuerdos privados de la infancia',
        body: 'Kuicco permite crear un álbum de vida para cada hijo, con fotos, vídeos y anécdotas organizadas por fecha y etapa. Fue la forma que encontramos para guardar los momentos especiales y compartirlos de manera íntima con la familia.',
      },
      {
        title: 'Organización automática y recordatorios',
        body: 'La app envía recordatorios mensuales para capturar su sonrisa y mantiene todo ordenado por edades, álbumes y tipo de contenido. También ofrecía impresión de recuerdos en álbumes y regalos directamente desde el móvil.',
      },
      {
        title: 'Compartir con control total',
        body: 'Las invitaciones a familiares incluían permisos configurables para mantener la privacidad. Como responsable del desarrollo web, implementé la interfaz con un framework de PHP y jQuery para sincronizar álbumes entre web y apps iOS/Android.',
      },
    ],
    results: [
      {
        label: 'Familias',
        value: '+1.000',
        description: 'Más de 1.000 familias llegaron a usar Kuicco para guardar y compartir recuerdos.',
      },
      {
        label: 'Plataformas',
        value: 'Web, iOS y Android',
        description: 'Álbumes sincronizados y accesibles tanto desde la web como desde las apps móviles.',
      },
      {
        label: 'Modelo',
        value: 'Freemium',
        description: 'Prueba inicial de 30 días y plan premium con almacenamiento ampliado e invitaciones ilimitadas.',
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
