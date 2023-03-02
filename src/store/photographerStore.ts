import { create } from 'zustand';
import { createAlbum, getPhotographerAlbums, getPhotographerProfile } from '../api/photographer';
import { PhotographerStore } from '../types/store';

export const usePhotographerStore = create<PhotographerStore>()((set, get) => ({
  photographer: null,
  albums: { data: [], status: 'Pending' },

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
    await createAlbum({ name, location, price });
    await get().getAlbums();
  },
}));
