import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePhotographerStore } from '../../../store/photographerStore';
import { ReactComponent as PlusIcon } from '../../../assets/images/icons/plus-icon.svg';
import { ReactComponent as FolderIcon } from '../../../assets/images/icons/folder-icon.svg';

import * as css from './css';
import AlbumModal from '../../../components/AlbumModal';
import Skeleton from '../../../components/Skeleton';

const PhotographerMainPage = () => {
  const { albums, getAlbums } = usePhotographerStore((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!albums.data.length) getAlbums();
  }, []);

  return (
    <div css={css.container}>
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
            <Link to={`/album/${album.id}`} key={album.id} style={{ textDecoration: 'none' }}>
              <div css={css.albumItem(false)}>
                <FolderIcon />
                <div>
                  <p>{album.name}</p>
                  <p>{album.location}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>

      <AlbumModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PhotographerMainPage;
