import React from 'react';
import * as css from './css';
import { ReactComponent as Logo } from '../../assets/images/photodrop-logo.svg';

const Header = () => (
  <div css={css.container}>
    <Logo />
  </div>
);

export default Header;
