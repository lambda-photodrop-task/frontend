import React, { useEffect, useState } from 'react';
import ArtistPrintOne from '../../../assets/images/ArtistPrintOne.png';
import ArtistPrintTwo from '../../../assets/images/ArtistPrintTwo.png';
import ArtistPrintThree from '../../../assets/images/ArtistPrintThree.png';
import { useUserStore } from '../../../store/userStore';
import LightboxModal from '../../../components/LightboxModal';
import Skeleton from '../../../components/Skeleton';
import { ReactComponent as EmptyStateIcon } from '../../../assets/images/icons/empty-state-icon.svg';
import * as css from './css';

const UserMain = () => {
  const { albums, photos, getAlbums, getPhotos } = useUserStore((state) => state);

  const artistPrints = [ArtistPrintOne, ArtistPrintTwo, ArtistPrintThree];

  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (albums.status === 'Pending' || photos.status === 'Pending') {
      getAlbums();
      getPhotos();
    }
  }, []);

  return (
    <div css={css.container}>
      {(albums.status === 'Fullfilled' && !albums.data.length) ||
      (photos.status === 'Fullfilled' && !photos.data.length) ? (
        <>
          <div css={css.emptyStateContainer}>
            <EmptyStateIcon />
            <h2>Your photos will drop soon.</h2>
            <p>You will get a text message when they are ready. It can take up to 48 hours.</p>
          </div>
          <div css={css.printsContainer}>
            <h2>Browse Artist Prints</h2>
            <div css={css.printsContent}>
              {artistPrints.map((print, i) => (
                <div css={css.artistPrint(print)} key={`artist-print-${i}`} onClick={() => setSelectedImage(print)} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div css={css.albumsSection}>
            <h2 css={css.sectionTite}>Albums</h2>
            <div css={css.itemsContainer(true)}>
              {albums.status === 'Loading' &&
                Array.from({ length: 3 }, (_, i) => <Skeleton key={`album-skeleton-${i}`} styles={css.album} />)}

              {albums.status === 'Fullfilled' &&
                albums.data.map((album) => (
                  <div css={css.artistPrint(album.src!, album.name)} key={`album-${album.id}`}>
                    <p>{album.name}</p>
                  </div>
                ))}
            </div>
          </div>
          <div css={css.photosSection}>
            <h2 css={css.sectionTite}>All Photos</h2>
            <div css={css.itemsContainer}>
              {photos.status === 'Loading' &&
                Array.from({ length: 2 }, (_, i) => <Skeleton key={`album-skeleton-${i}`} styles={css.photo} />)}

              {photos.status === 'Fullfilled' &&
                photos.data.map((photo) => <div css={css.photoItem(photo.src!)} key={`photo-${photo.id}`} />)}
            </div>
          </div>
          <div css={css.buttonContainer}>
            <button css={css.button} type="submit">
              Unlock your photos
            </button>
          </div>
        </>
      )}
      <LightboxModal isOpen={!!selectedImage} onRequestClose={() => setSelectedImage('')} image={selectedImage} />
    </div>
  );
};

export default UserMain;
