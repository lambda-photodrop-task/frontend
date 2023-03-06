import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useUserStore } from '../../../store/userStore';
import { isObjectEmpty } from '../../../utilities/common';
import * as css from './css';

interface EmailSettingsValues {
  email: string;
}

const EmailSettings = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useUserStore((state) => state);

  const initialValues: EmailSettingsValues = {
    email: user?.email ?? '',
  };

  const validationSchema = yup.object({
    email: yup.string().trim().required("Field can't be empty"),
  });

  const { values, errors, handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: async ({ email }) => {
      await updateUser({ name: user?.name ?? null, email });
      navigate('/settings');
    },
  });

  return (
    <div css={css.centeredContainer}>
      <form onSubmit={handleSubmit}>
        <h2 css={css.title}>Your email</h2>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
          placeholder="johnsmith@example.com"
          css={css.input}
        />
        <button type="submit" css={css.button} disabled={!isObjectEmpty(errors) || isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default EmailSettings;
