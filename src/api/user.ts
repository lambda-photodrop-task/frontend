import { User } from '../store/types';
import { instance } from './instance';

export const getUser = async () => instance.get<{ user: User }>('/user/profile');
