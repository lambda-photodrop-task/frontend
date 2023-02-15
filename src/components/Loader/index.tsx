import React, { FC } from 'react';
import * as css from './css';
import LoaderGif from '../../assets/images/Loader.gif';

interface LoaderProps {
  text?: string;
}

const Loader: FC<LoaderProps> = ({ text }) => (
  <div css={css.container}>
    <img src={LoaderGif} alt="Loader" />
    {text && <p>{text}</p>}
  </div>
);

export default Loader;
