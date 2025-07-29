'use client';
import { motion } from 'framer-motion';

export default function Education() {
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
  ];

  return (
    <section id="education" className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-semibold text-center mb-8">Educación</h2>
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
