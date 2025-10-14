import type { SVGProps } from 'react';

export function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M4.5 3h4.2l3.3 4.8L15.6 3h3.9l-5.52 7.44L19.5 21h-4.2l-3.54-5.22L7.8 21H3.9l5.82-7.86L4.5 3z"
      />
    </svg>
  );
}
