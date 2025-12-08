import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import type { Project } from '@/lib/types/project';
import { useProjectCard } from './useProjectCard';

type Props = {
  project: Project;
  variant?: 'featured' | 'standard';
};

type AccentKey = NonNullable<Project['accent']> | 'indigo';

type AccentTokens = {
  glow: string;
  focus: string;
  chip: string;
  button: string;
};

const ACCENT_STYLES: Record<AccentKey, AccentTokens> = {
  amber: {
    glow: 'from-amber-400/30 via-orange-400/20 to-primary/15',
    focus: 'bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-50',
    chip: 'border-amber-200/70 bg-white/70 text-amber-900 dark:border-amber-400/40 dark:bg-white/5 dark:text-amber-50',
    button: 'from-amber-500 to-orange-500 shadow-[0_18px_40px_rgba(245,158,11,0.35)]',
  },
  violet: {
    glow: 'from-violet-400/25 via-indigo-400/20 to-primary/15',
    focus: 'bg-violet-100 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50',
    chip: 'border-violet-200/70 bg-white/70 text-violet-900 dark:border-violet-300/40 dark:bg-white/5 dark:text-violet-50',
    button: 'from-violet-500 to-indigo-500 shadow-[0_18px_40px_rgba(99,102,241,0.35)]',
  },
  cyan: {
    glow: 'from-sky-400/30 via-cyan-400/20 to-primary/15',
    focus: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-500/25 dark:text-cyan-50',
    chip: 'border-cyan-200/70 bg-white/70 text-cyan-900 dark:border-cyan-400/40 dark:bg-white/5 dark:text-cyan-50',
    button: 'from-cyan-500 to-sky-600 shadow-[0_18px_40px_rgba(14,165,233,0.35)]',
  },
  emerald: {
    glow: 'from-emerald-400/25 via-teal-400/20 to-primary/15',
    focus: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/25 dark:text-emerald-50',
    chip: 'border-emerald-200/70 bg-white/70 text-emerald-900 dark:border-emerald-400/40 dark:bg-white/5 dark:text-emerald-50',
    button: 'from-emerald-500 to-teal-500 shadow-[0_18px_40px_rgba(16,185,129,0.35)]',
  },
  indigo: {
    glow: 'from-primary/25 via-blue-500/20 to-purple-500/15',
    focus: 'bg-primary/10 text-primary dark:bg-primary/25 dark:text-primary',
    chip: 'border-primary/15 bg-white/70 text-slate-900 dark:border-primary/20 dark:bg-white/5 dark:text-white',
    button: 'from-primary to-sky-600 shadow-[0_18px_40px_rgba(14,165,233,0.35)]',
  },
};

export default function ProjectCard({ project, variant = 'standard' }: Props) {
  const {
    state: { project: projectData },
  } = useProjectCard(project);

  const accentKey = projectData.accent ?? 'indigo';
  const accentStyles = ACCENT_STYLES[accentKey];

  const layoutClass =
    variant === 'featured'
      ? 'lg:grid lg:grid-cols-10 lg:items-center lg:gap-10 flex flex-col gap-8'
      : 'flex flex-col gap-6';

  const titleClass = variant === 'featured' ? 'text-3xl sm:text-4xl' : 'text-2xl';
  const descriptionClass = variant === 'featured' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';

  const visual = (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br from-white/60 via-white/40 to-slate-50/70 p-4 shadow-[0_12px_45px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/60 backdrop-blur-lg dark:border-white/10 dark:from-slate-900/70 dark:via-slate-900/60 dark:to-slate-900/80 dark:ring-white/5`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${accentStyles.glow} opacity-70 blur-2xl transition duration-700`}
      />
      <div className="relative flex items-center justify-center">
        <div className="relative h-full w-full">
          <div className="absolute inset-3 rounded-xl bg-white/60 ring-1 ring-slate-200/70 drop-shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:bg-slate-800/70 dark:ring-white/10" />
          <Image
            src={projectData.imageUrl}
            alt={projectData.title}
            width={720}
            height={420}
            className="relative z-10 h-full w-full rounded-xl object-cover"
          />
        </div>
        {projectData.technologies?.length ? (
          <div className="pointer-events-none absolute bottom-4 left-4 flex flex-wrap gap-2">
            {projectData.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accentStyles.chip}`}
              >
                {technology}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );

  return (
    <div className="group relative h-full">
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br ${accentStyles.glow} opacity-40 blur-3xl transition duration-700 group-hover:opacity-70`}
      />
      <div className="relative h-full overflow-hidden rounded-[30px] border border-slate-200/70 bg-gradient-to-b from-white/80 via-white/70 to-slate-50/70 p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_26px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:from-slate-900/80 dark:via-slate-900/75 dark:to-slate-950/85 dark:shadow-[0_26px_90px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute inset-px rounded-[28px] border border-white/40 bg-[radial-gradient(circle_at_15%_25%,rgba(124,191,250,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(161,132,255,0.16),transparent_32%)] opacity-80 dark:border-white/5" />
        <div className={`relative h-full ${layoutClass}`}>
          <div className={variant === 'featured' ? 'lg:col-span-5 space-y-4' : 'space-y-4'}>
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${accentStyles.focus}`}
              >
                <Sparkles className="h-4 w-4" aria-hidden />
                {projectData.focus ?? 'Proyecto estratégico'}
              </span>
              {projectData.status ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-[0_10px_30px_rgba(16,185,129,0.18)] dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-100">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                  {projectData.status}
                </span>
              ) : null}
            </div>
            <h3 className={`${titleClass} font-semibold leading-tight text-slate-900 dark:text-white`}>
              {projectData.title}
            </h3>
            <p className={`${descriptionClass} leading-relaxed text-slate-600 transition-colors dark:text-slate-200/90`}>
              {projectData.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-200/90">
              {projectData.result ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 font-semibold text-slate-800 dark:bg-white/5 dark:text-white">
                  {projectData.result}
                </span>
              ) : null}
              {projectData.duration ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white">
                  {projectData.duration}
                </span>
              ) : null}
            </div>
            {projectData.technologies?.length ? (
              <div className="flex flex-wrap gap-2">
                {projectData.technologies.map((technology) => (
                  <span
                    key={technology}
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${accentStyles.chip}`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            ) : null}
            {projectData.url ? (
              <a
                href={projectData.url}
                className={`inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r ${accentStyles.button} px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_40px_rgba(14,165,233,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
              >
                {projectData.cta ?? 'Ver proyecto'}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>
          <div className={variant === 'featured' ? 'lg:col-span-5 w-full' : 'w-full'}>{visual}</div>
        </div>
      </div>
    </div>
  );
}
