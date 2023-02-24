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
import UserSettings from '../pages/User/Settings';
import { useAuthStore } from '../store/authStore';
import { useUserStore } from '../store/userStore';

const Router = () => {
  const { isLoggedIn } = useAuthStore((state) => state);
  const { user } = useUserStore((state) => state);

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
  } else {
    Router = (
      <Routes>
        {user?.selfieId ? (
          <Route path="/user" element={<UserMain />} />
        ) : (
          <Route path="/auth/step-three" element={<AuthStepThree />} />
        )}

        <Route path="/settings" element={<UserSettings />} />

        <Route path="/photographer" element={<PhotographerMain />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        {user?.selfieId ? (
          <Route path="*" element={<Navigate to="/user" replace />} />
        ) : (
          <Route path="*" element={<Navigate to="/auth/step-three" replace />} />
        )}
      </Routes>
    );
  }

  return Router;
};

export default Router;
