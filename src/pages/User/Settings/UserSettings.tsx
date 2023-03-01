import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../../store/userStore';
import { ReactComponent as CtaArrowIcon } from '../../../assets/images/icons/cta-arrow-icon.svg';
import { ReactComponent as PencilIcon } from '../../../assets/images/icons/pencil-icon.svg';
import { settingsLinks } from '../../../utilities/constants';
import * as css from './css';
import SelfieModal, { SelfieModalRef } from '../../../components/SelfieModal';
import { UploadSelfie } from '../../../types/user';

const UserSettings = () => {
  const { user, selfieThumbnail, selfie, getUserSelfie, uploadNewSelfie, notificationPreferences, getUserPreferences } =
    useUserStore((state) => state);
  const [loading, setIsLoading] = useState(false);

  const cropSelfieRef = useRef<SelfieModalRef>(null);

  const handleSelfieCrop = (e: ChangeEvent<HTMLInputElement>) => {
    const avatar = e.target.files?.[0];

    if (!avatar) {
      return;
    }

    cropSelfieRef.current?.load(avatar);
  };

  const handleSelfieUpload = async ({ top, left, file, height, width }: UploadSelfie) => {
    setIsLoading(true);
    await uploadNewSelfie({ top, left, file, height, width });
    setIsLoading(false);
  };

  useEffect(() => {
    if (!selfie.src) getUserSelfie();
    if (!notificationPreferences) getUserPreferences();
  }, [selfie, notificationPreferences]);

  return (
    <div css={css.container}>
      <h2 css={css.title}>{user?.name ? `Welcome, ${user.name}.` : 'Welcome back!'}</h2>
      <div>
        <p css={css.text}>Your Selfie</p>
        <div css={css.avatarContainer}>
          <img src={selfieThumbnail.src} alt="Avatar" />
          <button type="button" css={css.avatarUpload} onClick={() => cropSelfieRef.current?.load(selfie.file!)}>
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

      <SelfieModal
        ref={cropSelfieRef}
        onChange={handleSelfieUpload}
        handleSelfieCrop={handleSelfieCrop}
        loading={loading}
      />
    </div>
  );
};

export default UserSettings;
