'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import DrawerMenu from './DrawerMenu';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-30">
        <div className="flex items-center justify-end gap-4 p-4">
          {/* DarkMode toggle */}
          <DarkModeToggle />

          {/* Botón Hamburguesa */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
            className="p-2 hover:text-primary"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Menú a pantalla completa */}
      <DrawerMenu open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
