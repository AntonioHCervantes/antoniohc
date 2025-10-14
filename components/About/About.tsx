import Image from 'next/image';

import { useAbout } from './useAbout';

export default function About() {
  const {
    state: { heading, subheading, introduction, paragraphs, highlights, portrait },
  } = useAbout();

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="mx-auto h-full w-full max-w-sm">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={520}
            height={640}
            priority
            className="h-auto w-full rounded-[2.25rem] object-cover shadow-2xl"
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
                className="rounded-2xl border border-zinc-200/70 bg-white/80 p-5 text-center shadow-sm transition-colors dark:border-white/10 dark:bg-white/5 dark:shadow-none"
              >
                <dt className="whitespace-pre-line text-xs font-medium uppercase tracking-[0.25em] text-foreground/60">
                  {label}
                </dt>
                <dd className="mt-3 whitespace-pre-line text-2xl font-semibold text-primary">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
