import type { MouseEvent } from 'react';
import type { ModalProps } from './modal';

import { memo, forwardRef, useImperativeHandle, useCallback } from 'react';
import { useModalControl } from '@em-origin/hooks';

import { Modal } from './modal';

interface ControlledModalProps extends Omit<ModalProps, 'open'> {
  draggable?: boolean;
}

interface ControlledModalRefAttributes {
  show: () => void;
  close: () => void;
  open: boolean;
}

export const ControlledModal = memo(
  forwardRef<ControlledModalRefAttributes, ControlledModalProps>(
    function ControlledModal(
      { maskClosable = false, onCancel, ...props }: ControlledModalProps,
      ref,
    ) {
      const { modalProps, show, close } = useModalControl();

      const handleCancel = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
          modalProps.onCancel();
          onCancel?.(e);
        },
        [modalProps, onCancel],
      );

      useImperativeHandle(ref, () => {
        return {
          open: modalProps.open,
          show,
          close,
        };
      });

      return (
        <Modal
          {...props}
          {...modalProps}
          maskClosable={maskClosable}
          onCancel={handleCancel}
        />
      );
    },
  ),
);

// export { BaseModal };
// export type { IBaseModalProps, IModalProps, IModalRefAttributes };
