import React from 'react';
import * as css from './css';
import { ReactComponent as Logo } from '../../assets/images/icons/photodrop-logo.svg';
import { useUserStore } from '../../store/userStore';

const Header = () => {
  const { user, selfieThumbnail } = useUserStore((state) => state);

  return (
    <div css={css.container}>
      <div />
      <Logo />
      <div>{user?.selfieId && <img css={css.avatar} src={selfieThumbnail.src} alt="User Avatar" />}</div>
    </div>
  );
};

export default Header;
