import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage, ref, listAll } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

export const storageBucket = 'stmv-9dcd4.appspot.com';
export const firebaseConfig = {
  apiKey: 'AIzaSyAk79vthDZbsWeXoZpwrpxuZFye7JarutM',
  authDomain: 'stmv-9dcd4.firebaseapp.com',
  projectId: 'stmv-9dcd4',
  storageBucket,
  messagingSenderId: '177174425539',
  appId: '1:177174425539:web:6921bb0d31d19eb32d9776',
  measurementId: 'G-69N7B0PTT3',
  databaseURL: 'https://stmv-9dcd4-default-rtdb.europe-west1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);

export async function listStorageFolder(folder: string) {
  return listAll(ref(storage, folder));
}

