import { Album, NotificationSettings, Photo, UpdateUser, UploadSelfie, User } from '../types/user';
import { instance } from './instance';

export const getUser = async () => instance.get<{ user: User }>('/user/profile');

export const updateUser = async ({ name, email }: UpdateUser) =>
  instance.patch<{ user: User }>('/user/profile', {
    name,
    email,
  });

export const updateNotificationsSettings = async ({ isUnsubscribed, sendEmail, sendText }: NotificationSettings) =>
  instance.patch('/user/preferences', {
    isUnsubscribed,
    sendEmail,
    sendText,
  });

export const getNotificationsSettings = async () =>
  instance.get<{ preferences: NotificationSettings }>('/user/preferences');

export const updatedNotificationsSettings = async ({ isUnsubscribed, sendEmail, sendText }: NotificationSettings) =>
  instance.patch('/user/preferences', {
    isUnsubscribed,
    sendEmail,
    sendText,
  });

export const uploadNewSelfie = async ({ top, left, file, height, width }: UploadSelfie) => {
  const formData = new FormData();
  formData.append('top', String(top));
  formData.append('left', String(left));
  formData.append('height', String(height));
  formData.append('width', String(width));
  formData.append('file', file);

  return instance.post('/user/selfie', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const getUserSelfieThumbnail = async () => instance.get<Blob>('/user/selfie/thumb', { responseType: 'blob' });

export const getUserSelfie = async () => instance.get<Blob>('/user/selfie', { responseType: 'blob' });

export const getAlbums = async () => instance.get<{ albums: Album[] }>('/user/albums');

export const getPhotos = async () => instance.get<{ photos: Photo[] }>('/user/photos');

export const getPhotoThumbnail = async (photoId: string) =>
  instance.get<Blob>(`/user/photo/${photoId}/thumb`, { responseType: 'blob' });
