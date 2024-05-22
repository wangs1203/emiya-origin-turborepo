import type { HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';
import './container.less';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  full?: boolean;
  shadow?: boolean;
}

export function Container({
  children,
  full = false,
  shadow = false,
  className,
  ...props
}: ContainerProps): React.ReactElement {
  return (
    <div className={clsx('em-container', className, { full })}>
      <div
        className={clsx('em-container__content', {
          'em-rounded-md em-shadow-[0_0_6px_#a1a0a0]': !full && shadow,
        })}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
