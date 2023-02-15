import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { COUNTRIES, Country } from 'baseui/phone-input';
import phone from 'phone';
import { Link, useNavigate } from 'react-router-dom';
import * as css from './css';
import PhoneNumberInput from '../../components/PhoneInput';
import { isObjectEmpty } from '../../utilities/common';
import { useAuthStore } from '../../store/authStore';

interface AuthStepOneValues {
  country: Country;
  phoneNumber: string;
}

const AuthStepOne = () => {
  const { startUserAuth } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const initialValues: AuthStepOneValues = {
    country: COUNTRIES.UA,
    phoneNumber: '',
  };

  const validationSchema = yup.object({
    country: yup.object({}),
    phoneNumber: yup
      .string()
      .trim()
      .required("Field can't be empty")
      .test('isPhoneValid', 'Invalid phone number', (value, ctx) => phone(ctx.parent.country.dialCode + value).isValid),
  });

  const { values, errors, handleSubmit, setFieldValue, isSubmitting } = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: async ({ country, phoneNumber }) => {
      const phone = country.dialCode + phoneNumber;
      await startUserAuth({ phone });
      navigate('/auth/step-two');
    },
  });

  const onCountryChange = (country: Country) => setFieldValue('country', country);
  const onPhoneNumberChange = (phoneNumber: string) => setFieldValue('phoneNumber', phoneNumber);

  return (
    <div css={css.container(136)}>
      <form css={css.content} onSubmit={handleSubmit}>
        <h1 css={css.title}>Let&apos;s get started</h1>
        <div>
          <p css={css.inputLabel}>
            <b>Enter your phone number</b>
          </p>
          <PhoneNumberInput
            country={values.country}
            phoneNumber={values.phoneNumber}
            onCountryChange={onCountryChange}
            onPhoneNumberChange={onPhoneNumberChange}
          />
        </div>
        <button type="submit" css={css.button} disabled={!isObjectEmpty(errors) || isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Create account'}
        </button>
        <p css={css.secondaryText} style={{ marginTop: '20px' }}>
          By proceeding, you consent to get WhatsApp or SMS messages, from PhotoDrop and its affiliates to the number
          provided. Text “STOP” to 89203 to opt out.
        </p>
        <p css={css.secondaryText} style={{ marginTop: '38px', letterSpacing: '-0.02em' }}>
          By continuing, you indicate that you have read and agree to our <Link to="/terms-of-use">Terms of Use</Link> &{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </form>
    </div>
  );
};

export default AuthStepOne;
