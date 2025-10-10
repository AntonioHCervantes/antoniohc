import type { Project } from '@/lib/types/project';

export function useProjectCard(project: Project) {
  return {
    state: {
      project,
    },
    actions: {},
  } as const;
}
