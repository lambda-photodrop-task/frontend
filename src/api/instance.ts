import axios from 'axios';
import { toast } from 'react-hot-toast';

const handleErrors = (err: any) => {
  toast.error(err.response.data.message);
  return Promise.reject(err);
};

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.response.use((response) => response, handleErrors);
