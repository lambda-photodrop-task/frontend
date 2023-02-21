import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  finishUserAuth,
  getRole,
  checkUserAuthorization,
  initiateUserAuth,
  photographerAuth,
  checkPhotographerAuthorization,
} from '../api/auth';
import { AuthStore } from './types';
import { useUserStore } from './userStore';

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      isLoading: true,
      role: 'Unknown',
      tokens: { accessToken: '', refreshToken: '' },
      phone: '',

      init: async () => {
        if (!get().tokens.accessToken) {
          set({ isLoggedIn: false, isLoading: false });
          return;
        }

        const { data } = await getRole();

        if (data.userType === 'User') {
          await checkUserAuthorization();
          await useUserStore.getState().getUser();
        } else if (data.userType === 'Photographer') {
          await checkPhotographerAuthorization();
        }

        set({ isLoggedIn: true, role: data.userType });
      },
      startUserAuth: async ({ phone }: { phone: string }) => {
        await initiateUserAuth({ phone });
        set({ phone });
      },
      finishUserAuth: async ({ phone, otp }: { phone: string; otp: string }) => {
        const { data } = await finishUserAuth({ phone, otp });
        const { accessToken, refreshToken, user } = data;

        set({
          tokens: { accessToken, refreshToken },
        });

        useUserStore.setState({ user });

        if (user.selfieId) {
          await useUserStore.getState().getUserSelfieThumbnail();
        }

        set({
          isLoggedIn: true,
          isLoading: false,
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
