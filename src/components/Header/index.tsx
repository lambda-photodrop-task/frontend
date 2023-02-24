import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/icons/photodrop-logo.svg';
import { ReactComponent as BackArrowIcon } from '../../assets/images/icons/back-arrow-icon.svg';
import { useUserStore } from '../../store/userStore';
import * as css from './css';
import { avatarRoutes, backButtonRoutes } from '../../utilities/constants';

const Header = () => {
  const location = useLocation();

  const { selfieThumbnail } = useUserStore((state) => state);

  return (
    <div css={css.container}>
      <div css={css.backButton(backButtonRoutes.some((route) => route.path === location.pathname))}>
        <Link to={backButtonRoutes.find((route) => route.path === location.pathname)?.link ?? '/'}>
          <BackArrowIcon />
        </Link>
      </div>
      <Logo />
      <div css={css.avatar(avatarRoutes.includes(location.pathname))}>
        <Link to="/settings">
          <img src={selfieThumbnail.src} alt="User Avatar" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
