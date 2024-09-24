// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAEZhpbw2EkRNeX8esjHo-YGlWkIHcneE",
  authDomain: "craftncrafts-62ae9.firebaseapp.com",
  projectId: "craftncrafts-62ae9",
  storageBucket: "craftncrafts-62ae9.appspot.com",
  messagingSenderId: "983909249293",
  appId: "1:983909249293:web:2dadc2b5c4956034768044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;