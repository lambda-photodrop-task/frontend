import React, { FC, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Modal from '../Modal';
import { usePhotographerStore } from '../../store/photographerStore';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-icon.svg';

import * as css from './css';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  albumId: string;
}

const PhotoModal: FC<PhotoModalProps> = ({ isOpen, onClose, albumId }) => {
  const { addPhotos } = usePhotographerStore((state) => state);

  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted(files) {
      setFiles(files);
    },
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpeg', '.jpg'] },
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    await addPhotos(albumId, files);
    setIsLoading(false);
    onClose();
  };

  useEffect(() => {
    setFiles([]);
    setIsLoading(false);
  }, [isOpen]);

  return (
    <Modal modalBodyCss={css.modal} isOpen={isOpen} onRequestClose={onClose}>
      <div css={css.header}>
        <CloseIcon onClick={onClose} />
        <div css={css.modalTitle}>Add photos to album</div>
      </div>
      <div {...getRootProps()} css={css.dropzone}>
        <input {...getInputProps()} />
        <p>Drag and drop some photos here, or click to select</p>
      </div>
      <div style={{ marginTop: '14px' }}>
        {files.map((file) => (
          <p key={file.name}>{file.name.length > 50 ? `${file.name.substring(0, 50)}...` : file.name}</p>
        ))}
      </div>
      <button type="button" css={css.button} onClick={handleSubmit} disabled={!files.length || isLoading}>
        {isLoading ? 'Loading...' : 'Save'}
      </button>
    </Modal>
  );
};

export default PhotoModal;
