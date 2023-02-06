import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Header from './components/Header';
import TermsOfUse from './pages/TermsOfUse';
import OnboardingStepOne from './pages/Onboarding/StepOne';
import OnboardingStepTwo from './pages/Onboarding/StepTwo';
import OnboardingStepThree from './pages/Onboarding/StepThree';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/onboarding/step-one" element={<OnboardingStepOne />} />
      <Route path="/onboarding/step-two" element={<OnboardingStepTwo />} />
      <Route path="/onboarding/step-three" element={<OnboardingStepThree />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
    </Routes>
  </>
);

export default App;
