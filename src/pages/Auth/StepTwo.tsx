import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as css from './css';
import CodeInput from '../../components/CodeInput';
import { isObjectEmpty } from '../../utilities/functions';
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

  return (
    <div css={css.container}>
      <form css={css.content} onSubmit={handleSubmit}>
        <h1 css={css.title}>What&apos;s the code?</h1>
        <div style={{ marginTop: '20px' }}>
          <p css={css.inputLabel}>
            Enter the code sent to <b>{phone}</b>
          </p>
          <CodeInput value={values.otp} handleChange={handleChange} />
          <p css={css.inputResendCode} style={{ marginTop: '20px', width: 'fit-content' }}>
            Resend code
          </p>
        </div>
        <button type="submit" css={css.button} disabled={!isObjectEmpty(errors) || isSubmitting}>
          Next
        </button>
      </form>
    </div>
  );
};

export default AuthStepTwo;
