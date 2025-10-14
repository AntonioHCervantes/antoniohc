import Image from 'next/image';
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
    <div className="group relative flex h-full flex-col">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-[#1F8BC4]/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 dark:from-primary/60 dark:to-[#1F8BC4]/40"
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl transition duration-500 group-hover:border-primary/30 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_12px_40px_rgba(15,23,42,0.45)]">
        <div className="relative mb-8 flex items-center justify-center">
          <span
            aria-hidden
            className="absolute -inset-x-8 -inset-y-6 rounded-[2rem] bg-gradient-to-br from-primary/30 to-[#1F8BC4]/20 opacity-60 blur-2xl dark:from-primary/40 dark:to-[#1F8BC4]/30"
          />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_0_25px_rgba(31,139,196,0.25)]">
            <Image
              src={projectData.imageUrl}
              alt={projectData.title}
              width={96}
              height={96}
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-grow flex-col text-slate-900 transition-colors dark:text-slate-100">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{projectData.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors dark:text-slate-200/80">{projectData.description}</p>
          {projectData.technologies?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2 text-xs font-semibold tracking-wide text-slate-500 transition-colors dark:text-slate-200/70">
              {projectData.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 uppercase text-slate-700 backdrop-blur transition-colors dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  {technology}
                </li>
              ))}
            </ul>
          ) : null}
          {projectData.url ? (
            <a
              href={projectData.url}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#1F8BC4] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(31,139,196,0.35)] transition duration-300 hover:shadow-[0_0_35px_rgba(31,139,196,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F8BC4]"
            >
              {projectData.cta ?? 'Ver proyecto'}
              <span aria-hidden className="text-base">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
