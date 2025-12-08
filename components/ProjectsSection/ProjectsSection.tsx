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
    <section id="projects" className="relative w-full overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.12),transparent_24%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(14,165,233,0.06),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.07),transparent_32%)] dark:bg-[radial-gradient(circle_at_18%_30%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_30%,rgba(255,255,255,0.35),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.06),transparent_32%)]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
      </div>

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
