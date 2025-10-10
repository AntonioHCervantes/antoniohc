'use client';

import Particles from 'react-tsparticles';
import { useAnimatedBackground } from './useAnimatedBackground';

export default function AnimatedBackground() {
  const {
    state: { color },
    actions: { handleInit },
  } = useAnimatedBackground();

  return (
    <Particles
      id="tsparticles"
      init={handleInit}
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
