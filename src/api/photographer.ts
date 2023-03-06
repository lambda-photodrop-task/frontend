import { CreateAlbum, Photographer } from '../types/photographer';
import { Album, Photo } from '../types/user';
import { instance } from './instance';

export const getPhotographerProfile = async () => instance.get<{ photographer: Photographer }>('/photographer/profile');

export const getPhotographerAlbums = async () => instance.get<{ albums: Album[] }>('/photographer/albums');

export const getPhotographerAlbumById = async (albumId: number) =>
  instance.get<{ album: Album }>(`/photographer/albums/${albumId}`);

export const getPhotographerPhotosInAlbum = async (albumId: string) =>
  instance.get<{ photos: Photo[] }>(`/photographer/album/${albumId}/photos`);

export const postPhotosToAlbum = async (albumId: string, files: File[]) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append('files', file);
  });

  return instance.post(`/photographer/album/${albumId}/photos`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const getPhotoThumbnail = async (photoId: string) =>
  instance.get<File>(`/photographer/photo/${photoId}/thumb`, { responseType: 'blob' });

export const createAlbum = async ({ name, location, price }: CreateAlbum) =>
  instance.post<{ album: Album }>('/photographer/album', { name, location, price });
