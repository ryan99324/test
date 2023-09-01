// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8CGwo-AXTg9_c5Yp66YgIQO6gLLzobys",
  authDomain: "test-project-e9303.firebaseapp.com",
  projectId: "test-project-e9303",
  storageBucket: "test-project-e9303.appspot.com",
  messagingSenderId: "149908225685",
  appId: "1:149908225685:web:c9d61aff03ca1f5360659c",
  measurementId: "G-MZV0CYM4LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);