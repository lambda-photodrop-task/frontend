import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { finishUserAuth, init, initiateUserAuth, photographerAuth } from '../api/auth';
import { AuthStore } from './types';
import { useUserStore } from './userStore';

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      isLoading: true,
      tokens: { accessToken: '', refreshToken: '' },
      phone: '',

      init: async () => {
        if (!get().tokens.accessToken) {
          set({ isLoggedIn: false, isLoading: false });
          return;
        }

        await init();
        set({ isLoggedIn: true, isLoading: false });
      },
      startUserAuth: async ({ phone }: { phone: string }) => {
        await initiateUserAuth({ phone });
        set({ phone });
      },
      finishUserAuth: async ({ phone, otp }: { phone: string; otp: string }) => {
        const { data } = await finishUserAuth({ phone, otp });
        const { accessToken, refreshToken, user } = data;

        useUserStore.setState({ user });
        set({
          isLoggedIn: true,
          tokens: { accessToken, refreshToken },
        });
      },

      photographerAuth: async ({ login, password }: { login: string; password: string }) => {
        const { data } = await photographerAuth({ login, password });
        const { accessToken, photographer } = data;

        set({
          isLoggedIn: true,
          tokens: { accessToken, refreshToken: '' },
        });
      },
    }),
    {
      name: 'tokens',
      partialize: (state) => ({ tokens: state.tokens }),
    }
  )
);
