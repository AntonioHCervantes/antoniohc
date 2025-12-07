import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import type { Project } from '@/lib/types/project';
import { useProjectCard } from './useProjectCard';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const {
    state: { project: projectData },
  } = useProjectCard(project);

  return (
    <div className="group relative h-full">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/10 via-transparent to-[#1F8BC4]/15 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100 dark:from-primary/30 dark:via-transparent dark:to-[#1F8BC4]/30"
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/70 bg-gradient-to-br from-white/80 via-white/60 to-slate-50/60 p-8 shadow-[0_15px_70px_rgba(15,23,42,0.06)] backdrop-blur-2xl transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_70px_rgba(31,139,196,0.28)] dark:border-white/10 dark:from-slate-900/80 dark:via-slate-900/70 dark:to-slate-950/80 dark:shadow-[0_22px_70px_rgba(7,18,38,0.65)]">
        <div className="pointer-events-none absolute inset-px rounded-[26px] bg-[radial-gradient(circle_at_30%_20%,rgba(31,139,196,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_25%)] opacity-80" />
        <div className="relative flex h-full flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 shadow-[0_12px_40px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/60 backdrop-blur-sm dark:bg-slate-800/80 dark:ring-white/10 dark:shadow-[0_20px_60px_rgba(7,18,38,0.65)]">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-white/60 to-[#1F8BC4]/40 opacity-60 blur-lg dark:from-primary/60 dark:via-slate-900 dark:to-[#1F8BC4]/55" />
                <Image
                  src={projectData.imageUrl}
                  alt={projectData.title}
                  width={64}
                  height={64}
                  className="relative z-10 h-10 w-10 object-contain"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80 dark:text-primary/70">
                  {projectData.focus ?? 'Experiencia digital'}
                </p>
                <h3 className="text-2xl font-semibold leading-tight text-slate-900 dark:text-white">{projectData.title}</h3>
              </div>
            </div>
            {projectData.status ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-100">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                {projectData.status}
              </span>
            ) : null}
          </div>

          <p className="text-sm leading-relaxed text-slate-600 transition-colors dark:text-slate-200/90">{projectData.description}</p>

          <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-inner shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300/80">
              <span>Entrega estratégica</span>
              {projectData.duration ? (
                <span className="rounded-full bg-slate-900/5 px-3 py-1 text-[11px] font-semibold text-slate-600 dark:bg-white/5 dark:text-slate-100">
                  {projectData.duration}
                </span>
              ) : null}
            </div>
            {projectData.result ? (
              <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{projectData.result}</p>
            ) : null}
            {projectData.technologies?.length ? (
              <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 transition-colors dark:text-slate-200/90">
                {projectData.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 uppercase tracking-wide text-slate-700 backdrop-blur dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-100"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-200/90">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary dark:bg-primary/15 dark:text-primary">
                <Sparkles className="h-4 w-4" /> Diseño premium
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 px-3 py-1 font-semibold text-slate-700 dark:border-white/10 dark:text-slate-100">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Accesibilidad
              </span>
            </div>
            {projectData.url ? (
              <a
                href={projectData.url}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#1F8BC4] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(31,139,196,0.35)] transition duration-300 hover:shadow-[0_0_35px_rgba(31,139,196,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F8BC4]"
              >
                {projectData.cta ?? 'Ver proyecto'}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
