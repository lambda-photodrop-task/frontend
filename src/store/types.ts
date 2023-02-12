export interface UserAuthStore {
  authState: AuthState;
  user: User | null;

  initiateAuth: ({ phone }: { phone: string }) => Promise<void>;
  finishAuth: ({ phone, otp }: { phone: string; otp: string }) => Promise<void>;
}

interface AuthState {
  authStatus: AuthStatus;
  phone: string;
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
