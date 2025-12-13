'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useProjectsSection } from './useProjectsSection';

export default function ProjectsSection() {
  const {
    state: { projects },
  } = useProjectsSection();

  return (
    <section id="projects" className="relative w-full overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80 dark:from-background/60 dark:via-background/30 dark:to-background/60" />
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/10" />
        <div className="absolute bottom-[-20rem] right-[-18rem] h-[40rem] w-[40rem] rounded-full bg-[#1F8BC4]/10 blur-3xl dark:bg-[#1F8BC4]/15" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-12">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Selección destacada
          </p>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Proyectos que combinan{' '}
            <span className="bg-gradient-to-r from-primary via-primary/70 to-[#1F8BC4] bg-clip-text text-transparent">
              innovación, diseño
            </span>{' '}
            y tecnología
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-200/90">
            Una colección de experiencias digitales construidas con precisión, enfocadas en resultados medibles y una estética
            moderna.
          </p>
        </header>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="h-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Tilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                scale={1.02}
                glareEnable
                glareMaxOpacity={0.15}
                className="h-full transform-gpu transition-transform duration-500"
              >
                <ProjectCard project={project} />
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
