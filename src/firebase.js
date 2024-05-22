import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDrE_UyDPILhytLiRIMqosBJLYgLyD8cXg",
  authDomain: "authenticationwithfireba-96801.firebaseapp.com",
  projectId: "authenticationwithfireba-96801",
  storageBucket: "authenticationwithfireba-96801.appspot.com",
  messagingSenderId: "836108686262",
  appId: "1:836108686262:web:cbcdd7b1f825f2785b2717",
  measurementId: "G-F8E5X5DBJ1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default {app , auth};

