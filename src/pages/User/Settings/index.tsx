import React from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../../store/userStore';
import { ReactComponent as CtaArrowIcon } from '../../../assets/images/icons/cta-arrow-icon.svg';
import { ReactComponent as PencilIcon } from '../../../assets/images/icons/pencil-icon.svg';
import { settingsLinks } from '../../../utilities/constants';
import * as css from './css';

const UserSettings = () => {
  const { user, selfieThumbnail } = useUserStore((state) => state);

  return (
    <div css={css.container}>
      <h2 css={css.title}>{user?.name ? `Welcome, ${user.name}.` : 'Welcome back!'}</h2>
      <div>
        <p css={css.text}>Your Selfie</p>
        <div css={css.avatarContainer}>
          <img src={selfieThumbnail.src} alt="Avatar" />
          <button type="button" css={css.avatarUpload}>
            <PencilIcon />
          </button>
        </div>
      </div>
      <div css={css.linksContainer}>
        {settingsLinks.map((link) => (
          <Link to={link.link} css={css.linkItem} key={`settings-link-${link.name}`}>
            <div>
              <p css={css.linkItemTitle}>{link.name}</p>
              <p css={css.linkItemText}>{link.description}</p>
            </div>
            <CtaArrowIcon />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserSettings;
