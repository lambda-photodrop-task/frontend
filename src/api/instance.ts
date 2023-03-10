import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';
import { refresh } from './auth';

const handleAuthorization = (config: InternalAxiosRequestConfig) => {
  const { accessToken } = useAuthStore.getState().tokens;

  const modifiedConfig = config;

  modifiedConfig.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

const handleResponse = (response: AxiosResponse) => response;

const handleErrors = async (err: AxiosError<{ message: string }>) => {
  if (err.response?.status === 401) {
    const originalRequest = err.config!;
    const { refreshToken } = useAuthStore.getState().tokens;

    if (err.response.data.message === 'Invalid refresh token' || !refreshToken) {
      useAuthStore.setState({ tokens: { accessToken: '', refreshToken: '' }, isLoading: false });
      return Promise.reject(err);
    }

    const { data } = await refresh({ refreshToken });

    originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
    useAuthStore.setState({ tokens: { accessToken: data.accessToken, refreshToken } });

    return axios(originalRequest);
  }

  toast.error(err.response?.data?.message ?? 'Oops..! Something went wrong.');
  return Promise.reject(err);
};

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(handleAuthorization);

instance.interceptors.response.use(handleResponse, handleErrors);
