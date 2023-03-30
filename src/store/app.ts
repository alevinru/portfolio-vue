import { defineStore } from 'pinia'
import type Author from '@/types/author';
import Gallery from '@/types/gallery';
import Image from '@/types/image';

export const useAppStore = defineStore('app', {
  state: () => ({
    author: {} as Author,
    galleries: [] as Gallery[],
    imagesMap: new Map<string, Image[]>(),
  }),
})
