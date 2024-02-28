// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxfz2SME682702RPyc71pRw_0pWE3-odY",
  authDomain: "react-course-a93cc.firebaseapp.com",
  projectId: "react-course-a93cc",
  storageBucket: "react-course-a93cc.appspot.com",
  messagingSenderId: "283636890918",
  appId: "1:283636890918:web:3c5656c358b8a870fd55e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();