// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Aquí se cargó todo el código necesario para usar mi coleccion de firestore a mi web/App.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVgnxoNPtRgBJ3aLjM1MM3XQHVOmgyhYc",
  authDomain: "e-commerce-j-sanso.firebaseapp.com",
  projectId: "e-commerce-j-sanso",
  storageBucket: "e-commerce-j-sanso.appspot.com",
  messagingSenderId: "427475358098",
  appId: "1:427475358098:web:360287de4bcc0702c6314b"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Export
export const db = getFirestore(app);