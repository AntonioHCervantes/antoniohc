'use client';

import { Switch } from '@headlessui/react';
import { Moon, Sun } from 'lucide-react';
import { useDarkModeToggle } from './useDarkModeToggle';

export default function DarkModeToggle() {
  const {
    state: { enabled, mounted },
    actions: { toggle },
  } = useDarkModeToggle();

  if (!mounted) {
    return <span aria-hidden className="inline-block h-6 w-11 rounded-full bg-transparent" />;
  }

  return (
    <Switch
      checked={enabled}
      onChange={toggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full ${enabled ? 'bg-primary' : 'bg-gray-300'}`}
    >
      <span className="sr-only">Cambiar tema</span>
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      >
        {enabled ? <Moon size={14} className="mx-auto mt-0.5" /> : <Sun size={14} className="mx-auto mt-0.5" />}
      </span>
    </Switch>
  );
}
