// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDjyVlY2Y6xzIYzLxYt6urUvYNfCcy1qI0",
  authDomain: "zerowaste-q.firebaseapp.com",
  projectId: "zerowaste-q",
  storageBucket: "zerowaste-q.appspot.com",
  messagingSenderId: "548797400415",
  appId: "1:548797400415:web:90f1a17053710b9ba222ea",
  measurementId: "G-BTS5V7WVDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };
