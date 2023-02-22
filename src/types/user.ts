export interface UploadSelfie {
  top: number;
  left: number;
  file: File;
}

export interface User {
  id: string;
  phone: string;
  name: string | null;
  email: string | null;
  selfieId: string | null;
  regDate: string;
}

export interface Album {
  id: string;
  name: string;
  location: string;
  price: string;
  thumbnail: string;
  isPurchased: boolean;
}
