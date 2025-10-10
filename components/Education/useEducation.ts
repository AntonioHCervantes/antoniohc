'use client';

const studies = [
  {
    title: 'Grado en Ingeniería Informática',
    institution: 'Universidad de Castilla-La Mancha',
    date: '2010 – 2012',
  },
  {
    title: 'Máster en Tecnologías Web, IT',
    institution: 'Universidad de Castilla-La Mancha',
    date: '2009 – 2010',
  },
  {
    title: 'Ingeniería Técnica en Informática de Sistemas',
    institution: 'Universidad de Almería',
    date: '2005 – 2009',
  },
] as const;

export function useEducation() {
  return {
    state: {
      studies,
    },
    actions: {},
  } as const;
}
