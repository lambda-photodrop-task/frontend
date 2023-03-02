import { UserType } from '../types/store';
import { FinishUserAuthResponse, PhotographerAuthResponse } from '../types/auth';
import { instance } from './instance';

export const getRole = async () => instance.get<{ userType: UserType }>('/auth/whoami');

export const checkUserAuthorization = async () => instance.get('/auth/user/status');

export const checkPhotographerAuthorization = async () => instance.get('/auth/photographer/login');

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

export const resendConfirmationCode = async ({ phone }: { phone: string }) =>
  instance.patch('/auth/user/login', {
    phone,
  });

export const finishUserAuth = async ({ phone, otp }: { phone: string; otp: string }) =>
  instance.put<FinishUserAuthResponse>('/auth/user/login', {
    phone,
    otp,
  });

export const photographerAuth = async ({ login, password }: { login: string; password: string }) =>
  instance.post<PhotographerAuthResponse>('/auth/photographer/login', {
    login,
    password,
  });
