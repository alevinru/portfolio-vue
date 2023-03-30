import { onValue, ref } from '@firebase/database';
import { database } from '@/fb';
import { useAppStore } from '@/store/app';
import type Gallery from '@/types/gallery';

export function loadAuthor(path: string) {
  const store = useAppStore();
  const authorRef = ref(database, path);
  onValue(authorRef, snapshot => {
    const data = snapshot.val();
    console.log('loadAuthor', data);
    const { name, moto, gallery } = data;
    store.author = {
      name,
      moto,
    };
    store.galleries = Object.keys(gallery)
      .map(id => ({
        id,
        ...gallery[id],
      }));
  });
}
