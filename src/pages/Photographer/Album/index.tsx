import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Select } from 'baseui/select';
import { usePhotographerStore } from '../../../store/photographerStore';
import { ReactComponent as PlusIcon } from '../../../assets/images/icons/plus-icon.svg';

import * as css from './css';
import Skeleton from '../../../components/Skeleton';
import PhotoModal from '../../../components/PhotoModal';

const PhotographerAlbumPage = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();

  const { albums, photos, getAlbums, getPhotos, getUsers, users, tagUsers } = usePhotographerStore((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<{ label: string; id: string }[]>([]);

  useEffect(() => {
    if (!albums.data.length) getAlbums();

    if (!albumId || (albums.data.length && !albums.data.some((album) => album.id === albumId))) {
      navigate('/photographer');
    } else {
      getPhotos(albumId);

      if (!users.data.length) getUsers();
    }
  }, [albumId]);

  const handleSelectPhoto = (photoId: string) => {
    setSelectedPhotos((prev) => {
      if (prev.includes(photoId)) {
        return prev.filter((el) => el !== photoId);
      }

      return [...prev, photoId];
    });
  };

  const handleTagUsers = async () => {
    setIsLoading(true);

    const photoIds = selectedPhotos;
    const userIds = selectedUsers.map((user) => user.id);

    await tagUsers({ userIds, photoIds });

    setIsLoading(false);
    setSelectedPhotos([]);
    setSelectedUsers([]);
  };

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
          photos.data.map((photo) => (
            <div
              css={css.photoItem(photo.src!, selectedPhotos.includes(photo.id))}
              onClick={() => handleSelectPhoto(photo.id)}
            />
          ))}
      </div>

      {!!selectedPhotos.length && (
        <div css={css.tagUsersContainer}>
          <h2>Tag users to selected photos</h2>
          <Select
            options={users.data.map((user) => ({
              label: `${user.phone}${user.name ? ` ${user.name}` : ''}`,
              id: user.id,
            }))}
            value={selectedUsers}
            placeholder="Select users"
            // @ts-ignore
            onChange={(params) => setSelectedUsers(params.value)}
            multi
            overrides={{
              Root: {
                style: () => ({
                  marginTop: '18px',
                  width: '500px',
                }),
              },
            }}
          />
          <button
            type="button"
            css={css.textButton}
            onClick={handleTagUsers}
            disabled={!selectedUsers.length || isLoading}
          >
            {isLoading ? 'Loading...' : 'Save'}
          </button>
        </div>
      )}

      <PhotoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} albumId={albumId!} />
    </div>
  );
};

export default PhotographerAlbumPage;
