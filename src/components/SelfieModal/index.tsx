import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Cropper, { Point } from 'react-easy-crop';
import Modal from '../Modal';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-icon.svg';

import * as css from './css';
import { readFile, resizeImage } from '../../utilities/common';
import { UploadSelfie } from '../../types/user';

export interface SelfieModalRef {
  load: (file: File) => void;
}

interface SelfieModalProps {
  onChange: ({ top, left, file }: UploadSelfie) => void;
}

const SelfieModal = forwardRef<SelfieModalRef, SelfieModalProps>(({ onChange }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [file, setFile] = useState<File | undefined>(undefined);
  const [src, setSrc] = useState<string | undefined>(undefined);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  useImperativeHandle(ref, () => ({
    load: async (file: File) => onLoad(file),
  }));

  const onLoad = async (file: File) => {
    const resizedImg = (await resizeImage(file)) as File;
    const imageDataUrl = (await readFile(resizedImg)) as string;

    setFile(resizedImg);
    setSrc(imageDataUrl);

    setIsModalOpen(true);
  };

  const onSubmit = () => {
    if (file) {
      onChange({ top: Math.trunc(Math.abs(crop.y)), left: Math.trunc(Math.abs(crop.x)), file });
    }
    setIsModalOpen(false);
  };

  return (
    <Modal modalBodyCss={css.modal} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
      <div css={css.header}>
        <CloseIcon onClick={() => setIsModalOpen(false)} />
        <div css={css.modalTitle}>Take selfie</div>
      </div>
      <div css={css.modalBody}>
        <div css={css.modalText}>Drag and zoom image to crop</div>
        <div css={css.cropperContainer}>
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={(crop) => setCrop(crop)}
            onZoomChange={(zoom) => setZoom(zoom)}
            cropShape="round"
            showGrid={false}
          />
        </div>
      </div>
      <div css={css.modalFooter}>
        <button css={css.button('secondary')} type="button">
          Retake
        </button>
        <button css={css.button} type="button" onClick={onSubmit}>
          Save
        </button>
      </div>
    </Modal>
  );
});

export default SelfieModal;
