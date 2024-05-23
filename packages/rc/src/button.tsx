'use client';

import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export function Button({
  children,
  className,
  appName,
}: ButtonProps): React.ReactElement {
  return (
    <button
      className={className}
      onClick={() => {
        // eslint-disable-next-line no-alert -- testing
        alert(`Hello from your ${appName} app!`);
      }}
      type="button"
    >
      {children}
    </button>
  );
}
