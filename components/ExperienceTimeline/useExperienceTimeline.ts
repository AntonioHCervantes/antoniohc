'use client';

import { experiences } from '@/data/experience';

export function useExperienceTimeline() {
  return {
    state: {
      experiences,
    },
    actions: {},
  } as const;
}
