import { create } from 'zustand';
import {
  createAlbum,
  getPhotographerAlbums,
  getPhotographerPhotosInAlbum,
  getPhotographerProfile,
  getPhotoThumbnail,
  getUsers,
  postPhotosToAlbum,
  tagUsers,
} from '../api/photographer';
import { PhotographerStore } from '../types/store';

export const usePhotographerStore = create<PhotographerStore>()((set, get) => ({
  photographer: null,
  albums: { data: [], status: 'Pending' },
  photos: { data: [], status: 'Pending' },
  users: { data: [], status: 'Pending' },

  getPhotographer: async () => {
    const { data } = await getPhotographerProfile();

    set({ photographer: data.photographer });
  },
  getAlbums: async () => {
    set({ albums: { data: [], status: 'Loading' } });

    const { data } = await getPhotographerAlbums();

    set({ albums: { data: data.albums, status: 'Fullfilled' } });
  },
  createAlbum: async ({ name, location, price }) => {
    const { data } = await createAlbum({ name, location, price });

    set({ albums: { ...get().albums, data: [...get().albums.data, data.album] } });
    // await get().getAlbums();
  },

  getPhotos: async (albumId) => {
    set({ photos: { data: [], status: 'Loading' } });

    const { data } = await getPhotographerPhotosInAlbum(albumId);

    let { photos } = data;

    if (photos.length) {
      photos = await Promise.all(
        data.photos.map(async (photo) => {
          const { data } = await getPhotoThumbnail(photo.id);

          const photoSrc = URL.createObjectURL(data);

          return { ...photo, src: photoSrc };
        })
      );
    }

    set({ photos: { data: photos, status: 'Fullfilled' } });
  },
  addPhotos: async (albumId, files: File[]) => {
    await postPhotosToAlbum(albumId, files);
    await get().getPhotos(albumId);
  },

  getUsers: async () => {
    set({ users: { data: [], status: 'Loading' } });

    const { data } = await getUsers();

    set({ users: { data: data.users, status: 'Fullfilled' } });
  },
  tagUsers: async ({ userIds, photoIds }) => {
    await tagUsers({ userIds, photoIds });
  },
}));
