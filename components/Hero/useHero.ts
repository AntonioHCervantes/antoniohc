'use client';

import { useTypewriter } from 'react-simple-typewriter';
import { useSmoothScrollToId } from '@/lib/hooks/useSmoothScrollToId';

export function useHero() {
  const [text] = useTypewriter({
    words: [
      'Lidero equipos de desarrollo',
      'Domino tecnologías web',
      'Integro IA con GitHub Copilot',
    ],
    loop: 0,
  });

  const { actions: smoothActions } = useSmoothScrollToId();

  return {
    state: {
      text,
    },
    actions: {
      scrollToAbout: () => smoothActions.scrollToId('about'),
    },
  } as const;
}
