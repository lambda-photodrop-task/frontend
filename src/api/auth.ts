import { FinishUserAuthResponse } from '../types/auth';
import { instance } from './instance';

export const init = async ({ accessToken }: { accessToken: string }) =>
  instance.get('/auth/user/status', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const refresh = async ({ refreshToken }: { refreshToken: string }) =>
  instance.get<{ accessToken: string }>('/auth/user/login', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

export const initiateUserAuth = async ({ phone }: { phone: string }) =>
  instance.post('/auth/user/login', {
    phone,
  });

export const finishUserAuth = async ({ phone, otp }: { phone: string; otp: string }) =>
  instance.put<FinishUserAuthResponse>('/auth/user/login', {
    phone,
    otp,
  });
