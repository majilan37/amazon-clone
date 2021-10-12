import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABPM0FTlX4zU27iFh8BNXNP72yrJ5CMHk",
    authDomain: "clone-e6023.firebaseapp.com",
    projectId: "clone-e6023",
    storageBucket: "clone-e6023.appspot.com",
    messagingSenderId: "160902852732",
    appId: "1:160902852732:web:42703e40c016b1aae0d9f9",
    measurementId: "G-SFGS68HLPC"
  };

const firebaseApp = initializeApp(firebaseConfig)
//const db = firebaseApp.firestore()
const auth = getAuth()
const db = getFirestore()

export {auth, db}
export default firebaseApp