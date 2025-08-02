'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import DrawerMenu from './DrawerMenu';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-30 backdrop-blur-md bg-background/70 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="#hero" className="text-xl font-bold">Mi Sitio</Link>

        <div className="flex items-center gap-4">
          {/* DarkMode toggle */}
          <DarkModeToggle />

          {/* Botón Hamburguesa */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
            className="p-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Drawer */}
      <DrawerMenu open={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
