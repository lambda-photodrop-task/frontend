import axios, { InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';
import { refresh } from './auth';

const handleAuthorization = (config: InternalAxiosRequestConfig) => {
  const { accessToken } = useAuthStore.getState().tokens;

  const modifiedConfig = config;

  modifiedConfig.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

const handleErrors = async (err: any) => {
  if (err.response.status === 401) {
    const originalRequest = err.config;
    const { refreshToken } = useAuthStore.getState().tokens;

    const response = await refresh({ refreshToken });

    originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
    useAuthStore.setState({ tokens: { accessToken: response.data.accessToken, refreshToken } });
    return axios(originalRequest);
  }
  toast.error(err.response.data.message);
  return Promise.reject(err);
};

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(handleAuthorization);

instance.interceptors.response.use((response) => response, handleErrors);
