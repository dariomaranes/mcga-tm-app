// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmYwY1MuC8V1-YQeWDujK2t_QcYhHBXJo",
  authDomain: "mcga-2023.firebaseapp.com",
  projectId: "mcga-2023",
  storageBucket: "mcga-2023.appspot.com",
  messagingSenderId: "860828669119",
  appId: "1:860828669119:web:e4ad4fbc907d0dd043220a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
