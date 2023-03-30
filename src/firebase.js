// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCou_KN4X_Stv4UfvytKkbeqKTpZPkfvLA",
  authDomain: "badbank-fullstack-capstone.firebaseapp.com",
  projectId: "badbank-fullstack-capstone",
  storageBucket: "badbank-fullstack-capstone.appspot.com",
  messagingSenderId: "501963834021",
  appId: "1:501963834021:web:0154d67e995fe30f90034c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);