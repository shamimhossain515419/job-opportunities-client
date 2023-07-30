// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.VITE_apiKey,
  // authDomain: import.meta.VITE_authDomain,
  // projectId: import.meta.VITE_projectId,
  // storageBucket: import.meta.VITE_storageBucket,
  // messagingSenderId: import.meta.VITE_messagingSenderId,
  // appId: import.meta.VITE_appId,
  // measurementId: import.meta.VITE_measurementId
  apiKey: "AIzaSyDGS8FGCPAOMQWbaMtrHw8N3SLAunKflE4",
  authDomain: "job-opportunities-d498e.firebaseapp.com",
  projectId: "job-opportunities-d498e",
  storageBucket: "job-opportunities-d498e.appspot.com",
  messagingSenderId: "849808041071",
  appId: "1:849808041071:web:b8783b4b7bbfb1abf8199a",
  measurementId: "G-E9R4Z71V3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;