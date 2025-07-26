'use client';

export default function Hero() {

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">Hola, soy Antonio</h1>
      <p className="text-xl mb-6">Desarrollador Web apasionado por la tecnología</p>
      <button
        className="px-6 py-3 bg-foreground text-background rounded hover:opacity-80 transition"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Conóceme
      </button>
    </section>
  );
}
