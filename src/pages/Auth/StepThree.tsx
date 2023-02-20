import React, { ChangeEvent, useEffect, useRef } from 'react';
import * as css from './css';
import BlankAvatar from '../../assets/images/BlankAvatar.png';
import { ReactComponent as PlusIcon } from '../../assets/images/icons/plus-icon.svg';
import { useUserStore } from '../../store/userStore';
import SelfieModal, { SelfieModalRef } from '../../components/SelfieModal';
import { UploadSelfie } from '../../types/user';

const AuthStepThree = () => {
  const { user, getUser, uploadNewSelfie } = useUserStore((state) => state);

  const cropSelfieRef = useRef<SelfieModalRef>(null);

  const handleSelfieCrop = (e: ChangeEvent<HTMLInputElement>) => {
    const avatar = e.target.files?.[0];

    if (!avatar) {
      return;
    }

    cropSelfieRef.current?.load(avatar);
  };

  const handleSelfieUpload = async ({ top, left, file }: UploadSelfie) => {
    await uploadNewSelfie({ top, left, file });
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <div css={css.container(72)}>
      <div css={css.content}>
        <h1 css={css.title}>Add a selfie</h1>
        <div>
          <p css={css.inputLabel} style={{ textAlign: 'center' }}>
            A selfie allows your photos to be synced with your account.
          </p>
        </div>
        <div css={css.avatarContainer}>
          <img src={BlankAvatar} alt="Avatar" />
          <label css={css.avatarUpload}>
            <PlusIcon />
            <input type="file" accept="image/*" onChange={handleSelfieCrop} />
          </label>
        </div>
      </div>
      <SelfieModal ref={cropSelfieRef} onChange={handleSelfieUpload} />
    </div>
  );
};

export default AuthStepThree;
