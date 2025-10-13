'use client';

import { ReactNode } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'next-themes';
import AnimatedBackground from '@/components/AnimatedBackground/AnimatedBackground';

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ParallaxProvider>
        <AnimatedBackground />
        {children}
      </ParallaxProvider>
    </ThemeProvider>
  );
}
