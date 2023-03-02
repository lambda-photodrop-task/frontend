import { CreateAlbum, Photographer } from '../types/photographer';
import { Album } from '../types/user';
import { instance } from './instance';

export const getPhotographerProfile = async () => instance.get<{ photographer: Photographer }>('/photographer/profile');

export const getPhotographerAlbums = async () => instance.get<{ albums: Album[] }>('/photographer/albums');

export const getPhotographerAlbumById = async (albumId: number) =>
  instance.get<{ album: Album }>(`/photographer/albums/${albumId}`);

export const createAlbum = async ({ name, location, price }: CreateAlbum) =>
  instance.post<{ album: Album }>('/photographer/album', { name, location, price });
