import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';

import App from './App';

import './index.css';

const engine = new Styletron();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StyletronProvider value={engine}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyletronProvider>
);
