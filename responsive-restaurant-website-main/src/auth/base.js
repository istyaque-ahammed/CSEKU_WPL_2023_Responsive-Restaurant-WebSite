import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLdatvncx-vd5wHMLUVBfIqsVvcn4czco",
  authDomain: "resturant-website-63232.firebaseapp.com",
  projectId: "resturant-website-63232",
  storageBucket: "resturant-website-63232.appspot.com",
  messagingSenderId: "667798929619",
  appId: "1:667798929619:web:f811341dfeef4cbd4a1426",
  measurementId: "G-HET86LMMXK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export { app, auth, db }; // Export the 'auth' and 'database' services