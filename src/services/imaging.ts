import { listStorageFolder } from '@/fb';
import { useAppStore } from '@/store/app';
import type { StorageReference } from 'firebase/storage';
import type Image from '@/types/image';
import { storageBucket } from '@/fb';

const STORAGE_URL = 'https://firebasestorage.googleapis.com/v0/b';

export async function loadImages(folder: string) {
  const store = useAppStore();
  const { items } = await listStorageFolder(folder);
  store.imagesMap.set(folder, items.map(imageMap))
}

function imageMap(item: StorageReference): Image {
  const { fullPath, name } = item;
  const thumb = fullPath.replace(name, `thumb/thumb_${name}`);
  return {
    url: fireUrl(fullPath),
    thumbnail: fireUrl(thumb),
    name,
    fullPath,
  };
}

function fireUrl(fullPath: string) : string {
  return `${STORAGE_URL}/${storageBucket}/o/${encodeURIComponent(fullPath)}?alt=media`;
}
