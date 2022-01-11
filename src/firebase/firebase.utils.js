import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASR6PKvHKCCZK2qovUyFEZb3yDZrcH3lY",
  authDomain: "surge-clothingdb.firebaseapp.com",
  projectId: "surge-clothingdb",
  storageBucket: "surge-clothingdb.appspot.com",
  messagingSenderId: "347377518603",
  appId: "1:347377518603:web:bbdf552e1c1d369a0e1f0e",
  measurementId: "G-QYWF880YKL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
