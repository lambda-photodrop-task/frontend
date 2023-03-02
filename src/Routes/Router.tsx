import React, { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPhotographer from '../pages/Auth/Photographer';
import AuthStepOne from '../pages/Auth/StepOne';
import AuthStepThree from '../pages/Auth/StepThree';
import AuthStepTwo from '../pages/Auth/StepTwo';
import PhotographerMain from '../pages/Photographer/Main';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfUse from '../pages/TermsOfUse';
import UserMain from '../pages/User/Main';
import UserSettings from '../pages/User/Settings/UserSettings';
import AccountSettings from '../pages/User/Settings/AccountSettings';
import EmailSettings from '../pages/User/Settings/EmailSettings';
import NameSettings from '../pages/User/Settings/NameSettings';
import { useAuthStore } from '../store/authStore';
import { useUserStore } from '../store/userStore';
import NotificationsSettings from '../pages/User/Settings/NotificationsSettings';

const Router = () => {
  const { isLoggedIn, role } = useAuthStore((state) => state);
  const { user } = useUserStore((state) => state);

  console.log(role);

  let Router: ReactNode;
  if (!isLoggedIn) {
    Router = (
      <Routes>
        <Route path="/auth/photographer" element={<AuthPhotographer />} />

        <Route path="/auth/step-one" element={<AuthStepOne />} />
        <Route path="/auth/step-two" element={<AuthStepTwo />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        <Route path="*" element={<Navigate to="/auth/step-one" replace />} />
      </Routes>
    );
  } else if (role === 'User') {
    Router = (
      <Routes>
        {user?.selfieId ? (
          <Route path="/user" element={<UserMain />} />
        ) : (
          <Route path="/auth/step-three" element={<AuthStepThree />} />
        )}

        <Route path="/settings" element={<UserSettings />} />
        <Route path="/settings/account" element={<AccountSettings />} />
        <Route path="/settings/name" element={<NameSettings />} />
        <Route path="/settings/email" element={<EmailSettings />} />
        <Route path="/settings/notifications" element={<NotificationsSettings />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        {user?.selfieId ? (
          <Route path="*" element={<Navigate to="/user" replace />} />
        ) : (
          <Route path="*" element={<Navigate to="/auth/step-three" replace />} />
        )}
      </Routes>
    );
  } else if (role === 'Photographer') {
    Router = (
      <Routes>
        <Route path="/photographer" element={<PhotographerMain />} />

        <Route path="*" element={<Navigate to="/photographer" replace />} />
      </Routes>
    );
  }

  return Router;
};

export default Router;
