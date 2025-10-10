export function useAbout() {
  const state = {
    heading: 'Acerca de mí',
    paragraphs: [
      'Soy Ingeniero en Informática y en Ingeniería Técnica de Sistemas. A lo largo de mi trayectoria he evolucionado hacia el liderazgo técnico, coordinando equipos de desarrollo y dirigiendo grandes proyectos de software.',
      'Domino tecnologías frontend como HTML/HTML5, CSS/Sass, JavaScript/ES6+, React/Redux y Node.js. Además, soy especialista en usabilidad, SEO y responsive design, integrando herramientas de IA como GitHub Copilot de forma coordinada y escalable.',
    ],
  } as const;

  return {
    state,
    actions: {},
  } as const;
}
