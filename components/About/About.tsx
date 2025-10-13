import Image from 'next/image';

import { useAbout } from './useAbout';

export default function About() {
  const {
    state: { heading, subheading, introduction, paragraphs, highlights, portrait },
  } = useAbout();

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 rounded-3xl border border-white/10 bg-slate-900/40 p-10 shadow-[0_25px_70px_rgba(15,23,42,0.35)] backdrop-blur-sm lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="relative mx-auto h-full w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/25 opacity-60 blur-3xl" aria-hidden />
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={520}
            height={640}
            priority
            className="relative z-10 h-auto w-full rounded-[2.25rem] object-cover shadow-2xl"
          />
        </div>
        <div className="space-y-8 text-left text-foreground">
          <header className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">{heading}</h2>
            <p className="text-xl font-semibold text-primary md:text-2xl">{subheading}</p>
            <p className="text-lg leading-relaxed text-foreground/80">{introduction}</p>
          </header>
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="grid gap-6 pt-4 sm:grid-cols-3">
            {highlights.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
              >
                <dt className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/60">
                  {label}
                </dt>
                <dd className="mt-3 text-2xl font-semibold text-primary">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
