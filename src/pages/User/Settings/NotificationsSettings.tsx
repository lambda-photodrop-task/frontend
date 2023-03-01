import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Checkbox from '../../../components/Checkbox';
import { useUserStore } from '../../../store/userStore';
import { NotificationSettings } from '../../../types/user';

import * as css from './css';

const NotificationsSettings = () => {
  const navigate = useNavigate();
  const { notificationPreferences, updatedUserPreferences } = useUserStore((state) => state);

  const initialValues: NotificationSettings = {
    isUnsubscribed: notificationPreferences?.isUnsubscribed ?? false,
    sendText: notificationPreferences?.sendText ?? false,
    sendEmail: notificationPreferences?.sendEmail ?? false,
  };

  const validationSchema = yup.object({
    isUnsubscribed: yup.boolean().required("Field can't be empty"),
    sendText: yup.boolean().required("Field can't be empty"),
    sendEmail: yup.boolean().required("Field can't be empty"),
  });

  const { values, handleSubmit, setFieldValue, isSubmitting } = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: async ({ isUnsubscribed, sendEmail, sendText }) => {
      await updatedUserPreferences({ isUnsubscribed, sendEmail, sendText });
      navigate('/settings');
    },
  });

  return (
    <div css={css.container}>
      <h2 css={css.title}>Notification settings</h2>
      {notificationPreferences && (
        <form css={css.checkboxContainer} onSubmit={handleSubmit}>
          <Checkbox
            label="Text messages"
            checked={values.sendText}
            onChange={() => setFieldValue('sendText', !values.sendText)}
          />
          <Checkbox
            label="Email"
            checked={values.sendEmail}
            onChange={() => setFieldValue('sendEmail', !values.sendEmail)}
          />
          <Checkbox
            label="Unsubsribe"
            additionalText="Stop marketing notifications. You will still receive transactional notifications for purchases and when new photos are available."
            checked={values.isUnsubscribed}
            onChange={() => setFieldValue('isUnsubscribed', !values.isUnsubscribed)}
          />
          <button type="submit" css={css.button} disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : 'Save'}
          </button>
        </form>
      )}
    </div>
  );
};

export default NotificationsSettings;
