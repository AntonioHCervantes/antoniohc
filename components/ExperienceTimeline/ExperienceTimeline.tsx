'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useExperienceTimeline } from './useExperienceTimeline';

export default function ExperienceTimeline() {
  const {
    state: { experiences },
  } = useExperienceTimeline();

  return (
    <section id="experience" className="relative bg-gradient-to-b from-background via-background/70 to-background py-24">
      <h2 className="mb-16 text-center text-3xl font-bold text-foreground md:text-4xl">Experiencia</h2>
      <div className="relative mx-auto flex max-w-3xl flex-col gap-28 px-6 md:px-0">
        <motion.div
          className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 origin-top bg-primary"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="relative flex flex-col md:flex-row"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <motion.span
              className="absolute left-1/2 top-0 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-primary/40 shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <Tilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              glareEnable
              glareMaxOpacity={0.15}
              className="before:border-primary before:absolute before:left-[-7px] before:top-5 before:border-l-[7px] before:border-y-[7px] before:border-y-transparent"
            >
              <article className="rounded-xl border border-primary/30 bg-background/90 p-6 shadow-2xl/25 backdrop-blur-xl dark:bg-foreground/5">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <p className="text-primary italic">{exp.company}</p>
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
