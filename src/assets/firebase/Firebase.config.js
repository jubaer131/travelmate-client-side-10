// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ByCdm9PEumTITaMdJ0pfJBMlqpKKx-k",
  authDomain: "travel-mate-dfde0.firebaseapp.com",
  projectId: "travel-mate-dfde0",
  storageBucket: "travel-mate-dfde0.appspot.com",
  messagingSenderId: "276130735368",
  appId: "1:276130735368:web:8d65687b319667bbe0f8bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);