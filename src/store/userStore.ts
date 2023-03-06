import { create } from 'zustand';
import {
  getAlbums,
  getPhotos,
  getUser,
  getUserSelfie,
  getUserSelfieThumbnail,
  updateUser,
  uploadNewSelfie,
  getNotificationsSettings,
  updateNotificationsSettings,
  getPhotoThumbnail,
} from '../api/user';
import { UserStore } from '../types/store';

export const useUserStore = create<UserStore>()((set, get) => ({
  user: null,
  albums: {
    data: [],
    status: 'Pending',
  },
  photos: {
    data: [],
    status: 'Pending',
  },
  notificationPreferences: null,

  selfieThumbnail: { src: '', file: null },
  selfie: { src: '', file: null },

  getUser: async () => {
    const { data } = await getUser();
    set({ user: data.user });

    if (data.user.selfieId && !get().selfieThumbnail.src) {
      await get().getUserSelfieThumbnail();
    }
  },
  updateUser: async ({ name, email }) => {
    await updateUser({ name, email });

    set({ user: { ...get().user!, name, email } });
  },
  getUserSelfieThumbnail: async () => {
    const { data } = await getUserSelfieThumbnail();

    const src = URL.createObjectURL(data);
    const file = new File([data], 'image.png', { type: 'image/png', lastModified: Date.now() });

    set({ selfieThumbnail: { src, file } });
  },
  getUserSelfie: async () => {
    const { data } = await getUserSelfie();

    const src = URL.createObjectURL(data);
    const file = new File([data], 'image.png', { type: 'image/png', lastModified: Date.now() });

    set({ selfie: { src, file } });
  },
  uploadNewSelfie: async ({ top, left, file, height, width }) => {
    await uploadNewSelfie({ top, left, file, height, width });

    await get().getUserSelfieThumbnail();
    await get().getUser();
  },
  getAlbums: async () => {
    set({ albums: { data: get().albums.data, status: 'Loading' } });

    const { data } = await getAlbums();

    let { albums } = data;

    if (albums.length) {
      albums = await Promise.all(
        data.albums.map(async (album) => {
          const { data } = await getPhotoThumbnail(album.thumbnail);

          const photoSrc = URL.createObjectURL(data);

          return { ...album, src: photoSrc };
        })
      );
    }

    set({ albums: { data: albums, status: 'Fullfilled' } });
  },
  getPhotos: async () => {
    set({ photos: { data: get().photos.data, status: 'Loading' } });

    const { data } = await getPhotos();

    let { photos } = data;

    if (photos.length) {
      photos = await Promise.all(
        data.photos.map(async (photo) => {
          const { data } = await getPhotoThumbnail(photo.id);

          const photoSrc = URL.createObjectURL(data);

          return { ...photo, src: photoSrc };
        })
      );
    }

    set({ photos: { data: photos, status: 'Fullfilled' } });
  },
  getUserPreferences: async () => {
    const { data } = await getNotificationsSettings();

    set({ notificationPreferences: data.preferences });
  },
  updatedUserPreferences: async ({ isUnsubscribed, sendEmail, sendText }) => {
    await updateNotificationsSettings({ isUnsubscribed, sendEmail, sendText });

    set({ notificationPreferences: { isUnsubscribed, sendEmail, sendText } });
  },
}));
