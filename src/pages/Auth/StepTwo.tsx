import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as css from './css';
import CodeInput from '../../components/CodeInput';
import { isObjectEmpty } from '../../utilities/common';
import { useAuthStore } from '../../store/authStore';

interface AuthStepTwoValues {
  otp: string;
}

const AuthStepTwo = () => {
  const { phone, finishUserAuth } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const initialValues: AuthStepTwoValues = {
    otp: '',
  };

  const validationSchema = yup.object({
    otp: yup.string().test('length', 'Must be exactly 6 characters', (value) => value?.length === 6),
  });

  const { values, errors, handleSubmit, isSubmitting, setFieldValue } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    onSubmit: async ({ otp }) => {
      await finishUserAuth({ phone, otp });
      navigate('/auth/step-three');
    },
  });

  const handleChange = (value: string) => setFieldValue('otp', value);

  useEffect(() => {
    if (!phone) navigate('/auth/step-one');
  }, []);

  return (
    <div css={css.container(106)}>
      <form css={css.content} onSubmit={handleSubmit}>
        <h1 css={css.title}>What&apos;s the code?</h1>
        <div>
          <p css={css.inputLabel}>
            Enter the code sent to <b>{phone}</b>
          </p>
          <CodeInput value={values.otp} handleChange={handleChange} />
          <p css={css.inputResendCode}>Resend code</p>
        </div>
        <button type="submit" css={css.button} disabled={!isObjectEmpty(errors) || isSubmitting}>
          Next
        </button>
      </form>
    </div>
  );
};

export default AuthStepTwo;
