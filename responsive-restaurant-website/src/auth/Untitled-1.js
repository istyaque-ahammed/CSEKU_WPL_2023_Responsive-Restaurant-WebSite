// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLdatvncx-vd5wHMLUVBfIqsVvcn4czco",
  authDomain: "resturant-website-63232.firebaseapp.com",
  projectId: "resturant-website-63232",
  storageBucket: "resturant-website-63232.appspot.com",
  messagingSenderId: "667798929619",
  appId: "1:667798929619:web:f811341dfeef4cbd4a1426",
  measurementId: "G-HET86LMMXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
