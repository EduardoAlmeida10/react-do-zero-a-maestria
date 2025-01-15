import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-E4LnCjO2pj9XKiBbAKWnei8Y-3qhD-I",
    authDomain: "miniblog-de36e.firebaseapp.com",
    projectId: "miniblog-de36e",
    storageBucket: "miniblog-de36e.firebasestorage.app",
    messagingSenderId: "330169860273",
    appId: "1:330169860273:web:7f179a4ac2c32134b1a290"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };