import { User } from '../store/types';
import { instance } from './instance';

export const initiateAuth = async ({ phone }: { phone: string }) =>
  instance.post('/auth/user/login', {
    phone,
  });

export const finishAuth = async ({ phone, otp }: { phone: string; otp: string }) =>
  instance.put<User>('/auth/user/login', {
    phone,
    otp,
  });
