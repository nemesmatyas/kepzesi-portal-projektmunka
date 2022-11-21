import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB4RDgdTXCgkEu4oE6B4nusHmu-sat_eRg",  
    authDomain: "kepzes-portal-projektmunka.firebaseapp.com",  
    projectId: "kepzes-portal-projektmunka",  
    storageBucket: "kepzes-portal-projektmunka.appspot.com",  
    messagingSenderId: "865485387893",  
    appId: "1:865485387893:web:8373c27dbc59c276e3e03c",  
    measurementId: "G-FZ95YNQGG8"  
  };

  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const storage = getStorage(app);
  