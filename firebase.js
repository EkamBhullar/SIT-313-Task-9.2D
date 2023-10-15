import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA7mO5jdTxwsUSLbXJ2glq5_ogrZ3D6lr0",
  authDomain: "task-7-2d-f9289.firebaseapp.com",
  projectId: "task-7-2d-f9289",
  storageBucket: "task-7-2d-f9289.appspot.com",
  messagingSenderId: "317538870445",
  appId: "1:317538870445:web:662b56c23ce0f29b1b9224"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const imageDb=getStorage(app)
export const firestoreDb = getFirestore(app);