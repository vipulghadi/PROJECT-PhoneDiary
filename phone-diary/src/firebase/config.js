import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC1xcOLsS902ufzjp-dD7sfvhEBE-MplAg",
    authDomain: "phone-diary-dfe3d.firebaseapp.com",
    projectId: "phone-diary-dfe3d",
    storageBucket: "phone-diary-dfe3d.appspot.com",
    messagingSenderId: "220013035219",
    appId: "1:220013035219:web:531966df17c7e1aa445e26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)