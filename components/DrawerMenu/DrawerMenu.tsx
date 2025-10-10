'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useDrawerMenu } from './useDrawerMenu';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function DrawerMenu({ open, onClose }: DrawerProps) {
  const {
    state: { links, pathname },
    actions: { handleNavigate },
  } = useDrawerMenu(onClose);

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="space-y-8 text-2xl font-medium">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => handleNavigate(href)}
                  className={`flex items-center gap-3 hover:text-primary ${pathname === href ? 'text-primary' : ''}`}
                >
                  <Icon size={24} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
