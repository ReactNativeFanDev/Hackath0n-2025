import {initializeApp, getApps, getApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDatabase} from 'firebase/database';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// 🔹 Firebase конфіг
const firebaseConfig = {
  apiKey: 'apiKey',
  authDomain: 'authDomain',
  projectId: 'projectId',
  storageBucket: 'storageBucket',
  messagingSenderId: 'messagingSenderId',
  appId: 'appId',
  databaseURL:
    'databaseURL',
};

GoogleSignin.configure({
  webClientId:
    'webClientId',
});

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getDatabase(app);

export {app, auth, db};
