'use client';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { experiences } from '@/data/experience';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-background via-background/70 to-background">
      <h2 className="mx-auto text-center text-3xl md:text-4xl font-bold text-foreground mb-16">
        Experiencia
      </h2>
      <div className="relative max-w-3xl mx-auto flex flex-col gap-28 px-6 md:px-0">
        {/* Línea central */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-primary origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            className="relative flex flex-col md:flex-row"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            {/* Nodo */}
            <motion.span
              className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/40 shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            {/* Tarjeta */}
            <Tilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              glareEnable
              glareMaxOpacity={0.15}
              className="ml-10 md:ml-14 before:absolute before:left-[-7px] before:top-5 before:border-l-[7px] before:border-l-primary before:border-y-[7px] before:border-y-transparent"
            >
                <article className="text-left md:text-left bg-background/90 dark:bg-foreground/5 backdrop-blur-xl border border-primary/30 rounded-xl p-6 shadow-2xl/25">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="italic text-primary">{exp.company}</p>
                  <p className="mt-2 text-foreground/90">{exp.description}</p>
                  <p className="mt-1 text-sm text-foreground/70">{exp.date}</p>
                </article>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
