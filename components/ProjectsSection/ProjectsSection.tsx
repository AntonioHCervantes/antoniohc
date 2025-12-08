'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useProjectsSection } from './useProjectsSection';

export default function ProjectsSection() {
  const {
    state: { projects },
  } = useProjectsSection();

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative w-full bg-white/95 py-28 transition-colors duration-300 dark:bg-slate-950/95 sm:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <header className="relative max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white">
            Selección destacada
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(59,130,246,0.2)]" aria-hidden />
          </div>
          <h2 className="text-4xl font-semibold leading-tight text-slate-900 transition-colors dark:text-white sm:text-5xl">
            Proyectos que combinan innovación, diseño y tecnología.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600 transition-colors dark:text-slate-200/90">
            Liderazgo técnico, dirección de producto y experiencia de usuario convergen para entregar soluciones web de alto rendimiento que elevan la percepción de marca en cada touchpoint.
          </p>
        </header>

        {projects.length === 0 ? (
          <p className="text-slate-600 dark:text-slate-200/90">Próximamente más proyectos seleccionados.</p>
        ) : (
          <div className="grid auto-rows-[1fr] grid-cols-1 gap-6 lg:grid-cols-12">
            {featuredProject ? (
              <motion.div
                className="lg:col-span-7 lg:row-span-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={featuredProject} variant="featured" />
              </motion.div>
            ) : null}

            {otherProjects.map((project, index) => {
              const columnClass = [
                'lg:col-span-5 lg:row-span-1',
                'lg:col-span-6 lg:row-span-1',
                'lg:col-span-6 lg:row-span-1',
              ][index] ?? 'lg:col-span-6';

              return (
                <motion.div
                  key={project.title}
                  className={columnClass}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.08 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
