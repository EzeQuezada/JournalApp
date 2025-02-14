// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD52H7L9aW9hCDAgWMgOw33kc8Te25FW_s",
  authDomain: "react-c-d7a53.firebaseapp.com",
  projectId: "react-c-d7a53",
  storageBucket: "react-c-d7a53.firebasestorage.app",
  messagingSenderId: "259973172416",
  appId: "1:259973172416:web:351d0173a7fab999233125"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig); 
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp) 