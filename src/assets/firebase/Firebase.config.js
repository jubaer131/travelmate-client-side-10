// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA4ByCdm9PEumTITaMdJ0pfJBMlqpKKx-k",
//   authDomain: "travel-mate-dfde0.firebaseapp.com",
//   projectId: "travel-mate-dfde0",
//   storageBucket: "travel-mate-dfde0.appspot.com",
//   messagingSenderId: "276130735368",
//   appId: "1:276130735368:web:bfc61024c092a565e0f8bd"
// }
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId,
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD4829E5w1GPNbaEtxss5NC4LWGZ6l8hI",
  authDomain: "travel-agency-d08ff.firebaseapp.com",
  projectId: "travel-agency-d08ff",
  storageBucket: "travel-agency-d08ff.appspot.com",
  messagingSenderId: "48589960167",
  appId: "1:48589960167:web:153056cbd5acf191d1c342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);