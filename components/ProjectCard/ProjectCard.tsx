import Link from 'next/link';
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

  const isExternalLink = projectData.url?.startsWith('http');
  const logoBackgroundStyle = projectData.logoBackgroundColor
    ? { backgroundColor: projectData.logoBackgroundColor }
    : undefined;

  return (
    <div className="group relative flex h-full flex-col">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-[#1F8BC4]/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 dark:from-primary/40 dark:via-transparent dark:to-[#1F8BC4]/30"
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_18px_70px_-45px_rgba(15,23,42,0.25)] backdrop-blur-xl transition duration-500 before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-primary/0 before:via-primary/70 before:to-[#1F8BC4]/0 before:opacity-70 before:content-[''] group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-[0_30px_90px_-55px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_28px_90px_-55px_rgba(0,0,0,0.85)] dark:group-hover:border-primary/40 dark:group-hover:shadow-[0_40px_130px_-70px_rgba(0,0,0,0.9)]">
        <div className="relative mb-6 flex items-center justify-center">
          <span
            aria-hidden
            className="absolute -inset-x-8 -inset-y-6 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-[#1F8BC4]/15 opacity-70 blur-2xl transition duration-500 group-hover:opacity-100 dark:from-primary/30 dark:to-[#1F8BC4]/20"
          />
          <div
            className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-slate-200/70 bg-white shadow-[0_18px_45px_-30px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-white dark:shadow-[0_0_45px_-10px_rgba(31,139,196,0.35)]"
            style={logoBackgroundStyle}
          >
            <Image
              src={projectData.imageUrl}
              alt={projectData.title}
              width={80}
              height={80}
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-grow flex-col text-slate-900 transition-colors dark:text-slate-100">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{projectData.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors dark:text-slate-200/90">
            {projectData.description}
          </p>
          {projectData.technologies?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2 text-xs font-semibold tracking-wide text-slate-500 transition-colors dark:text-slate-200">
              {projectData.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 uppercase text-slate-700 backdrop-blur transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                >
                  {technology}
                </li>
              ))}
            </ul>
          ) : null}
          {projectData.url ? (
            isExternalLink ? (
              <a
                href={projectData.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#1F8BC4] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(31,139,196,0.35)] transition duration-300 hover:shadow-[0_0_35px_rgba(31,139,196,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F8BC4]"
              >
                {projectData.cta ?? 'Ver proyecto'}
                <span aria-hidden className="text-base">↗</span>
              </a>
            ) : (
              <Link
                href={projectData.url}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#1F8BC4] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(31,139,196,0.35)] transition duration-300 hover:shadow-[0_0_35px_rgba(31,139,196,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F8BC4]"
              >
                {projectData.cta ?? 'Ver proyecto'}
                <span aria-hidden className="text-base">↗</span>
              </Link>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
