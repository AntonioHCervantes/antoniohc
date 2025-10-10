'use client';

import { projects } from '@/data/projects';

export function useProjectsSection() {
  return {
    state: {
      projects,
    },
    actions: {},
  } as const;
}
