import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0lJojPR5Zw2GG6ZOhs-NNqrNJQ2SE-EE",
  authDomain: "patch-app-482b7.firebaseapp.com",
  projectId: "patch-app-482b7",
  storageBucket: "patch-app-482b7.firebasestorage.app",
  messagingSenderId: "195104096980",
  appId: "1:195104096980:web:eda07c2528473b0366b141"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
