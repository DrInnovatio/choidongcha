// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4ueP-aBdQPhoHOT18jZNFbY2FbR0dm8c",
  authDomain: "choidongcha-a8edc.firebaseapp.com",
  databaseURL: "https://choidongcha-a8edc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "choidongcha-a8edc",
  storageBucket: "choidongcha-a8edc.appspot.com",
  messagingSenderId: "737494847492",
  appId: "1:737494847492:web:678f606df68a827c786551",
  measurementId: "G-6YV603Q6QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = app.firestore();
