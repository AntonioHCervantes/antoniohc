'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, GraduationCap, Brain, FolderGit2, Mail } from 'lucide-react';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { href: '#hero', label: 'Inicio', icon: Home },
  { href: '#about', label: 'Sobre mí', icon: User },
  { href: '#experience', label: 'Experiencia', icon: Briefcase },
  { href: '#education', label: 'Educación', icon: GraduationCap },
  { href: '#skills', label: 'Habilidades', icon: Brain },
  { href: '#projects', label: 'Proyectos', icon: FolderGit2 },
  { href: '#contact', label: 'Contacto', icon: Mail },
];

export default function DrawerMenu({ open, onClose }: DrawerProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Panel */}
          <motion.aside
            className="fixed right-0 top-0 bottom-0 w-72 bg-background z-50 shadow-xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
          >
            <nav className="flex-1 overflow-y-auto py-8">
              <ul className="space-y-4 px-6">
                {links.map(({ href, label, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={onClose}
                      className={`flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors ${
                        pathname === href ? 'text-primary' : ''
                      }`}
                    >
                      <Icon size={22} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
