import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as css from './css';
import BlankAvatar from '../../assets/images/BlankAvatar.png';
import { ReactComponent as PlusIcon } from '../../assets/images/icons/plus-icon.svg';
import { useUserStore } from '../../store/userStore';

const AuthStepThree = () => {
  const { user, getUser } = useUserStore((state) => state);
  const navigate = useNavigate();

  const initialValues = {};

  const validationSchema = yup.object({
    phoneNumber: yup.string().required("Field can't be empty"),
  });

  const { values, errors, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {},
  });

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <div css={css.container(72)}>
      <div css={css.content}>
        <h1 css={css.title}>Add a selfie</h1>
        <div>
          <p css={css.inputLabel} style={{ textAlign: 'center' }}>
            A selfie allows your photos to be synced with your account.
          </p>
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

export default AuthStepThree;
