import type { ReactNode } from 'react';
import type { ModalProps as AntdModalProps } from 'antd';
import type { DraggableEvent, DraggableData } from 'react-draggable';

import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { Modal as AntdModal } from 'antd';
import Draggable from 'react-draggable';
import { prefixClass } from '@emiya-turbo-origin/utils';

const addPrefix = prefixClass('em-modal');

console.log(addPrefix('__content'));

export interface ModalProps extends AntdModalProps {
  draggable?: boolean;
}

export const Modal = memo(function BaseModal({
  width = '55vw',
  maskClosable = false,
  closable = true,
  draggable = false,
  closeIcon,
  title,
  modalRender,
  ...props
}: ModalProps) {
  const [dragDisabled, setDragDisabled] = useState(true);
  const draggleRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const titleMemoized = useMemo(
    () =>
      draggable ? (
        <div
          className="em-w-full em-cursor-move em-draggable-handle"
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events -- disable
          onMouseOut={() => {
            setDragDisabled(true);
          }}
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events -- disable
          onMouseOver={() => {
            dragDisabled && setDragDisabled(false);
          }}
        >
          {title}
        </div>
      ) : (
        title
      ),
    [draggable, title, dragDisabled],
  );

  const handleDragStart = (_e: DraggableEvent, data: DraggableData) => {
    const { clientWidth, clientHeight } =
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- 在一些特定的情况或旧的浏览器中，可能需要通过 document.body 来获取或操作页面内容
      document.documentElement || document.body;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) return;
    setBounds({
      left: -targetRect.left + data.x,
      top: -targetRect.top + data.y,
      right: clientWidth - (targetRect.right - data.x),
      bottom: clientHeight - (targetRect.bottom - data.y),
    });
  };

  const renderModal = useCallback(
    (modal: ReactNode) => {
      const innerModal = modalRender ? modalRender(modal) : modal;
      return draggable ? (
        <Draggable
          bounds={bounds}
          disabled={dragDisabled}
          handle=".em-draggable-handle"
          onStart={handleDragStart}
        >
          <div ref={draggleRef}>{innerModal}</div>
        </Draggable>
      ) : (
        innerModal
      );
    },
    [bounds, dragDisabled, draggable, handleDragStart, modalRender],
  );

  return (
    <AntdModal
      {...props}
      closable={closable}
      closeIcon={closeIcon}
      maskClosable={maskClosable}
      modalRender={renderModal}
      title={titleMemoized}
      width={width}
    />
  );
});
