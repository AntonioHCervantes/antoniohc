'use client';

import { useTheme } from 'next-themes';

export function useDarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const enabled = theme === 'dark';

  return {
    state: {
      enabled,
    },
    actions: {
      toggle: (value: boolean) => setTheme(value ? 'dark' : 'light'),
    },
  } as const;
}
