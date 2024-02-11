// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5C9ct4NfAVj1TbLx6kZNTyI1UagpbpsE",
  authDomain: "ionic-music-app-c6797.firebaseapp.com",
  projectId: "ionic-music-app-c6797",
  storageBucket: "ionic-music-app-c6797.appspot.com",
  messagingSenderId: "910737430891",
  appId: "1:910737430891:web:54920ceb6a743c7a4f942e",
  measurementId: "G-H364YB0KNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);