import React, { useEffect } from 'react';
import { Notification } from './components/Toaster';
import { useAuthStore } from './store/authStore';
import Header from './components/Header';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Router from './Routes/Router';
import { ScrollToTop } from './components/ScrollWrapper';

const App = () => {
  const { init } = useAuthStore((state) => state);

  useEffect(() => {
    init();
  }, []);

  return (
    <Loader>
      <Header />
      <Router />
      <Footer />
      <Notification />
      <ScrollToTop />
    </Loader>
  );
};

export default App;
