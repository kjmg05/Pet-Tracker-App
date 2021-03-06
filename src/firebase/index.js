import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import getEnvVars from "../../environment";

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = getEnvVars();

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };

const db = firebase.firestore();

export default {
  firebase,
  db,
};
