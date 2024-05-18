// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANDTi18byKde7zNTtjuYu-oj2VJ_n8Kcg",
  authDomain: "sachtruyen-e6952.firebaseapp.com",
  projectId: "sachtruyen-e6952",
  storageBucket: "sachtruyen-e6952.appspot.com",
  messagingSenderId: "347985121383",
  appId: "1:347985121383:web:2149c60176ed0c7ca6c4c2",
  measurementId: "G-VEND486XS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);