// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH3GPRTQhnC27_tW_XHblsbxnTbvjdw18",
  authDomain: "sankalpshree-eba36.firebaseapp.com",
  projectId: "sankalpshree-eba36",
  storageBucket: "sankalpshree-eba36.firebasestorage.app",
  messagingSenderId: "679731911182",
  appId: "1:679731911182:web:a5a6a2e87afd96f9c07a5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };