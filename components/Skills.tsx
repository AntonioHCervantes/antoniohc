'use client';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Skills() {
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
  ];

  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-center mb-8">Habilidades</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <CountUp end={skill.level} suffix="%" duration={1.5} enableScrollSpy />
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded">
              <motion.div
                className="h-2 bg-foreground rounded"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
