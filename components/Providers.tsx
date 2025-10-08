'use client';

import { ReactNode } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'next-themes';
import AnimatedBackground from './AnimatedBackground';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ParallaxProvider>
        <AnimatedBackground />
        {children}
      </ParallaxProvider>
    </ThemeProvider>
  );
}
