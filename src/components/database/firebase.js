import firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAkTDxwfY6may-S0b5gInB6WH-OErtuo9A",
    authDomain: "pet-tracker-app-14462.firebaseapp.com",
    projectId: "pet-tracker-app-14462",
    storageBucket: "pet-tracker-app-14462.appspot.com",
    messagingSenderId: "493206544782",
    appId: "1:493206544782:web:0dd9c67d5c577183e204df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db,
  };