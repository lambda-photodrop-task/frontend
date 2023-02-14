import { instance } from './instance';

export const getUser = async () => instance.get('/user/profile');
