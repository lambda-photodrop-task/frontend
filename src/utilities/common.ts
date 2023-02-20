import Resizer from 'react-image-file-resizer';

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

export const resizeImage = (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1400,
      285,
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
