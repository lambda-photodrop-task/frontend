import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePhotographerStore } from '../../../store/photographerStore';
import { ReactComponent as PlusIcon } from '../../../assets/images/icons/plus-icon.svg';

import * as css from './css';
import Skeleton from '../../../components/Skeleton';
import PhotoModal from '../../../components/PhotoModal';

const PhotographerAlbumPage = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();

  const { albums, photos, getAlbums, getPhotos } = usePhotographerStore((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!albums.data.length) getAlbums();

    if (!albumId || (albums.data.length && !albums.data.some((album) => album.id === albumId))) {
      navigate('/photographer');
    } else {
      getPhotos(albumId);
    }
  }, [albumId]);

  return (
    <div css={css.container}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Photos</h2>
        <button type="button" css={css.button} onClick={() => setIsModalOpen(true)}>
          <PlusIcon />
        </button>
      </div>
      <div css={css.photosContainer(photos.status === 'Loading')}>
        {photos.status === 'Loading' &&
          Array.from({ length: 3 }, (_, i) => <Skeleton key={`photo-skeleton-${i}`} styles={css.photoItem} />)}

        {photos.status === 'Fullfilled' &&
          !!photos.data.length &&
          photos.data.map((photo) => <div css={css.photoItem(photo.src)} />)}
      </div>

      <PhotoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} albumId={albumId!} />
    </div>
  );
};

export default PhotographerAlbumPage;
