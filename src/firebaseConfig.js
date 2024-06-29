// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA2EG4P4hO07b1z9aBNcmu4t-L57YL7vlA",
    authDomain: "little-lemon-restaurant-55884.firebaseapp.com",
    projectId: "little-lemon-restaurant-55884",
    storageBucket: "little-lemon-restaurant-55884.appspot.com",
    messagingSenderId: "262309500564",
    appId: "1:262309500564:web:a12d55116151b7e8260681",
    measurementId: "G-SVBJZGT38R"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
