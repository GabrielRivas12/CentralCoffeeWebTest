import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

//configuracion de la base de datos usando la cuenta de firebase

const firebaseConfig = {
  apiKey: "AIzaSyDHwgy38U17q0XNGMi3W0JZHC5iq_2pgAU",
  authDomain: "centralcoffee-2910d.firebaseapp.com",
  projectId: "centralcoffee-2910d",
  storageBucket: "centralcoffee-2910d.appspot.com",
  messagingSenderId: "958973898936",
  appId: "1:958973898936:web:5eea29827d599de35b444d"
};
//credenciales de firebase : authentication, firestore y storage
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);