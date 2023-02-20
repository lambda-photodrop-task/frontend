import { UploadSelfie } from '../types/user';

export interface AuthStore {
  isLoggedIn: boolean;
  isLoading: boolean;
  role: UserType;
  phone: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };

  init: () => Promise<void>;
  startUserAuth: ({ phone }: { phone: string }) => Promise<void>;
  finishUserAuth: ({ phone, otp }: { phone: string; otp: string }) => Promise<void>;

  photographerAuth: ({ login, password }: { login: string; password: string }) => Promise<void>;
}

export type UserType = 'Admin' | 'User' | 'Photographer' | 'Unknown';

export interface UserStore {
  user: User | null;
  selfieThumbnail: { src: string; file: File | null };

  getUser: () => Promise<void>;
  getUserSelfieThumbnail: () => Promise<void>;
  uploadNewSelfie: ({ top, left, file }: UploadSelfie) => Promise<void>;
}

export interface PhotographerStore {
  photographer: Photographer | null;
}

export interface User {
  id: string;
  phone: string;
  name: string | null;
  email: string | null;
  selfie: string | null;
  selfieThumb: string | null;
  regDate: string;
}

export interface Photographer {
  login: string;
  fullname: string | null;
  email: string | null;
}
