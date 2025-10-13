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
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#050912] via-[#0b0f19] to-[#091027] py-32 text-slate-100"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(31,139,196,0.18),_transparent_55%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:160px_160px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-10 h-72 w-72 rounded-full bg-[#1F8BC4]/30 blur-3xl"
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary/70">Selección destacada</p>
          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Proyectos que combinan innovación, diseño y tecnología
          </h2>
          <p className="mt-4 text-base text-slate-200/80">
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
