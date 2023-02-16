import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAX7FKTEJsUXWG9b7TjPD-tF3ANJ2hCBYU",
  authDomain: "Ваш authDomain",
  databaseURL: "Ваш databaseURL",
  projectId: "Ваш projectId",
  storageBucket: "Ваш storageBucket",
  messagingSenderId: "Ваш messagingSenderId",
  appId: "Ваш appId",
  measurementId: "Ваш measurementId"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
