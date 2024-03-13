// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-bd6cc.firebaseapp.com",
  projectId: "real-estate-bd6cc",
  storageBucket: "real-estate-bd6cc.appspot.com",
  messagingSenderId: "316748308039",
  appId: "1:316748308039:web:4764a7854fa39144015b62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);