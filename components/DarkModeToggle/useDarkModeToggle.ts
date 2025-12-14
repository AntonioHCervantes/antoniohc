'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function useDarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const enabled = mounted && resolvedTheme === 'dark';

  return {
    state: {
      enabled,
      mounted,
    },
    actions: {
      toggle: (value: boolean) => setTheme(value ? 'dark' : 'light'),
    },
  } as const;
}
