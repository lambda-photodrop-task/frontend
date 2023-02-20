import { create } from 'zustand';
import { getUser, getUserSelfieThumbnail, uploadNewSelfie } from '../api/user';
import { UserStore } from './types';

export const useUserStore = create<UserStore>()((set, get) => ({
  user: null,
  selfieThumbnail: { src: '', file: null },

  getUser: async () => {
    const { data } = await getUser();
    set({ user: data.user });

    await get().getUserSelfieThumbnail();
  },
  getUserSelfieThumbnail: async () => {
    const { data } = await getUserSelfieThumbnail();

    const src = URL.createObjectURL(data);
    const file = new File([data], 'image.png', { type: 'image/png', lastModified: Date.now() });

    set({ selfieThumbnail: { src, file } });
  },
  uploadNewSelfie: async ({ top, left, file }) => {
    await uploadNewSelfie({ top, left, file });

    await get().getUserSelfieThumbnail();
  },
}));
