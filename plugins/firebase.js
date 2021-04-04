import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");





const firebaseConfig = {
    apiKey: "AIzaSyC3KMEeabfMsWAQw60740gdXDy6WDjk4Mg",
    authDomain: "parkingfilepage.firebaseapp.com",
    projectId: "parkingfilepage",
    storageBucket: "parkingfilepage.appspot.com",
    messagingSenderId: "603689518255",
    appId: "1:603689518255:web:9d5a32426727be8df7005a"
  };
  // Initialize Firebase
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  
  const db = firebase.firestore();
  const auth = firebase.auth();
    
  export {firebase, db, auth}