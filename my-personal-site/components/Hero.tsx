'use client';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      'Lidero equipos de desarrollo',
      'Domino tecnologías web',
      'Integro IA con GitHub Copilot',
    ],
    loop: 0,
  });
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-full mx-auto text-center space-y-6">
        <div className="relative w-40 h-40 mx-auto mb-8">
          {/* glow animado opcional */}
          <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse"></span>
          <Image
            src="images/foto_antonio.jpeg"
            alt="Antonio Hernández Cervantes"
            fill
            sizes="160px"
            priority
            className="rounded-full object-cover border-4 border-primary shadow-xl relative z-10"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold">Hola, soy Antonio Hernández Cervantes</h1>
        <h2 className="text-2xl md:text-3xl">Líder Técnico, experto en tecnologías Web</h2>
        <p className="text-xl md:text-2xl">
          <span>{text}</span>
          <Cursor cursorStyle="|" />
        </p>
        <button
          className="mx-auto px-6 py-3 bg-foreground text-background rounded hover:opacity-80 transition"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Conóceme
        </button>
      </div>
    </motion.section>
  );
}
