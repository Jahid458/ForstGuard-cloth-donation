// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3EK4FD6Qj3kMlEYPOv6Ai183JvPz2OGM",
  authDomain: "cloth-donation-app.firebaseapp.com",
  projectId: "cloth-donation-app",
  storageBucket: "cloth-donation-app.firebasestorage.app",
  messagingSenderId: "1074810118388",
  appId: "1:1074810118388:web:a511887bd6bc62b4ce3ea1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;