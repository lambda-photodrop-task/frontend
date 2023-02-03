import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Header from './components/Header';
import TermsOfUse from './pages/TermsOfUse';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
    </Routes>
  </>
);

export default App;
