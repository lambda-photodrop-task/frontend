import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useUserStore } from '../../../store/userStore';
import { isObjectEmpty } from '../../../utilities/common';
import * as css from './css';

interface NameSettingsValues {
  name: string;
}

const NameSettings = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useUserStore((state) => state);

  const initialValues: NameSettingsValues = {
    name: user?.name ?? '',
  };

  const validationSchema = yup.object({
    name: yup.string().trim().required("Field can't be empty"),
  });

  const { values, errors, handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: async ({ name }) => {
      await updateUser({ name, email: user?.email ?? null });
      navigate('/settings');
    },
  });

  return (
    <div css={css.centeredContainer}>
      <form onSubmit={handleSubmit}>
        <h2 css={css.title}>Your name</h2>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          placeholder="John Smith"
          css={css.input}
        />
        <button type="submit" css={css.button} disabled={!isObjectEmpty(errors) || isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default NameSettings;
