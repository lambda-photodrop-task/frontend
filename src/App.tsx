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
import Header from './components/Header';
import Loader from './components/Loader';
import PhotographerMain from './pages/Photographer/Main';

const App = () => {
  const { isLoggedIn, init } = useAuthStore((state) => state);

  useEffect(() => {
    init();
  }, []);

  let routes: ReactNode;
  if (!isLoggedIn) {
    routes = (
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
    routes = (
      <Routes>
        <Route path="/auth/step-three" element={<AuthStepThree />} />

        <Route path="/photographer/dashboard" element={<PhotographerMain />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        <Route path="*" element={<Navigate to="/auth/step-three" replace />} />
      </Routes>
    );
  }

  return (
    <Loader>
      <Header />
      {routes}
      <Notification />
    </Loader>
  );
};

export default App;
