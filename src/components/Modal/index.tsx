import React, { FC, useEffect } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import * as css from './css';

interface ModalProps extends ReactModalProps {
  modalBodyCss: any;
}

const Modal: FC<ModalProps> = ({ isOpen, onRequestClose, modalBodyCss, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <ReactModal
      onRequestClose={onRequestClose}
      appElement={document.getElementById('root') || undefined}
      overlayElement={(props, contentElement) => (
        <div css={css.modal} {...props}>
          {contentElement}
        </div>
      )}
      isOpen={isOpen}
      css={modalBodyCss}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
