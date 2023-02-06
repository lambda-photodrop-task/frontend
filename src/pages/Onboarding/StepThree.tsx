import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import * as css from './css';
import BlankAvatar from '../../assets/images/BlankAvatar.png';
import { ReactComponent as PlusIcon } from '../../assets/images/plus-icon.svg';

const OnboardingStepThree = () => {
  const initialValues = {
    phoneNumber: '',
  };

  const validationSchema = yup.object({
    phoneNumber: yup.string().required("Field can't be empty"),
  });

  const { values, errors, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {},
  });

  return (
    <div css={css.container}>
      <div css={css.content}>
        <h1 css={css.title}>Add a selfie</h1>
        <div style={{ marginTop: '20px' }}>
          <p css={css.inputLabel}>A selfie allows your photos to be synced with your account.</p>
        </div>
        <div css={css.avatarContainer}>
          <img src={BlankAvatar} alt="Blank avatar" />
          <label css={css.avatarUpload}>
            <PlusIcon />
            <input type="file" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStepThree;
