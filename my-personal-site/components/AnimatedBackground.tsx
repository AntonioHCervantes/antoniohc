'use client';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [color, setColor] = useState('#171717');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    const updateColor = () => {
      const val = getComputedStyle(root).getPropertyValue('--foreground').trim();
      if (val) setColor(val);
    };
    updateColor();
    const observer = new MutationObserver(updateColor);
    observer.observe(root, { attributes: true, attributeFilter: ['style'] });
    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 50 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          links: { enable: true, color, opacity: 0.4 },
          color: { value: color },
        },
      }}
    />
  );
}
