import React, { useEffect, useState } from 'react';
import { usePhotographerStore } from '../../../store/photographerStore';
import { ReactComponent as PlusIcon } from '../../../assets/images/icons/plus-icon.svg';
import { ReactComponent as FolderIcon } from '../../../assets/images/icons/folder-icon.svg';

import * as css from './css';
import AlbumModal from '../../../components/AlbumModal';
import Skeleton from '../../../components/Skeleton';

const PhotographerMain = () => {
  const { albums, getAlbums } = usePhotographerStore((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div css={css.container}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2>Albums</h2>
          <button type="button" css={css.button} onClick={() => setIsModalOpen(true)}>
            <PlusIcon />
          </button>
        </div>
        <div css={css.albumsContainer}>
          {albums.status === 'Loading' &&
            Array.from({ length: 3 }, (_, i) => <Skeleton key={`album-skeleton-${i}`} styles={css.albumItem(true)} />)}

          {albums.status === 'Fullfilled' &&
            !!albums.data.length &&
            albums.data.map((album) => (
              <div css={css.albumItem(false)}>
                <FolderIcon />
                <div>
                  <p>{album.name}</p>
                  <p>{album.location}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <AlbumModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PhotographerMain;
