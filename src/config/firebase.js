// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgNUIAphDj_F4xvuctQnUPjhe5iFqnqwo",
    authDomain: "react-contact-33389.firebaseapp.com",
    projectId: "react-contact-33389",
    storageBucket: "react-contact-33389.appspot.com",
    messagingSenderId: "154980996231",
    appId: "1:154980996231:web:6a6c482afc6a5d50a65422"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);