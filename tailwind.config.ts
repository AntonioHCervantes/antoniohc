import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: { DEFAULT: '#0b0f19', light: '#ffffff' },
        foreground: { DEFAULT: '#e2e8f0', light: '#111827' },
        primary: '#FF8C42',
      },
    },
  },
  plugins: [],
} satisfies Config;
