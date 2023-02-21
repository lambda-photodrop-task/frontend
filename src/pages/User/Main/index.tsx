import React from 'react';
import * as css from './css';
import { ReactComponent as EmptyStateIcon } from '../../../assets/images/icons/empty-state-icon.svg';
import ArtistPrintOne from '../../../assets/images/ArtistPrintOne.png';
import ArtistPrintTwo from '../../../assets/images/ArtistPrintTwo.png';
import ArtistPrintThree from '../../../assets/images/ArtistPrintThree.png';
import { useUserStore } from '../../../store/userStore';

const UserMain = () => {
  const { albums } = useUserStore((state) => state);

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
          <div css={css.artistPrint(ArtistPrintOne)} />
          <div css={css.artistPrint(ArtistPrintTwo)} />
          <div css={css.artistPrint(ArtistPrintThree)} />
        </div>
      </div>
    </div>
  );
};

export default UserMain;
