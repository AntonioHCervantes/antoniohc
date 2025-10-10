'use client';

import { useCallback, useState } from 'react';

export function useHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return {
    state: {
      isOpen,
    },
    actions: {
      openMenu,
      closeMenu,
    },
  } as const;
}
