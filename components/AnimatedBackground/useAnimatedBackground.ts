'use client';

import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { useCssVariable } from '@/lib/hooks/useCssVariable';

export function useAnimatedBackground() {
  const { state: cssState } = useCssVariable('--foreground', '#171717');

  const handleInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return {
    state: {
      color: cssState.value,
    },
    actions: {
      handleInit,
    },
  } as const;
}
