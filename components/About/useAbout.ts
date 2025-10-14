export function useAbout() {
  const state = {
    heading: 'Acerca de mí',
    subheading: 'Ingeniero en informática y líder técnico orientado a resultados',
    introduction:
      'Combino formación en Ingeniería Informática y en Ingeniería Técnica de Sistemas con una sólida trayectoria dirigiendo equipos multidisciplinares y proyectos de software de alto impacto.',
    paragraphs: [
      'Mi enfoque une estrategia, diseño e ingeniería para crear experiencias digitales consistentes, preparadas para escalar y mantener la calidad en cada iteración.',
    ],
    highlights: [
      { label: 'Rol\nPrincipal', value: 'Teach\nLead' },
      { label: 'Foco\nProfesional', value: 'Aplicaciones\nWeb' },
      { label: 'Valor\nDiferencial', value: 'Experto en\nIA' },
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
