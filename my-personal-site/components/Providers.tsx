'use client';

import { ReactNode } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import AnimatedBackground from './AnimatedBackground';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ParallaxProvider>
      <AnimatedBackground />
      {children}
    </ParallaxProvider>
  );
}
