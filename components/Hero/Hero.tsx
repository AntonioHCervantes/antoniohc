'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cursor } from 'react-simple-typewriter';
import { useHero } from './useHero';

export default function Hero() {
  const {
    state: { text },
    actions: { scrollToAbout },
  } = useHero();

  return (
    <motion.section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center p-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-full space-y-6 text-center">
        <div className="relative mx-auto mb-8 h-40 w-40">
          <span className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl" />
          <Image
            src="/images/foto_antonio.jpg"
            alt="Antonio Hernández Cervantes"
            fill
            sizes="160px"
            priority
            className="relative z-10 rounded-full border-4 border-primary object-cover shadow-xl"
          />
        </div>
        <h1 className="text-5xl font-bold md:text-6xl">Antonio Hernández Cervantes</h1>
        <h2 className="text-2xl md:text-3xl">Líder Técnico, experto en tecnologías Web</h2>
        <p className="text-xl md:text-2xl">
          <span>{text}</span>
          <Cursor cursorStyle="|" />
        </p>
        <button
          className="mx-auto rounded bg-primary px-6 py-3 text-white transition hover:opacity-80"
          onClick={scrollToAbout}
        >
          Conóceme
        </button>
      </div>
    </motion.section>
  );
}