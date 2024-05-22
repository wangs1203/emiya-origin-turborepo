import type { ReactNode, HTMLAttributes } from 'react';
import type { SpinProps } from 'antd';

import { Spin, theme } from 'antd';
import clsx from 'clsx';

const { useToken } = theme;

export interface BaseLoaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /** 居中显示 */
  center?: boolean;
  /** 垂直排版 */
  vertical?: boolean;
  /** 是否显示loading */
  spinning?: boolean;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 文字内容 */
  tip?: ReactNode;
  /** 尺寸 */
  size?: SpinProps['size'];
  /** Omit<SpinProps, 'tip' | 'delay' | 'spinning' | 'size'> */
  spinProps?: Omit<SpinProps, 'tip' | 'delay' | 'spinning' | 'size'>;
}

/**
 * 组件级加载动画，支持自定义文字提示内容
 */
export function BaseLoader({
  spinning = true,
  center = false,
  vertical = true,
  tip = '加载中...',
  mask = true,
  spinProps,
  className,
  size = 'default',
  ...props
}: BaseLoaderProps): React.ReactNode {
  const { token } = useToken();
  return spinning ? (
    <div
      {...props}
      className={clsx([
        'em-base-loader',
        'em-gap-2',
        vertical ? 'em-inline-flex' : 'em-flex',
        {
          'em-justify-center em-items-center em-w-full em-h-full em-absolute em-z-10':
            center,
        },
        { 'em-bg-opacity-70 em-bg-white': mask && center },
        { 'em-flex-col': vertical },
        className,
      ])}
    >
      <Spin {...spinProps} size={size} />
      <div
        className={clsx([
          'em-flex em-items-center',
          {
            'em-text-xs': size === 'small',
            'em-text-sm': size === 'default',
            'em-text-base': size === 'large',
          },
        ])}
        style={{ color: token.colorPrimaryText }}
      >
        {tip}
      </div>
    </div>
  ) : null;
}
