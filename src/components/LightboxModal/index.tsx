import React, { FC, useEffect, useState } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-icon.svg';
import { ReactComponent as DownloadIcon } from '../../assets/images/icons/download-icon.svg';
import { ReactComponent as ShareIcon } from '../../assets/images/icons/share-icon.svg';
import { getImageDimensions } from '../../utilities/common';

import * as css from './css';

interface LightboxModalProps extends ReactModalProps {
  image: string;
}

const LightboxModal: FC<LightboxModalProps> = ({ isOpen, onRequestClose, image }) => {
  const [imageOrientation, setImageOrientation] = useState('');

  const downloadImage = () => {
    const downloadLink = document.createElement('a');

    downloadLink.href = image;
    downloadLink.download = image.substring(image.lastIndexOf('/') + 1);

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const shareImage = async () => {
    const fileName = image.substring(image.lastIndexOf('/') + 1);
    const response = await fetch(image);
    const blob = await response.blob();
    const filesArray = [
      new File([blob], fileName, {
        type: 'image/jpeg',
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData);
  };

  useEffect(() => {
    const identifyImageOrientation = async () => {
      const { orientation } = await getImageDimensions(image);
      setImageOrientation(orientation);
    };

    identifyImageOrientation();
  }, [image]);

  return (
    <ReactModal
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
      onRequestClose={onRequestClose}
      appElement={document.getElementById('root') || undefined}
      overlayElement={(props, contentElement) => (
        <div css={css.backdrop} {...props}>
          {contentElement}
        </div>
      )}
      isOpen={isOpen}
      css={css.modal}
    >
      <div>
        <CloseIcon onClick={onRequestClose} css={css.closeIcon} />
        <div css={css.image(imageOrientation)}>
          <img src={image} alt="Enlarged Selection" />
        </div>
        <div css={css.footer}>
          <button type="button" css={css.downloadButton} onClick={downloadImage}>
            <DownloadIcon />
            Download
          </button>

          {!!navigator.canShare && (
            <button type="button" css={css.downloadButton} onClick={shareImage}>
              <ShareIcon />
              Share
            </button>
          )}

          <button type="button" css={css.button} onClick={() => window.open('https://frameology.com/', '_blank')}>
            See in a frame
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default LightboxModal;
