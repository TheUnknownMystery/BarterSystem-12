import firebase from 'firebase'
require("@firebase/firestore")

 const firebaseConfig = {
    apiKey: "AIzaSyBQm8MJs5C_-1ccdmSAFmXvIWEhQSIVhjk",
    authDomain: "bartertrade-47507.firebaseapp.com",
    projectId: "bartertrade-47507",
    storageBucket: "bartertrade-47507.appspot.com",
    messagingSenderId: "63144519232",
    appId: "1:63144519232:web:c080b0eb7bc1fe466b61a5"
  };  
  
  firebase.initializeApp(firebaseConfig)
export default firebase.firestore()