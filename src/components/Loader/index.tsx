import React, { FC } from 'react';
import * as css from './css';
import LoaderGif from '../../assets/images/Loader.gif';
import { useAuthStore } from '../../store/authStore';

interface LoaderProps {
  text?: string;
  children: React.ReactNode;
}

const Loader: FC<LoaderProps> = ({ text, children }) => {
  const { isLoading } = useAuthStore((state) => state);

  if (isLoading) {
    return (
      <div css={css.container}>
        <img src={LoaderGif} alt="Loader" />
        {text && <p>{text}</p>}
      </div>
    );
  }

  return <div>{children}</div>;
};

export default Loader;
