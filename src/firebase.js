import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwAP3Wd8w6KfuP-WUbSrBn-tV9Nj2NoXA",
  authDomain: "trychat-f19ce.firebaseapp.com",
  projectId: "trychat-f19ce",
  storageBucket: "trychat-f19ce.appspot.com",
  messagingSenderId: "73228063317",
  appId: "1:73228063317:web:3f5efd6727652843ed3adc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
