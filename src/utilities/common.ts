import { MouseEvent } from 'react';
import { createResizedImage } from './createResizedImage';

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
    createResizedImage(
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

export const getImageDimensions = async (src: string) => {
  let imageDimensions;
  let orientation;
  let height;
  let width;
  const img = new Image();
  img.src = src;

  const imageLoadPromise = new Promise((resolve) => {
    img.onload = () => {
      height = img.naturalHeight;
      width = img.naturalWidth;

      if (img.naturalWidth > img.naturalHeight) {
        orientation = 'landscape';
      } else if (img.naturalWidth < img.naturalHeight) {
        orientation = 'portrait';
      } else {
        orientation = 'even';
      }
      resolve({ orientation, height, width });
    };
  });

  // eslint-disable-next-line prefer-const
  imageDimensions = await imageLoadPromise;

  return imageDimensions as any;
};

export const handleDeletePreviousFile = (e: MouseEvent<HTMLInputElement>) => {
  (e.target as HTMLInputElement).value = '';
};
