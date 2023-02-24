import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import Modal from '../Modal';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-icon.svg';

import * as css from './css';
import { UploadSelfie } from '../../types/user';
import { getImageOrientation, readFile, resizeImage } from '../../utilities/common';

export interface SelfieModalRef {
  load: (file: File) => void;
}

interface SelfieModalProps {
  onChange: ({ top, left, file }: UploadSelfie) => void;
  loading?: boolean;
}

const SelfieModal = forwardRef<SelfieModalRef, SelfieModalProps>(({ onChange, loading }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageOrientation, setImageOrientation] = useState('');

  const [file, setFile] = useState<File | undefined>(undefined);
  const [src, setSrc] = useState<string | undefined>(undefined);
  const [croppedAreadPixels, setCroppedAreadPixels] = useState<Area>();
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  useImperativeHandle(ref, () => ({
    load: async (file: File) => onLoad(file),
  }));

  const onLoad = async (file: File) => {
    let imageDataUrl = (await readFile(file)) as string;

    const orientaion = await getImageOrientation(imageDataUrl);
    setImageOrientation(orientaion);

    const resizedImg = (await resizeImage(file, orientaion)) as File;
    imageDataUrl = (await readFile(resizedImg)) as string;

    setFile(resizedImg);
    setSrc(imageDataUrl);

    setIsModalOpen(true);
  };

  const onSubmit = () => {
    if (file) {
      onChange({ top: Math.trunc(Math.abs(croppedAreadPixels?.y!)), left: Math.trunc(Math.abs(crop.x)), file });
    }
  };

  return (
    <Modal modalBodyCss={css.modal} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
      <div css={css.header}>
        <CloseIcon onClick={() => setIsModalOpen(false)} />
        <div css={css.modalTitle}>Take selfie</div>
      </div>
      <div css={css.modalBody}>
        <div css={css.modalText}>Drag and zoom image to crop</div>
        <div css={css.cropperContainer(imageOrientation)}>
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={(crop) => setCrop({ x: crop.x < 0 ? crop.x : 0, y: crop.y })}
            onZoomChange={(zoom) => setZoom(zoom)}
            cropSize={{ width: 285, height: 285 }}
            onCropAreaChange={(_, croppedAreadPixels) => setCroppedAreadPixels(croppedAreadPixels)}
          />
        </div>
      </div>
      <div css={css.modalFooter}>
        <button css={css.button('secondary')} type="button">
          Retake
        </button>
        <button css={css.button} type="button" onClick={onSubmit}>
          {loading ? 'Loading...' : 'Save'}
        </button>
      </div>
    </Modal>
  );
});

export default SelfieModal;
