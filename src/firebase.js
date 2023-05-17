import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBADE_API_KEY,
  authDomain: 'dogsitter-58dc1.firebaseapp.com',
  databaseURL: 'https://dogsitter-58dc1-default-rtdb.firebaseio.com',
  projectId: 'dogsitter-58dc1',
  storageBucket: 'dogsitter-58dc1.appspot.com',
  messagingSenderId: '879731952296',
  appId: process.env.REACT_APP_FIREBADE_APPID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider, storage };
