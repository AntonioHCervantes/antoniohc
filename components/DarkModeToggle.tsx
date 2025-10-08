'use client';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const enabled = theme === 'dark';

  return (
    <Switch
      checked={enabled}
      onChange={(val) => setTheme(val ? 'dark' : 'light')}
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
