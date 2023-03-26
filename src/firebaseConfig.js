// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAY_5SwkABHjcdfz4NnvbFShf5ViMJAKs",
  authDomain: "authentic-8edb8.firebaseapp.com",
  projectId: "authentic-8edb8",
  storageBucket: "authentic-8edb8.appspot.com",
  messagingSenderId: "1082356895559",
  appId: "1:1082356895559:web:335c9c413b64ab7312c662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)