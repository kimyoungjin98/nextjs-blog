import { initializeApp } from 'firebase/app';
import getConfig from 'next/config';

export const firebaseInit = () => {
    const { firebaseConfig } = getConfig().publicRuntimeConfig;
    const app = initializeApp(firebaseConfig);
}