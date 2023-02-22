import React, { useState } from 'react';
import * as css from './css';
import { ReactComponent as EmptyStateIcon } from '../../../assets/images/icons/empty-state-icon.svg';
import ArtistPrintOne from '../../../assets/images/ArtistPrintOne.png';
import ArtistPrintTwo from '../../../assets/images/ArtistPrintTwo.png';
import ArtistPrintThree from '../../../assets/images/ArtistPrintThree.png';
import { useUserStore } from '../../../store/userStore';
import LightboxModal from '../../../components/LightboxModal';

const UserMain = () => {
  const { albums } = useUserStore((state) => state);

  const artistPrints = [ArtistPrintOne, ArtistPrintTwo, ArtistPrintThree];

  const [selectedImage, setSelectedImage] = useState<string>('');

  return (
    <div css={css.container}>
      <div css={css.emptyStateContainer}>
        <EmptyStateIcon />
        <h2>Your photos will drop soon.</h2>
        <p>You will get a text message when they are ready. It can take up to 48 hours.</p>
      </div>
      <div css={css.printsContainer}>
        <h2>Browse Artist Prints</h2>
        <div css={css.printsContent}>
          {artistPrints.map((print) => (
            <div css={css.artistPrint(print)} onClick={() => setSelectedImage(print)} />
          ))}
        </div>
      </div>
      <LightboxModal isOpen={!!selectedImage} onRequestClose={() => setSelectedImage('')} image={selectedImage} />
    </div>
  );
};

export default UserMain;
