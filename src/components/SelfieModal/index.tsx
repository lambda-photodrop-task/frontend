import React, { ChangeEvent, forwardRef, useImperativeHandle, useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import Modal from '../Modal';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-icon.svg';

import * as css from './css';
import { UploadSelfie } from '../../types/user';
import { getImageDimensions, handleDeletePreviousFile, readFile, resizeImage } from '../../utilities/common';

export interface SelfieModalRef {
  load: (file: File) => void;
}

interface SelfieModalProps {
  onChange: ({ top, left, file }: UploadSelfie) => void;
  handleSelfieCrop: (e: ChangeEvent<HTMLInputElement>) => void;
  loading?: boolean;
}

const SelfieModal = forwardRef<SelfieModalRef, SelfieModalProps>(({ onChange, loading, handleSelfieCrop }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [imageOrientation, setImageOrientation] = useState('');
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const [croppedAreadPixels, setCroppedAreadPixels] = useState<Area>({ width: 0, height: 0, x: 0, y: 0 });
  const [file, setFile] = useState<File | undefined>(undefined);
  const [src, setSrc] = useState<string | undefined>(undefined);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  useImperativeHandle(ref, () => ({
    load: async (file: File) => onLoad(file),
  }));

  const onLoad = async (file: File) => {
    setZoom(1);
    setCrop({ x: 0, y: 0 });

    let imageDataUrl = (await readFile(file)) as string;

    const { orientation } = await getImageDimensions(imageDataUrl);
    setImageOrientation(orientation);

    const resizedImg = (await resizeImage(file, orientation)) as File;
    imageDataUrl = (await readFile(resizedImg)) as string;

    const { width, height } = await getImageDimensions(imageDataUrl);
    setImageDimensions({ width, height });

    setFile(resizedImg);
    setSrc(imageDataUrl);

    setIsModalOpen(true);
  };

  const onSubmit = () => {
    if (file) {
      onChange({ top: croppedAreadPixels.y, left: croppedAreadPixels.x, file });
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
        <div css={css.cropperContainer}>
          <div
            css={css.cropper({
              imageOrientation,
              imageWidth: imageDimensions.width,
              imageHeight: imageDimensions.height,
            })}
          >
            <Cropper
              image={src}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              showGrid={false}
              onCropChange={(crop) => setCrop({ x: crop.x, y: crop.y })}
              onZoomChange={(zoom) => setZoom(zoom)}
              cropSize={{ width: 285, height: 285 }}
              onCropAreaChange={(_, croppedAreadPixels) => setCroppedAreadPixels(croppedAreadPixels)}
            />
          </div>
        </div>
      </div>
      <div css={css.modalFooter}>
        <label css={css.button('secondary')}>
          Retake
          <input type="file" accept="image/*" onChange={handleSelfieCrop} onClick={handleDeletePreviousFile} />
        </label>
        <button css={css.button} type="button" onClick={onSubmit}>
          {loading ? 'Loading...' : 'Save'}
        </button>
      </div>
    </Modal>
  );
});

export default SelfieModal;
