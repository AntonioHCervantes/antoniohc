'use client';
import { Parallax } from 'react-scroll-parallax';
import { ReactNode } from 'react';

export default function ParallaxSection({ children, speed = -10, className = '' }: { children: ReactNode; speed?: number; className?: string; }) {
  return (
    <Parallax speed={speed} className={className}>
      {children}
    </Parallax>
  );
}
