'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useSkills } from './useSkills';

export default function Skills() {
  const {
    state: { skills },
  } = useSkills();

  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="mb-8 text-center text-3xl font-semibold">Habilidades</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-1 flex justify-between">
              <span>{skill.name}</span>
              <CountUp end={skill.level} suffix="%" duration={1.5} enableScrollSpy />
            </div>
            <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-800">
              <motion.div
                className="h-2 rounded bg-foreground"
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
