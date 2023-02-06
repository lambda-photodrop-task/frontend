import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import * as css from './css';

const OnboardingStepOne = () => {
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
        <h1 css={css.title}>Let&apos;s get started</h1>
        <div style={{ marginTop: '20px' }}>
          <p css={css.inputLabel}>
            <b>Enter your phone number</b>
          </p>
          <div style={{ marginTop: '18px' }} />
        </div>
        <button type="button" css={css.button} style={{ marginTop: '20px' }}>
          Create account
        </button>
        <p css={css.secondaryText} style={{ marginTop: '20px' }}>
          By proceeding, you consent to get WhatsApp or SMS messages, from PhotoDrop and its affiliates to the number
          provided. Text “STOP” to 89203 to opt out.
        </p>
      </div>
    </div>
  );
};

export default OnboardingStepOne;
