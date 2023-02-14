export interface AuthStore {
  authStatus: AuthStatus;
  phone: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };

  init: () => Promise<void>;

  startUserAuth: ({ phone }: { phone: string }) => Promise<void>;
  finishUserAuth: ({ phone, otp }: { phone: string; otp: string }) => Promise<void>;
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

export enum AuthStatus {
  Loading = '',
  StepOne = 'step-one',
  StepTwo = 'step-two',
  StepThree = 'step-three',
  LoggedIn = 'logged-in',
}
