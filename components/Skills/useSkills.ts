'use client';

const skills = [
  { name: 'Liderazgo equipos Web', level: 95 },
  { name: 'Monitorización de sistemas', level: 96 },
  { name: 'Alertado de sistemas', level: 90 },
  { name: 'Organización de tareas', level: 96 },
  { name: 'Análisis de Incidencias', level: 98 },
  { name: 'Planificación de Iniciativas Técnicas', level: 94 },
  { name: 'Documentación técnica', level: 94 },
  { name: 'Revisión de código', level: 97 },
  { name: 'Integración de IA', level: 96 },
  { name: 'Desarrollo Accesible', level: 93 },
  { name: 'GitHub Copilot', level: 95 },
  { name: 'JIRA', level: 96 },
  { name: 'Confluence', level: 95 },
  { name: 'Grafana', level: 96 },
  { name: 'AlertHub', level: 93 },
  { name: 'HTML / CSS', level: 98 },
  { name: 'JavaScript / TypeScript', level: 96 },
  { name: 'React / Next.js', level: 97 },
  { name: 'Node.js', level: 96 },
] as const;

export function useSkills() {
  return {
    state: {
      skills,
    },
    actions: {},
  } as const;
}
