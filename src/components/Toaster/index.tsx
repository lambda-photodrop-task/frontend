import React, { FC } from 'react';
import { Toaster } from 'react-hot-toast';

export const Notification: FC = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      style: {
        fontFamily: 'Futura PT',
        fontWeight: 500,
        width: '270px',
      },
    }}
  />
);
