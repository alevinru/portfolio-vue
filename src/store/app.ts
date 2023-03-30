import { defineStore } from 'pinia'
import type Author from '@/types/author';
import Gallery from '@/types/gallery';
import Image from '@/types/image';

export const useAppStore = defineStore('app', {
  state: () => ({
    author: {
      name: 'Aleksandr Levin',
      moto: 'Photos of people',
    } as Author,
    galleries: [{
      id: 'ams-2007',
      folder: 'ams-2007',
      title: 'Amsterdam 2007',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/stmv-9dcd4.appspot.com/o/ams-2007%2FAms%20Stormsteeg-Edit.jpg?alt=media',
    }] as Gallery[],
    imagesMap: new Map<string, Image[]>(),
  }),
})
