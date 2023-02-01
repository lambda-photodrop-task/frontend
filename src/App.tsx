import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  </>
);

export default App;
