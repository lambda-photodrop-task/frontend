import { User } from '../store/types';

export interface FinishUserAuthResponse {
  refreshToken: string;
  accessToken: string;
  user: User;
}
