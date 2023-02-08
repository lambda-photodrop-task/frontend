import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { COUNTRIES, Country } from 'baseui/phone-input';
import * as css from './css';
import PhoneNumberInput from '../../components/PhoneInput';

const OnboardingStepOne = () => {
  const initialValues = {
    country: COUNTRIES.UA,
    phoneNumber: '',
  };

  const validationSchema = yup.object({
    phoneNumber: yup.string().required("Field can't be empty"),
  });

  const { values, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {},
  });

  const onCountryChange = (country: Country) => setFieldValue('country', country);
  const onPhoneNumberChange = (phoneNumber: string) => setFieldValue('phoneNumber', phoneNumber);

  console.log(values);

  return (
    <div css={css.container}>
      <div css={css.content}>
        <h1 css={css.title}>Let&apos;s get started</h1>
        <div style={{ marginTop: '20px' }}>
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
