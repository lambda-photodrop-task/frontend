import { create } from 'zustand';
import { getAlbums, getPhotos, getUser, getUserSelfieThumbnail, uploadNewSelfie } from '../api/user';
import { useAuthStore } from './authStore';
import { UserStore } from './types';

export const useUserStore = create<UserStore>()((set, get) => ({
  user: null,
  albums: {
    data: [],
    status: 'Pending',
  },
  photos: {
    data: [],
    status: 'Pending',
  },

  selfieThumbnail: { src: '', file: null },

  getUser: async () => {
    const { data } = await getUser();
    set({ user: data.user });

    if (data.user.selfieId && !get().selfieThumbnail.src) {
      await get().getUserSelfieThumbnail();
    }
    useAuthStore.setState({ isLoading: false });
  },
  getUserSelfieThumbnail: async () => {
    const { data } = await getUserSelfieThumbnail();

    const src = URL.createObjectURL(data);
    const file = new File([data], 'image.png', { type: 'image/png', lastModified: Date.now() });

    set({ selfieThumbnail: { src, file } });
  },
  uploadNewSelfie: async ({ top, left, file, height, width }) => {
    await uploadNewSelfie({ top, left, file, height, width });

    await get().getUserSelfieThumbnail();
    await get().getUser();
  },
  getAlbums: async () => {
    set({ albums: { data: get().albums.data, status: 'Loading' } });

    const { data } = await getAlbums();

    set({ albums: { data: data.albums, status: 'Fullfilled' } });
  },
  getPhotos: async () => {
    set({ photos: { data: get().photos.data, status: 'Loading' } });

    const { data } = await getPhotos();

    set({ photos: { data: data.photos, status: 'Fullfilled' } });
  },
}));
