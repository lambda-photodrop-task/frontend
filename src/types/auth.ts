import { Photographer, User } from '../store/types';

export interface FinishUserAuthResponse {
  refreshToken: string;
  accessToken: string;
  user: User;
}

export interface PhotographerAuthResponse {
  accessToken: string;
  photographer: Photographer;
}
