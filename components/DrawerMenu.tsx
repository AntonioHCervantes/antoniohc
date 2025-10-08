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
        <motion.nav
          className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="space-y-8 text-2xl font-medium">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={`flex items-center gap-3 hover:text-primary ${
                    pathname === href ? 'text-primary' : ''
                  }`}
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
