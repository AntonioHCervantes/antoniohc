'use client';
import { useState } from 'react';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="w-full fixed top-0 left-0 bg-background/80 backdrop-blur z-10">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4 relative">
        <span className="font-bold">Mi Sitio</span>
        <button className="text-2xl" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
        <ul
          className={`absolute top-full left-0 right-0 bg-background shadow p-4 flex flex-col items-start space-y-2 text-sm ${open ? 'block' : 'hidden'}`}
        >
          <li><Link href="#hero" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link href="#about" onClick={() => setOpen(false)}>Sobre mí</Link></li>
          <li><Link href="#timeline" onClick={() => setOpen(false)}>Experiencia</Link></li>
          <li><Link href="#education" onClick={() => setOpen(false)}>Educación</Link></li>
          <li><Link href="#skills" onClick={() => setOpen(false)}>Habilidades</Link></li>
          <li><Link href="#projects" onClick={() => setOpen(false)}>Proyectos</Link></li>
          <li><Link href="#contact" onClick={() => setOpen(false)}>Contacto</Link></li>
          <li className="md:ml-4"><DarkModeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}
