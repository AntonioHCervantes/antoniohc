'use client';

import { Menu } from 'lucide-react';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import DrawerMenu from '@/components/DrawerMenu/DrawerMenu';
import { useHeader } from './useHeader';

export default function Header() {
  const {
    state: { isOpen },
    actions: { openMenu, closeMenu },
  } = useHeader();

  return (
    <>
      <header className="fixed left-0 top-0 z-30 w-full">
        <div className="flex items-center justify-end gap-4 p-4">
          <DarkModeToggle />

          <button onClick={openMenu} aria-label="Abrir menú" className="p-2 hover:text-primary">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <DrawerMenu open={isOpen} onClose={closeMenu} />
    </>
  );
}
