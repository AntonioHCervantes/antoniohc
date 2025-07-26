import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-background/80 backdrop-blur z-10">
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold">Mi Sitio</span>
        <ul className="flex space-x-4 text-sm">
          <li><Link href="#hero">Inicio</Link></li>
          <li><Link href="#about">Sobre mí</Link></li>
          <li><Link href="#timeline">Experiencia</Link></li>
          <li><Link href="#skills">Habilidades</Link></li>
          <li><Link href="#projects">Proyectos</Link></li>
          <li><Link href="#contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
