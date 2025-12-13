import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectDetail, projectDetails } from '@/data/projects';

const gradientBackground =
  'absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950';

const radialBlur = 'absolute h-[32rem] w-[32rem] rounded-full blur-3xl opacity-50';

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado | Portfolio de Antonio',
      description: 'El proyecto solicitado no está disponible.',
    };
  }

  return {
    title: `${project.title} | Portfolio de Antonio`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className={gradientBackground}>
        <div className={`${radialBlur} left-[-10rem] top-[-8rem] bg-primary/20 dark:bg-primary/15`} />
        <div className={`${radialBlur} right-[-12rem] top-[14rem] bg-[#1F8BC4]/20 dark:bg-[#1F8BC4]/15`} />
        <div className={`${radialBlur} bottom-[-10rem] left-[20%] bg-primary/10 dark:bg-primary/10`} />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 md:px-12">
        <header className="space-y-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-[#166a95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span aria-hidden>←</span> Volver a proyectos
          </Link>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_24px_90px_-55px_rgba(15,23,42,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_120px_-75px_rgba(0,0,0,0.9)]">
            <div className="inline-flex w-fit items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Proyecto destacado
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">{project.title}</h1>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-200/90">
                {project.summary}
              </p>
            </div>
            {project.technologies?.length ? (
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 backdrop-blur transition-colors dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-[0_18px_70px_-55px_rgba(15,23,42,0.4)] backdrop-blur transition duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_95px_-70px_rgba(0,0,0,0.9)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300/90">
                    {result.label}
                  </p>
                  <p className="mt-3 text-3xl font-black text-slate-900 dark:text-white">{result.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-200/90">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_28px_100px_-70px_rgba(15,23,42,0.4)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_40px_130px_-90px_rgba(0,0,0,1)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-[#1F8BC4]/0 opacity-60" />
            <figure className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50 p-6 dark:border-white/10 dark:from-white/5 dark:to-white/5">
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                width={960}
                height={640}
                className="h-auto w-full object-contain"
                priority
              />
            </figure>
          </div>

          <div className="space-y-6">
            {project.content.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_24px_90px_-60px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_36px_120px_-85px_rgba(0,0,0,0.95)]"
              >
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200/90">{section.body}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_28px_100px_-70px_rgba(15,23,42,0.4)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_40px_130px_-90px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                Explora más
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-900 dark:text-white">Otros proyectos destacados</h2>
              <p className="mt-2 text-base text-slate-700 dark:text-slate-200/90">
                Continúa explorando el resto de mi trabajo con accesos directos a otros casos de estudio.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectDetails
              .filter(({ slug: otherSlug }) => otherSlug !== project.slug)
              .slice(0, 3)
              .map((otherProject) => (
                <Link
                  key={otherProject.slug}
                  href={`/projects/${otherProject.slug}`}
                  className="group relative flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-[0_22px_80px_-65px_rgba(15,23,42,0.38)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_26px_95px_-70px_rgba(31,139,196,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-white/10 dark:bg-white/5 dark:shadow-[0_32px_110px_-85px_rgba(0,0,0,0.95)]"
                >
                  <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-primary/0 via-primary/70 to-[#1F8BC4]/0 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{otherProject.title}</h3>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2">
                        Ver detalle
                        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200/90">{otherProject.summary}</p>
                    {otherProject.technologies?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {otherProject.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
                          >
                            {tech}
                          </span>
                        ))}
                        {otherProject.technologies.length > 3 ? (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                            +{otherProject.technologies.length - 3}
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
