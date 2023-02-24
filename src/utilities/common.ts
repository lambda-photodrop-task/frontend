import Resizer from 'react-image-file-resizer';
import { MouseEvent } from 'react';

export const isObjectEmpty = (object: Object) => {
  for (const key in object) return false;
  return true;
};

export const readFile = async (file: File) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });

export const resizeImage = (file: File, orientation: string) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      orientation === 'landscape' ? 2560 : 285,
      orientation === 'landscape' ? 285 : 2560,
      'PNG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'file',
      285,
      285
    );
  });

export const getImageOrientation = async (src: string) => {
  let orientation;
  const img = new Image();
  img.src = src;

  const imageLoadPromise = new Promise((resolve) => {
    img.onload = () => {
      if (img.naturalWidth > img.naturalHeight) {
        orientation = 'landscape';
      } else if (img.naturalWidth < img.naturalHeight) {
        orientation = 'portrait';
      } else {
        orientation = 'even';
      }
      resolve(orientation);
    };
  });

  orientation = await imageLoadPromise;

  return orientation as string;
};

export const handleDeletePreviousFile = (e: MouseEvent<HTMLInputElement>) => {
  (e.target as HTMLInputElement).value = '';
};
