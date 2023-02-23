import { Album, Photo, UploadSelfie, User } from '../types/user';
import { instance } from './instance';

export const getUser = async () => instance.get<{ user: User }>('/user/profile');

export const uploadNewSelfie = async ({ top, left, file }: UploadSelfie) => {
  const formData = new FormData();
  formData.append('top', String(top));
  formData.append('left', String(left));
  formData.append('height', String(285));
  formData.append('width', String(285));
  formData.append('file', file);

  return instance.post('/user/selfie', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const getUserSelfieThumbnail = async () => instance.get<Blob>('/user/selfie/thumb', { responseType: 'blob' });

export const getAlbums = async () => instance.get<{ albums: Album[] }>('/user/albums');

export const getPhotos = async () => instance.get<{ photos: Photo[] }>('/user/photos');
