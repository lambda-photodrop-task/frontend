import { create } from 'zustand';
import { UserStore } from './types';

export const useUserStore = create<UserStore>()((set, get) => ({
  user: null,

  getUser: async () => {},
}));
