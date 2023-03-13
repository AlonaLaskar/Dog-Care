import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig  = {
  apiKey: 'AIzaSyCAPo9Ft1DcmCaHO8suhJbJLDL6Eg2GMRI',
  authDomain: 'dogsitter-58dc1.firebaseapp.com',
  databaseURL: 'https://dogsitter-58dc1-default-rtdb.firebaseio.com',
  projectId: 'dogsitter-58dc1',
  storageBucket: 'dogsitter-58dc1.appspot.com',
  messagingSenderId: '879731952296',
  appId: '1:879731952296:web:8559b3bcb14b9e4fb2d09d',
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider };