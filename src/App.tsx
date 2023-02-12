import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Header from './components/Header';
import TermsOfUse from './pages/TermsOfUse';
import { Notification } from './components/Toaster';
import AuthPhotographer from './pages/Auth/Photographer';
import AuthStepOne from './pages/Auth/StepOne';
import AuthStepTwo from './pages/Auth/StepTwo';
import AuthStepThree from './pages/Auth/StepThree';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/auth/photographer" element={<AuthPhotographer />} />

      <Route path="/auth/step-one" element={<AuthStepOne />} />
      <Route path="/auth/step-two" element={<AuthStepTwo />} />
      <Route path="/auth/step-three" element={<AuthStepThree />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />

      <Route path="*" element={<Navigate to="/auth/step-one" replace />} />
    </Routes>
    <Notification />
  </>
);

export default App;
