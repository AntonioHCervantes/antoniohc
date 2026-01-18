import type { Metadata } from 'next';
import Link from 'next/link';

const gradientBackground =
  'absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950';

const radialBlur = 'absolute h-[32rem] w-[32rem] rounded-full blur-3xl opacity-50';

const highlights = [
  { label: 'Rol principal', value: 'Teach Lead' },
  { label: 'Foco profesional', value: 'Aplicaciones Web' },
  { label: 'Valor diferencial', value: 'Experto en IA' },
];

const storySections = [
  {
    title: 'Los primeros pasos',
    paragraphs: [
      '¡Hola! Soy Antonio Hernández Cervantes, ingeniero informático especializado en tecnologías web frontend. Desde mis inicios he buscado equilibrar liderazgo técnico, diseño de experiencias y construcción de productos digitales que aporten claridad y foco.',
      'Mi historia comienza en 2005 en la Universidad de Almería, donde cursé Ingeniería Técnica en Informática de Sistemas. En esa etapa confirmé mi pasión por el frontend y la forma en la que la web podía transformar la manera en la que trabajamos.',
    ],
  },
  {
    title: 'Universidad, investigación y docencia',
    paragraphs: [
      'En 2009 continué mi formación en la Universidad de Castilla-La Mancha con el Máster en Tecnologías Web. Al mismo tiempo me incorporé al grupo ISE Research, participando en proyectos de I+D centrados en tecnologías web, usabilidad y experiencia de usuario.',
      'Tras el máster cursé el Grado en Ingeniería Informática (2010–2012) y, con 22 años, empecé a impartir docencia en el Máster en Tecnologías Web de la UCLM. Durante seis años enseñé frontend y tutoricé proyectos, además de impartir cursos online certificados por la Universidad.',
    ],
  },
  {
    title: 'Empresa y emprendimiento',
    paragraphs: [
      'En 2013 di el salto a la empresa trabajando en Marpadal Interactive Media como desarrollador web frontend, compaginándolo con la docencia.',
      'En 2016 fundé Deddian Technology S.L. junto a cinco compañeros. Como CTO y director de proyectos web lideré equipos remotos y desarrollé el frontend de múltiples productos digitales, consolidando mi experiencia en coordinación técnica y trabajo distribuido.',
    ],
  },
  {
    title: 'Evolución en proyectos de producto',
    paragraphs: [
      'Desde septiembre de 2017 trabajé en Intercaso como programador senior en remoto, participando en proyectos con React, React Native y Redux.',
      'En noviembre de 2021 me incorporé a Bahía Software como analista sénior y líder técnico, coordinando y supervisando equipos de desarrollo web frontend.',
    ],
  },
  {
    title: 'Presente y visión',
    paragraphs: [
      'Actualmente sigo centrado en el desarrollo de soluciones web frontend con un enfoque claro en producto, experiencia de usuario y tecnologías que hacen el trabajo más humano. Me motiva crear herramientas rápidas, privadas y sin fricción.',
      'De esa visión nacen proyectos personales como CheckPlanner (open source, local-first y PWA), Smieals o Kuicco, además de iniciativas como Gift Ideas Finder y Board Game Finder. También he explorado el emprendimiento con Keep Calm Keep Working.',
    ],
  },
];

const timeline = [
  {
    period: '2005 – 2009',
    title: 'Ingeniería Técnica en Informática de Sistemas',
    description: 'Universidad de Almería. Primer contacto serio con el desarrollo web.',
  },
  {
    period: '2009 – 2010',
    title: 'Máster en Tecnologías Web',
    description: 'UCLM. Inicio en ISE Research y foco en usabilidad y UX.',
  },
  {
    period: '2010 – 2012',
    title: 'Grado en Ingeniería Informática',
    description: 'UCLM. Consolidación de bases técnicas.',
  },
  {
    period: '2010 – 2016',
    title: 'Profesor del Máster en Tecnologías Web',
    description: 'Docencia universitaria y tutorización de proyectos.',
  },
  {
    period: '2013 – 2015',
    title: 'Marpadal Interactive Media',
    description: 'Desarrollador web frontend en proyectos educativos.',
  },
  {
    period: '2016 – 2017',
    title: 'Deddian Technology',
    description: 'CTO y dirección de proyectos web en remoto.',
  },
  {
    period: '2017 – 2021',
    title: 'Intercaso',
    description: 'Senior frontend en proyectos con React y React Native.',
  },
  {
    period: '2021 – actualidad',
    title: 'Bahía Software',
    description: 'Líder técnico y analista sénior en equipos web.',
  },
];

const specialties = [
  'React / Next.js',
  'TypeScript',
  'Node.js',
  'PWA y offline-first',
  'UX, usabilidad y accesibilidad',
  'Liderazgo técnico',
  'IA aplicada',
  'Open source',
];

const projectHighlights = [
  {
    title: 'CheckPlanner',
    description: 'Planificador personal open source, local-first y PWA para ganar foco diario.',
  },
  {
    title: 'Smieals',
    description: 'Planificador de menús y recetas que conecta familias y listas de compra.',
  },
  {
    title: 'Kuicco',
    description: 'Álbum digital privado para compartir recuerdos familiares con control total.',
  },
  {
    title: 'Gift Ideas Finder',
    description: 'GPT con acciones para recomendar regalos reales según gustos y presupuesto.',
  },
  {
    title: 'Board Game Finder',
    description: 'Recomendador colaborativo de juegos de mesa con foco en descubrimiento rápido.',
  },
  {
    title: 'Keep Calm Keep Working',
    description: 'Emprendimiento de producto físico y estrategia en Amazon.',
  },
];

export const metadata: Metadata = {
  title: 'Biografía | Portfolio de Antonio',
  description:
    'Historia profesional y personal de Antonio Hernández Cervantes: formación, docencia, liderazgo técnico y proyectos web.',
};

export default function BiographyPage() {
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
            href="/#about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-[#166a95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span aria-hidden>←</span> Volver a Acerca de mí
          </Link>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_24px_90px_-55px_rgba(15,23,42,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_120px_-75px_rgba(0,0,0,0.9)]">
            <div className="inline-flex w-fit items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Biografía completa
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">Biografía</h1>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-200/90">
                He construido mi carrera entre la universidad, la investigación, la empresa y el
                emprendimiento. Hoy lidero equipos web y desarrollo productos digitales con foco en
                experiencia de usuario, claridad y tecnología con impacto real.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <span
                  key={highlight.label}
                  className="rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 backdrop-blur transition-colors dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
                >
                  {highlight.label}: {highlight.value}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {storySections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_24px_90px_-60px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_36px_120px_-85px_rgba(0,0,0,0.95)]"
              >
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-slate-700 dark:text-slate-200/90">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_24px_90px_-60px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_36px_120px_-85px_rgba(0,0,0,0.95)]">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Trayectoria en resumen</h2>
              <ul className="mt-5 space-y-4">
                {timeline.map((item) => (
                  <li key={item.title} className="border-l-2 border-primary/30 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {item.period}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-200/80">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_24px_90px_-60px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_36px_120px_-85px_rgba(0,0,0,0.95)]">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Especialidades</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_28px_100px_-70px_rgba(15,23,42,0.4)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_40px_130px_-90px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                Proyectos personales
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
                Productos que cuentan mi historia
              </h2>
              <p className="mt-2 text-base text-slate-700 dark:text-slate-200/90">
                Cada iniciativa resume una etapa: desde la investigación y la docencia, hasta el foco
                en productividad, privacidad y creación de productos digitales reales.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projectHighlights.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-[0_22px_80px_-65px_rgba(15,23,42,0.38)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_26px_95px_-70px_rgba(31,139,196,0.45)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_32px_110px_-85px_rgba(0,0,0,0.95)]"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200/90">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
