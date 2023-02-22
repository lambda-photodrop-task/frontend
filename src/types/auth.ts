import { Photographer } from './photographer';
import { User } from './user';

export interface FinishUserAuthResponse {
  refreshToken: string;
  accessToken: string;
  user: User;
}

export interface PhotographerAuthResponse {
  accessToken: string;
  photographer: Photographer;
}
