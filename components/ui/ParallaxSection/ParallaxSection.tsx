'use client';

import { Parallax } from 'react-scroll-parallax';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  speed?: number;
  className?: string;
  wrapperClassName?: string;
};

export default function ParallaxSection({
  children,
  speed = -10,
  className = '',
  wrapperClassName = '',
}: Props) {
  return (
    <div className={`relative w-full ${wrapperClassName}`}>
      <Parallax speed={speed} className={`block w-full ${className}`}>
        {children}
      </Parallax>
    </div>
  );
}
