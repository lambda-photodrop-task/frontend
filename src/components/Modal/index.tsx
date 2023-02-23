import React, { FC, useEffect } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import * as css from './css';

interface ModalProps extends ReactModalProps {
  modalBodyCss: any;
}

const Modal: FC<ModalProps> = ({ isOpen, onRequestClose, modalBodyCss, children }) => {
  useEffect(() => {
    document.body.style.position = isOpen ? 'hidden' : 'unset';
    document.body.style.overflow = isOpen ? 'relative' : 'unset';
  }, [isOpen]);

  return (
    <ReactModal
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
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
