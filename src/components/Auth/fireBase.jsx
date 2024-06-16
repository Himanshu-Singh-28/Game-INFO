import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCp85kGLkTgDFb8337CH6NetBKuf_PY4hM",
  authDomain: "game-info-71b66.firebaseapp.com",
  projectId: "game-info-71b66",
  storageBucket: "game-info-71b66.appspot.com",
  messagingSenderId: "345111024936",
  appId: "1:345111024936:web:75a81ed5fc85c2e2816c1d",
  measurementId: "G-3ZVTSGNDHY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth=getAuth(app);
const provider=new GoogleAuthProvider;

export {Auth,provider};
