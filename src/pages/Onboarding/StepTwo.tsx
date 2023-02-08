import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import * as css from './css';
import CodeInput from '../../components/CodeInput';
import { isObjectEmpty } from '../../utilities/functions';

interface OnboardingStepTwoValues {
  verificationCode: string;
}

const OnboardingStepTwo = () => {
  const initialValues: OnboardingStepTwoValues = {
    verificationCode: '',
  };

  const validationSchema = yup.object({
    verificationCode: yup.string().test('length', 'Must be exactly 6 characters', (value) => value?.length === 6),
  });

  const { values, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    onSubmit: ({ verificationCode }) => {
      console.log(verificationCode);
    },
  });

  const handleChange = (value: string) => setFieldValue('verificationCode', value);

  return (
    <div css={css.container}>
      <div css={css.content}>
        <h1 css={css.title}>What&apos;s the code?</h1>
        <div style={{ marginTop: '20px' }}>
          <p css={css.inputLabel}>
            Enter the code sent to <b>+1 123-456-7890</b>
          </p>
          <CodeInput value={values.verificationCode} handleChange={handleChange} />
          <p css={css.inputResendCode} style={{ marginTop: '20px', width: 'fit-content' }}>
            Resend code
          </p>
        </div>
        <button
          type="button"
          css={css.button}
          style={{ marginTop: '20px' }}
          disabled={!values.verificationCode || !isObjectEmpty(errors)}
          onClick={() => handleSubmit()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardingStepTwo;
