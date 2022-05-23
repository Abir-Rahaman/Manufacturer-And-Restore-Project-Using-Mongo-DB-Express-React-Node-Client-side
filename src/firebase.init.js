// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3_Sdz5Iw0OwGvvbcFu3cfFSwCqo6c8L4",
  authDomain: "assignment-12-authentication.firebaseapp.com",
  projectId: "assignment-12-authentication",
  storageBucket: "assignment-12-authentication.appspot.com",
  messagingSenderId: "775501633730",
  appId: "1:775501633730:web:21128850ad30a75c3dc35b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;