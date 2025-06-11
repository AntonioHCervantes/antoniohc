'use client';

import Image from 'next/image';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../components/projectsData';

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Hola, soy Antonio</h1>
        <p className="text-xl mb-6">Desarrollador Web apasionado por la tecnología</p>
        <button
          className="px-6 py-3 bg-foreground text-background rounded hover:opacity-80 transition"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Conóceme
        </button>
      </section>

      <section id="about" className="max-w-2xl w-full px-4 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Acerca de mí</h2>
        <p className="mb-4">
          {showMore
            ? 'Soy un desarrollador con experiencia en múltiples tecnologías y me encanta crear aplicaciones web modernas e interactivas.'
            : 'Soy un desarrollador con experiencia en múltiples tecnologías.'}
        </p>
        <button
          className="text-blue-600 underline"
          onClick={() => setShowMore(!showMore)}
        >
          Mostrar {showMore ? 'menos' : 'más'}
        </button>
      </section>

      <section id="projects" className="w-full px-4 py-20 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">Proyectos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-lg w-full px-4 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <form className="space-y-4">
          <input className="w-full border rounded p-2" type="text" placeholder="Nombre" />
          <input className="w-full border rounded p-2" type="email" placeholder="Correo" />
          <textarea className="w-full border rounded p-2" rows={4} placeholder="Mensaje" />
          <button type="submit" className="px-6 py-2 bg-foreground text-background rounded hover:opacity-80 transition">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
