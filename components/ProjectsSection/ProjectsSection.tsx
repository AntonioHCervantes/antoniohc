'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ShieldCheck, Sparkles, Timer } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useProjectsSection } from './useProjectsSection';

export default function ProjectsSection() {
  const {
    state: { projects },
  } = useProjectsSection();

  return (
    <section id="projects" className="relative w-full overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(31,139,196,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(147,197,253,0.12),transparent_20%)]" />
        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20" />
        <div className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-[#1F8BC4]/10 blur-[120px] dark:bg-[#1F8BC4]/25" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1.45fr]">
          <header className="relative space-y-6 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-[0_15px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_22px_70px_rgba(7,18,38,0.65)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(31,139,196,0.1),transparent_45%)]" />
            <div className="relative space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-primary dark:border-white/5 dark:bg-primary/20 dark:text-primary">
                Selección estratégica
              </p>
              <h2 className="text-4xl font-bold leading-tight text-slate-900 transition-colors dark:text-white sm:text-5xl">
                Proyectos diseñados para entornos exigentes
              </h2>
              <p className="text-base leading-relaxed text-slate-600 transition-colors dark:text-slate-200/90">
                Interfaz, ingeniería y rendimiento trabajan juntos para entregar experiencias digitales consistentes en cualquier modo, dispositivo y contexto empresarial.
              </p>
            </div>
            <div className="relative mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                  <Sparkles className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Diseño centrado en negocio</p>
                  <p className="text-sm text-slate-600 dark:text-slate-200/90">Entregables pulidos con foco en conversiones y consistencia visual.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Listos para producción</p>
                  <p className="text-sm text-slate-600 dark:text-slate-200/90">Accesibilidad, microinteracciones y performance cuidados al detalle.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                  <Timer className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Iteración ágil</p>
                  <p className="text-sm text-slate-600 dark:text-slate-200/90">Sprints cortos, entregas medibles y comunicación transparente.</p>
                </div>
              </div>
            </div>
          </header>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.015}
                  glareEnable
                  glareMaxOpacity={0.12}
                  className="transform-gpu transition-transform duration-500 hover:scale-[1.015]"
                >
                  <ProjectCard project={project} />
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
