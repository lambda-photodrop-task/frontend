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
import { useUserStore } from './store/userStore';
import UserMain from './pages/User/Main';
import Footer from './components/Footer';

const App = () => {
  const { isLoggedIn, init } = useAuthStore((state) => state);
  const { user } = useUserStore((state) => state);

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
        {user?.selfieId ? (
          <Route path="/user" element={<UserMain />} />
        ) : (
          <Route path="/auth/step-three" element={<AuthStepThree />} />
        )}

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

  return (
    <Loader>
      <Header />
      {routes}
      {isLoggedIn && <Footer />}
      <Notification />
    </Loader>
  );
};

export default App;
