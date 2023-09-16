import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUtkjMs5hWrVTWK0revK2emCU-1yDGx6s",
  authDomain: "amzn-fabb6.firebaseapp.com",
  projectId: "amzn-fabb6",
  storageBucket: "amzn-fabb6.appspot.com",
  messagingSenderId: "785762369541",
  appId: "1:785762369541:web:b5171bb10ff54e128b5c6c",
  measurementId: "G-4Y48G86KWP"
};
// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

export default db;
