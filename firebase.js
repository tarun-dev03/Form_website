import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDLpa9vD07ulF2q7SiMGIZqdrFBUbIJPzI",
    authDomain: "backend-32137.firebaseapp.com",
    projectId: "backend-32137",
    storageBucket: "backend-32137.firebasestorage.app",
    messagingSenderId: "817326640594",
    appId: "1:817326640594:web:89c59b79b43ad990e70c0b",
    measurementId: "G-MCK13KN122",
    databaseURL: "https://backend-32137-default-rtdb.firebaseio.com",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const database = getDatabase(app);
export const provider = new GoogleAuthProvider();
auth.languageCode = 'en'
export { app }