export const isObjectEmpty = (object: Object) => {
  for (const key in object) return false;
  return true;
};
