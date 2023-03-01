export interface UploadSelfie {
  top: number;
  left: number;
  height: number;
  width: number;
  file: File;
}

export interface UpdateUser {
  name: string | null;
  email: string | null;
}

export interface NotificationSettings {
  isUnsubscribed: boolean;
  sendEmail: boolean;
  sendText: boolean;
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

export interface Photo {
  id: string;
  creationDate: string;
  isPurchased: boolean;
}
