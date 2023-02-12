import { create } from 'zustand';
import { finishAuth, initiateAuth } from '../api/auth';
import { AuthStatus, UserAuthStore } from './types';

export const useUserAuthStore = create<UserAuthStore>()((set, get) => ({
  authState: { authStatus: AuthStatus.Loading, phone: '' },
  user: null,

  initiateAuth: async ({ phone }: { phone: string }) => {
    await initiateAuth({ phone });
    set({ authState: { ...get().authState, phone } });
  },
  finishAuth: async ({ phone, otp }: { phone: string; otp: string }) => {
    const response = await finishAuth({ phone, otp });
    set({ authState: { ...get().authState }, user: response.data });
  },
}));
