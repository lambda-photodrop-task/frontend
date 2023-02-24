import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as FrameologyLogo } from '../../assets/images/icons/frameology-logo.svg';
import { ReactComponent as ClimateCertifiedLogo } from '../../assets/images/icons/climate-certified-logo.svg';

import * as css from './css';
import { footerRoutes } from '../../utilities/constants';

const Footer = () => {
  const location = useLocation();

  return (
    <div css={css.container(footerRoutes.includes(location.pathname))}>
      <div css={css.content}>
        <div>
          <div>
            <p css={css.title}>PhotoDrop is brought to you by</p>
            <FrameologyLogo />
          </div>
          <p css={css.text} style={{ marginTop: '20px' }}>
            Our mission is to help people connect with their memories. If you framing some of the photos from your
            experience, please consider using Frameology. It supports the photographers and makes PhotoDrop possible.
          </p>
          <button type="button" css={css.button} style={{ marginTop: '46px' }}>
            Order photos
          </button>
          {window.innerWidth > 825 && (
            <p css={css.text} style={{ marginTop: '60px' }}>
              © 2022 FOM Online Inc
            </p>
          )}
        </div>
        <div>
          <p css={css.text}>Questions? Get in touch - hello@photodrop.me</p>
          <ClimateCertifiedLogo style={{ marginTop: '20px' }} />
          {window.innerWidth > 825 && (
            <p css={css.text} style={{ marginTop: '30px' }}>
              © 2022 FOM Online Inc
            </p>
          )}
          <div css={css.linksContainer}>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
