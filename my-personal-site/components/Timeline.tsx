'use client';
import { motion } from 'framer-motion';

export default function Timeline() {
  const items = [
    {
      title: 'Líder Técnico / Analista sénior',
      subtitle: 'Bahía Software',
      description: 'Gestión de equipos de desarrollo y dirección técnica de proyectos de software.',
      date: 'nov. 2021 – actualidad',
    },
    {
      title: 'Programador Frontend Senior',
      subtitle: 'intercaso',
      description: 'Desarrollo de aplicaciones frontend con React, Redux y tecnologías modernas.',
      date: 'sept. 2017 – oct. 2021',
    },
    {
      title: 'CTO · Programador Senior Frontend Web',
      subtitle: 'Deddian Technology',
      description: 'Responsable del desarrollo frontend de proyectos web.',
      date: 'ene. 2016 – ago. 2017',
    },
    {
      title: 'Profesor del Máster en Tecnologías Web',
      subtitle: 'UCLM',
      description: 'Docente de asignaturas como CSS, JavaScript, AJAX y ASP.NET.',
      date: 'nov. 2010 – nov. 2016',
    },
    {
      title: 'Analista/Desarrollador Tecnologías Web',
      subtitle: 'Marpadal Interactive Media',
      description: 'Desarrollo de proyectos web en Albacete.',
      date: 'jun. 2013 – dic. 2015',
    },
    {
      title: 'Analista/Desarrollador de proyectos en I+D',
      subtitle: 'ISE Research',
      description: 'Proyectos de investigación y desarrollo.',
      date: 'may. 2011 – jun. 2013',
    },
    {
      title: 'Tecnólogo',
      subtitle: 'ISE Research',
      description: 'Desarrollo de proyectos en I+D.',
      date: 'dic. 2009 – may. 2011',
    },
  ];

  return (
    <section id="timeline" className="w-full bg-gray-100 dark:bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">Experiencia</h2>
        <ul>
          {items.map((item) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative pl-8 mb-8">
                <span className="absolute left-0 top-3 w-3 h-3 bg-accent rounded-full" />
                <div className="bg-secondary/20 dark:bg-gray-800/70 backdrop-blur-md p-4 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="italic text-foreground">{item.subtitle}</p>
                  <p className="text-foreground">{item.description}</p>
                  <span className="text-sm text-gray-700 dark:text-gray-200">{item.date}</span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
