import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBQm8MJs5C_-1ccdmSAFmXvIWEhQSIVhjk",
  authDomain: "bartertrade-47507.firebaseapp.com",
  projectId: "bartertrade-47507",
  storageBucket: "bartertrade-47507.appspot.com",
  messagingSenderId: "63144519232",
  appId: "1:63144519232:web:bb1cb5d31822bd8e6b61a5"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()