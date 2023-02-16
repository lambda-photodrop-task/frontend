import { create } from 'zustand';
import { PhotographerStore } from './types';

export const usePhotographerStore = create<PhotographerStore>()((set, get) => ({
  photographer: null,
}));
