import React, { FC, useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Modal from '../Modal';
import { CreateAlbum } from '../../types/photographer';
import { usePhotographerStore } from '../../store/photographerStore';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-icon.svg';

import * as css from './css';
import { isObjectEmpty } from '../../utilities/common';

interface AlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlbumModal: FC<AlbumModalProps> = ({ isOpen, onClose }) => {
  const { createAlbum } = usePhotographerStore((state) => state);

  const initialValues: CreateAlbum = {
    name: '',
    location: '',
    price: 5.0,
  };

  const validationSchema = yup.object({
    name: yup.string().trim().required("Field can't be empty"),
    location: yup.string().trim().required("Field can't be empty"),
    price: yup.number().positive().required("Field can't be empty"),
  });

  const { values, errors, handleSubmit, handleChange, resetForm, isSubmitting } = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: async ({ name, location, price }) => {
      await createAlbum({ name, location, price });
      onClose();
    },
  });

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <Modal modalBodyCss={css.modal} isOpen={isOpen} onRequestClose={onClose}>
      <div css={css.header}>
        <CloseIcon onClick={onClose} />
        <div css={css.modalTitle}>Create new album</div>
      </div>
      <form css={css.modalBody} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          placeholder="Enter album name"
          css={css.input}
        />
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={values.location}
          placeholder="Enter album location"
          css={css.input}
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={values.price}
          placeholder="Enter album price"
          css={css.input}
        />
        <button type="submit" css={css.button} disabled={isSubmitting || !isObjectEmpty(errors) || !values.name}>
          {isSubmitting ? 'Loading...' : 'Save'}
        </button>
      </form>
    </Modal>
  );
};

export default AlbumModal;
