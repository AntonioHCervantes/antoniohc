'use client';

export function useSmoothScrollToId() {
  const scrollToId = (id: string) => {
    if (typeof document === 'undefined') {
      return;
    }

    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    state: {},
    actions: {
      scrollToId,
    },
  } as const;
}
