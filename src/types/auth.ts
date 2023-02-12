export interface FinishAuthResponse {
  refreshToken: string;
  accessToken: string;
  user: {
    id: string;
    phone: string;
    name: string | null;
    email: string | null;
    selfie: string | null;
    selfieThumb: string | null;
    regDate: string;
  };
}
