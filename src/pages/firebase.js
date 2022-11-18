
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCseC7qLgQHx9aYsoaga_4qjWA27whvFc",
  authDomain: "movie-rec-67232.firebaseapp.com",
  projectId: "movie-rec-67232",
  storageBucket: "movie-rec-67232.appspot.com",
  messagingSenderId: "640850592368",
  appId: "1:640850592368:web:506c6d7cc202fbe91eaab5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;
const app = initializeApp(firebaseConfig);