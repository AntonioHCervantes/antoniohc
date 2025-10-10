'use client';

import { motion } from 'framer-motion';
import { useEducation } from './useEducation';

export default function Education() {
  const {
    state: { studies },
  } = useEducation();

  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h2 className="mb-8 text-center text-3xl font-semibold">Educación</h2>
      <ul className="space-y-6">
        {studies.map((study) => (
          <motion.li
            key={study.title}
            className="border-l-2 border-foreground pl-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold">{study.title}</h3>
            <p className="italic">{study.institution}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{study.date}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
