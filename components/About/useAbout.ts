export function useAbout() {
  const state = {
    heading: 'Acerca de mí',
    // añade un subheading descriptivo aquí, no debe repetir Lider Técnico, experto en tecnologías Web
    subheading: 'Experto en desarrollo de software y liderazgo de proyectos digitales',
    introduction:
      'Ingeniero Informático con una sólida trayectoria dirigiendo equipos multidisciplinares y proyectos de software de alto impacto.',
    highlights: [
      { label: 'Rol\nPrincipal', value: 'Teach\nLead' },
      { label: 'Foco\nProfesional', value: 'Aplicaciones\nWeb' },
      { label: 'Valor\nDiferencial', value: 'Experto en\nIA' },
    ],
    portrait: {
      src: '/images/foto_antonio2.jpg',
      alt: 'Antonio Hernández Cervantes sonriendo con traje oscuro',
    },
  } as const;

  return {
    state,
    actions: {},
  } as const;
}
