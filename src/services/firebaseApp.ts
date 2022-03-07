import { initializeApp } from 'firebase/app';
import {
   FacebookAuthProvider,
   getAuth,
   GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
   apiKey: 'AIzaSyAbOVcjxrogap3OelJHBaB6Vb-3azSDzfw',
   authDomain: 'swe-clone.firebaseapp.com',
   projectId: 'swe-clone',
   storageBucket: 'swe-clone.appspot.com',
   messagingSenderId: '796694858652',
   appId: '1:796694858652:web:8e8804a8b30436044d9659',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseFireStorage = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
