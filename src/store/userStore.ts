import { create } from 'zustand';
import { getUser } from '../api/user';
import { UserStore } from './types';

export const useUserStore = create<UserStore>()((set, get) => ({
  user: null,

  getUser: async () => {
    const { data } = await getUser();
    set({ user: data.user });
  },
}));
