import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import firebase from "firebase";


const settings = {timestampsInSnapshots: true};
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAWt3Wa5yrjwf-4jYNSqibCdRgnttv2Fyo",
  authDomain: "kuis2-887a6.firebaseapp.com",
  projectId: "kuis2-887a6",
  storageBucket: "kuis2-887a6.appspot.com",
  messagingSenderId: "424221311834",
  appId: "1:424221311834:web:507ac95fa1c0e1e74de963",
  measurementId: "G-Z2STN8WGS3"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;