

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAGOo_0JT7aVpoJ3V-oE5NpxZqySGjcRv8",
  authDomain: "ssssss-97ab5.firebaseapp.com",
  projectId: "ssssss-97ab5",
  storageBucket: "ssssss-97ab5.appspot.com",
  messagingSenderId: "1034882432204",
  appId: "1:1034882432204:web:d70720ff0d09f79e345669",
  measurementId: "G-H0J4EGZ4QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Realtime Database and get a reference to the database
const database = getDatabase(app);

export { auth, database }; // Export the 'auth' and 'db' services

export default app;