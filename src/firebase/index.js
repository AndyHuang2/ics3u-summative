import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyBPQiAQ4evMnd24bB37qJor8yyqi3jhczQ",
    authDomain: "summative-a8def.firebaseapp.com",
    projectId: "summative-a8def",
    storageBucket: "summative-a8def.firebasestorage.app",
    messagingSenderId: "598891006310",
    appId: "1:598891006310:web:ec478d180b716ad2f060a7"
  };

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };