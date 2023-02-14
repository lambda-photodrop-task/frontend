import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { finishUserAuth, init, initiateUserAuth } from '../api/auth';
import { AuthStatus, AuthStore } from './types';

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      authStatus: AuthStatus.Loading,
      tokens: { accessToken: '', refreshToken: '' },
      phone: '',

      init: async () => {
        if (!get().tokens.accessToken) {
          set({ authStatus: AuthStatus.StepOne });
          return;
        }

        await init({ accessToken: get().tokens.accessToken });
        set({ authStatus: AuthStatus.StepThree });
      },
      startUserAuth: async ({ phone }: { phone: string }) => {
        await initiateUserAuth({ phone });
        set({ authStatus: AuthStatus.StepTwo, phone });
      },
      finishUserAuth: async ({ phone, otp }: { phone: string; otp: string }) => {
        const response = await finishUserAuth({ phone, otp });
        const { accessToken, refreshToken, user } = response.data;
        set({
          authStatus: user.selfie ? AuthStatus.LoggedIn : AuthStatus.StepThree,
          tokens: { accessToken, refreshToken },
        });
      },
    }),
    {
      name: 'tokens',
      partialize: (state) => ({ tokens: state.tokens }),
    }
  )
);
