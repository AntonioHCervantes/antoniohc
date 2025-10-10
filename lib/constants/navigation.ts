import { Brain, Briefcase, FolderGit2, GraduationCap, Home, Mail, User } from 'lucide-react';

export const navigationLinks = [
  { href: '#hero', label: 'Inicio', icon: Home },
  { href: '#about', label: 'Sobre mí', icon: User },
  { href: '#experience', label: 'Experiencia', icon: Briefcase },
  { href: '#education', label: 'Educación', icon: GraduationCap },
  { href: '#skills', label: 'Habilidades', icon: Brain },
  { href: '#projects', label: 'Proyectos', icon: FolderGit2 },
  { href: '#contact', label: 'Contacto', icon: Mail },
] as const;
