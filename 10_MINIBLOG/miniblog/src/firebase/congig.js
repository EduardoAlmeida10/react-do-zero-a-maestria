// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDOL5_rQcAz032lgRYMt720WB1Fxh0tSAE",
  authDomain: "miniblog-2a972.firebaseapp.com",
  projectId: "miniblog-2a972",
  storageBucket: "miniblog-2a972.firebasestorage.app",
  messagingSenderId: "561583590488",
  appId: "1:561583590488:web:cb6e6d26a117422a0e8e2d",
  measurementId: "G-4J192RYQVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)

export { db };