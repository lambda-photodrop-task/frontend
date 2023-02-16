export interface AuthStore {
  isLoggedIn: boolean;
  isLoading: boolean;
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

export interface UserStore {
  user: User | null;

  getUser: () => Promise<void>;
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
