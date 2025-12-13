'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import Tilt from 'react-parallax-tilt';
import { useExperienceTimeline } from './useExperienceTimeline';

type Experience = {
  title: string;
  company: string;
  description: string;
  date: string;
};

type ExperienceCardProps = {
  experience: Experience;
  side: 'left' | 'right' | 'mobile';
};

function ExperienceCard({ experience, side }: ExperienceCardProps) {
  const tiltClassName = clsx(
    'group relative block w-full rounded-3xl transition-transform duration-500',
    'md:w-auto md:max-w-[420px]',
    side === 'left'
      ? 'md:mr-auto md:pl-10 md:text-right'
      : side === 'right'
        ? 'md:ml-auto md:pr-10 md:text-left'
        : 'text-left'
  );

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.18}
      glareBorderRadius="24px"
      className={tiltClassName}
      scale={1.02}
    >
      <article
        className={clsx(
          'relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-background/95 via-background/70 to-background/95 p-8 shadow-[0_35px_120px_-60px_rgba(255,140,66,0.65)] backdrop-blur-2xl transition-all duration-500',
          'before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-primary/0 before:via-primary before:to-primary/0 before:content-[""]',
          'after:absolute after:-right-24 after:-top-24 after:h-48 after:w-48 after:rounded-full after:bg-primary/10 after:blur-3xl after:content-[""]',
          'group-hover:-translate-y-1 group-hover:shadow-[0_45px_140px_-70px_rgba(255,140,66,0.85)]',
          side === 'left' && 'md:text-right',
          side === 'right' && 'md:text-left'
        )}
      >
        <div
          className={clsx(
            'flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary/80',
            side === 'left' ? 'md:justify-end' : 'md:justify-start'
          )}
        >
          <span className="rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[0.65rem] text-primary">
            {experience.company}
          </span>
          <span className="text-[0.6rem] text-foreground/60">{experience.date}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-foreground md:text-[1.75rem]">
          {experience.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-base">
          {experience.description}
        </p>
      </article>
    </Tilt>
  );
}

export default function ExperienceTimeline() {
  const {
    state: { experiences },
  } = useExperienceTimeline();

  return (
    <section id="experience" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="mb-20 text-center text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
          <span className="bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">
            Experiencia
          </span>
        </h2>
        <div className="relative flex flex-col gap-20">
          <motion.span
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 origin-top bg-gradient-to-b from-transparent via-primary/40 to-transparent md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
          {experiences.map((experience, index) => {
            const side: ExperienceCardProps['side'] = index % 2 === 0 ? 'left' : 'right';

            return (
              <motion.div
                key={experience.title}
                className="relative"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
              >
                <div className="grid gap-y-10 md:grid-cols-[minmax(0,1fr)_140px_minmax(0,1fr)] md:items-center md:gap-x-0">
                  <div className="hidden md:flex md:justify-end">
                    {side === 'left' ? (
                      <div className="relative flex w-full max-w-[420px] justify-end">
                        <ExperienceCard experience={experience} side="left" />
                        <span className="pointer-events-none absolute right-[-70px] top-1/2 hidden h-[2px] w-[70px] -translate-y-1/2 bg-gradient-to-r from-primary/0 via-primary/50 to-primary md:block" />
                      </div>
                    ) : (
                      <div aria-hidden className="h-[1px]" />
                    )}
                  </div>
                  <div className="relative flex items-center justify-center">
                    <motion.span
                      className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/70 bg-background shadow-[0_0_28px_rgba(255,140,66,0.45)]"
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
                    >
                      <span className="h-3 w-3 rounded-full bg-primary" />
                    </motion.span>
                  </div>
                  <div className="hidden md:flex md:justify-start">
                    {side === 'right' ? (
                      <div className="relative flex w-full max-w-[420px] justify-start">
                        <span className="pointer-events-none absolute left-[-70px] top-1/2 hidden h-[2px] w-[70px] -translate-y-1/2 bg-gradient-to-l from-primary/0 via-primary/50 to-primary md:block" />
                        <ExperienceCard experience={experience} side="right" />
                      </div>
                    ) : (
                      <div aria-hidden className="h-[1px]" />
                    )}
                  </div>
                  <div className="md:hidden">
                    <ExperienceCard experience={experience} side="mobile" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
