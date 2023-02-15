import React, { ReactNode, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { Notification } from './components/Toaster';
import AuthPhotographer from './pages/Auth/Photographer';
import AuthStepOne from './pages/Auth/StepOne';
import AuthStepTwo from './pages/Auth/StepTwo';
import AuthStepThree from './pages/Auth/StepThree';
import { useAuthStore } from './store/authStore';
import { AuthStatus } from './store/types';
import Loader from './components/Loader';

const App = () => {
  const { authStatus, init } = useAuthStore((state) => state);

  useEffect(() => {
    init();
  }, []);

  if (authStatus === AuthStatus.Loading) {
    return (
      <Routes>
        <Route path="/" element={<Loader />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  let routes: ReactNode;
  switch (authStatus) {
    case AuthStatus.StepOne: {
      routes = (
        <Routes>
          <Route path="/auth/photographer" element={<AuthPhotographer />} />
          <Route path="/auth/step-one" element={<AuthStepOne />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />

          <Route path="*" element={<Navigate to="/auth/step-one" replace />} />
        </Routes>
      );
      break;
    }
    case AuthStatus.StepTwo: {
      routes = (
        <Routes>
          <Route path="/auth/step-one" element={<AuthStepOne />} />
          <Route path="/auth/step-two" element={<AuthStepTwo />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />

          <Route path="*" element={<Navigate to="/auth/step-two" replace />} />
        </Routes>
      );
      break;
    }
    case AuthStatus.StepThree:
    default: {
      routes = (
        <Routes>
          <Route path="/auth/step-three" element={<AuthStepThree />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />

          <Route path="*" element={<Navigate to="/auth/step-three" replace />} />
        </Routes>
      );
      break;
    }
  }

  return (
    <>
      {routes}
      <Notification />
    </>
  );
};

export default App;
