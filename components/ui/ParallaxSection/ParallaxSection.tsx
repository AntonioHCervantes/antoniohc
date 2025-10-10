'use client';

import { Parallax } from 'react-scroll-parallax';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export default function ParallaxSection({ children, speed = -10, className = '' }: Props) {
  return (
    <Parallax speed={speed} className={className}>
      {children}
    </Parallax>
  );
}
