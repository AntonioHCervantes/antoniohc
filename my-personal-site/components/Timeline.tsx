'use client';
import { motion } from 'framer-motion';

export default function Timeline() {
  const items = [
    { year: '2024 - Empresa A', role: 'Desarrollador Frontend' },
    { year: '2022 - Empresa B', role: 'Ingeniero de Software' },
  ];

  return (
    <section id="timeline" className="w-full bg-gray-100 dark:bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Experiencia</h2>
        <ul className="space-y-6">
          {items.map((item) => (
            <motion.li
              key={item.year}
              className="border-l-2 border-foreground pl-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold">{item.year}</h3>
              <p>{item.role}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
