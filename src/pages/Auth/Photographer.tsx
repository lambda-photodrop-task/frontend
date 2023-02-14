import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as css from './css';
import { useAuthStore } from '../../store/authStore';
import { isObjectEmpty } from '../../utilities/functions';

interface AuthPhotographerValues {
  login: string;
  password: string;
}

const AuthPhotographer = () => {
  const { initiateAuth } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const initialValues: AuthPhotographerValues = {
    login: '',
    password: '',
  };

  const validationSchema = yup.object({
    login: yup.string().trim().required("Field can't be empty"),
    password: yup.string().trim().required("Field can't be empty"),
  });

  const { values, errors, handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: async ({ login, password }) => {},
  });

  return (
    <div css={css.container}>
      <h1 css={css.title}>Photographer&apos;s login</h1>
      <form css={css.content} onSubmit={handleSubmit}>
        <div style={{ marginTop: '20px' }}>
          <input
            type="text"
            name="login"
            onChange={handleChange}
            value={values.login}
            placeholder="Enter your login"
            css={css.input}
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Enter your password"
            css={css.input}
            style={{ marginTop: '20px' }}
          />
        </div>
        <button type="submit" css={css.button} disabled={!isObjectEmpty(errors) || isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AuthPhotographer;
