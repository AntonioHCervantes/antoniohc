'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hola, soy Antonio</h1>
      <p className="text-xl md:text-2xl mb-6">Desarrollador Web apasionado por la tecnología</p>
      <button
        className="px-6 py-3 bg-foreground text-background rounded hover:opacity-80 transition"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Conóceme
      </button>
    </motion.section>
  );
}
