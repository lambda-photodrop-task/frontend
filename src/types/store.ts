import { CreateAlbum, Photographer } from './photographer';
import { Album, NotificationSettings, Photo, UpdateUser, UploadSelfie, User } from './user';

export interface AuthStore {
  isLoggedIn: boolean;
  isLoading: boolean;

  role: UserType;

  phone: string;
  tokens: { accessToken: string; refreshToken: string };

  init: () => Promise<void>;
  startUserAuth: ({ phone }: { phone: string }) => Promise<void>;
  resendConfirmationCode: () => Promise<void>;
  finishUserAuth: ({ phone, otp }: { phone: string; otp: string }) => Promise<void>;

  photographerAuth: ({ login, password }: { login: string; password: string }) => Promise<void>;
}

export type UserType = 'Admin' | 'User' | 'Photographer' | 'Unknown';

export type Status = 'Pending' | 'Loading' | 'Fullfilled';

export interface UserStore {
  user: User | null;
  albums: { data: Album[]; status: Status };
  photos: { data: Photo[]; status: Status };

  notificationPreferences: NotificationSettings | null;

  selfieThumbnail: { src: string; file: File | null };
  selfie: { src: string; file: File | null };

  getUser: () => Promise<void>;
  updateUser: ({ name, email }: UpdateUser) => Promise<void>;

  getUserSelfieThumbnail: () => Promise<void>;
  getUserSelfie: () => Promise<void>;
  uploadNewSelfie: ({ top, left, file }: UploadSelfie) => Promise<void>;

  getAlbums: () => Promise<void>;
  getPhotos: () => Promise<void>;

  getUserPreferences: () => Promise<void>;
  updatedUserPreferences: ({ sendEmail, sendText, isUnsubscribed }: NotificationSettings) => Promise<void>;
}

export interface PhotographerStore {
  photographer: Photographer | null;
  albums: { data: Album[]; status: Status };
  photos: { data: Photo[]; status: Status };

  getPhotographer: () => Promise<void>;

  getAlbums: () => Promise<void>;
  createAlbum: ({ name, location, price }: CreateAlbum) => Promise<void>;

  getPhotos: (albumId: string) => Promise<void>;
  addPhotos: (albumId: string, files: File[]) => Promise<void>;
}
