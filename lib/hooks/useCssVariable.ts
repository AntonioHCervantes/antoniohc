'use client';

import { useEffect, useState } from 'react';

export function useCssVariable(variableName: string, initialValue: string) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const root = document.documentElement;

    const updateValue = () => {
      const computed = getComputedStyle(root).getPropertyValue(variableName).trim();
      if (computed) {
        setValue(computed);
      }
    };

    updateValue();

    const observer = new MutationObserver(updateValue);
    observer.observe(root, { attributes: true, attributeFilter: ['style', 'class'] });

    return () => observer.disconnect();
  }, [variableName]);

  return {
    state: {
      value,
    },
    actions: {
      setValue,
    },
  } as const;
}
