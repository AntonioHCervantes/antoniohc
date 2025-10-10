'use client';

import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/lib/constants/navigation';

export function useDrawerMenu(onClose: () => void) {
  const pathname = usePathname();

  const handleNavigate = useCallback(
    (href: string) => {
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: 'smooth' });
      }
      onClose();
    },
    [onClose],
  );

  return {
    state: {
      pathname,
      links: navigationLinks,
    },
    actions: {
      handleNavigate,
    },
  } as const;
}
