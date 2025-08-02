'use client';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Liderazgo y gestión de equipos', level: 90 },
    { name: 'Integración de IA en proyectos', level: 85 },
    { name: 'Estrategia con GitHub Copilot', level: 80 },
  ];

  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 text-center py-20">
      <h2 className="text-3xl font-semibold text-center mb-8">Habilidades</h2>
      <div className="space-y-6">
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
