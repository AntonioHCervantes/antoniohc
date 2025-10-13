export function useAbout() {
  const state = {
    heading: 'Acerca de mí',
    subheading: 'Ingeniero en informática y líder técnico orientado a resultados',
    introduction:
      'Combino formación en Ingeniería Informática y en Ingeniería Técnica de Sistemas con una sólida trayectoria dirigiendo equipos multidisciplinares y proyectos de software de alto impacto.',
    paragraphs: [
      'Mi enfoque está orientado a crear experiencias digitales consistentes, alineadas con objetivos de negocio y diseñadas para escalar. Disfruto conectando estrategia, diseño e ingeniería para ofrecer soluciones fiables y sostenibles.',
      'Domino tecnologías frontend como HTML/HTML5, CSS/Sass, JavaScript/ES6+, React/Redux y Node.js. Además, soy especialista en usabilidad, SEO y responsive design, integrando herramientas de IA como GitHub Copilot para potenciar la productividad del equipo.',
    ],
    highlights: [
      { label: 'Rol principal', value: 'Liderazgo técnico' },
      { label: 'Foco profesional', value: 'Arquitectura Frontend' },
      { label: 'Metodologías', value: 'Agile & DevOps' },
    ],
    portrait: {
      src: '/images/foto_antonio.jpeg',
      alt: 'Antonio Hernández Cervantes sonriendo con traje oscuro',
    },
  } as const;

  return {
    state,
    actions: {},
  } as const;
}
