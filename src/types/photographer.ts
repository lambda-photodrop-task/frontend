export interface Photographer {
  login: string;
  fullname: string | null;
  email: string | null;
}

export interface CreateAlbum {
  name: string;
  location: string;
  price?: number;
}
