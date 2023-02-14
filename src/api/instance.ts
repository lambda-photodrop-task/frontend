import axios from 'axios';
import { toast } from 'react-hot-toast';
import { getToken } from './common';

const handleErrors = (err: any) => {
  if (err.response.status === 401) {
    const refreshToken = getToken('refreshToken');

    console.log(refreshToken);
    // const response = await refresh({})
  }
  toast.error(err.response.data.message);
  return Promise.reject(err);
};

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.response.use((response) => response, handleErrors);
