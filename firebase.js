import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAX7FKTEJsUXWG9b7TjPD-tF3ANJ2hCBYU",
  authDomain: "compliance-df077.firebaseapp.com",
  dataBaseUrl: "https://compliance-df077-default-rtdb.firebaseio.com",
  projectId: "compliance-df077",
  storageBucket: "compliance-df077.appspot.com",
  messagingSenderId: "128367238603",
  appId: "1:128367238603:web:4cf0488cc449101d2f6a4e",
  measurementId: "G-JBXG6W5R00"
};

firebase.initializeApp(firebaseConfig);

export default firebase;