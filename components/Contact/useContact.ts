import { Github, Linkedin } from 'lucide-react';

import { XLogo } from './icons';

const SOCIAL_LINKS = [
  {
    href: 'https://x.com/antoniohc',
    label: 'Abrir perfil en X',
    Icon: XLogo,
  },
  {
    href: 'https://www.linkedin.com/in/antoniohc/',
    label: 'Abrir perfil en LinkedIn',
    Icon: Linkedin,
  },
  {
    href: 'https://github.com/antoniohc',
    label: 'Abrir perfil en GitHub',
    Icon: Github,
  },
] as const;

const SUBTITLE = 'Puedes contactar conmigo a través de las siguientes plataformas:';

export function useContact() {
  return {
    state: {
      subtitle: SUBTITLE,
      socialLinks: SOCIAL_LINKS,
    },
    actions: {},
  } as const;
}
