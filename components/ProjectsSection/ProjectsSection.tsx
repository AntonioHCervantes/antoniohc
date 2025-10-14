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
    <section id="projects" className="relative w-full py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary/80 dark:text-primary/70">Selección destacada</p>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 transition-colors dark:text-white sm:text-5xl">
            Proyectos que combinan innovación, diseño y tecnología
          </h2>
          <p className="mt-4 text-base text-slate-600 transition-colors dark:text-slate-200/80">
            Una colección de experiencias digitales construidas con precisión, enfocadas en resultados medibles y una estética
            moderna.
          </p>
        </header>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                className="transform-gpu transition-transform duration-500 hover:scale-[1.02]"
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
