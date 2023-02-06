import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import * as css from './css';

const OnboardingStepTwo = () => {
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
        <h1 css={css.title}>What&apos;s the code?</h1>
        <div style={{ marginTop: '20px' }}>
          <p css={css.inputLabel}>
            Enter the code sent to <b>+1 123-456-7890</b>
          </p>
          <p css={css.inputResendCode} style={{ marginTop: '20px' }}>
            Resend code
          </p>
        </div>
        <button type="button" css={css.button} style={{ marginTop: '20px' }} disabled>
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardingStepTwo;
