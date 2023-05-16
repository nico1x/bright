import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import config from '../../firebase-config.json';

export const app: FirebaseApp = initializeApp(config);
export const auth: Auth = getAuth(app);
