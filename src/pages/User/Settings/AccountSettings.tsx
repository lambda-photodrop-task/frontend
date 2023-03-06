import React from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../../store/userStore';
import { ReactComponent as CtaArrowIcon } from '../../../assets/images/icons/cta-arrow-icon.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/images/icons/phone-icon.svg';
import { ReactComponent as EmailIcon } from '../../../assets/images/icons/email-icon.svg';

import * as css from './css';

const AccountSettings = () => {
  const { user } = useUserStore((state) => state);

  return (
    <div css={css.container}>
      <h2 css={css.title}>Account settings</h2>
      <div css={css.linksContainer}>
        <Link to="/settings/phone" css={css.linkItem}>
          <div className="icon-text-container">
            <PhoneIcon />
            <div>
              <p css={css.linkItemTitle}>
                Phone • <span style={{ color: '#015B08' }}>Verified</span>
              </p>
              <p css={css.linkItemText}>{user?.phone}</p>
            </div>
          </div>
          <CtaArrowIcon />
        </Link>
        <Link to="/settings/email" css={css.linkItem}>
          <div className="icon-text-container">
            <EmailIcon />
            <div>
              <p css={css.linkItemTitle}>Email</p>
              <p css={css.linkItemText}>{user?.email ?? "You haven't specified your email yet"}</p>
            </div>
          </div>
          <CtaArrowIcon />
        </Link>
      </div>
    </div>
  );
};

export default AccountSettings;
