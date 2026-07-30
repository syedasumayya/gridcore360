// src/lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // <-- ADDED THIS

const firebaseConfig = {
  apiKey: "AIzaSyBOh1VAyoNWI8X0yAIWTE1nAx-g4Vu0H4s",
  authDomain: "gridcore360-11.firebaseapp.com",
  projectId: "gridcore360-11",
  storageBucket: "gridcore360-11.firebasestorage.app", 
  messagingSenderId: "1068027677622",
  appId: "1:1068027677622:web:3615bffe2ff9361ec34f17"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const storage = getStorage(app); // <-- ADDED THIS