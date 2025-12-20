'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useSkills } from './useSkills';

export default function Skills() {
  const {
    state: { skillGroups },
  } = useSkills();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-semibold">Habilidades</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="text-center text-xl font-semibold md:text-left">{group.title}</h3>
            <div className="space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex items-center justify-between text-sm font-medium text-muted-foreground">
                    <span>{skill.name}</span>
                    <CountUp
                      end={skill.level}
                      suffix="%"
                      duration={1.5}
                      enableScrollSpy
                      className="text-foreground"
                    />
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
          </div>
        ))}
      </div>
    </section>
  );
}
